# Vetra — reformulação do site e demonstração interativa

Estado: desenho aprovado pelo proprietário em 8 de outubro de 2026.

## Objetivo e limites

Criar um site de produto elegante, rápido e fácil de manter que explique a Vetra,
mostre a sua interface verdadeira e encaminhe para a ficha da Google Play.
Combinar a apresentação por capítulos da Homey com a clareza do Cashew, sem
copiar os seus elementos de marca ou apresentar funcionalidades inexistentes.

O site não será Flutter. Não é uma versão web da aplicação nem permite consultar
dados de utilizadores. A mini-demo será feita em HTML, CSS e TypeScript, com
dados fictícios e um conjunto pequeno de interações.

Não modificar a aplicação móvel, o Supabase, credenciais, identificadores de
plataforma ou configurações OAuth para construir o site. A ferramenta de imagens
pode ler o projeto da app e reutilizar a captura de widgets existente; qualquer
alteração necessária nessa ferramenta deve limitar-se à geração de imagens.
Não gerar APK/AAB nem instalar a aplicação como parte deste trabalho.

## Situação atual a corrigir

- `index.html` concentra estrutura, estilos, traduções e comportamento.
- O conteúdo ainda refere a moeda EUR como limitação global e exportação CSV.
- O botão principal encaminha para a política de privacidade.
- A representação do telemóvel não reproduz fielmente a interface atual.
- Existem três idiomas no site, em vez dos oito da app e da loja.
- Efeitos decorativos e linguagem técnica competem com a mensagem do produto.
- Promessas absolutas de privacidade e comparações genéricas com concorrentes
  precisam de ser substituídas por afirmações verificáveis.

## Direção visual

Uma página editorial de produto, não um painel composto por dezenas de cards.
Fundo principal branco quente; secções escuras pontuais para contraste; verde
Vetra como destaque. Texto escuro legível, espaço generoso e hierarquia clara.

Tipografia expressiva mas sem títulos gigantes que ocultem a ação principal.
Uma família principal para o site, com fallback adequado ao chinês. Elementos
que representam a app respeitam as fontes, cores e proporções da interface real.
Fontes e imagens locais sempre que possível; preservar as respetivas licenças.

Animações limitadas a transições de controlos e entradas suaves de elementos.
Não incluir explosões de partículas, brilho permanente, animações decorativas
contínuas, rolagem artificial ou carrosséis que mudem enquanto a pessoa lê.
Respeitar `prefers-reduced-motion` e mostrar o conteúdo mesmo sem JavaScript.

## Estrutura e percurso do visitante

### Cabeçalho

Logótipo Vetra, links para funcionalidades, demonstração e dúvidas, seletor de
idioma e ligação à Google Play. Navegação compacta no telemóvel, utilizável por
teclado e sem impedir a leitura. Preferência de tema guardada quando permitido;
falhas de armazenamento não devem impedir o funcionamento.

### 1. Apresentação

Benefício principal em linguagem simples: organizar despesas, planear e poupar.
Texto curto, ligação «Ver na Google Play» e ação «Experimentar a demo».
Composição com imagens reais da app e detalhes de interface, sem dados pessoais.
Não anunciar disponibilidade pública enquanto a distribuição estiver limitada
a testes. A ligação à loja mantém o pacote `pt.projetos.vetra`.

### 2. Organiza o teu mês

Apresentar entradas, contas a pagar, dia a dia e poupanças numa sequência visual.
Explicar a flexibilidade do ciclo sem a linguagem técnica da base de dados.
Usar poucas imagens grandes, cada uma com uma mensagem concreta.

### 3. Vê o teu dinheiro com clareza

Mostrar contas, movimentos e análises. Relacionar os exemplos com o mesmo
conjunto fictício de dados. Não mostrar um saldo ou gráfico diferente apenas
porque outra composição fica mais apelativa.

### 4. Experimenta a Vetra

Demonstração isolada, descrita abaixo. Mostrar uma imagem de pré-visualização
antes de a pessoa a ativar. O conteúdo principal do site não depende da demo.

### 5. Os detalhes que fazem diferença

Apresentação curta de cofres, contas partilhadas e dívidas a receber. Mostrar
somente comportamentos confirmados na app, sem insinuar ligação bancária ou
funcionalidades de cartões que não existam.

### 6. Dados e confiança

Explicar uso local, sincronização opcional e cópias de segurança. Distinguir
funcionamento offline de autenticação e serviços que exigem Internet. Não
prometer anonimato, encriptação ponta a ponta ou privacidade absoluta.

### 7. Dúvidas, instalação e rodapé

FAQ curta sobre moedas suportadas, funcionamento offline, sincronização,
cópias de segurança e disponibilidade. Ligação à loja, contacto de suporte,
política de privacidade e pedido de eliminação de conta.
Não inventar classificações, testemunhos, contagens de utilizadores ou prémios.

## Arquitetura do site

Astro com TypeScript e CSS modular. Páginas geradas estaticamente, mantendo o
alojamento GitHub Pages e a base `/Vetra_webpage/`. Não adicionar servidor,
base de dados, CMS, analytics ou frameworks de UI sem necessidade demonstrada.

Separar responsabilidades:

- `src/layouts/`: documento HTML, metadados e estrutura comum.
- `src/components/`: navegação, botões, seletor de idioma e componentes comuns.
- `src/components/sections/`: capítulos da página, sem misturar todos num ficheiro.
- `src/content/`: conteúdo tipado e traduções.
- `src/styles/`: tokens, regras globais e acessibilidade; estilos específicos
  junto dos componentes correspondentes.
- `src/demo/`: modelo fictício, apresentação e interações da mini-demo.
- `public/`: recursos estáticos e compatibilidade de endereços existentes.
- `tool/`: preparação e validação das imagens.
- `tests/`: comportamento da demo, idiomas, links e saída estática.

Não transportar o monólito atual para um componente monolítico com outro nome.
A presença de um `index.html` gerado na publicação é normal e não contradiz
esta organização do código-fonte.

## Idiomas e endereços

Suportar inglês, português de Portugal, português do Brasil, espanhol, francês,
alemão, italiano e chinês simplificado. Inglês como idioma predefinido.
As traduções abrangem texto visível, acessibilidade, metadados e a mini-demo.

Páginas localizadas com URLs próprias: raiz em inglês e caminhos `pt/`,
`pt-br/`, `es/`, `fr/`, `de/`, `it/` e `zh/`. O seletor navega para a página
equivalente e não depende de trocar todo o conteúdo após o carregamento.
Incluir `lang`, títulos, descrições, canonical, hreflang e sitemap coerentes.

Preservar o endereço público `privacy.html`, o contacto
`vetra.app.support@gmail.com` e o mecanismo de pedido de eliminação de conta.
A política atual continua disponível durante a migração. Não alterar
silenciosamente o significado jurídico do texto nem configurações externas.

## Imagens reais e reprodução automática

Reutilizar o sistema de captura existente em `C:/Projetos/Vetra/tool/store_assets/`
como base para gerar imagens dos widgets reais com dados fictícios. Não usar
emulador, fotografias manuais, geração por IA ou redesenho de screenshots.

Um comando documentado prepara as imagens do site, valida dimensões e nomes e
coloca apenas os recursos selecionados no repositório do website. As imagens
não podem conter credenciais, dados reais, faixas de debug ou informação do
telemóvel do proprietário.

As imagens de apresentação correspondem ao idioma da página. Usar resolução
adequada ao tamanho de exibição, variantes responsivas e dimensões explícitas.
Não depender de ficheiros temporários em `build/` para publicar o site.

## Mini-demo: escopo e regras

Implementação própria em HTML/CSS/TypeScript, visualmente baseada na app. Não
importa Flutter nem utiliza a sua base de dados. Carregar o módulo interativo
apenas após a ação «Experimentar»; manter uma alternativa estática em caso de erro.

Três vistas: resumo, movimentos e plano. Contas fictícias selecionáveis e as
seguintes ações, sem pretender reproduzir toda a aplicação:

1. Consultar contas e movimentos do exemplo.
2. Registar uma despesa com descrição, categoria, conta e valor; atualizar
   saldo, lista de movimentos e gasto da categoria sem recarregar a página.
3. Reservar dinheiro já existente para uma poupança; atualizar a reserva e o
   progresso sem diminuir duas vezes o saldo nem apresentar uma nova despesa.

Fixture determinística, com saldos e cálculos derivados dos mesmos dados.
Montantes internos em unidades mínimas inteiras. Formatação dependente do idioma
da página, mantendo a moeda EUR no exemplo para não simular conversão cambial.
Valores inválidos não alteram o estado e apresentam erro junto do campo.

Dados apenas em memória e limitados à sessão da demo. «Recomeçar demonstração»
repõe exatamente o exemplo inicial. Não enviar valores introduzidos para a
rede, não usar Supabase e não ler armazenamento ou credenciais da app.
Indicar «Demonstração com dados fictícios» de forma clara.

No computador, enquadramento próprio com espaço de utilização; no telemóvel,
área ampla ou página dedicada, sem encaixar formulários num mockup minúsculo.
Evitar conflito entre scroll da página e da demonstração. Teclado, foco e
mensagens acessíveis devem funcionar. Ao fechar, devolver o foco ao botão.

Se a reprodução não ficar convincente e fluida, manter as imagens reais e
não publicar uma demo incompleta. Essa decisão deve ser comunicada ao proprietário.

## Qualidade e aceitação

- Sem overflow horizontal entre 320 e 1920 px; verificar separadamente os
  idiomas com texto longo e chinês, e zoom de 200%.
- Navegação e conteúdo essenciais funcionam sem JavaScript.
- Contraste legível, foco visível, labels, hierarquia de títulos correta e
  alvos de toque com pelo menos 44 px nos controlos principais.
- Respeitar movimento reduzido; não esconder conteúdo se uma animação falhar.
- A falha da mini-demo não bloqueia a página, a loja ou as páginas legais.
- Imagens abaixo da dobra carregadas sob pedido, fontes e recursos sem
  deslocações evitáveis de layout; demo fora do carregamento inicial.
- LCP <= 2,5 s e CLS <= 0,1 como objetivos a medir, não promessas sem teste.
- Validar links e recursos com a base GitHub Pages, não apenas na raiz local.
- Verificar despesas, reservas, rejeição de valores inválidos e reset da demo
  com testes automáticos pequenos e centrados no comportamento.
- Verificar visualmente computador e telemóvel antes da entrega.

## Entregas e publicação

Ordem: base modular e conteúdo, apresentação visual, imagens, mini-demo,
verificação e documentação. Commits por entrega coerente, preservando mudanças
de terceiros. O site atual fica disponível enquanto a nova versão é preparada.

Entregar pré-visualização e instruções de manutenção. Não publicar no GitHub
Pages nem alterar definições de alojamento sem autorização do proprietário.

## Referências

- Homey: https://homey.app/en-us/
- Cashew: https://cashewapp.web.app/
- Astro: https://docs.astro.build/en/concepts/islands/
- GitHub Pages: https://docs.astro.build/en/guides/deploy/github/
