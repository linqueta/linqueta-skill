const options = `Você pode perguntar sobre os <emphasis level="reduced">posts</emphasis> do blog e sobre as contribuições no Github`

module.exports = {
  'pt-BR': {
    translation: {
      WELCOME_MESSAGE: `Bem vindo a skill do Linqueta, aqui ${options}`,
      WELCOME_REPROMPT_MESSAGE: options,
      HELP_MESSAGE: options,
      FALLBACK_MESSAGE: options,
      STOP_MESSAGE: 'Até mais',
      CASES_REPROMPT_MESSAGE: 'Gostaria de saber mais algo sobre o Linqueta?',
      LAST_BLOG_POST: 'O último post do blog foi <lang xml:lang="en-US">{{title}}</lang>'
    }
  }
};