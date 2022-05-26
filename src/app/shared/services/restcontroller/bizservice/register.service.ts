import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";
import { Login001mb } from "../entities/Login001mb";
import { Person001mb } from "../entities/Person001mb";
import { User001wb } from "../entities/users001wb";

@Injectable()

export class RegisterManager extends BaseService {

  private userUrl: string = `${environment.apiUrl}/userscontroller`


  alluser() {
    return this.getCallService(`${this.userUrl}` + "/list");
  }

  saveuser(user001wb: User001wb,login001mb: Login001mb,person001mb: Person001mb) {
    let data: any = {};
    data['user001wb'] = user001wb;
    data['login001mb'] = login001mb;
    data['person001mb'] = person001mb;
    console.log("data",data)
    return this.postCallService(`${this.userUrl}` + "/create", {}, data);
  }

  updateuser(user001wb: User001wb,login001mb: Login001mb,person001mb: Person001mb) {
    let data: any = {};
    data['user001wb'] = user001wb;
    data['login001mb'] = login001mb;
    data['person001mb'] = person001mb;
    return this.putCallService(`${this.userUrl}` + "/update", {},data);
  }

}