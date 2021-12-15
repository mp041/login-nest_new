import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { UsersService } from '';
import { UsersService } from '../users/users.service';


@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) { }



    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOne(username);

        if (user && user.password === password) {
            const { username, password, ...rest } = user;
            console.log(rest)
            return rest;
        }

        return null;
    }

    async login(user: any) {
        const payload = { name: user.name, sub: user.id };

        console.log("token before generate");

        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}
