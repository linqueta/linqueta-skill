const Alexa = require('ask-sdk-core');
const handlers = require('./handlers');
const interceptors = require('./interceptors');

exports.handler = Alexa.SkillBuilders
  .custom()
  .addRequestHandlers(...handlers.commons)
  .addRequestInterceptors(...interceptors)
  .addErrorHandlers(...handlers.errors)
  .lambda();


