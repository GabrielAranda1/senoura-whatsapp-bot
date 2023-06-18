import { GetStickerByPath } from "./getStickerByPath";
import { HandlePhoneMessage } from "./handlePhoneMessage";

const HandlePhoneMessageUseCase = new HandlePhoneMessage();
const GetStickerByPathUseCase = new GetStickerByPath();

export { HandlePhoneMessageUseCase, GetStickerByPathUseCase }