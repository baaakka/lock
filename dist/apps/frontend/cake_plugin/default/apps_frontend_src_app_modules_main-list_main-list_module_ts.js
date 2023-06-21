"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["apps_frontend_src_app_modules_main-list_main-list_module_ts"],{

/***/ 2952:
/*!*****************************************************************!*\
  !*** ./apps/frontend/src/app/core/constants/sorting-options.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kolSortOptions": () => (/* binding */ kolSortOptions),
/* harmony export */   "rewardsSortOptions": () => (/* binding */ rewardsSortOptions)
/* harmony export */ });
/* harmony import */ var _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cake/lib-api-interface */ 171);

const kolSortOptions = [
    {
        value: _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.SortUserEum.Reward,
        label: 'Rewards'
    },
    {
        value: _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.SortUserEum.Cakebox,
        label: 'Cakeboxes'
    },
    {
        value: _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.SortUserEum.FollowedByIDs,
        label: 'Followers'
    },
    {
        value: _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.SortUserEum.Rank,
        label: 'Rank'
    },
    {
        value: _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.SortUserEum.CreatedAt,
        label: 'Time in Cak3'
    },
    {
        value: _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.SortUserEum.Role,
        label: 'Role'
    },
];
const rewardsSortOptions = [
    {
        value: _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.SortRewardEum.Cost,
        label: 'Latest price'
    },
    // {
    //     value: 'hype',
    //     label: 'Hype'
    // },
    // {
    //     value: 'quality',
    //     label: 'Quality'
    // },
    // {
    //     value: 'engagement',
    //     label: 'Engagement'
    // },
    {
        value: _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.SortRewardEum.Rarity,
        label: 'Rarity'
    },
    {
        value: _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.SortRewardEum.Category,
        label: 'Category'
    },
];


/***/ }),

/***/ 1143:
/*!*********************************************************************!*\
  !*** ./apps/frontend/src/app/core/constants/tabs-from-list.enum.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsFromListEnum": () => (/* binding */ TabsFromListEnum)
/* harmony export */ });
var TabsFromListEnum;
(function (TabsFromListEnum) {
    TabsFromListEnum["Kol"] = "kol";
    TabsFromListEnum["Brands"] = "brands";
    TabsFromListEnum["Events"] = "events";
    TabsFromListEnum["Projects"] = "projects";
    TabsFromListEnum["Users"] = "users";
    TabsFromListEnum["Slices"] = "slices";
    TabsFromListEnum["Cak3boxes"] = "cak3boxes";
    TabsFromListEnum["Trends"] = "trends";
})(TabsFromListEnum || (TabsFromListEnum = {}));


/***/ }),

/***/ 7030:
/*!*****************************************************************************!*\
  !*** ./apps/frontend/src/app/modules/main-list/main-list-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainListRoutingModule": () => (/* binding */ MainListRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _main_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-list.component */ 2725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _main_list_component__WEBPACK_IMPORTED_MODULE_0__.MainListComponent,
    }
];
class MainListRoutingModule {
}
MainListRoutingModule.ɵfac = function MainListRoutingModule_Factory(t) { return new (t || MainListRoutingModule)(); };
MainListRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MainListRoutingModule });
MainListRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MainListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2725:
/*!************************************************************************!*\
  !*** ./apps/frontend/src/app/modules/main-list/main-list.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainListComponent": () => (/* binding */ MainListComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cake/lib-api-interface */ 171);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var _core_constants_main_list_components_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/constants/main-list-components.enum */ 7091);
/* harmony import */ var _core_constants_sorting_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/constants/sorting-options */ 2952);
/* harmony import */ var _core_constants_tabs_from_list_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/constants/tabs-from-list.enum */ 1143);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ 554);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ 5894);
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/modals.service */ 5414);
/* harmony import */ var _services_reward_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/reward.service */ 4052);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/search.service */ 6490);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/theme.service */ 1266);
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/url.service */ 7664);
/* harmony import */ var _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/classes/watcher */ 34);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-skeleton-loader */ 8495);
/* harmony import */ var _shared_components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/drop-down/drop-down.component */ 4662);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/components/input/input.component */ 9852);
/* harmony import */ var _shared_components_download_plugin_download_plugin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/components/download-plugin/download-plugin.component */ 7507);
/* harmony import */ var _shared_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/directives/tooltip.directive */ 2009);
/* harmony import */ var _shared_directives_rewards_options_directive_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/directives/rewards-options-directive.directive */ 2114);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/components/pagination/pagination.component */ 2774);
/* harmony import */ var _shared_components_cakebox_cakebox_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/components/cakebox/cakebox.component */ 3755);
/* harmony import */ var _core_pipes_followers_count_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../core/pipes/followers-count.pipe */ 4376);


































function MainListComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "img", 40);
} }
function MainListComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "img", 41);
} }
function MainListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 42)(1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "Slices");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4, "Cak3boxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](6, "Trends");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} }
function MainListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 42)(1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "Key opinion leader");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} }
function MainListComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, " Rarity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} }
function MainListComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} }
function MainListComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, " Latest price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("cakeTooltip", "The latest cost of slices/cakeboxes");
} }
function MainListComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, " Rewards ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("cakeTooltip", "Are cosmetics, slices, sugar that user can get for doing a given task.");
} }
function MainListComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, " Cakeboxes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("cakeTooltip", "Are boxes, that can contain cosmetics, slices or sugar.");
} }
function MainListComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, " Followers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("cakeTooltip", "Quantity of users that following KOL/Brand/Project.");
} }
function MainListComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, " Platforms ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("cakeTooltip", "Quantity of media platforms connected to cak3 plugin.");
} }
function MainListComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", ctx_r11.page === ctx_r11.mainListComponentsEnum.Grab ? "follow" : "confectionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", ctx_r11.page === ctx_r11.mainListComponentsEnum.Grab ? "Follow" : "Confectionary", " ");
} }
function MainListComponent_ng_container_33_ng_container_1_div_1_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "img");
} if (rf & 2) {
    const reward_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("src", reward_r35.smallImage || reward_r35.image, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
} }
function MainListComponent_ng_container_33_ng_container_1_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "cake-cakebox", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cakebox_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("isSmall", true)("cakebox", cakebox_r37);
} }
function MainListComponent_ng_container_33_ng_container_1_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "followersCount");
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 1, item_r29.followers), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeHtml"]);
} }
function MainListComponent_ng_container_33_ng_container_1_div_1_div_18_div_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "img", 74);
} }
function MainListComponent_ng_container_33_ng_container_1_div_1_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, MainListComponent_ng_container_33_ng_container_1_div_1_div_18_div_1_img_1_Template, 1, 0, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const platform_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", platform_r41.isPopular);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpropertyInterpolate1"]("src", "../../../assets/platforms/", platform_r41.platform, "-small.svg", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
} }
function MainListComponent_ng_container_33_ng_container_1_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, MainListComponent_ng_container_33_ng_container_1_div_1_div_18_div_1_Template, 3, 2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind3"](2, 3, item_r29.platforms, 0, 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"](" ", item_r29.platforms.length > 5 ? "+" : "", "", item_r29.platforms.length > 5 ? item_r29.platforms.length - 5 : "", " ");
} }
function MainListComponent_ng_container_33_ng_container_1_div_1_div_19_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function MainListComponent_ng_container_33_ng_container_1_div_1_div_19_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r49); const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r47.follow(item_r29.user.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, " Follow ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("disabled", ctx_r45.userId === item_r29.user.id);
} }
function MainListComponent_ng_container_33_ng_container_1_div_1_div_19_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function MainListComponent_ng_container_33_ng_container_1_div_1_div_19_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r53); const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r51.unfollow(item_r29.user.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "Following");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4, "Unfollow");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](5, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("disabled", ctx_r46.userId === item_r29.user.id);
} }
function MainListComponent_ng_container_33_ng_container_1_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, MainListComponent_ng_container_33_ng_container_1_div_1_div_19_button_1_Template, 2, 1, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, MainListComponent_ng_container_33_ng_container_1_div_1_div_19_button_2_Template, 6, 1, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !item_r29.user.isFollow);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r29.user.isFollow);
} }
const _c0 = function (a0) { return [a0]; };
function MainListComponent_ng_container_33_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 58)(1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function MainListComponent_ng_container_33_ng_container_1_div_1_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r57); const item_r29 = restoredCtx.$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r56.modalsService.openKolPopup(item_r29)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "img");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div", 52)(7, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](8, MainListComponent_ng_container_33_ng_container_1_div_1_img_8_Template, 1, 1, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](10, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](12, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](13, MainListComponent_ng_container_33_ng_container_1_div_1_div_13_Template, 2, 2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](14, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](15, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](17, MainListComponent_ng_container_33_ng_container_1_div_1_div_17_Template, 2, 3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](18, MainListComponent_ng_container_33_ng_container_1_div_1_div_18_Template, 5, 7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](19, MainListComponent_ng_container_33_ng_container_1_div_1_div_19_Template, 3, 2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("src", item_r29.user.avatar || ctx_r28.profileImg, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"])("alt", item_r29.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", item_r29.user.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind3"](9, 12, item_r29.rewards, 0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("", item_r29.rewards.length > 3 ? "+" : "", "", item_r29.rewards.length > 3 ? item_r29.rewards.length - 3 : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind3"](14, 16, item_r29.cakeboxes, 0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"](" ", item_r29.cakeboxes.length > 3 ? "+" : "", "", item_r29.cakeboxes.length > 3 ? item_r29.cakeboxes.length - 3 : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r28.notAllowedTabs(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](20, _c0, ctx_r28.tabsFromListEnum.Users)));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r28.notAllowedTabs(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](22, _c0, ctx_r28.tabsFromListEnum.Users)));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r28.notAllowedTabs(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](24, _c0, ctx_r28.tabsFromListEnum.Users)));
} }
function MainListComponent_ng_container_33_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, MainListComponent_ng_container_33_ng_container_1_div_1_Template, 20, 26, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r27.kolList);
} }
function MainListComponent_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, MainListComponent_ng_container_33_ng_container_1_Template, 2, 1, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r12.waitingLoading)("ngIfElse", _r15);
} }
function MainListComponent_ng_container_34_ng_container_1_div_1_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function MainListComponent_ng_container_34_ng_container_1_div_1_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r65); const item_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r63.modalsService.openRewardPopup(item_r60.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, "View in confectionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} }
function MainListComponent_ng_container_34_ng_container_1_div_1_button_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, "Not in confectionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} }
function MainListComponent_ng_container_34_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 58)(1, "div", 18)(2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "img");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](12, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](13, "followersCount");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](14, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](15, MainListComponent_ng_container_34_ng_container_1_div_1_button_15_Template, 2, 0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](16, MainListComponent_ng_container_34_ng_container_1_div_1_button_16_Template, 2, 0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("src", item_r60.image, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"])("alt", item_r60.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", item_r60.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](8, 8, item_r60.rarity), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](11, 10, item_r60.category), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](13, 12, item_r60.cost), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r60.isConfectionary);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !item_r60.isConfectionary);
} }
function MainListComponent_ng_container_34_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, MainListComponent_ng_container_34_ng_container_1_div_1_Template, 17, 14, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r58.rewardList);
} }
function MainListComponent_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, MainListComponent_ng_container_34_ng_container_1_Template, 2, 1, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r13.waitingLoading)("ngIfElse", _r17);
} }
function MainListComponent_ng_container_50_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 91)(1, "div", 92)(2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "div", 95)(5, "div", 96)(6, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](8, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](10, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](11, "svg", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](12, "path", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](13, "defs")(14, "linearGradient", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](15, "stop", 103)(16, "stop", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const reward_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("src", reward_r69.image, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"])("alt", reward_r69.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](reward_r69.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](reward_r69.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("cakeRewardsOptions", reward_r69);
} }
function MainListComponent_ng_container_50_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, MainListComponent_ng_container_50_ng_container_1_div_2_Template, 17, 5, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r66.rewardList);
} }
function MainListComponent_ng_container_50_ng_container_2_div_2_div_7_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function MainListComponent_ng_container_50_ng_container_2_div_2_div_7_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r77); const kol_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r75.follow(kol_r71.user.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, " Follow ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const kol_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("disabled", ctx_r73.userId === kol_r71.user.id);
} }
function MainListComponent_ng_container_50_ng_container_2_div_2_div_7_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function MainListComponent_ng_container_50_ng_container_2_div_2_div_7_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r81); const kol_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r79.unfollow(kol_r71.user.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "Following");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4, "Unfollow");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](5, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const kol_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("disabled", ctx_r74.userId === kol_r71.user.id);
} }
function MainListComponent_ng_container_50_ng_container_2_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, MainListComponent_ng_container_50_ng_container_2_div_2_div_7_button_1_Template, 2, 1, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, MainListComponent_ng_container_50_ng_container_2_div_2_div_7_button_2_Template, 6, 1, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const kol_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !kol_r71.user.isFollow);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", kol_r71.user.isFollow);
} }
function MainListComponent_ng_container_50_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 107)(1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function MainListComponent_ng_container_50_ng_container_2_div_2_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r85); const kol_r71 = restoredCtx.$implicit; const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r84.modalsService.openKolPopup(kol_r71)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "div", 110)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](7, MainListComponent_ng_container_50_ng_container_2_div_2_div_7_Template, 3, 2, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const kol_r71 = ctx.$implicit;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("src", kol_r71.user.avatar || ctx_r70.profileImg, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"])("alt", kol_r71.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](kol_r71.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r70.notAllowedTabs(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](4, _c0, ctx_r70.tabsFromListEnum.Users)));
} }
function MainListComponent_ng_container_50_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, MainListComponent_ng_container_50_ng_container_2_div_2_Template, 8, 6, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r67.kolList);
} }
function MainListComponent_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, MainListComponent_ng_container_50_ng_container_1_Template, 3, 1, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, MainListComponent_ng_container_50_ng_container_2_Template, 3, 1, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r14.page === ctx_r14.mainListComponentsEnum.Rewards);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r14.page === ctx_r14.mainListComponentsEnum.Grab);
} }
function MainListComponent_ng_template_52_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainer"](0);
} }
function MainListComponent_ng_template_52_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainer"](0);
} }
function MainListComponent_ng_template_52_div_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainer"](0);
} }
const _c1 = function (a0) { return { "background-color": a0, height: "38px", width: "38px", "margin-left": "-15px" }; };
const _c2 = function (a0) { return { "background-color": a0, height: "38px", width: "38px", "margin-left": "-15px", "border-radius": "2px", transform: "rotate(45deg)" }; };
const _c3 = function (a0) { return { "background-color": a0, height: "40px", width: "40px", "border-radius": "2px", "margin-left": "8px" }; };
function MainListComponent_ng_template_52_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 114)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, MainListComponent_ng_template_52_div_0_ng_container_2_Template, 1, 0, "ng-container", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](4, "ngx-skeleton-loader", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](6, "ngx-skeleton-loader", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](7, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](8, MainListComponent_ng_template_52_div_0_ng_container_8_Template, 1, 0, "ng-container", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](10, "ngx-skeleton-loader", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](11, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](12, MainListComponent_ng_template_52_div_0_ng_container_12_Template, 1, 0, "ng-container", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](57);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](59);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngTemplateOutlet", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](6, _c1, ctx_r86.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](8, _c2, ctx_r86.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngTemplateOutlet", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](10, _c3, ctx_r86.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngTemplateOutlet", _r23);
} }
function MainListComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, MainListComponent_ng_template_52_div_0_Template, 13, 12, "div", 113);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r16.getMockArray(3));
} }
function MainListComponent_ng_template_54_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainer"](0);
} }
function MainListComponent_ng_template_54_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainer"](0);
} }
function MainListComponent_ng_template_54_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainer"](0);
} }
function MainListComponent_ng_template_54_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainer"](0);
} }
function MainListComponent_ng_template_54_div_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainer"](0);
} }
function MainListComponent_ng_template_54_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 114)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, MainListComponent_ng_template_54_div_0_ng_container_2_Template, 1, 0, "ng-container", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, MainListComponent_ng_template_54_div_0_ng_container_4_Template, 1, 0, "ng-container", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](6, MainListComponent_ng_template_54_div_0_ng_container_6_Template, 1, 0, "ng-container", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](7, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](8, MainListComponent_ng_template_54_div_0_ng_container_8_Template, 1, 0, "ng-container", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](10, MainListComponent_ng_template_54_div_0_ng_container_10_Template, 1, 0, "ng-container", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](57);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](59);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngTemplateOutlet", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngTemplateOutlet", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngTemplateOutlet", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngTemplateOutlet", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngTemplateOutlet", _r23);
} }
function MainListComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, MainListComponent_ng_template_54_div_0_Template, 11, 5, "div", 113);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r18.getMockArray(3));
} }
const _c4 = function (a0) { return { "background-color": a0, height: "64px", width: "64px" }; };
const _c5 = function (a0) { return { "background-color": a0, height: "17px", width: "100px", "border-radius": "2px", margin: "0 0 0 20px" }; };
function MainListComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "ngx-skeleton-loader", 120)(1, "ngx-skeleton-loader", 121);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](2, _c4, ctx_r20.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](4, _c5, ctx_r20.activeTheme.properties["--skeleton-color"]));
} }
const _c6 = function (a0) { return { "background-color": a0, height: "22px", width: "50px", "border-radius": "2px" }; };
function MainListComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "ngx-skeleton-loader", 121);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, ctx_r22.activeTheme.properties["--skeleton-color"]));
} }
const _c7 = function (a0) { return { "background-color": a0, height: "40px", width: "120px", "border-radius": "16px", "margin-left": "8px" }; };
function MainListComponent_ng_template_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "ngx-skeleton-loader", 121);
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c7, ctx_r24.activeTheme.properties["--skeleton-color"]));
} }
const _c8 = function (a0) { return { "background-color": a0, height: "32px", width: "32px" }; };
const _c9 = function (a0) { return { "background-color": a0, height: "14px", width: "90px", "margin": 0, "margin-top": "12px" }; };
const _c10 = function (a0) { return { "background-color": a0, height: "40px", width: "100px", "border-radius": "16px" }; };
function MainListComponent_ng_template_62_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 107)(1, "div", 123)(2, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "ngx-skeleton-loader", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](5, "ngx-skeleton-loader", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](7, "ngx-skeleton-loader", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c8, ctx_r98.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](5, _c9, ctx_r98.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](7, _c10, ctx_r98.activeTheme.properties["--skeleton-color"]));
} }
function MainListComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, MainListComponent_ng_template_62_div_1_Template, 8, 9, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r26.getMockArray(5));
} }
class MainListComponent extends _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_11__.Watcher {
    constructor(route, router, apiService, urlService, searchService, authService, modalsService, themeService, rewardService) {
        super();
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.urlService = urlService;
        this.searchService = searchService;
        this.authService = authService;
        this.modalsService = modalsService;
        this.themeService = themeService;
        this.rewardService = rewardService;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormControl('');
        this.activeTab = _core_constants_tabs_from_list_enum__WEBPACK_IMPORTED_MODULE_3__.TabsFromListEnum.Kol;
        this.tabsFromListEnum = _core_constants_tabs_from_list_enum__WEBPACK_IMPORTED_MODULE_3__.TabsFromListEnum;
        this.mainListComponentsEnum = _core_constants_main_list_components_enum__WEBPACK_IMPORTED_MODULE_1__.MainListComponentsEnum;
        this.waitingLoading = true;
        this.where = '';
        this.sortValue = '';
        this.currentPage = 1;
        this.pageSize = window.innerWidth <= 768 ? 10 : 5;
        this.rewardList = [];
        this.kolList = [];
        this.kolSortOptions = _core_constants_sorting_options__WEBPACK_IMPORTED_MODULE_2__.kolSortOptions;
        this.rewardsSortOptions = _core_constants_sorting_options__WEBPACK_IMPORTED_MODULE_2__.rewardsSortOptions;
        this.resize$ = new rxjs__WEBPACK_IMPORTED_MODULE_22__.BehaviorSubject(window.innerWidth);
        this.searchService.setFormControl(this.searchControl);
    }
    get sortOptions() {
        return this.page === this.mainListComponentsEnum.Rewards ? this.rewardsSortOptions : this.kolSortOptions;
    }
    get getQueryObj() {
        return {
            page: this.currentPage,
            pageSize: this.pageSize,
            sort: this.sortValue,
            search: this.searchControl.value || '',
            owner: this.smallScreen,
            ...(!this.smallScreen ? { where: this.where } : {})
        };
    }
    get userId() {
        return this.authService.getDecodedToken()?.data.id || '';
    }
    get profileImg() {
        return this.authService.randomAvatar;
    }
    get activeTheme() {
        return this.themeService.active;
    }
    onResize() {
        this.resize$.next(window.innerWidth);
    }
    ngOnInit() {
        this.activeTab = this.route.snapshot.paramMap.get('id');
        this.where = this.activeTab;
        this.resize$.next(window.innerWidth);
        this.checkDataFromRouter();
        this.triggerTabs();
        this.resizeChecker();
        this.searching();
        this.toConfectionaryChecker();
    }
    toConfectionaryChecker() {
        this.rewardService.toConfectionaryTrigger.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this.unsubscribe)).subscribe(() => {
            this.getData();
        });
    }
    ;
    resizeChecker() {
        this.resize$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_24__.debounceTime)(250)).subscribe(width => {
            this.smallScreen = width <= 768;
            this.getData();
        });
    }
    getMockArray(number) {
        return Array(number);
    }
    getNameBasedOnTab() {
        switch (this.activeTab) {
            case _core_constants_tabs_from_list_enum__WEBPACK_IMPORTED_MODULE_3__.TabsFromListEnum.Kol:
                return 'User name';
            case _core_constants_tabs_from_list_enum__WEBPACK_IMPORTED_MODULE_3__.TabsFromListEnum.Users:
                return 'User name';
            case _core_constants_tabs_from_list_enum__WEBPACK_IMPORTED_MODULE_3__.TabsFromListEnum.Slices:
                return 'Slice name';
            case _core_constants_tabs_from_list_enum__WEBPACK_IMPORTED_MODULE_3__.TabsFromListEnum.Cak3boxes:
                return 'Cak3boxes name';
            case _core_constants_tabs_from_list_enum__WEBPACK_IMPORTED_MODULE_3__.TabsFromListEnum.Trends:
                return 'Item name';
        }
        return 'Name';
    }
    searching() {
        this.searchControl.valueChanges
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this.unsubscribe), (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.debounceTime)(500))
            .subscribe(() => {
            this.getData();
        });
    }
    checkDataFromRouter() {
        this.route.data
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this.unsubscribe))
            .subscribe((resolved) => {
            this.page = resolved['page'];
            this.urlService.setPageTitle(resolved['page']);
            this.getData();
        });
    }
    setPagination(res) {
        this.totalCount = res.count;
        this.currentPage = res.page;
        this.pageSize = res.pageSize;
        this.waitingLoading = false;
    }
    getData() {
        this.waitingLoading = true;
        if (this.page === _core_constants_main_list_components_enum__WEBPACK_IMPORTED_MODULE_1__.MainListComponentsEnum.Grab) {
            this.sortValue = this.sortValue || _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.SortUserEum.CreatedAt;
            this.apiService
                .getUsers(this.getQueryObj)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this.unsubscribe))
                .subscribe((res) => {
                this.kolList = res.data;
                this.setPagination(res);
            });
        }
        else {
            this.sortValue = this.sortValue || _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.SortRewardEum.Cost;
            this.apiService
                .getRewards(this.getQueryObj)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this.unsubscribe))
                .subscribe((res) => {
                this.rewardList = res.data;
                this.setPagination(res);
            });
        }
    }
    triggerTabs() {
        this.router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_25__.NavigationEnd) {
                this.activeTab = val.url.split('/')[val.url.split('/').length - 1];
                if (!Object.values(_core_constants_main_list_components_enum__WEBPACK_IMPORTED_MODULE_1__.MainListComponentsEnum).includes(this.activeTab)) {
                    this.where = this.activeTab;
                }
                this.checkDataFromRouter();
            }
        });
    }
    sort(option) {
        this.sortValue = option.value;
        this.getData();
    }
    notAllowedTabs(tabs) {
        return !tabs.includes(this.activeTab);
    }
    follow(id) {
        this.apiService.follow(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this.unsubscribe)).subscribe(res => {
            this.kolList = this.kolList.map(kol => kol.user.id === id ? { ...kol, ...{ user: { ...kol.user, isFollow: true }, followers: kol.followers + 1 } } : kol);
        });
    }
    unfollow(id) {
        this.apiService.unfollow(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this.unsubscribe)).subscribe(res => {
            this.kolList = this.kolList.map(kol => kol.user.id === id ? { ...kol, ...{ user: { ...kol.user, isFollow: false }, followers: kol.followers - 1 } } : kol);
        });
    }
    ngOnDestroy() {
        //  this.urlService.unsubscribeObsv()
        super.ngOnDestroy();
    }
}
MainListComponent.ɵfac = function MainListComponent_Factory(t) { return new (t || MainListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_10__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_8__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_modals_service__WEBPACK_IMPORTED_MODULE_6__.ModalsService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_9__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_reward_service__WEBPACK_IMPORTED_MODULE_7__.RewardService)); };
MainListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({ type: MainListComponent, selectors: [["cake-main-list"]], hostBindings: function MainListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("resize", function MainListComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵInheritDefinitionFeature"]], decls: 64, vars: 36, consts: [[1, "content"], [1, "desktop-container"], [1, "title"], ["src", "../../../assets/imgs/victory-hand-skin.png", "alt", "", 4, "ngIf"], ["src", "../../../assets/imgs/growing-heart.png", "alt", "", 4, "ngIf"], [1, "header-of-table"], ["class", "tabs", 4, "ngIf"], [1, "last-content"], [1, "sort-block"], [1, "sort"], ["placeholder", "Select", 3, "options", "chooseOption"], [1, "search-block"], ["id", "search-input", "placeholder", "Search", 3, "control"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.3636 3C8.90722 3 7.48354 3.43187 6.2726 4.24099C5.06167 5.05011 4.11786 6.20015 3.56052 7.54567C3.00319 8.89119 2.85737 10.3718 3.14149 11.8002C3.42562 13.2286 4.12693 14.5406 5.15675 15.5704C6.18657 16.6003 7.49863 17.3016 8.92703 17.5857C10.3554 17.8698 11.836 17.724 13.1815 17.1667C14.527 16.6093 15.6771 15.6655 16.4862 14.4546C17.2953 13.2437 17.7272 11.82 17.7272 10.3636C17.7271 8.41069 16.9512 6.5378 15.5703 5.15688C14.1894 3.77597 12.3165 3.00012 10.3636 3V3Z", "stroke", "black", "stroke-miterlimit", "10"], ["d", "M15.8574 15.8573L21.0001 21", "stroke", "black", "stroke-miterlimit", "10", "stroke-linecap", "round"], [1, "list-block"], [1, "row", "header"], [1, "col", "user"], ["class", "col rarity", 4, "ngIf"], ["class", "col category", 4, "ngIf"], ["class", "col latest-price", 4, "ngIf"], ["class", "col rewards", 4, "ngIf"], ["class", "col cakeboxes", 4, "ngIf"], ["class", "col followers", 4, "ngIf"], ["class", "col platforms", 4, "ngIf"], ["class", "col", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [3, "page", "pageSize", "count", "pageChange"], [1, "plugin-download"], [1, "mobile-container"], [1, "header"], [1, "total-count"], [4, "ngIf", "ngIfElse"], ["skeletonKolDesktop", ""], ["skeletonRewardsDesktop", ""], ["avatarSkeleton", ""], ["textSkeleton", ""], ["btnSkeleton", ""], ["skeletonMobile", ""], ["src", "../../../assets/imgs/victory-hand-skin.png", "alt", ""], ["src", "../../../assets/imgs/growing-heart.png", "alt", ""], [1, "tabs"], ["routerLink", "/rewards/SLICE", "routerLinkActive", "active"], ["routerLink", "/rewards/CAKEBOX", "routerLinkActive", "active"], ["routerLink", "/rewards/TREND", "routerLinkActive", "active"], ["routerLink", "/grab-a-slice/KOL", "routerLinkActive", "active"], ["routerLink", "/grab-a-slice/USER", "routerLinkActive", "active"], [1, "col", "rarity"], [1, "col", "category"], [1, "col", "latest-price"], ["src", "../../../assets/icons/question.svg", "alt", "", 1, "question-icon", 3, "cakeTooltip"], [1, "col", "rewards"], [1, "col", "cakeboxes"], [1, "col", "followers"], [1, "col", "platforms"], [1, "col", 3, "ngClass"], ["class", "row list animation-hidden-skeleton", 4, "ngFor", "ngForOf"], [1, "row", "list", "animation-hidden-skeleton"], [1, "col", "user", 3, "click"], [1, "avatar"], [1, "slices"], [4, "ngFor", "ngForOf"], [1, "count"], ["class", "cakebox", 4, "ngFor", "ngForOf"], ["class", "col followers rankExample", 3, "innerHTML", 4, "ngIf"], ["class", "col follow", 4, "ngIf"], [1, "cakebox"], [3, "isSmall", "cakebox"], [1, "col", "followers", "rankExample", 3, "innerHTML"], ["class", "platform", 4, "ngFor", "ngForOf"], [1, "platform"], ["src", "../../../assets/icons/popular-fire.png", "alt", "popular", "class", "popular", 4, "ngIf"], ["alt", "", 1, "platform-icon", 3, "src"], ["src", "../../../assets/icons/popular-fire.png", "alt", "popular", 1, "popular"], [1, "col", "follow"], ["class", "button primary", 3, "disabled", "click", 4, "ngIf"], ["class", "button secondary unfollow with-icon", 3, "disabled", "click", 4, "ngIf"], [1, "button", "primary", 3, "disabled", "click"], [1, "button", "secondary", "unfollow", "with-icon", 3, "disabled", "click"], [1, "isFollow"], [1, "isUnfollow"], [1, "icon"], [1, "col", "latest-price", 3, "innerHTML"], [1, "col", "confectionary"], ["class", "button primary", 3, "click", 4, "ngIf"], ["class", "button tertiary", "disabled", "", 4, "ngIf"], [1, "button", "primary", 3, "click"], ["disabled", "", 1, "button", "tertiary"], [1, "rewards-list", "animation-hidden-skeleton"], ["class", "reward-container", 4, "ngFor", "ngForOf"], [1, "reward-container"], [1, "reward-main-info"], [1, "reward-image"], [1, "small-image"], [1, "reward-detail"], [1, "reward-info"], [1, "reward-info-type"], [1, "reward-info-name"], [1, "reward-details-btn", "pointer", 3, "cakeRewardsOptions"], ["xmlns", "http://www.w3.org/2000/svg", "width", "6", "height", "20", "viewBox", "0 0 6 20", "fill", "none"], ["d", "M5.25 17.5C5.25 18.0967 5.01295 18.669 4.59099 19.091C4.16903 19.5129 3.59674 19.75 3 19.75C2.40326 19.75 1.83097 19.5129 1.40901 19.091C0.987053 18.669 0.75 18.0967 0.75 17.5C0.75 16.9033 0.987053 16.331 1.40901 15.909C1.83097 15.4871 2.40326 15.25 3 15.25C3.59674 15.25 4.16903 15.4871 4.59099 15.909C5.01295 16.331 5.25 16.9033 5.25 17.5ZM5.25 10C5.25 10.5967 5.01295 11.169 4.59099 11.591C4.16903 12.0129 3.59674 12.25 3 12.25C2.40326 12.25 1.83097 12.0129 1.40901 11.591C0.987053 11.169 0.75 10.5967 0.75 10C0.75 9.40326 0.987053 8.83097 1.40901 8.40901C1.83097 7.98705 2.40326 7.75 3 7.75C3.59674 7.75 4.16903 7.98705 4.59099 8.40901C5.01295 8.83097 5.25 9.40326 5.25 10ZM5.25 2.5C5.25 3.09674 5.01295 3.66903 4.59099 4.09099C4.16903 4.51295 3.59674 4.75 3 4.75C2.40326 4.75 1.83097 4.51295 1.40901 4.09099C0.987053 3.66903 0.75 3.09674 0.75 2.5C0.75 1.90326 0.987053 1.33097 1.40901 0.90901C1.83097 0.487053 2.40326 0.25 3 0.25C3.59674 0.25 4.16903 0.487053 4.59099 0.90901C5.01295 1.33097 5.25 1.90326 5.25 2.5Z", "fill", "url(#paint0_linear_1447_111094)"], ["id", "paint0_linear_1447_111094", "x1", "0.869403", "y1", "0.25", "x2", "6.0908", "y2", "0.831504", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#2BDFB4"], ["offset", "1", "stop-color", "#29ADDF"], [1, "grab-list", "animation-hidden-skeleton"], ["class", "grab-container", 4, "ngFor", "ngForOf"], [1, "grab-container"], [1, "grab-main-info", 3, "click"], [1, "grab-image"], [1, "grab-name"], ["class", "subscribe-btn", 4, "ngIf"], [1, "subscribe-btn"], ["class", "row list", 4, "ngFor", "ngForOf"], [1, "row", "list"], [4, "ngTemplateOutlet"], ["count", "3", "appearance", "circle", "animation", "progress-dark", 3, "theme"], ["count", "3", "appearance", "line", "animation", "progress-dark", 3, "theme"], ["count", "5", "appearance", "line", "animation", "progress-dark", 3, "theme"], [1, "col", "latest-price", "rankExample"], ["count", "1", "appearance", "circle", "animation", "progress-dark", 3, "theme"], ["count", "1", "appearance", "line", "animation", "progress-dark", 3, "theme"], [1, "grab-list"], [1, "grab-main-info"]], template: function MainListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](5, MainListComponent_img_5_Template, 1, 0, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](6, MainListComponent_img_6_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](8, MainListComponent_div_8_Template, 7, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](9, MainListComponent_div_9_Template, 5, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](13, "Sort by");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](14, "div", 9)(15, "cake-drop-down", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("chooseOption", function MainListComponent_Template_cake_drop_down_chooseOption_15_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](16, "div", 11)(17, "cake-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](18, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](19, "path", 14)(20, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](21, "div", 16)(22, "div", 17)(23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](25, MainListComponent_div_25_Template, 2, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](26, MainListComponent_div_26_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](27, MainListComponent_div_27_Template, 3, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](28, MainListComponent_div_28_Template, 3, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](29, MainListComponent_div_29_Template, 3, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](30, MainListComponent_div_30_Template, 3, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](31, MainListComponent_div_31_Template, 3, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](32, MainListComponent_div_32_Template, 2, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](33, MainListComponent_ng_container_33_Template, 2, 2, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](34, MainListComponent_ng_container_34_Template, 2, 2, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](35, "cake-pagination", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("pageChange", function MainListComponent_Template_cake_pagination_pageChange_35_listener($event) { return ctx.currentPage = $event; })("pageChange", function MainListComponent_Template_cake_pagination_pageChange_35_listener() { return ctx.getData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](36, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](37, "cake-download-plugin");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](38, "div", 30)(39, "div", 31)(40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](41, "Total: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](42, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](44, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](45, "div", 8)(46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](47, "Sort by");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](48, "div", 9)(49, "cake-drop-down", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("chooseOption", function MainListComponent_Template_cake_drop_down_chooseOption_49_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](50, MainListComponent_ng_container_50_Template, 3, 2, "ng-container", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](51, "cake-pagination", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("pageChange", function MainListComponent_Template_cake_pagination_pageChange_51_listener($event) { return ctx.currentPage = $event; })("pageChange", function MainListComponent_Template_cake_pagination_pageChange_51_listener() { return ctx.getData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](52, MainListComponent_ng_template_52_Template, 1, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](54, MainListComponent_ng_template_54_Template, 1, 1, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](56, MainListComponent_ng_template_56_Template, 2, 6, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](58, MainListComponent_ng_template_58_Template, 1, 3, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](60, MainListComponent_ng_template_60_Template, 1, 3, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](62, MainListComponent_ng_template_62_Template, 2, 1, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", ctx.page === ctx.mainListComponentsEnum.Grab ? "Grab a slice!" : "Rewards", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.page === ctx.mainListComponentsEnum.Grab);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.page === ctx.mainListComponentsEnum.Rewards);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.page === ctx.mainListComponentsEnum.Rewards);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.page === ctx.mainListComponentsEnum.Grab);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("options", ctx.page === ctx.mainListComponentsEnum.Grab ? ctx.kolSortOptions : ctx.rewardsSortOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("control", ctx.searchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", ctx.getNameBasedOnTab(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.page === ctx.mainListComponentsEnum.Rewards);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.page === ctx.mainListComponentsEnum.Rewards);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.page === ctx.mainListComponentsEnum.Rewards);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.page === ctx.mainListComponentsEnum.Grab);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.page === ctx.mainListComponentsEnum.Grab);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.notAllowedTabs(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](30, _c0, ctx.tabsFromListEnum.Users)) && ctx.page === ctx.mainListComponentsEnum.Grab);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.notAllowedTabs(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](32, _c0, ctx.tabsFromListEnum.Users)) && ctx.page === ctx.mainListComponentsEnum.Grab);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.notAllowedTabs(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](34, _c0, ctx.tabsFromListEnum.Users)));
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.page === ctx.mainListComponentsEnum.Grab);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.page === ctx.mainListComponentsEnum.Rewards);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("page", ctx.currentPage)("pageSize", ctx.pageSize)("count", ctx.totalCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](44, 28, ctx.totalCount));
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("options", ctx.sortOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx.waitingLoading)("ngIfElse", _r25);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("page", ctx.currentPage)("pageSize", ctx.pageSize)("count", ctx.totalCount);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterLinkActive, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_27__.NgxSkeletonLoaderComponent, _shared_components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_12__.DropDownComponent, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_13__.InputComponent, _shared_components_download_plugin_download_plugin_component__WEBPACK_IMPORTED_MODULE_14__.DownloadPluginComponent, _shared_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_15__.TooltipDirective, _shared_directives_rewards_options_directive_directive__WEBPACK_IMPORTED_MODULE_16__.RewardsOptionsDirective, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_17__.PaginationComponent, _shared_components_cakebox_cakebox_component__WEBPACK_IMPORTED_MODULE_18__.CakeboxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_26__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_26__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_26__.TitleCasePipe, _core_pipes_followers_count_pipe__WEBPACK_IMPORTED_MODULE_19__.FollowersCountPipe], styles: [".content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n@media (max-width: 500px) {\n  .content[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  transform: translateY(-20px);\n  height: 66px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Santhony\";\n  font-weight: 100;\n  font-size: 56px;\n  margin: 0;\n  background-color: var(--color-gradient-left-3);\n  background-image: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n}\n@media (max-width: 425px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n@media (max-width: 375px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 59px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%] {\n  padding: 0 64px;\n  width: calc(100% - 128px);\n  display: flex;\n  justify-content: space-between;\n  height: 88px;\n  align-items: center;\n  background: var(--opacity-color);\n}\n@media (max-width: 1024px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%] {\n    padding: 0 32px;\n    width: calc(100% - 64px);\n  }\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%] {\n    padding: 10px 32px;\n    flex-direction: column;\n  }\n}\n@media (max-width: 500px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%] {\n    padding: 10px;\n    width: calc(100% - 20px);\n  }\n}\n@media (max-width: 425px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%] {\n    height: 125px;\n  }\n}\n@media (max-width: 425px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%] {\n    justify-content: center;\n    height: 80px;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-family: Gilroy-300;\n  font-size: 16px;\n  color: var(--color-fonts-2);\n  margin-right: 24px;\n  position: relative;\n  padding-bottom: 8px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-gradient-name-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-name-left-1), var(--color-gradient-name-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::after, .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::after {\n  content: \"\";\n  width: 100%;\n  height: 2px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background: linear-gradient(var(--deg-gradient-1), var(--color-gradient-name-left-1), var(--color-gradient-name-right-1));\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .last-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .last-content[_ngcontent-%COMP%]   .sort-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 25px;\n  height: 40px;\n}\n@media (max-width: 500px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .last-content[_ngcontent-%COMP%]   .sort-block[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .last-content[_ngcontent-%COMP%]   .sort-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Gilroy-300;\n  font-size: 16px;\n  color: var(--color-fonts-2);\n  font-size: 12px;\n}\n@media (max-width: 500px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .last-content[_ngcontent-%COMP%]   .sort-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .last-content[_ngcontent-%COMP%]   .sort-block[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%] {\n  width: 165px;\n  margin-left: 16px;\n  height: 42px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .last-content[_ngcontent-%COMP%]   .search-block[_ngcontent-%COMP%] {\n  width: 245px;\n  height: 42px;\n}\n@media (max-width: 500px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .last-content[_ngcontent-%COMP%]   .search-block[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%] {\n  padding: 0 64px;\n  width: calc(100% - 128px);\n  margin-top: 20px;\n}\n@media (max-width: 1024px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%] {\n    padding: 0 32px;\n    width: calc(100% - 64px);\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid var(--border-list-color);\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .question-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.user[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@media (max-width: 500px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.user[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%] {\n  width: 37px;\n  height: 37px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.rarity[_ngcontent-%COMP%] {\n  width: 15%;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.rarity[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.category[_ngcontent-%COMP%] {\n  width: 15%;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.category[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.latest-price[_ngcontent-%COMP%] {\n  width: 10%;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.latest-price[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.confectionary[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@media (max-width: 500px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.confectionary[_ngcontent-%COMP%] {\n    width: 55%;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.rewards[_ngcontent-%COMP%] {\n  width: 13%;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.rewards[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.cakeboxes[_ngcontent-%COMP%] {\n  width: 13%;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.cakeboxes[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.followers[_ngcontent-%COMP%] {\n  width: 10%;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.followers[_ngcontent-%COMP%] {\n    width: 15%;\n  }\n}\n@media (max-width: 500px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.followers[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.platforms[_ngcontent-%COMP%] {\n  width: 26%;\n}\n@media (max-width: 1024px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.platforms[_ngcontent-%COMP%] {\n    width: 29%;\n  }\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.platforms[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n@media (max-width: 500px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.platforms[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.follow[_ngcontent-%COMP%] {\n  width: 15%;\n}\n@media (max-width: 1024px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.follow[_ngcontent-%COMP%] {\n    width: 12%;\n  }\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.follow[_ngcontent-%COMP%] {\n    width: 15%;\n  }\n}\n@media (max-width: 500px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.follow[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-family: Gilroy-300;\n  font-size: 16px;\n  color: var(--color-fonts-list-head);\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-300\";\n  font-size: 14px;\n  background-color: var(--color-gradient-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.user[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50px;\n  background: var(--avatar-bg-color);\n  position: relative;\n  margin-right: 20px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.user[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  width: 56px;\n  height: 56px;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.user[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Gilroy-500;\n  font-size: 14px;\n  color: var(--color-fonts-2);\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.rarity[_ngcontent-%COMP%] {\n  font-family: Gilroy-500;\n  font-size: 14px;\n  color: var(--color-fonts-2);\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.category[_ngcontent-%COMP%] {\n  font-family: Gilroy-500;\n  font-size: 14px;\n  color: var(--color-fonts-2);\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.latest-price[_ngcontent-%COMP%] {\n  font-family: Gilroy-400;\n  font-size: 18px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.rewards[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.rewards[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%] {\n  position: relative;\n  width: 82px;\n  height: 36px;\n  margin-right: 15px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.rewards[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  position: absolute;\n  width: 36px;\n  height: 36px;\n  border-radius: 50px;\n  border: 1px solid rgba(0, 0, 0, 0.16);\n  filter: drop-shadow(-2px 0px 4px rgba(0, 0, 0, 0.16));\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.rewards[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(1) {\n  left: 0;\n  z-index: 0;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.rewards[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(2) {\n  left: 23px;\n  z-index: 1;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.rewards[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(3) {\n  left: 46px;\n  z-index: 2;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.followers[_ngcontent-%COMP%] {\n  font-family: Gilroy-400;\n  font-size: 18px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.cakeboxes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(1) {\n  left: 0;\n  z-index: 0;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(2) {\n  left: 34px;\n  z-index: 1;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(3) {\n  left: 68px;\n  z-index: 2;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.platforms[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.platforms[_ngcontent-%COMP%]   .platform[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-platform-color);\n  border-radius: 6px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  background: var(--bg-platform-color);\n  margin-right: 8px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.platforms[_ngcontent-%COMP%]   .platform[_ngcontent-%COMP%]   .popular[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  object-fit: contain;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.platforms[_ngcontent-%COMP%]   .platform[_ngcontent-%COMP%]   .platform-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.follow[_ngcontent-%COMP%] {\n  position: relative;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.follow[_ngcontent-%COMP%]   .isUnfollow[_ngcontent-%COMP%] {\n  display: none;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.follow[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: -10px;\n  z-index: 1;\n  top: -8px;\n  background-image: url('checkbox.svg');\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.follow[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  background-image: url('unfollow.svg');\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.follow[_ngcontent-%COMP%]:hover   .isUnfollow[_ngcontent-%COMP%] {\n  display: block;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.follow[_ngcontent-%COMP%]:hover   .isFollow[_ngcontent-%COMP%] {\n  display: none;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .plugin-download[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  width: 95%;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n@media (min-width: 769px) {\n  .content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: calc(100% - 32px);\n  justify-content: space-between;\n  height: 56px;\n  margin-left: 16px;\n  border-bottom: 1px solid var(--border-list-color);\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-fonts-2);\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: var(--color-gradient-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .sort-block[_ngcontent-%COMP%] {\n  align-items: center;\n  display: inherit;\n  justify-content: space-between;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .sort-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Gilroy-300;\n  font-size: 16px;\n  color: var(--color-fonts-2);\n  font-size: 12px;\n  display: inline;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .sort-block[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%] {\n  width: 151px;\n  margin-left: 16px;\n  height: 40px;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%] {\n  width: calc(100% - 32px);\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%] {\n  margin: 0 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 52px;\n  width: 100%;\n  border-bottom: 1px solid var(--border-list-color);\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-main-info[_ngcontent-%COMP%] {\n  display: flex;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-main-info[_ngcontent-%COMP%]   .reward-image[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: inline;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-main-info[_ngcontent-%COMP%]   .reward-image[_ngcontent-%COMP%]   .small-image[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n  border-radius: 32px;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-main-info[_ngcontent-%COMP%]   .reward-detail[_ngcontent-%COMP%] {\n  display: inline;\n  justify-content: center;\n  margin-left: 8px;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-main-info[_ngcontent-%COMP%]   .reward-detail[_ngcontent-%COMP%]   .reward-info[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-main-info[_ngcontent-%COMP%]   .reward-detail[_ngcontent-%COMP%]   .reward-info-type[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--color-fonts-list-head);\n  margin: 0;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-main-info[_ngcontent-%COMP%]   .reward-detail[_ngcontent-%COMP%]   .reward-info-name[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 16px;\n  line-height: 22px;\n  color: var(--color-tooltip-text);\n  margin: 0;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-details-btn[_ngcontent-%COMP%] {\n  margin-right: 9px;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-details-btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-details-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: gradient-linear-bg(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%] {\n  width: calc(100% - 32px);\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%] {\n  margin: 0 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 52px;\n  width: 100%;\n  border-bottom: 1px solid var(--border-list-color);\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .grab-main-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .grab-main-info[_ngcontent-%COMP%]   .grab-image[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: inline;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .grab-main-info[_ngcontent-%COMP%]   .grab-image[_ngcontent-%COMP%]   .small-image[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n  border-radius: 32px;\n  object-fit: cover;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .grab-main-info[_ngcontent-%COMP%]   .grab-image[_ngcontent-%COMP%]   .small-image[alt][_ngcontent-%COMP%] {\n  font-size: 8px;\n  color: var(--color-fonts-list-head);\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .grab-main-info[_ngcontent-%COMP%]   .grab-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .grab-main-info[_ngcontent-%COMP%]   .grab-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--color-fonts-list-head);\n  margin: 0;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .subscribe-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 100px;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .subscribe-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: -10px;\n  z-index: 1;\n  top: -8px;\n  background-image: url('checkbox.svg');\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .subscribe-btn[_ngcontent-%COMP%]   .isUnfollow[_ngcontent-%COMP%] {\n  display: none;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .subscribe-btn[_ngcontent-%COMP%]   .isFollow[_ngcontent-%COMP%] {\n  display: block;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .subscribe-btn[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  background-image: url('unfollow.svg');\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .subscribe-btn[_ngcontent-%COMP%]:hover   .isUnfollow[_ngcontent-%COMP%] {\n  display: block;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .subscribe-btn[_ngcontent-%COMP%]:hover   .isFollow[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBTEY7QUFPRTtFQUxGO0lBTUksZ0JBQUE7RUFKRjtBQUNGO0FBTUU7RUFDRSxXQUFBO0FBSko7QUFLSTtFQUZGO0lBR0ksYUFBQTtFQUZKO0FBQ0Y7QUFHSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQUROO0FBR007RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUM2Qk4sOENEMUJRO0VDMkJSLHFIQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtBRDdCRjtBQUNRO0VBWEY7SUFZSSxlQUFBO0VBRVI7QUFDRjtBQURRO0VBZEY7SUFlSSxlQUFBO0VBSVI7QUFDRjtBQURNO0VBQ0UsV0FBQTtBQUdSO0FBQ0k7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUNOO0FBQU07RUFSRjtJQVNJLGVBQUE7SUFDQSx3QkFBQTtFQUdOO0FBQ0Y7QUFETTtFQWJGO0lBY0ksa0JBQUE7SUFDQSxzQkFBQTtFQUlOO0FBQ0Y7QUFGTTtFQWxCRjtJQW1CSSxhQUFBO0lBQ0Esd0JBQUE7RUFLTjtBQUNGO0FBSE07RUF2QkY7SUF3QkksYUFBQTtFQU1OO0FBQ0Y7QUFKUTtFQURGO0lBRUksdUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFQU9SO0FBQ0Y7QUFOUTtFQUNFLHFCQUFBO0VDSFIsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RURHUSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFVVjtBQVJVO0VDaENSLG1ERG9DWTtFQ25DWiwrSEFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7QUQyQ0Y7QUFSVTtFQUVFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUNoRlYseUhBQUE7QUQwRkY7QUFBTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUVSO0FBQVE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFFVjtBQUFVO0VBTkY7SUFPSSxVQUFBO0VBR1Y7QUFDRjtBQUZVO0VDaERSLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VEZ0RVLGVBQUE7QUFNWjtBQUxZO0VBSEY7SUFJSSxhQUFBO0VBUVo7QUFDRjtBQUxVO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQU9aO0FBSFE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUtWO0FBSlU7RUFIRjtJQUlJLFVBQUE7RUFPVjtBQUNGO0FBRkk7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUlOO0FBSE07RUFKRjtJQUtJLGVBQUE7SUFDQSx3QkFBQTtFQU1OO0FBQ0Y7QUFMTTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlEQUFBO0FBT1I7QUFMVTtFQUNFLGVBQUE7QUFPWjtBQUpVO0VBQ0UsVUFBQTtBQU1aO0FBTFk7RUFGRjtJQUdJLFVBQUE7RUFRWjtBQUNGO0FBTlU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVFaO0FBTFU7RUFDRSxVQUFBO0FBT1o7QUFOWTtFQUZGO0lBR0ksd0JBQUE7RUFTWjtBQUNGO0FBTlU7RUFDRSxVQUFBO0FBUVo7QUFQWTtFQUZGO0lBR0ksd0JBQUE7RUFVWjtBQUNGO0FBUFU7RUFDRSxVQUFBO0FBU1o7QUFSWTtFQUZGO0lBR0ksd0JBQUE7RUFXWjtBQUNGO0FBUlU7RUFDRSxVQUFBO0FBVVo7QUFUWTtFQUZGO0lBR0ksVUFBQTtFQVlaO0FBQ0Y7QUFUVTtFQUNFLFVBQUE7QUFXWjtBQVZZO0VBRkY7SUFHSSx3QkFBQTtFQWFaO0FBQ0Y7QUFWVTtFQUNFLFVBQUE7QUFZWjtBQVhZO0VBRkY7SUFHSSx3QkFBQTtFQWNaO0FBQ0Y7QUFYVTtFQUNFLFVBQUE7QUFhWjtBQVpZO0VBRkY7SUFHSSxVQUFBO0VBZVo7QUFDRjtBQWJZO0VBTkY7SUFPSSxVQUFBO0VBZ0JaO0FBQ0Y7QUFiVTtFQUNFLFVBQUE7QUFlWjtBQWRZO0VBRkY7SUFHSSxVQUFBO0VBaUJaO0FBQ0Y7QUFoQlk7RUFMRjtJQU1JLFVBQUE7RUFtQlo7QUFDRjtBQWxCWTtFQVJGO0lBU0ksd0JBQUE7RUFxQlo7QUFDRjtBQWxCVTtFQUNFLFVBQUE7QUFvQlo7QUFuQlk7RUFGRjtJQUdJLFVBQUE7RUFzQlo7QUFDRjtBQXJCWTtFQUxGO0lBTUksVUFBQTtFQXdCWjtBQUNGO0FBdkJZO0VBUkY7SUFTSSxVQUFBO0VBMEJaO0FBQ0Y7QUFyQlU7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQXVCWjtBQWJZO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VDOU5aLDhDRGlPYztFQ2hPZCxxSEFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7QUQ4T0Y7QUFmWTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFpQmQ7QUFoQmM7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBa0JoQjtBQWhCZ0I7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUFrQmxCO0FBZGM7RUMxTlosdUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUQyT0Y7QUFkWTtFQy9OVix1QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBRGdQRjtBQWZZO0VDbk9WLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FEcVBGO0FBaEJZO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0FBa0JkO0FBZlk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFpQmQ7QUFmYztFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWlCaEI7QUFmZ0I7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EscURBQUE7QUFpQmxCO0FBZmtCO0VBQ0UsT0FBQTtFQUNBLFVBQUE7QUFpQnBCO0FBZmtCO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUFpQnBCO0FBZmtCO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUFpQnBCO0FBWFk7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUFhZDtBQVhZO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFhZDtBQVhjO0VBQ0Usa0JBQUE7QUFhaEI7QUFYZ0I7RUFDRSxPQUFBO0VBQ0EsVUFBQTtBQWFsQjtBQVhnQjtFQUNFLFVBQUE7RUFDQSxVQUFBO0FBYWxCO0FBWGdCO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUFhbEI7QUFSWTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQVVkO0FBUmM7RUFDRSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7QUFVaEI7QUFSZ0I7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQVVsQjtBQVBnQjtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtBQVNsQjtBQUpZO0VBQ0Usa0JBQUE7QUFNZDtBQUpjO0VBQ0UsYUFBQTtBQU1oQjtBQUhjO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0FBS2hCO0FBRGdCO0VBQ0UscUNBQUE7QUFHbEI7QUFBZ0I7RUFDRSxjQUFBO0FBRWxCO0FBQ2dCO0VBQ0UsYUFBQTtBQUNsQjtBQVFJO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FBTk47QUFVRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBUko7QUFTSTtFQUhGO0lBSUksYUFBQTtFQU5KO0FBQ0Y7QUFRSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFpQ0EsaURBQUE7QUF0Q047QUFPTTtFQUNFLDJCQUFBO0FBTFI7QUFRUTtFQUNFLFNBQUE7RUMxYVIsOENENmFVO0VDNWFWLHFIQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtBRHFhRjtBQVFNO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBTlI7QUFRUTtFQ2phTix1QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFRGlhUSxlQUFBO0VBQ0EsZUFBQTtBQUpWO0FBT1E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBTFY7QUFXSTtFQUNFLHdCQUFBO0FBVE47QUFXTTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaURBQUE7QUFUUjtBQVVRO0VBQ0UsYUFBQTtBQVJWO0FBU1U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFQWjtBQVFZO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQU5kO0FBVVU7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQVJaO0FBU1k7RUFDRSxnQkFBQTtBQVBkO0FBU2M7RUFoaUJaLHlCQUFBO0VBa2lCYyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFNBQUE7QUFQaEI7QUFTYztFQXZpQloseUJBQUE7RUF5aUJjLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtBQVBoQjtBQVlRO0VBQ0UsaUJBQUE7QUFWVjtBQVdVO0VBQ0UsZUFBQTtBQVRaO0FBY2M7RUFDRSw4R0FBQTtBQVpoQjtBQXdCSTtFQUNFLHdCQUFBO0FBdEJOO0FBd0JNO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpREFBQTtBQXRCUjtBQXdCUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQXRCVjtBQXdCVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQXRCWjtBQXdCWTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQXRCZDtBQXdCYztFQUNFLGNBQUE7RUFDQSxtQ0FBQTtBQXRCaEI7QUEyQlU7RUFDRSxnQkFBQTtBQXpCWjtBQTJCWTtFQTNtQlYseUJBQUE7RUE2bUJZLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsU0FBQTtBQXpCZDtBQThCUTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBNUJWO0FBOEJVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0FBNUJaO0FBK0JVO0VBQ0UsYUFBQTtBQTdCWjtBQWdDVTtFQUNFLGNBQUE7QUE5Qlo7QUFrQ1k7RUFDRSxxQ0FBQTtBQWhDZDtBQW1DWTtFQUNFLGNBQUE7QUFqQ2Q7QUFvQ1k7RUFDRSxhQUFBO0FBbENkIiwiZmlsZSI6Im1haW4tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL21peGlucyc7XG5cbkBtaXhpbiBmb250LWZhbWlseSB7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95LTQwMCc7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG5cbiAgLmRlc2t0b3AtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgICAgaGVpZ2h0OiA2NnB4O1xuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU2FudGhvbnknO1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBmb250LXNpemU6IDU2cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgQGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLXRleHQoXG4gICAgICAgICAgdmFyKC0tZGVnLWdyYWRpZW50LTMpLFxuICAgICAgICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMyksXG4gICAgICAgICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMylcbiAgICAgICAgKTtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1OXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXItb2YtdGFibGUge1xuICAgICAgcGFkZGluZzogMCA2NHB4O1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEyOHB4KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBoZWlnaHQ6IDg4cHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tb3BhY2l0eS1jb2xvcik7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMzJweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAzMnB4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICAgIH1cbiAgICAgIC50YWJzIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIEBpbmNsdWRlIEdpbHJveS0zMDAtMTYtZm9udHMtMjtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG5cbiAgICAgICAgICAmLmFjdGl2ZSxcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KFxuICAgICAgICAgICAgICB2YXIoLS1kZWctZ3JhZGllbnQtMSksXG4gICAgICAgICAgICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LW5hbWUtbGVmdC0xKSxcbiAgICAgICAgICAgICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtbmFtZS1yaWdodC0xKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmFjdGl2ZTo6YWZ0ZXIsXG4gICAgICAgICAgJjpob3Zlcjo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1iZyhcbiAgICAgICAgICAgICAgdmFyKC0tZGVnLWdyYWRpZW50LTEpLFxuICAgICAgICAgICAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1uYW1lLWxlZnQtMSksXG4gICAgICAgICAgICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LW5hbWUtcmlnaHQtMSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5sYXN0LWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5zb3J0LWJsb2NrIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgQGluY2x1ZGUgR2lscm95LTMwMC0xNi1mb250cy0yO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNvcnQge1xuICAgICAgICAgICAgd2lkdGg6IDE2NXB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaC1ibG9jayB7XG4gICAgICAgICAgd2lkdGg6IDI0NXB4O1xuICAgICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxpc3QtYmxvY2sge1xuICAgICAgcGFkZGluZzogMCA2NHB4O1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEyOHB4KTtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMzJweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICAgICAgfVxuICAgICAgLnJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlzdC1jb2xvcik7XG4gICAgICAgIC5jb2wge1xuICAgICAgICAgIC5xdWVzdGlvbi1pY29uIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnVzZXIge1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FrZWJveCB7XG4gICAgICAgICAgICB3aWR0aDogMzdweDtcbiAgICAgICAgICAgIGhlaWdodDogMzdweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnJhcml0eSB7XG4gICAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmNhdGVnb3J5IHtcbiAgICAgICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYubGF0ZXN0LXByaWNlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYuY29uZmVjdGlvbmFyeSB7XG4gICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1NSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5yZXdhcmRzIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMyU7XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYuY2FrZWJveGVzIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMyU7XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYuZm9sbG93ZXJzIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5wbGF0Zm9ybXMge1xuICAgICAgICAgICAgd2lkdGg6IDI2JTtcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDI5JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmZvbGxvdyB7XG4gICAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgICB3aWR0aDogMTIlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmhlYWRlciB7XG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBHaWxyb3ktMzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLWxpc3QtaGVhZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmxvYWRlci1saXN0IHtcblxuICAgICAgICB9XG5cbiAgICAgICAgJi5saXN0IHtcbiAgICAgICAgICAuY29sIHtcbiAgICAgICAgICAgIC5jb3VudCB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95LTMwMCc7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgQGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLXRleHQoXG4gICAgICAgICAgICAgICAgdmFyKC0tZGVnLWdyYWRpZW50LTEpLFxuICAgICAgICAgICAgICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMSksXG4gICAgICAgICAgICAgICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYudXNlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYXZhdGFyLWJnLWNvbG9yKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogNTZweDtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBHaWxyb3ktNTAwLTE0LWZvbnRzLTI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5yYXJpdHkge1xuICAgICAgICAgICAgICBAaW5jbHVkZSBHaWxyb3ktNTAwLTE0LWZvbnRzLTI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuY2F0ZWdvcnkge1xuICAgICAgICAgICAgICBAaW5jbHVkZSBHaWxyb3ktNTAwLTE0LWZvbnRzLTI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYubGF0ZXN0LXByaWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEdpbHJveS00MDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5yZXdhcmRzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAuc2xpY2VzIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KC0ycHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTYpKTtcblxuICAgICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjNweDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoMykge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA0NnB4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZvbGxvd2VycyB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBHaWxyb3ktNDAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmNha2Vib3hlcyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgICAuY2FrZWJveCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAzNHB4O1xuICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgzKSB7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiA2OHB4O1xuICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5wbGF0Zm9ybXMge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgIC5wbGF0Zm9ybSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXBsYXRmb3JtLWNvbG9yKTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wbGF0Zm9ybS1jb2xvcik7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG5cbiAgICAgICAgICAgICAgICAucG9wdWxhciB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAtNXB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5wbGF0Zm9ybS1pY29uIHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZm9sbG93IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgIC5pc1VuZm9sbG93IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgdG9wOiAtOHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2NoZWNrYm94LnN2ZycpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvdW5mb2xsb3cuc3ZnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmlzVW5mb2xsb3cge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmlzRm9sbG93IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnBsdWdpbi1kb3dubG9hZCB7XG4gICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICB9XG4gIH1cblxuICAubW9iaWxlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gICAgICBcblxuICAgICAgICAudG90YWwtY291bnQge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dChcbiAgICAgICAgICAgIHZhcigtLWRlZy1ncmFkaWVudC0xKSxcbiAgICAgICAgICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMSksXG4gICAgICAgICAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0xKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNvcnQtYmxvY2sge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgIEBpbmNsdWRlIEdpbHJveS0zMDAtMTYtZm9udHMtMjtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNvcnQge1xuICAgICAgICAgIHdpZHRoOiAxNTFweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlzdC1jb2xvcik7XG4gICAgfVxuXG4gICAgLnJld2FyZHMtbGlzdCB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XG5cbiAgICAgIC5yZXdhcmQtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saXN0LWNvbG9yKTtcbiAgICAgICAgLnJld2FyZC1tYWluLWluZm8ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLnJld2FyZC1pbWFnZSB7XG4gICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIC5zbWFsbC1pbWFnZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJld2FyZC1kZXRhaWwge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICAgICAgLnJld2FyZC1pbmZvIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICAgICAgICAmLXR5cGUge1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZvbnQtZmFtaWx5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtbGlzdC1oZWFkKTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJi1uYW1lIHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBmb250LWZhbWlseTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRvb2x0aXAtdGV4dCk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5yZXdhcmQtZGV0YWlscy1idG4ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogOXB4O1xuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBwYXRoIHtcbiAgICAgICAgICAgICAgcGF0aCB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBncmFkaWVudC1saW5lYXItYmcoXG4gICAgICAgICAgICAgICAgICB2YXIoLS1kZWctZ3JhZGllbnQtMyksXG4gICAgICAgICAgICAgICAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTMpLFxuICAgICAgICAgICAgICAgICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmdyYWItbGlzdCB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XG5cbiAgICAgIC5ncmFiLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGhlaWdodDogNTJweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlzdC1jb2xvcik7XG5cbiAgICAgICAgLmdyYWItbWFpbi1pbmZvIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAuZ3JhYi1pbWFnZSB7XG4gICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcblxuICAgICAgICAgICAgLnNtYWxsLWltYWdlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG5cbiAgICAgICAgICAgICAgJlthbHRdIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtbGlzdC1oZWFkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ncmFiLW5hbWUge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIEBpbmNsdWRlIGZvbnQtZmFtaWx5O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtbGlzdC1oZWFkKTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWJzY3JpYmUtYnRuIHtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuXG4gICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogLTEwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgdG9wOiAtOHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvY2hlY2tib3guc3ZnJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlzVW5mb2xsb3cge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaXNGb2xsb3cge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb25zL3VuZm9sbG93LnN2ZycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaXNVbmZvbGxvdyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaXNGb2xsb3cge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIGJ0bi1ob3ZlcigkdGV4dENvbG9yLCAkYmcsICRib3JkZXJDb2xvcikge1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHRleHRDb2xvcjtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgfVxufVxuXG5AbWl4aW4gYnRuLWRpc2FibGVkKCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gICY6ZGlzYWJsZWQge1xuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG4gIH1cbn1cblxuQG1peGluIGJ0bi1kZWZhdWx0KCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gIGNvbG9yOiAkdGV4dENvbG9yO1xuICBiYWNrZ3JvdW5kOiAkYmc7XG4gIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZWFyLWJnKCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG59XG5cbkBtaXhpbiBib3JkZXItZ3JhZGllbnQtbGluZWFyKCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJvcmRlci1pbWFnZTogIGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItYm9yZGVyKFxuICAkZGVnLFxuICAkbGVmdENvbG9yLFxuICAkcmlnaHRDb2xvcixcbiAgJGJvcmRlcldpZHRoLFxuICAkYm9yZGVyUmFkaXVzXG4pIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XG4gICAgcGFkZGluZzogJGJvcmRlcldpZHRoO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG4gICAgLXdlYmtpdC1tYXNrOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiAwIDApIGNvbnRlbnQtYm94LFxuICAgICAgLyogWzFdICovIGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCk7IC8qIFsyXSAqL1xuICAgIC13ZWJraXQtbWFzay1jb21wb3NpdGU6IHhvcjsgLyogWzNdINC00LvRjyDQv9GW0LTRgtGA0LjQvNC60Lgg0LHRgNCw0YPQt9C10YDRltCyICovXG4gICAgbWFzay1jb21wb3NpdGU6IGV4Y2x1ZGU7IC8qIFszXSAqL1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItdGV4dCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGVmdENvbG9yO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtaXhpbiBlcnJvci1tZXNzYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IEdpbHJveS00MDA7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dChcbiAgICB2YXIoLS1kZWctZ3JhZGllbnQtNCksXG4gICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC00KSxcbiAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC00KVxuICApO1xufVxuXG5AbWl4aW4gR2lscm95LTMwMC0xNi1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6IEdpbHJveS0zMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xufVxuXG5AbWl4aW4gR2lscm95LTQwMC0zMC1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6IEdpbHJveS00MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xufVxuXG5AbWl4aW4gR2lscm95LTUwMC0xNC1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6IEdpbHJveS01MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xufVxuIl19 */"] });


/***/ }),

/***/ 4056:
/*!*********************************************************************!*\
  !*** ./apps/frontend/src/app/modules/main-list/main-list.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainListModule": () => (/* binding */ MainListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _main_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-list-routing.module */ 7030);
/* harmony import */ var _main_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-list.component */ 2725);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class MainListModule {
}
MainListModule.ɵfac = function MainListModule_Factory(t) { return new (t || MainListModule)(); };
MainListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MainListModule });
MainListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _main_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainListRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MainListModule, { declarations: [_main_list_component__WEBPACK_IMPORTED_MODULE_1__.MainListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _main_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainListRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=apps_frontend_src_app_modules_main-list_main-list_module_ts.js.map