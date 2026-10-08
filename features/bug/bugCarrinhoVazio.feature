# language: pt

Funcionalidade: não finalizar compra com carrinho vazio

  # BUG-001
  Cenário: Não deve permitir iniciar checkout sem produtos no carrinho
    Dado que estou na página do carrinho
    E o carrinho está vazio
    Quando clico em "Checkout"
    Então devo continuar na página do carrinho
    E não devo ver o formulário de dados do comprador