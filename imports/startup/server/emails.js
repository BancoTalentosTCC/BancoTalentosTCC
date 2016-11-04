// Template for building an verification email :)

Accounts.emailTemplates.siteName = "Banco de Talentos";
Accounts.emailTemplates.from     = "Administrador <admin@bancotalentos.herokuapp.com>";

Accounts.emailTemplates.verifyEmail = {
  subject() {
    return "[Banco de Talentos] Verifique seu email";
  },
  text( user, url ) {
    let emailAddress   = user.emails[0].address,
        urlWithoutHash = url.replace( '#/', '' ),
        supportEmail   = "suporte@bancotalentos.herokuapp.com",
        emailBody      = `Para verificar seu email (${emailAddress}) clique no link a seguir:\n\n${urlWithoutHash}\n\n Se essa requisição não foi feita por você, favor ignorar esse email. Se achar que algo está errado, por favor contate nosso suporte pelo: ${supportEmail}.`;

    return emailBody;
  }
};

Accounts.emailTemplates.resetPassword = {
  subject() {
    return "[Banco de Talentos] Recuperar sua senha";
  },
  text( user, url ) {
    let emailAddress   = user.emails[0].address,
        urlWithoutHash = url.replace( '#/', '' ),
        supportEmail   = "suporte@bancotalentos.herokuapp.com",
        emailBody      = `Foi solicitado a recuperação de senha relacionado à conta (${emailAddress}). Para resetar sua senha, favor clique no link abaixo:
                          \n\n${urlWithoutHash}\n\n Se essa requisição não foi feita por você, favor ignorar esse email. Se achar que algo está errado, por favor contate nosso suporte pelo: ${supportEmail}.`

    return emailBody;
  }
};
