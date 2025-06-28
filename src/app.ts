import { IncomingMessage, ServerResponse } from 'http'
import {
  getListEpisodes,
  getFilterEpisodes,
} from './controllers/podcasts-controller'

import { Routes } from './routes/routes'

export const app = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const baseUrl = request.url?.split('?')[0]

  if (request.method === 'GET' && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response)
  }

  if (request.method === 'GET' && baseUrl === Routes.ESPISODE) {
    await getFilterEpisodes(request, response)
  }
}
