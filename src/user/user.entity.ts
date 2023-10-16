// src/user/user.entity.ts
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateUserDto {
    @IsString()
    email: string;
  
    @IsString()
    password: string;
  
  }
