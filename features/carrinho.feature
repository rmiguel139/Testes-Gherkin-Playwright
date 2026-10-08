# language: pt


Funcionalidade: adicionar produto ao carrinho

  # CT-005

  Cenário: deve ser possível adicionar produto ao carrinho
    Dado que estou logado com o usuário "standard_user"
    E estou na página de produtos
    Quando adiciono o produto "Sauce Labs Backpack" ao carrinho
    Então o contador do carrinho deve exibir "1"
    E o botão do produto deve mudar para "Remove"
    E ao abrir o carrinho devo ver o produto "Sauce Labs Backpack"


Funcionalidade: remover produto ao carrinho

  # CT-006

  Cenário: deve ser possível remover produto ao carrinho
    Dado que adicionei o produto "Sauce Labs Backpack" ao carrinho
    E estou na página do carrinho
    Quando removo o produto "Sauce Labs Backpack"
    Então o produto "Sauce Labs Backpack" não deve aparecer no carrinho
    