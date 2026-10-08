import { test, expect } from '@playwright/test';

//login 
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

// tenta efetuar o checkout com carrinho vazio 
test('BUG-001:não deve permitir iniciar checkout sem produtos no carrinho',async ({ page }) => {
//o teste é esperado como falha, então a suíte continua verde
  test.fail(true);
// descreve o passo de pré-condição, que é ter o carrinho vazio
    await test.step('Pré-condição: carrinho vazio', async () => {
      await page.goto('https://www.saucedemo.com/cart.html');
      await expect(page.locator('div[data-test="inventory-item"]')).toHaveCount(0);
    });
// descreve o passo de tentar efetuar o checkout com carrinho vazio e valida se a página não é redirecionada para checkout
    await test.step('Esperado: que a página não seja redirecionada para checkout sem produtos no carrinho', async () => {
      await page.locator('button[data-test="checkout"]').click();
      await expect(
      page,
      'Com carrinho vazio, o sistema deveria bloquear o checkout e manter o usuário em /cart.html'
      ).toHaveURL('https://www.saucedemo.com/cart.html');
    });

  });