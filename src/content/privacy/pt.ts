import { site } from '../../config/site';
import type { PrivacyCopy } from './types';
export default {
  title: 'Política de privacidade',
  intro:
    'Como a Vetra trata a tua informação, o que fica no dispositivo e o que acontece quando usas funções online. Esta política abrange a app Vetra e este website.',
  updated: 'Atualizada em 9 de outubro de 2026',
  contents: 'Nesta página',
  contact: 'Contacto de privacidade',
  contactText:
    'Henrique Correia é o responsável pelo tratamento dos dados na Vetra. Usa este endereço para apoio, pedidos de privacidade ou eliminação de conta. Não envies palavras-passe, códigos de verificação ou dados completos de cartões bancários.',
  email: 'Enviar email',
  copy: 'Copiar endereço de email',
  copied: 'Endereço de email copiado.',
  copyFailed: 'Seleciona e copia o endereço acima e cola-o no teu serviço de email.',
  deletion: 'Eliminar a tua conta Vetra e os dados',
  deletionSteps: [
    'Na app: abre Definições e escolhe Eliminar conta e dados. Confirma a operação com ligação à Internet.',
    `Sem a app: envia um email para ${site.supportEmail} com o assunto «Eliminar conta Vetra», indicando o email da tua conta Vetra. Não precisas de reinstalar a app.`,
    'Confirmamos que controlas a conta antes de a eliminar. Podemos pedir confirmação através do email registado, nunca a tua palavra-passe. Respondemos aos pedidos de privacidade no prazo de um mês; eventuais prorrogações legalmente previstas são explicadas.',
  ],
  deletionNote:
    'A eliminação remove a conta de autenticação, os dados financeiros pessoais na nuvem e os respetivos anexos. Após sucesso, a app também limpa os dados locais da conta. Registos de contas partilhadas necessários a outros membros podem permanecer, com transferência de propriedade para outro membro. Cópias noutros dispositivos, exportações e backups guardados ou partilhados por ti não são apagados remotamente. Desativar a sincronização, terminar sessão ou desinstalar não elimina a conta na nuvem.',
  providers: 'Informação dos fornecedores',
  sections: [
    {
      id: 'data',
      title: '1. Informação e finalidades',
      paragraphs: [
        'A informação da conta inclui email, nome de perfil, identificadores, sessão e preferências como idioma, tema e sincronização. A autenticação e gestão da conta usam o Supabase mesmo com a sincronização financeira desligada. Se escolheres entrar com Google, a Google fornece identificação básica, email e informação de perfil; a Vetra não recebe a tua palavra-passe da Google.',
        'Introduzes contas, saldos, movimentos, categorias, planos, poupanças, dívidas a receber, pessoas, notas, etiquetas e anexos selecionados. Servem para organizar as tuas finanças. A Vetra não se liga ao banco, executa pagamentos, recolhe palavras-passe bancárias ou exige números de cartão/CVV. Evita incluir informação sensível de outras pessoas nas notas ou anexos.',
      ],
    },
    {
      id: 'sync',
      title: '2. Uso local, sincronização e partilha',
      paragraphs: [
        'Os dados financeiros são guardados localmente. Ativar a sincronização envia os registos financeiros suportados e anexos para o Supabase para restauro ou uso em vários dispositivos. Desativá-la interrompe a sincronização financeira pessoal habitual, mas não apaga dados já enviados. Autenticação, preferências do perfil e funções online de contas partilhadas são independentes dessa escolha.',
        'Os membros de uma conta partilhada veem o saldo e os movimentos dessa conta, não as tuas finanças pessoais completas. Os convites usam email e identificadores de participação. Partilha apenas o que os outros devem ver. Nomes e dívidas de outras pessoas resultam do que introduzes, não de um envio automático de contactos.',
      ],
    },
    {
      id: 'security',
      title: '3. Segurança e acesso',
      paragraphs: [
        'A app encripta a base de dados financeira local e guarda a chave e credenciais de autenticação no armazenamento protegido da plataforma. A comunicação online usa HTTPS. As regras de acesso na nuvem limitam os utilizadores comuns aos registos autorizados. Não é encriptação ponta a ponta: administração autorizada e fornecedores de infraestrutura podem tecnicamente aceder aos dados na nuvem para operação, segurança e apoio. Nenhum sistema garante segurança absoluta.',
        'A autenticação do dispositivo é feita pelo sistema operativo; a Vetra recebe o resultado, não a impressão digital nem o modelo facial. O acesso a ficheiros selecionados e as permissões de notificações são pedidos para as respetivas funções. Os lembretes são agendados localmente; o conteúdo pode aparecer no ecrã bloqueado conforme as definições do dispositivo.',
      ],
    },
    {
      id: 'backups',
      title: '4. Cópias de segurança e exportações',
      paragraphs: [
        'Os ficheiros de restauro Vetra são encriptados com a frase-passe que escolhes. Guarda-a: é necessária para restaurar. A cópia opcional no Google Drive exige autorização Google separada, limitada aos ficheiros criados ou abertos pela app; não dá acesso geral a todo o Drive. A Google trata a conta e ficheiros segundo os seus termos.',
        'As exportações PDF são documentos legíveis, não ficheiros de restauro encriptados. Ficheiros descarregados, enviados, partilhados ou guardados no Drive ficam sob o teu controlo. Eliminar a conta Vetra não apaga essas cópias nem revoga a cópia de outra pessoa. Remove-as separadamente quando deixarem de ser necessárias.',
      ],
    },
    {
      id: 'basis',
      title: '5. Fundamentos legais e escolhas',
      paragraphs: [
        'No RGPD, a gestão da conta e as funções financeiras, de nuvem e partilha solicitadas servem para prestar o serviço (artigo 6.º, n.º 1, b)). Segurança proporcional, prevenção de abuso e apoio assentam em interesses legítimos (f)); obrigações legais, incluindo os pedidos de direitos, assentam em c). Quando um tratamento exige consentimento, podes retirá-lo sem afetar o tratamento lícito anterior.',
        'Podes desativar funções opcionais e permissões do dispositivo. A informação de autenticação é necessária para disponibilizar uma conta online; sem ela não podemos prestar esses serviços. A Vetra não vende os teus dados, usa rastreadores publicitários nem utiliza as tuas finanças para decisões de crédito automatizadas ou perfis publicitários.',
      ],
    },
    {
      id: 'recipients',
      title: '6. Fornecedores e tratamento internacional',
      paragraphs: [
        'O Supabase fornece autenticação, base de dados e armazenamento de anexos na nuvem. A Google fornece login opcional, backups no Drive, envio de emails de serviço pelo Gmail e alojamento do email de apoio. O GitHub Pages aloja este website. Tratam os dados de identificação, conteúdo e ligação necessários aos respetivos serviços. Também pode haver divulgação para cumprir a lei ou proteger direitos legais.',
        `A Cloudflare protege e distribui este website e encaminha as mensagens enviadas para ${site.supportEmail} para o nosso email de apoio no Gmail. O encaminhamento trata os endereços de remetente e destinatário, o conteúdo das mensagens, os anexos e os dados técnicos de entrega. A Cloudflare não fornece a sincronização financeira da Vetra.`,
        'A operação dos fornecedores pode envolver países fora do teu país, incluindo fora do EEE. Os termos de tratamento de dados do Supabase descrevem garantias, subcontratantes e cláusulas contratuais-tipo aplicáveis a transferências restritas. A Google, a Cloudflare e o GitHub descrevem o tratamento internacional nas suas políticas. Contacta-nos para saber as garantias aplicáveis aos teus dados.',
      ],
    },
    {
      id: 'retention',
      title: '7. Conservação e limites da eliminação',
      paragraphs: [
        'Os registos locais permanecem até os removeres ou repores os dados. A conta e os dados financeiros pessoais na nuvem permanecem enquanto a conta existir ou até serem eliminados pelo serviço. Marcadores de eliminação podem permanecer enquanto necessários para propagar remoções entre dispositivos. Registos técnicos de segurança e backups residuais da infraestrutura seguem a conservação e rotação dos fornecedores, não uma destruição instantânea.',
        'Emails de apoio e comprovativos de verificação são conservados apenas enquanto necessários para resolver o pedido, demonstrar o seu tratamento ou cumprir obrigação legal. Registos partilhados podem continuar a servir outros membros. Se a lei ou uma finalidade legítima de segurança exigir conservação, explicamos o motivo e critérios, em vez de prometer destruição imediata de todas as cópias.',
      ],
    },
    {
      id: 'website',
      title: '8. Website e diagnóstico',
      paragraphs: [
        'Este website não usa rastreadores publicitários ou analíticos da Vetra. Guarda apenas o idioma e tema que escolhes manualmente no armazenamento local do browser. O idioma do browser é lido localmente para selecionar uma tradução suportada. Bloquear o armazenamento não impede o acesso. O GitHub e a Cloudflare podem tratar IP e registos técnicos de pedidos para alojar, distribuir e proteger o site. Links externos para Google Play e fornecedores têm políticas próprias.',
        'A app mantém um diagnóstico técnico local limitado, concebido para excluir valores monetários, nomes e emails. Não é enviado automaticamente para nós. Podes limpá-lo ou partilhá-lo para obter apoio; revê os anexos antes de enviar. Os fornecedores de alojamento e autenticação também mantêm os seus registos operacionais e de segurança.',
      ],
    },
    {
      id: 'rights',
      title: '9. Os teus direitos',
      paragraphs: [
        'Conforme a lei aplicável, podes pedir acesso, retificação, apagamento, limitação, portabilidade e oposição a tratamentos baseados em interesses legítimos. Podes retirar consentimento quando for o fundamento legal. Usa o contacto acima; a verificação de identidade é proporcional e os pedidos normalmente gratuitos. Não conseguimos recuperar remotamente registos exclusivamente locais.',
        'Podes reclamar junto da autoridade de controlo local, incluindo a CNPD em Portugal. Outras jurisdições podem conferir direitos adicionais. A Vetra não é dirigida a crianças nem procura intencionalmente os seus dados sem as garantias exigidas pela lei aplicável. Contacta-nos se considerares que esses dados foram fornecidos.',
      ],
    },
    {
      id: 'changes',
      title: '10. Alterações à política',
      paragraphs: [
        'A data acima identifica esta versão. Alterações relevantes são comunicadas pelos canais adequados quando exigido. Uma finalidade nova que exija informação ou consentimento adicional não fica legitimada pela simples mudança deste texto. As traduções facilitam o acesso; o idioma escolhido não limita direitos legais.',
      ],
    },
  ],
} satisfies PrivacyCopy;
