import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    login(dto: AuthDto) {
        return { data: dto };
    }

    register(dto: AuthDto) {
        return { data: dto };
    }
}
