import fs from 'fs'
import path from 'path'

class GetStickerByPath {
  async execute(filePath: string) {
    const sticker = fs.readFileSync(path.join(__dirname, '..', '..', 'media', filePath))
    return sticker
  }
}

export { GetStickerByPath }