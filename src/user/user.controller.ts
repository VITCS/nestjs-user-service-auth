// src/user/user.controller.ts

import { Controller, Post, Body, Get, UseGuards, Request, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/auth-guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService,
    private readonly authService: AuthService
    ) {}
  

  @Post()
  async createUser(@Body() createUserDto: { email: string; password: string }) {
    // const { email, password } = createUserDto;
    const user = await this.userService.createUser(createUserDto);
    return user;
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }
  //@Post('getUser')
  @Get('byEmail/:email')
  async findOne(@Param('email') email: string) {
    return await this.userService.findOne(email);
  }

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user; // This will return the user from the JWT payload
  }

}
