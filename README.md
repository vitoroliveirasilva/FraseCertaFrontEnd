# Frase Certa - Front-End

Interface web para a [FraseCertaAPI](https://github.com/vitoroliveirasilva/FraseCertaAPI), que exibe frases motivacionais aleatórias com suporte a múltiplos idiomas, animações suaves e visual moderno.

## ✨ Funcionalidades

- ✅ Exibe frases motivacionais aleatórias com animações
- ✅ Mostra o autor da frase (ou "Desconhecido" se não informado)
- ✅ Suporte a idiomas: **Português** (padrão) e **Inglês**
- ✅ Interface bonita, responsiva e animada
- ✅ Alternância de idioma dinâmica sem recarregar a página
- ✅ Navegação por teclado com foco visível e suporte a leitores de tela

## 🚀 Deploy

A aplicação está hospedada em:

🔗 **[https://frasecerta.netlify.app/](https://frasecerta.netlify.app/)**

É possível também abrir o arquivo `index.html` localmente em qualquer navegador moderno seguindo as instruções de [como usar](#como-usar).

## 🛠️ Como usar

1. Clone este repositório:

```bash
git clone https://github.com/vitoroliveirasilva/FraseCertaFrontEnd.git
cd FraseCertaFrontEnd
```

2. Abra o arquivo `index.html` no seu navegador.

> 💡 Não é necessário configurar um servidor backend local, pois o site consome diretamente a API em nuvem.

## ♿ Acessibilidade

A interface inclui recursos básicos para facilitar o uso com teclado e tecnologias assistivas:

- foco visível no seletor de idioma e no botão de nova frase;
- rótulo acessível associado ao seletor de idioma;
- anúncio das novas frases por meio de uma região dinâmica;
- elementos puramente visuais ignorados por leitores de tela.

## 🌐 API Utilizada

A aplicação consome a [FraseCertaAPI](https://github.com/vitoroliveirasilva/FraseCertaAPI), disponível publicamente em:

```
https://frasecertaapi-680953228709.us-central1.run.app/frase?lang=pt
```

Parâmetros aceitos:

* `lang=pt` → Frase em Português
* `lang=en` → Frase em Inglês

## 📁 Estrutura do Projeto

```
FraseCertaFrontEnd/
├── index.html
└── src/
    └── css/
    │   └── style.css
    └── js/
        └── script.js
```

## 👤 Autor

**Vitor Oliveira Silva**
🔗 [https://github.com/vitoroliveirasilva/FraseCertaFrontEnd](https://github.com/vitoroliveirasilva/FraseCertaFrontEnd)

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT.
O arquivo da licença está disponível na raiz do repositório: [`LICENSE`](./LICENSE)
