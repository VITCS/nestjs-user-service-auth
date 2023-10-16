// src/user/user.service.ts
import { DynamoDB } from 'aws-sdk';
import { Injectable } from '@nestjs/common';
import { dynamoDBClient } from '../aws-config/dynamoDBClient';
import { CreateUserDto } from './user.entity';
import { v4 as uuid } from 'uuid';
const { TABLE_NAME } = process.env;

@Injectable()
export class UserService {
    private readonly dynamoDB: DynamoDB.DocumentClient;
  async createUser(userEntity: CreateUserDto){

    const result = await dynamoDBClient()
      .put({
        TableName: TABLE_NAME,
        Item: {
            id: uuid(),
            email: userEntity.email,
            password: userEntity.password,
          },
      })
      .promise();
    
      return result;
    }
    async findOne(email: string) {
        console.log(email);
        const params: DynamoDB.DocumentClient.QueryInput = {
            TableName: TABLE_NAME, // Replace with your table name
            IndexName: 'EmailIndex', // Name of your secondary index
            KeyConditionExpression: 'email = :email',
            ExpressionAttributeValues: {
              ':email': email,
            },
          };
      
          try {
            const result = await dynamoDBClient().query(params).promise();
            const { Items } = result;
            return Items;
          } catch (error) {
            console.error('Error querying records from DynamoDB:', error);
            throw error;
          }
        }
      
    async findAll() {
        const results = await dynamoDBClient()
          .scan({
            TableName: TABLE_NAME,
          })
          .promise();
    
        return results.Items;
      }
}
