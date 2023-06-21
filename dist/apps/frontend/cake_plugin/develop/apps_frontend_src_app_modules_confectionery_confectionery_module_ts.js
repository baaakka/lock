"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["apps_frontend_src_app_modules_confectionery_confectionery_module_ts"],{

/***/ 1802:
/*!*************************************************************************************!*\
  !*** ./apps/frontend/src/app/modules/confectionery/confectionery-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfectioneryRoutingModule": () => (/* binding */ ConfectioneryRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6873);
/* harmony import */ var _confectionery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confectionery.component */ 5370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9609);




const routes = [{
        path: '',
        component: _confectionery_component__WEBPACK_IMPORTED_MODULE_0__.ConfectioneryComponent,
    }];
class ConfectioneryRoutingModule {
}
ConfectioneryRoutingModule.ɵfac = function ConfectioneryRoutingModule_Factory(t) { return new (t || ConfectioneryRoutingModule)(); };
ConfectioneryRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ConfectioneryRoutingModule });
ConfectioneryRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ConfectioneryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5370:
/*!********************************************************************************!*\
  !*** ./apps/frontend/src/app/modules/confectionery/confectionery.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfectioneryComponent": () => (/* binding */ ConfectioneryComponent)
/* harmony export */ });
/* harmony import */ var _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cake/lib-api-interface */ 171);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6991);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 5231);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ 554);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 5894);
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/modals.service */ 5414);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/theme.service */ 1266);
/* harmony import */ var _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/classes/watcher */ 34);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 6873);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7661);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-skeleton-loader */ 3453);
/* harmony import */ var _shared_components_cakebox_cakebox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/cakebox/cakebox.component */ 3755);
/* harmony import */ var _core_pipes_cakebox_transform_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/pipes/cakebox-transform.pipe */ 7603);


















function ConfectioneryComponent_div_12_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const slice_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("src", slice_r17.image, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 3, slice_r17.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](slice_r17.name);
} }
function ConfectioneryComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfectioneryComponent_div_12_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22); const slice_r17 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r21.slices.length ? ctx_r21.modalsService.openRewardPopup(slice_r17.id) : ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ConfectioneryComponent_div_12_div_1_ng_container_1_Template, 7, 5, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r16.slices.length)("ngIfElse", _r6);
} }
function ConfectioneryComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ConfectioneryComponent_div_12_div_1_Template, 2, 2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.slices.length ? ctx_r0.slices.slice(0, 13) : ctx_r0.getMockArray(6));
} }
function ConfectioneryComponent_div_17_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const slice_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("src", slice_r23.image, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 3, slice_r23.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](slice_r23.name);
} }
function ConfectioneryComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfectioneryComponent_div_17_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28); const slice_r23 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r27.modalsService.openRewardPopup(slice_r23.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ConfectioneryComponent_div_17_ng_container_1_Template, 7, 5, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.slices.length)("ngIfElse", _r8);
} }
function ConfectioneryComponent_div_30_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "cake-cakebox", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "cakeboxTransform");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cakebox_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("src", cakebox_r29.image, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cakebox", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 4, cakebox_r29));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 6, cakebox_r29.type.toLowerCase().replace("cake", "cak3")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](cakebox_r29.name);
} }
function ConfectioneryComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfectioneryComponent_div_30_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r34); const cakebox_r29 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r33.modalsService.openRewardPopup(cakebox_r29.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ConfectioneryComponent_div_30_ng_container_1_Template, 11, 8, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.cakeboxes.length)("ngIfElse", _r10);
} }
function ConfectioneryComponent_ng_container_43_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 52)(1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 54)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const slice_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("src", slice_r39.smallImage || slice_r39.image, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 3, slice_r39.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](slice_r39.name);
} }
function ConfectioneryComponent_ng_container_43_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfectioneryComponent_ng_container_43_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r41); const user_r36 = restoredCtx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r40.modalsService.openKolPopup(user_r36)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 47)(2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, ConfectioneryComponent_ng_container_43_div_1_div_9_Template, 9, 5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const user_r36 = ctx.$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("src", user_r36.user.avatar || ctx_r35.getRandomAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", user_r36.user.firstName, " ", user_r36.user.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](user_r36.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](10, 5, user_r36.rewards, 0, 3));
} }
function ConfectioneryComponent_ng_container_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ConfectioneryComponent_ng_container_43_div_1_Template, 11, 9, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.users);
} }
const _c0 = function (a0, a1, a2) { return { "background-color": a0, width: a1, height: a2, "border-radius": "2px" }; };
function ConfectioneryComponent_ng_template_58_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 52)(1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ngx-skeleton-loader", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](4, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](6, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](67);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](3, _c0, ctx_r44.activeTheme.properties["--skeleton-color"], ctx_r44.getOffsetWidth > 768 ? "48px" : "25px", ctx_r44.getOffsetWidth > 768 ? "48px" : "25px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r14);
} }
const _c1 = function (a0) { return { "background-color": a0, width: "100%", height: "100%", margin: 0 }; };
function ConfectioneryComponent_ng_template_58_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56)(1, "div", 47)(2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ngx-skeleton-loader", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](4, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](6, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ConfectioneryComponent_ng_template_58_div_0_div_8_Template, 7, 7, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](67);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c1, ctx_r42.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r42.getMockArray(3));
} }
function ConfectioneryComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, ConfectioneryComponent_ng_template_58_div_0_Template, 9, 6, "div", 55);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r5.getMockArray(6));
} }
const _c2 = function (a0) { return { "background-color": a0, width: "224px", height: "224px", "border-radius": "12px" }; };
function ConfectioneryComponent_ng_template_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-skeleton-loader", 59)(1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](2, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](4, 58);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](67);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c2, ctx_r7.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r14);
} }
const _c3 = function (a0) { return { "background-color": a0, width: "100%", height: "100%", "border-radius": "12px", margin: 0 }; };
function ConfectioneryComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ngx-skeleton-loader", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](2, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](4, 58);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](67);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c3, ctx_r9.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r14);
} }
const _c4 = function (a0) { return { "background-color": a0, width: "100%", height: "100%", "border-radius": "12px" }; };
function ConfectioneryComponent_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ngx-skeleton-loader", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](3, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](5, 58);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](67);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c4, ctx_r11.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r14);
} }
const _c5 = function (a0, a2) { return { "background-color": a0, width: "50px", height: a2, "border-radius": "2px", margin: 0 }; };
function ConfectioneryComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-skeleton-loader", 59);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](1, _c5, ctx_r13.activeTheme.properties["--skeleton-color"], ctx_r13.getOffsetWidth > 768 ? "20px" : "16px"));
} }
const _c6 = function (a0, a2) { return { "background-color": a0, width: "80px", height: a2, "border-radius": "2px", margin: 0 }; };
function ConfectioneryComponent_ng_template_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-skeleton-loader", 59);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](1, _c6, ctx_r15.activeTheme.properties["--skeleton-color"], ctx_r15.getOffsetWidth > 768 ? "30px" : "17px"));
} }
var TypesLists;
(function (TypesLists) {
    TypesLists["Slices"] = "Slices";
    TypesLists["Cakeboxes"] = "Cakeboxes";
    TypesLists["Kol"] = "Kol";
})(TypesLists || (TypesLists = {}));
class ConfectioneryComponent extends _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_5__.Watcher {
    constructor(apiService, modalsService, authService, themeService) {
        super();
        this.apiService = apiService;
        this.modalsService = modalsService;
        this.authService = authService;
        this.themeService = themeService;
        this.typesLists = TypesLists;
        this.slices = [];
        this.cakeboxes = [];
        this.users = [];
        this.scrollSubject = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.slicePagination = {
            page: 1,
            pageSize: 28,
            count: 0,
            data: 0,
        };
        this.cakeboxPagination = {
            page: 1,
            pageSize: 8,
            count: 0,
            data: 0,
        };
        this.usersPagination = {
            page: 1,
            pageSize: 7,
            count: 0,
            data: 0,
        };
    }
    get getSliceQueryObj() {
        return {
            page: this.slicePagination.page,
            pageSize: this.slicePagination.pageSize,
            where: _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.RewardEnum.SLICE,
            sort: _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.SortRewardEum.CreatedAt,
            isConfectionary: true,
        };
    }
    get getCakeboxQueryObj() {
        return {
            page: this.cakeboxPagination.page,
            pageSize: this.cakeboxPagination.pageSize,
            where: _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.RewardEnum.CAKEBOX,
            sort: _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.SortRewardEum.CreatedAt,
            isConfectionary: true,
        };
    }
    get getUsersQueryObj() {
        return {
            page: this.usersPagination.page,
            pageSize: this.usersPagination.pageSize,
            where: _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.Role.kol,
        };
    }
    get getRandomAvatar() {
        return this.authService.randomAvatar;
    }
    get activeTheme() {
        return this.themeService.active;
    }
    ngOnInit() {
        this.getSlices(0);
        this.getCakeboxes(0);
        this.getUsers(0);
    }
    getMockArray(number) {
        return Array(number);
    }
    getSlices(number) {
        this.apiService
            .getRewards(this.getSliceQueryObj)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribe))
            .subscribe((res) => {
            this.slices = this.slices.concat(res.data);
            this.slicePagination = { ...res, data: number };
        });
    }
    getCakeboxes(number) {
        this.apiService
            .getRewards(this.getCakeboxQueryObj)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribe))
            .subscribe((res) => {
            this.cakeboxes = this.cakeboxes.concat(res.data);
            this.cakeboxPagination = { ...res, data: number };
        });
    }
    getUsers(number) {
        this.apiService
            .getUsers(this.getUsersQueryObj)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribe))
            .subscribe((res) => {
            this.users = this.users.concat(res.data);
            this.usersPagination = { ...res, data: number };
        });
    }
    getCeilNumber(number) {
        return Math.ceil(number);
    }
    get getOffsetWidth() {
        return document.getElementsByTagName('body')[0].offsetWidth;
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
ConfectioneryComponent.ɵfac = function ConfectioneryComponent_Factory(t) { return new (t || ConfectioneryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_modals_service__WEBPACK_IMPORTED_MODULE_3__.ModalsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_4__.ThemeService)); };
ConfectioneryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ConfectioneryComponent, selectors: [["cake-confectionery"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 70, vars: 8, consts: [[1, "content"], [1, "wrapper"], [1, "title"], ["routerLink", "/rewards/SLICE"], ["svgIcon", "arrow-left-blue"], [1, "container-for-shadow"], [1, "shadow-block"], [1, "list"], ["class", "slices big-slices pointer", 4, "ngIf"], [1, "slices", "small-slices"], ["class", "slice animation pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "title", "cake-cakebox-title"], ["routerLink", "/rewards/CAKEBOX"], [1, "cakeboxes"], ["class", "cakebox animation pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "title", "last-title"], ["routerLink", "/grab-a-slice/KOL"], [1, "shadow-block", "kol-shadow"], [1, "users"], [4, "ngIf", "ngIfElse"], [1, "banner-wrapper"], [1, "flex"], ["routerLink", "/get-sugar", 1, "banner"], ["loading", "lazy", "src", "../../../assets/imgs/banner-how-does-work.png", "alt", "", 1, "big-banner"], ["loading", "lazy", "src", "../../../assets/imgs/need-sugar.png", "alt", "", 1, "small-banner"], [1, "small-banner"], ["svgIcon", "arrow-left-blue", 1, "small-banner"], [1, "banner"], ["routerLink", "/get-sugar", "loading", "lazy", "src", "../../../assets/imgs/banner-need-sugar.png", "alt", "", 1, "big-banner"], ["loading", "lazy", "src", "../../../assets/imgs/how-does-work.png", "alt", "", 1, "small-banner"], ["skeletonKol", ""], ["skeletonBigSlice", ""], ["skeletonSmallSlice", ""], ["skeletonCakebox", ""], ["skeletonSmallText", ""], ["skeletonBigText", ""], [1, "slices", "big-slices", "pointer"], ["class", "slice animation", 3, "click", 4, "ngFor", "ngForOf"], [1, "slice", "animation", 3, "click"], ["loading", "lazy", "alt", ""], [1, "slice", "animation", "pointer", 3, "click"], [1, "cakebox", "animation", "pointer", 3, "click"], [1, "box"], [1, "cakebox-container-confectionery"], [3, "cakebox"], ["class", "user animation", 3, "click", 4, "ngFor", "ngForOf"], [1, "user", "animation", 3, "click"], [1, "user-info", "pointer"], [1, "avatar"], ["loading", "lazy"], [1, "user-slices"], ["class", "user-slice pointer", 4, "ngFor", "ngForOf"], [1, "user-slice", "pointer"], [1, "slice-img"], [1, "slice-info"], ["class", "user animation", 4, "ngFor", "ngForOf"], [1, "user", "animation"], ["count", "1", "appearance", "circle", "animation", "progress-dark", 3, "theme"], [3, "ngTemplateOutlet"], ["count", "1", "appearance", "line", "animation", "progress-dark", 3, "theme"], [1, "small-skeleton-slice"]], template: function ConfectioneryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Fresh out of the oven!");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div")(6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, ConfectioneryComponent_div_12_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 7)(16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, ConfectioneryComponent_div_17_Template, 2, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 1)(19, "div", 11)(20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Featured this week");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div")(23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 7)(29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, ConfectioneryComponent_div_30_Template, 2, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 1)(32, "div", 15)(33, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Promoted & hot items");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div")(36, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 7)(42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, ConfectioneryComponent_ng_container_43_Template, 2, 1, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 20)(45, "div", 21)(46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](47, "img", 23)(48, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Need sugar? Get some here!");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](51, "mat-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](53, "img", 28)(54, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "How does this work? Watch tutorial video here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](57, "mat-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](58, ConfectioneryComponent_ng_template_58_Template, 1, 1, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](60, ConfectioneryComponent_ng_template_60_Template, 5, 5, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](62, ConfectioneryComponent_ng_template_62_Template, 5, 5, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, ConfectioneryComponent_ng_template_64_Template, 6, 5, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](66, ConfectioneryComponent_ng_template_66_Template, 1, 4, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](68, ConfectioneryComponent_ng_template_68_Template, 1, 4, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" See all (", ctx.slicePagination.count, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.getOffsetWidth > 768);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.slices.length ? ctx.getOffsetWidth > 768 ? ctx.slices.slice(12) : ctx.slices.slice(0, 15) : ctx.getMockArray(9));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("See all (", ctx.cakeboxPagination.count, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.cakeboxes.length ? ctx.cakeboxes : ctx.getMockArray(4));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" See all (", ctx.usersPagination.count, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.users.length)("ngIfElse", _r4);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_14__.NgxSkeletonLoaderComponent, _shared_components_cakebox_cakebox_component__WEBPACK_IMPORTED_MODULE_6__.CakeboxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe, _core_pipes_cakebox_transform_pipe__WEBPACK_IMPORTED_MODULE_7__.CakeboxTransformPipe], styles: ["@-moz-document url-prefix() {\n  .cakebox-container-confectionery {\n    transform: scale(0.7) translateX(-50%) !important;\n    transform-origin: left top;\n    width: 142.8571428571%;\n    height: 142.8571428571%;\n  }\n}\n.content[_ngcontent-%COMP%] {\n  padding: 0 175px;\n  position: relative;\n  max-width: 1440px;\n  margin: auto;\n}\n.content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-fonts-1);\n  font-family: \"Gilroy-400\";\n}\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-fonts-2);\n  font-family: \"Gilroy-500\";\n}\n.content[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%] {\n  animation: 1s animation_show ease-in-out;\n}\n@media (min-width: 1980px) {\n  .content[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n}\n@media (max-width: 1024px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 0 100px;\n  }\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 0 0 0 16px;\n    margin-top: 25px;\n  }\n}\n@media (max-width: 425px) {\n  .content[_ngcontent-%COMP%] {\n    margin-top: 46px;\n  }\n}\n.content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  width: 860px;\n  display: flex;\n  margin: 40px auto;\n  justify-content: space-between;\n}\n@media (max-width: 1204px) {\n  .content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n    margin: 30px auto 0 auto;\n    display: block;\n    padding: 0 16px 0 0;\n    justify-content: space-evenly;\n  }\n}\n.content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n  width: 420px;\n  height: 120px;\n  cursor: pointer;\n}\n.content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n}\n@media (max-width: 1204px) {\n  .content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n    width: 48%;\n  }\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-top: 1px solid var(--border-list-color);\n  }\n  .content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]:last-of-type {\n    border-bottom: 1px solid var(--border-list-color);\n  }\n}\n.content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  width: inherit;\n  font-size: 14px;\n}\n@media (min-width: 769px) {\n  .content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .small-banner[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n.content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n}\n.content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   img.big-banner[_ngcontent-%COMP%] {\n  object-fit: contain;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   img.big-banner[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 769px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-top: 54px;\n}\n@media (max-width: 769px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    margin-bottom: 17px;\n    margin-top: 0px;\n  }\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .title.cake-cakebox-title[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n  }\n}\n@media (min-width: 1024px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    height: 60px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: var(--color-gradient-name-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-name-left-1), var(--color-gradient-name-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-family: \"Gilroy-500\";\n  font-size: 38px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    opacity: 0;\n    pointer-events: none;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: var(--color-gradient-left-3);\n  background-image: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-family: \"Gilroy-500\";\n  font-size: 16px;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  overflow: visible;\n  height: 13px;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .container-for-shadow[_ngcontent-%COMP%] {\n  position: relative;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .container-for-shadow[_ngcontent-%COMP%]   .shadow-block[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 62px;\n  height: 100%;\n  z-index: 999;\n  background: linear-gradient(var(--deg-gradient-shadow), var(--color-gradient-left-shadow), var(--color-gradient-right-shadow));\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .container-for-shadow[_ngcontent-%COMP%]   .shadow-block.kol-shadow[_ngcontent-%COMP%] {\n  background: linear-gradient(var(--deg-gradient-shadow-kol), var(--color-gradient-left-shadow-kol), var(--color-gradient-right-shadow-kol));\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  scroll-snap-type: x mandatory;\n  overflow-x: auto;\n  overflow-y: hidden;\n  overscroll-behavior-x: none;\n  scroll-behavior: smooth;\n  -ms-overflow-style: none;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 12px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%] {\n    padding-top: 0px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.big-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 224px;\n  height: 224px;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.big-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-top: 8px;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.big-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 30px;\n  width: 224px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-bottom: 32px;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.small-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   .small-skeleton-slice[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.small-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.small-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   .small-skeleton-slice[_ngcontent-%COMP%] {\n  width: 148px;\n  height: 148px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.small-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.small-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   .small-skeleton-slice[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.small-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 8px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.small-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-top: 4px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.small-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-top: 8px;\n  width: 148px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.small-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-top: 4px;\n    width: 100px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  scroll-snap-align: start;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%] {\n    margin-right: 8px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n  transition: 0.1s ease-in-out;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1);\n  transition: 0.1s ease-in-out;\n  object-fit: cover;\n  border-radius: 12px;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 12px;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  scroll-snap-align: start;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%] {\n    margin-right: 8px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:hover   .box[_ngcontent-%COMP%] {\n  transform: scale(1.02);\n  transition: 0.1s ease-in-out;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  transform: scale(1);\n  transition: 0.1s ease-in-out;\n  position: relative;\n  width: 430px;\n  height: 147px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 266px;\n    height: 112px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 20px;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cakebox-container-confectionery[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  zoom: 0.7;\n  transform: translateX(-50%);\n}\n@media (max-width: 1023px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cakebox-container-confectionery[_ngcontent-%COMP%] {\n    zoom: 0.55;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 8px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-top: 8px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-top: 4px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%] {\n  display: flex;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  margin-right: 32px;\n  display: flex;\n  scroll-snap-align: start;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n    position: relative;\n    width: 88px;\n    margin-right: 16px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  max-width: 136px;\n  margin-right: 16px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    width: 88px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  height: 136px;\n  width: 136px;\n  border-radius: 99px;\n  background: linear-gradient(var(--deg--profile-image), var(--profile-image-bg-color-left), var(--profile-image-bg-color-right));\n  position: relative;\n  margin-bottom: 10px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n    height: 88px;\n    width: 88px;\n    margin-bottom: 15px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 124px;\n  width: 124px;\n  object-fit: cover;\n  border-radius: 99px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 80px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-slices[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    top: 70px;\n    width: 100%;\n    position: absolute;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-slices[_ngcontent-%COMP%]   .user-slice[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-slices[_ngcontent-%COMP%]   .user-slice[_ngcontent-%COMP%]   .slice-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 8px;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-slices[_ngcontent-%COMP%]   .user-slice[_ngcontent-%COMP%]   .slice-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 26px;\n    border-radius: 4px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-slices[_ngcontent-%COMP%]   .user-slice[_ngcontent-%COMP%]   .slice-info[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  width: 143px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-slices[_ngcontent-%COMP%]   .user-slice[_ngcontent-%COMP%]   .slice-info[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-slices[_ngcontent-%COMP%]   .user-slice[_ngcontent-%COMP%]   .slice-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@keyframes animation_show {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@media (min-width: 1024px) {\n  .last-title[_ngcontent-%COMP%] {\n    height: 73px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZlY3Rpb25lcnkuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRTtJQUNHLGlEQUFBO0lBQ0EsMEJBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0VBRkg7QUFDRjtBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUhGO0FBS0U7RUFDRSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQUhKO0FBTUU7RUFDRSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQUpKO0FBT0U7RUFDRSx3Q0FBQTtBQUxKO0FBUUU7RUF0QkY7SUF1QkksbUJBQUE7RUFMRjtBQUNGO0FBT0U7RUExQkY7SUEyQkksZ0JBQUE7RUFKRjtBQUNGO0FBTUU7RUE5QkY7SUErQkksbUJBQUE7SUFDQSxnQkFBQTtFQUhGO0FBQ0Y7QUFLRTtFQW5DRjtJQW9DSSxnQkFBQTtFQUZGO0FBQ0Y7QUFLSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQUhOO0FBS007RUFORjtJQU9JLFdBQUE7RUFGTjtBQUNGO0FBSU07RUFWRjtJQVdJLHdCQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0lBQ0EsNkJBQUE7RUFETjtBQUNGO0FBR007RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFEUjtBQUdRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFEVjtBQUlRO0VBVkY7SUFXSSxVQUFBO0VBRFI7QUFDRjtBQUdRO0VBZEY7SUFlSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EsOENBQUE7RUFBUjtFQUNRO0lBQ0UsaURBQUE7RUFDVjtBQUNGO0FBRVE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQVY7QUFJVTtFQURGO0lBRUksYUFBQTtFQURWO0FBQ0Y7QUFJUTtFQUNFLGNBQUE7QUFGVjtBQUtRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUhWO0FBS1U7RUFMRjtJQU1JLFdBQUE7SUFDQSxZQUFBO0VBRlY7QUFDRjtBQUlVO0VBQ0UsbUJBQUE7QUFGWjtBQUdZO0VBRkY7SUFHSSxhQUFBO0VBQVo7QUFDRjtBQVFJO0VBRkY7SUFHSSxtQkFBQTtFQUxKO0FBQ0Y7QUFPSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFMTjtBQU9NO0VBTkY7SUFPSSxtQkFBQTtJQUNBLGVBQUE7RUFKTjtFQU1NO0lBQ0Usa0JBQUE7RUFKUjtBQUNGO0FBT007RUFmRjtJQWdCSSxZQUFBO0VBSk47QUFDRjtBQU1NO0VBQ0UsU0FBQTtFQ2hHTixtRERpRzJEO0VDaEczRCwrSEFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFRDhGTSx5QkFBQTtFQUNBLGVBQUE7QUFBUjtBQUVRO0VBTkY7SUFPSSxlQUFBO0VBQ1I7QUFDRjtBQUNNO0VBQ0UsZUFBQTtBQUNSO0FBQVE7RUFGRjtJQUdJLFVBQUE7SUFDQSxvQkFBQTtFQUdSO0FBQ0Y7QUFGUTtFQy9HTiw4Q0RnSDZEO0VDL0c3RCxxSEFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFRDZHUSx5QkFBQTtFQUNBLGVBQUE7QUFRVjtBQU5RO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBUVY7QUFKSTtFQUNFLGtCQUFBO0FBTU47QUFKTTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUNuS04sOEhBQUE7QUQwS0Y7QUFKUTtFQ3RLTiwwSUFBQTtBRDZLRjtBQUdJO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FBRE47QUFHTTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQURSO0FBR1E7RUFKRjtJQUtJLGdCQUFBO0VBQVI7QUFDRjtBQUlZO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFGZDtBQUtZO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFIZDtBQU1ZO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFKZDtBQVVZO0VBQ0Usa0JBQUE7QUFSZDtBQVVZOztFQUVFLFlBQUE7RUFDQSxhQUFBO0FBUmQ7QUFVYztFQUxGOztJQU1JLFlBQUE7SUFDQSxhQUFBO0VBTmQ7QUFDRjtBQVNZO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFQZDtBQVFjO0VBSEY7SUFJSSxlQUFBO0lBQ0EsZUFBQTtFQUxkO0FBQ0Y7QUFRWTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU5kO0FBUWM7RUFSRjtJQVNJLGVBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFQUxkO0FBQ0Y7QUFTUTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7QUFQVjtBQVFVO0VBSEY7SUFJRyxpQkFBQTtFQUxUO0FBQ0Y7QUFRWTtFQUNFLHNCQUFBO0VBQ0EsNEJBQUE7QUFOZDtBQVVVO0VBQ0UsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFSWjtBQWFNO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBWFI7QUFhUTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7QUFYVjtBQVlVO0VBSEY7SUFJSSxpQkFBQTtFQVRWO0FBQ0Y7QUFZWTtFQUNFLHNCQUFBO0VBQ0EsNEJBQUE7QUFWZDtBQWNVO0VBQ0UsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFaWjtBQWNZO0VBUEY7SUFRSSxZQUFBO0lBQ0EsYUFBQTtFQVhaO0FBQ0Y7QUFhWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVhkO0FBY1k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBWmQ7QUFjYztFQVBGO0lBUUksVUFBQTtFQVhkO0FBQ0Y7QUFnQlU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQWRaO0FBZ0JZO0VBSkY7SUFLSSxlQUFBO0VBYlo7QUFDRjtBQWdCVTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBZFo7QUFlWTtFQUhGO0lBSUksZUFBQTtJQUNBLGVBQUE7RUFaWjtBQUNGO0FBaUJNO0VBQ0UsYUFBQTtBQWZSO0FBaUJRO0VBQ0UsZUFBQTtBQWZWO0FBZ0JVO0VBRkY7SUFHSSxlQUFBO0VBYlY7QUFDRjtBQWdCUTtFQUNFLGVBQUE7QUFkVjtBQWVVO0VBRkY7SUFHSSxlQUFBO0VBWlY7QUFDRjtBQWVRO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUFiVjtBQWVVO0VBTEY7SUFNSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQVpWO0FBQ0Y7QUFhVTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFYWjtBQWFZO0VBSkY7SUFLSSxXQUFBO0VBVlo7QUFDRjtBQVdZO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQ25ZWiwrSEFBQTtFRHlZWSxrQkFBQTtFQUNBLG1CQUFBO0FBYmQ7QUFlYztFQVpGO0lBYUksWUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQVpkO0FBQ0Y7QUFjYztFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVpoQjtBQWNnQjtFQVZGO0lBV0ksWUFBQTtJQUNBLFdBQUE7RUFYaEI7QUFDRjtBQWVZO0VBQ0UsZUFBQTtBQWJkO0FBZ0JZOztFQUVFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFkZDtBQW1CWTtFQURGO0lBRUksYUFBQTtJQUNBLDhCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQWhCWjtBQUNGO0FBaUJZO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQWZkO0FBa0JnQjtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWhCbEI7QUFrQmtCO0VBTkY7SUFPSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VBZmxCO0FBQ0Y7QUFtQmM7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFqQmhCO0FBbUJnQjtFQUpGO0lBS0ksYUFBQTtFQWhCaEI7QUFDRjtBQWtCZ0I7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBaEJsQjtBQTJCQTtFQUNFO0lBQ0UsVUFBQTtFQXhCRjtFQTBCQTtJQUNFLFVBQUE7RUF4QkY7QUFDRjtBQTZCRTtFQURGO0lBRUksdUJBQUE7RUExQkY7QUFDRiIsImZpbGUiOiJjb25mZWN0aW9uZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwvbWl4aW5zJztcblxuXG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAuY2FrZWJveC1jb250YWluZXItY29uZmVjdGlvbmVyeSB7XG4gICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KSB0cmFuc2xhdGVYKC01MCUpICFpbXBvcnRhbnQ7XG4gICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgICB3aWR0aDogY2FsYygxMDAlIC8gMC43KTtcbiAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLyAwLjcpO1xuICAgICB9XG4gICB9XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMCAxNzVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuXG4gIGg0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTEpO1xuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95LTQwMCc7XG4gIH1cblxuICBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgICBmb250LWZhbWlseTogJ0dpbHJveS01MDAnO1xuICB9XG5cbiAgLmFuaW1hdGlvbiB7XG4gICAgYW5pbWF0aW9uOiAxcyBhbmltYXRpb25fc2hvdyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxOTgwcHgpIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIHBhZGRpbmc6IDAgMTAwcHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nOiAwIDAgMCAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICBtYXJnaW4tdG9wOiA0NnB4O1xuICB9XG5cbiAgLmJhbm5lci13cmFwcGVyIHtcbiAgICAuZmxleCB7XG4gICAgICB3aWR0aDogODYwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luOiA0MHB4IGF1dG87XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjA0cHgpIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBtYXJnaW46IDMwcHggYXV0byAwIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHggMCAwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgIH1cblxuICAgICAgLmJhbm5lciB7XG4gICAgICAgIHdpZHRoOiA0MjBweDtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwNHB4KSB7XG4gICAgICAgICAgd2lkdGg6IDQ4JTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlzdC1jb2xvcik7XG4gICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saXN0LWNvbG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNtYWxsLWJhbm5lciB7XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuYmlnLWJhbm5lciB7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC53cmFwcGVyIHtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgIG1hcmdpbi10b3A6IDU0cHg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG5cbiAgICAgICAgJi5jYWtlLWNha2Vib3gtdGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIH1cblxuICAgICAgaDEge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KHZhcigtLWRlZy1ncmFkaWVudC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbmFtZS1sZWZ0LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1uYW1lLXJpZ2h0LTEpKTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNTAwJztcbiAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGl2IHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KHZhcigtLWRlZy1ncmFkaWVudC0zKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0zKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMykpO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95LTUwMCc7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICBoZWlnaHQ6IDEzcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRhaW5lci1mb3Itc2hhZG93IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgLnNoYWRvdy1ibG9jayB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDYycHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItYmcodmFyKC0tZGVnLWdyYWRpZW50LXNoYWRvdyksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtc2hhZG93KSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtc2hhZG93KSk7XG5cbiAgICAgICAgJi5rb2wtc2hhZG93IHtcbiAgICAgICAgICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItYmcoXG4gICAgICAgICAgICB2YXIoLS1kZWctZ3JhZGllbnQtc2hhZG93LWtvbCksXG4gICAgICAgICAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LXNoYWRvdy1rb2wpLFxuICAgICAgICAgICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtc2hhZG93LWtvbClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxpc3Qge1xuICAgICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgb3ZlcnNjcm9sbC1iZWhhdmlvci14OiBub25lO1xuICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG5cbiAgICAgIC5zbGljZXMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5iaWctc2xpY2VzIHtcbiAgICAgICAgICAuc2xpY2Uge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDIyNHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIyNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMjI0cHg7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLnNtYWxsLXNsaWNlcyB7XG4gICAgICAgICAgLnNsaWNlIHtcbiAgICAgICAgICAgIC5zbWFsbC1za2VsZXRvbi1zbGljZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyxcbiAgICAgICAgICAgIC5zbWFsbC1za2VsZXRvbi1zbGljZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNDhweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNDhweDtcblxuICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNDhweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnNsaWNlIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY2FrZWJveGVzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG5cbiAgICAgICAgLmNha2Vib3gge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIC5ib3gge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ib3gge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogNDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE0N3B4O1xuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDI2NnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDExMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNha2Vib3gtY29udGFpbmVyLWNvbmZlY3Rpb25lcnkge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICB6b29tOiAwLjc7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblxuICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgICAgICAgICAgICAgem9vbTogMC41NTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnVzZXJzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICBoNCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXIge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMzJweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDg4cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC51c2VyLWluZm8ge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMzZweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4OHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTM2cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMzZweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOTlweDtcbiAgICAgICAgICAgICAgQGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLWJnKFxuICAgICAgICAgICAgICAgIHZhcigtLWRlZy0tcHJvZmlsZS1pbWFnZSksXG4gICAgICAgICAgICAgICAgdmFyKC0tcHJvZmlsZS1pbWFnZS1iZy1jb2xvci1sZWZ0KSxcbiAgICAgICAgICAgICAgICB2YXIoLS1wcm9maWxlLWltYWdlLWJnLWNvbG9yLXJpZ2h0KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4OHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4OHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyNHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMjRweDtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5OXB4O1xuXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGg0LFxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVzZXItc2xpY2VzIHtcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIHRvcDogNzBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC51c2VyLXNsaWNlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICAgICAgICAgICAgLnNsaWNlLWltZyB7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG5cbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnNsaWNlLWluZm8ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0M3B4O1xuXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBhbmltYXRpb25fc2hvdyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuXG4ubGFzdC10aXRsZSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICBoZWlnaHQ6IDczcHggIWltcG9ydGFudDtcbiAgfVxufVxuIiwiQG1peGluIGJ0bi1ob3ZlcigkdGV4dENvbG9yLCAkYmcsICRib3JkZXJDb2xvcikge1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHRleHRDb2xvcjtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgfVxufVxuXG5AbWl4aW4gYnRuLWRpc2FibGVkKCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gICY6ZGlzYWJsZWQge1xuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG4gIH1cbn1cblxuQG1peGluIGJ0bi1kZWZhdWx0KCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gIGNvbG9yOiAkdGV4dENvbG9yO1xuICBiYWNrZ3JvdW5kOiAkYmc7XG4gIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZWFyLWJnKCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG59XG5cbkBtaXhpbiBib3JkZXItZ3JhZGllbnQtbGluZWFyKCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJvcmRlci1pbWFnZTogIGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItYm9yZGVyKFxuICAkZGVnLFxuICAkbGVmdENvbG9yLFxuICAkcmlnaHRDb2xvcixcbiAgJGJvcmRlcldpZHRoLFxuICAkYm9yZGVyUmFkaXVzXG4pIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XG4gICAgcGFkZGluZzogJGJvcmRlcldpZHRoO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG4gICAgLXdlYmtpdC1tYXNrOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiAwIDApIGNvbnRlbnQtYm94LFxuICAgICAgLyogWzFdICovIGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCk7IC8qIFsyXSAqL1xuICAgIC13ZWJraXQtbWFzay1jb21wb3NpdGU6IHhvcjsgLyogWzNdINC00LvRjyDQv9GW0LTRgtGA0LjQvNC60Lgg0LHRgNCw0YPQt9C10YDRltCyICovXG4gICAgbWFzay1jb21wb3NpdGU6IGV4Y2x1ZGU7IC8qIFszXSAqL1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItdGV4dCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGVmdENvbG9yO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItZXZlbnRzLWxpdmUoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxlZnRDb2xvcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZXItc3Bhbi10ZXh0KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKXtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIHZhcigtLWRlZy1ncmFkaWVudC0zKSxcbiAgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0zKSxcbiAgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMykpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5AbWl4aW4gZXJyb3ItbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95LTUwMCc7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dChcbiAgICB2YXIoLS1kZWctZ3JhZGllbnQtNCksXG4gICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC00KSxcbiAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC00KVxuICApO1xufVxuXG5AbWl4aW4gR2lscm95LTQwMC0xNi1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNDAwJztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AbWl4aW4gR2lscm95LTUwMC0zMC1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNTAwJztcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AbWl4aW4gR2lscm95LTYwMC0xNC1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNjAwJztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuIl19 */"] });


/***/ }),

/***/ 6072:
/*!*****************************************************************************!*\
  !*** ./apps/frontend/src/app/modules/confectionery/confectionery.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfectioneryModule": () => (/* binding */ ConfectioneryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _confectionery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confectionery-routing.module */ 1802);
/* harmony import */ var _confectionery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confectionery.component */ 5370);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9609);





class ConfectioneryModule {
}
ConfectioneryModule.ɵfac = function ConfectioneryModule_Factory(t) { return new (t || ConfectioneryModule)(); };
ConfectioneryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ConfectioneryModule });
ConfectioneryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _confectionery_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfectioneryRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ConfectioneryModule, { declarations: [_confectionery_component__WEBPACK_IMPORTED_MODULE_1__.ConfectioneryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _confectionery_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfectioneryRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=apps_frontend_src_app_modules_confectionery_confectionery_module_ts.js.map