import { Random } from 'mockjs'

//用户信息表
const user = {
  name: Random.cname(),
  password: Random.string(6, 10),
  email: Random.email(),
  phone: Random.string('number', 11),
  avatar: Random.image('100x100', '#50B347', '#FFF', 'png', 'avatar'),
  github: Random.url('https', 'github.com'),
}

//文章信息表
const article = {
  title: Random.string(6, 10),
  content: Random.cparagraph(10, 50),
  thumbnail: Random.image('100x100', '#50B347', '#FFF', 'png', 'avatar'),
  categoryId: Random.integer(1, 10),
}

// 分类信息表
const category = {
  title: Random.ctitle(2, 5),
  description: Random.cparagraph(1, 10),
}

export { user, article, category }
