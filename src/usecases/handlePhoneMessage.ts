import { twilioClient } from '../config/twilio/twilio-config';

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

  async execute(message: {}) {
    console.log(message)
  }

}

export { HandlePhoneMessage }