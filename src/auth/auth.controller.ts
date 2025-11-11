import { Controller, Post } from '@nestjs/common'; 
import { AuthService } from './auth.service';


@Controller('auth')  //auth /register
export class AuthController {
    //authService: AuthService;

    constructor(private readonly authService: AuthService){
       // this.authService= authService;

    }

    @Post('register')
    register(){
    //logic for user register comes fro service
    const result =this.authService.registerUser()
    return result;
}
}



