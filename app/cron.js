import { CronJob } from 'cron'
import fetch from 'node-fetch'
import _ from 'lodash'

import model from './models'

const saveData = async ({ hits }) => {
  const filtered = hits.filter(x => !x.story_title || !x.title)

  const exists = await model.find()

  const differences = _.differenceWith(filtered, exists, (x, y) => x.objectID !== y.story_id)

  const stories = differences.map(x => ({
    story_id: x.objectID,
    title: x.story_title || x.title,
    author: x.author,
    url: x.story_url || x.url || '#',
    created_at: x.created_at,
  }))

  if (stories.length > 0) await model.insertMany(stories)
}

const fetchData = async () => {
  const response = await fetch('http://hn.algolia.com/api/v1/search_by_date?query=nodejs')
  const stories = await response.json()

  saveData(stories)
}

const cron = () => new CronJob(
  '00 59 * * * *',
  () => fetchData(),
  null,
  true,
  'America/Santiago',
)

export {
  cron,
  fetchData,
}
