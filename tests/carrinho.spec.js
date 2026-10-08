import { test, expect } from '@playwright/test';
// faz o login antes de validar o carrinho de compras, adicionando um produto e verificando se ele foi adicionado corretamente  
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
// verifica se é possível adicionar um produto ao carrinho de compras e se o botão de remover aparece após a adição do produto
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('button[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('button[data-test="remove-sauce-labs-backpack"]').isVisible();
  await page.locator('button[data-test="remove-sauce-labs-bike-light"]').isVisible();
  await page.locator('span[data-test="shopping-cart-badge"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

});
// verifica se é possível remover um produto do carrinho de compras e verifica se o carrinho está vazio após a remoção do produto
test('verifica se é possível remover um produto do carrinho', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/cart.html');
  const cartItems = page.locator('div[data-test="inventory-item"]');
  await expect(cartItems).toHaveCount(2);
  await page.locator('button[data-test="remove-sauce-labs-backpack"]').click();
  await expect(cartItems).toHaveCount(1);
});

// verifica se o carrinho de compras contém um produto após a adição
test('verifica se existe um produto no carrinho', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/cart.html');
  await expect(page.locator('div[data-test="inventory-item"]')).toHaveCount(2);
});

// verifica se a página possui o botão de continuar comprando e se ele redireciona para a página de produtos
test('verifica se a página possui o botão de continuar comprando e se ele redireciona para a página de produtos', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/cart.html');
  await page.locator('button[data-test="continue-shopping"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

// verifica se a página possui o botão de finalizar compra e se ele redireciona para a página de checkout
test('verifica se a página possui o botão de finalizar compra e se ele redireciona para a página de checkout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/cart.html');
  await page.locator('button[data-test="checkout"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
});