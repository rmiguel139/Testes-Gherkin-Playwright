// @ts-check
import { test, expect } from '@playwright/test';

// verifica se é possível efetuar login com credenciais válidas e acessa a página de produtos

test('verifica se é possível efetuar login com credenciais válidas', async ({ page }) => {
  await page.goto('https://saucedemo.com');
  await page.locator('input[data-test="username"]').fill('standard_user');
  await page.locator('input[data-test="password"]').fill('secret_sauce');
  await page.locator('input[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

// verifica se é possível efetuar login com credenciais inválidas, deve retornar uma mensagem de erro 

test('verifica se é possível efetuar login com credenciais inválidas', async ({ page }) => {
  await page.goto('https://saucedemo.com');
  await page.locator('input[data-test="username"]').fill('invalid_user');
  await page.locator('input[data-test="password"]').fill('invalid_password');
  await page.locator('input[data-test="login-button"]').click();
  await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

// verifica se é possível efetuar login com credenciais vazias, deve retornar uma mensagem de erro 

test('verifica se é possível efetuar login com credenciais vazias', async ({ page }) => {
  await page.goto('https://saucedemo.com');
  await page.locator('input[data-test="username"]').fill('');
  await page.locator('input[data-test="password"]').fill('');
  await page.locator('input[data-test="login-button"]').click();
  await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Username is required');
});