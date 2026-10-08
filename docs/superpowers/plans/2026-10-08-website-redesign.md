# Vetra Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. For this project, native execution is recommended; do not delegate without the owner's approval.

**Goal:** Construir um site Vetra modular, bonito e localizado, com imagens reais e uma mini-demo independente da app móvel.

**Architecture:** Astro gera HTML estático; TypeScript é reservado aos controlos e à mini-demo carregada sob pedido. Conteúdo, apresentação, imagens e estado fictício ficam separados. Manter o site publicado até o proprietário autorizar a substituição.

**Tech Stack:** Astro, TypeScript, CSS, Vitest e Node 24 LTS; PowerShell para reutilizar o gerador de imagens da app. Sem React, Flutter no browser, backend ou Supabase.

**Spec:** `docs/superpowers/specs/2026-10-08-website-redesign-design.md` — aprovada pelo proprietário em 8 de outubro de 2026.

## Global Constraints

- Não modificar a aplicação móvel, o Supabase, credenciais, identificadores de plataforma ou configurações OAuth.
- Não gerar APK/AAB nem instalar a aplicação como parte deste trabalho.
- Manter o alojamento GitHub Pages e a base `/Vetra_webpage/`.
- Preservar o endereço público `privacy.html`, `vetra.app.support@gmail.com` e o pedido de eliminação de conta.
- Inglês predefinido; rotas adicionais `pt/`, `pt-br/`, `es/`, `fr/`, `de/`, `it/` e `zh/`.
- Imagens reais com dados fictícios, sem emulador, captura manual ou imagens geradas por IA.
- Montantes da demo em unidades mínimas inteiras; EUR no exemplo; dados apenas em memória.
- Respeitar `prefers-reduced-motion`; conteúdo essencial utilizável sem JavaScript.
- Alvos de toque de pelo menos 44 px nos controlos principais; verificar 320–1920 px e zoom de 200%.
- LCP <= 2,5 s e CLS <= 0,1 são objetivos a medir, não resultados presumidos.
- Não publicar no GitHub Pages nem alterar definições de alojamento sem autorização.

## Review Focus

1. Base GitHub Pages e páginas localizadas: nenhum link ou recurso aponta por engano à raiz do domínio (tarefa 1 e 5).
2. Alemão, francês, chinês e zoom: títulos, navegação e valores não são cortados nem provocam scroll horizontal (tarefa 2 e 5).
3. JavaScript, armazenamento ou importação da demo indisponíveis: apresentação, loja e política continuam acessíveis (tarefa 2 e 4).
4. Vírgula/ponto decimal e submissão inválida: sem centésimos perdidos, valores negativos, estado parcialmente alterado ou injeção de HTML (tarefa 4).
5. Imagens antigas/incompletas ou fonte fora da pasta autorizada: rejeitar o lote sem apagar outros ficheiros nem publicar recursos incompletos (tarefa 3).

## Ambiente e comandos

Diretório: `C:/Projetos/Vetra_webpage`. O Node global é `v25.9.0`; não o usar
para esta implementação. Runtime disponível e verificado: `v24.19.0` em
`C:/Users/hcorr/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe`.

Adicionar a pasta desse runtime ao início do PATH apenas na sessão de trabalho.
Confirmar a versão antes de instalar dependências. Não alterar o PATH
permanente nem o Node do proprietário. O `npm.cmd` global pode selecionar o seu
próprio Node 25; neste computador executar o CLI npm diretamente com Node 24:

```powershell
$vetraNode = 'C:/Users/hcorr/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe'
$vetraNpm = 'C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js'
& $vetraNode $vetraNpm run build
```

Os comandos `npm.cmd` abaixo são abreviaturas desse par Node/CLI nesta sessão.
Na primeira instalação, consultar as versões estáveis e engines dos pacotes;
guardar o lockfile. CI futura usa Node 24, não um caminho específico do computador.

## Estrutura e fronteiras

- `src/config/site.ts`: base, origem, loja, suporte e informação de disponibilidade.
- `src/content/{types,locales,copy}.ts`: contrato e oito traduções, incluindo demo.
- `src/layouts/SiteLayout.astro`: documento, metadados, estilos e navegação comum.
- `src/pages/{index,[locale]/index}.astro`: rotas estáticas; conteúdo não duplicado.
- `src/components/sections/`: apresentação, planeamento, clareza, demo, detalhes, confiança e FAQ.
- `src/components/{Header,Footer,AppImage,Icon}.astro`: elementos reutilizáveis.
- `src/styles/{tokens,global}.css`: sistema visual, acessibilidade e regras globais.
- `src/scripts/preferences.ts`: tema e controlos pequenos, sem o estado financeiro.
- `src/demo/{types,fixture,model,money,render,controller}.ts`: uma responsabilidade por ficheiro.
- `public/privacy.html`: cópia preservada da política existente.
- `public/assets/`: logótipos e imagens selecionadas, sem ficheiros temporários.
- `tool/{prepare-site-images.ps1,validate-images.mjs,verify-build.mjs}`: scripts seguros e reproduzíveis.
- `tests/{locales,preferences,images,demo-model,demo-money,build}.test.ts`: verificações focadas.
- `README.md`: comandos, manutenção, imagens e publicação manual.

## Tarefa 1 — Base estática, idiomas e compatibilidade

**Files:** criar `package.json`, `astro.config.mjs`, `tsconfig.json`, `vitest.config.ts`,
`.gitignore`, `src/config/site.ts`, `src/content/types.ts`, `src/content/locales.ts`,
`src/content/copy.ts`, `src/layouts/SiteLayout.astro`, `src/pages/index.astro`,
`src/pages/[locale]/index.astro`, `tests/locales.test.ts`; preservar `privacy.html`
como `public/privacy.html` e os ícones atuais em `public/assets/`.

**Interfaces:**

- `LocaleId = 'en' | 'pt' | 'pt-br' | 'es' | 'fr' | 'de' | 'it' | 'zh'`.
- `localePath(locale: LocaleId, anchor?: string): string` inclui sempre a base.
- `getCopy(locale: LocaleId): SiteCopy` devolve texto, metadados, acessibilidade e demo.
- `SiteCopy` tem secções tipadas `meta`, `nav`, `hero`, `planning`, `clarity`,
  `demo`, `details`, `trust`, `faq` e `footer`; nenhuma tradução pode omitir uma.
- `site` contém `origin`, `base`, `playUrl`, `supportEmail` e `releaseChannel: 'closed-test'`.

- [ ] Configurar dependências mínimas: Astro, TypeScript, `@astrojs/check` e Vitest; scripts `dev`, `build`, `preview`, `check`, `test` e `verify:build`.
- [ ] Escrever os testes de contrato antes dos helpers, com estas asserções:

```ts
expect(localePath('en')).toBe('/Vetra_webpage/');
expect(localePath('pt-br', 'demo')).toBe('/Vetra_webpage/pt-br/#demo');
expect(Object.keys(allCopy).sort()).toEqual(['de','en','es','fr','it','pt','pt-br','zh']);
```

- [ ] Executar `npm.cmd test -- tests/locales.test.ts` e confirmar falha por funções/contrato ausentes.
- [ ] Implementar helpers, traduções naturais e rotas com HTML já localizado. Manter a moeda global configurável da app descrita corretamente, sem prometer conversão entre contas.
- [ ] Gerar metadados, hreflang, canonical e sitemap a partir do mesmo registo de idiomas. Preservar a política existente sem alterar silenciosamente o conteúdo jurídico.
- [ ] Executar `npm.cmd test`, `npm.cmd run check` e `npm.cmd run build`; verificar os oito documentos e `dist/privacy.html`.
- [ ] Commit apenas dos ficheiros desta entrega: `feat: add modular localized Astro site foundation`.

## Tarefa 2 — Apresentação editorial e controlos

**Files:** criar `src/components/Header.astro`, `Footer.astro`, `Icon.astro`,
`AppImage.astro`, os sete componentes em `src/components/sections/`,
`src/styles/tokens.css`, `global.css`, `src/scripts/preferences.ts` e
`tests/preferences.test.ts`; atualizar o layout e a composição das páginas.

**Interfaces:**

- Secções recebem `{ locale: LocaleId; copy: SiteCopy }`; imagens recebem
  `{ locale: LocaleId; scene: SiteScene; alt: string; eager?: boolean }`.
- `SiteScene = 'overview' | 'transactions' | 'planning' | 'accounts' | 'insights' | 'saving' | 'receivables' | 'vaults'`.
- `readTheme(storage: Pick<Storage, 'getItem'> | null): 'light' | 'dark' | null`
  ignora valores inválidos e exceções; `writeTheme(storage, theme): void` não lança.

- [ ] Escrever e executar testes RED para storage que lança exceção e preferências inválidas; a página deve poder funcionar mesmo com armazenamento bloqueado.
- [ ] Implementar os controlos e o sistema visual: branco quente, verde comedido,
  secções escuras pontuais, tipografia legível e estrutura editorial. Reutilizar
  imagens selecionadas na tarefa 3; enquanto não disponíveis, não inventar screenshots.
- [ ] Colocar as ações principais acima da dobra; idioma com links reais; navegação móvel sem impedir o conteúdo quando JS falha.
- [ ] Manter conteúdo visível antes das animações e sob movimento reduzido.
  FAQ com HTML nativo; sem autoplay, scroll artificial ou fontes externas obrigatórias.
- [ ] Executar a suite e verificar em browser a página inglesa e portuguesa,
  computador e telemóvel. Verificar especialmente títulos e ações da primeira dobra.
- [ ] Commit: `feat: build Vetra product storytelling and responsive design`.

## Tarefa 3 — Imagens reais, selecionadas e reproduzíveis

**Files:** criar `tool/prepare-site-images.ps1`, `tool/validate-images.mjs`,
`src/content/images.ts`, `tests/images.test.ts`; atualizar `AppImage.astro`,
`public/assets/screens/` e README. Não modificar ecrãs da app.

**Interfaces:**

- Script: `prepare-site-images.ps1 -AppRoot C:/Projetos/Vetra [-ReuseGenerated]`.
- Sem `ReuseGenerated`, invoca `tool/generate-store-assets.ps1` na app com
  `-Devices phone -Style composition -OutputDirectory build/website_assets`.
- `validateManifest(manifest: unknown): ValidatedManifest` exige `status: 'complete'`,
  `fictionalDataOnly: true`, oito locales, dimensões positivas e PNG existentes.
- `siteImages: Record<LocaleId, Record<SiteScene, ImageMeta>>`, onde `ImageMeta`
  contém `src`, `width`, `height` e `altKey`; mapear `pt-br` para `pt-BR`, `zh` para `zh-Hans`.

- [ ] Escrever testes RED que rejeitam manifest parcial, dados não fictícios,
  idiomas ausentes, path absoluto ou `../` e dimensões inválidas.
- [ ] Implementar validação e mapeamento a partir do manifest, não de globs arbitrários.
  Selecionar os oito artworks phone já aprovados por idioma; não incluir banner
  ou recursos de tablet/desktop sem utilização no site. Não redesenhar as capturas.
- [ ] Na regeneração, validar os caminhos resolvidos de origem/destino antes de
  qualquer substituição; não apagar diretórios inteiros nem seguir symlinks externos.
  Verificar todo o lote antes de substituir os recursos selecionados.
- [ ] Usar `-ReuseGenerated` sobre o lote completo atual primeiro, para poupar
  recursos. Testar o comando de regeneração apenas quando houver alteração visual.
- [ ] Configurar variantes responsivas geradas pelo build, dimensões explícitas e lazy loading; imagem principal eager, sem carregar as oito em todos os idiomas.
- [ ] Executar `npm.cmd test`, `npm.cmd run build` e validar imagens/publicação.
- [ ] Commit: `feat: add reproducible localized website imagery`.

## Tarefa 4 — Mini-demo independente

**Files:** criar `src/demo/types.ts`, `fixture.ts`, `model.ts`, `money.ts`,
`render.ts`, `controller.ts`, `src/styles/demo.css`, `tests/demo-model.test.ts`,
`tests/demo-money.test.ts`; atualizar a secção `Demo.astro`.

**Interfaces:**

- `DemoState` contém contas, movimentos, categoria do dia a dia e objetivo;
  todos os valores em cêntimos inteiros, sem referência a dados da app.
- `ExpenseInput = { accountId: string; categoryId: string; description: string; cents: number }`.
- `DemoResult = { ok: true; state: DemoState } | { ok: false; error: 'amount' | 'account' | 'category' | 'description' | 'available' }`.
- `DemoSummary = { balanceCents: number; spentCents: number; reservedCents: number }`.
- `createDemoState(): DemoState` devolve uma nova cópia independente da fixture.
- `addExpense(state: DemoState, input: ExpenseInput): DemoResult` devolve novo
  estado ou erro tipado; descrição, categoria e conta têm limites e IDs conhecidos.
- `reserveSavings(state: DemoState, cents: number): DemoResult` altera a reserva,
  não o saldo bancário ou os gastos; limita ao dinheiro disponível não reservado.
- `summarize(state: DemoState): DemoSummary` calcula total, gastos e reserva.
- `parseAmount(text: string, locale: LocaleId): number | null` aceita o separador
  decimal do idioma e no máximo duas casas; rejeita ambiguidades e números não finitos.
- `mountDemo(root: HTMLElement, locale: LocaleId): () => void` devolve cleanup.

- [ ] Escrever testes RED com fixture determinística: conta principal 124000,
  poupança 180000, carteira 6000, gastos iniciais 25000 e reserva inicial 20000.
  Uma despesa de 1250 na principal resulta em saldo 122750 e gastos 26250.
- [ ] Acrescentar testes: reserva de 5000 aumenta reserva para 25000 mas deixa
  saldo total 310000; valor zero/negativo/inválido não modifica nenhum registo;
  `createDemoState()` repõe o exemplo e não partilha arrays com outra instância.
- [ ] Testar vírgula em português e ponto em inglês; rejeitar `1,2.3`, infinito,
  excesso de casas e valores acima do limite seguro. Executar os dois ficheiros
  antes da implementação e confirmar RED.
- [ ] Implementar o modelo puro e parser; sem serviços remotos nem persistência.
- [ ] Implementar três vistas fiéis ao frontend atual: resumo, movimentos e plano.
  Formulários compactos, erro junto do campo, descrição renderizada com `textContent`,
  e ações para registar despesa, reservar poupança e recomeçar.
- [ ] Carregar `controller.ts` com import dinâmico após «Experimentar»;
  sinalizar carregamento e erro, conservar poster e links se o módulo falhar.
  Cleanup remove listeners; reabrir não duplica ações; fechar devolve foco.
- [ ] Verificar manualmente teclado, formulário com `<img onerror=...>` como
  texto, clique repetido, reset, abertura/fecho e uso móvel; confirmar ausência
  de pedidos financeiros, login, Supabase e localStorage da demo.
- [ ] Executar a suite, check e build. Commit: `feat: add lightweight fictional Vetra demo`.

## Tarefa 5 — Verificação integrada e entrega, sem publicação

**Files:** criar `tool/verify-build.mjs`, `tests/build.test.ts`; atualizar README,
documentação de imagens e o estado das tarefas neste plano.

**Interfaces:**

- `verifyBuild(distPath: string): VerificationResult` verifica os documentos
  gerados e assets referenciados; falha em links locais incorretos, recursos
  inexistentes, rotas/idiomas omitidos ou política em falta.
- `npm.cmd run verify:build` verifica `dist/` depois do build.

- [ ] Escrever teste RED para saída sintética com `/assets/` sem a base e para
  `privacy.html` ausente. Implementar validação e executar GREEN.
- [ ] Executar `npm.cmd test`, `npm.cmd run check`, `npm.cmd run build` e
  `npm.cmd run verify:build`; corrigir erros encontrados antes da entrega.
- [ ] Abrir preview HTTP no browser permitido. Verificar 320, 390, 768, 1280
  e 1920 px, alemão/francês/chinês, zoom de 200%, teclado, tema claro/escuro,
  movimento reduzido, JS desligado e falha de carregamento da demo.
- [ ] Confirmar que o build inicial não carrega o módulo financeiro da demo;
  medir desempenho quando a ferramenta estiver disponível e distinguir medição
  de objetivos. Sem pontuação perfeita prometida.
- [ ] Comparar git diff e conteúdo final com a spec: nenhum CSV ou EUR-only
  obsoleto, nenhum testemunho inventado ou alteração a credenciais/política.
- [ ] Documentar `npm.cmd ci`, `dev`, `build`, `preview`, regeneração/reutilização
  de imagens e atualização de conteúdo/traduções. Documentar o passo futuro
  de GitHub Pages sem criar workflow de auto-publicação nesta fase.
- [ ] Commit: `docs: finish website verification and maintenance guide`.
- [ ] Mostrar o preview ao proprietário, indicar verificações e limitações
  reais e aguardar autorização explícita antes de publicar.

## Handoff

Execução recomendada: nativa, por mim, na sessão atual, sem subagentes.
As tarefas partilham contratos pequenos e a principal revisão é visual;
delegar cada componente acrescentaria coordenação sem vantagem suficiente.
Antes de implementar: o proprietário revê este plano e confirma execução.
