# Vetra — website de produto

## Direção aprovada

Um site bonito, moderno, fluido e organizado, inspirado na clareza editorial
de Homey e Cashew, preservando a identidade da Vetra. Base clara acolhedora,
verdes sóbrios, tipografia generosa, espaço e elementos reais da app.
Nada de uma página monolítica mantida manualmente.

A revisão posterior do proprietário define um website de apresentação:
sem simulação financeira interativa. A experiência real é comunicada pelas
imagens artísticas da app com dados fictícios.

## Estrutura

1. Cabeçalho: marca, descobrir, dúvidas, idioma, tema e Google Play.
2. Apresentação: benefício principal, CTA de loja e imagens reais.
3. Planeamento: ciclo próprio, contas a pagar, dia a dia e poupanças.
4. Clareza: contas, movimentos e análise.
5. Detalhes: objetivos, partilha e dívidas a receber.
6. Confiança: uso offline, sincronização opcional e backups.
7. FAQ: bancos, moedas, sincronização, Internet e disponibilidade.
8. Rodapé: loja, privacidade, contacto e eliminação de conta.

## Código

Astro estático com TypeScript e CSS. Componentes pequenos por secção,
conteúdo tipado por idioma, tokens de apresentação e pipeline separado
para imagens. Sem React, Flutter no browser, Supabase ou acesso a dados reais.
Não criar backend, CMS ou analytics sem necessidade e autorização.

## Idiomas e tema

Oito idiomas correspondentes à app. Inglês como fallback; a entrada genérica
segue a preferência do browser. A seleção manual fica guardada. Um link
localizado explícito mantém o idioma. Chinês tradicional não deve ser tratado
como uma tradução simplificada disponível.

Bandeiras idênticas às da app. Links de idioma operam mesmo sem JavaScript.
Sem JavaScript, a raiz fica em inglês. Armazenamento indisponível não bloqueia
o site.

Tema segue o sistema até escolha manual. O botão mostra sol/lua conforme o
tema atual. Mudança com propagação circular e anel discreto, respeitando
movimento reduzido e browsers sem View Transitions.

## Imagens

Reutilizar o gerador real da app: oito cenas em oito idiomas, com dados
fictícios. Não usar emulador nem imagens geradas por IA. Validar o lote antes
de substituir os recursos; fontes locais e WebP responsivo no build.
As fotografias artísticas não são recapturadas manualmente.

## Política e contactos

Preservar `privacy.html`; criar variantes localizadas consistentes.
Contacto e pedido de eliminação devem ter caminhos claros e email visível,
mesmo sem aplicação de email configurada. Copiar tem alternativa manual.

Responsável confirmado: Henrique Correia; email de apoio da Vetra.
Explicar autenticação, dados financeiros, nuvem opcional, contas partilhadas,
Google, Gmail, Drive, backups, PDFs, encriptação e os seus limites, diagnóstico,
fornecedores, retenção e direitos. Não prometer privacidade absoluta,
encriptação ponta a ponta ou destruição instantânea de todas as cópias.

Basear a revisão no código atual e nas fontes oficiais. Obrigações
operacionais e revisão jurídica não se resolvem apenas com texto no site.

## Qualidade e publicação

Layout responsivo 320–1920 px, sem corte de títulos, navegação ou imagens.
Conteúdo e contactos utilizáveis com teclado e HTML estático. Movimento
reduzido, dimensões de imagem e carregamento diferido quando adequado.
Evitar efeitos excessivos e dependências desnecessárias.

Manter GitHub Pages e base `/Vetra_webpage/`. Não alterar a app móvel ou
Supabase, nem compilar/instalar/publicar sem pedido explícito.
A versão antiga publicada fica na raiz até aprovação; a nova sai de `dist/`.
