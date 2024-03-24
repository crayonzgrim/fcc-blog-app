import { Request, Response } from 'express';

export const addPost = (req: Request, res: Response) => {
  res.json('Add post from controller');
};
