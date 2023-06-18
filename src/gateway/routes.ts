import { Router } from "express";
import { HandlePhoneMessageUseCase, GetStickerByPathUseCase } from "../usecases";

const router = Router();

router.route("/message").post(async (req, res) => {
  const response = await HandlePhoneMessageUseCase.execute(req.body);

  res.set('Content-Type', 'text/xml');
  res.send(response).status(200);
});

router.route('/media/:path').get(async (req, res) => {
  const response = await GetStickerByPathUseCase.execute(req.params.path);

  res.set('Content-Type', 'image/webp');
  res.send(response).status(200);
})

export { router };