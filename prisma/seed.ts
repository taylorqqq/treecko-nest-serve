import { article } from './seeds/article'
import { category } from './seeds/category'
import { user } from './seeds/user'

async function run() {
  await user(25)
  await category(15)
  await article(105)
}

run()
