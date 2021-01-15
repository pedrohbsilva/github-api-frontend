# FrontEnd React responsivo para consumir informações do GitHub

O objetivo deste projeto é desenvolver uma aplicação web para consultar os dados da API criado especificamente para consumir dados da API do Github.

Trata-se de uma SPA(Single Page Application) que fornece autenticação utilizando o OAuth do Github, sistemas de gerenciamento de rotas e 3 rotas cada uma com sua funcionalidade específica.

## Como configurar a aplicação

Faça o clone via github do branch dev ou main, instale as dependências utilizando yarn preferencialmente. Crie uma autenticação do OAuth no Github e salve essas informações dentro de um arquivo .env, pode utilizar o .env.sample para criar o seu.

## Como executar a aplicação de forma local

Após a configuração, execute o comando yarn start para inicializar o software.

## Visualização

A SPA foi disponibilizado online via Netlify e pode ser visualizado em:

https://github-api-app-consult.netlify.app

Está aplicação utiliza como base de dados a url https://github-api-backend-challenge.herokuapp.com/
que está disponível para consulta no repositório: https://github.com/pedrohbsilva/github-api-backend

## Melhorias
- Faltou implementar testes.
- Faltou tratamento de erros visuais.

Todo feedback é bem-vindo. 