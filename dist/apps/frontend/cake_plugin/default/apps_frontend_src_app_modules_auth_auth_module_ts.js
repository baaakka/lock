"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["apps_frontend_src_app_modules_auth_auth_module_ts"],{

/***/ 9563:
/*!*******************************************************************!*\
  !*** ./apps/frontend/src/app/modules/auth/auth-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ 5184);
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ 1951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    {
        path: 'sign-up',
        component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__.SignUpComponent,
    },
    {
        path: 'sign-in',
        component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__.SignInComponent,
    }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 3297:
/*!***********************************************************!*\
  !*** ./apps/frontend/src/app/modules/auth/auth.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 9563);
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ 1951);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 811);
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ 5184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__.SignUpComponent, _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__.SignInComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 5184:
/*!************************************************************************************!*\
  !*** ./apps/frontend/src/app/modules/auth/components/sign-in/sign-in.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInComponent": () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/api.service */ 554);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth.service */ 5894);
/* harmony import */ var _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/classes/watcher */ 34);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/input/input.component */ 9852);













function SignInComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SignInComponent_form_3_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "cake-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "cake-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 7)(6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_8_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", "Enter email")("control", ctx_r0.form.controls["email"])("error", ctx_r0.getEmailError());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", "Enter password")("hasEye", true)("defaultType", "password")("control", ctx_r0.form.controls["password"])("error", ctx_r0.isError("password") && ((tmp_8_0 = ctx_r0.form.get("password")) == null ? null : tmp_8_0.hasError("required")) ? "This field is required" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.form.invalid || ctx_r0.waitingResponse);
} }
class SignInComponent extends _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_2__.Watcher {
    constructor(fb, apiService, authService, router) {
        super();
        this.fb = fb;
        this.apiService = apiService;
        this.authService = authService;
        this.router = router;
        this.waitingResponse = false;
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.form = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
        });
    }
    submit() {
        const body = {
            ...this.form.value
        };
        this.waitingResponse = true;
        this.apiService.signIn(body).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unsubscribe)).subscribe((res) => {
            this.waitingResponse = false;
            this.authService.signIn(res);
            this.router.navigate(['/home']);
        }, () => {
            this.waitingResponse = false;
        });
    }
    getEmailError() {
        if (this.isError('email')) {
            if (this.form.get('email')?.hasError('required')) {
                return 'Email is required';
            }
            return 'Email is invalid';
        }
        return '';
    }
    isError(controlName) {
        return this.form.get(controlName)?.invalid && this.form.get(controlName)?.errors && (this.form.get(controlName)?.dirty || this.form.get(controlName)?.touched);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
SignInComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["cake-sign-in"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 1, consts: [[1, "flex-block"], [1, "logo"], ["src", "../../../../../assets/imgs/logo.png", "alt", "logo"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "questions-block"], [1, "forgot-pass-block"], [1, "text"], [1, "login-btn"], [1, "button", "tertiary"], [1, "need-account-block"], ["routerLink", "/auth/sign-up", 1, "button", "tertiary"], [3, "formGroup", "ngSubmit"], [1, "input-block"], [3, "placeholder", "control", "error"], [3, "placeholder", "hasEye", "defaultType", "control", "error"], [1, "button", "primary", 3, "disabled"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SignInComponent_form_3_Template, 8, 10, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Get new one");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9)(13, "div", 6)(14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Need an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 7)(17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Sign up here");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\u00A9 2022 Cak3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.form);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent], styles: [".input-control[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.flex-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 424px;\n  height: calc(100vh - 140px);\n  margin: auto;\n  padding: 100px 20px 40px;\n}\n\n@media (min-height: 1000px) {\n  .flex-block[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n.flex-block[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.flex-block[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 185px;\n}\n\n.flex-block[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.flex-block[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-block[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.flex-block[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  width: 201px;\n  margin: auto;\n  margin-bottom: 50px;\n}\n\n.flex-block[_ngcontent-%COMP%]   .questions-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.flex-block[_ngcontent-%COMP%]   .questions-block[_ngcontent-%COMP%]   .forgot-pass-block[_ngcontent-%COMP%], .flex-block[_ngcontent-%COMP%]   .questions-block[_ngcontent-%COMP%]   .need-account-block[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.flex-block[_ngcontent-%COMP%]   .questions-block[_ngcontent-%COMP%]   .forgot-pass-block[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .flex-block[_ngcontent-%COMP%]   .questions-block[_ngcontent-%COMP%]   .need-account-block[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Gilroy-300;\n  font-size: 16px;\n  color: var(--color-fonts-2);\n}\n\n.flex-block[_ngcontent-%COMP%]   .questions-block[_ngcontent-%COMP%]   .need-account-block[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n  border-top: 1px solid var(--color-tertiary-5);\n}\n\n.flex-block[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  font-family: Gilroy-300;\n  font-size: 16px;\n  color: var(--color-fonts-2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFERjs7QUFHRTtFQVZGO0lBV0ksdUJBQUE7RUFBRjtBQUNGOztBQUVFO0VBQ0UsbUJBQUE7QUFBSjs7QUFDSTtFQUNFLFlBQUE7QUFDTjs7QUFHRTtFQUNFLFdBQUE7QUFESjs7QUFHSTtFQUNFLG1CQUFBO0FBRE47O0FBSUk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRk47O0FBTUU7RUFDRSxXQUFBO0FBSko7O0FBS0k7O0VBRUUsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSE47O0FBS1E7O0VDa0NOLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FEbkNGOztBQUtJO0VBQ0UsbUJBQUE7RUFDQSw2Q0FBQTtBQUhOOztBQU9FO0VDc0JBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FEMUJGIiwiZmlsZSI6InNpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9taXhpbnMnO1xuXG4uaW5wdXQtY29udHJvbCB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5mbGV4LWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXgtd2lkdGg6IDQyNHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNDBweCk7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMTAwcHggMjBweCA0MHB4O1xuXG4gIEBtZWRpYSAobWluLWhlaWdodDogMTAwMHB4KSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAubG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDE4NXB4O1xuICAgIH1cbiAgfVxuXG4gIGZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmlucHV0LWJsb2NrIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLmxvZ2luLWJ0biB7XG4gICAgICB3aWR0aDogMjAxcHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIH1cbiAgfVxuXG4gIC5xdWVzdGlvbnMtYmxvY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5mb3Jnb3QtcGFzcy1ibG9jayxcbiAgICAubmVlZC1hY2NvdW50LWJsb2NrIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC50ZXh0IHtcbiAgICAgICAgcCB7XG4gICAgICAgICAgQGluY2x1ZGUgR2lscm95LTMwMC0xNi1mb250cy0yKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmVlZC1hY2NvdW50LWJsb2NrIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItdGVydGlhcnktNSk7XG4gICAgfVxuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBAaW5jbHVkZSBHaWxyb3ktMzAwLTE2LWZvbnRzLTIoKTtcbiAgfVxufVxuIiwiQG1peGluIGJ0bi1ob3ZlcigkdGV4dENvbG9yLCAkYmcsICRib3JkZXJDb2xvcikge1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHRleHRDb2xvcjtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgfVxufVxuXG5AbWl4aW4gYnRuLWRpc2FibGVkKCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gICY6ZGlzYWJsZWQge1xuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG4gIH1cbn1cblxuQG1peGluIGJ0bi1kZWZhdWx0KCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gIGNvbG9yOiAkdGV4dENvbG9yO1xuICBiYWNrZ3JvdW5kOiAkYmc7XG4gIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZWFyLWJnKCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG59XG5cbkBtaXhpbiBib3JkZXItZ3JhZGllbnQtbGluZWFyKCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJvcmRlci1pbWFnZTogIGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItYm9yZGVyKFxuICAkZGVnLFxuICAkbGVmdENvbG9yLFxuICAkcmlnaHRDb2xvcixcbiAgJGJvcmRlcldpZHRoLFxuICAkYm9yZGVyUmFkaXVzXG4pIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XG4gICAgcGFkZGluZzogJGJvcmRlcldpZHRoO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG4gICAgLXdlYmtpdC1tYXNrOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiAwIDApIGNvbnRlbnQtYm94LFxuICAgICAgLyogWzFdICovIGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCk7IC8qIFsyXSAqL1xuICAgIC13ZWJraXQtbWFzay1jb21wb3NpdGU6IHhvcjsgLyogWzNdINC00LvRjyDQv9GW0LTRgtGA0LjQvNC60Lgg0LHRgNCw0YPQt9C10YDRltCyICovXG4gICAgbWFzay1jb21wb3NpdGU6IGV4Y2x1ZGU7IC8qIFszXSAqL1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItdGV4dCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGVmdENvbG9yO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtaXhpbiBlcnJvci1tZXNzYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IEdpbHJveS00MDA7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dChcbiAgICB2YXIoLS1kZWctZ3JhZGllbnQtNCksXG4gICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC00KSxcbiAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC00KVxuICApO1xufVxuXG5AbWl4aW4gR2lscm95LTMwMC0xNi1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6IEdpbHJveS0zMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xufVxuXG5AbWl4aW4gR2lscm95LTQwMC0zMC1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6IEdpbHJveS00MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xufVxuXG5AbWl4aW4gR2lscm95LTUwMC0xNC1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6IEdpbHJveS01MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xufVxuIl19 */"] });


/***/ }),

/***/ 1951:
/*!************************************************************************************!*\
  !*** ./apps/frontend/src/app/modules/auth/components/sign-up/sign-up.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/api.service */ 554);
/* harmony import */ var _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/classes/watcher */ 34);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ 5894);
/* harmony import */ var libs_lib_api_interface_src_lib_model_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/lib-api-interface/src/lib/model/role */ 4884);
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/toaster.service */ 905);
/* harmony import */ var apps_frontend_src_app_core_types_toaster_position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apps/frontend/src/app/core/types/toaster-position */ 7564);
/* harmony import */ var apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apps/frontend/src/environments/environment */ 9386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/input/input.component */ 9852);
/* harmony import */ var _shared_components_congratulations_screen_congratulations_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/congratulations-screen/congratulations-screen.component */ 708);


















function SignUpComponent_div_0_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function SignUpComponent_div_0_form_3_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "cake-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "cake-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "cake-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "cake-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "cake-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "cake-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "cake-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 15)(16, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    let tmp_3_0;
    let tmp_6_0;
    let tmp_9_0;
    let tmp_25_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", "Enter your first name")("control", ctx_r2.form.controls["firstName"])("error", ctx_r2.isError("firstName") && ((tmp_3_0 = ctx_r2.form.get("firstName")) == null ? null : tmp_3_0.hasError("required")) ? "This field is required" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", "Enter your last name")("control", ctx_r2.form.controls["lastName"])("error", ctx_r2.isError("lastName") && ((tmp_6_0 = ctx_r2.form.get("lastName")) == null ? null : tmp_6_0.hasError("required")) ? "This field is required" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", "Create username")("control", ctx_r2.form.controls["username"])("error", ctx_r2.isError("username") && ((tmp_9_0 = ctx_r2.form.get("username")) == null ? null : tmp_9_0.hasError("required")) ? "This field is required" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", "Password")("hasEye", true)("defaultType", "password")("control", ctx_r2.form.controls["password"])("error", ctx_r2.getPasswordError());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", "Verify password")("hasEye", true)("defaultType", "password")("control", ctx_r2.form.controls["verifyPassword"])("error", ctx_r2.getVerifyPassError());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", "Enter email")("control", ctx_r2.form.controls["email"])("error", ctx_r2.getEmailError());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", "Create recovery phrase")("control", ctx_r2.form.controls["recoveryPhase"])("error", ctx_r2.isError("recoveryPhase") && ((tmp_25_0 = ctx_r2.form.get("recoveryPhase")) == null ? null : tmp_25_0.hasError("required")) ? "This field is required" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r2.form.invalid);
} }
function SignUpComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, SignUpComponent_div_0_form_3_Template, 18, 27, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 6)(5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 8)(8, "div", 9)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Already have an account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 10)(12, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, " Sign in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "\u00A9 2022 Cak3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.form);
} }
function SignUpComponent_cake_congratulations_screen_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "cake-congratulations-screen", 17);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isNeedPlugin", !ctx_r1.environment.plugin)("router", !ctx_r1.environment.plugin ? "/grab-a-slice" : "/home");
} }
class SignUpComponent extends _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_1__.Watcher {
    constructor(fb, apiService, authService, customToasterService) {
        super();
        this.fb = fb;
        this.apiService = apiService;
        this.authService = authService;
        this.customToasterService = customToasterService;
        this.isRegisterDone = false;
        this.environment = apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment;
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.form = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(6)]],
            verifyPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(6)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.email]],
            recoveryPhase: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        });
    }
    submit() {
        const body = {
            ...this.form.value,
            ...{ role: libs_lib_api_interface_src_lib_model_role__WEBPACK_IMPORTED_MODULE_3__.Role.kol }
        };
        delete body.verifyPassword;
        this.apiService.signUp(body).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe)).subscribe((res) => {
            this.authService.signIn(res);
            this.isRegisterDone = true;
        }, (err) => {
            if (err.status === 400 /* HttpStatusCode.BadRequest */ && err.error.code === 'P2002') {
                this.customToasterService.showErrorToaster(apps_frontend_src_app_core_types_toaster_position__WEBPACK_IMPORTED_MODULE_5__.ToasterPosition.topCenter, `User ${this.form.value.username} already exist`);
            }
        });
    }
    getEmailError() {
        if (this.isError('email')) {
            if (this.form.get('email')?.hasError('required')) {
                return 'Email is required';
            }
            return 'Email is invalid';
        }
        return '';
    }
    getPasswordError() {
        if (this.isError('password')) {
            if (this.form.get('password')?.hasError('required')) {
                return 'Password is required';
            }
            return 'Password must be at least 6 characters long';
        }
        return '';
    }
    getVerifyPassError() {
        if (this.form.get('verifyPassword')?.touched && this.form.get('verifyPassword')?.value !== this.form.get('password')?.value) {
            return "Passwords don't match";
        }
        return '';
    }
    isError(controlName) {
        return this.form.get(controlName)?.invalid && this.form.get(controlName)?.errors && (this.form.get(controlName)?.dirty || this.form.get(controlName)?.touched);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__.CustomToasterService)); };
SignUpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["cake-sign-up"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["class", "flex-block", 4, "ngIf"], ["title", "Congratulations!", "titleImg", "../../../assets/imgs/Party-popper.png", "mark", "../../../assets/imgs/check-mark-button.png", "text", "You have successfully registered", "btnText", "Grab a slice!", 3, "isNeedPlugin", "router", 4, "ngIf"], [1, "flex-block"], [1, "logo"], ["src", "../../../../../assets/imgs/logo.png", "alt", "logo"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "cancel-block"], ["routerLink", "/auth/sign-in", 1, "button", "tertiary"], [1, "have-account-block"], [1, "text"], [1, "login-btn"], [3, "formGroup", "ngSubmit"], [1, "input-block"], [3, "placeholder", "control", "error"], [3, "placeholder", "hasEye", "defaultType", "control", "error"], [1, "sign-up-btn"], [1, "button", "primary", 3, "disabled"], ["title", "Congratulations!", "titleImg", "../../../assets/imgs/Party-popper.png", "mark", "../../../assets/imgs/check-mark-button.png", "text", "You have successfully registered", "btnText", "Grab a slice!", 3, "isNeedPlugin", "router"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, SignUpComponent_div_0_Template, 16, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SignUpComponent_cake_congratulations_screen_1_Template, 1, 2, "cake-congratulations-screen", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isRegisterDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isRegisterDone);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_7__.InputComponent, _shared_components_congratulations_screen_congratulations_screen_component__WEBPACK_IMPORTED_MODULE_8__.CongratulationsScreenComponent], styles: [".input-control[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.flex-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 424px;\n  height: calc(100% - 140px);\n  margin: auto;\n  padding: 100px 20px 40px;\n}\n\n@media (min-height: 1000px) {\n  .flex-block[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n.flex-block[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.flex-block[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 185px;\n}\n\n.flex-block[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.flex-block[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-block[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.flex-block[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .sign-up-btn[_ngcontent-%COMP%] {\n  width: 202px;\n  margin: auto;\n}\n\n.flex-block[_ngcontent-%COMP%]   .cancel-block[_ngcontent-%COMP%] {\n  margin: 24px auto 50px;\n}\n\n.flex-block[_ngcontent-%COMP%]   .have-account-block[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top: 1px solid var(--color-tertiary-5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 80px;\n}\n\n.flex-block[_ngcontent-%COMP%]   .have-account-block[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Gilroy-300;\n  font-size: 16px;\n  color: var(--color-fonts-2);\n}\n\n.flex-block[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  font-family: Gilroy-300;\n  font-size: 16px;\n  color: var(--color-fonts-2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFERjs7QUFHRTtFQVZGO0lBV0ksdUJBQUE7RUFBRjtBQUNGOztBQUVFO0VBQ0UsbUJBQUE7QUFBSjs7QUFDSTtFQUNFLFlBQUE7QUFDTjs7QUFHRTtFQUNFLFdBQUE7QUFESjs7QUFHSTtFQUNFLG1CQUFBO0FBRE47O0FBSUk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUZOOztBQU1FO0VBQ0Usc0JBQUE7QUFKSjs7QUFPRTtFQUNFLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFPTTtFQ2dDSix1QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBRHBDRjs7QUFRRTtFQzBCQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBRC9CRiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwvbWl4aW5zJztcblxuLmlucHV0LWNvbnRyb2wge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uZmxleC1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWF4LXdpZHRoOiA0MjRweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNDBweCk7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMTAwcHggMjBweCA0MHB4O1xuXG4gIEBtZWRpYSAobWluLWhlaWdodDogMTAwMHB4KSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAubG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDE4NXB4O1xuICAgIH1cbiAgfVxuXG4gIGZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmlucHV0LWJsb2NrIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLnNpZ24tdXAtYnRuIHtcbiAgICAgIHdpZHRoOiAyMDJweDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gIH1cblxuICAuY2FuY2VsLWJsb2NrIHtcbiAgICBtYXJnaW46IDI0cHggYXV0byA1MHB4O1xuICB9XG5cbiAgLmhhdmUtYWNjb3VudC1ibG9jayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXRlcnRpYXJ5LTUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgIC50ZXh0IHtcbiAgICAgIHAge1xuICAgICAgICBAaW5jbHVkZSBHaWxyb3ktMzAwLTE2LWZvbnRzLTIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb290ZXIge1xuICAgIEBpbmNsdWRlIEdpbHJveS0zMDAtMTYtZm9udHMtMigpO1xuICB9XG59XG4iLCJAbWl4aW4gYnRuLWhvdmVyKCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbkBtaXhpbiBidG4tZGlzYWJsZWQoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgJjpkaXNhYmxlZCB7XG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gICAgYmFja2dyb3VuZDogJGJnO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcbiAgfVxufVxuXG5AbWl4aW4gYnRuLWRlZmF1bHQoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gIGJhY2tncm91bmQ6ICRiZztcbiAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItYmcoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbn1cblxuQG1peGluIGJvcmRlci1ncmFkaWVudC1saW5lYXIoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYm9yZGVyLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci1ib3JkZXIoXG4gICRkZWcsXG4gICRsZWZ0Q29sb3IsXG4gICRyaWdodENvbG9yLFxuICAkYm9yZGVyV2lkdGgsXG4gICRib3JkZXJSYWRpdXNcbikge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcbiAgICBwYWRkaW5nOiAkYm9yZGVyV2lkdGg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbiAgICAtd2Via2l0LW1hc2s6IGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCkgY29udGVudC1ib3gsXG4gICAgICAvKiBbMV0gKi8gbGluZWFyLWdyYWRpZW50KCNmZmYgMCAwKTsgLyogWzJdICovXG4gICAgLXdlYmtpdC1tYXNrLWNvbXBvc2l0ZTogeG9yOyAvKiBbM10g0LTQu9GPINC/0ZbQtNGC0YDQuNC80LrQuCDQsdGA0LDRg9C30LXRgNGW0LIgKi9cbiAgICBtYXNrLWNvbXBvc2l0ZTogZXhjbHVkZTsgLyogWzNdICovXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci10ZXh0KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsZWZ0Q29sb3I7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuQG1peGluIGVycm9yLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LWZhbWlseTogR2lscm95LTQwMDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KFxuICAgIHZhcigtLWRlZy1ncmFkaWVudC00KSxcbiAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTQpLFxuICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTQpXG4gICk7XG59XG5cbkBtaXhpbiBHaWxyb3ktMzAwLTE2LWZvbnRzLTIge1xuICBmb250LWZhbWlseTogR2lscm95LTMwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG59XG5cbkBtaXhpbiBHaWxyb3ktNDAwLTMwLWZvbnRzLTIge1xuICBmb250LWZhbWlseTogR2lscm95LTQwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG59XG5cbkBtaXhpbiBHaWxyb3ktNTAwLTE0LWZvbnRzLTIge1xuICBmb250LWZhbWlseTogR2lscm95LTUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG59XG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=apps_frontend_src_app_modules_auth_auth_module_ts.js.map