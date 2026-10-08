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
  await page.goto('https://www.saucedemo.com/cart.html');
  await page.locator('button[data-test="continue-shopping"]').isVisible();
  await page.locator('button[data-test="checkout"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
});

// verifica se é possível fazer checkout da compra com credenciais válidas e se a página de checkout é exibida corretamente
test('verifica se é possível fazer checkout da compra com credenciais válidas', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/checkout-step-one.html');
  await page.locator('input[data-test="firstName"]').fill('Miguel');
  await page.locator('input[data-test="lastName"]').fill('Menezes');
  await page.locator('input[data-test="postalCode"]').fill('12345');
  await page.locator('input[data-test="continue"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
});

// verifica se é possivel fazer checkout da compra com credeciais vazias, deve retornar uma mensagem de erro
test('verifica se é possível fazer checkout com credeciais vazias', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/checkout-step-one.html');
  await page.locator('input[data-test="firstName"]').fill('');
  await page.locator('input[data-test="lastName"]').fill('');
  await page.locator('input[data-test="postalCode"]').fill('');
  await page.locator('input[data-test="continue"]').click();
  await expect(page.locator('h3[data-test="error"]')).toHaveText('Error: First Name is required');
});

// verifica se é possivel fazer checkout da compra sem inserir uma credencial, deve retornar uma mensagem de erro
test('verifica se é possível fazer checkout com campo nome vazio', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/checkout-step-one.html');
  await page.locator('input[data-test="firstName"]').fill('');
  await page.locator('input[data-test="lastName"]').fill('Menezes');
  await page.locator('input[data-test="postalCode"]').fill('12345');
  await page.locator('input[data-test="continue"]').click();
  await expect(page.locator('h3[data-test="error"]')).toHaveText('Error: First Name is required');
});

// verifica se é possivel fazer checkout da compra sem inserir uma credencial, deve retornar uma mensagem de erro
test('verifica se é possível fazer checkout com campo segundo nome vazio', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/checkout-step-one.html');
  await page.locator('input[data-test="firstName"]').fill('Miguel');
  await page.locator('input[data-test="lastName"]').fill('');
  await page.locator('input[data-test="postalCode"]').fill('12345');
  await page.locator('input[data-test="continue"]').click();
  await expect(page.locator('h3[data-test="error"]')).toHaveText('Error: Last Name is required');
});

// verifica se é possivel fazer checkout da compra sem inserir uma credencial, deve retornar uma mensagem de erro
test('verifica se é possível fazer checkout com campo código postal vazio', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/checkout-step-one.html');
  await page.locator('input[data-test="firstName"]').fill('Miguel');
  await page.locator('input[data-test="lastName"]').fill('Menezes');
  await page.locator('input[data-test="postalCode"]').fill('');
  await page.locator('input[data-test="continue"]').click();
  await expect(page.locator('h3[data-test="error"]')).toHaveText('Error: Postal Code is required');
});

//verifica se o valor total da compra é exibido corretamente na página de checkout
test('verifica se o valor total da compra é exibido corretamente na página de checkout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/checkout-step-two.html');
  await page.locator('div.summary_subtotal_label').isVisible();
  await expect(page.locator('div.summary_subtotal_label')).toHaveText('Item total: $39.98');
});

//  verifica se é possível finalizar a compra com credenciais válidas e se é possivel retornar para a página de produtos após finalizar a compra
test('verifica se é possível finalizar compra com credenciais válidas', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/checkout-step-two.html');
  await page.locator('button[data-test="finish"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
  await page.locator('h2[data-test="generate-pdf-order"]').isVisible();
  await page.locator('button[data-test="back-to-products"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
