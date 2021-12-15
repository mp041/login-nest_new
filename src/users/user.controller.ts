import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, Res, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
// import { AppService } from './app.service';
// import { AuthService } from './auth/auth.service';
// import { AuthenticatedGuard } from './auth/authenticated.guard';
// import { JwtAuthGuard } from './auth/jwt-auth.guard';
// import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class UsersController {
  constructor(private readonly userService : UsersService) {}
  
//   @UseGuards(LocalAuthGuard)
  @Post('register')
  async login(@Res() res:Response, @Body() createUser : string ){
    const data = await this.userService.register(createUser);
    res.status(HttpStatus.OK).json(data)
  }
  
  

  

}
 