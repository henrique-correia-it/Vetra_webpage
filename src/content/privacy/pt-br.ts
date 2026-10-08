import pt from './pt';
import type { PrivacyCopy } from './types';
// Both Portuguese variants share the same legal commitments, with regional terminology.
const brazilian = (text: string) =>
  text
    .replaceAll('palavras-passe', 'senhas')
    .replaceAll('palavra-passe', 'senha')
    .replaceAll('frase-passe', 'senha da cópia')
    .replaceAll('ficheiros', 'arquivos')
    .replaceAll('ficheiro', 'arquivo')
    .replaceAll('ecrã', 'tela')
    .replaceAll('browser', 'navegador')
    .replaceAll('restauro', 'restauração')
    .replaceAll('descarregados', 'baixados')
    .replaceAll('utilizadores', 'usuários');
export default {
  ...pt,
  intro: brazilian(pt.intro),
  contactText: brazilian(pt.contactText),
  copy: 'Copiar endereço de email',
  deletionSteps: [
    'No app: abra Configurações e escolha Excluir conta e dados. Confirme a operação com conexão à Internet.',
    'Sem o app: envie um email para vetra.app.support@gmail.com com o assunto “Excluir conta Vetra”, indicando o email da sua conta Vetra. Não é necessário reinstalar o app.',
    'Confirmamos que você controla a conta antes de excluí-la. Podemos pedir confirmação pelo email cadastrado, nunca a sua senha. Respondemos aos pedidos de privacidade em até um mês; possíveis extensões previstas em lei são explicadas.',
  ],
  deletion: 'Excluir sua conta Vetra e os dados',
  deletionNote: brazilian(pt.deletionNote),
  sections: pt.sections.map((section) => ({
    ...section,
    title: brazilian(section.title),
    paragraphs: section.paragraphs.map(brazilian),
  })),
} satisfies PrivacyCopy;
