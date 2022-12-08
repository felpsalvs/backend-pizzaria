import prismaClient from '../../prisma'
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

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

            const token = sign({
                email: user.email,
                name: user.name
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: "30d"
            }
            );
    
            return {
                token: token,
                id: user.id,
                name: user.name,
                email: user.email
            };
        }
    }

export { AuthUserService };