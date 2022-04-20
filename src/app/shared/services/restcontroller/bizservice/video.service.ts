import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseService } from "../../services/base.service";
import { Photo001wb } from "../entities/Photo001wb";


@Injectable()

export class VideoManager extends BaseService {

    private videoUrl: string = `${environment.apiUrl}/videocontroller`

    allvideo() {
        return this.getCallService(`${this.videoUrl}` + "/list");
    }

    // savesub(subcategory001mb: Subcategory001mb) {
    //     console.log("subcategory001mb",subcategory001mb);
    //     return this.postCallService(`${this.subcatUrl}` + "/create", {}, subcategory001mb);
    // }

    updatesub(photo001wb: Photo001wb) {
        return this.putCallService(`${this.videoUrl}` + "/update", {}, photo001wb);
    }

    deletesub(id: any) {
        let data: any = {};
        data['id'] = id;
        return this.deleteCallService(`${this.videoUrl}` + "/delete", data);
    }

}