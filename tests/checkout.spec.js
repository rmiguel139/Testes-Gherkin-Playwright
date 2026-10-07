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
  await page.locator('button[data-test="remove-sauce-labs-backpack"]').isVisible();
  await page.locator('span[data-test="shopping-cart-badge"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  await page.goto('https://www.saucedemo.com/cart.html');
  await page.locator('button[data-test="checkout"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
});

// verifica se é possível finalizar compra com credenciais válidas e se a página de checkout é exibida corretamente
test('verifica se é possível finalizar compra com credenciais válidas', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/checkout-step-one.html');
  await page.locator('input[data-test="firstName"]').fill('Miguel');
  await page.locator('input[data-test="lastName"]').fill('Menezes');
  await page.locator('input[data-test="postalCode"]').fill('12345');
  await page.locator('input[data-test="continue"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
});

// verifica se é possivel finalizar a compra sem inserir as credenciais, deve retornar uma mensagem de erro
test('verifica se é possível finalizar compra com credenciais inválidas', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/checkout-step-one.html');
  await page.locator('input[data-test="firstName"]').fill('');
  await page.locator('input[data-test="lastName"]').fill('');
  await page.locator('input[data-test="postalCode"]').fill('');
  await page.locator('input[data-test="continue"]').click();
  await expect(page.locator('h3[data-test="error"]')).toHaveText('Error: First Name is required');
});