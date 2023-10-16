import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
export declare class UserController {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    createUser(createUserDto: {
        email: string;
        password: string;
    }): Promise<import("aws-sdk/lib/request").PromiseResult<import("aws-sdk/clients/dynamodb").DocumentClient.PutItemOutput, import("aws-sdk").AWSError>>;
    findAll(): Promise<import("aws-sdk/clients/dynamodb").DocumentClient.ItemList>;
    findOne(email: string): Promise<import("aws-sdk/clients/dynamodb").DocumentClient.ItemList>;
    login(loginDto: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
