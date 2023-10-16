"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const dynamoDBClient_1 = require("../aws-config/dynamoDBClient");
const uuid_1 = require("uuid");
const { TABLE_NAME } = process.env;
let UserService = class UserService {
    async createUser(userEntity) {
        const result = await (0, dynamoDBClient_1.dynamoDBClient)()
            .put({
            TableName: TABLE_NAME,
            Item: {
                id: (0, uuid_1.v4)(),
                email: userEntity.email,
                password: userEntity.password,
            },
        })
            .promise();
        return result;
    }
    async findOne(email) {
        console.log(email);
        const params = {
            TableName: TABLE_NAME,
            IndexName: 'EmailIndex',
            KeyConditionExpression: 'email = :email',
            ExpressionAttributeValues: {
                ':email': email,
            },
        };
        try {
            const result = await (0, dynamoDBClient_1.dynamoDBClient)().query(params).promise();
            const { Items } = result;
            return Items;
        }
        catch (error) {
            console.error('Error querying records from DynamoDB:', error);
            throw error;
        }
    }
    async findAll() {
        const results = await (0, dynamoDBClient_1.dynamoDBClient)()
            .scan({
            TableName: TABLE_NAME,
        })
            .promise();
        return results.Items;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map