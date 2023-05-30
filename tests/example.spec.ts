import { test, expect } from '@playwright/test';

test('acessando a página do playwright', async ({ page }) => {
   // actions
   await page.goto('https://playwright.dev/');

   // Locator
   const botaoGetStarted = page.getByText('Get started');

   // expects / verificações
   //await expect(page.getByText('Get started')).toBeVisible();
   await expect(botaoGetStarted).toBeVisible();
})