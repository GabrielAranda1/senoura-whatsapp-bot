import Twilio from 'twilio';

export const twilioClient = Twilio(
  process.env.TWILIO_ACCOUNT_SID || '',
  process.env.TWILIO_AUTH_TOKEN || ''
);

export const twilioFromNumber = process.env.TWILIO_FROM_NUMBER || '';