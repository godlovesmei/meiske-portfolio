import { test, expect, type Page } from '@playwright/test';

const gotoReadyHome = async (page: Page) => {
  await page.goto('/');
  await expect(page.locator('.loader-container')).toBeHidden({ timeout: 7_000 });
};

test.describe('Core Features & Terminal Interaction', () => {
  test('should execute terminal commands successfully', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Interactive terminal is intentionally replaced by action cards on mobile.');

    await gotoReadyHome(page);

    const terminalInput = page.getByRole('textbox');
    await terminalInput.scrollIntoViewIfNeeded();
    await expect(terminalInput).toBeVisible();

    // Test 'whoami' command
    await terminalInput.fill('whoami');
    await terminalInput.press('Enter');
    await expect(page.locator('.terminal-body')).toContainText('Informatics Student at Batam State Polytechnic');

    // Test 'socials' command
    await terminalInput.fill('socials');
    await terminalInput.press('Enter');
    await expect(page.locator('.terminal-body')).toContainText('github.com/godlovesmei');
  });

  test('should expand project cards when READ MORE is clicked', async ({ page }) => {
    await gotoReadyHome(page);

    const readMoreBtn = page.getByRole('button', { name: '[ READ MORE ]' }).first();
    await readMoreBtn.scrollIntoViewIfNeeded();
    await expect(readMoreBtn).toBeVisible();
    await readMoreBtn.click();

    // Verify it changes to COLLAPSE
    await expect(page.getByRole('button', { name: '[ COLLAPSE ]' }).first()).toBeVisible();
  });
});
