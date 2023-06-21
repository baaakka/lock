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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _confectionery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confectionery.component */ 5370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ 554);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 5894);
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/modals.service */ 5414);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/theme.service */ 1266);
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/url.service */ 7664);
/* harmony import */ var _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/classes/watcher */ 34);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-skeleton-loader */ 8495);
/* harmony import */ var _shared_components_cakebox_cakebox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/cakebox/cakebox.component */ 3755);
/* harmony import */ var _core_pipes_cakebox_transform_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/pipes/cakebox-transform.pipe */ 7603);



















function ConfectioneryComponent_div_10_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const slice_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("src", slice_r17.image, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](slice_r17.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](slice_r17.name);
} }
function ConfectioneryComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ConfectioneryComponent_div_10_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22); const slice_r17 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.slices.length ? ctx_r21.modalsService.openRewardPopup(slice_r17.id) : ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ConfectioneryComponent_div_10_div_1_ng_container_1_Template, 6, 3, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r16.slices.length)("ngIfElse", _r6);
} }
function ConfectioneryComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ConfectioneryComponent_div_10_div_1_Template, 2, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.slices.length ? ctx_r0.slices.slice(0, ctx_r0.getCeilNumber(ctx_r0.slices.length * 0.4)) : ctx_r0.getMockArray(6));
} }
function ConfectioneryComponent_div_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const slice_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("src", slice_r23.image, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](slice_r23.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](slice_r23.name);
} }
function ConfectioneryComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ConfectioneryComponent_div_12_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r28); const slice_r23 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r27.modalsService.openRewardPopup(slice_r23.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ConfectioneryComponent_div_12_ng_container_1_Template, 6, 3, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.slices.length)("ngIfElse", _r8);
} }
function ConfectioneryComponent_div_23_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "cake-cakebox", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "cakeboxTransform");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cakebox_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("src", cakebox_r29.image, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("cakebox", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 4, cakebox_r29));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](cakebox_r29.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](cakebox_r29.name);
} }
function ConfectioneryComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ConfectioneryComponent_div_23_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34); const cakebox_r29 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r33.modalsService.openRewardPopup(cakebox_r29.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ConfectioneryComponent_div_23_ng_container_1_Template, 10, 6, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.cakeboxes.length)("ngIfElse", _r10);
} }
function ConfectioneryComponent_ng_container_34_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 43)(1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 45)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const slice_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("src", slice_r39.smallImage || slice_r39.image, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](slice_r39.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](slice_r39.name);
} }
function ConfectioneryComponent_ng_container_34_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ConfectioneryComponent_ng_container_34_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r41); const user_r36 = restoredCtx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r40.modalsService.openKolPopup(user_r36)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 39)(2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ConfectioneryComponent_ng_container_34_div_1_div_9_Template, 8, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const user_r36 = ctx.$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("src", user_r36.user.avatar || ctx_r35.getRandomAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", user_r36.user.firstName, " ", user_r36.user.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](user_r36.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](10, 5, user_r36.rewards, 0, 3));
} }
function ConfectioneryComponent_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ConfectioneryComponent_ng_container_34_div_1_Template, 11, 9, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r3.users);
} }
const _c0 = function (a0, a1, a2) { return { "background-color": a0, width: a1, height: a2, "border-radius": "2px" }; };
function ConfectioneryComponent_ng_template_49_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 43)(1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ngx-skeleton-loader", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](4, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](6, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](58);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](3, _c0, ctx_r44.activeTheme.properties["--skeleton-color"], ctx_r44.getOffsetWidth > 768 ? "48px" : "25px", ctx_r44.getOffsetWidth > 768 ? "48px" : "25px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r14);
} }
const _c1 = function (a0) { return { "background-color": a0, width: "100%", height: "100%", margin: 0 }; };
function ConfectioneryComponent_ng_template_49_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 47)(1, "div", 39)(2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ngx-skeleton-loader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](4, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](6, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, ConfectioneryComponent_ng_template_49_div_0_div_8_Template, 7, 7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](58);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](4, _c1, ctx_r42.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r42.getMockArray(3));
} }
function ConfectioneryComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ConfectioneryComponent_ng_template_49_div_0_Template, 9, 6, "div", 46);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r5.getMockArray(6));
} }
const _c2 = function (a0) { return { "background-color": a0, width: "224px", height: "224px", "border-radius": "12px" }; };
function ConfectioneryComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-skeleton-loader", 50)(1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](2, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](4, 49);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](58);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](3, _c2, ctx_r7.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r14);
} }
const _c3 = function (a0) { return { "background-color": a0, width: "100%", height: "100%", "border-radius": "12px", margin: 0 }; };
function ConfectioneryComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ngx-skeleton-loader", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](2, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](4, 49);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](58);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](3, _c3, ctx_r9.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r14);
} }
const _c4 = function (a0) { return { "background-color": a0, width: "100%", height: "100%", "border-radius": "12px" }; };
function ConfectioneryComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ngx-skeleton-loader", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](3, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](5, 49);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](58);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](3, _c4, ctx_r11.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r14);
} }
const _c5 = function (a0, a2) { return { "background-color": a0, width: "50px", height: a2, "border-radius": "2px", margin: 0 }; };
function ConfectioneryComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-skeleton-loader", 50);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](1, _c5, ctx_r13.activeTheme.properties["--skeleton-color"], ctx_r13.getOffsetWidth > 768 ? "20px" : "16px"));
} }
const _c6 = function (a0, a2) { return { "background-color": a0, width: "80px", height: a2, "border-radius": "2px", margin: 0 }; };
function ConfectioneryComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-skeleton-loader", 50);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](1, _c6, ctx_r15.activeTheme.properties["--skeleton-color"], ctx_r15.getOffsetWidth > 768 ? "30px" : "17px"));
} }
const _c7 = function (a0) { return { overflow: a0 }; };
var TypesLists;
(function (TypesLists) {
    TypesLists["Slices"] = "Slices";
    TypesLists["Cakeboxes"] = "Cakeboxes";
    TypesLists["Kol"] = "Kol";
})(TypesLists || (TypesLists = {}));
class ConfectioneryComponent extends _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_6__.Watcher {
    constructor(apiService, modalsService, authService, themeService, urlService) {
        super();
        this.apiService = apiService;
        this.modalsService = modalsService;
        this.authService = authService;
        this.themeService = themeService;
        this.urlService = urlService;
        this.typesLists = TypesLists;
        this.slices = [];
        this.cakeboxes = [];
        this.users = [];
        this.scrollSubject = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.slicePagination = {
            page: 1,
            pageSize: 14,
            count: 0,
            data: 0,
        };
        this.cakeboxPagination = {
            page: 1,
            pageSize: 5,
            count: 0,
            data: 0,
        };
        this.usersPagination = {
            page: 1,
            pageSize: 5,
            count: 0,
            data: 0,
        };
        this.hiddenSlice = true;
        this.hiddenCakeboxes = true;
        this.hiddenKol = true;
        this.urlService.setPageTitle('confectionary');
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
        this.scrollSubject.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(100), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe)).subscribe((res) => {
            if (res.type === TypesLists.Slices &&
                res.number > this.slicePagination.data &&
                Math.ceil(this.slicePagination.count / this.slicePagination.pageSize) > this.slicePagination.page) {
                this.slicePagination = { ...this.slicePagination, page: this.slicePagination.page + 1 };
                this.getSlices(res.number);
            }
            if (res.type === TypesLists.Cakeboxes &&
                res.number > this.cakeboxPagination.data &&
                Math.ceil(this.cakeboxPagination.count / this.cakeboxPagination.pageSize) > this.cakeboxPagination.page) {
                this.cakeboxPagination = { ...this.cakeboxPagination, page: this.cakeboxPagination.page + 1 };
                this.getCakeboxes(res.number);
            }
            if (res.type === TypesLists.Kol &&
                res.number > this.usersPagination.data &&
                Math.ceil(this.usersPagination.count / this.usersPagination.pageSize) > this.usersPagination.page) {
                this.usersPagination = { ...this.usersPagination, page: this.usersPagination.page + 1 };
                this.getUsers(res.number);
            }
        });
    }
    getMockArray(number) {
        return Array(number);
    }
    getSlices(number) {
        this.apiService
            .getRewards(this.getSliceQueryObj)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe))
            .subscribe((res) => {
            this.slices = this.slices.concat(res.data);
            this.slicePagination = { ...res, data: number };
        });
    }
    getCakeboxes(number) {
        this.apiService
            .getRewards(this.getCakeboxQueryObj)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe))
            .subscribe((res) => {
            this.cakeboxes = this.cakeboxes.concat(res.data);
            this.cakeboxPagination = { ...res, data: number };
        });
    }
    getUsers(number) {
        this.apiService
            .getUsers(this.getUsersQueryObj)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe))
            .subscribe((res) => {
            this.users = this.users.concat(res.data);
            this.usersPagination = { ...res, data: number };
        });
    }
    onScroll(event, type) {
        const scrollLeft = event.target.scrollWidth - (event.target.parentElement.offsetWidth || 0) - event.target.scrollLeft;
        if (scrollLeft < 500 && scrollLeft > 0) {
            this.scrollSubject.next({ number: event.target.scrollLeft, type: type });
        }
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
ConfectioneryComponent.ɵfac = function ConfectioneryComponent_Factory(t) { return new (t || ConfectioneryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_modals_service__WEBPACK_IMPORTED_MODULE_3__.ModalsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_4__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_5__.UrlService)); };
ConfectioneryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ConfectioneryComponent, selectors: [["cake-confectionery"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 61, vars: 23, consts: [[1, "content"], [1, "wrapper"], [1, "title"], [3, "click"], ["svgIcon", "arrow-left-blue"], [1, "list", 3, "scroll"], ["class", "slices big-slices pointer", 4, "ngIf"], [1, "slices", "small-slices"], ["class", "slice animation pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "cakeboxes"], ["class", "cakebox animation pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "users"], [4, "ngIf", "ngIfElse"], [1, "banner-wrapper"], [1, "flex"], [1, "banner"], ["src", "../../../assets/imgs/banner-how-does-work.png", "alt", "", 1, "big-banner"], ["src", "../../../assets/imgs/need-sugar.png", "alt", "", 1, "small-banner"], [1, "small-banner"], ["svgIcon", "arrow-left-blue", 1, "small-banner"], ["src", "../../../assets/imgs/banner-need-sugar.png", "alt", "", 1, "big-banner"], ["src", "../../../assets/imgs/how-does-work.png", "alt", "", 1, "small-banner"], ["skeletonKol", ""], ["skeletonBigSlice", ""], ["skeletonSmallSlice", ""], ["skeletonCakebox", ""], ["skeletonSmallText", ""], ["skeletonBigText", ""], [1, "slices", "big-slices", "pointer"], ["class", "slice animation", 3, "click", 4, "ngFor", "ngForOf"], [1, "slice", "animation", 3, "click"], ["alt", ""], [1, "slice", "animation", "pointer", 3, "click"], [1, "cakebox", "animation", "pointer", 3, "click"], [1, "box"], [1, "cakebox-container"], [3, "cakebox"], ["class", "user animation", 3, "click", 4, "ngFor", "ngForOf"], [1, "user", "animation", 3, "click"], [1, "user-info", "pointer"], [1, "avatar"], [1, "user-slices"], ["class", "user-slice pointer", 4, "ngFor", "ngForOf"], [1, "user-slice", "pointer"], [1, "slice-img"], [1, "slice-info"], ["class", "user animation", 4, "ngFor", "ngForOf"], [1, "user", "animation"], ["count", "1", "appearance", "circle", "animation", "progress-dark", 3, "theme"], [3, "ngTemplateOutlet"], ["count", "1", "appearance", "line", "animation", "progress-dark", 3, "theme"], [1, "small-skeleton-slice"]], template: function ConfectioneryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Fresh out of the oven!");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div")(6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ConfectioneryComponent_Template_a_click_6_listener() { return ctx.hiddenSlice = !ctx.hiddenSlice; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("scroll", function ConfectioneryComponent_Template_div_scroll_9_listener($event) { return ctx.onScroll($event, ctx.typesLists.Slices); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ConfectioneryComponent_div_10_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, ConfectioneryComponent_div_12_Template, 2, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 1)(14, "div", 2)(15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Featured this week");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div")(18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ConfectioneryComponent_Template_a_click_18_listener() { return ctx.hiddenCakeboxes = !ctx.hiddenCakeboxes; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("scroll", function ConfectioneryComponent_Template_div_scroll_21_listener($event) { return ctx.onScroll($event, ctx.typesLists.Cakeboxes); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, ConfectioneryComponent_div_23_Template, 2, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 1)(25, "div", 2)(26, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Promoted & hot items");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div")(29, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ConfectioneryComponent_Template_a_click_29_listener() { return ctx.hiddenKol = !ctx.hiddenKol; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](31, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("scroll", function ConfectioneryComponent_Template_div_scroll_32_listener($event) { return ctx.onScroll($event, ctx.typesLists.Kol); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, ConfectioneryComponent_ng_container_34_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 13)(36, "div", 14)(37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](38, "img", 16)(39, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "Need sugar? Get some here!");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](42, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](44, "img", 20)(45, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "How does this work? Watch tutorial video here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](48, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, ConfectioneryComponent_ng_template_49_Template, 1, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](51, ConfectioneryComponent_ng_template_51_Template, 5, 5, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](53, ConfectioneryComponent_ng_template_53_Template, 5, 5, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](55, ConfectioneryComponent_ng_template_55_Template, 6, 5, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](57, ConfectioneryComponent_ng_template_57_Template, 1, 4, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](59, ConfectioneryComponent_ng_template_59_Template, 1, 4, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", ctx.hiddenSlice ? "See all" : "Hide all", "(", ctx.slicePagination.count, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](17, _c7, ctx.hiddenSlice && ctx.getOffsetWidth > 768 ? "hidden" : "scroll"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.getOffsetWidth > 768);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.slices.length ? ctx.getOffsetWidth > 768 ? ctx.slices.slice(ctx.getCeilNumber(ctx.slices.length * 0.4)) : ctx.slices : ctx.getMockArray(9));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", ctx.hiddenCakeboxes ? "See all" : "Hide all", "(", ctx.cakeboxPagination.count, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](19, _c7, ctx.hiddenCakeboxes && ctx.getOffsetWidth > 768 ? "hidden" : "scroll"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.cakeboxes.length ? ctx.cakeboxes : ctx.getMockArray(4));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", ctx.hiddenKol ? "See all" : "Hide all", "(", ctx.usersPagination.count, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](21, _c7, ctx.hiddenKol && ctx.getOffsetWidth > 768 ? "hidden" : "scroll"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.users.length)("ngIfElse", _r4);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgTemplateOutlet, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_15__.NgxSkeletonLoaderComponent, _shared_components_cakebox_cakebox_component__WEBPACK_IMPORTED_MODULE_7__.CakeboxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.SlicePipe, _core_pipes_cakebox_transform_pipe__WEBPACK_IMPORTED_MODULE_8__.CakeboxTransformPipe], styles: [".content[_ngcontent-%COMP%] {\n  padding: 0 175px;\n  position: relative;\n  max-width: 1440px;\n  margin: auto;\n}\n.content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-fonts-1);\n  font-family: \"Gilroy-300\";\n}\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-fonts-2);\n  font-family: \"Gilroy-400\";\n}\n.content[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%] {\n  animation: 1s animation_show ease-in-out;\n}\n@media (min-width: 1980px) {\n  .content[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n}\n@media (max-width: 1024px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 0 100px;\n  }\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 0 0 0 16px;\n  }\n}\n.content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 55px auto;\n  justify-content: space-evenly;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n    display: block;\n    padding: 0 16px 0 0;\n  }\n}\n.content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n  width: 45%;\n  height: 122px;\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-top: 1px solid var(--border-list-color);\n  }\n  .content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]:last-of-type {\n    border-bottom: 1px solid var(--border-list-color);\n  }\n}\n.content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  width: inherit;\n  font-size: 14px;\n}\n@media (min-width: 769px) {\n  .content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .small-banner[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n.content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n}\n.content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   img.big-banner[_ngcontent-%COMP%] {\n  object-fit: contain;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .banner-wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   img.big-banner[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  background-color: var(--color-gradient-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n  font-family: \"Gilroy-400\";\n  font-size: 38px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    opacity: 0;\n    pointer-events: none;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: var(--color-gradient-left-3);\n  background-image: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n  font-family: \"Gilroy-400\";\n  font-size: 16px;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 13px;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  overflow: scroll;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%] {\n  display: flex;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.big-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 224px;\n  height: 224px;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.big-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.big-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.small-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   .small-skeleton-slice[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.small-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.small-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   .small-skeleton-slice[_ngcontent-%COMP%] {\n  width: 148px;\n  height: 148px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.small-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.small-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   .small-skeleton-slice[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.small-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.small-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.small-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices.small-slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  border-radius: 12px;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%] {\n  display: flex;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  position: relative;\n  width: 430px;\n  height: 147px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 266px;\n    height: 112px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 20px;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cakebox-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  zoom: 0.5;\n  transform: translateX(-50%);\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%] {\n  display: flex;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  display: flex;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n    position: relative;\n    width: 88px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  max-width: 136px;\n  margin-right: 20px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    width: 88px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  height: 136px;\n  width: 136px;\n  border-radius: 99px;\n  background: var(--avatar-bg-color);\n  position: relative;\n  margin-bottom: 10px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n    height: 88px;\n    width: 88px;\n    margin-bottom: 15px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 124px;\n  width: 124px;\n  object-fit: cover;\n  border-radius: 99px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 80px;\n    width: 80px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-slices[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    top: 70px;\n    width: 100%;\n    position: absolute;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-slices[_ngcontent-%COMP%]   .user-slice[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-slices[_ngcontent-%COMP%]   .user-slice[_ngcontent-%COMP%]   .slice-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 8px;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-slices[_ngcontent-%COMP%]   .user-slice[_ngcontent-%COMP%]   .slice-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 26px;\n    border-radius: 4px;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-slices[_ngcontent-%COMP%]   .user-slice[_ngcontent-%COMP%]   .slice-info[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  width: 143px;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-slices[_ngcontent-%COMP%]   .user-slice[_ngcontent-%COMP%]   .slice-info[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .users[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-slices[_ngcontent-%COMP%]   .user-slice[_ngcontent-%COMP%]   .slice-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@keyframes animation_show {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZlY3Rpb25lcnkuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBREY7QUFHRTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBREo7QUFJRTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBRko7QUFLRTtFQUNFLHdDQUFBO0FBSEo7QUFNRTtFQXRCRjtJQXVCSSxtQkFBQTtFQUhGO0FBQ0Y7QUFJRTtFQXpCRjtJQTBCSSxnQkFBQTtFQURGO0FBQ0Y7QUFHRTtFQTdCRjtJQThCSSxtQkFBQTtFQUFGO0FBQ0Y7QUFXSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBVE47QUFXTTtFQUxGO0lBTUksY0FBQTtJQUNBLG1CQUFBO0VBUk47QUFDRjtBQVVNO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBUlI7QUFVUTtFQUxGO0lBTUksV0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLDhDQUFBO0VBUFI7RUFRUTtJQUNFLGlEQUFBO0VBTlY7QUFDRjtBQVNRO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVBWO0FBV1U7RUFERjtJQUVJLGFBQUE7RUFSVjtBQUNGO0FBV1E7RUFDRSxjQUFBO0FBVFY7QUFZUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFWVjtBQVlVO0VBTEY7SUFNSSxXQUFBO0lBQ0EsWUFBQTtFQVRWO0FBQ0Y7QUFXVTtFQUNFLG1CQUFBO0FBVFo7QUFVWTtFQUZGO0lBR0ksYUFBQTtFQVBaO0FBQ0Y7QUFjSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBWk47QUFjTTtFQ3BESiw4Q0RxRDJEO0VDcEQzRCxxSEFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7RURnRE0seUJBQUE7RUFDQSxlQUFBO0FBTlI7QUFRUTtFQUxGO0lBTUksZUFBQTtFQUxSO0FBQ0Y7QUFPTTtFQUNFLGVBQUE7QUFMUjtBQU1RO0VBRkY7SUFHSSxVQUFBO0lBQ0Esb0JBQUE7RUFIUjtBQUNGO0FBSVE7RUNuRU4sOENEb0U2RDtFQ25FN0QscUhBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0VEK0RRLHlCQUFBO0VBQ0EsZUFBQTtBQUlWO0FBRlE7RUFDRSxZQUFBO0FBSVY7QUFDSTtFQUNFLGdCQUFBO0FBQ047QUFDTTtFQUNFLGFBQUE7QUFDUjtBQUdZO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFEZDtBQUlZO0VBQ0UsZUFBQTtBQUZkO0FBS1k7RUFDRSxlQUFBO0FBSGQ7QUFTWTtFQUNFLGtCQUFBO0FBUGQ7QUFTWTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBUGQ7QUFTYztFQUpGO0lBS0ksWUFBQTtJQUNBLGFBQUE7RUFOZDtBQUNGO0FBU1k7RUFDRSxlQUFBO0FBUGQ7QUFRYztFQUZGO0lBR0ksZUFBQTtFQUxkO0FBQ0Y7QUFRWTtFQUNFLGVBQUE7QUFOZDtBQU9jO0VBRkY7SUFHSSxlQUFBO0VBSmQ7QUFDRjtBQVFRO0VBQ0Usa0JBQUE7QUFOVjtBQVFVO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQU5aO0FBV007RUFDRSxhQUFBO0FBVFI7QUFXUTtFQUNFLGtCQUFBO0FBVFY7QUFXVTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFUWjtBQVdZO0VBTEY7SUFNSSxZQUFBO0lBQ0EsYUFBQTtFQVJaO0FBQ0Y7QUFVWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVJkO0FBV1k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBVGQ7QUFhVTtFQUNFLGVBQUE7QUFYWjtBQVlZO0VBRkY7SUFHSSxlQUFBO0VBVFo7QUFDRjtBQVlVO0VBQ0UsZUFBQTtBQVZaO0FBV1k7RUFGRjtJQUdJLGVBQUE7RUFSWjtBQUNGO0FBYU07RUFDRSxhQUFBO0FBWFI7QUFZUTtFQUNFLGVBQUE7QUFWVjtBQVdVO0VBRkY7SUFHSSxlQUFBO0VBUlY7QUFDRjtBQVdRO0VBQ0UsZUFBQTtBQVRWO0FBVVU7RUFGRjtJQUdJLGVBQUE7RUFQVjtBQUNGO0FBU1E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFQVjtBQVNVO0VBSkY7SUFLSSxrQkFBQTtJQUNBLFdBQUE7RUFOVjtBQUNGO0FBT1U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBTFo7QUFPWTtFQUpGO0lBS0ksV0FBQTtFQUpaO0FBQ0Y7QUFLWTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFIZDtBQUtjO0VBUkY7SUFTSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VBRmQ7QUFDRjtBQUljO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRmhCO0FBSWdCO0VBVkY7SUFXSSxZQUFBO0lBQ0EsV0FBQTtFQURoQjtBQUNGO0FBS1k7O0VBRUUsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhkO0FBUVk7RUFERjtJQUVJLGFBQUE7SUFDQSw4QkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUFMWjtBQUNGO0FBTVk7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBSmQ7QUFPZ0I7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFMbEI7QUFPa0I7RUFORjtJQU9JLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUFKbEI7QUFDRjtBQVFjO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBTmhCO0FBUWdCO0VBSkY7SUFLSSxhQUFBO0VBTGhCO0FBQ0Y7QUFPZ0I7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTGxCO0FBZ0JBO0VBQ0U7SUFDRSxVQUFBO0VBYkY7RUFlQTtJQUNFLFVBQUE7RUFiRjtBQUNGIiwiZmlsZSI6ImNvbmZlY3Rpb25lcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9taXhpbnMnO1xuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMTc1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gIG1hcmdpbjogYXV0bztcblxuICBoNCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0xKTtcbiAgICBmb250LWZhbWlseTogJ0dpbHJveS0zMDAnO1xuICB9XG5cbiAgaDIge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNDAwJztcbiAgfVxuXG4gIC5hbmltYXRpb24ge1xuICAgIGFuaW1hdGlvbjogMXMgYW5pbWF0aW9uX3Nob3cgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTk4MHB4KSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgcGFkZGluZzogMCAxMDBweDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6IDAgMCAwIDE2cHg7XG4gIH1cbiAgLy8gLnNoYWRvdy1ibG9jayB7XG4gIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vICAgICB0b3A6IDA7XG4gIC8vICAgICByaWdodDogMDtcbiAgLy8gICAgIHdpZHRoOiAyMzdweDtcbiAgLy8gICAgIGhlaWdodDogMTAwJTtcbiAgLy8gICAgIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1iZyh2YXIoLS1kZWctZ3JhZGllbnQtc2hhZG93KSx2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LXNoYWRvdyksdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtc2hhZG93KSlcbiAgLy8gfVxuXG4gIC5iYW5uZXItd3JhcHBlciB7XG4gICAgLmZsZXgge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbjogNTVweCBhdXRvO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMCAxNnB4IDAgMDtcbiAgICAgIH1cblxuICAgICAgLmJhbm5lciB7XG4gICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgIGhlaWdodDogMTIycHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpc3QtY29sb3IpO1xuICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlzdC1jb2xvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbWFsbC1iYW5uZXIge1xuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmJpZy1iYW5uZXIge1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAud3JhcHBlciB7XG4gICAgLnRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG5cbiAgICAgIGgxIHtcbiAgICAgICAgQGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLXRleHQodmFyKC0tZGVnLWdyYWRpZW50LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0xKSk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95LTQwMCc7XG4gICAgICAgIGZvbnQtc2l6ZTogMzhweDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRpdiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dCh2YXIoLS1kZWctZ3JhZGllbnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTMpKTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0dpbHJveS00MDAnO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgaGVpZ2h0OiAxM3B4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxpc3Qge1xuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcblxuICAgICAgLnNsaWNlcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgJi5iaWctc2xpY2VzIHtcbiAgICAgICAgICAuc2xpY2Uge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDIyNHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIyNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuc21hbGwtc2xpY2VzIHtcbiAgICAgICAgICAuc2xpY2Uge1xuICAgICAgICAgICAgLnNtYWxsLXNrZWxldG9uLXNsaWNlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nLCAuc21hbGwtc2tlbGV0b24tc2xpY2UgIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDE0OHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE0OHB4O1xuXG4gICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc2xpY2Uge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jYWtlYm94ZXMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIC5jYWtlYm94IHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cbiAgICAgICAgICAuYm94IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiA0MzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTQ3cHg7XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICB3aWR0aDogMjY2cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTEycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2FrZWJveC1jb250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICB6b29tOiAwLjU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoNCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC51c2VycyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGg0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXIge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogODhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnVzZXItaW5mbyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEzNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDg4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMzZweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEzNnB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5OXB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hdmF0YXItYmctY29sb3IpO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4OHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4OHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyNHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMjRweDtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5OXB4O1xuXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDQsXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudXNlci1zbGljZXMge1xuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgdG9wOiA3MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVzZXItc2xpY2Uge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgICAgICAgICAgICAuc2xpY2UtaW1nIHtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcblxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuc2xpY2UtaW5mbyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0M3B4O1xuXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBhbmltYXRpb25fc2hvdyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiIsIkBtaXhpbiBidG4taG92ZXIoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gICAgYmFja2dyb3VuZDogJGJnO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIH1cbn1cblxuQG1peGluIGJ0bi1kaXNhYmxlZCgkdGV4dENvbG9yLCAkYmcsICRib3JkZXJDb2xvcikge1xuICAmOmRpc2FibGVkIHtcbiAgICBjb2xvcjogJHRleHRDb2xvcjtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gICAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xuICB9XG59XG5cbkBtaXhpbiBidG4tZGVmYXVsdCgkdGV4dENvbG9yLCAkYmcsICRib3JkZXJDb2xvcikge1xuICBjb2xvcjogJHRleHRDb2xvcjtcbiAgYmFja2dyb3VuZDogJGJnO1xuICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gIGJvcmRlci1pbWFnZS1zbGljZTogMTtcbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci1iZygkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcikge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWdyYWRpZW50LWxpbmVhcigkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcikge1xuICBib3JkZXItaW1hZ2U6ICBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZWFyLWJvcmRlcihcbiAgJGRlZyxcbiAgJGxlZnRDb2xvcixcbiAgJHJpZ2h0Q29sb3IsXG4gICRib3JkZXJXaWR0aCxcbiAgJGJvcmRlclJhZGl1c1xuKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDA7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xuICAgIHBhZGRpbmc6ICRib3JkZXJXaWR0aDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xuICAgIC13ZWJraXQtbWFzazogbGluZWFyLWdyYWRpZW50KCNmZmYgMCAwKSBjb250ZW50LWJveCxcbiAgICAgIC8qIFsxXSAqLyBsaW5lYXItZ3JhZGllbnQoI2ZmZiAwIDApOyAvKiBbMl0gKi9cbiAgICAtd2Via2l0LW1hc2stY29tcG9zaXRlOiB4b3I7IC8qIFszXSDQtNC70Y8g0L/RltC00YLRgNC40LzQutC4INCx0YDQsNGD0LfQtdGA0ZbQsiAqL1xuICAgIG1hc2stY29tcG9zaXRlOiBleGNsdWRlOyAvKiBbM10gKi9cbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZWFyLXRleHQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxlZnRDb2xvcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5AbWl4aW4gZXJyb3ItbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBHaWxyb3ktNDAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgQGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLXRleHQoXG4gICAgdmFyKC0tZGVnLWdyYWRpZW50LTQpLFxuICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtNCksXG4gICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtNClcbiAgKTtcbn1cblxuQG1peGluIEdpbHJveS0zMDAtMTYtZm9udHMtMiB7XG4gIGZvbnQtZmFtaWx5OiBHaWxyb3ktMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbn1cblxuQG1peGluIEdpbHJveS00MDAtMzAtZm9udHMtMiB7XG4gIGZvbnQtZmFtaWx5OiBHaWxyb3ktNDAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbn1cblxuQG1peGluIEdpbHJveS01MDAtMTQtZm9udHMtMiB7XG4gIGZvbnQtZmFtaWx5OiBHaWxyb3ktNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbn1cbiJdfQ== */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _confectionery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confectionery-routing.module */ 1802);
/* harmony import */ var _confectionery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confectionery.component */ 5370);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class ConfectioneryModule {
}
ConfectioneryModule.ɵfac = function ConfectioneryModule_Factory(t) { return new (t || ConfectioneryModule)(); };
ConfectioneryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ConfectioneryModule });
ConfectioneryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _confectionery_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfectioneryRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ConfectioneryModule, { declarations: [_confectionery_component__WEBPACK_IMPORTED_MODULE_1__.ConfectioneryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _confectionery_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfectioneryRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=apps_frontend_src_app_modules_confectionery_confectionery_module_ts.js.map