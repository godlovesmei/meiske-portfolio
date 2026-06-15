import { test, expect, type Page } from '@playwright/test';

const gotoReadyHome = async (page: Page) => {
  await page.goto('/');
  await expect(page.locator('.loader-container')).toBeHidden({ timeout: 7_000 });
};

test.describe('UI Responsiveness', () => {
  test.use({ viewport: { width: 375, height: 812 } });
  
  test('Mobile: should display mobile dock and hide desktop nav', async ({ page }) => {
    await gotoReadyHome(page);
    
    // Desktop nav should be hidden
    const desktopNav = page.locator('.nav-desktop');
    await expect(desktopNav).toBeHidden();

    // Mobile dock should be visible
    const mobileDock = page.locator('.nav-mobile');
    await expect(mobileDock).toBeVisible();
  });

  test('Mobile: HUD minimap and status should be hidden', async ({ page }) => {
    await gotoReadyHome(page);
    
    // HUD elements with .hud-minimap should be hidden on mobile
    await expect(page.locator('.hud-minimap')).toBeHidden();
    await expect(page.locator('.hud-status')).toBeHidden();
    await expect(page.locator('.hud-mobile-top')).toBeVisible();
  });
});
