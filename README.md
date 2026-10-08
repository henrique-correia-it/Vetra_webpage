# Vetra — website de produto

Site estático em **Astro + TypeScript**, com oito idiomas e imagens artísticas
da interface real da app com dados fictícios. Não é a versão web da app.
Não usa Supabase, contas reais, publicidade nem ferramentas de analytics.

## Trabalhar e verificar

Usar **Node 24 LTS**, na pasta do website:

```powershell
npm ci
npm run dev
```

Abrir o endereço apresentado, incluindo `/Vetra_webpage/`.

```powershell
npm test
npm run check
npm run build
npm run verify:build
npm run preview
```

`build` gera apenas o site em `dist/`; não compila nem instala a app móvel.
`preview` mostra o resultado estático, não o website publicado.

Neste PC, se o Node global continuar em 25, usar o runtime já disponível:

```powershell
$vetraNode = "$env:USERPROFILE/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe"
$vetraNpm = 'C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js'
$env:PATH = (Split-Path $vetraNode) + ';' + $env:PATH
& $vetraNode $vetraNpm run build
& $vetraNode $vetraNpm run preview
```

Isto altera apenas o PATH desta janela, não a configuração do computador.
Os testes usam um único processo sequencial para poupar memória.

## Organização

| Assunto | Local |
| --- | --- |
| Loja, disponibilidade, contacto e base | `src/config/site.ts` |
| Conteúdo e traduções | `src/content/translations/` |
| Idiomas e rotas | `src/content/locales.ts` |
| Secções e componentes | `src/components/` |
| Apresentação e tokens | `src/styles/` |
| Preferências de idioma e tema | `src/scripts/preferences.ts` |
| Política de privacidade nos oito idiomas | `src/content/privacy/` |
| Página de privacidade e contacto | `src/components/Privacy.astro` |
| Preparação e validação de imagens | `tool/` |

Inglês na raiz; restantes páginas em `pt/`, `pt-br/`, `es/`, `fr/`, `de/`,
`it/`, `zh/`. O idioma do browser escolhe a tradução na entrada genérica.
Uma escolha manual fica guardada e tem prioridade. Links explicitamente
localizados mantêm o idioma; idiomas não suportados usam inglês.
A política acompanha a seleção, preservando `privacy.html` e os fragmentos
`#contact` e `#delete-account`.

O conteúdo e links de idioma funcionam sem JavaScript; nesse caso a raiz é
inglesa. O tema segue o sistema até ser escolhido manualmente. A mudança tem
uma onda circular quando o browser suporta View Transitions, respeitando
`prefers-reduced-motion`. Armazenamento bloqueado não impede os controlos.

As bandeiras são os recursos existentes da app, não emojis.
Tema e idioma são as únicas preferências persistentes do website.
Contacto e eliminação levam a instruções e email visível; não dependem apenas
de haver uma aplicação de email configurada. Copiar o endereço tem alternativa
manual se o browser não autorizar o acesso à área de transferência.

## Imagens da app

Reutilizar o lote aprovado, sem renderizar novamente:

```powershell
./tool/prepare-site-images.ps1 -AppRoot C:/Projetos/Vetra -ReuseGenerated
```

Quando a interface mudar:

```powershell
./tool/prepare-site-images.ps1 -AppRoot C:/Projetos/Vetra
```

O último comando usa o gerador real da app, dados fictícios, oito idiomas e
formato telemóvel. Não usa emulador nem gera APK/AAB. Requer Flutter e as
dependências da app instaladas. A validação confirma o lote completo, caminhos
e dimensões antes de copiar. Os PNGs ficam em `src/assets/screens/`; Astro gera
WebP responsivo. Em produção não depende da pasta `build/` da app.

## Privacidade

Responsável confirmado: **Henrique Correia**.
Contacto confirmado: **vetra.app.support@gmail.com**.
O envio de emails de autenticação usa Supabase com Gmail, segundo o proprietário.

A política descreve as funcionalidades atuais, incluindo autenticação sem
sincronização financeira, Google, Drive, partilha, diagnósticos, encriptação
local e ausência de encriptação ponta a ponta na nuvem. Os dois variantes
portugueses partilham os compromissos legais para evitar divergências.

Consultar `docs/privacy-review.md` para as fontes e obrigações operacionais.
Uma política escrita não certifica automaticamente cumprimento jurídico
internacional, nem substitui a gestão real de pedidos e retenção.

## Publicar — apenas depois de aprovação

**O novo site ainda não foi publicado.** `index.html` e `privacy.html` na raiz
são a versão anteriormente publicada, preservada enquanto o novo site é revisto.
O novo código não depende deles.

Depois de aprovação, publicar o **conteúdo de `dist/`** no GitHub Pages, com
Node 24 e as verificações acima. Não publicar diretamente as fontes.
A base mantém-se `/Vetra_webpage/`; a política conserva o endereço existente.

Nenhum workflow automático de publicação foi criado. Não fazer push nem
publicar sem autorização. Atualizar a disponibilidade quando a app deixar os
testes fechados.
