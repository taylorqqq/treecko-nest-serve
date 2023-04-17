import { Injectable } from '@nestjs/common'
import { readdirSync } from 'fs'
import path from 'path'

@Injectable()
export class ConfigService {
  config = {} as any
  constructor() {
    const src = path.resolve(__dirname, '../configure')
    const files = readdirSync(src) // 读取目录下的所有文件
    files.forEach(async (file) => {
      if (file.endsWith('.js')) {
        const module = await import(path.resolve(__dirname, src, file))
        this.config = { ...this.config, ...module.default() }
      }
    })
  }
  getConfig(path: string) {
    // return this.config.app.name
    return path.split('.').reduce((prev, next) => prev[next], this.config)
  }
}
