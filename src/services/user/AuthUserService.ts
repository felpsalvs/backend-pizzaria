import prismaClient from '../../prisma'
import { compare } from 'bcryptjs';

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    
        async execute({ email, password }: AuthRequest) {
            const user = await prismaClient.user.findFirst({
                where: {
                    email: email
                }
            });
    
            if(!user) {
                throw new Error("Email/Password incorrect");
            }

            const passwordMatch = await compare(password, user.password);

            if(!passwordMatch) {
                throw new Error("Email/Password incorrect");
            }
    
            return { ok: true};
        }
    }

export { AuthUserService };