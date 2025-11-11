
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService){}

    registerUser(){
        //logic for register
        /**
         * 1. check if email already exist
         * hash the password 
         * 3 store the user into db
         * 4. generate jwt token 
         * send token in response
         */
        //return{message: 'User registered successfully '};
       return this.userService.ceateUser()

    }
}
