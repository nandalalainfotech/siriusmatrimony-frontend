import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthManager } from 'src/app/shared/services/restcontroller/bizservice/auth-manager.service';
import { UserManager } from 'src/app/shared/services/restcontroller/bizservice/user.service';
import { Login001mb } from 'src/app/shared/services/restcontroller/entities/Login001mb';
import { CalloutService } from 'src/app/shared/services/services/callout.service';
import { Utils } from 'src/app/shared/utils/utils';

@Component({
    selector: 'app-user-theme',
    templateUrl: './user-theme.component.html',
    styleUrls: ['./user-theme.component.css'],
})
export class UserThemeComponent implements OnInit {
    default: string = '#647a8b';
    themes: any;
    user001mb: Login001mb = new Login001mb();
    username: string = '';
    userThemeForm: FormGroup | any;
    submitted = false;
    hexToRgb: any;
    rgbToHex: any;
    @HostBinding('style.--color_l1') colorthemes_1: any;
    @HostBinding('style.--color_l2') colorthemes_2: any;
    @HostBinding('style.--color_l3') colorthemes_3: any;

    constructor(
        private authManager: AuthManager,
        private formBuilder: FormBuilder,
        private calloutService: CalloutService,
        private userManager: UserManager
    ) {}

    ngOnInit(): void {
        this.user001mb = this.authManager.getcurrentUser;
        this.userThemeForm = this.formBuilder.group({
            username: [''],
            theme: [''],
        });
        this.authManager.currentUserSubject.subscribe((object: any) => {
            let rgb = Utils.hexToRgb(object.theme);
            this.colorthemes_1 = Utils.rgbToHex(rgb, -0.6);
            this.colorthemes_2 = Utils.rgbToHex(rgb, -0.3);
            this.colorthemes_3 = Utils.rgbToHex(rgb, 0.2);
            console.log('setting area object.theme', object.theme);
            console.log('setting area colorthemes_1', this.colorthemes_1);
        });
        this.userThemeForm.patchValue({
            username: this.user001mb.username,
            theme: this.user001mb.theme,
        });
        this.themes = this.user001mb.theme;
    }

    get f() {
        return this.userThemeForm.controls;
    }

    private markFormGroupTouched(formGroup: FormGroup) {
        (<any>Object).values(formGroup.controls).forEach((control: any) => {
            control.markAsTouched();
            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }
    onChangeColorClick(userThemeForm: any) {
        this.markFormGroupTouched(this.userThemeForm);
        if (!this.userThemeForm.invalid) {
            let updateTheme: any = {};
            updateTheme.personId = this.user001mb.personid;
            updateTheme.theme = this.themes;
            this.userManager
                .updateUserTheme(updateTheme)
                .subscribe((response: any) => {
                    let currentUser = JSON.parse(
                        sessionStorage.getItem('currentUser') || '{}'
                    );
                    currentUser.userDTO.theme = response.theme;
                    // this.login001mb.theme = response.theme;
                    // this.colorthemes_1 = response.theme;
                    // this.colorthemes_2 = response.theme;
                    // this.colorthemes_2 = response.theme;

                    this.authManager.setcurrentUser(this.user001mb);
                    this.calloutService.showSuccess(
                        'New User Theme Updated Successfully'
                    );
                });
        } else {
            this.calloutService.showError(' User Theme Should Not Be Empty');
        }
    }

    defaults(event: any) {
        if (event.target.checked) {
            this.themes = this.default;
        } else {
            this.themes = this.user001mb.theme;
        }
    }
}
