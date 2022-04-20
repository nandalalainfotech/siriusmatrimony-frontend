import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { deserialize } from 'serializer.ts/Serializer';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { AuthManager } from '../shared/services/restcontroller/bizservice/auth-manager.service';
import { Login001mb } from '../shared/services/restcontroller/entities/Login001mb';

import { CalloutService } from '../shared/services/services/callout.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup | any;
	username: string = "";
	password: string = "";
	user001mb?: Login001mb;
	toggle1: boolean = false;
	submitted = false;
	// toggle: boolean = false;


	public showPassword: boolean | any;
	public showPasswordOnPress: boolean | any;
	constructor(private authManager: AuthManager, private modalService: NgbModal,
		private router: Router,
		private calloutService: CalloutService,
		private formBuilder: FormBuilder,
	) { }

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required],
			// domain: [null, Validators.required],
		});

	}
	get f() { return this.loginForm.controls; }



	private markFormGroupTouched(formGroup: FormGroup) {
		(<any>Object).values(formGroup.controls).forEach((control: any) => {
			control.markAsTouched();
			if (control.controls) {
				this.markFormGroupTouched(control);
			}
		});
	}


	onLoginClick(event: any, loginForm: any) {
		this.markFormGroupTouched(this.loginForm);
		this.submitted = true;
		if (this.loginForm.invalid) {
			return;
		}

		this.authManager.login(this.f.username.value, this.f.password.value).subscribe(response => {
			console.log("response", response);
			//  this.user001mb = this.authManager.getcurrentUser;

				this.router.navigate(['/app-dash-board']);
			// if (this.user001mb.status == "R") {
			// 	const modalRef = this.modalService.open(ResetPasswordComponent);
			// 	modalRef.componentInstance.user001mb = this.user001mb;
			// 	modalRef.result.then((data) => {
			// 		if (data == "Yes") {
			// 			this.router.navigate(['/app-dash-board']);
			// 		}
			// 	}, (reason) => {
			// 		if (reason == "Yes") {
			// 			this.router.navigate(['/app-dash-board']);
			// 		}
			// 	})
			// } else {
			// 	this.router.navigate(['/app-dash-board']);

			// }
		},
			err => {
				this.calloutService.showError("Invalid User", err);
			});
	}


	onRegistrationClick() {
		console.log("called")
		this.router.navigate(['/app-user-registration']);
	}


	changeType(input_field_password: { type: string; }, num: number) {
		if (input_field_password.type == "password")
			input_field_password.type = "text";
		else
			input_field_password.type = "password";

		if (num == 1)
			this.toggle1 = !this.toggle1;
		// else
		//   this.toggle2 = !this.toggle2;
	}

}