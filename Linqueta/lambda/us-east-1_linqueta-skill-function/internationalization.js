const help = `Você pode perguntar qual foi o último <lang xml:lang="en-US">post</lang> do blog ou quantos <lang xml:lang="en-US">postis</lang> já foram feitos`;

module.exports = {
  'pt-BR': {
    translation: {
      WELCOME_MESSAGE: `Bem vindo ao blog do Linqueta. Para começar ${help}. O que gostaria de fazer?`,
      WELCOME_REPROMPT_MESSAGE: help,
      HELP_MESSAGE: `Para te ajudar, ${help}`,
      FALLBACK_MESSAGE: `Ops, não entendi o que você disse, aqui ${help}`,
      STOP_MESSAGE: 'Até mais',
      LAST_BLOG_POST_MESSAGE: `O último <lang xml:lang="en-US">post</lang> do blog foi <lang xml:lang="en-US">{{title}}</lang>`,
      POST_QUANTITY_MESSAGE: `Já são {{quantity}} <lang xml:lang="en-US">postis</lang> no blog do linqueta`
    }
  }
};