import { Injectable } from "@angular/core";
import { UserOnClient } from "../model/usermodel/UserOnClient.model";

@Injectable({
    providedIn: 'root',
  })

export class UserService{
    static saveUserData(user: UserOnClient){
        if(!localStorage.getItem('user')){
            localStorage.setItem('user', JSON.stringify(user));
        }
    }

    static getUserLocalData(): UserOnClient{
        let userLocal = JSON.parse(localStorage.getItem('user') ?? "");
        let user = new UserOnClient();
        if(!userLocal){
            return user;
        } 
        user.address = userLocal.address;
        user.district = userLocal.district;
        user.firstname = userLocal.firstname;
        user.lastname = userLocal.lastname;
        user.ward = userLocal.ward;
        return user;
    }
}