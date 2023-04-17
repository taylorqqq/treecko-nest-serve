import { Inject, Injectable, Optional } from '@nestjs/common'
import { readdirSync } from 'fs'
import path from 'path'

@Injectable()
export class ConfigService {
  //   config = {} as any
  constructor(@Inject('CONFIG_OPTIONS') private readonly options: { path: string }, @Optional() private config: any) {
    // const options = { path: path.resolve(__dirname, '../configure') }
    const files = readdirSync(options.path) // 读取目录下的所有文件
    files.forEach(async (file) => {
      if (file.endsWith('.js')) {
        const module = await import(path.resolve(__dirname, options.path, file))
        this.config = { ...this.config, ...module.default() }
      }
    })
  }
  getConfig(path: string) {
    // return this.config.app.name
    return path.split('.').reduce((prev, next) => prev[next], this.config)
  }
}
