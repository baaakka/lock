"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["apps_frontend_src_app_modules_profile_profile_module_ts"],{

/***/ 706:
/*!***************************************************************************************!*\
  !*** ./apps/frontend/src/app/modules/profile/components/profile/profile.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/classes/watcher */ 34);
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/url.service */ 7664);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/modals.service */ 5414);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/api.service */ 554);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ 5894);
/* harmony import */ var _services_mapper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/mapper.service */ 5222);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/theme.service */ 1266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-skeleton-loader */ 8495);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/input/input.component */ 9852);






















function ProfileComponent_div_5_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 18);
  }

  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("src", item_r7, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}

const _c0 = function (a2) {
  return {
    width: "100%",
    height: "100%",
    "background-color": a2
  };
};

function ProfileComponent_div_5_ngx_skeleton_loader_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-skeleton-loader", 19);
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r9.activeTheme.properties["--skeleton-color"]));
  }
}

function ProfileComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ProfileComponent_div_5_img_1_Template, 1, 1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ProfileComponent_div_5_ngx_skeleton_loader_2_Template, 1, 3, "ngx-skeleton-loader", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.userProfile);
  }
}

function ProfileComponent_img_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 20);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("src", ctx_r1.userProfile.avatar || ctx_r1.profileImg, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}

const _c1 = function (a2) {
  return {
    width: "88px",
    height: "88px",
    "background-color": a2,
    "margin-left": "8px"
  };
};

function ProfileComponent_ngx_skeleton_loader_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-skeleton-loader", 21);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c1, ctx_r2.activeTheme.properties["--skeleton-color"]));
  }
}

function ProfileComponent_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r11.userProfile.username);
  }
}

function ProfileComponent_div_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r12.userProfile.sugar), " Sugar");
  }
}

const _c2 = function (a2) {
  return {
    width: "90px",
    height: "17px",
    "background-color": a2,
    margin: "5px 0 0"
  };
};

function ProfileComponent_div_11_ngx_skeleton_loader_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-skeleton-loader", 28);
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c2, ctx_r13.activeTheme.properties["--skeleton-color"]));
  }
}

const _c3 = function (a2) {
  return {
    width: "90px",
    height: "17px",
    "background-color": a2,
    margin: 0
  };
};

function ProfileComponent_div_11_ngx_skeleton_loader_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-skeleton-loader", 28);
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c3, ctx_r14.activeTheme.properties["--skeleton-color"]));
  }
}

function ProfileComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ProfileComponent_div_11_span_1_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ProfileComponent_div_11_span_2_Template, 3, 3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ProfileComponent_div_11_ngx_skeleton_loader_3_Template, 1, 3, "ngx-skeleton-loader", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, ProfileComponent_div_11_ngx_skeleton_loader_4_Template, 1, 3, "ngx-skeleton-loader", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r3.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r3.userProfile);
  }
}

function ProfileComponent_div_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r15.label);
  }
}

function ProfileComponent_div_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, item_r15.value));
  }
}

function ProfileComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ProfileComponent_div_14_span_1_Template, 2, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ProfileComponent_div_14_span_2_Template, 3, 3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.userProfile);
  }
}

function ProfileComponent_ng_template_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37)(1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "cake-input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 40)(4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProfileComponent_ng_template_15_div_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r23.onSaveButtonClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx_r20.profileNameControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r20.isErrorMessageVisible || ctx_r20.enteredInvalidName);
  }
}

const _c4 = function (a2) {
  return {
    width: "100%",
    height: "49px",
    "background-color": a2
  };
};

function ProfileComponent_ng_template_15_ngx_skeleton_loader_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-skeleton-loader", 19);
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c4, ctx_r21.activeTheme.properties["--skeleton-color"]));
  }
}

function ProfileComponent_ng_template_15_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Profile name is already in use");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function ProfileComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ProfileComponent_ng_template_15_div_1_Template, 6, 2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ProfileComponent_ng_template_15_ngx_skeleton_loader_2_Template, 1, 3, "ngx-skeleton-loader", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ProfileComponent_ng_template_15_span_3_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r6.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.isErrorMessageVisible || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 3, ctx_r6.isErrorVisible));
  }
}

class ProfileComponent extends _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_0__.Watcher {
  constructor(urlService, activatedRoute, modalService, apiService, authService, mapper, themeService) {
    super();
    this.urlService = urlService;
    this.activatedRoute = activatedRoute;
    this.modalService = modalService;
    this.apiService = apiService;
    this.authService = authService;
    this.mapper = mapper;
    this.themeService = themeService;
    this.isProfileOnly = this.activatedRoute.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(data => {
      return data['settings'] ? false : true;
    }));
    this.isErrorVisible = this.modalService.hasUsernameExistError$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(data => data));
    this.profileSLices = [];
    this.profileInfoData = [];
    this.mockArrayData = Array(10).fill('');
    this.QUERY = {
      page: 1,
      pageSize: 10
    };
  }

  get activeTheme() {
    return this.themeService.active;
  }

  get profileImg() {
    return this.authService.randomAvatar;
  }

  ngOnInit() {
    this.urlService.setPageTitle('profile');
    this.subscribes();
  }

  subscribes() {
    this.authService.userProfile.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.tap)(data => {
      this.userProfile = data;
      this.profileInfoData = this.mapper.userProfileMapper(this.userProfile);
      this.profileNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.userProfile.username);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.switchMap)(result => this.apiService.getUserById(result.id, this.QUERY)), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.tap)(data => {
      this.profileSLices = data.data.rewards.map(slice => slice.smallImage);
    })).subscribe();
  }

  get isErrorMessageVisible() {
    return this.userProfile ? this.userProfile.username === this.profileNameControlValue : false;
  }

  onSaveButtonClick() {
    if (!this.isErrorMessageVisible) {
      this.modalService.openSettingsConfirmationPopup(this.profileNameControlValue, this.userProfile.id);
    }
  }

  get enteredInvalidName() {
    return this.profileNameControlValue.trim().length === 0;
  }

  get profileNameControlValue() {
    return this.profileNameControl.value;
  }

}

ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_1__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_modals_service__WEBPACK_IMPORTED_MODULE_2__.ModalsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_mapper_service__WEBPACK_IMPORTED_MODULE_5__.MapperService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_6__.ThemeService));
};

ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["cake-profile"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
  decls: 17,
  vars: 8,
  consts: [[1, "wrapper"], [1, "desktop"], [1, "mobile"], [1, "container"], [1, "cakeboxes"], ["class", "cakebox", 4, "ngFor", "ngForOf"], [1, "user-info"], [1, "profile-info"], [1, "image-section"], ["alt", "", "class", "user-icon", 4, "ngIf"], ["appearance", "circle", 3, "theme", 4, "ngIf"], ["class", "profile-main-info", 4, "ngIf", "ngIfElse"], [1, "user-details"], ["class", "item", 4, "ngFor", "ngForOf"], ["settingsTemplate", ""], [1, "cakebox"], ["alt", "", 4, "ngIf"], [3, "theme", 4, "ngIf"], ["alt", ""], [3, "theme"], ["alt", "", 1, "user-icon"], ["appearance", "circle", 3, "theme"], [1, "profile-main-info"], ["class", "username", 4, "ngIf"], ["class", "sugar-amount", 4, "ngIf"], ["count", "", 3, "theme", 4, "ngIf"], [1, "username"], [1, "sugar-amount"], ["count", "", 3, "theme"], [1, "item"], ["class", "item-name", 4, "ngIf"], ["class", "item-amount", 4, "ngIf"], [1, "item-name"], [1, "item-amount"], [1, "profile-settings"], ["class", "profile-settings-wrapper", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "profile-settings-wrapper"], [1, "profile-settings-input"], [3, "control"], [1, "profile-settings-button"], [1, "button", "primary", 3, "disabled", "click"], [1, "error-message"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ProfileComponent_div_5_Template, 3, 2, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, ProfileComponent_img_9_Template, 1, 1, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, ProfileComponent_ngx_skeleton_loader_10_Template, 1, 3, "ngx-skeleton-loader", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ProfileComponent_div_11_Template, 5, 4, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, ProfileComponent_div_14_Template, 3, 2, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, ProfileComponent_ng_template_15_Template, 5, 5, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](16);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.userProfile ? ctx.profileSLices : ctx.mockArrayData);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.userProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.userProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 6, ctx.isProfileOnly))("ngIfElse", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.userProfile ? ctx.profileInfoData : ctx.mockArrayData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_17__.NgxSkeletonLoaderComponent, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_7__.InputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DecimalPipe],
  styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  transform: translateX(-50%);\n  width: 50px;\n  height: 50px;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(1) {\n  width: 15px;\n  height: 15px;\n  left: -150%;\n  top: -50%;\n  opacity: 0.5;\n  border-radius: 2px;\n  transform: rotate(-9.7deg);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(2) {\n  width: 34px;\n  height: 34px;\n  left: -200%;\n  top: 130%;\n  border-radius: 6px;\n  transform: rotate(-15deg);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(3) {\n  width: 34px;\n  height: 34px;\n  left: -350%;\n  top: 260%;\n  border-radius: 2px;\n  transform: rotate(-35deg);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(4) {\n  width: 16px;\n  height: 16px;\n  left: -200%;\n  top: 240%;\n  opacity: 0.5;\n  border-radius: 3px;\n  transform: rotate(24deg);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(5) {\n  width: 20px;\n  height: 20px;\n  left: 230%;\n  top: 70%;\n  border-radius: 2px;\n  transform: rotate(-22deg);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(6) {\n  width: 13px;\n  height: 13px;\n  left: 330%;\n  top: 120%;\n  border-radius: 2px;\n  transform: rotate(19deg);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(7) {\n  width: 26px;\n  height: 26px;\n  left: 260%;\n  top: 170%;\n  border-radius: 4px;\n  transform: rotate(36deg);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(8) {\n  width: 13px;\n  height: 12px;\n  left: 360%;\n  top: 200%;\n  border-radius: 2px;\n  transform: rotate(-31.32deg);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(9) {\n  width: 20px;\n  height: 20px;\n  left: 200%;\n  top: 250%;\n  opacity: 0.2;\n  border-radius: 2px;\n  transform: rotate(-23deg);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(10) {\n  width: 9px;\n  height: 9px;\n  left: 400%;\n  top: 330%;\n  border-radius: 2px;\n  transform: rotate(35deg);\n}\n@media (max-width: 320px) {\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(1) {\n    width: 15px;\n    height: 15px;\n    left: -150%;\n    top: -50%;\n    opacity: 0.5;\n    border-radius: 2px;\n    transform: rotate(-9.7deg);\n  }\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(2) {\n    width: 34px;\n    height: 34px;\n    left: -1500%;\n    top: 130%;\n    border-radius: 6px;\n    transform: rotate(-15deg);\n  }\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(3) {\n    width: 34px;\n    height: 34px;\n    left: -300%;\n    top: 260%;\n    border-radius: 2px;\n    transform: rotate(-35deg);\n  }\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(4) {\n    width: 16px;\n    height: 16px;\n    left: -200%;\n    top: 240%;\n    opacity: 0.5;\n    border-radius: 3px;\n    transform: rotate(24deg);\n  }\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(5) {\n    width: 20px;\n    height: 20px;\n    left: 180%;\n    top: 70%;\n    border-radius: 2px;\n    transform: rotate(-22deg);\n  }\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(6) {\n    width: 13px;\n    height: 13px;\n    left: 300%;\n    top: 120%;\n    border-radius: 2px;\n    transform: rotate(19deg);\n  }\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(7) {\n    width: 26px;\n    height: 26px;\n    left: 230%;\n    top: 170%;\n    border-radius: 4px;\n    transform: rotate(36deg);\n  }\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(8) {\n    width: 13px;\n    height: 12px;\n    left: 320%;\n    top: 200%;\n    border-radius: 2px;\n    transform: rotate(-31.32deg);\n  }\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(9) {\n    width: 20px;\n    height: 20px;\n    left: 200%;\n    top: 250%;\n    opacity: 0.2;\n    border-radius: 2px;\n    transform: rotate(-23deg);\n  }\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(10) {\n    width: 9px;\n    height: 9px;\n    left: 340%;\n    top: 320%;\n    border-radius: 2px;\n    transform: rotate(35deg);\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  width: calc(100% - 16px);\n  margin: 0 8px;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n  width: inherit;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 24px;\n}\n@media (max-width: 768px) {\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n    margin-top: -110px;\n  }\n}\n@media (max-width: 425px) {\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n    margin-top: -30px;\n  }\n}\n@media (max-width: 375px) {\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n    margin-top: -40px;\n  }\n}\n@media (max-width: 320px) {\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n    margin-top: -50px;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%] {\n  z-index: 1;\n  height: 104px;\n  width: 104px;\n  border-radius: 50%;\n  position: relative;\n  background: rgba(171, 196, 226, 0.2);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%]   .user-icon[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 88px;\n  object-fit: cover;\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 5px;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-settings[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-settings-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 8px;\n  margin-left: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 40px;\n  width: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-settings-wrapper[_ngcontent-%COMP%]   .profile-settings-input[_ngcontent-%COMP%] {\n  width: calc(100% - 8px - 101px);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-settings-wrapper[_ngcontent-%COMP%]   .profile-settings-button[_ngcontent-%COMP%] {\n  width: 101px;\n  margin-right: -8px;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-settings[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-family: Gilroy-400;\n  padding-left: 20px;\n  margin-top: 5px;\n  background-color: var(--color-gradient-left-4);\n  background-image: linear-gradient(var(--deg-gradient-4), var(--color-gradient-left-4), var(--color-gradient-right-4));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-main-info[_ngcontent-%COMP%] {\n  display: inherit;\n  flex-direction: inherit;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  text-align: center;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-main-info[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  width: inherit;\n  font-family: \"Santhony\";\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 32px;\n  background-color: var(--color-gradient-left-3);\n  background-image: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-main-info[_ngcontent-%COMP%]   .sugar-amount[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-500\";\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--color-tooltip-text);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  height: 49px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--color-tooltip-text);\n  border-bottom: 1px solid var(--border-list-color);\n  font-size: 14px;\n  line-height: 17px;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:first-child {\n  border-top: 1px solid var(--border-list-color);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-500\";\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .item-amount[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-500\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQURGO0FBS0U7RUFDRSxZQUFBO0FBSEo7QUFJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQUdNO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFEUjtBQUVRO0VBQ0Usa0JBQUE7QUFBVjtBQUVVO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFBWjtBQUdVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBRlo7QUFLVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFQSxrQkFBQTtFQUNBLHlCQUFBO0FBSlo7QUFPVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFQSxrQkFBQTtFQUNBLHlCQUFBO0FBTlo7QUFTVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQVJaO0FBV1U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkFBQTtBQVZaO0FBYVU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBRUEsa0JBQUE7RUFDQSx3QkFBQTtBQVpaO0FBZVU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBRUEsa0JBQUE7RUFDQSx3QkFBQTtBQWRaO0FBaUJVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUVBLGtCQUFBO0VBQ0EsNEJBQUE7QUFoQlo7QUFtQlU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFsQlo7QUFxQlU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBRUEsa0JBQUE7RUFDQSx3QkFBQTtBQXBCWjtBQXVCVTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUVBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLDBCQUFBO0VBdEJaO0VBeUJVO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtJQUVBLGtCQUFBO0lBQ0EseUJBQUE7RUF4Qlo7RUEyQlU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBRUEsa0JBQUE7SUFDQSx5QkFBQTtFQTFCWjtFQTZCVTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFFQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSx3QkFBQTtFQTVCWjtFQStCVTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFFBQUE7SUFFQSxrQkFBQTtJQUNBLHlCQUFBO0VBOUJaO0VBaUNVO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUVBLGtCQUFBO0lBQ0Esd0JBQUE7RUFoQ1o7RUFtQ1U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0lBRUEsa0JBQUE7SUFDQSx3QkFBQTtFQWxDWjtFQXFDVTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7SUFFQSxrQkFBQTtJQUNBLDRCQUFBO0VBcENaO0VBdUNVO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUVBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQUFBO0VBdENaO0VBeUNVO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUVBLGtCQUFBO0lBQ0Esd0JBQUE7RUF4Q1o7QUFDRjtBQTZDTTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtBQTNDUjtBQTRDUTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBRUEsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBaUJBLG1CQUFBO0FBM0RWO0FBMkNVO0VBUEY7SUFRSSxrQkFBQTtFQXhDVjtBQUNGO0FBMENVO0VBWEY7SUFZSSxpQkFBQTtFQXZDVjtBQUNGO0FBeUNVO0VBZkY7SUFnQkksaUJBQUE7RUF0Q1Y7QUFDRjtBQXdDVTtFQW5CRjtJQW9CSSxpQkFBQTtFQXJDVjtBQUNGO0FBeUNVO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLG9DQUFBO0FBeENaO0FBeUNZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxRQUFBO0FBdkNkO0FBMkNVO0VBQ0UsV0FBQTtBQXpDWjtBQTBDWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBeENoQjtBQTBDZ0I7RUFDSSwrQkFBQTtBQXhDcEI7QUEyQ2dCO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBekNwQjtBQTRDVztFQzdPVCxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBZEEsOENBaUJFO0VBaEJGLHFIQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtBRG1ORjtBQW1DVTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBakNaO0FBa0NZO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUN4UVosOENEMlFjO0VDMVFkLHFIQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtBRHlPRjtBQWlDWTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUEvQmQ7QUFvQ1E7RUFDRSxXQUFBO0FBbENWO0FBb0NVO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWxDWjtBQW9DWTtFQUNFLDhDQUFBO0FBbENkO0FBcUNZO0VBQ0UseUJBQUE7QUFuQ2Q7QUFzQ1k7RUFDRSx5QkFBQTtBQXBDZCIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwvbWl4aW5zJztcblxuLndyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAuZGVza3RvcCB7XG4gIH1cblxuICAubW9iaWxlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIC5jYWtlYm94ZXMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIC5jYWtlYm94IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgIGxlZnQ6IC0xNTAlO1xuICAgICAgICAgICAgdG9wOiAtNTAlO1xuXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOS43ZGVnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgbGVmdDogLTIwMCU7XG4gICAgICAgICAgICB0b3A6IDEzMCU7XG5cbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpudGgtb2YtdHlwZSgzKSB7XG4gICAgICAgICAgICB3aWR0aDogMzRweDtcbiAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgIGxlZnQ6IC0zNTAlO1xuICAgICAgICAgICAgdG9wOiAyNjAlO1xuXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzVkZWcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bnRoLW9mLXR5cGUoNCkge1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBsZWZ0OiAtMjAwJTtcbiAgICAgICAgICAgIHRvcDogMjQwJTtcblxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjRkZWcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bnRoLW9mLXR5cGUoNSkge1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBsZWZ0OiAyMzAlO1xuICAgICAgICAgICAgdG9wOiA3MCU7XG5cbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMmRlZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpudGgtb2YtdHlwZSg2KSB7XG4gICAgICAgICAgICB3aWR0aDogMTNweDtcbiAgICAgICAgICAgIGhlaWdodDogMTNweDtcbiAgICAgICAgICAgIGxlZnQ6IDMzMCU7XG4gICAgICAgICAgICB0b3A6IDEyMCU7XG5cbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE5ZGVnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOm50aC1vZi10eXBlKDcpIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgbGVmdDogMjYwJTtcbiAgICAgICAgICAgIHRvcDogMTcwJTtcblxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzZkZWcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bnRoLW9mLXR5cGUoOCkge1xuICAgICAgICAgICAgd2lkdGg6IDEzcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICBsZWZ0OiAzNjAlO1xuICAgICAgICAgICAgdG9wOiAyMDAlO1xuXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzEuMzJkZWcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bnRoLW9mLXR5cGUoOSkge1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBsZWZ0OiAyMDAlO1xuICAgICAgICAgICAgdG9wOiAyNTAlO1xuXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjNkZWcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bnRoLW9mLXR5cGUoMTApIHtcbiAgICAgICAgICAgIHdpZHRoOiA5cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDlweDtcbiAgICAgICAgICAgIGxlZnQ6IDQwMCU7XG4gICAgICAgICAgICB0b3A6IDMzMCU7XG5cbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM1ZGVnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoMSkge1xuICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICBsZWZ0OiAtMTUwJTtcbiAgICAgICAgICAgICAgdG9wOiAtNTAlO1xuICBcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05LjdkZWcpO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoMikge1xuICAgICAgICAgICAgICB3aWR0aDogMzRweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgICBsZWZ0OiAtMTUwMCU7XG4gICAgICAgICAgICAgIHRvcDogMTMwJTtcbiAgXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAmOm50aC1vZi10eXBlKDMpIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDM0cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgICAgbGVmdDogLTMwMCU7XG4gICAgICAgICAgICAgIHRvcDogMjYwJTtcbiAgXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM1ZGVnKTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAmOm50aC1vZi10eXBlKDQpIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgbGVmdDogLTIwMCU7XG4gICAgICAgICAgICAgIHRvcDogMjQwJTtcbiAgXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNGRlZyk7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgJjpudGgtb2YtdHlwZSg1KSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDE4MCU7XG4gICAgICAgICAgICAgIHRvcDogNzAlO1xuICBcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjJkZWcpO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoNikge1xuICAgICAgICAgICAgICB3aWR0aDogMTNweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxM3B4O1xuICAgICAgICAgICAgICBsZWZ0OiAzMDAlO1xuICAgICAgICAgICAgICB0b3A6IDEyMCU7XG4gIFxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE5ZGVnKTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAmOm50aC1vZi10eXBlKDcpIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgbGVmdDogMjMwJTtcbiAgICAgICAgICAgICAgdG9wOiAxNzAlO1xuICBcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNmRlZyk7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgJjpudGgtb2YtdHlwZSg4KSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxM3B4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDMyMCU7XG4gICAgICAgICAgICAgIHRvcDogMjAwJTtcbiAgXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTMxLjMyZGVnKTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAmOm50aC1vZi10eXBlKDkpIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgbGVmdDogMjAwJTtcbiAgICAgICAgICAgICAgdG9wOiAyNTAlO1xuICBcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yM2RlZyk7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgxMCkge1xuICAgICAgICAgICAgICB3aWR0aDogOXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDlweDtcbiAgICAgICAgICAgICAgbGVmdDogMzQwJTtcbiAgICAgICAgICAgICAgdG9wOiAzMjAlO1xuICBcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNWRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC51c2VyLWluZm8ge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgICAgIC5wcm9maWxlLWluZm8ge1xuICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgICAgICAgIC5pbWFnZS1zZWN0aW9uIHtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE3MSwgMTk2LCAyMjYsIDAuMik7XG4gICAgICAgICAgICAudXNlci1pY29uIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDg4cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogODhweDtcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnByb2ZpbGUtc2V0dGluZ3Mge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAmLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgICAgICAgICAgICAgIC5wcm9maWxlLXNldHRpbmdzLWlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDhweCAtIDEwMXB4KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5wcm9maWxlLXNldHRpbmdzLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDFweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgLmVycm9yLW1lc3NhZ2Uge1xuICAgICAgICAgICAgQGluY2x1ZGUgZXJyb3ItbWVzc2FnZVxuICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnByb2ZpbGUtbWFpbi1pbmZvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogaW5oZXJpdDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgLnVzZXJuYW1lIHtcbiAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU2FudGhvbnknO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dChcbiAgICAgICAgICAgICAgICB2YXIoLS1kZWctZ3JhZGllbnQtMyksXG4gICAgICAgICAgICAgICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0zKSxcbiAgICAgICAgICAgICAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0zKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3VnYXItYW1vdW50IHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNTAwJztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRvb2x0aXAtdGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXItZGV0YWlscyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10b29sdGlwLXRleHQpO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saXN0LWNvbG9yKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saXN0LWNvbG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi1uYW1lIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNTAwJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi1hbW91bnQge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0dpbHJveS01MDAnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIGJ0bi1ob3ZlcigkdGV4dENvbG9yLCAkYmcsICRib3JkZXJDb2xvcikge1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHRleHRDb2xvcjtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgfVxufVxuXG5AbWl4aW4gYnRuLWRpc2FibGVkKCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gICY6ZGlzYWJsZWQge1xuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG4gIH1cbn1cblxuQG1peGluIGJ0bi1kZWZhdWx0KCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gIGNvbG9yOiAkdGV4dENvbG9yO1xuICBiYWNrZ3JvdW5kOiAkYmc7XG4gIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZWFyLWJnKCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG59XG5cbkBtaXhpbiBib3JkZXItZ3JhZGllbnQtbGluZWFyKCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJvcmRlci1pbWFnZTogIGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItYm9yZGVyKFxuICAkZGVnLFxuICAkbGVmdENvbG9yLFxuICAkcmlnaHRDb2xvcixcbiAgJGJvcmRlcldpZHRoLFxuICAkYm9yZGVyUmFkaXVzXG4pIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XG4gICAgcGFkZGluZzogJGJvcmRlcldpZHRoO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG4gICAgLXdlYmtpdC1tYXNrOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiAwIDApIGNvbnRlbnQtYm94LFxuICAgICAgLyogWzFdICovIGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCk7IC8qIFsyXSAqL1xuICAgIC13ZWJraXQtbWFzay1jb21wb3NpdGU6IHhvcjsgLyogWzNdINC00LvRjyDQv9GW0LTRgtGA0LjQvNC60Lgg0LHRgNCw0YPQt9C10YDRltCyICovXG4gICAgbWFzay1jb21wb3NpdGU6IGV4Y2x1ZGU7IC8qIFszXSAqL1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItdGV4dCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGVmdENvbG9yO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtaXhpbiBlcnJvci1tZXNzYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IEdpbHJveS00MDA7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dChcbiAgICB2YXIoLS1kZWctZ3JhZGllbnQtNCksXG4gICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC00KSxcbiAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC00KVxuICApO1xufVxuXG5AbWl4aW4gR2lscm95LTMwMC0xNi1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6IEdpbHJveS0zMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xufVxuXG5AbWl4aW4gR2lscm95LTQwMC0zMC1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6IEdpbHJveS00MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xufVxuXG5AbWl4aW4gR2lscm95LTUwMC0xNC1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6IEdpbHJveS01MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xufVxuIl19 */"]
});

/***/ }),

/***/ 7737:
/*!*************************************************************************!*\
  !*** ./apps/frontend/src/app/modules/profile/profile-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileRoutingModule": () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/profile/profile.component */ 706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent
    },
    {
        path: 'settings',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent,
        data: { settings: true }
    }
];
class ProfileRoutingModule {
}
ProfileRoutingModule.ɵfac = function ProfileRoutingModule_Factory(t) { return new (t || ProfileRoutingModule)(); };
ProfileRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProfileRoutingModule });
ProfileRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 163:
/*!*****************************************************************!*\
  !*** ./apps/frontend/src/app/modules/profile/profile.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 7737);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 811);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/profile/profile.component */ 706);
/* harmony import */ var _components_confirm_settings_confirm_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/confirm-settings/confirm-settings.component */ 6908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class ProfileModule {
}
ProfileModule.ɵfac = function ProfileModule_Factory(t) { return new (t || ProfileModule)(); };
ProfileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent, _components_confirm_settings_confirm_settings_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmSettingsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=apps_frontend_src_app_modules_profile_profile_module_ts.js.map