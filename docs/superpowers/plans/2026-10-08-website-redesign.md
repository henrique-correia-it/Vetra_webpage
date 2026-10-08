# Vetra — plano de implementação do website

> Execução nativa, diretamente na main conforme escolha do proprietário.
> Aplicar superpowers:executing-plans. Sem publicação automática.

**Objetivo:** site moderno, modular, rápido, localizado e acessível, com imagens
artísticas reais da Vetra. Sem Flutter no browser, backend ou acesso a dados reais.

**Arquitetura:** Astro estático, TypeScript para preferências, CSS modular,
conteúdo tipado por idioma e recursos responsivos. Node 24 LTS.

**Spec:** `docs/superpowers/specs/2026-10-08-website-redesign-design.md`.

## Restrições

- Não alterar a app, Supabase, OAuth, credenciais ou identificadores.
- Não gerar APK/AAB, instalar, publicar ou fazer push neste trabalho.
- Manter GitHub Pages, base `/Vetra_webpage/` e `privacy.html`.
- Preservar a versão publicada na raiz até aprovação do novo resultado.
- Oito idiomas: en, pt, pt-br, es, fr, de, it e zh (simplificado).
- Imagens de widgets reais com dados fictícios, nunca dados de utilizadores.
- Preferências bloqueadas e ausência de JavaScript não bloqueiam a apresentação.
- Alvos principais de 44 px e respeito por movimento reduzido.

## Revisão aprovada pelo proprietário

- Idioma inicial segue o browser; escolha manual persistida e links explícitos respeitados.
- Bandeiras existentes na app também no seletor do site.
- Tema com ícone correspondente e propagação circular, sem controlo visual de interruptor.
- Website apenas de apresentação, sem simulação interativa de finanças.
- Contactos do rodapé abrem instruções utilizáveis sem um programa de email.
- Política revista segundo o comportamento atual da app e fontes oficiais.
- Responsável: Henrique Correia; contacto: vetra.app.support@gmail.com.
- Autenticação: Supabase; envio dos emails confirmado pelo proprietário: Gmail.

## Tarefa 1 — Fundação modular

- [x] Astro, TypeScript, scripts, Node 24 e base GitHub Pages.
- [x] Rotas e conteúdo tipado nos oito idiomas.
- [x] Metadados, canonical, hreflang e sitemap.
- [x] Testes de navegação e traduções.

## Tarefa 2 — Apresentação e preferências

- [x] Cabeçalho, apresentação, planeamento, clareza, detalhes, confiança, FAQ e rodapé.
- [x] Temas claro/escuro, idioma do browser e escolha manual.
- [x] Bandeiras, ícone de tema e onda circular.
- [x] Testes de idiomas, armazenamento bloqueado e geometria da animação.
- [x] Revisão visual final após as alterações.

## Tarefa 3 — Imagens

- [x] Reutilizar 64 imagens aprovadas (oito cenas × oito idiomas).
- [x] Validar manifest, dados fictícios, caminhos, dimensões e PNG.
- [x] Astro Picture, WebP responsivo, dimensões explícitas e lazy loading.
- [x] Verificação final do importador e dos recursos publicados.

## Tarefa 4 — Privacidade e contactos

- [x] Conteúdo jurídico separado da apresentação, nos oito idiomas.
- [x] Contacto visível, envio por email e cópia com alternativa manual.
- [x] Eliminação de conta sem exigir reinstalação da app.
- [x] Identificar dados, finalidades, fundamentos, fornecedores, acesso, retenção e direitos.
- [x] Explicar limites da eliminação, partilha e backups; evitar promessas absolutas.
- [x] Verificar todas as rotas e âncoras no resultado estático.

## Tarefa 5 — Verificação e entrega

- [x] Suite focada, Astro check, build e validação de recursos/âncoras.
- [x] Layout 320–1920 px, PT e línguas extensas; tema e seletor; contacto e eliminação.
- [x] Rever diff e guardar decisões/limitações em documentação.
- [x] Commits locais coerentes; apresentar preview e preparar publicação.

LCP <= 2,5 s e CLS <= 0,1 são objetivos, não resultados presumidos.
Verificações de zoom, JavaScript desligado ou movimento reduzido só devem ser
declaradas executadas se houver evidência real.

## Pontos de atenção

Links devem respeitar a base e destinos efetivos. Nenhuma preferência pode
criar um ciclo de redirecionamento. Português do Brasil e chinês tradicional
devem seguir a política de correspondência da app. Permissões do browser
podem falhar; o contacto continua legível. A política não substitui obrigações
operacionais do responsável nem certificação jurídica em todos os países.
