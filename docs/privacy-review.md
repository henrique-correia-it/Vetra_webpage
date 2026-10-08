# Revisão da política de privacidade — 8 de outubro de 2026

Responsável e email confirmados pelo proprietário: Henrique Correia,
vetra.app.support@gmail.com. Emails de autenticação: Supabase com Gmail.

## Evidência utilizada

- `Vetra/lib/core/auth/auth_service.dart`: autenticação, perfil, eliminação e limpeza de anexos.
- `Vetra/lib/core/auth/native_google_auth_backend.dart`: scopes openid/email/profile.
- `Vetra/lib/core/database/secure_database_opener.dart`: base local encriptada e chave protegida.
- `Vetra/lib/core/backup/vetra_backup_format.dart`: restauro encriptado com frase-passe.
- `Vetra/lib/core/backup/google_drive_backup_service.dart`: permissão drive.file, não acesso geral.
- `Vetra/lib/core/diagnostics/local_diagnostics.dart`: log local limitado e atributos permitidos.
- `Vetra/lib/core/security/device_authenticator.dart`: autenticação pelo sistema operativo.
- `Vetra/supabase/migrations/20260827000000_add_shared_accounts.sql`: preservação/transferência de contas partilhadas após eliminação do proprietário.
- Website: sem analytics, recursos locais, preferências de tema e idioma em localStorage.

## Fontes oficiais

- [EDPB: transparência e direitos](https://www.edpb.europa.eu/sme/be-compliant/respect-individuals-rights_en)
- [Google Play: dados dos utilizadores](https://support.google.com/googleplay/android-developer/answer/10144311)
- [Google Play: eliminação de conta](https://support.google.com/googleplay/android-developer/answer/13327111)
- [Supabase DPA](https://supabase.com/legal/customer-resources/data-processing-addendum)
- [Google](https://policies.google.com/privacy) e [GitHub](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)
- [CNPD: participações](https://www.cnpd.pt/cidadaos/participacoes/)

## Obrigações que continuam a exigir operação real

O responsável deve tratar pedidos recebidos, verificar identidade de forma
proporcional, cumprir os prazos, limitar acessos administrativos e conservar
registos apenas pelo tempo necessário. Deve confirmar os prazos efetivos de
logs/backups no plano e configuração Supabase e as condições de tratamento
dos fornecedores; não foi feita auditoria à consola de produção.

A declaração Data Safety e o URL de eliminação no Google Play devem refletir
o comportamento real. A política informa sobre backups, dados partilhados e
ausência de encriptação ponta a ponta, em vez de prometer eliminação universal.

Não há certificação de conformidade jurídica internacional. A tradução ou
disponibilidade numa moeda não substitui análise das leis aplicáveis aos
países onde a app é distribuída. O texto deve ser revisto quando funcionalidades,
fornecedores ou finalidades mudarem.
