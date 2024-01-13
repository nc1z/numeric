import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    login() {
        return { data: 'login test' };
    }

    register() {
        return { data: 'register test' };
    }
}
