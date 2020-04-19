const options = `Você pode perguntar sobre os <emphasis level="reduced">posts</emphasis> do blog`

module.exports = {
  'pt-BR': {
    translation: {
      WELCOME_MESSAGE: `Bem vindo a skill do Linqueta, aqui ${options}`,
      WELCOME_REPROMPT_MESSAGE: options,
      HELP_MESSAGE: options,
      FALLBACK_MESSAGE: options,
      STOP_MESSAGE: 'Até mais',
      CASES_REPROMPT_MESSAGE: 'Gostaria de saber mais alguma coisa sobre o Linqueta?',
      LAST_BLOG_POST_MESSAGE: 'O último post do blog foi <lang xml:lang="en-US">{{title}}</lang>',
      POST_QUANTITY_MESSAGE: 'Já são {{quantity}} <emphasis level="reduced">posts</emphasis> no blog do linqueta'
    }
  }
};