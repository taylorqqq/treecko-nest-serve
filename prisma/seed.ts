import { article } from './seeds/article'
import { category } from './seeds/category'
import { user } from './seeds/user'

function run() {
  user(20)
  category(10)

  // wait for user and category to be created
  setTimeout(() => {
    article(5)
  }, 0)
}

run()
