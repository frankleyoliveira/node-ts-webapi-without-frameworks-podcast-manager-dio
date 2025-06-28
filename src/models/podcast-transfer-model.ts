import { ContentType } from '../utils/content-type'
import { PodcastModel } from './podcast-model'

export interface PodcastTransferModel {
  type: ContentType
  statusCode: number
  body: PodcastModel[]
}
