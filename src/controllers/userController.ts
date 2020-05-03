import { Request, Response } from 'express';
import EmailService from '../services/emailService'

const users = [
    { name: 'Matheus', email: 'theusps92@gmail.com' }
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { 
                name: 'Matheus Paulino', 
                email: 'theusps92@gmail.com' 
            },
            message: { 
                subject: 'Bem vindo ao sistema', 
                body: 'Olá matheus!' 
            }
        });

        return res.send();
    }
};