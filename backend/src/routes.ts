import { Router, Request, Response } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";

export const router = Router();

router.post('/users', new CreateUserController().handle)
