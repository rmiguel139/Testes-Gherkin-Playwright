# language: pt


Funcionalidade: validar total da compra

  # CT-007 Validar o total da compra (itens)

  Cenário: validar se o valor 'item total' está certo
    Dado que adiciono os produtos 'Sauce Labs Backpack' e 'Sauce Labs Bike Light' ao carrinho
    E estou na página do carrinho
    E Clico em checkout
    Quando faço o checkout com dados válidos e clico em continue
    Então vou para a página de finalizar a compra 
    E o valor do Item total deve ser: $39.98
 

Funcionalidade: Checkout com dados válidos 

  #CT-008 validar a tentativa de finalizar compra com dados válidos

    Cenário: verificar se é possível fazer checkout com dados válidos 
      Dado que adiciono os produtos 'Sauce Labs Backpack' e 'Sauce Labs Bike Light' ao carrinho
      E estou na página de checkout
      Quando preencho o checkout com dados válidos
      E clico em "Continue"
      Então devo ser redirecionado para a página de finalizar compra
  

Funcionalidade: Checkout com dados inválidos 

  #CT-009 validar a tentativa de finalizar compra com dados inválidos

    Cenário: verificar se é possível fazer checkout com dados inválidos 
      Dado que adiciono os produtos 'Sauce Labs Backpack' e 'Sauce Labs Bike Light' ao carrinho
      E estou na página de checkout
      Quando preencho o checkout com dados inválidos
      E clico em "Continue"
      Então devo continuar na página de checkout 
      E devo receber uma mensagem de erro Error: First Name is required


Funcionalidade: Checkout com campos vazios 

  #CT-010 validar a tentativa de finalizar compra com campos vazios 

    Cenário: verificar se é possível fazer checkout com campos vazios 
      Dado que adiciono os produtos 'Sauce Labs Backpack' e 'Sauce Labs Bike Light' ao carrinho
      E estou na página de checkout
      Quando eu preencho o campo de primeiro nome com um nome vazio 
      E preencho o campo de último nome com um nome vazio 
      E clico em "Continue"
      Então devo continuar na página de checkout 
      E devo receber uma mensagem de erro: First Name is required


Funcionalidade: finalizar compra com dados válidos 

  #CT-011 validar se é possível finalizar compra com dados válidos

    Cenário: verificar se é possível finalizar compra com dados válidos
      Dado que adiciono os produtos 'Sauce Labs Backpack' e 'Sauce Labs Bike Light' ao carrinho
      E estou na página de checkout
      Quando preencho o checkout com dados válidos
      E clico em "Continue"
      E clico em "Finish"
      Então devo ser direcionado para a página de compra concluída
      E devo ver a mensagem "Thank you for your order!"



Funcionalidade: voltar ao menu principal após finalizar a compra 

  #CT-012 Validar se é possível retornar para página principal após finalizar a compra

    Dado que finalizei uma compra com o produto "Sauce Labs Backpack"  e 'Sauce Labs Bike Light'
    Quando clico em "Back Home"
    Então devo ser direcionado para a página de produtos
    E devo ver a lista de produtos
    E o contador do carrinho não deve ser exibido