import { Person001mb } from "./Person001mb";
import { Role001wb } from "./Role001wb";

export class Login001mb extends Person001mb   {
    personid?: Person001mb;
    domain?: string;
    username?: string;
    password?: string;
    token?: string;
    roleid?: Role001wb;
    theme?: string | null;
}