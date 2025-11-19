# 🚀 Deploy Angular no GitHub Pages – Guia Premium

Este repositório contém meu projeto Angular publicado no **GitHub Pages**.
Utilizando uma estrutura limpa, otimizada e configurada manualmente para garantir total controle sobre o deploy.

Abaixo está um guia completo e profissional descrevendo o processo utilizado — servindo como documentação, estudo e portfólio.

---

## 🌀 **Visite o Projeto Online**

👉 **[https://rbnigro.github.io/Arduino/](https://rbnigro.github.io/Arduino/)**

---

# 📦 Estrutura do Projeto

Este projeto foi desenvolvido em Angular e construído utilizando:

* **Angular CLI 19**
* **Node 22**
* **Build otimizado** com `ng build`
* Publicação via **branch `gh-pages`**

A pasta final publicada é a `dist/arduino/browser`, contendo os arquivos estáticos gerados pelo Angular.

---

# 📘 **Passo a passo usado para o deploy**

Este é o processo completo utilizado para colocar este projeto Angular no ar via GitHub Pages.

---

## 1️⃣ Ajustar o `baseHref` para o subdiretório do GitHub Pages

O GitHub Pages usa o nome do repositório como caminho base. Por isso, o Angular precisa ser buildado assim:

```bash
ng build --base-href="/Arduino/"
```

Isso garante que rotas, scripts e assets funcionem corretamente no ambiente de produção.

---

## 2️⃣ Gerar os artefatos de build

A saída do Angular ficou em:

```
dist/arduino/browser
```

Essa pasta contém **todo o conteúdo publicado**.

---

## 3️⃣ Criar e enviar a branch `gh-pages`

O deploy foi feito manualmente para total controle:

```bash
cd dist/arduino/browser

git init
git checkout -b gh-pages
git remote add origin https://github.com/rbnigro/Arduino.git

git add .
git commit -m "Deploy Angular App"
git push -f origin gh-pages
```

---

## 4️⃣ Configurar GitHub Pages

Em **Settings → Pages**:

* **Source:** Deploy from a branch
* **Branch:** `gh-pages`
* **Folder:** `/ (root)`

> Obs.: O botão *Save* pode permanecer desabilitado. Isso é normal se as opções já estão selecionadas.

---

## 5️⃣ Aguardar o processamento

O GitHub leva entre **1 e 5 minutos** para publicar.

Após isso, o site fica disponível no endereço:

```
https://rbnigro.github.io/Arduino/
```

---

# 🛠️ Problemas comuns e como foram resolvidos

### ✔️ Branch sem arquivos

Ao publicar diretamente o build na `gh-pages`, tudo funcionou corretamente.

### ✔️ 404 ao acessar o site

O `baseHref` foi configurado corretamente, eliminando o problema.

### ✔️ Botão Save desabilitado

Comportamento normal quando não há alterações.

---

# ✨ Conclusão

Este repositório demonstra:

* domínio do fluxo de build Angular
* publicação manual avançada com Git
* configuração correta do GitHub Pages
* conhecimento de estrutura de aplicações SPA em ambiente estático

Se você deseja usar isto como referência para seus próprios projetos, fique à vontade.

---

## 📬 Contato

**Ronneynigro**

🔗 GitHub: [https://github.com/rbnigro](https://github.com/rbnigro)

📩 Para colaborações ou dúvidas, fique à vontade para abrir uma *issue* ou enviar mensagem.

---

> *Este arquivo serve como documentação oficial e como portfólio profissional, demonstrando domínio do ciclo completo de deploy front-end.*
