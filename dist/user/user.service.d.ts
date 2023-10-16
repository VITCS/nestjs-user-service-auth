import { DynamoDB } from 'aws-sdk';
import { CreateUserDto } from './user.entity';
export declare class UserService {
    private readonly dynamoDB;
    createUser(userEntity: CreateUserDto): Promise<import("aws-sdk/lib/request").PromiseResult<DynamoDB.DocumentClient.PutItemOutput, import("aws-sdk").AWSError>>;
    findOne(email: string): Promise<DynamoDB.DocumentClient.ItemList>;
    findAll(): Promise<DynamoDB.DocumentClient.ItemList>;
}
