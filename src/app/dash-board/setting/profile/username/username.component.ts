import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthManager } from 'src/app/shared/services/restcontroller/bizservice/auth-manager.service';
import { UserManager } from 'src/app/shared/services/restcontroller/bizservice/user.service';
import { Login001mb } from 'src/app/shared/services/restcontroller/entities/Login001mb';
import { CalloutService } from 'src/app/shared/services/services/callout.service';

@Component({
	selector: 'app-username',
	templateUrl: './username.component.html',
	styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
	submitted = false;
	userNameForm: FormGroup | any;
	user001mb: Login001mb = new Login001mb();
	personId: number | any;
	username: string = "";
	newusername: string = "";
	insertUser: string = "";
	insertDatetime: Date | any;
	constructor(private authManager: AuthManager, private userManager: UserManager, private formBuilder: FormBuilder, private calloutService: CalloutService,) { }

	ngOnInit(): void {
		this.user001mb = this.authManager.getcurrentUser;
		this.userNameForm = this.formBuilder.group({
			username: [''],
			newusername: ['', [Validators.required, Validators.minLength(4)]]
		});
		this.f.username.value = this.user001mb.username ? this.user001mb.username : "";
	}

	get f() { return this.userNameForm.controls; }

	private markFormGroupTouched(formGroup: FormGroup) {
		(<any>Object).values(formGroup.controls).forEach((control: any) => {
			control.markAsTouched();
			if (control.controls) {
				this.markFormGroupTouched(control);
			}
		});
	}

	onUserFormClick() {
		this.markFormGroupTouched(this.userNameForm);
		this.submitted = true;
		if (!this.userNameForm.invalid) {
			let updateUser: any = {};
			updateUser.personId = this.user001mb.personid;
			updateUser.oldUsername = this.f.username.value;
			updateUser.newUsername = this.f.newusername.value;
			this.userManager.updateUserName(updateUser).subscribe((response: any) => {
				this.calloutService.showSuccess("New User Name Updated Successfully");
				this.userNameForm.controls.newusername.reset();
			});
		} else {
			this.calloutService.showError("New User Name Should Not Be Empty");
		}
	}

	onReset() {
		this.submitted = false;
		this.userNameForm.controls.newusername.reset();
	}
}
