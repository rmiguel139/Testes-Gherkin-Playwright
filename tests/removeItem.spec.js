import { test, expect } from '@playwright/test';
// faz o login antes de validar o carrinho de compras, adicionando um produto e verificando se ele foi adicionado corretamente  
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('button[data-test="remove-sauce-labs-backpack"]').isVisible();
  await page.locator('span[data-test="shopping-cart-badge"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
});

// verifica se é possível remover um produto do carrinho de compras e verifica se o carrinho está vazio após a remoção do produto
test('verifica se é possível remover um produto do carrinho', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/cart.html');
  const cartItems = page.locator('div[data-test="inventory-item"]');
  await expect(cartItems).toHaveCount(1);
  await page.locator('button[data-test="remove-sauce-labs-backpack"]').click();
  await expect(cartItems).toHaveCount(0);
});
