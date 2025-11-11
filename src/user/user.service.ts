import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/registerUser.dto';

@Injectable()
export class UserService {

    getUserByEmail(email: string){

        return{ email};
    }





    // ceateUser(regidterDto: RegisterDto){

        
    //     return{ message: 'User is created'};
    // }
}
