import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.Strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  imports : [UsersService, PassportModule, JwtModule.register({
    secret : 'SECRET',
    signOptions : { expiresIn: '240s'}
  })],
  providers: [AuthService, LocalStrategy,UsersService,JwtStrategy],
  exports : [AuthService]

})
export class AuthModule {}




// imports : [UsersService, PassportModule.register({session:true})],
// providers: [AuthService, LocalStrategy,UsersService,SessionSerializer]
