// Imports global types
import '@twilio-labs/serverless-runtime-types'
// Fetches specific types
import {Context, ServerlessCallback, ServerlessFunctionSignature} from '@twilio-labs/serverless-runtime-types/types'

import Configuration from 'openai'
import OpenAIApi from 'openai'

type Env = {
  OPENAI_API_KEY: string
}

type Request = {
  prompt: string
}

export const handler: ServerlessFunctionSignature<Env, Request> = async function (
  context: Context<Env>,
  event: Request,
  callback: ServerlessCallback,
) {

  console.log(event)
  console.log(`Prompt >>> ${event.prompt}`)

  if (!event.prompt) {
    const response = new Twilio.Response()
    response.setStatusCode(400)
    response.setBody({error: 'Prompt is empty'})
    response.appendHeader('Content-Type', 'application/json')
    return callback(null, response)
  }

  try {
    const openai = new OpenAIApi({apiKey: context.OPENAI_API_KEY})

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {'role': 'system', 'content': 'You are a helpful assistant.'},
        {'role': 'user', 'content': event.prompt},
      ],
    })

    const gptResponse = completion.choices[0].message.content
    console.log(`Response >>> ${gptResponse}`)

    const response = new Twilio.Response()
    response.setStatusCode(200)
    response.setBody({response: gptResponse})
    response.appendHeader('Content-Type', 'application/json')
    return callback(null, response)
  } catch (e: any) {
    console.error(e)
    const response = new Twilio.Response()
    response.setStatusCode(500)
    response.setBody({error: e.message})
    response.appendHeader('Content-Type', 'application/json')
    return callback(null, response)
  }
}