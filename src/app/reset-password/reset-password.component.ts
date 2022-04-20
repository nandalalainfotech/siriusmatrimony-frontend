import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { UserManager } from "../shared/services/restcontroller/bizservice/user.service";
import { Login001mb } from "../shared/services/restcontroller/entities/Login001mb";
import { CalloutService } from "../shared/services/services/callout.service";

@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.component.html',
	styleUrls: ['./reset-password.component.css']
})

export class ResetPasswordComponent implements OnInit {
	@Input() user001mb: Login001mb = new Login001mb();
	username: string = "";
	password: string = "";
	confirmPassword: string = "";
	insertUser: string = "";
	insertDatetime: Date | any;
	constructor(public activeModal: NgbActiveModal, private userManager: UserManager, private calloutService: CalloutService) { }

	ngOnInit() {
		this.username = this.user001mb.username ? this.user001mb.username : "";
	}

	onSaveClick() {
		if (this.password && this.confirmPassword) {
			if (this.password == this.confirmPassword) {
				this.user001mb.password = this.password;
				this.user001mb.insertUser = "insertUser";
				this.user001mb.insertDatetime = new Date();
				// this.userManager.updatePassword(this.user001mb).subscribe((response: any) => {
				// 	if (response.personId) {
				// 		this.calloutService.showSuccess("Order Updated Successfully");
				// 		this.activeModal.close('Yes');
				// 	}
				// });

			}
			else {
				this.calloutService.showError("Confirm password and password are not equal");
			}
		}
	}

	onCancelClick() {
		this.activeModal.close('No');
	}
}

