import path from 'path';
import fs from 'fs';
import sharp from 'sharp';
import { twilioClient } from '../config/twilio/twilio-config';
import MessagingResponse from 'twilio/lib/twiml/MessagingResponse';

export interface TwilioMessage {
  SmsMessageSid: string
  NumMedia: string
  ProfileName: string
  SmsSid: string
  WaId: string
  SmsStatus: string
  Body: string
  To: string
  NumSegments: string
  ReferralNumMedia: string
  MessageSid: string
  AccountSid: string
  From: string
  MediaUrl0: string
  ApiVersion: string
}

class HandlePhoneMessage {

  async execute(message: TwilioMessage) {
    const { MediaUrl0 } = message;
    console.log(message)
    const image = await fetch(MediaUrl0)
    const imageBuffer = await image.arrayBuffer()

    const convertedImageBuffer = await sharp(imageBuffer)
      .webp()
      .resize(512, 512)
      .toBuffer();

    const path = this.writeImageToDisk(convertedImageBuffer);

    const responseMessage = new MessagingResponse().message('sticker salvo com sucesso')
    //responseMessage.media(`${process.env.TWILIO_BASE_URL}/media/${path}`)

    console.log('Imagem enviada com sucesso:');

    return responseMessage.toString()
  }

  private writeImageToDisk(imageBuffer: Buffer) {
    const mediaPath = path.join(__dirname, '..', '..', 'media');
    const fileName = `sticker_${Date.now()}.webp`;
    const filePath = path.join(mediaPath, fileName);

    if (!fs.existsSync(mediaPath)) {
      fs.mkdirSync(mediaPath);
    }

    fs.writeFileSync(filePath, imageBuffer);

    return filePath
  }
}

export { HandlePhoneMessage }