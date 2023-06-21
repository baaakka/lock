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

/***/ 6562:
/*!*****************************************************************************!*\
  !*** ./apps/frontend/src/app/modules/main-list/main-list-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainListRoutingModule": () => (/* binding */ MainListRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6873);
/* harmony import */ var _main_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-list.component */ 2725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9609);




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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 3557);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 6873);
/* harmony import */ var _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cake/lib-api-interface */ 171);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 6027);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 5231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 1491);
/* harmony import */ var _core_constants_main_list_components_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/constants/main-list-components.enum */ 7091);
/* harmony import */ var _core_constants_sorting_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/constants/sorting-options */ 2952);
/* harmony import */ var _core_constants_tabs_from_list_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/constants/tabs-from-list.enum */ 1143);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ 554);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ 5894);
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/modals.service */ 5414);
/* harmony import */ var _services_reward_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/reward.service */ 7008);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/search.service */ 6490);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/theme.service */ 1266);
/* harmony import */ var _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/classes/watcher */ 34);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 7661);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-skeleton-loader */ 3453);
/* harmony import */ var _shared_components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/drop-down/drop-down.component */ 4662);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/input/input.component */ 9852);
/* harmony import */ var _shared_components_download_plugin_download_plugin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/components/download-plugin/download-plugin.component */ 7507);
/* harmony import */ var _shared_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/directives/tooltip.directive */ 2009);
/* harmony import */ var _shared_directives_rewards_options_directive_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/directives/rewards-options-directive.directive */ 2114);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/components/pagination/pagination.component */ 2774);
/* harmony import */ var _shared_components_cakebox_cakebox_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/components/cakebox/cakebox.component */ 3755);
/* harmony import */ var _core_pipes_followers_count_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../core/pipes/followers-count.pipe */ 4376);

































function MainListComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "img", 27);
} }
function MainListComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "img", 28);
} }
function MainListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 29)(1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "Slices");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Cak3boxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, "Trends");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} }
function MainListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 29)(1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "Key opinion leader");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} }
function MainListComponent_div_20_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, " Rarity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function MainListComponent_div_20_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function MainListComponent_div_20_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, " Latest price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function MainListComponent_div_20_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, " Rewards ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("cakeTooltip", "Are cosmetics, slices, sugar that user can get for doing a given task.");
} }
function MainListComponent_div_20_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, " Cakeboxes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("cakeTooltip", "Are boxes, that can contain cosmetics, slices or sugar.");
} }
function MainListComponent_div_20_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, " Activity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("cakeTooltip", "Are boxes, that can contain cosmetics, slices or sugar.");
} }
function MainListComponent_div_20_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, " Rank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("cakeTooltip", "Are boxes, that can contain cosmetics, slices or sugar.");
} }
function MainListComponent_div_20_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, " Hype ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("cakeTooltip", "Are boxes, that can contain cosmetics, slices or sugar.");
} }
function MainListComponent_div_20_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, " Followers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("cakeTooltip", "Quantity of users that following KOL/Brand/Project.");
} }
function MainListComponent_div_20_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, " Platforms ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("cakeTooltip", "Quantity of media platforms connected to cak3 plugin.");
} }
function MainListComponent_div_20_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", ctx_r30.page === ctx_r30.mainListComponentsEnum.Grab ? "follow" : "confectionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r30.page === ctx_r30.mainListComponentsEnum.Grab ? "Follow" : "Confectionary", " ");
} }
function MainListComponent_div_20_ng_container_15_ng_container_1_div_1_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "img", 76);
} if (rf & 2) {
    const reward_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("alt", reward_r42.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵattribute"]("src", reward_r42.smallImage || reward_r42.image, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
} }
function MainListComponent_div_20_ng_container_15_ng_container_1_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "cake-cakebox", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cakebox_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("isSmall", true)("cakebox", cakebox_r44);
} }
function MainListComponent_div_20_ng_container_15_ng_container_1_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "followersCount");
} if (rf & 2) {
    const index_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().index;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 1, ctx_r39.MOCK_FOLLOWERS[index_r36]), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeHtml"]);
} }
function MainListComponent_div_20_ng_container_15_ng_container_1_div_1_div_24_a_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "img", 84);
} }
function MainListComponent_div_20_ng_container_15_ng_container_1_div_1_div_24_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, MainListComponent_div_20_ng_container_15_ng_container_1_div_1_div_24_a_1_img_1_Template, 1, 0, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const platform_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵattribute"]("href", platform_r48.link, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", platform_r48.isPopular);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate1"]("src", "assets/platforms/", platform_r48.platform, "-small.svg", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
} }
function MainListComponent_div_20_ng_container_15_ng_container_1_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, MainListComponent_div_20_ng_container_15_ng_container_1_div_1_div_24_a_1_Template, 3, 3, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind3"](2, 3, item_r35.platforms, 0, 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"](" ", item_r35.platforms.length > 5 ? "+" : "", "", item_r35.platforms.length > 5 ? item_r35.platforms.length - 5 : "", " ");
} }
function MainListComponent_div_20_ng_container_15_ng_container_1_div_1_div_25_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MainListComponent_div_20_ng_container_15_ng_container_1_div_1_div_25_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r56); const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r54.follow(item_r35.user.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, " Follow ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", ctx_r52.userId === item_r35.user.id);
} }
function MainListComponent_div_20_ng_container_15_ng_container_1_div_1_div_25_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MainListComponent_div_20_ng_container_15_ng_container_1_div_1_div_25_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r60); const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r58.unfollow(item_r35.user.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "Following");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Unfollow");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](5, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function MainListComponent_div_20_ng_container_15_ng_container_1_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, MainListComponent_div_20_ng_container_15_ng_container_1_div_1_div_25_button_1_Template, 2, 1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, MainListComponent_div_20_ng_container_15_ng_container_1_div_1_div_25_button_2_Template, 6, 0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !item_r35.user.isFollow && ctx_r41.userId !== item_r35.user.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r35.user.isFollow && ctx_r41.userId !== item_r35.user.id);
} }
const _c0 = function (a0) { return [a0]; };
function MainListComponent_div_20_ng_container_15_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 63)(1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MainListComponent_div_20_ng_container_15_ng_container_1_div_1_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r63); const item_r35 = restoredCtx.$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r62.modalsService.openKolPopup(item_r35)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 53)(7, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, MainListComponent_div_20_ng_container_15_ng_container_1_div_1_img_8_Template, 1, 2, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, MainListComponent_div_20_ng_container_15_ng_container_1_div_1_div_13_Template, 2, 2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](14, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](18, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](20, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](22, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](23, MainListComponent_div_20_ng_container_15_ng_container_1_div_1_div_23_Template, 2, 3, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](24, MainListComponent_div_20_ng_container_15_ng_container_1_div_1_div_24_Template, 5, 7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](25, MainListComponent_div_20_ng_container_15_ng_container_1_div_1_div_25_Template, 3, 2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    const index_r36 = ctx.index;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵattribute"]("src", item_r35.user.avatar || ctx_r34.profileImg, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"])("alt", item_r35.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r35.user.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind3"](9, 15, item_r35.rewards, 0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"]("", item_r35.rewards.length > 3 ? "+" : "", "", item_r35.rewards.length > 3 ? item_r35.rewards.length - 3 : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind3"](14, 19, item_r35.cakeboxes, 0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"](" ", item_r35.cakeboxes.length > 3 ? "+" : "", "", item_r35.cakeboxes.length > 3 ? item_r35.cakeboxes.length - 3 : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("src", ctx_r34.activityImg(index_r36), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("src", ctx_r34.rankImg(index_r36), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("src", ctx_r34.hypeImg(index_r36), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r34.notAllowedTabs(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](23, _c0, ctx_r34.tabsFromListEnum.Users)));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r34.notAllowedTabs(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](25, _c0, ctx_r34.tabsFromListEnum.Users)));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r34.notAllowedTabs(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](27, _c0, ctx_r34.tabsFromListEnum.Users)));
} }
function MainListComponent_div_20_ng_container_15_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, MainListComponent_div_20_ng_container_15_ng_container_1_div_1_Template, 26, 29, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r33.kolList);
} }
function MainListComponent_div_20_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, MainListComponent_div_20_ng_container_15_ng_container_1_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r31.waitingLoading)("ngIfElse", _r8);
} }
function MainListComponent_div_20_ng_container_16_ng_container_1_div_1_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MainListComponent_div_20_ng_container_16_ng_container_1_div_1_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r71); const item_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r69.modalsService.openRewardPopup(item_r66.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, " View in confectionary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function MainListComponent_div_20_ng_container_16_ng_container_1_div_1_button_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Not in confectionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function MainListComponent_div_20_ng_container_16_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 63)(1, "div", 37)(2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "div", 52)(13, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](17, MainListComponent_div_20_ng_container_16_ng_container_1_div_1_button_17_Template, 2, 0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](18, MainListComponent_div_20_ng_container_16_ng_container_1_div_1_button_18_Template, 2, 0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r66 = ctx.$implicit;
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵattribute"]("src", item_r66.image, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"])("alt", item_r66.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r66.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](8, 9, item_r66.rarity), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](11, 11, item_r66.category), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", ctx_r65.getCostColor(item_r66.cost));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](15, 13, item_r66.cost));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r66.isConfectionary);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !item_r66.isConfectionary);
} }
function MainListComponent_div_20_ng_container_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, MainListComponent_div_20_ng_container_16_ng_container_1_div_1_Template, 19, 15, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r64.rewardList);
} }
function MainListComponent_div_20_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, MainListComponent_div_20_ng_container_16_ng_container_1_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r32.waitingLoading)("ngIfElse", _r10);
} }
function MainListComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 35)(1, "div", 36)(2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, MainListComponent_div_20_div_4_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, MainListComponent_div_20_div_5_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, MainListComponent_div_20_div_6_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, MainListComponent_div_20_div_7_Template, 3, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, MainListComponent_div_20_div_8_Template, 3, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, MainListComponent_div_20_div_9_Template, 3, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, MainListComponent_div_20_div_10_Template, 3, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, MainListComponent_div_20_div_11_Template, 3, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, MainListComponent_div_20_div_12_Template, 3, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, MainListComponent_div_20_div_13_Template, 3, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](14, MainListComponent_div_20_div_14_Template, 2, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](15, MainListComponent_div_20_ng_container_15_Template, 2, 2, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](16, MainListComponent_div_20_ng_container_16_Template, 2, 2, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r4.getNameBasedOnTab(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r4.page === ctx_r4.mainListComponentsEnum.Rewards);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r4.page === ctx_r4.mainListComponentsEnum.Rewards);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r4.page === ctx_r4.mainListComponentsEnum.Rewards);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r4.page === ctx_r4.mainListComponentsEnum.Grab);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r4.page === ctx_r4.mainListComponentsEnum.Grab);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r4.page === ctx_r4.mainListComponentsEnum.Grab);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r4.page === ctx_r4.mainListComponentsEnum.Grab);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r4.page === ctx_r4.mainListComponentsEnum.Grab);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r4.notAllowedTabs(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](14, _c0, ctx_r4.tabsFromListEnum.Users)) && ctx_r4.page === ctx_r4.mainListComponentsEnum.Grab);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r4.notAllowedTabs(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](16, _c0, ctx_r4.tabsFromListEnum.Users)) && ctx_r4.page === ctx_r4.mainListComponentsEnum.Grab);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r4.notAllowedTabs(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](18, _c0, ctx_r4.tabsFromListEnum.Users)));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r4.page === ctx_r4.mainListComponentsEnum.Grab);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r4.page === ctx_r4.mainListComponentsEnum.Rewards);
} }
function MainListComponent_ng_container_25_ng_container_12_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 104)(1, "div", 105)(2, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "img", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 108)(5, "div", 109)(6, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](12, "mat-icon", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const reward_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵattribute"]("src", reward_r76.image, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"])("alt", reward_r76.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](8, 5, reward_r76.type.toLowerCase().replace("cake", "cak3")));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](reward_r76.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("cakeRewardsOptions", reward_r76);
} }
function MainListComponent_ng_container_25_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, MainListComponent_ng_container_25_ng_container_12_ng_container_1_div_2_Template, 13, 7, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r73.rewardList);
} }
function MainListComponent_ng_container_25_ng_container_12_ng_container_2_div_2_div_7_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MainListComponent_ng_container_25_ng_container_12_ng_container_2_div_2_div_7_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r84); const kol_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit; const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r82.follow(kol_r78.user.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, " Follow ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const kol_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", ctx_r80.userId === kol_r78.user.id);
} }
function MainListComponent_ng_container_25_ng_container_12_ng_container_2_div_2_div_7_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MainListComponent_ng_container_25_ng_container_12_ng_container_2_div_2_div_7_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r88); const kol_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit; const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r86.unfollow(kol_r78.user.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "Following");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4, "Unfollow");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](5, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const kol_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", ctx_r81.userId === kol_r78.user.id);
} }
function MainListComponent_ng_container_25_ng_container_12_ng_container_2_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, MainListComponent_ng_container_25_ng_container_12_ng_container_2_div_2_div_7_button_1_Template, 2, 1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, MainListComponent_ng_container_25_ng_container_12_ng_container_2_div_2_div_7_button_2_Template, 6, 1, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const kol_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !kol_r78.user.isFollow);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", kol_r78.user.isFollow);
} }
function MainListComponent_ng_container_25_ng_container_12_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 116)(1, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function MainListComponent_ng_container_25_ng_container_12_ng_container_2_div_2_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r92); const kol_r78 = restoredCtx.$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r91.modalsService.openKolPopup(kol_r78)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "img", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 119)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, MainListComponent_ng_container_25_ng_container_12_ng_container_2_div_2_div_7_Template, 3, 2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const kol_r78 = ctx.$implicit;
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵattribute"]("src", kol_r78.user.avatar || ctx_r77.profileImg, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"])("alt", kol_r78.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](kol_r78.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r77.notAllowedTabs(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](4, _c0, ctx_r77.tabsFromListEnum.Users)) && ctx_r77.userId !== kol_r78.user.id);
} }
function MainListComponent_ng_container_25_ng_container_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, MainListComponent_ng_container_25_ng_container_12_ng_container_2_div_2_Template, 8, 6, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r74.kolList);
} }
function MainListComponent_ng_container_25_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, MainListComponent_ng_container_25_ng_container_12_ng_container_1_Template, 3, 1, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, MainListComponent_ng_container_25_ng_container_12_ng_container_2_Template, 3, 1, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r72.page === ctx_r72.mainListComponentsEnum.Rewards);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r72.page === ctx_r72.mainListComponentsEnum.Grab);
} }
function MainListComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 99)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div", 9)(8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, "Sort by");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 10)(11, "cake-drop-down", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("chooseOption", function MainListComponent_ng_container_25_Template_cake_drop_down_chooseOption_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r93.sort($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, MainListComponent_ng_container_25_ng_container_12_Template, 3, 2, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "cake-pagination", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("pageChange", function MainListComponent_ng_container_25_Template_cake_pagination_pageChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r94); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r95.currentPage = $event); })("pageChange", function MainListComponent_ng_container_25_Template_cake_pagination_pageChange_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r94); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r96.getData()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](6, 7, ctx_r5.totalCount));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("options", ctx_r5.sortOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r5.waitingLoading)("ngIfElse", _r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("page", ctx_r5.currentPage)("pageSize", ctx_r5.pageSize)("count", ctx_r5.totalCount);
} }
function MainListComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 124)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, " Sorry, we couldn\u2019t find any matches for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r7.getQueryObj.search);
} }
function MainListComponent_ng_template_28_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainer"](0);
} }
function MainListComponent_ng_template_28_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainer"](0);
} }
function MainListComponent_ng_template_28_div_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainer"](0);
} }
const _c1 = function (a0) { return { "background-color": a0, height: "38px", width: "38px", "margin-left": "-15px" }; };
const _c2 = function (a0) { return { "background-color": a0, height: "38px", width: "38px", "margin-left": "-15px", "border-radius": "2px", transform: "rotate(45deg)" }; };
const _c3 = function (a0) { return { "background-color": a0, height: "40px", width: "40px", "border-radius": "2px", "margin-left": "8px" }; };
function MainListComponent_ng_template_28_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 126)(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, MainListComponent_ng_template_28_div_0_ng_container_2_Template, 1, 0, "ng-container", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "ngx-skeleton-loader", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "ngx-skeleton-loader", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, MainListComponent_ng_template_28_div_0_ng_container_8_Template, 1, 0, "ng-container", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](10, "ngx-skeleton-loader", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, MainListComponent_ng_template_28_div_0_ng_container_12_Template, 1, 0, "ng-container", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](33);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](35);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngTemplateOutlet", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](6, _c1, ctx_r97.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](8, _c2, ctx_r97.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngTemplateOutlet", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](10, _c3, ctx_r97.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngTemplateOutlet", _r16);
} }
function MainListComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, MainListComponent_ng_template_28_div_0_Template, 13, 12, "div", 125);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r9.getMockArray(5));
} }
function MainListComponent_ng_template_30_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainer"](0);
} }
function MainListComponent_ng_template_30_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainer"](0);
} }
function MainListComponent_ng_template_30_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainer"](0);
} }
function MainListComponent_ng_template_30_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainer"](0);
} }
function MainListComponent_ng_template_30_div_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainer"](0);
} }
function MainListComponent_ng_template_30_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 126)(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, MainListComponent_ng_template_30_div_0_ng_container_2_Template, 1, 0, "ng-container", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, MainListComponent_ng_template_30_div_0_ng_container_4_Template, 1, 0, "ng-container", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, MainListComponent_ng_template_30_div_0_ng_container_6_Template, 1, 0, "ng-container", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, MainListComponent_ng_template_30_div_0_ng_container_8_Template, 1, 0, "ng-container", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, MainListComponent_ng_template_30_div_0_ng_container_10_Template, 1, 0, "ng-container", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](33);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](35);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngTemplateOutlet", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngTemplateOutlet", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngTemplateOutlet", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngTemplateOutlet", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngTemplateOutlet", _r16);
} }
function MainListComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, MainListComponent_ng_template_30_div_0_Template, 11, 5, "div", 125);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r11.getMockArray(5));
} }
const _c4 = function (a0) { return { "background-color": a0, height: "64px", width: "64px" }; };
const _c5 = function (a0) { return { "background-color": a0, height: "17px", width: "100px", "border-radius": "2px", margin: "0 0 0 20px" }; };
function MainListComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ngx-skeleton-loader", 132)(1, "ngx-skeleton-loader", 133);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](2, _c4, ctx_r13.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](4, _c5, ctx_r13.activeTheme.properties["--skeleton-color"]));
} }
const _c6 = function (a0) { return { "background-color": a0, height: "22px", width: "50px", "border-radius": "2px" }; };
function MainListComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ngx-skeleton-loader", 133);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](1, _c6, ctx_r15.activeTheme.properties["--skeleton-color"]));
} }
const _c7 = function (a0) { return { "background-color": a0, height: "40px", width: "120px", "border-radius": "16px", "margin-left": "8px" }; };
function MainListComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ngx-skeleton-loader", 133);
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](1, _c7, ctx_r17.activeTheme.properties["--skeleton-color"]));
} }
const _c8 = function (a0) { return { "background-color": a0, height: "32px", width: "32px" }; };
const _c9 = function (a0) { return { "background-color": a0, height: "14px", width: "90px", margin: 0, "margin-top": "12px" }; };
const _c10 = function (a0) { return { "background-color": a0, height: "40px", width: "100px", "border-radius": "16px" }; };
function MainListComponent_ng_template_38_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 116)(1, "div", 135)(2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "ngx-skeleton-loader", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](5, "ngx-skeleton-loader", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](7, "ngx-skeleton-loader", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](3, _c8, ctx_r109.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](5, _c9, ctx_r109.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](7, _c10, ctx_r109.activeTheme.properties["--skeleton-color"]));
} }
function MainListComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, MainListComponent_ng_template_38_div_1_Template, 8, 9, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r19.getMockArray(5));
} }
class MainListComponent extends _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_10__.Watcher {
    constructor(route, router, apiService, searchService, authService, modalsService, themeService, rewardService) {
        super();
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.searchService = searchService;
        this.authService = authService;
        this.modalsService = modalsService;
        this.themeService = themeService;
        this.rewardService = rewardService;
        this.MOCK_FOLLOWERS = [123000, 1000, 500, 45000, 2500000];
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControl('');
        this.activeTab = _core_constants_tabs_from_list_enum__WEBPACK_IMPORTED_MODULE_3__.TabsFromListEnum.Kol;
        this.tabsFromListEnum = _core_constants_tabs_from_list_enum__WEBPACK_IMPORTED_MODULE_3__.TabsFromListEnum;
        this.mainListComponentsEnum = _core_constants_main_list_components_enum__WEBPACK_IMPORTED_MODULE_1__.MainListComponentsEnum;
        this.waitingLoading = true;
        this.where = '';
        this.sortValue = '';
        this.width = 0;
        this.currentPage = 1;
        this.pageSize = window.innerWidth <= 768 ? 10 : 5;
        this.rewardList = [];
        this.kolList = [];
        this.kolSortOptions = _core_constants_sorting_options__WEBPACK_IMPORTED_MODULE_2__.kolSortOptions;
        this.rewardsSortOptions = _core_constants_sorting_options__WEBPACK_IMPORTED_MODULE_2__.rewardsSortOptions;
        this.resize$ = new rxjs__WEBPACK_IMPORTED_MODULE_21__.BehaviorSubject(window.innerWidth);
        this.hasMatches = true;
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
    activityImg(index) {
        return `assets/icons/activity${(Math.floor(Math.random() * 5))}.svg`;
    }
    rankImg(index) {
        return `assets/icons/top${(Math.floor(Math.random() * 5))}.svg`;
    }
    hypeImg(index) {
        return `assets/icons/hype${(Math.floor(Math.random() * 5))}.svg`;
    }
    get activeTheme() {
        return this.themeService.active;
    }
    onResize() {
        if ((this.width !== window.innerWidth)) {
            this.width = window.innerWidth;
            this.resize$.next(window.innerWidth);
        }
    }
    getCostColor(value) {
        return this.themeService.getClassForColors(value);
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
        this.rewardService.toConfectionaryTrigger.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.takeUntil)(this.unsubscribe)).subscribe(() => {
            this.getData();
        });
    }
    ;
    resizeChecker() {
        this.resize$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_23__.debounceTime)(250)).subscribe(width => {
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
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.takeUntil)(this.unsubscribe), (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.debounceTime)(500))
            .subscribe(() => {
            this.currentPage = 1;
            this.getData();
        });
    }
    checkDataFromRouter() {
        this.route.data
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.takeUntil)(this.unsubscribe))
            .subscribe((resolved) => {
            this.page = resolved['page'];
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
        this.hasMatches = true;
        this.waitingLoading = true;
        if (this.page === _core_constants_main_list_components_enum__WEBPACK_IMPORTED_MODULE_1__.MainListComponentsEnum.Grab) {
            this.sortValue = this.sortValue || _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.SortUserEum.CreatedAt;
            this.apiService
                .getUsers(this.getQueryObj)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.takeUntil)(this.unsubscribe))
                .subscribe((res) => {
                this.hasMatches = !(!res.data.length && this.getQueryObj.search?.length);
                this.kolList = res.data;
                this.setPagination(res);
            });
        }
        else {
            this.sortValue = this.sortValue || _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.SortRewardEum.Cost;
            this.apiService
                .getRewards(this.getQueryObj)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.takeUntil)(this.unsubscribe))
                .subscribe((res) => {
                this.hasMatches = !(!res.data.length && this.getQueryObj.search?.length);
                this.rewardList = res.data;
                this.setPagination(res);
            });
        }
    }
    triggerTabs() {
        this.router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_24__.NavigationEnd) {
                this.activeTab = val.url.split('/')[val.url.split('/').length - 1];
                if (!Object.values(_core_constants_main_list_components_enum__WEBPACK_IMPORTED_MODULE_1__.MainListComponentsEnum).includes(this.activeTab)) {
                    this.where = this.activeTab;
                }
                this.currentPage = 1;
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
        this.apiService.follow(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.takeUntil)(this.unsubscribe)).subscribe(res => {
            this.kolList = this.kolList.map(kol => kol.user.id === id ? { ...kol, ...{ user: { ...kol.user, isFollow: true }, followers: kol.followers + 1 } } : kol);
        });
    }
    unfollow(id) {
        this.apiService.unfollow(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.takeUntil)(this.unsubscribe)).subscribe(res => {
            this.kolList = this.kolList.map(kol => kol.user.id === id ? { ...kol, ...{ user: { ...kol.user, isFollow: false }, followers: kol.followers - 1 } } : kol);
        });
    }
    ngOnDestroy() {
        //  this.urlService.unsubscribeObsv()
        super.ngOnDestroy();
    }
}
MainListComponent.ɵfac = function MainListComponent_Factory(t) { return new (t || MainListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_8__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_modals_service__WEBPACK_IMPORTED_MODULE_6__.ModalsService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_9__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_reward_service__WEBPACK_IMPORTED_MODULE_7__.RewardService)); };
MainListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({ type: MainListComponent, selectors: [["cake-main-list"]], hostBindings: function MainListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("resize", function MainListComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]], decls: 40, vars: 14, consts: [[1, "content"], [1, "desktop-container"], [1, "title"], ["loading", "lazy", "src", "assets/imgs/victory-hand-skin.png", "alt", "victory hand", 4, "ngIf"], ["loading", "lazy", "src", "assets/imgs/growing-heart.png", "alt", "heart", 4, "ngIf"], [1, "header-of-table"], [1, "header-flex", "max-content"], ["class", "tabs", 4, "ngIf"], [1, "last-content"], [1, "sort-block"], [1, "sort"], ["placeholder", "Select", 3, "options", "chooseOption"], [1, "search-block"], ["id", "search-input", "placeholder", "Search", 3, "control"], ["svgIcon", "search-outline"], ["class", "list-block max-content", 4, "ngIf", "ngIfElse"], [1, "max-content", 3, "page", "pageSize", "count", "pageChange"], [1, "plugin-download", "max-content"], [1, "mobile-container"], [4, "ngIf", "ngIfElse"], ["notFound", ""], ["skeletonKolDesktop", ""], ["skeletonRewardsDesktop", ""], ["avatarSkeleton", ""], ["textSkeleton", ""], ["btnSkeleton", ""], ["skeletonMobile", ""], ["loading", "lazy", "src", "assets/imgs/victory-hand-skin.png", "alt", "victory hand"], ["loading", "lazy", "src", "assets/imgs/growing-heart.png", "alt", "heart"], [1, "tabs"], ["routerLink", "/rewards/SLICE", "routerLinkActive", "active"], ["routerLink", "/rewards/CAKEBOX", "routerLinkActive", "active"], ["routerLink", "/rewards/TREND", "routerLinkActive", "active"], ["routerLink", "/grab-a-slice/KOL", "routerLinkActive", "active"], ["routerLink", "/grab-a-slice/USER", "routerLinkActive", "active"], [1, "list-block", "max-content"], [1, "row", "header"], [1, "col", "user"], ["class", "col rarity", 4, "ngIf"], ["class", "col category", 4, "ngIf"], ["class", "col latest-price", 4, "ngIf"], ["class", "col rewards", 4, "ngIf"], ["class", "col cakeboxes", 4, "ngIf"], ["class", "col activity", 4, "ngIf"], ["class", "col rank", 4, "ngIf"], ["class", "col hype", 4, "ngIf"], ["class", "col followers", 4, "ngIf"], ["class", "col platforms", 4, "ngIf"], ["class", "col", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "col", "rarity"], [1, "col", "category"], [1, "col", "latest-price"], [1, "col", "rewards"], ["loading", "lazy", "src", "assets/icons/question.svg", "alt", "", 1, "question-icon", 3, "cakeTooltip"], [1, "col", "cakeboxes"], [1, "col", "activity"], [1, "col", "rank"], [1, "col", "hype"], [1, "col", "followers"], [1, "col", "platforms"], [1, "col", 3, "ngClass"], ["class", "row list animation-hidden-skeleton", 4, "ngFor", "ngForOf"], [1, "row", "list", "animation-hidden-skeleton"], [1, "col", "user", 3, "click"], [1, "avatar"], ["loading", "lazy"], [1, "slices"], ["loading", "lazy", 3, "alt", 4, "ngFor", "ngForOf"], [1, "count"], ["class", "cakebox", 4, "ngFor", "ngForOf"], [1, "activity-img", 3, "src"], [1, "rank-img", 3, "src"], [1, "hype-img", 3, "src"], ["class", "col followers rankExample", 3, "innerHTML", 4, "ngIf"], ["class", "col follow", 4, "ngIf"], ["loading", "lazy", 3, "alt"], [1, "cakebox"], [3, "isSmall", "cakebox"], [1, "col", "followers", "rankExample", 3, "innerHTML"], ["class", "platform pointer", "target", "_blank", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "platform", "pointer"], ["loading", "lazy", "src", "assets/icons/popular-fire.png", "alt", "popular", "class", "popular", 4, "ngIf"], ["loading", "lazy", "alt", "", 1, "platform-icon", 3, "src"], ["loading", "lazy", "src", "assets/icons/popular-fire.png", "alt", "popular", 1, "popular"], [1, "col", "follow"], ["class", "button primary", 3, "disabled", "click", 4, "ngIf"], ["class", "button secondary unfollow with-icon", 3, "click", 4, "ngIf"], [1, "button", "primary", 3, "disabled", "click"], [1, "button", "secondary", "unfollow", "with-icon", 3, "click"], [1, "isFollow"], [1, "isUnfollow"], [1, "icon"], [3, "ngClass"], [1, "col", "confectionary"], ["class", "button primary", 3, "click", 4, "ngIf"], ["class", "button tertiary", "disabled", "", 4, "ngIf"], [1, "button", "primary", 3, "click"], ["disabled", "", 1, "button", "tertiary"], [1, "header"], [1, "total-count"], [3, "page", "pageSize", "count", "pageChange"], [1, "rewards-list", "animation-hidden-skeleton"], ["class", "reward-container", 4, "ngFor", "ngForOf"], [1, "reward-container"], [1, "reward-main-info"], [1, "reward-image"], ["loading", "lazy", 1, "small-image"], [1, "reward-detail"], [1, "reward-info"], [1, "reward-info-type"], [1, "reward-info-name"], [1, "reward-details-btn", "pointer", 3, "cakeRewardsOptions"], ["svgIcon", "details"], [1, "grab-list", "animation-hidden-skeleton"], ["class", "grab-container", 4, "ngFor", "ngForOf"], [1, "grab-container"], [1, "grab-main-info", 3, "click"], [1, "grab-image"], [1, "grab-name"], ["class", "subscribe-btn", 4, "ngIf"], [1, "subscribe-btn"], ["class", "button secondary unfollow with-icon", 3, "disabled", "click", 4, "ngIf"], [1, "button", "secondary", "unfollow", "with-icon", 3, "disabled", "click"], [1, "not-found-matches-block"], ["class", "row list", 4, "ngFor", "ngForOf"], [1, "row", "list"], [4, "ngTemplateOutlet"], ["count", "3", "appearance", "circle", "animation", "progress-dark", 3, "theme"], ["count", "3", "appearance", "line", "animation", "progress-dark", 3, "theme"], ["count", "5", "appearance", "line", "animation", "progress-dark", 3, "theme"], [1, "col", "latest-price", "rankExample"], ["count", "1", "appearance", "circle", "animation", "progress-dark", 3, "theme"], ["count", "1", "appearance", "line", "animation", "progress-dark", 3, "theme"], [1, "grab-list"], [1, "grab-main-info"]], template: function MainListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, MainListComponent_img_5_Template, 1, 0, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, MainListComponent_img_6_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, MainListComponent_div_9_Template, 7, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, MainListComponent_div_10_Template, 5, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Sort by");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "div", 10)(16, "cake-drop-down", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("chooseOption", function MainListComponent_Template_cake_drop_down_chooseOption_16_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "div", 12)(18, "cake-input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](19, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](20, MainListComponent_div_20_Template, 17, 20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "cake-pagination", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("pageChange", function MainListComponent_Template_cake_pagination_pageChange_21_listener($event) { return ctx.currentPage = $event; })("pageChange", function MainListComponent_Template_cake_pagination_pageChange_21_listener() { return ctx.getData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](23, "cake-download-plugin");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](25, MainListComponent_ng_container_25_Template, 14, 9, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](26, MainListComponent_ng_template_26_Template, 5, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](28, MainListComponent_ng_template_28_Template, 1, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](30, MainListComponent_ng_template_30_Template, 1, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](32, MainListComponent_ng_template_32_Template, 2, 6, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](34, MainListComponent_ng_template_34_Template, 1, 3, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](36, MainListComponent_ng_template_36_Template, 1, 3, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](38, MainListComponent_ng_template_38_Template, 2, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx.page === ctx.mainListComponentsEnum.Grab ? "Grab a slice!" : "Rewards", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.page === ctx.mainListComponentsEnum.Grab);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.page === ctx.mainListComponentsEnum.Rewards);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.page === ctx.mainListComponentsEnum.Rewards);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.page === ctx.mainListComponentsEnum.Grab);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("options", ctx.page === ctx.mainListComponentsEnum.Grab ? ctx.kolSortOptions : ctx.rewardsSortOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("control", ctx.searchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.hasMatches)("ngIfElse", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("page", ctx.currentPage)("pageSize", ctx.pageSize)("count", ctx.totalCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.hasMatches)("ngIfElse", _r6);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_27__.NgxSkeletonLoaderComponent, _shared_components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_11__.DropDownComponent, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_12__.InputComponent, _shared_components_download_plugin_download_plugin_component__WEBPACK_IMPORTED_MODULE_13__.DownloadPluginComponent, _shared_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__.TooltipDirective, _shared_directives_rewards_options_directive_directive__WEBPACK_IMPORTED_MODULE_15__.RewardsOptionsDirective, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__.PaginationComponent, _shared_components_cakebox_cakebox_component__WEBPACK_IMPORTED_MODULE_17__.CakeboxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_25__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_25__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_25__.TitleCasePipe, _core_pipes_followers_count_pipe__WEBPACK_IMPORTED_MODULE_18__.FollowersCountPipe], styles: [".content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.content[_ngcontent-%COMP%]   .not-found-matches-block[_ngcontent-%COMP%] {\n  height: calc(100vh - 300px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.content[_ngcontent-%COMP%]   .not-found-matches-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 26px;\n  color: var(--color-fonts-2);\n  text-align: center;\n}\n.content[_ngcontent-%COMP%]   .not-found-matches-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: var(--color-gradient-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n@media (max-width: 500px) {\n  .content[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  transform: translateY(-20px);\n  height: 66px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Santhony\";\n  font-weight: 100;\n  font-size: 56px;\n  margin: 0;\n  background-color: var(--color-gradient-left-3);\n  background-image: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n@media (max-width: 425px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n@media (max-width: 375px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 59px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%] {\n  padding: 0 64px;\n  width: calc(100% - 128px);\n  height: 88px;\n  background: var(--opacity-color);\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .header-flex[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 88px;\n}\n@media (max-width: 1024px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%] {\n    padding: 0 32px;\n    width: calc(100% - 64px);\n  }\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%] {\n    padding: 10px 32px;\n    flex-direction: column;\n  }\n}\n@media (max-width: 500px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%] {\n    padding: 10px;\n    width: calc(100% - 20px);\n  }\n}\n@media (max-width: 425px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%] {\n    height: 125px;\n  }\n}\n@media (max-width: 425px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%] {\n    justify-content: center;\n    height: 80px;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-family: \"Gilroy-400\";\n  font-size: 16px;\n  color: var(--color-fonts-2);\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n  margin-right: 24px;\n  position: relative;\n  padding-bottom: 8px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-gradient-name-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-name-left-1), var(--color-gradient-name-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::after, .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::after {\n  content: \"\";\n  width: 100%;\n  height: 2px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background: linear-gradient(var(--deg-gradient-1), var(--color-gradient-name-left-1), var(--color-gradient-name-right-1));\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .last-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .last-content[_ngcontent-%COMP%]   .sort-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 25px;\n  height: 40px;\n}\n@media (max-width: 500px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .last-content[_ngcontent-%COMP%]   .sort-block[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .last-content[_ngcontent-%COMP%]   .sort-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 16px;\n  color: var(--color-fonts-2);\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n  font-size: 12px;\n}\n@media (max-width: 500px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .last-content[_ngcontent-%COMP%]   .sort-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .last-content[_ngcontent-%COMP%]   .sort-block[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%] {\n  width: 165px;\n  margin-left: 16px;\n  height: 42px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .last-content[_ngcontent-%COMP%]   .search-block[_ngcontent-%COMP%] {\n  width: 245px;\n  height: 42px;\n}\n@media (max-width: 500px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .header-of-table[_ngcontent-%COMP%]   .last-content[_ngcontent-%COMP%]   .search-block[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%] {\n  padding: 0 64px;\n  width: calc(100% - 128px);\n  margin-top: 20px;\n}\n@media (max-width: 1024px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%] {\n    padding: 0 32px;\n    width: calc(100% - 64px);\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid var(--border-list-color);\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .question-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.user[_ngcontent-%COMP%] {\n  width: 18%;\n}\n@media (max-width: 1280px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.user[_ngcontent-%COMP%] {\n    width: 17%;\n  }\n}\n@media (max-width: 1150px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.user[_ngcontent-%COMP%] {\n    width: 14%;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%] {\n  width: 37px;\n  height: 37px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.rarity[_ngcontent-%COMP%] {\n  width: 15%;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.category[_ngcontent-%COMP%] {\n  width: 15%;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.latest-price[_ngcontent-%COMP%] {\n  width: 10%;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.confectionary[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.rewards[_ngcontent-%COMP%] {\n  width: 12%;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.cakeboxes[_ngcontent-%COMP%] {\n  width: 11%;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.activity[_ngcontent-%COMP%] {\n  width: 8%;\n}\n@media (max-width: 1150px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.activity[_ngcontent-%COMP%]   .activity-img[_ngcontent-%COMP%] {\n    width: 85%;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.rank[_ngcontent-%COMP%] {\n  width: 9%;\n}\n@media (max-width: 1200px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.rank[_ngcontent-%COMP%] {\n    width: 7%;\n  }\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.rank[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 73px;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.hype[_ngcontent-%COMP%] {\n  width: 6%;\n}\n@media (max-width: 1150px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.hype[_ngcontent-%COMP%]   .hype-img[_ngcontent-%COMP%] {\n    width: 78%;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.followers[_ngcontent-%COMP%] {\n  width: 8%;\n  text-align: center;\n  margin-right: 1%;\n}\n@media (max-width: 1150px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.followers[_ngcontent-%COMP%] {\n    width: 8%;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.platforms[_ngcontent-%COMP%] {\n  width: 22%;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.follow[_ngcontent-%COMP%] {\n  width: 9%;\n}\n@media (max-width: 1200px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.follow[_ngcontent-%COMP%] {\n    width: 9%;\n  }\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.follow[_ngcontent-%COMP%] {\n    width: 15%;\n  }\n}\n@media (max-width: 500px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.follow[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 16px;\n  color: var(--color-fonts-list-head);\n}\n@media (max-width: 1150px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 14px;\n  background-color: var(--color-gradient-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.user[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50px;\n  background: linear-gradient(var(--deg--profile-image), var(--profile-image-bg-color-left), var(--profile-image-bg-color-right));\n  position: relative;\n  margin-right: 20px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.user[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  width: 56px;\n  height: 56px;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.user[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-600\";\n  font-size: 14px;\n  color: var(--color-fonts-2);\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@media (max-width: 1280px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.user[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.rarity[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-600\";\n  font-size: 14px;\n  color: var(--color-fonts-2);\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.category[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-600\";\n  font-size: 14px;\n  color: var(--color-fonts-2);\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.latest-price[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-500\";\n  font-size: 18px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.rewards[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.rewards[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%] {\n  position: relative;\n  width: 82px;\n  height: 36px;\n  margin-right: 15px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.rewards[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  position: absolute;\n  width: 36px;\n  height: 36px;\n  border-radius: 50px;\n  border: 1px solid rgba(0, 0, 0, 0.16);\n  filter: drop-shadow(-2px 0px 4px rgba(0, 0, 0, 0.16));\n}\n@media (max-width: 1150px) {\n  .content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.rewards[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n  }\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.rewards[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(1) {\n  left: 0;\n  z-index: 0;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.rewards[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(2) {\n  left: 23px;\n  z-index: 1;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.rewards[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(3) {\n  left: 46px;\n  z-index: 2;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.followers[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-500\";\n  font-size: 18px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.cakeboxes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(1) {\n  left: 0;\n  z-index: 0;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(2) {\n  left: 34px;\n  z-index: 1;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.cakeboxes[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%]:nth-of-type(3) {\n  left: 68px;\n  z-index: 2;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.platforms[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.platforms[_ngcontent-%COMP%]   .platform[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-platform-color);\n  border-radius: 6px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  background: var(--bg-platform-color);\n  margin-right: 8px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.platforms[_ngcontent-%COMP%]   .platform[_ngcontent-%COMP%]   .popular[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  object-fit: contain;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.platforms[_ngcontent-%COMP%]   .platform[_ngcontent-%COMP%]   .platform-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.follow[_ngcontent-%COMP%] {\n  position: relative;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.follow[_ngcontent-%COMP%]   .isUnfollow[_ngcontent-%COMP%] {\n  display: none;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.follow[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: -10px;\n  z-index: 1;\n  top: -8px;\n  background-image: url('checkbox.svg');\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.follow[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  background-image: url('unfollow.svg');\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.follow[_ngcontent-%COMP%]:hover   .isUnfollow[_ngcontent-%COMP%] {\n  display: block;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .col.follow[_ngcontent-%COMP%]:hover   .isFollow[_ngcontent-%COMP%] {\n  display: none;\n}\n.content[_ngcontent-%COMP%]   .desktop-container[_ngcontent-%COMP%]   .plugin-download[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  margin-left: 64px;\n  margin-right: 64px;\n  width: calc(100% - 64px - 64px);\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin-top: -30px;\n}\n@media (min-width: 769px) {\n  .content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: calc(100% - 32px);\n  justify-content: space-between;\n  height: 56px;\n  margin-left: 16px;\n  border-bottom: 1px solid var(--border-list-color);\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-fonts-2);\n  font-size: 20px;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: var(--color-gradient-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .sort-block[_ngcontent-%COMP%] {\n  align-items: center;\n  display: inherit;\n  justify-content: space-between;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .sort-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 16px;\n  color: var(--color-fonts-2);\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n  font-size: 12px;\n  display: inline;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .sort-block[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%] {\n  width: 151px;\n  margin-left: 16px;\n  height: 40px;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%] {\n  width: calc(100% - 32px);\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%] {\n  margin: 0 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 52px;\n  width: 100%;\n  border-bottom: 1px solid var(--border-list-color);\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-main-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-main-info[_ngcontent-%COMP%]   .reward-image[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  width: 32px;\n  height: 32px;\n  display: inline;\n  border: 1px solid var(--color-border-profile-image);\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-main-info[_ngcontent-%COMP%]   .reward-image[_ngcontent-%COMP%]   .small-image[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n  border-radius: 32px;\n  object-fit: cover;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-main-info[_ngcontent-%COMP%]   .reward-detail[_ngcontent-%COMP%] {\n  display: inline;\n  justify-content: center;\n  margin-left: 8px;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-main-info[_ngcontent-%COMP%]   .reward-detail[_ngcontent-%COMP%]   .reward-info[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-main-info[_ngcontent-%COMP%]   .reward-detail[_ngcontent-%COMP%]   .reward-info-type[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--color-fonts-list-head);\n  margin: 0;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-main-info[_ngcontent-%COMP%]   .reward-detail[_ngcontent-%COMP%]   .reward-info-name[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 16px;\n  line-height: 22px;\n  color: var(--color-tooltip-text);\n  margin: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n@media (max-width: 374px) {\n  .content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-main-info[_ngcontent-%COMP%]   .reward-detail[_ngcontent-%COMP%]   .reward-info-name[_ngcontent-%COMP%] {\n    max-width: 214px;\n  }\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-details-btn[_ngcontent-%COMP%] {\n  margin-right: 9px;\n  width: 44px !important;\n  height: 44px !important;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-details-btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .rewards-list[_ngcontent-%COMP%]   .reward-container[_ngcontent-%COMP%]   .reward-details-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]     svg path path {\n  stroke: gradient-linear-bg(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%] {\n  width: calc(100% - 32px);\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%] {\n  margin: 0 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 52px;\n  width: 100%;\n  border-bottom: 1px solid var(--border-list-color);\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .grab-main-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .grab-main-info[_ngcontent-%COMP%]   .grab-image[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: inline;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .grab-main-info[_ngcontent-%COMP%]   .grab-image[_ngcontent-%COMP%]   .small-image[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n  border-radius: 32px;\n  object-fit: cover;\n  border: 1px solid var(--color-border-profile-image);\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .grab-main-info[_ngcontent-%COMP%]   .grab-image[_ngcontent-%COMP%]   .small-image[alt][_ngcontent-%COMP%] {\n  font-size: 8px;\n  color: var(--color-fonts-list-head);\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .grab-main-info[_ngcontent-%COMP%]   .grab-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .grab-main-info[_ngcontent-%COMP%]   .grab-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--color-fonts-list-head);\n  margin: 0;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .subscribe-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 100px;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .subscribe-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: -10px;\n  z-index: 1;\n  top: -8px;\n  background-image: url('checkbox.svg');\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .subscribe-btn[_ngcontent-%COMP%]   .isUnfollow[_ngcontent-%COMP%] {\n  display: none;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .subscribe-btn[_ngcontent-%COMP%]   .isFollow[_ngcontent-%COMP%] {\n  display: block;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .subscribe-btn[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  background-image: url('unfollow.svg');\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .subscribe-btn[_ngcontent-%COMP%]:hover   .isUnfollow[_ngcontent-%COMP%] {\n  display: block;\n}\n.content[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .grab-list[_ngcontent-%COMP%]   .grab-container[_ngcontent-%COMP%]   .subscribe-btn[_ngcontent-%COMP%]:hover   .isFollow[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBTEQ7QUFPRTtFQUNFLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU9JO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUxOO0FBT007RUNzQ0osOENEbkNRO0VDb0NSLHFIQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FEMUNGO0FBVUM7RUEzQkQ7SUE0QkUsZ0JBQUE7RUFQQTtBQUNGO0FBU0M7RUFDQyxXQUFBO0FBUEY7QUFRRTtFQUZEO0lBR0UsYUFBQTtFQUxEO0FBQ0Y7QUFNRTtFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQUpIO0FBTUc7RUFDQyx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUNPRiw4Q0ROdUQ7RUNPdkQscUhBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QURWRjtBQUVJO0VBUEQ7SUFRRSxlQUFBO0VBQ0g7QUFDRjtBQUFJO0VBVkQ7SUFXRSxlQUFBO0VBR0g7QUFDRjtBQUFHO0VBQ0MsV0FBQTtBQUVKO0FBRUU7RUFDQyxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFBSDtBQUVHO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUFKO0FBR0c7RUFkRDtJQWVFLGVBQUE7SUFDQSx3QkFBQTtFQUFGO0FBQ0Y7QUFFRztFQW5CRDtJQW9CRSxrQkFBQTtJQUNBLHNCQUFBO0VBQ0Y7QUFDRjtBQUNHO0VBeEJEO0lBeUJFLGFBQUE7SUFDQSx3QkFBQTtFQUVGO0FBQ0Y7QUFBRztFQTdCRDtJQThCRSxhQUFBO0VBR0Y7QUFDRjtBQURJO0VBREQ7SUFFRSx1QkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VBSUg7QUFDRjtBQUZJO0VBQ0MscUJBQUE7RUNkSCx5QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFRFdHLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVNMO0FBUEs7RUN6REgsbUREMkR5RDtFQzFEekQsK0hBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QURtRUY7QUFUSztFQUVDLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUNyR0oseUhBQUE7QURnSEY7QUFMRztFQUNDLGFBQUE7RUFDQSxtQkFBQTtBQU9KO0FBTEk7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFPTDtBQUxLO0VBTkQ7SUFPRSxVQUFBO0VBUUo7QUFDRjtBQVBLO0VDbkRILHlCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VEZ0RJLGVBQUE7QUFjTjtBQWJNO0VBSEQ7SUFJRSxhQUFBO0VBZ0JMO0FBQ0Y7QUFiSztFQUNDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFlTjtBQVhJO0VBQ0MsWUFBQTtFQUNBLFlBQUE7QUFhTDtBQVpLO0VBSEQ7SUFJRSxVQUFBO0VBZUo7QUFDRjtBQVZFO0VBQ0MsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFZSDtBQVhHO0VBSkQ7SUFLRSxlQUFBO0lBQ0Esd0JBQUE7RUFjRjtBQUNGO0FBYkc7RUFDQyxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpREFBQTtBQWVKO0FBWks7RUFDQyxlQUFBO0FBY047QUFYSztFQUNDLFVBQUE7QUFhTjtBQVhNO0VBSEQ7SUFJRSxVQUFBO0VBY0w7QUFDRjtBQVpNO0VBUEQ7SUFRRSxVQUFBO0VBZUw7QUFDRjtBQWJLO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUFlTjtBQVpLO0VBQ0MsVUFBQTtBQWNOO0FBWEs7RUFDQyxVQUFBO0FBYU47QUFWSztFQUNDLFVBQUE7QUFZTjtBQVRLO0VBQ0MsVUFBQTtBQVdOO0FBUks7RUFDQyxVQUFBO0FBVU47QUFQSztFQUNDLFVBQUE7QUFTTjtBQU5LO0VBQ0MsU0FBQTtBQVFOO0FBTk07RUFDQztJQUNDLFVBQUE7RUFRTjtBQUNGO0FBSks7RUFDQyxTQUFBO0FBTU47QUFKTTtFQUhEO0lBSUUsU0FBQTtFQU9MO0VBTks7SUFDQyxlQUFBO0VBUU47QUFDRjtBQUpLO0VBQ0MsU0FBQTtBQU1OO0FBSk07RUFDQztJQUNDLFVBQUE7RUFNTjtBQUNGO0FBRks7RUFDQyxTQUFBO0VBQ0Esa0JBQUE7RUFDTSxnQkFBQTtBQUlaO0FBRk07RUFMRDtJQU1FLFNBQUE7RUFLTDtBQUNGO0FBRks7RUFDQyxVQUFBO0FBSU47QUFFSztFQUNDLFNBQUE7QUFBTjtBQUNNO0VBRkQ7SUFHRSxTQUFBO0VBRUw7QUFDRjtBQURNO0VBTEQ7SUFNRSxVQUFBO0VBSUw7QUFDRjtBQUhNO0VBUkQ7SUFTRSxVQUFBO0VBTUw7QUFDRjtBQURLO0VBQ0MseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUFHTjtBQURNO0VBTEQ7SUFNRSxlQUFBO0VBSUw7QUFDRjtBQUtNO0VBQ0MseUJBQUE7RUFDQSxlQUFBO0VDOVBMLDhDRCtQMEQ7RUM5UDFELHFIQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FENFBGO0FBQ007RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ1A7QUFBTztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUN4U04sK0hBQUE7RUQ4U00sa0JBQUE7RUFDQSxrQkFBQTtBQUZSO0FBSVE7RUFDQyxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUFGVDtBQU1PO0VDdE9MLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEbU9GO0FBQ1E7RUFIRDtJQUlFLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtFQUVQO0FBQ0Y7QUFFTTtFQ2pQSix5QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRGtQRjtBQUZNO0VDclBKLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEMFBGO0FBTk07RUFDQyx5QkFBQTtFQUNBLGVBQUE7QUFRUDtBQUxNO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FBT1A7QUFMTztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQU9SO0FBTFE7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EscURBQUE7QUFPVDtBQUpTO0VBVkQ7SUFXRSxXQUFBO0lBQ0EsWUFBQTtFQU9SO0FBQ0Y7QUFMUztFQUNDLE9BQUE7RUFDQSxVQUFBO0FBT1Y7QUFMUztFQUNDLFVBQUE7RUFDQSxVQUFBO0FBT1Y7QUFMUztFQUNDLFVBQUE7RUFDQSxVQUFBO0FBT1Y7QUFETTtFQUNDLHlCQUFBO0VBQ0EsZUFBQTtBQUdQO0FBRE07RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUdQO0FBRE87RUFDQyxrQkFBQTtBQUdSO0FBRFE7RUFDQyxPQUFBO0VBQ0EsVUFBQTtBQUdUO0FBRFE7RUFDQyxVQUFBO0VBQ0EsVUFBQTtBQUdUO0FBRFE7RUFDQyxVQUFBO0VBQ0EsVUFBQTtBQUdUO0FBRU07RUFDQyxhQUFBO0VBQ0EsbUJBQUE7QUFBUDtBQUVPO0VBQ0MsOENBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0FBQVI7QUFFUTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQVQ7QUFHUTtFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtBQURUO0FBTU07RUFDQyxrQkFBQTtBQUpQO0FBTU87RUFDQyxhQUFBO0FBSlI7QUFPTztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtBQUxSO0FBU1E7RUFDQyxxQ0FBQTtBQVBUO0FBVVE7RUFDQyxjQUFBO0FBUlQ7QUFXUTtFQUNDLGFBQUE7QUFUVDtBQWtCRTtFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBaEJIO0FBb0JDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWxCRjtBQW1CRTtFQUpEO0lBS0UsYUFBQTtFQWhCRDtBQUNGO0FBa0JFO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQTZCQSxpREFBQTtBQTVDSDtBQWlCRztFQUNDLDJCQUFBO0VBQ0ksZUFBQTtBQWZSO0FBaUJJO0VBQ0MsU0FBQTtFQ3pkSCw4Q0QwZHdEO0VDemR4RCxxSEFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBRDJjRjtBQWVHO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBYko7QUFlSTtFQzliRix5QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFRDJiRyxlQUFBO0VBQ0EsZUFBQTtBQVJMO0FBV0k7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBVEw7QUFlRTtFQUNDLHdCQUFBO0FBYkg7QUFlRztFQUNDLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaURBQUE7QUFiSjtBQWNJO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FBWkw7QUFhSztFQUNDLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbURBQUE7QUFYTjtBQVlNO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBVlA7QUFjSztFQUNDLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBWk47QUFhTTtFQUNDLGdCQUFBO0FBWFA7QUFhTztFQS9rQk4seUJBQUE7RUFpbEJPLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsU0FBQTtBQVhSO0FBYU87RUF0bEJOLHlCQUFBO0VBd2xCTyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFYUjtBQWFRO0VBVkQ7SUFXRSxnQkFBQTtFQVZQO0FBQ0Y7QUFlSTtFQUNDLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBYkw7QUFlSztFQUNDLGVBQUE7QUFiTjtBQW1CUTtFQUNDLDhHQUFBO0FBakJUO0FBMEJFO0VBQ0Msd0JBQUE7QUF4Qkg7QUEwQkc7RUFDQyxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlEQUFBO0FBeEJKO0FBMEJJO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FBeEJMO0FBMEJLO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBeEJOO0FBMEJNO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbURBQUE7QUF4QlA7QUF5Qk87RUFDQyxjQUFBO0VBQ0EsbUNBQUE7QUF2QlI7QUE0Qks7RUFDQyxnQkFBQTtBQTFCTjtBQTRCTTtFQXJxQkwseUJBQUE7RUF1cUJNLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsU0FBQTtBQTFCUDtBQStCSTtFQUNDLFlBQUE7RUFDQSxZQUFBO0FBN0JMO0FBK0JLO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0FBN0JOO0FBZ0NLO0VBQ0MsYUFBQTtBQTlCTjtBQWlDSztFQUNDLGNBQUE7QUEvQk47QUFtQ007RUFDQyxxQ0FBQTtBQWpDUDtBQW9DTTtFQUNDLGNBQUE7QUFsQ1A7QUFxQ007RUFDQyxhQUFBO0FBbkNQIiwiZmlsZSI6Im1haW4tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9taXhpbnNcIjtcblxuQG1peGluIGZvbnQtZmFtaWx5IHtcblx0Zm9udC1mYW1pbHk6IFwiR2lscm95LTQwMFwiO1xufVxuXG4uY29udGVudCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLm5vdC1mb3VuZC1tYXRjaGVzLWJsb2NrIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaDEge1xuICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNDAwJztcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KFxuICAgICAgICAgIHZhcigtLWRlZy1ncmFkaWVudC0xKSxcbiAgICAgICAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTEpLFxuICAgICAgICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTEpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblx0QG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG5cdFx0bWFyZ2luLXRvcDogNTBweDtcblx0fVxuXG5cdC5kZXNrdG9wLWNvbnRhaW5lciB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdH1cblx0XHQudGl0bGUge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcblx0XHRcdGhlaWdodDogNjZweDtcblxuXHRcdFx0aDEge1xuXHRcdFx0XHRmb250LWZhbWlseTogXCJTYW50aG9ueVwiO1xuXHRcdFx0XHRmb250LXdlaWdodDogMTAwO1xuXHRcdFx0XHRmb250LXNpemU6IDU2cHg7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0QGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLXRleHQodmFyKC0tZGVnLWdyYWRpZW50LTMpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTMpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0zKSk7XG5cblx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiA0MHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMzVweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpbWcge1xuXHRcdFx0XHR3aWR0aDogNTlweDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQuaGVhZGVyLW9mLXRhYmxlIHtcblx0XHRcdHBhZGRpbmc6IDAgNjRweDtcblx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAxMjhweCk7XG5cdFx0XHRoZWlnaHQ6IDg4cHg7XG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1vcGFjaXR5LWNvbG9yKTtcblxuXHRcdFx0LmhlYWRlci1mbGV4IHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0aGVpZ2h0OiA4OHB4O1xuXHRcdFx0fVxuXG5cdFx0XHRAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cdFx0XHRcdHBhZGRpbmc6IDAgMzJweDtcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDY0cHgpO1xuXHRcdFx0fVxuXG5cdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0XHRcdFx0cGFkZGluZzogMTBweCAzMnB4O1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0fVxuXG5cdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcblx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuXHRcdFx0fVxuXG5cdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcblx0XHRcdFx0aGVpZ2h0OiAxMjVweDtcblx0XHRcdH1cblx0XHRcdC50YWJzIHtcblx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0aGVpZ2h0OiA4MHB4O1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhIHtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0QGluY2x1ZGUgR2lscm95LTQwMC0xNi1mb250cy0yO1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMjRweDtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDhweDtcblxuXHRcdFx0XHRcdCYuYWN0aXZlLFxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0QGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLXRleHQodmFyKC0tZGVnLWdyYWRpZW50LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1uYW1lLWxlZnQtMSksIHZhcigtLWNvbG9yLWdyYWRpZW50LW5hbWUtcmlnaHQtMSkpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCYuYWN0aXZlOjphZnRlcixcblx0XHRcdFx0XHQmOmhvdmVyOjphZnRlciB7XG5cdFx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDJweDtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItYmcodmFyKC0tZGVnLWdyYWRpZW50LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1uYW1lLWxlZnQtMSksIHZhcigtLWNvbG9yLWdyYWRpZW50LW5hbWUtcmlnaHQtMSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQubGFzdC1jb250ZW50IHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdFx0XHQuc29ydC1ibG9jayB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMjVweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDQwcHg7XG5cblx0XHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcblx0XHRcdFx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRcdEBpbmNsdWRlIEdpbHJveS00MDAtMTYtZm9udHMtMjtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5zb3J0IHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxNjVweDtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxNnB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA0MnB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5zZWFyY2gtYmxvY2sge1xuXHRcdFx0XHRcdHdpZHRoOiAyNDVweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDQycHg7XG5cdFx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5saXN0LWJsb2NrIHtcblx0XHRcdHBhZGRpbmc6IDAgNjRweDtcblx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAxMjhweCk7XG5cdFx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuXHRcdFx0XHRwYWRkaW5nOiAwIDMycHg7XG5cdFx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSA2NHB4KTtcblx0XHRcdH1cblx0XHRcdC5yb3cge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0cGFkZGluZzogMTJweCAwO1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpc3QtY29sb3IpO1xuXG5cdFx0XHRcdC5jb2wge1xuXHRcdFx0XHRcdC5xdWVzdGlvbi1pY29uIHtcblx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmLnVzZXIge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDE4JTtcblxuXHRcdFx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTclO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly9zcGVjaWFsIGZvciBtZWRpYVxuXHRcdFx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCkge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTQlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuY2FrZWJveCB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMzdweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMzdweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmLnJhcml0eSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTUlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCYuY2F0ZWdvcnkge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDE1JTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmLmxhdGVzdC1wcmljZSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCYuY29uZmVjdGlvbmFyeSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMzAlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCYucmV3YXJkcyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTIlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCYuY2FrZWJveGVzIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMSU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ji5hY3Rpdml0eSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogOCU7XG5cdFx0XHRcdFx0XHQvL3NwZWNpYWwgZm9yIG1lZGlhXG5cdFx0XHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogMTE1MHB4KSB7XG5cdFx0XHRcdFx0XHRcdC5hY3Rpdml0eS1pbWcge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA4NSU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmLnJhbmsge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDklO1xuXHRcdFx0XHRcdFx0Ly9zcGVjaWFsIGZvciBtZWRpYVxuXHRcdFx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNyU7XG5cdFx0XHRcdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiA3M3B4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ji5oeXBlIHtcblx0XHRcdFx0XHRcdHdpZHRoOiA2JTtcblx0XHRcdFx0XHRcdC8vc3BlY2lhbCBmb3IgbWVkaWFcblx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHgpIHtcblx0XHRcdFx0XHRcdFx0Lmh5cGUtaW1nIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogNzglO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ji5mb2xsb3dlcnMge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDglO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcblx0XHRcdFx0XHRcdC8vc3BlY2lhbCBmb3IgbWVkaWFcblx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHgpIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDglO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCYucGxhdGZvcm1zIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAyMiU7XG5cdFx0XHRcdFx0XHQvLyBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cdFx0XHRcdFx0XHQvLyAgIHdpZHRoOiAyMSU7XG5cdFx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ji5mb2xsb3cge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDklO1xuXHRcdFx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogOSU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDE1JTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMzUlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYuaGVhZGVyIHtcblx0XHRcdFx0XHRkaXYge1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiR2lscm95LTQwMFwiO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLWxpc3QtaGVhZCk7XG5cdFx0XHRcdFx0XHQvL3NwZWNpYWwgZm9yIG1lZGlhXG5cdFx0XHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogMTE1MHB4KSB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQubG9hZGVyLWxpc3Qge1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji5saXN0IHtcblx0XHRcdFx0XHQuY29sIHtcblx0XHRcdFx0XHRcdC5jb3VudCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkdpbHJveS00MDBcIjtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dCh2YXIoLS1kZWctZ3JhZGllbnQtMSksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMSksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTEpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCYudXNlciB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdFx0LmF2YXRhciB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDY0cHg7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA2NHB4O1xuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRcdFx0XHRcdFx0QGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLWJnKFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyKC0tZGVnLS1wcm9maWxlLWltYWdlKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhcigtLXByb2ZpbGUtaW1hZ2UtYmctY29sb3ItbGVmdCksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIoLS1wcm9maWxlLWltYWdlLWJnLWNvbG9yLXJpZ2h0KVxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMjBweDtcblxuXHRcdFx0XHRcdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDU2cHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDU2cHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdFx0XHRcdGxlZnQ6IDUwJTtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRoMiB7XG5cdFx0XHRcdFx0XHRcdFx0QGluY2x1ZGUgR2lscm95LTYwMC0xNC1mb250cy0yO1xuXG5cdFx0XHRcdFx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ji5yYXJpdHkge1xuXHRcdFx0XHRcdFx0XHRAaW5jbHVkZSBHaWxyb3ktNjAwLTE0LWZvbnRzLTI7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCYuY2F0ZWdvcnkge1xuXHRcdFx0XHRcdFx0XHRAaW5jbHVkZSBHaWxyb3ktNjAwLTE0LWZvbnRzLTI7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCYubGF0ZXN0LXByaWNlIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiR2lscm95LTUwMFwiO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCYucmV3YXJkcyB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0XHRcdFx0XHRcdFx0LnNsaWNlcyB7XG5cdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA4MnB4O1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMzZweDtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cblx0XHRcdFx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMzZweDtcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMzZweDtcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygtMnB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE2KSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vc3BlY2lhbCBmb3IgbWVkaWFcblx0XHRcdFx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHgpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDMwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMzBweDtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0JjpudGgtb2YtdHlwZSgxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHotaW5kZXg6IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHQmOm50aC1vZi10eXBlKDIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGVmdDogMjNweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ei1pbmRleDogMTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdCY6bnRoLW9mLXR5cGUoMykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsZWZ0OiA0NnB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR6LWluZGV4OiAyO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmLmZvbGxvd2VycyB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkdpbHJveS01MDBcIjtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ji5jYWtlYm94ZXMge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHRcdFx0XHRcdFx0LmNha2Vib3gge1xuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuXHRcdFx0XHRcdFx0XHRcdCY6bnRoLW9mLXR5cGUoMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdFx0XHRcdHotaW5kZXg6IDA7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdCY6bnRoLW9mLXR5cGUoMikge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGVmdDogMzRweDtcblx0XHRcdFx0XHRcdFx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdCY6bnRoLW9mLXR5cGUoMykge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGVmdDogNjhweDtcblx0XHRcdFx0XHRcdFx0XHRcdHotaW5kZXg6IDI7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCYucGxhdGZvcm1zIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdFx0XHRcdFx0XHQucGxhdGZvcm0ge1xuXHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1wbGF0Zm9ybS1jb2xvcik7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogNDBweDtcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tYmctcGxhdGZvcm0tY29sb3IpO1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogOHB4O1xuXG5cdFx0XHRcdFx0XHRcdFx0LnBvcHVsYXIge1xuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDE0cHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDE0cHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb250YWluO1xuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRcdFx0dG9wOiAtNXB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0bGVmdDogLTVweDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQucGxhdGZvcm0taWNvbiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRsZWZ0OiA1MCU7XG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6IDUwJTtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmLmZvbGxvdyB7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXHRcdFx0XHRcdFx0XHQuaXNVbmZvbGxvdyB7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC5pY29uIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMjRweDtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDI0cHg7XG5cdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRcdHJpZ2h0OiAtMTBweDtcblx0XHRcdFx0XHRcdFx0XHR6LWluZGV4OiAxO1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogLThweDtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWNvbnMvY2hlY2tib3guc3ZnXCIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdFx0Lmljb24ge1xuXHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ljb25zL3VuZm9sbG93LnN2Z1wiKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQuaXNVbmZvbGxvdyB7XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQuaXNGb2xsb3cge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQucGx1Z2luLWRvd25sb2FkIHtcblx0XHRcdG1hcmdpbi10b3A6IDcwcHg7XG5cdFx0XHRtYXJnaW4tbGVmdDogNjRweDtcblx0XHRcdG1hcmdpbi1yaWdodDogNjRweDtcblx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSA2NHB4IC0gNjRweCk7XG5cdFx0fVxuXHR9XG5cblx0Lm1vYmlsZS1jb250YWluZXIge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRtYXJnaW4tdG9wOiAtMzBweDtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcblx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0fVxuXG5cdFx0LmhlYWRlciB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdGhlaWdodDogNTZweDtcblx0XHRcdG1hcmdpbi1sZWZ0OiAxNnB4O1xuXG5cdFx0XHRzcGFuIHtcblx0XHRcdFx0Y29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG5cblx0XHRcdFx0LnRvdGFsLWNvdW50IHtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0QGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLXRleHQodmFyKC0tZGVnLWdyYWRpZW50LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0xKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnNvcnQtYmxvY2sge1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRkaXNwbGF5OiBpbmhlcml0O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cblx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdEBpbmNsdWRlIEdpbHJveS00MDAtMTYtZm9udHMtMjtcblx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnNvcnQge1xuXHRcdFx0XHRcdHdpZHRoOiAxNTFweDtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTZweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlzdC1jb2xvcik7XG5cdFx0fVxuXG5cdFx0LnJld2FyZHMtbGlzdCB7XG5cdFx0XHR3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XG5cblx0XHRcdC5yZXdhcmQtY29udGFpbmVyIHtcblx0XHRcdFx0bWFyZ2luOiAwIDE2cHg7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0aGVpZ2h0OiA1MnB4O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saXN0LWNvbG9yKTtcblx0XHRcdFx0LnJld2FyZC1tYWluLWluZm8ge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHQucmV3YXJkLWltYWdlIHtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMzJweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMzJweDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZTtcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlci1wcm9maWxlLWltYWdlKTtcblx0XHRcdFx0XHRcdC5zbWFsbC1pbWFnZSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiBpbmhlcml0O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IGluaGVyaXQ7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDMycHg7XG5cdFx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5yZXdhcmQtZGV0YWlsIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZTtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDhweDtcblx0XHRcdFx0XHRcdC5yZXdhcmQtaW5mbyB7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cblx0XHRcdFx0XHRcdFx0Ji10eXBlIHtcblx0XHRcdFx0XHRcdFx0XHRAaW5jbHVkZSBmb250LWZhbWlseTtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE0cHg7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLWxpc3QtaGVhZCk7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCYtbmFtZSB7XG5cdFx0XHRcdFx0XHRcdFx0QGluY2x1ZGUgZm9udC1mYW1pbHk7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1jb2xvci10b29sdGlwLXRleHQpO1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cblx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogMzc0cHgpIHtcblx0XHRcdFx0XHRcdFx0XHRcdG1heC13aWR0aDogMjE0cHg7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC5yZXdhcmQtZGV0YWlscy1idG4ge1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogOXB4O1xuXHRcdFx0XHRcdHdpZHRoOiA0NHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0aGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRtYXQtaWNvbiB7XG5cdFx0XHRcdFx0XHQ6Om5nLWRlZXAgc3ZnIHtcblx0XHRcdFx0XHRcdFx0cGF0aCB7XG5cdFx0XHRcdFx0XHRcdFx0cGF0aCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzdHJva2U6IGdyYWRpZW50LWxpbmVhci1iZyh2YXIoLS1kZWctZ3JhZGllbnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTMpKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQuZ3JhYi1saXN0IHtcblx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcblxuXHRcdFx0LmdyYWItY29udGFpbmVyIHtcblx0XHRcdFx0bWFyZ2luOiAwIDE2cHg7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0aGVpZ2h0OiA1MnB4O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saXN0LWNvbG9yKTtcblxuXHRcdFx0XHQuZ3JhYi1tYWluLWluZm8ge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdFx0XHRcdC5ncmFiLWltYWdlIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAzMnB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAzMnB4O1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lO1xuXG5cdFx0XHRcdFx0XHQuc21hbGwtaW1hZ2Uge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogaW5oZXJpdDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBpbmhlcml0O1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAzMnB4O1xuXHRcdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyLXByb2ZpbGUtaW1hZ2UpO1xuXHRcdFx0XHRcdFx0XHQmW2FsdF0ge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogOHB4O1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy1saXN0LWhlYWQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmdyYWItbmFtZSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogOHB4O1xuXG5cdFx0XHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRcdFx0QGluY2x1ZGUgZm9udC1mYW1pbHk7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE3cHg7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy1saXN0LWhlYWQpO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnN1YnNjcmliZS1idG4ge1xuXHRcdFx0XHRcdGhlaWdodDogNDBweDtcblx0XHRcdFx0XHR3aWR0aDogMTAwcHg7XG5cblx0XHRcdFx0XHQuaWNvbiB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjRweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjRweDtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdHJpZ2h0OiAtMTBweDtcblx0XHRcdFx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRcdFx0XHR0b3A6IC04cHg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWNvbnMvY2hlY2tib3guc3ZnXCIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5pc1VuZm9sbG93IHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmlzRm9sbG93IHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0Lmljb24ge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWNvbnMvdW5mb2xsb3cuc3ZnXCIpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuaXNVbmZvbGxvdyB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuaXNGb2xsb3cge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiQG1peGluIGJ0bi1ob3ZlcigkdGV4dENvbG9yLCAkYmcsICRib3JkZXJDb2xvcikge1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHRleHRDb2xvcjtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgfVxufVxuXG5AbWl4aW4gYnRuLWRpc2FibGVkKCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gICY6ZGlzYWJsZWQge1xuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG4gIH1cbn1cblxuQG1peGluIGJ0bi1kZWZhdWx0KCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gIGNvbG9yOiAkdGV4dENvbG9yO1xuICBiYWNrZ3JvdW5kOiAkYmc7XG4gIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZWFyLWJnKCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG59XG5cbkBtaXhpbiBib3JkZXItZ3JhZGllbnQtbGluZWFyKCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJvcmRlci1pbWFnZTogIGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItYm9yZGVyKFxuICAkZGVnLFxuICAkbGVmdENvbG9yLFxuICAkcmlnaHRDb2xvcixcbiAgJGJvcmRlcldpZHRoLFxuICAkYm9yZGVyUmFkaXVzXG4pIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XG4gICAgcGFkZGluZzogJGJvcmRlcldpZHRoO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG4gICAgLXdlYmtpdC1tYXNrOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiAwIDApIGNvbnRlbnQtYm94LFxuICAgICAgLyogWzFdICovIGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCk7IC8qIFsyXSAqL1xuICAgIC13ZWJraXQtbWFzay1jb21wb3NpdGU6IHhvcjsgLyogWzNdINC00LvRjyDQv9GW0LTRgtGA0LjQvNC60Lgg0LHRgNCw0YPQt9C10YDRltCyICovXG4gICAgbWFzay1jb21wb3NpdGU6IGV4Y2x1ZGU7IC8qIFszXSAqL1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItdGV4dCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGVmdENvbG9yO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItZXZlbnRzLWxpdmUoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxlZnRDb2xvcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZXItc3Bhbi10ZXh0KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKXtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIHZhcigtLWRlZy1ncmFkaWVudC0zKSxcbiAgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0zKSxcbiAgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMykpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5AbWl4aW4gZXJyb3ItbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95LTUwMCc7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dChcbiAgICB2YXIoLS1kZWctZ3JhZGllbnQtNCksXG4gICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC00KSxcbiAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC00KVxuICApO1xufVxuXG5AbWl4aW4gR2lscm95LTQwMC0xNi1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNDAwJztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AbWl4aW4gR2lscm95LTUwMC0zMC1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNTAwJztcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AbWl4aW4gR2lscm95LTYwMC0xNC1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNjAwJztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuIl19 */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _main_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-list-routing.module */ 6562);
/* harmony import */ var _main_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-list.component */ 2725);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9609);





class MainListModule {
}
MainListModule.ɵfac = function MainListModule_Factory(t) { return new (t || MainListModule)(); };
MainListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MainListModule });
MainListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _main_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainListRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MainListModule, { declarations: [_main_list_component__WEBPACK_IMPORTED_MODULE_1__.MainListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _main_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainListRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=apps_frontend_src_app_modules_main-list_main-list_module_ts.js.map