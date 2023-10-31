# call-gpt

## Project summary

This project is part of the blogpost published [here.](https://www.twilio.com/blog/call-gpt-twilio)

## Developer environment setup
Make sure you have the software you need:

- [node.js](https://nodejs.org/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart)
- [Twilio Serverless Toolkit](https://www.twilio.com/docs/labs/serverless-toolkit)

## Environment variables

```shell
ACCOUNT_SID=<Twilio Account SID>
AUTH_TOKEN=<Twilio Auth Token>
OPENAI_API_KEY=<OpenAI API key>
```

## Available scripts
`npm run start` - starts project locally

`npm run deploy` - deploys project to Twilio Functions using credentials from .env file

## Tutorial
The blogpost with tutorial for this project you will find [here.](https://www.twilio.com/blog/call-gpt-twilio)

## Disclaimer
The project published as-is as sample code.
