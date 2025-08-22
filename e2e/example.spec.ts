import { expect, test } from '@playwright/test';

test('hello world', async ({ page }) => {
  await page.goto('/');
  const button = await page.getByText('hello world').textContent();
  expect(button).toBe('hello world');
});

