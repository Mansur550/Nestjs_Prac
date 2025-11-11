import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    ceateUser(){
        return{ message: 'User is created'};
    }
}
