import { Router } from "express";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import multer from "multer";
import upload from "../../../../config/upload";

const usersRouters = Router();
const uploadAvatar = multer(upload.upload("./tmp/avatar"))

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRouters.post("/", createUserController.handle);
usersRouters.patch("/avatar", ensureAuthenticated,uploadAvatar.single("avatar"), updateUserAvatarController.handle);

export { usersRouters }