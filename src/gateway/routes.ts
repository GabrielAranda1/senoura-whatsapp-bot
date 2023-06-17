import { Router } from "express";
import { HandlePhoneMessageUseCase } from "../usecases";

const router = Router();

router.route("/message").post(async (req, res) => {
  const response = await HandlePhoneMessageUseCase.execute(req.body);

  res.set('Content-Type', 'text/xml');
  res.send(response).status(200);
});

export { router };