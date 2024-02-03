import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    login(dto: AuthDto) {
        return { data: dto };
    }

    async register(dto: AuthDto) {
        const { email, password } = dto;
        const hash = await argon.hash(password);

        try {
            const user = await this.prisma.user.create({
                data: {
                    email,
                    hash,
                },
            });
            delete user.hash;
            return user;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                switch (error.code) {
                    case 'P2002':
                        throw new ForbiddenException(
                            'Credentials already in use',
                        );
                }
            }
            throw error;
        }
    }
}
