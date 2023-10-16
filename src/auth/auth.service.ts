// src/auth/auth.service.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User, QueryResponse } from '../user/user.interface';
import * as Joi from 'joi';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService,
    private readonly userService: UserService ) {}
    public user = {email: '',
    password: ''
   }
  async validateUser(email: string, password: string) {
    // You can perform custom validation here, e.g., checking against a database
    // For simplicity, let's assume a hardcoded user for demonstration
    const hardcodedUser = {
      email: 'testuser@test.com',
      password: '12345test',
    };

    //const result = await this.userService.findOne(email1);
    // const { email, password} = user
    //console.log('resuly: ', result)
    if (email === hardcodedUser.email && password === hardcodedUser.password) {
      return true;
    }
    return false;
  }

  async login(email: string, password: string) {
    const isValid = await this.validateUser(email, password);

    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate and return a JWT token
    const payload = { email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
