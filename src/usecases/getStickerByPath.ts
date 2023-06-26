import fs from 'fs'
import path from 'path'

class GetStickerByPath {
  async execute(filePath: string) {
    const completePath = path.join(__dirname, '..', '..', 'media', filePath)

    const sticker = fs.readFileSync(completePath)

    this.removeImageFromDisk(completePath)

    return sticker
  }

  private removeImageFromDisk(filePath: string) {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(err)
        return
      }
    })
  }
}

export { GetStickerByPath }