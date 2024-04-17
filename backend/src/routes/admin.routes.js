import { Router } from "express";
import { loginAdmin, logoutAdmin, registerAdmin } from "../controllers/admin.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router();

router
  .route("/register")
  .post(upload.fields([{ name: "image", maxCount: 1 }]), registerAdmin);

  router.route("/login").post(loginAdmin)

  //secured router

  router.route("/logout").post(verifyJwt, logoutAdmin)

export default router;