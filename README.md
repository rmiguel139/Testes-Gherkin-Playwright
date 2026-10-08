🧪 Projeto de QA — Testes E2E de Login e Compra

Projeto de portfólio com casos de teste escritos em Gherkin e automatizados com Playwright, cobrindo os fluxos críticos de autenticação (login) e compra (checkout) de uma aplicação web.


O objetivo é demonstrar o processo completo de QA: da análise de requisitos e escrita dos cenários até a automação, execução e geração de relatórios.


📌 Sumário

Sobre o projeto

Aplicação testada

Tecnologias

Cobertura de testes

Autor


🎯 Sobre o projeto


Este repositório reúne:

Cenários em Gherkin (.feature) que descrevem o comportamento esperado em linguagem natural (Dado / Quando / Então), legíveis para qualquer pessoa do time;
Automação E2E com Playwright, com os passos implementados e organizados;



🛒 Aplicação testada

Nome: Swag Labs
URL: [https://www.saucedemo.com/])

Fluxos cobertos: login, adição de produtos ao carrinho, checkout e finalização da compra.

🛠️ Tecnologias

Ferramenta	Finalidade

Playwright	Automação de testes E2E

Gherkin	Especificação dos cenários (BDD)

JavaScript Implementação dos passos

Node.js	Ambiente de execução


✅ Cobertura de testes



🔐 Login


ID	Cenário	Tipo

CT-001	Login com credenciais válidas	

CT-002	Login com senha incorreta	

CT-003	Login com campos vazios	

CT-004	Logout após login	



Carrinho 🛒


ID	Cenário	Tipo


CT-005	Adicionar produto ao carrinho	

CT-006	Remover produto do carrinho	




🛍️ Checkout


ID	Cenário	Tipo


CT-007	Validar o total da compra (itens) 

CT-008	Finalizar compra com dados válidos	

CT-009	Validar a tentativa de finalizar a compra com dados inválidos

CT-010	Validar checkout com campos obrigatórios vazios	

CT-011  Validar se ao inserir dados válidos finaliza a compra

CT-012  Validar se é possível retornar para página principal



Bug 🚨


ID	Cenário	Tipo


BUG-001 Validar se é possível fazer checkout com carrinho vazio



👤 Autor

Miguel Menezes Evangelista

💼 LinkedIn: linkedin.com/in/miguelmenezes-

🐙 GitHub: github.com/rmiguel139

📧 E-mail: migmenezes.mm2@gmail.com
