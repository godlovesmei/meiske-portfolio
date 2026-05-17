import { test, expect } from '@playwright/test';

test.describe('Core Features & Terminal Interaction', () => {
  test('should execute terminal commands successfully', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to contact section to make terminal visible
    await page.click('text=CONTACT');
    
    // Wait for the terminal to be in viewport
    const terminalInput = page.locator('.terminal-input');
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
    await page.goto('/');
    
    // Scroll to projects
    await page.click('text=PROJECTS');
    
    // Find the first "READ MORE" button and click it
    const readMoreBtn = page.locator('text=[ READ MORE ]').first();
    await expect(readMoreBtn).toBeVisible();
    await readMoreBtn.click();

    // Verify it changes to COLLAPSE
    await expect(page.locator('text=[ COLLAPSE ]').first()).toBeVisible();
  });
});
