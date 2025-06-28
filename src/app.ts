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

  if (request.method === 'GET') {
    switch (baseUrl) {
      case Routes.LIST:
        await getListEpisodes(request, response)
        break
      case Routes.ESPISODE:
        await getFilterEpisodes(request, response)
        break
    }
  }
}
