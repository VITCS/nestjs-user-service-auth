import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: UserService);
    user: {
        email: string;
        password: string;
    };
    validateUser(email: string, password: string): Promise<boolean>;
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
}
