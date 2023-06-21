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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 4736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 8751);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 5231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 7724);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 6327);
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/modals.service */ 5414);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3557);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/api.service */ 554);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ 5894);
/* harmony import */ var _services_mapper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/mapper.service */ 5222);
/* harmony import */ var _core_types_Themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/types/Themes */ 6251);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/theme.service */ 1266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 6873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 7661);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-skeleton-loader */ 3453);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/input/input.component */ 9852);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/pagination/pagination.component */ 2774);
/* harmony import */ var _core_pipes_cake_title_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/pipes/cake-title.pipe */ 7048);























function ProfileComponent_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 49);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("src", ctx_r0.userProfile.avatar || ctx_r0.profileImg, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = function (a2) {
  return {
    width: "88px",
    height: "88px",
    "background-color": a2,
    "margin-left": "8px"
  };
};
function ProfileComponent_ngx_skeleton_loader_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-skeleton-loader", 50);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c0, ctx_r1.activeTheme.properties["--skeleton-color"]));
  }
}
function ProfileComponent_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r23.userProfile.username);
  }
}
function ProfileComponent_div_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r24.userProfile.sugar), " Sugar");
  }
}
const _c1 = function (a2) {
  return {
    width: "90px",
    height: "17px",
    "background-color": a2,
    margin: "5px 0 0"
  };
};
function ProfileComponent_div_8_ngx_skeleton_loader_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-skeleton-loader", 57);
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c1, ctx_r25.activeTheme.properties["--skeleton-color"]));
  }
}
const _c2 = function (a2) {
  return {
    width: "90px",
    height: "17px",
    "background-color": a2,
    margin: 0
  };
};
function ProfileComponent_div_8_ngx_skeleton_loader_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-skeleton-loader", 57);
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c2, ctx_r26.activeTheme.properties["--skeleton-color"]));
  }
}
function ProfileComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProfileComponent_div_8_span_1_Template, 2, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ProfileComponent_div_8_span_2_Template, 3, 3, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ProfileComponent_div_8_ngx_skeleton_loader_3_Template, 1, 3, "ngx-skeleton-loader", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ProfileComponent_div_8_ngx_skeleton_loader_4_Template, 1, 3, "ngx-skeleton-loader", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r2.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r2.userProfile);
  }
}
function ProfileComponent_div_15_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r27.label);
  }
}
function ProfileComponent_div_15_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, item_r27.value));
  }
}
function ProfileComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProfileComponent_div_15_span_1_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ProfileComponent_div_15_span_2_Template, 3, 3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.userProfile);
  }
}
function ProfileComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Followers");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "999,999");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "New followers this week");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "3%");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " 999 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 62)(2, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Hype score");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_45_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 72)(3, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "cakeTitlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "cakeTitlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const slice_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", slice_r35.smallImage || slice_r35.image, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 3, slice_r35.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 5, slice_r35.name));
  }
}
function ProfileComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14)(1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ProfileComponent_div_45_div_4_Template, 9, 7, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "mat-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r32 = ctx.$implicit;
    const isFirst_r33 = ctx.first;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("first-child", isFirst_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r32.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", item_r32.rewards);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("svgIcon", ctx_r14.editIcon);
  }
}
function ProfileComponent_div_125_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 80);
  }
}
function ProfileComponent_div_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProfileComponent_div_125_img_1_Template, 1, 0, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const platform_r36 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("popular-platform", platform_r36.isPopular);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", platform_r36.isPopular);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate2"]("src", "../../../assets/platforms/", platform_r36.platform, "-", ctx_r15.getPrefix(platform_r36.platform), ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](platform_r36.platform);
  }
}
function ProfileComponent_div_131_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 84);
  }
  if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("src", item_r38, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
const _c3 = function (a2) {
  return {
    width: "100%",
    height: "100%",
    "background-color": a2
  };
};
function ProfileComponent_div_131_ngx_skeleton_loader_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-skeleton-loader", 85);
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c3, ctx_r40.activeTheme.properties["--skeleton-color"]));
  }
}
function ProfileComponent_div_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProfileComponent_div_131_img_1_Template, 1, 1, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ProfileComponent_div_131_ngx_skeleton_loader_2_Template, 1, 3, "ngx-skeleton-loader", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r16.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r16.userProfile);
  }
}
function ProfileComponent_img_135_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 49);
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("src", ctx_r17.userProfile.avatar || ctx_r17.profileImg, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
function ProfileComponent_ngx_skeleton_loader_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-skeleton-loader", 50);
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c0, ctx_r18.activeTheme.properties["--skeleton-color"]));
  }
}
function ProfileComponent_div_137_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r42.userProfile.username);
  }
}
function ProfileComponent_div_137_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r43.userProfile.sugar), " Sugar");
  }
}
function ProfileComponent_div_137_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProfileComponent_div_137_span_3_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r47.signOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_137_ngx_skeleton_loader_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-skeleton-loader", 57);
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c1, ctx_r45.activeTheme.properties["--skeleton-color"]));
  }
}
function ProfileComponent_div_137_ngx_skeleton_loader_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-skeleton-loader", 57);
  }
  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c2, ctx_r46.activeTheme.properties["--skeleton-color"]));
  }
}
function ProfileComponent_div_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProfileComponent_div_137_span_1_Template, 2, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ProfileComponent_div_137_span_2_Template, 3, 3, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ProfileComponent_div_137_span_3_Template, 2, 0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ProfileComponent_div_137_ngx_skeleton_loader_4_Template, 1, 3, "ngx-skeleton-loader", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ProfileComponent_div_137_ngx_skeleton_loader_5_Template, 1, 3, "ngx-skeleton-loader", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r19.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r19.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r19.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r19.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r19.userProfile);
  }
}
function ProfileComponent_div_140_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r49.label);
  }
}
function ProfileComponent_div_140_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, item_r49.value));
  }
}
function ProfileComponent_div_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProfileComponent_div_140_span_1_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ProfileComponent_div_140_span_2_Template, 3, 3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r20.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r20.userProfile);
  }
}
function ProfileComponent_ng_template_141_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 92)(1, "div", 93)(2, "cake-input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("inputEmitter", function ProfileComponent_ng_template_141_div_1_Template_cake_input_inputEmitter_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r58.handleInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 95)(5, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProfileComponent_ng_template_141_div_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r60.onSaveButtonClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hasError", !!_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 3, ctx_r54.isErrorVisible))("control", ctx_r54.profileNameControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r54.isErrorMessageVisible || ctx_r54.enteredInvalidName);
  }
}
const _c4 = function (a2) {
  return {
    width: "100%",
    height: "49px",
    "background-color": a2
  };
};
function ProfileComponent_ng_template_141_ngx_skeleton_loader_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-skeleton-loader", 85);
  }
  if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c4, ctx_r55.activeTheme.properties["--skeleton-color"]));
  }
}
function ProfileComponent_ng_template_141_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "! Profile name is already in use");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_ng_template_141_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r57.userProfile.sugar), " Sugar");
  }
}
function ProfileComponent_ng_template_141_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProfileComponent_ng_template_141_div_1_Template, 7, 5, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ProfileComponent_ng_template_141_ngx_skeleton_loader_2_Template, 1, 3, "ngx-skeleton-loader", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ProfileComponent_ng_template_141_span_3_Template, 2, 0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ProfileComponent_ng_template_141_span_5_Template, 3, 3, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r22.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r22.userProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r22.wasNameChanged && (ctx_r22.isErrorMessageVisible || _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, ctx_r22.isErrorVisible)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r22.isErrorMessageVisible || _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 6, ctx_r22.isErrorVisible) === false);
  }
}
class ProfileComponent extends _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_0__.Watcher {
  constructor(activatedRoute, modalService, apiService, authService, mapper, themeService) {
    super();
    this.activatedRoute = activatedRoute;
    this.modalService = modalService;
    this.apiService = apiService;
    this.authService = authService;
    this.mapper = mapper;
    this.themeService = themeService;
    this.isProfileOnly = this.activatedRoute.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(data => {
      return !data['settings'];
    }));
    this.isErrorVisible = this.modalService.hasUsernameExistError$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(data => data));
    this.profileSLices = [];
    this.profileInfoData = [];
    this.cakeboxActivePage = 1;
    this.currentPage = 1;
    this.cakeBoxes = [];
    this.mockArrayData = Array(10).fill('');
    this.QUERY = {
      page: 1,
      pageSize: 10
    };
    this.MOCK_PLATFORMS = [{
      platform: "Youtube",
      isPopular: true
    }, {
      platform: "Twitch",
      isPopular: false
    }, {
      platform: "Tiktok",
      isPopular: false
    }, {
      platform: "Instagram",
      isPopular: false
    }, {
      platform: "Linkedin",
      isPopular: true
    }, {
      platform: "Vimeo",
      isPopular: false
    }, {
      platform: "Facebook",
      isPopular: true
    }, {
      platform: "Reddit",
      isPopular: false
    }, {
      platform: "Snapchat",
      isPopular: false
    }];
    this.wasNameChanged = false;
  }
  ngOnInit() {
    this.subscribes();
  }
  signOut() {
    this.authService.signOut();
  }
  subscribes() {
    this.authService.userProfile.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.unsubscribe), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.tap)(data => {
      this.userProfile = data;
      this.profileInfoData = this.mapper.userProfileMapper(this.userProfile);
      this.profileNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.userProfile.username);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.switchMap)(result => this.apiService.getUserById(result.id, this.QUERY)), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.tap)(data => {
      this.profileSLices = data.data.rewards.map(slice => slice.smallImage);
    })).subscribe();
    this.getCakeboxes();
  }
  get cakeboxQuery() {
    return {
      page: this.cakeboxActivePage,
      pageSize: 3,
      sort: 'cost',
      where: 'CAKEBOX',
      owner: true
    };
  }
  getCakeboxes() {
    this.apiService.getRewards(this.cakeboxQuery).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.unsubscribe), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.tap)(data => {
      this.cakeBoxes = data.data;
      this.cakeboxTotal = data.count;
    })).subscribe();
  }
  getPlatforms() {
    // it's mock
    return this.MOCK_PLATFORMS;
  }
  get activeTheme() {
    return this.themeService.active;
  }
  get profileImg() {
    return this.authService.randomAvatar;
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
  get plusSvg() {
    return this.activeTheme === _core_types_Themes__WEBPACK_IMPORTED_MODULE_5__.LightTheme ? 'plus-light' : 'plus-dark';
  }
  get editIcon() {
    return this.activeTheme === _core_types_Themes__WEBPACK_IMPORTED_MODULE_5__.LightTheme ? 'edit-light' : 'edit-dark';
  }
  getPrefix(platform) {
    return platform === 'Youtube' ? 'big' : 'small';
  }
  handleInput() {
    this.wasNameChanged = true;
  }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_modals_service__WEBPACK_IMPORTED_MODULE_1__.ModalsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_mapper_service__WEBPACK_IMPORTED_MODULE_4__.MapperService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_6__.ThemeService));
};
ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["cake-profile"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 143,
  vars: 36,
  consts: [[1, "wrapper", "max-content"], [1, "desktop"], [1, "container"], [1, "user-info"], [1, "profile-info"], [1, "image-section"], ["loading", "lazy", "alt", "", "class", "user-icon", 4, "ngIf"], ["appearance", "circle", 3, "theme", 4, "ngIf"], ["class", "profile-main-info", 4, "ngIf", "ngIfElse"], [1, "first-row"], [1, "stats"], [1, "mobile"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "destop"], [1, "item"], ["class", "item-name", 4, "ngIf"], ["class", "item-amount", 4, "ngIf"], [1, "rewards"], [1, "header"], [1, "links"], ["routerLink", "/rewards/CAKEBOX", 1, "button", "tertiary"], [1, "button", "tertiary"], [1, "plus"], ["class", "item", 3, "first-child", 4, "ngFor", "ngForOf"], [1, "paginaton"], [3, "page", "pageSize", "count", "pageChange"], [1, "second-row"], [1, "live-events"], [1, "content"], [1, "buttom-line"], [1, "button", "pink"], [1, "button", "secondary-pink"], [1, "event-line"], [1, "event-line-img"], ["src", "assets/imgs/live_events.png"], [1, "event-line-text"], [1, "span"], [1, "watching"], [1, "event-line-btn"], [1, "button", "primary"], ["src", "assets/imgs/live_events2.png"], ["src", "assets/imgs/live_events3.png"], [3, "page", "pageSize", "count"], [1, "platforms"], ["class", "platform", 3, "popular-platform", 4, "ngFor", "ngForOf"], [1, "cakeboxes"], ["class", "cakebox", 4, "ngFor", "ngForOf"], [1, "user-details"], ["settingsTemplate", ""], ["loading", "lazy", "alt", "", 1, "user-icon"], ["appearance", "circle", 3, "theme"], [1, "profile-main-info"], ["class", "username", 4, "ngIf"], ["class", "sugar-amount", 4, "ngIf"], ["count", "1", 3, "theme", 4, "ngIf"], [1, "username"], [1, "sugar-amount"], ["count", "1", 3, "theme"], [1, "item-name"], [1, "item-amount"], ["src", "assets/icons/arrow-up-outline-green.svg", 1, "arrow"], [1, "gradient-green-numbers"], ["src", "assets/imgs/Party-popper.png", 1, "party"], ["src", "assets/icons/state10.svg"], ["src", "assets/icons/state32.svg"], ["src", "assets/icons/state6.svg"], [1, "slices"], ["class", "slice", 4, "ngFor", "ngForOf"], [1, "edit", "pointer"], [3, "svgIcon"], [1, "slice"], ["loading", "lazy", "alt", "", 1, "slice-image", 3, "src"], [1, "slice-data"], [1, "slice-data-type"], [1, "slice-data-name"], [1, "platform"], ["loading", "lazy", "src", "../../../assets/icons/popular-fire.png", "alt", "popular", "class", "popular", 4, "ngIf"], [1, "platform-detail"], ["loading", "lazy", "alt", "", 1, "platform-detail-icon", 3, "src"], [1, "platform-detail-name"], ["loading", "lazy", "src", "../../../assets/icons/popular-fire.png", "alt", "popular", 1, "popular"], [1, "cakebox"], ["loading", "lazy", "alt", "", 4, "ngIf"], [3, "theme", 4, "ngIf"], ["loading", "lazy", "alt", ""], [3, "theme"], ["class", "log-out pointer", 3, "click", 4, "ngIf"], [1, "log-out", "pointer", 3, "click"], [1, "profile-settings"], ["class", "profile-settings-wrapper", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["class", "sugar-settings", 4, "ngIf"], [1, "profile-settings-wrapper"], [1, "profile-settings-input"], [3, "hasError", "control", "inputEmitter"], [1, "profile-settings-button"], [1, "button", "primary", 3, "disabled", "click"], [1, "error-message"], [1, "sugar-settings"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, ProfileComponent_img_6_Template, 1, 1, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, ProfileComponent_ngx_skeleton_loader_7_Template, 1, 3, "ngx-skeleton-loader", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, ProfileComponent_div_8_Template, 5, 4, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Stats");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, ProfileComponent_div_15_Template, 3, 2, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 13)(17, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, ProfileComponent_span_18_Template, 2, 0, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, ProfileComponent_span_19_Template, 2, 0, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, ProfileComponent_span_21_Template, 2, 0, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, ProfileComponent_span_22_Template, 5, 0, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, ProfileComponent_span_24_Template, 2, 0, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, ProfileComponent_span_25_Template, 3, 0, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, ProfileComponent_span_27_Template, 2, 0, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, ProfileComponent_span_28_Template, 2, 0, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, ProfileComponent_span_30_Template, 2, 0, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, ProfileComponent_span_31_Template, 2, 0, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 17)(33, "div", 18)(34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "Rewards");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 19)(37, "button", 20)(38, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, " See all ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "button", 21)(41, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "+");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, " Add new ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](45, ProfileComponent_div_45_Template, 7, 5, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 24)(47, "cake-pagination", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function ProfileComponent_Template_cake_pagination_pageChange_47_listener($event) {
        return ctx.cakeboxActivePage = $event;
      })("pageChange", function ProfileComponent_Template_cake_pagination_pageChange_47_listener() {
        return ctx.getCakeboxes();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "div", 26)(49, "div", 27)(50, "div", 18)(51, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "Live events");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "div", 19)(54, "button", 21)(55, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "+");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "Add");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "div", 28)(60, "div", 29)(61, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "My events");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "Public events");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "div", 32)(66, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](67, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "div", 35)(69, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70, "NFT NYC");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](72, "June 20-23, 2022 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "span", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](75, " 1\u20133 P.M. EST");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, "Watching: 1,234");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "div", 38)(79, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80, "Join");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "div", 32)(82, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](83, "img", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "div", 35)(85, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](86, "European Blockchain Convention");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](88, "June 26-28, 2022 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "span", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](90, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](91, " 5\u201311 P.M. EST");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](92, "div", 38)(93, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94, "Join");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "div", 32)(96, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](97, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "div", 35)(99, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100, "ETHCC 5 Conference");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](102, "July 19-21, 2022");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "span", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](104, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](105, "9\u201310 A.M. EST");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](106, "div", 38)(107, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](108, "Join");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](110, "cake-pagination", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "div", 43)(112, "div", 18)(113, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](114, "Platforms");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](115, "div", 19)(116, "button", 20)(117, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](118, " See all ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](119, "button", 21)(120, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](121, "+");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](122, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](123, " Add new ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](124, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](125, ProfileComponent_div_125_Template, 6, 6, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](126, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](127, "cake-pagination", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "div", 11)(129, "div", 2)(130, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](131, ProfileComponent_div_131_Template, 3, 2, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](132, "div", 3)(133, "div", 4)(134, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](135, ProfileComponent_img_135_Template, 1, 1, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](136, ProfileComponent_ngx_skeleton_loader_136_Template, 1, 3, "ngx-skeleton-loader", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](137, ProfileComponent_div_137_Template, 6, 5, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](138, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](139, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](140, ProfileComponent_div_140_Template, 3, 2, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](141, ProfileComponent_ng_template_141_Template, 7, 8, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](142);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.userProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.userProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 32, ctx.isProfileOnly))("ngIfElse", _r21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.userProfile ? ctx.profileInfoData : ctx.mockArrayData);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.userProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.userProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.userProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.userProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.userProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.userProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.userProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.userProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.userProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.userProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.cakeBoxes);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("page", ctx.cakeboxActivePage)("pageSize", 4)("count", ctx.cakeboxTotal);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("page", 1)("pageSize", 1)("count", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.getPlatforms());
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("page", 1)("pageSize", 1)("count", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.userProfile ? ctx.profileSLices : ctx.mockArrayData);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.userProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.userProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](138, 34, ctx.isProfileOnly))("ngIfElse", _r21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.userProfile ? ctx.profileInfoData : ctx.mockArrayData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_20__.NgxSkeletonLoaderComponent, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_7__.InputComponent, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DecimalPipe, _core_pipes_cake_title_pipe__WEBPACK_IMPORTED_MODULE_9__.CakeTitlePipe],
  styles: ["@charset \"UTF-8\";\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n@media (max-width: 1023px) {\n  .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  width: calc(100% - 16px);\n  margin: 0 8px;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n  width: inherit;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 24px;\n}\n@media (max-width: 768px) {\n  .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n    margin-top: -110px;\n  }\n}\n@media (max-width: 425px) {\n  .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n    margin-top: -30px;\n  }\n}\n@media (max-width: 375px) {\n  .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n    margin-top: -40px;\n  }\n}\n@media (max-width: 320px) {\n  .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n    margin-top: -50px;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%] {\n  z-index: 1;\n  height: 104px;\n  width: 104px;\n  border-radius: 50%;\n  position: relative;\n  background: linear-gradient(var(--deg-gradient-2), var(--color-gradient-left-2), var(--color-gradient-right-2));\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%]   .user-icon[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 88px;\n  object-fit: cover;\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 5px;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-main-info[_ngcontent-%COMP%] {\n  display: inherit;\n  flex-direction: inherit;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  text-align: center;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-main-info[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  width: inherit;\n  font-family: \"Santhony\";\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 32px;\n  background-color: var(--color-gradient-left-3);\n  background-image: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-main-info[_ngcontent-%COMP%]   .sugar-amount[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--color-tooltip-text);\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%] {\n  width: calc(100% - 64px - 64px);\n  display: flex;\n  margin: 0 64px;\n  justify-content: space-between;\n}\n@media (max-width: 1024px) {\n  .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%] {\n    width: calc(100% - 32px - 32px);\n    margin: 0 32px;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-style: normal;\n  font-size: 24px;\n  line-height: 28px;\n  color: var(--color-tooltip-text);\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  width: 550px;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1100px) {\n  .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n    width: 47%;\n  }\n}\n@media (max-width: 1023px) {\n  .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  height: 49px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--color-tooltip-text);\n  border-bottom: 1px solid var(--border-list-color);\n  font-size: 14px;\n  line-height: 17px;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:first-of-type {\n  border-top: 1px solid var(--border-list-color);\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .item-amount[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-500\";\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .item-amount[_ngcontent-%COMP%]   .party[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  margin-right: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .item-amount[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  position: relative;\n  top: 2px;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%] {\n  width: 550px;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 1100px) {\n  .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%] {\n    width: 47%;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  height: inherit;\n  display: flex;\n  align-items: center;\n  font-family: \"Gilroy-500\";\n  font-style: normal;\n  font-size: 16px;\n  line-height: 16px;\n  color: var(--color-secondary-1);\n  width: 44%;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .plus-icon[_ngcontent-%COMP%] {\n  margin-left: 32px;\n  margin-right: 4px;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .first-child[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border-list-color);\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  height: 80px;\n  border-bottom: 1px solid var(--border-list-color);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-style: normal;\n  font-size: 16px;\n  line-height: 22px;\n  color: var(--color-tooltip-text);\n  width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media (max-width: 1024px) {\n  .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%] {\n  width: 115px;\n  display: flex;\n  flex-direction: row;\n}\n@media (max-width: 1024px) {\n  .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-child(3) {\n    display: none;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice-image[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border-profile-image);\n  border-radius: 32px;\n  width: 32px;\n  height: 32px;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 5px;\n  font-family: \"Gilroy-600\";\n  margin-left: 8px;\n  font-style: normal;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice-data-type[_ngcontent-%COMP%] {\n  color: var(--color-fonts-list-head);\n  font-size: 10px;\n  line-height: 12px;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice-data-name[_ngcontent-%COMP%] {\n  color: var(--color-tooltip-text);\n  font-size: 12px;\n  line-height: 14px;\n  width: 70px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%] {\n  width: calc(100% - 64px - 64px);\n  display: flex;\n  margin: 0 64px;\n  justify-content: space-between;\n}\n@media (max-width: 1024px) {\n  .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%] {\n    width: calc(100% - 32px - 32px);\n    margin: 0 32px;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-style: normal;\n  font-size: 24px;\n  line-height: 28px;\n  color: var(--color-tooltip-text);\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .live-events[_ngcontent-%COMP%] {\n  width: 550px;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 1100px) {\n  .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .live-events[_ngcontent-%COMP%] {\n    width: 47%;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .live-events[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 60px;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--border-list-color);\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .live-events[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  height: inherit;\n  display: flex;\n  align-items: center;\n  font-family: \"Gilroy-500\";\n  font-style: normal;\n  font-size: 16px;\n  line-height: 16px;\n  color: var(--color-secondary-1);\n  width: 20%;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .live-events[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .plus-icon[_ngcontent-%COMP%] {\n  margin-left: 32px;\n  margin-right: 4px;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .live-events[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 24px;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .live-events[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttom-line[_ngcontent-%COMP%] {\n  display: flex;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .live-events[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttom-line[_ngcontent-%COMP%]   .pink[_ngcontent-%COMP%] {\n  border-radius: 8px 0px 0px 8px;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .live-events[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .buttom-line[_ngcontent-%COMP%]   .secondary-pink[_ngcontent-%COMP%] {\n  border-radius: 0px 8px 8px 0px;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .live-events[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .event-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 80px;\n  border-bottom: 1px solid var(--border-list-color);\n  margin-top: 24px;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .live-events[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .event-line-img[_ngcontent-%COMP%] {\n  width: 22%;\n}\n@media (max-width: 1100px) {\n  .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .live-events[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .event-line-img[_ngcontent-%COMP%] {\n    width: 27%;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .live-events[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .event-line-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 56px;\n  border-radius: 7px;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .live-events[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .event-line-text[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .live-events[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .event-line-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-600\";\n  font-size: 16px;\n  line-height: 19px;\n  color: var(--color-fonts-2);\n  margin: 0;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .live-events[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .event-line-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-500\";\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--color-fonts-2);\n  margin: 4px 0;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .live-events[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .event-line-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .span[_ngcontent-%COMP%] {\n  width: 0px;\n  height: 16px;\n  color: rgba(255, 255, 255, 0.1);\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .live-events[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .event-line-text[_ngcontent-%COMP%]   .watching[_ngcontent-%COMP%] {\n  font-family: \"Gilroy\"-600;\n  font-size: 10px;\n  line-height: 12px;\n  background-color: var(--color-gradient-left-live-events);\n  background-image: linear-gradient(var(--deg-gradient-live-events), var(--color-gradient-left-live-events), var(--color-gradient-right-live-events));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .live-events[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .event-line-btn[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .platforms[_ngcontent-%COMP%] {\n  width: 550px;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 1100px) {\n  .wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .platforms[_ngcontent-%COMP%] {\n    width: 47%;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .platforms[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 60px;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--border-list-color);\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .platforms[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  height: inherit;\n  display: flex;\n  align-items: center;\n  font-family: \"Gilroy-500\";\n  font-style: normal;\n  font-size: 16px;\n  line-height: 16px;\n  color: var(--color-secondary-1);\n  width: 44%;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .platforms[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .plus-icon[_ngcontent-%COMP%] {\n  margin-left: 32px;\n  margin-right: 4px;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .platforms[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 24px;\n  margin-top: 24px;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .platforms[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .popular-platform[_ngcontent-%COMP%] {\n  border: 0 solid transparent !important;\n  position: relative;\n  position: relative;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .platforms[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .popular-platform[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 8px;\n  padding: 3px;\n  background: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .platforms[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .popular-platform[_ngcontent-%COMP%]::before {\n  border-radius: 0 8px 8px 8px !important;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .platforms[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .popular-platform[_ngcontent-%COMP%]::after {\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  content: \"Popular\";\n  font-family: \"Gilroy-400\";\n  font-style: normal;\n  font-size: 10px;\n  line-height: 12px;\n  color: var(--color-popular-text);\n  width: 52px;\n  height: 16px;\n  border-radius: 6px 6px 0 0;\n  background: linear-gradient(var(--deg-popular-platform), var(--color-popular-platform-left), var(--color-popular-platform-right));\n  left: 0;\n  top: -15px;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .platforms[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .platform[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 70px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 12px 24px;\n  background: var(--color-bg-platform);\n  border: 2px solid var(--border-list-color);\n  border-radius: 8px;\n  position: relative;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .platforms[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .platform[_ngcontent-%COMP%]   .popular[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 120px;\n  top: -20px;\n  z-index: 99;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .platforms[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .platform[_ngcontent-%COMP%]   .platform-detail[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .platforms[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .platform[_ngcontent-%COMP%]   .platform-detail-icon[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  width: 40px;\n  height: 40px;\n}\n.wrapper[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .platforms[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .platform[_ngcontent-%COMP%]   .platform-detail-name[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-500\";\n  font-style: normal;\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--color-tooltip-text);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%] {\n  height: 100%;\n}\n@media (min-width: 1024px) {\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  transform: translateX(-50%);\n  width: 50px;\n  height: 50px;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n  border-radius: inherit;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(1) {\n  width: 15px;\n  height: 15px;\n  left: -150%;\n  top: -50%;\n  opacity: 0.5;\n  border-radius: 2px;\n  transform: rotate(-9.7deg);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(2) {\n  width: 34px;\n  height: 34px;\n  left: -200%;\n  top: 130%;\n  border-radius: 6px;\n  transform: rotate(-15deg);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(3) {\n  width: 34px;\n  height: 34px;\n  left: -350%;\n  top: 260%;\n  border-radius: 2px;\n  transform: rotate(-35deg);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(4) {\n  width: 16px;\n  height: 16px;\n  left: -200%;\n  top: 240%;\n  opacity: 0.5;\n  border-radius: 3px;\n  transform: rotate(24deg);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(5) {\n  width: 20px;\n  height: 20px;\n  left: 230%;\n  top: 70%;\n  border-radius: 2px;\n  transform: rotate(-22deg);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(6) {\n  width: 13px;\n  height: 13px;\n  left: 330%;\n  top: 120%;\n  border-radius: 2px;\n  transform: rotate(19deg);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(7) {\n  width: 26px;\n  height: 26px;\n  left: 260%;\n  top: 170%;\n  border-radius: 4px;\n  transform: rotate(36deg);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(8) {\n  width: 13px;\n  height: 12px;\n  left: 360%;\n  top: 200%;\n  border-radius: 2px;\n  transform: rotate(-31.32deg);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(9) {\n  width: 20px;\n  height: 20px;\n  left: 200%;\n  top: 250%;\n  opacity: 0.2;\n  border-radius: 2px;\n  transform: rotate(-23deg);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(10) {\n  width: 9px;\n  height: 9px;\n  left: 400%;\n  top: 330%;\n  border-radius: 2px;\n  transform: rotate(35deg);\n}\n@media (max-width: 320px) {\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(1) {\n    width: 15px;\n    height: 15px;\n    left: -150%;\n    top: -50%;\n    opacity: 0.5;\n    border-radius: 2px;\n    transform: rotate(-9.7deg);\n  }\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(2) {\n    width: 34px;\n    height: 34px;\n    left: -1500%;\n    top: 130%;\n    border-radius: 6px;\n    transform: rotate(-15deg);\n  }\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(3) {\n    width: 34px;\n    height: 34px;\n    left: -300%;\n    top: 260%;\n    border-radius: 2px;\n    transform: rotate(-35deg);\n  }\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(4) {\n    width: 16px;\n    height: 16px;\n    left: -200%;\n    top: 240%;\n    opacity: 0.5;\n    border-radius: 3px;\n    transform: rotate(24deg);\n  }\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(5) {\n    width: 20px;\n    height: 20px;\n    left: 180%;\n    top: 70%;\n    border-radius: 2px;\n    transform: rotate(-22deg);\n  }\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(6) {\n    width: 13px;\n    height: 13px;\n    left: 300%;\n    top: 120%;\n    border-radius: 2px;\n    transform: rotate(19deg);\n  }\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(7) {\n    width: 26px;\n    height: 26px;\n    left: 230%;\n    top: 170%;\n    border-radius: 4px;\n    transform: rotate(36deg);\n  }\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(8) {\n    width: 13px;\n    height: 12px;\n    left: 320%;\n    top: 200%;\n    border-radius: 2px;\n    transform: rotate(-31.32deg);\n  }\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(9) {\n    width: 20px;\n    height: 20px;\n    left: 200%;\n    top: 250%;\n    opacity: 0.2;\n    border-radius: 2px;\n    transform: rotate(-23deg);\n  }\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(10) {\n    width: 9px;\n    height: 9px;\n    left: 340%;\n    top: 320%;\n    border-radius: 2px;\n    transform: rotate(35deg);\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  width: calc(100% - 16px);\n  margin: 0 8px;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n  width: inherit;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 24px;\n}\n@media (max-width: 768px) {\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n    margin-top: -110px;\n  }\n}\n@media (max-width: 425px) {\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n    margin-top: -30px;\n  }\n}\n@media (max-width: 375px) {\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n    margin-top: -40px;\n  }\n}\n@media (max-width: 320px) {\n  .wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n    margin-top: -50px;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%] {\n  z-index: 1;\n  height: 104px;\n  width: 104px;\n  border-radius: 50%;\n  position: relative;\n  background: linear-gradient(var(--deg-gradient-2), var(--color-gradient-left-2), var(--color-gradient-right-2));\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%]   .user-icon[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 88px;\n  object-fit: cover;\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 5px;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-settings[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-settings-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 8px;\n  margin-left: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 40px;\n  width: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-settings-wrapper[_ngcontent-%COMP%]   .profile-settings-input[_ngcontent-%COMP%] {\n  width: calc(100% - 8px - 101px);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-settings-wrapper[_ngcontent-%COMP%]   .profile-settings-button[_ngcontent-%COMP%] {\n  width: 101px;\n  margin-right: -8px;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-settings[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-family: \"Gilroy-500\";\n  padding-left: 20px;\n  margin-top: 5px;\n  background-color: var(--color-gradient-left-4);\n  background-image: linear-gradient(var(--deg-gradient-4), var(--color-gradient-left-4), var(--color-gradient-right-4));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-settings[_ngcontent-%COMP%]   .sugar-settings[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--color-tooltip-text);\n  display: flex;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 8px;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-main-info[_ngcontent-%COMP%] {\n  display: inherit;\n  flex-direction: inherit;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  text-align: center;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-main-info[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  width: inherit;\n  font-family: \"Santhony\";\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 32px;\n  background-color: var(--color-gradient-left-3);\n  background-image: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-main-info[_ngcontent-%COMP%]   .sugar-amount[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--color-tooltip-text);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-main-info[_ngcontent-%COMP%]   .log-out[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-family: \"Gilroy-500\";\n  font-size: 16px;\n  background-color: var(--color-gradient-left-4);\n  background-image: linear-gradient(var(--deg-gradient-4), var(--color-gradient-left-4), var(--color-gradient-right-4));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  width: calc(100% - 16px);\n  margin: auto;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  height: 49px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--color-tooltip-text);\n  border-bottom: 1px solid var(--border-list-color);\n  font-size: 14px;\n  line-height: 17px;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:first-child {\n  border-top: 1px solid var(--border-list-color);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n}\n.wrapper[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .item-amount[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-500\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUFBRDtBQUdFO0VBREQ7SUFFRSxhQUFBO0VBQUQ7QUFDRjtBQUVFO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0FBQUg7QUFFRztFQUNDLHdCQUFBO0VBQ0EsYUFBQTtBQUFKO0FBRUk7RUFDQyxjQUFBO0VBQ0EsYUFBQTtFQUVBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQWlCQSxtQkFBQTtBQWpCTDtBQUNLO0VBUEQ7SUFRRSxrQkFBQTtFQUVKO0FBQ0Y7QUFBSztFQVhEO0lBWUUsaUJBQUE7RUFHSjtBQUNGO0FBREs7RUFmRDtJQWdCRSxpQkFBQTtFQUlKO0FBQ0Y7QUFGSztFQW5CRDtJQW9CRSxpQkFBQTtFQUtKO0FBQ0Y7QUFESztFQUNDLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSwrR0FBQTtBQUVOO0FBQU07RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFFBQUE7QUFFUDtBQUVLO0VBQ0MsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQUVNO0VBQ0MsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUNqQkwsOENEa0IwRDtFQ2pCMUQscUhBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QURrQkY7QUFETTtFQUNDLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFHUDtBQUdHO0VBQ0MsK0JBQUE7RUFD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RDtFQ3h5QjFELHFIQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FEcXVCRjtBQW1FTTtFQUNDLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFqRVA7QUFtRU07RUFDQyxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQ3J6QkwsOENEc3pCMEQ7RUNyekIxRCxxSEFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBRHF2QkY7QUFrRUk7RUFDTSx3QkFBQTtFQUNBLFlBQUE7QUFoRVY7QUFrRUs7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBaEVOO0FBa0VNO0VBQ0MsOENBQUE7QUFoRVA7QUFtRU07RUFDQyx5QkFBQTtBQWpFUDtBQW9FTTtFQUNDLHlCQUFBO0FBbEVQIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwvbWl4aW5zXCI7XG5cbi53cmFwcGVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblxuXHQuZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuXHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHR9XG5cblx0XHQuY29udGFpbmVyIHtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXHRcdFx0LnVzZXItaW5mbyB7XG5cdFx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcblx0XHRcdFx0bWFyZ2luOiAwIDhweDtcblxuXHRcdFx0XHQucHJvZmlsZS1pbmZvIHtcblx0XHRcdFx0XHR3aWR0aDogaW5oZXJpdDtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTExMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTMwcHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtNDBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC01MHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cblx0XHRcdFx0XHQuaW1hZ2Utc2VjdGlvbiB7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiAxO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDRweDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDRweDtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWRlZy1ncmFkaWVudC0yKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0yKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMikpO1xuXG5cdFx0XHRcdFx0XHQudXNlci1pY29uIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDg4cHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogODhweDtcblx0XHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiA1MCU7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHRcdFx0XHRcdFx0dG9wOiA1cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb2ZpbGUtbWFpbi1pbmZvIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGluaGVyaXQ7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogaW5oZXJpdDtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdFx0XHRcdFx0XHQudXNlcm5hbWUge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogaW5oZXJpdDtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiU2FudGhvbnlcIjtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMzJweDtcblx0XHRcdFx0XHRcdFx0QGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLXRleHQodmFyKC0tZGVnLWdyYWRpZW50LTMpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTMpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0zKSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5zdWdhci1hbW91bnQge1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJHaWxyb3ktNDAwXCI7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE3cHg7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1jb2xvci10b29sdGlwLXRleHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuZmlyc3Qtcm93IHtcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDY0cHggLSA2NHB4KTtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0bWFyZ2luOiAwIDY0cHg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuXHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cdFx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDMycHggLSAzMnB4KTtcblx0XHRcdFx0XHRtYXJnaW46IDAgMzJweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHAge1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkdpbHJveS00MDBcIjtcblx0XHRcdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyOHB4O1xuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1jb2xvci10b29sdGlwLXRleHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnN0YXRzIHtcblx0XHRcdFx0XHR3aWR0aDogNTUwcHg7XG5cdFx0XHRcdFx0Lm1vYmlsZSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcblx0XHRcdFx0XHRcdHdpZHRoOiA0NyU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcblx0XHRcdFx0XHRcdC5kZXNrdG9wIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5tb2JpbGUge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuaXRlbSB7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDQ5cHg7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1jb2xvci10b29sdGlwLXRleHQpO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saXN0LWNvbG9yKTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxN3B4O1xuXG5cdFx0XHRcdFx0XHQmOmZpcnN0LW9mLXR5cGUge1xuXHRcdFx0XHRcdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpc3QtY29sb3IpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmLW5hbWUge1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJHaWxyb3ktNDAwXCI7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCYtYW1vdW50IHtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiR2lscm95LTUwMFwiO1xuXHRcdFx0XHRcdFx0XHQucGFydHkge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAzMnB4O1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMzJweDtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LmFycm93IHtcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdFx0dG9wOiAycHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucmV3YXJkcyB7XG5cdFx0XHRcdFx0d2lkdGg6IDU1MHB4O1xuXHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcblx0XHRcdFx0XHRcdHdpZHRoOiA0NyU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuXHRcdFx0XHRcdC5oZWFkZXIge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdFx0XHRcdFx0LmxpbmtzIHtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBpbmhlcml0O1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJHaWxyb3ktNTAwXCI7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTZweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS0xKTtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDQ0JTtcblxuXHRcdFx0XHRcdFx0XHQucGx1cy1pY29uIHtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMzJweDtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDRweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5maXJzdC1jaGlsZCB7XG5cdFx0XHRcdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpc3QtY29sb3IpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5pdGVtIHtcblx0XHRcdFx0XHRcdGhlaWdodDogODBweDtcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlzdC1jb2xvcik7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdFx0XHRcdFx0Ji1uYW1lIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiR2lscm95LTQwMFwiO1xuXHRcdFx0XHRcdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1jb2xvci10b29sdGlwLXRleHQpO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMjAwcHg7XG5cdFx0XHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0XHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG5cdFx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTUwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnNsaWNlcyB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdFx0XHRcdFx0XHQuc2xpY2Uge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMTVweDtcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cblx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQmOm50aC1jaGlsZCgzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Ji1pbWFnZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItcHJvZmlsZS1pbWFnZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAzMnB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDMycHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDMycHg7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Ji1kYXRhIHtcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNXB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiR2lscm95LTYwMFwiO1xuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDhweDtcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcblxuXHRcdFx0XHRcdFx0XHRcdFx0Ji10eXBlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLWxpc3QtaGVhZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEycHg7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdCYtbmFtZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1jb2xvci10b29sdGlwLXRleHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogNzBweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5zZWNvbmQtcm93IHtcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDY0cHggLSA2NHB4KTtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0bWFyZ2luOiAwIDY0cHg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuXHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cdFx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDMycHggLSAzMnB4KTtcblx0XHRcdFx0XHRtYXJnaW46IDAgMzJweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHAge1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkdpbHJveS00MDBcIjtcblx0XHRcdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyOHB4O1xuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1jb2xvci10b29sdGlwLXRleHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmxpdmUtZXZlbnRzIHtcblx0XHRcdFx0XHR3aWR0aDogNTUwcHg7XG5cdFx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDQ3JTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdFx0XHRcdFx0LmhlYWRlciB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDYwcHg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saXN0LWNvbG9yKTtcblxuXHRcdFx0XHRcdFx0LmxpbmtzIHtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBpbmhlcml0O1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJHaWxyb3ktNTAwXCI7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTZweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS0xKTtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDIwJTtcblxuXHRcdFx0XHRcdFx0XHQucGx1cy1pY29uIHtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMzJweDtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDRweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5jb250ZW50IHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAyNHB4O1xuXG5cdFx0XHRcdFx0XHQuYnV0dG9tLWxpbmUge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHQucGluayB7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4IDBweCAwcHggOHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5zZWNvbmRhcnktcGluayB7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMHB4IDhweCA4cHggMHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5ldmVudC1saW5lIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA4MHB4O1xuXHRcdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpc3QtY29sb3IpO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAyNHB4O1xuXG5cdFx0XHRcdFx0XHRcdCYtaW1nIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMjIlO1xuXG5cdFx0XHRcdFx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDI3JTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA1NnB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogN3B4O1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQmLXRleHQge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRcdFx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiR2lscm95LTYwMFwiO1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE5cHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJHaWxyb3ktNTAwXCI7XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTRweDtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogNHB4IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHQuc3BhbiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMTZweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQud2F0Y2hpbmcge1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiR2lscm95XCItNjAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEycHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItZXZlbnRzLWxpdmUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhcigtLWRlZy1ncmFkaWVudC1saXZlLWV2ZW50cyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtbGl2ZS1ldmVudHMpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC1saXZlLWV2ZW50cylcblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Ji1idG4ge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAyMCU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucGxhdGZvcm1zIHtcblx0XHRcdFx0XHR3aWR0aDogNTUwcHg7XG5cdFx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDQ3JTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdFx0XHRcdFx0LmhlYWRlciB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDYwcHg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saXN0LWNvbG9yKTtcblxuXHRcdFx0XHRcdFx0LmxpbmtzIHtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBpbmhlcml0O1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJHaWxyb3ktNTAwXCI7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTZweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS0xKTtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDQ0JTtcblxuXHRcdFx0XHRcdFx0XHQucGx1cy1pY29uIHtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMzJweDtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDRweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5jb250ZW50IHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdGdhcDogMjRweDtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDI0cHg7XG5cblx0XHRcdFx0XHRcdC5wb3B1bGFyLXBsYXRmb3JtIHtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1ib3JkZXIodmFyKC0tZGVnLWdyYWRpZW50LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0xKSwgM3B4LCA4cHgpO1xuXG5cdFx0XHRcdFx0XHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMCA4cHggOHB4IDhweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0XHQmOjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiUG9wdWxhclwiO1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkdpbHJveS00MDBcIjtcblx0XHRcdFx0XHRcdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1jb2xvci1wb3B1bGFyLXRleHQpO1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA1MnB4O1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMTZweDtcblx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA2cHggNnB4IDAgMDtcblx0XHRcdFx0XHRcdFx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItYmcoXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIoLS1kZWctcG9wdWxhci1wbGF0Zm9ybSksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIoLS1jb2xvci1wb3B1bGFyLXBsYXRmb3JtLWxlZnQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyKC0tY29sb3ItcG9wdWxhci1wbGF0Zm9ybS1yaWdodClcblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRcdFx0dG9wOiAtMTVweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnBsYXRmb3JtIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDExMHB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDcwcHg7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxMnB4IDI0cHg7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXBsYXRmb3JtKTtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWxpc3QtY29sb3IpO1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXHRcdFx0XHRcdFx0XHQucG9wdWxhciB7XG5cdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRcdGxlZnQ6IDEyMHB4O1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogLTIwcHg7XG5cdFx0XHRcdFx0XHRcdFx0ei1pbmRleDogOTk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQucGxhdGZvcm0tZGV0YWlsIHtcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0XHRcdFx0XHRcdFx0XHQmLWljb24ge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Ji1uYW1lIHtcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkdpbHJveS01MDBcIjtcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWNvbG9yLXRvb2x0aXAtdGV4dCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Lm1vYmlsZSB7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcblx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0fVxuXG5cdFx0LmNvbnRhaW5lciB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXHRcdFx0LmNha2Vib3hlcyB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHRcdFx0d2lkdGg6IDUwcHg7XG5cdFx0XHRcdGhlaWdodDogNTBweDtcblxuXHRcdFx0XHQuY2FrZWJveCB7XG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXG5cdFx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHRcdHdpZHRoOiBpbmhlcml0O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiBpbmhlcml0O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogaW5oZXJpdDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmOm50aC1vZi10eXBlKDEpIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxNXB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxNXB4O1xuXHRcdFx0XHRcdFx0bGVmdDogLTE1MCU7XG5cdFx0XHRcdFx0XHR0b3A6IC01MCU7XG5cblx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuNTtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDJweDtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC05LjdkZWcpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCY6bnRoLW9mLXR5cGUoMikge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDM0cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDM0cHg7XG5cdFx0XHRcdFx0XHRsZWZ0OiAtMjAwJTtcblx0XHRcdFx0XHRcdHRvcDogMTMwJTtcblxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmOm50aC1vZi10eXBlKDMpIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAzNHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAzNHB4O1xuXHRcdFx0XHRcdFx0bGVmdDogLTM1MCU7XG5cdFx0XHRcdFx0XHR0b3A6IDI2MCU7XG5cblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDJweDtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC0zNWRlZyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0JjpudGgtb2YtdHlwZSg0KSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTZweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMTZweDtcblx0XHRcdFx0XHRcdGxlZnQ6IC0yMDAlO1xuXHRcdFx0XHRcdFx0dG9wOiAyNDAlO1xuXG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwLjU7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgyNGRlZyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0JjpudGgtb2YtdHlwZSg1KSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjBweDtcblx0XHRcdFx0XHRcdGxlZnQ6IDIzMCU7XG5cdFx0XHRcdFx0XHR0b3A6IDcwJTtcblxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTIyZGVnKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmOm50aC1vZi10eXBlKDYpIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxM3B4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxM3B4O1xuXHRcdFx0XHRcdFx0bGVmdDogMzMwJTtcblx0XHRcdFx0XHRcdHRvcDogMTIwJTtcblxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMTlkZWcpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCY6bnRoLW9mLXR5cGUoNykge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDI2cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDI2cHg7XG5cdFx0XHRcdFx0XHRsZWZ0OiAyNjAlO1xuXHRcdFx0XHRcdFx0dG9wOiAxNzAlO1xuXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNmRlZyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0JjpudGgtb2YtdHlwZSg4KSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTNweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMTJweDtcblx0XHRcdFx0XHRcdGxlZnQ6IDM2MCU7XG5cdFx0XHRcdFx0XHR0b3A6IDIwMCU7XG5cblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDJweDtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC0zMS4zMmRlZyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0JjpudGgtb2YtdHlwZSg5KSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjBweDtcblx0XHRcdFx0XHRcdGxlZnQ6IDIwMCU7XG5cdFx0XHRcdFx0XHR0b3A6IDI1MCU7XG5cblx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuMjtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDJweDtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC0yM2RlZyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0JjpudGgtb2YtdHlwZSgxMCkge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDlweDtcblx0XHRcdFx0XHRcdGhlaWdodDogOXB4O1xuXHRcdFx0XHRcdFx0bGVmdDogNDAwJTtcblx0XHRcdFx0XHRcdHRvcDogMzMwJTtcblxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMzVkZWcpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xuXHRcdFx0XHRcdFx0JjpudGgtb2YtdHlwZSgxKSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxNXB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDE1cHg7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IC0xNTAlO1xuXHRcdFx0XHRcdFx0XHR0b3A6IC01MCU7XG5cblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMC41O1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAycHg7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC05LjdkZWcpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmOm50aC1vZi10eXBlKDIpIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDM0cHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMzRweDtcblx0XHRcdFx0XHRcdFx0bGVmdDogLTE1MDAlO1xuXHRcdFx0XHRcdFx0XHR0b3A6IDEzMCU7XG5cblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmOm50aC1vZi10eXBlKDMpIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDM0cHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMzRweDtcblx0XHRcdFx0XHRcdFx0bGVmdDogLTMwMCU7XG5cdFx0XHRcdFx0XHRcdHRvcDogMjYwJTtcblxuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAycHg7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC0zNWRlZyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCY6bnRoLW9mLXR5cGUoNCkge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTZweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxNnB4O1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAtMjAwJTtcblx0XHRcdFx0XHRcdFx0dG9wOiAyNDAlO1xuXG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuNTtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgyNGRlZyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCY6bnRoLW9mLXR5cGUoNSkge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAxODAlO1xuXHRcdFx0XHRcdFx0XHR0b3A6IDcwJTtcblxuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAycHg7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC0yMmRlZyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCY6bnRoLW9mLXR5cGUoNikge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTNweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxM3B4O1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAzMDAlO1xuXHRcdFx0XHRcdFx0XHR0b3A6IDEyMCU7XG5cblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxOWRlZyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCY6bnRoLW9mLXR5cGUoNykge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMjZweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAyNnB4O1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAyMzAlO1xuXHRcdFx0XHRcdFx0XHR0b3A6IDE3MCU7XG5cblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNmRlZyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCY6bnRoLW9mLXR5cGUoOCkge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTNweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAzMjAlO1xuXHRcdFx0XHRcdFx0XHR0b3A6IDIwMCU7XG5cblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMzEuMzJkZWcpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmOm50aC1vZi10eXBlKDkpIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDIwcHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMjBweDtcblx0XHRcdFx0XHRcdFx0bGVmdDogMjAwJTtcblx0XHRcdFx0XHRcdFx0dG9wOiAyNTAlO1xuXG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuMjtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMjNkZWcpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmOm50aC1vZi10eXBlKDEwKSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA5cHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogOXB4O1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAzNDAlO1xuXHRcdFx0XHRcdFx0XHR0b3A6IDMyMCU7XG5cblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNWRlZyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC51c2VyLWluZm8ge1xuXHRcdFx0XHR3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG5cdFx0XHRcdG1hcmdpbjogMCA4cHg7XG5cblx0XHRcdFx0LnByb2ZpbGUtaW5mbyB7XG5cdFx0XHRcdFx0d2lkdGg6IGluaGVyaXQ7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0xMTBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0zMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTQwcHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtNTBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG5cdFx0XHRcdFx0LmltYWdlLXNlY3Rpb24ge1xuXHRcdFx0XHRcdFx0ei1pbmRleDogMTtcblx0XHRcdFx0XHRcdGhlaWdodDogMTA0cHg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTA0cHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1kZWctZ3JhZGllbnQtMiksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMiksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTIpKTtcblxuXHRcdFx0XHRcdFx0LnVzZXItaWNvbiB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA4OHB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDg4cHg7XG5cdFx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cdFx0XHRcdFx0XHRcdHRvcDogNXB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wcm9maWxlLXNldHRpbmdzIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0XHRcdFx0XHQmLXdyYXBwZXIge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogOHB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogOHB4O1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNDBweDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRcdFx0XHRcdFx0LnByb2ZpbGUtc2V0dGluZ3MtaW5wdXQge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSA4cHggLSAxMDFweCk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQucHJvZmlsZS1zZXR0aW5ncy1idXR0b24ge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDFweDtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IC04cHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmVycm9yLW1lc3NhZ2Uge1xuXHRcdFx0XHRcdFx0XHRAaW5jbHVkZSBlcnJvci1tZXNzYWdlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuc3VnYXItc2V0dGluZ3Mge1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJHaWxyb3ktNDAwXCI7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE3cHg7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1jb2xvci10b29sdGlwLXRleHQpO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDhweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucHJvZmlsZS1tYWluLWluZm8ge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogaW5oZXJpdDtcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBpbmhlcml0O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0XHRcdFx0XHRcdC51c2VybmFtZSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiBpbmhlcml0O1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJTYW50aG9ueVwiO1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAzMnB4O1xuXHRcdFx0XHRcdFx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dCh2YXIoLS1kZWctZ3JhZGllbnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTMpKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnN1Z2FyLWFtb3VudCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkdpbHJveS00MDBcIjtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTdweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWNvbG9yLXRvb2x0aXAtdGV4dCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQubG9nLW91dCB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkdpbHJveS01MDBcIjtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dCh2YXIoLS1kZWctZ3JhZGllbnQtNCksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtNCksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTQpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQudXNlci1kZXRhaWxzIHtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuXG5cdFx0XHRcdFx0Lml0ZW0ge1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA0OXB4O1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tY29sb3ItdG9vbHRpcC10ZXh0KTtcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlzdC1jb2xvcik7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTdweDtcblxuXHRcdFx0XHRcdFx0JjpmaXJzdC1jaGlsZCB7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlzdC1jb2xvcik7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCYtbmFtZSB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkdpbHJveS00MDBcIjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ji1hbW91bnQge1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJHaWxyb3ktNTAwXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJAbWl4aW4gYnRuLWhvdmVyKCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbkBtaXhpbiBidG4tZGlzYWJsZWQoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgJjpkaXNhYmxlZCB7XG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gICAgYmFja2dyb3VuZDogJGJnO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcbiAgfVxufVxuXG5AbWl4aW4gYnRuLWRlZmF1bHQoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gIGJhY2tncm91bmQ6ICRiZztcbiAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItYmcoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbn1cblxuQG1peGluIGJvcmRlci1ncmFkaWVudC1saW5lYXIoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYm9yZGVyLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci1ib3JkZXIoXG4gICRkZWcsXG4gICRsZWZ0Q29sb3IsXG4gICRyaWdodENvbG9yLFxuICAkYm9yZGVyV2lkdGgsXG4gICRib3JkZXJSYWRpdXNcbikge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcbiAgICBwYWRkaW5nOiAkYm9yZGVyV2lkdGg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbiAgICAtd2Via2l0LW1hc2s6IGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCkgY29udGVudC1ib3gsXG4gICAgICAvKiBbMV0gKi8gbGluZWFyLWdyYWRpZW50KCNmZmYgMCAwKTsgLyogWzJdICovXG4gICAgLXdlYmtpdC1tYXNrLWNvbXBvc2l0ZTogeG9yOyAvKiBbM10g0LTQu9GPINC/0ZbQtNGC0YDQuNC80LrQuCDQsdGA0LDRg9C30LXRgNGW0LIgKi9cbiAgICBtYXNrLWNvbXBvc2l0ZTogZXhjbHVkZTsgLyogWzNdICovXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci10ZXh0KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsZWZ0Q29sb3I7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci1ldmVudHMtbGl2ZSgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGVmdENvbG9yO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lci1zcGFuLXRleHQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3Ipe1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCggdmFyKC0tZGVnLWdyYWRpZW50LTMpLFxuICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTMpLFxuICB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0zKSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtaXhpbiBlcnJvci1tZXNzYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNTAwJztcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KFxuICAgIHZhcigtLWRlZy1ncmFkaWVudC00KSxcbiAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTQpLFxuICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTQpXG4gICk7XG59XG5cbkBtaXhpbiBHaWxyb3ktNDAwLTE2LWZvbnRzLTIge1xuICBmb250LWZhbWlseTogJ0dpbHJveS00MDAnO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBtaXhpbiBHaWxyb3ktNTAwLTMwLWZvbnRzLTIge1xuICBmb250LWZhbWlseTogJ0dpbHJveS01MDAnO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBtaXhpbiBHaWxyb3ktNjAwLTE0LWZvbnRzLTIge1xuICBmb250LWZhbWlseTogJ0dpbHJveS02MDAnO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4iXX0= */"]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6873);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/profile/profile.component */ 706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9609);




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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 7737);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 811);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/profile/profile.component */ 706);
/* harmony import */ var _components_confirm_settings_confirm_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/confirm-settings/confirm-settings.component */ 6908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 9609);






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