// import { article } from './seeds/article'
// import { category } from './seeds/category'
// import { user } from './seeds/user'
import { mixin } from './seeds/mixin'
import { user, category, article } from './seeds/dbData'

function run() {
  // user(20)
  // category(10)
  // wait for user and category to be created
  // setTimeout(() => {
  //   article(5)
  // }, 0)

  mixin(20, 'treecko_user', user)
  mixin(15, 'treecko_category', category)
  mixin(10, 'treecko_article', article)
}

run()
