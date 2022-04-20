import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";
import { Login001mb } from "../entities/Login001mb";


@Injectable()

export class UserManager extends BaseService {

  private userUrl: string = `${environment.apiUrl}/logincontroller`


  // alluser() {
  //   return this.getCallService(`${this.userUrl}` + "/findAll");
  // }

  // saveuser(user001mb: Login001mb) {
  //   return this.postCallService(`${this.userUrl}` + "/save", {}, user001mb);
  // }

  // updateuser(user001mb: Login001mb) {
  //   return this.putCallService(`${this.userUrl}` + "/update", {}, user001mb);
  // }

  // updateUserName(userName: any) {
  //   return this.postCallService(`${this.userUrl}` + "/updateUserName", {}, userName);
  // }

  // updatePassword(user001mb: Login001mb) {
  //   return this.postCallService(`${this.userUrl}` + "/updatePassword", {}, user001mb);
  // }

  updateUserTheme(updateTheme: any) {
    console.log("updatetheme",updateTheme)
    return this.putCallService(`${this.userUrl}` + "/updatetheme", {}, updateTheme);
  }

  deleteuser(id: any) {
    let data: any = {};
    data['id'] = id;
    return this.deleteCallService(`${this.userUrl}` + "/delete", data);
  }

// -----------------------------------------USER REGISTRATION---------------------------------------

  // registerUser(user001mb: Login001mb) {
  //   console.log("user",this.userUrl);
  //   return this.postCallService(`${this.userUrl}` + "/regSave", {}, user001mb);
  // }

  // alluserRegister() {
  //   console.log("user service");
  //   return this.getCallService(`${this.userUrl}` + "/registerfindAll");
  // }

}