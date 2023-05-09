import { HandlePhoneMessageUseCase } from "src/usecases";
import { Router } from "express";

const router = Router();

router.route("/message").post((req, res) => {
  console.log(req.body)
  //HandlePhoneMessageUseCase.execute({});
  res.status(200).send();
});

export { router };