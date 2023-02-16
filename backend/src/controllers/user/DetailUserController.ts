import { Request, Response } from 'express'
import { prismaClient } from '../../prisma/client'
import { DetailUserService } from '../../services/user/DetailUserService'

export class DetailUserController {
  async handle(req: Request, res:Response) {
    const detailUserService = new DetailUserService();

    const user = await detailUserService.execute();

    return res.json(user);
  }
}