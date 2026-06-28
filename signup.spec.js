import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://authorized-partner.vercel.app/register?step=setup');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Arjina');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Shrestha');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('user@gmail.com');
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('9861000000');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('Secure@123');
  await page.locator('input[name="confirmPassword"]').click();
  await page.locator('input[name="confirmPassword"]').fill('Secure@123');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('.lg\\:max-w-\\[550px\\]').click();
  await expect(page.getByRole('textbox')).toBeVisible();
  
});