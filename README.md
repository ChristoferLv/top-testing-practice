# Testing Practice

Projeto de pratica de testes automatizados desenvolvido como parte da trilha JavaScript do [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice), com foco em **Jest**, **TDD basico** e validacao de funcoes utilitarias.

## Objetivo do Projeto

O objetivo principal era praticar:
- Escrita de testes unitarios com Jest
- Fluxo "escrever testes e fazer passar"
- Estruturacao de casos de teste para cenarios comuns e de borda
- Configuracao de ambiente ESM com Jest usando Babel

## O que e?

Uma colecao de funcoes JavaScript acompanhadas de testes unitarios:
- `capitalize`
- `reverse`
- `calculator` (add, subtract, multiply, divide)
- `caesarCipher`
- `analyzeArray`

## Funcionalidades Testadas

- **Capitalizacao**: primeira letra em maiusculo
- **Reversao de string**: retorno da string invertida
- **Calculadora**: operacoes basicas com dois numeros
- **Cifra de Cesar**: deslocamento de caracteres com preservacao de maiusculas/minusculas e caracteres nao alfabeticos
- **Analise de array**: retorno de media, minimo, maximo e tamanho

## Como usar

1. Entre na pasta do projeto: `Javascript/top-testing-practice`
2. Instale as dependencias:
   `npm install`
3. Rode os testes:
   `npm test`

## Estrutura de Arquivos

- `index.js`: implementacao das funcoes
- `index.test.js`: suite de testes com Jest
- `babel.config.js`: configuracao do Babel para compatibilidade com Jest
- `package.json`: scripts e dependencias do projeto

## Tecnologias Utilizadas

- JavaScript (ES Modules)
- Jest
- Babel (`@babel/preset-env`)

---

Projeto desenvolvido seguindo: [The Odin Project - Testing Practice](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice)

📍 **Repositório principal com todos os projetos**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
