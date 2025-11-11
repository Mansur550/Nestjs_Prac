
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUser.dto';
import bcrypt from 'bcrypt'

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService){}

     //async
      registerUser(registerUserDto: RegisterDto){
        console.log( 'regidterDto', registerUserDto)

        //const soltRounds =10;
        //const hash= await bcrypt.hash(registerUserDto.password, soltRounds );




       const user = this.userService.getUserByEmail(registerUserDto.email)
        return user;
        //return this.userService.ceateUser({...registerUserDto, password: hash})  
      

    }
}

