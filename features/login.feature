# language: pt

Funcionalidade: login com credenciais válidas

  # CT-001 

  Cenário: Deve permitir o login com credenciais válidas

    Dado que acesso a página de login do SauceDemo
    Quando preencho o campo de usuário com um usuário válido
    E preencho o campo senha com uma senha válida 
    E clico em login
    Então devo ser redirecionado para a página de produtos
    E devo ver a lista de produtos


Funcionalidade: login com credenciais inválidas

  # CT-002

  Cenário: Não deve permitir login com credenciais inválidas

    Dado que acesso a página de login do SauceDemo
    Quando eu preencho o campo de usuário com um usuário inválido 
    E preencho a senha com uma senha inválida 
    E clico em login
    Então devo permanecer na página de login
    E devo receber uma mensagem de erro 'Epic sadface: Username and password do not match any user in this service'


Funcionalidade: login com credenciais vazias

  # CT-003

  Cenário: Não deve permitir login com credenciais vazias

    Dado que acesso a página de login do SauceDemo
    Quando eu preencho o campo de usuário com um usuário vazio 
    E preencho a senha com uma senha vazio 
    E clico em login
    Então devo permanecer na página de login
    E devo receber uma mensagem de erro 'Epic sadface: Username is required'


Funcionalidade: Logout

  # CT-004

  Cenário: Logout pelo menu lateral
  
    Dado que estou logado com o usuário "standard_user"
    Quando abro o menu lateral
    E clico em "Logout"
    Então devo ser redirecionado para a página de login
