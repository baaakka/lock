(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 4029:
/*!******************************************************!*\
  !*** ./apps/frontend/src/app/app-material.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMaterialModule": () => (/* binding */ AppMaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ 6523);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/badge */ 4816);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 3722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 5432);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ 5147);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 8076);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 9383);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ 7810);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 4678);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 6053);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 9884);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 9516);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 952);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ 2998);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 7661);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 3695);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ 2232);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 2460);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 4218);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ 3953);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3139);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ 8281);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 4716);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 6370);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sidenav */ 5800);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ 7366);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slider */ 9392);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ 742);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ 1144);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/stepper */ 7873);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/table */ 8219);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tabs */ 4367);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/toolbar */ 932);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tooltip */ 4623);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tree */ 3236);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/a11y */ 2467);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/bidi */ 1637);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/clipboard */ 1937);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 9511);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/layout */ 2221);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/observers */ 9407);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/overlay */ 235);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/platform */ 8757);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/portal */ 9240);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/scrolling */ 5780);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/stepper */ 1027);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/cdk/table */ 8014);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/cdk/text-field */ 8242);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/cdk/tree */ 8003);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9609);


















































class AppMaterialModule {
}
AppMaterialModule.ɵfac = function AppMaterialModule_Factory(t) { return new (t || AppMaterialModule)(); };
AppMaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppMaterialModule });
AppMaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__.MatChipsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__.MatStepperModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__.MatTreeModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatNativeDateModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_36__.A11yModule,
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_37__.BidiModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_38__.ClipboardModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_39__.DragDropModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_40__.LayoutModule,
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_41__.ObserversModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__.OverlayModule,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__.PlatformModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__.CdkScrollableModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_46__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_47__.CdkTableModule,
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_48__.TextFieldModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__.CdkTreeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppMaterialModule, { exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__.MatChipsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__.MatStepperModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__.MatTreeModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatNativeDateModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_36__.A11yModule,
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_37__.BidiModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_38__.ClipboardModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_39__.DragDropModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_40__.LayoutModule,
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_41__.ObserversModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__.OverlayModule,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__.PlatformModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__.CdkScrollableModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_46__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_47__.CdkTableModule,
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_48__.TextFieldModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__.CdkTreeModule] }); })();


/***/ }),

/***/ 4394:
/*!*****************************************************!*\
  !*** ./apps/frontend/src/app/app-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6873);
/* harmony import */ var _core_constants_main_list_components_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/constants/main-list-components.enum */ 7091);
/* harmony import */ var _core_guards_access_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/guards/access.guard */ 1406);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/guards/auth.guard */ 8057);
/* harmony import */ var _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/content-layout/content-layout.component */ 8326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 9609);







const routes = [
    {
        path: '',
        component: _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_3__.ContentLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() */ "apps_frontend_src_app_modules_main_main_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/main/main.module */ 1401)).then((m) => m.MainModule),
                data: {
                    webAllowed: false,
                    pluginAllowed: true,
                    headerOptions: {
                        default: true,
                    }
                },
                canActivate: [_core_guards_access_guard__WEBPACK_IMPORTED_MODULE_1__.AccessGuard],
            },
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "apps_frontend_src_app_modules_main_main_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/main/main.module */ 1401)).then((m) => m.MainModule),
                data: {
                    webAllowed: false,
                    pluginAllowed: true,
                    headerOptions: {
                        default: true,
                    }
                },
                canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard, _core_guards_access_guard__WEBPACK_IMPORTED_MODULE_1__.AccessGuard],
            },
            {
                path: 'auth',
                loadChildren: () => __webpack_require__.e(/*! import() */ "apps_frontend_src_app_modules_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/auth.module */ 3297)).then((m) => m.AuthModule),
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() */ "apps_frontend_src_app_modules_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/profile/profile.module */ 163)).then((m) => m.ProfileModule),
                canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard, _core_guards_access_guard__WEBPACK_IMPORTED_MODULE_1__.AccessGuard],
                data: {
                    webAllowed: true,
                    pluginAllowed: true,
                    headerOptions: {
                        default: false,
                        title: '',
                        back: true,
                        isProfile: true,
                    }
                }
            },
            {
                path: 'grab-a-slice/:id',
                loadChildren: () => __webpack_require__.e(/*! import() */ "apps_frontend_src_app_modules_main-list_main-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/main-list/main-list.module */ 4056)).then((m) => m.MainListModule),
                data: {
                    page: _core_constants_main_list_components_enum__WEBPACK_IMPORTED_MODULE_0__.MainListComponentsEnum.Grab,
                    webAllowed: true,
                    pluginAllowed: false,
                    headerOptions: {
                        default: false,
                        title: 'Grab a slice',
                        titleIcon: 'reward',
                        showSugar: true,
                        back: true,
                        hasSearch: true,
                    }
                },
                canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard, _core_guards_access_guard__WEBPACK_IMPORTED_MODULE_1__.AccessGuard]
            },
            {
                path: 'rewards/:id',
                loadChildren: () => __webpack_require__.e(/*! import() */ "apps_frontend_src_app_modules_main-list_main-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/main-list/main-list.module */ 4056)).then((m) => m.MainListModule),
                data: {
                    page: _core_constants_main_list_components_enum__WEBPACK_IMPORTED_MODULE_0__.MainListComponentsEnum.Rewards,
                    webAllowed: true,
                    pluginAllowed: true,
                    headerOptions: {
                        default: false,
                        title: 'Rewards',
                        titleIcon: 'reward',
                        showSugar: true,
                        back: true,
                        hasSearch: true,
                    }
                },
                canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard, _core_guards_access_guard__WEBPACK_IMPORTED_MODULE_1__.AccessGuard]
            },
            {
                path: 'confectionery',
                loadChildren: () => __webpack_require__.e(/*! import() */ "apps_frontend_src_app_modules_confectionery_confectionery_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/confectionery/confectionery.module */ 6072)).then((m) => m.ConfectioneryModule),
                canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard, _core_guards_access_guard__WEBPACK_IMPORTED_MODULE_1__.AccessGuard],
                data: {
                    webAllowed: true,
                    pluginAllowed: true,
                    headerOptions: {
                        default: false,
                        title: 'Confectionery',
                        titleIcon: 'confectionary',
                        showSugar: true,
                        back: true,
                    }
                }
            },
            {
                path: 'get-sugar',
                loadChildren: () => __webpack_require__.e(/*! import() */ "apps_frontend_src_app_modules_get-sugar_get-sugar_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/get-sugar/get-sugar.module */ 1402)).then((m) => m.GetSugarModule),
                canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard, _core_guards_access_guard__WEBPACK_IMPORTED_MODULE_1__.AccessGuard],
                data: {
                    webAllowed: true,
                    pluginAllowed: true,
                    headerOptions: {
                        default: true,
                    }
                }
            },
            {
                path: 'wallet',
                loadChildren: () => __webpack_require__.e(/*! import() */ "apps_frontend_src_app_modules_wallet_wallet_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/wallet/wallet.module */ 1226)).then((m) => m.WalletModule),
                canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard, _core_guards_access_guard__WEBPACK_IMPORTED_MODULE_1__.AccessGuard],
                data: {
                    webAllowed: true,
                    pluginAllowed: true,
                    headerOptions: {
                        default: false,
                        title: 'Wallet',
                        titleIcon: 'wallet',
                        showSugar: true,
                        back: true,
                        isWallet: true,
                    }
                }
            },
            {
                path: 'rewards',
                redirectTo: 'rewards/SLICE'
            },
            {
                path: 'grab-a-slice',
                redirectTo: 'grab-a-slice/KOL'
            },
        ],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 9503:
/*!************************************************!*\
  !*** ./apps/frontend/src/app/app.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 4475);
/* harmony import */ var _core_types_Themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/types/Themes */ 6251);
/* harmony import */ var _services_svg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/svg.service */ 7888);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/theme.service */ 1266);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 9386);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _core_constants_state_server_updates_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/constants/state-server-updates.enum */ 4759);
/* harmony import */ var _core_constants_texts_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/constants/texts.enum */ 9003);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 6873);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ 2788);
















class AppComponent {
  constructor(themeService, svgService, router, zone, document, swUpdate) {
    this.themeService = themeService;
    this.svgService = svgService;
    this.router = router;
    this.zone = zone;
    this.document = document;
    this.swUpdate = swUpdate;
    this.themeService.changeActiveTheme(localStorage.getItem('theme') === 'dark-theme' ? _core_types_Themes__WEBPACK_IMPORTED_MODULE_1__.DarkTheme : _core_types_Themes__WEBPACK_IMPORTED_MODULE_1__.LightTheme);
    this.svgService.registerSvg();
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.plugin) {
      this.document.body.classList.add('plugin');
    }
  }
  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe(evt => {
        if (evt.type === _core_constants_state_server_updates_enum__WEBPACK_IMPORTED_MODULE_5__.StateServerUpdates.VERSION_READY && confirm(_core_constants_texts_enum__WEBPACK_IMPORTED_MODULE_6__.TextsEnum.ConfirmToReload)) {
          window.location.reload();
        }
      });
    }
  }
  ngAfterViewInit() {
    var _this = this;
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.plugin) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      chrome.storage.sync.get('redirect', /*#__PURE__*/function () {
        var _ref = (0,_Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
          redirect
        }) {
          // document.getElementById('reward-link')?.click();
          _this.zone.run(() => {
            _this.router.navigateByUrl(redirect);
          });
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          yield chrome.storage.sync.remove('redirect', () => {
            // Your code
            // This is an asyn function
          });
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          yield chrome.storage.local.remove('redirect', () => {
            // Your code
            // This is an asyn function
          });
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_svg_service__WEBPACK_IMPORTED_MODULE_2__.SvgService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.SwUpdate));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["cake-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 1274:
/*!*********************************************!*\
  !*** ./apps/frontend/src/app/app.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 3878);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 9503);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/header/header.component */ 2382);
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/footer/footer.component */ 7683);
/* harmony import */ var _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/content-layout/content-layout.component */ 8326);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ 4394);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7253);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 2474);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 3525);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ 811);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-skeleton-loader */ 3453);
/* harmony import */ var _core_Interceptors_handle_error_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/Interceptors/handle-error.interceptor */ 5951);
/* harmony import */ var _cake_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @cake/web3 */ 8518);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/service-worker */ 2788);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 9386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 9609);



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
            useClass: _core_Interceptors_handle_error_interceptor__WEBPACK_IMPORTED_MODULE_6__.HandleErrorInterceptor,
            multi: true,
        },
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrModule.forRoot(),
        ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastContainerModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_14__.NgxSkeletonLoaderModule.forRoot({ animation: "pulse", loadingText: "This item is actually loading..." }),
        _cake_web3__WEBPACK_IMPORTED_MODULE_7__.Web3Module,
        _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__.ServiceWorkerModule.register("ngsw-worker.js", {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: "registerWhenStable:30000",
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_3__.ContentLayoutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastContainerModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_14__.NgxSkeletonLoaderModule, _cake_web3__WEBPACK_IMPORTED_MODULE_7__.Web3Module, _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__.ServiceWorkerModule] }); })();


/***/ }),

/***/ 5951:
/*!*****************************************************************************!*\
  !*** ./apps/frontend/src/app/core/Interceptors/handle-error.interceptor.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HandleErrorInterceptor": () => (/* binding */ HandleErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 7724);
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/toaster.service */ 905);
/* harmony import */ var _types_toaster_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/toaster-position */ 7564);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 5894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 9609);








class HandleErrorInterceptor {
    constructor(customToasterService, authService) {
        this.customToasterService = customToasterService;
        this.authService = authService;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => { }, (error) => {
            if (error.status === 400 /* HttpStatusCode.BadRequest */ && Array.isArray(error.error.errors)) {
                this.customToasterService.showErrorToaster(_types_toaster_position__WEBPACK_IMPORTED_MODULE_1__.ToasterPosition.topFullWidth, error.error.errors[0].message);
            }
            if (error.status === 401 /* HttpStatusCode.Unauthorized */) {
                this.authService.signOut();
            }
        }));
    }
}
HandleErrorInterceptor.ɵfac = function HandleErrorInterceptor_Factory(t) { return new (t || HandleErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_toaster_service__WEBPACK_IMPORTED_MODULE_0__.CustomToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
HandleErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HandleErrorInterceptor, factory: HandleErrorInterceptor.ɵfac });


/***/ }),

/***/ 8574:
/*!**********************************************************!*\
  !*** ./apps/frontend/src/app/core/constants/browsers.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserEnum": () => (/* binding */ BrowserEnum)
/* harmony export */ });
var BrowserEnum;
(function (BrowserEnum) {
    BrowserEnum["SAFARI"] = "Safari";
    BrowserEnum["CHROME"] = "Chrome";
    BrowserEnum["SAMSUNG"] = "Samsung";
    BrowserEnum["EDGE"] = "Edge";
    BrowserEnum["INSTACLIP"] = "Instaclip";
    BrowserEnum["HUAWEI"] = "Huawei";
})(BrowserEnum || (BrowserEnum = {}));


/***/ }),

/***/ 4167:
/*!**************************************************************!*\
  !*** ./apps/frontend/src/app/core/constants/devices.enum.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevicesEnum": () => (/* binding */ DevicesEnum)
/* harmony export */ });
var DevicesEnum;
(function (DevicesEnum) {
    DevicesEnum["IPHONE"] = "iPhone";
})(DevicesEnum || (DevicesEnum = {}));


/***/ }),

/***/ 6733:
/*!********************************************************************!*\
  !*** ./apps/frontend/src/app/core/constants/local-storage-keys.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WEBCLIP_BANNER_CLOSED": () => (/* binding */ WEBCLIP_BANNER_CLOSED)
/* harmony export */ });
const WEBCLIP_BANNER_CLOSED = 'banner_closed';


/***/ }),

/***/ 7091:
/*!***************************************************************************!*\
  !*** ./apps/frontend/src/app/core/constants/main-list-components.enum.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainListComponentsEnum": () => (/* binding */ MainListComponentsEnum)
/* harmony export */ });
var MainListComponentsEnum;
(function (MainListComponentsEnum) {
    MainListComponentsEnum["Grab"] = "grab-a-slice";
    MainListComponentsEnum["Rewards"] = "rewards";
})(MainListComponentsEnum || (MainListComponentsEnum = {}));


/***/ }),

/***/ 4759:
/*!***************************************************************************!*\
  !*** ./apps/frontend/src/app/core/constants/state-server-updates.enum.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateServerUpdates": () => (/* binding */ StateServerUpdates)
/* harmony export */ });
var StateServerUpdates;
(function (StateServerUpdates) {
    StateServerUpdates["VERSION_DETECTED"] = "VERSION_DETECTED";
    StateServerUpdates["VERSION_READY"] = "VERSION_READY";
    StateServerUpdates["VERSION_INSTALLATION_FAILED"] = "VERSION_INSTALLATION_FAILED";
})(StateServerUpdates || (StateServerUpdates = {}));


/***/ }),

/***/ 9003:
/*!************************************************************!*\
  !*** ./apps/frontend/src/app/core/constants/texts.enum.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextsEnum": () => (/* binding */ TextsEnum)
/* harmony export */ });
var TextsEnum;
(function (TextsEnum) {
    TextsEnum["ConfirmToAdd"] = "Do you want to\u00A0add new payment method?";
    TextsEnum["ConfirmToReload"] = "You're using an old version of the control panel. Want to update?";
    TextsEnum["NotEnoughBalance"] = "Not enough balance";
})(TextsEnum || (TextsEnum = {}));


/***/ }),

/***/ 1406:
/*!***********************************************************!*\
  !*** ./apps/frontend/src/app/core/guards/access.guard.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessGuard": () => (/* binding */ AccessGuard)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 9386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6873);





class AccessGuard {
    constructor(router, zone) {
        this.router = router;
        this.zone = zone;
        this.isPlugin = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.plugin;
    }
    canActivate(route) {
        if (this.isPlugin) {
            if (!route.data['pluginAllowed']) {
                this.zone.run(() => {
                    this.router.navigateByUrl('home');
                    return false;
                });
            }
            return true;
        }
        if (!route.data['webAllowed'] && window.innerWidth > 810) {
            this.zone.run(() => {
                this.router.navigateByUrl('grab-a-slice');
                return false;
            });
        }
        return true;
    }
}
AccessGuard.ɵfac = function AccessGuard_Factory(t) { return new (t || AccessGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone)); };
AccessGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AccessGuard, factory: AccessGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8057:
/*!*********************************************************!*\
  !*** ./apps/frontend/src/app/core/guards/auth.guard.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 554);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 5894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9609);





class AuthGuard {
    constructor(auth, apiService) {
        this.auth = auth;
        this.apiService = apiService;
    }
    canActivate() {
        if (this.auth.getToken() === '') {
            this.auth.signOut();
            return false;
        }
        this.apiService.getUserProfileInfo().subscribe();
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7048:
/*!*************************************************************!*\
  !*** ./apps/frontend/src/app/core/pipes/cake-title.pipe.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CakeTitlePipe": () => (/* binding */ CakeTitlePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9609);

class CakeTitlePipe {
    transform(value) {
        value = value.toLowerCase();
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}
CakeTitlePipe.ɵfac = function CakeTitlePipe_Factory(t) { return new (t || CakeTitlePipe)(); };
CakeTitlePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "cakeTitlecase", type: CakeTitlePipe, pure: true });


/***/ }),

/***/ 7603:
/*!********************************************************************!*\
  !*** ./apps/frontend/src/app/core/pipes/cakebox-transform.pipe.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CakeboxTransformPipe": () => (/* binding */ CakeboxTransformPipe)
/* harmony export */ });
/* harmony import */ var _services_mapper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/mapper.service */ 5222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9609);



class CakeboxTransformPipe {
    constructor(mapperService) {
        this.mapperService = mapperService;
    }
    transform(value) {
        return this.mapperService.cakeboxMapper(value);
    }
}
CakeboxTransformPipe.ɵfac = function CakeboxTransformPipe_Factory(t) { return new (t || CakeboxTransformPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mapper_service__WEBPACK_IMPORTED_MODULE_0__.MapperService, 16)); };
CakeboxTransformPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "cakeboxTransform", type: CakeboxTransformPipe, pure: true });


/***/ }),

/***/ 4376:
/*!******************************************************************!*\
  !*** ./apps/frontend/src/app/core/pipes/followers-count.pipe.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowersCountPipe": () => (/* binding */ FollowersCountPipe)
/* harmony export */ });
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/theme.service */ 1266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9609);



class FollowersCountPipe {
    constructor(themeService) {
        this.themeService = themeService;
    }
    getNumber(value) {
        if (value < 1000)
            return `${value}`;
        else if (value >= 1000 && value < 1000000)
            return `${(value / 1000).toFixed(0)}k`.replace(',', '.');
        else
            return `${(value / 1000000).toFixed(1)}m`.replace(',', '.');
    }
    transform(value) {
        return `<span class='${this.themeService.getClassForColors(value)}'>${this.getNumber(value)}</span>`;
    }
}
FollowersCountPipe.ɵfac = function FollowersCountPipe_Factory(t) { return new (t || FollowersCountPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService, 16)); };
FollowersCountPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "followersCount", type: FollowersCountPipe, pure: true });


/***/ }),

/***/ 3951:
/*!*************************************************************!*\
  !*** ./apps/frontend/src/app/core/pipes/page-title.pipe.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageTitlePipe": () => (/* binding */ PageTitlePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9609);

class PageTitlePipe {
    transform(value) {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        ;
    }
}
PageTitlePipe.ɵfac = function PageTitlePipe_Factory(t) { return new (t || PageTitlePipe)(); };
PageTitlePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pageTitle", type: PageTitlePipe, pure: true });


/***/ }),

/***/ 6251:
/*!****************************************************!*\
  !*** ./apps/frontend/src/app/core/types/Themes.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DarkTheme": () => (/* binding */ DarkTheme),
/* harmony export */   "LightTheme": () => (/* binding */ LightTheme)
/* harmony export */ });
const LightTheme = {
    name: 'light-theme',
    properties: {
        '--scrollbar-color': 'rgba(0, 0, 0, 0.15)',
        '--pwa-bg-color': '#E74C81',
        '--color-gradient-left-icon': '#2BDFB4',
        '--color-gradient-right-icon': '#29ADDF',
        '--color-gradient-left-icon-hover': '#CE2791',
        '--color-gradient-right-icon-hover': '#FF7070',
        '--skeleton-color': '#EADDD0',
        '--color-bg-platform': 'rgba(255, 255, 255, 0.5)',
        '--header-color-gradient-left-1': '#CE2791',
        '--header-color-gradient-right-1': '#FF7070',
        '--header-color-gradient-left-2': '#FF7070',
        '--header-color-gradient-right-2': '#FB6A74',
        '--footer-color-gradient-left-1': '#2BDFB4',
        '--footer-color-gradient-right-1': '#29ADDF',
        '--color-fonts-list-head': '#977E89',
        '--border-list-color': 'rgba(0, 0, 0, 0.1)',
        '--border-platform-color': 'rgba(184, 134, 83, 0.25)',
        '--bg-platform-color': 'rgba(255, 255, 255, 0.5)',
        '--bg-get-reward-color': 'rgba(184, 134, 83, 0.2)',
        '--avatar-bg-color': 'rgba(171, 111, 38, 0.2)',
        '--color-tertiary-input': '#fff',
        '--color-header-active': '#ffffff',
        '--color-popular-text': '#ffffff',
        '--color-transparent': 'transparent',
        '--color-primary-1': '#CE2791',
        '--color-primary-2': '#FF7070',
        '--color-primary-3': '#F09447',
        '--color-primary-4': '#ECB21F',
        '--color-secondary-1': '#2BDFB4',
        '--color-secondary-2': '#29ADDF',
        '--color-tertiary-1': '#5533D2',
        '--color-tertiary-2': '#313C93',
        '--color-tertiary-3': '#2C58F5',
        '--color-tertiary-4': '#EBD9BC',
        '--color-tertiary-5': 'rgba(0, 0, 0, 0.1)',
        '--color-fonts-1': '#977E89',
        '--color-fonts-2': '#5C2448',
        '--color-fonts-3': '#FAF3F6',
        '--color-bg-1': '#FBF5EB',
        '--color-bg-2': '#FBE3D5',
        '--color-tooltip-text': '#5C2448',
        '--color-tooltip-close': '#977E89',
        '--size-tooltip-close': '12px',
        '--color-border-profile-image': 'rgba(0, 0, 0, 0.2)',
        '--box-shadow': 'rgba(152, 149, 149, 0.16)',
        '--reward-dropdown-color': 'rgba(0, 0, 0, 0.8)',
        '--deg-gradient-enabled-input': '180deg',
        '--gradient-left-enabled-input': '#F2CCAD 0%',
        '--gradient-right-enabled-input': '#F4ACAC 100%',
        '--deg-gradient-webclip-banner': '267.37deg',
        '--gradient-left-webclip-banner': '#F2CCAD 0%',
        '--gradient-right-webclip-banner': '#F4ACAC 100%',
        '--gradient-left-webclip-full': 'rgba(242, 204, 173, 0.3) 0%',
        '--gradient-right-webclip-full': 'rgba(244, 172, 172, 0.3) 100%',
        '--deg-popular-platform': '106.8deg',
        '--color-popular-platform-left': '#CF2892 7.2%',
        '--color-popular-platform-right': '#D6338C 94.65%',
        '--deg-gradient-1': '111.26deg',
        '--color-gradient-left-1': '#CE2791 3.93%',
        '--color-gradient-right-1': '#FF7070 87.6%',
        '--color-gradient-name-left-1': '#FF7070 3.93%',
        '--color-gradient-name-right-1': '#CE2791 87.6%',
        '--deg-gradient-2': '111.26deg',
        '--color-gradient-left-2': 'rgba(206, 39, 145, 0.23) 3.93%',
        '--color-gradient-right-2': 'rgba(255, 112, 112, 0.23) 87.6%',
        '--deg--profile-image': '111.26deg',
        '--profile-image-bg-color-left': 'rgba(206, 39, 145, 0.23) 3.93%',
        '--profile-image-bg-color-right': 'rgba(255, 112, 112, 0.23) 87.6%',
        '--deg-gradient-3': '115.76deg',
        '--color-gradient-left-3': '#2BDFB4 1.79%',
        '--color-gradient-right-3': '#29ADDF 81.02%',
        '--deg-gradient-4': '304.88deg',
        '--color-gradient-left-4': '#EF3F19 13.79%',
        '--color-gradient-right-4': '#EC1A1A 86.02%',
        '--deg-gradient-5': '180.19deg',
        '--color-gradient-left-5': '#FBF5EB 58.96%',
        '--color-gradient-right-5': '#FBE3D5 99.84%',
        '--deg-gradient-6': '115.76deg',
        '--color-gradient-left-6': '#ECB21F 1.79%',
        '--color-gradient-right-6': '#F7529C 81.02%',
        '--deg-gradient-7': '180deg',
        '--color-gradient-left-7': '#EF3F19 0%',
        '--color-gradient-right-7': '#EC721A 100%',
        '--deg-gradient-8': '180deg',
        '--color-gradient-left-8': 'rgba(239, 63, 25, 0.23) 0%',
        '--color-gradient-right-8': 'rgba(236, 114, 26, 0.23) 100%',
        '--deg-gradient-9': '180deg',
        '--color-gradient-left-9': '#6FDF2B 0%',
        '--color-gradient-right-9': '#2BDF89 100%',
        '--deg-gradient-10': '180deg',
        '--color-gradient-left-10': 'rgba(111, 223, 43, 0.23) 0%',
        '--color-gradient-right-10': 'rgba(43, 223, 137, 0.23) 100%',
        '--deg-gradient-11': '163.54deg',
        '--color-gradient-left-11': '#FFB800 11.4%',
        '--color-gradient-right-11': '#EBD511 88.6%',
        '--deg-gradient-12': '163.54deg',
        '--color-gradient-left-12': 'rgba(255, 184, 0, 0.23) 11.4%',
        '--color-gradient-right-12': 'rgba(235, 213, 17, 0.23) 88.6%',
        '--deg-gradient-disabled': '115.76deg',
        '--color-gradient-left-disabled': '#C3EDE0 1.79%',
        '--color-gradient-right-disabled': '#C8E3E8 81.02%',
        '--deg-gradient-shadow': '90deg',
        '--color-gradient-left-shadow': 'rgba(251, 245, 235, 0) 0%',
        '--color-gradient-right-shadow': '#FBF5EB 100%',
        '--deg-gradient-shadow-kol': '90deg',
        '--color-gradient-left-shadow-kol': 'rgba(251, 238, 226, 0) 0%',
        '--color-gradient-right-shadow-kol': '#FBEEE2 100%',
        '--deg-gradient-toastr': '304.88deg',
        '--color-toastr-left': '#EF3F1933',
        '--color-toastr-right': '#EC1A1A',
        '--color-toasrt-text': '#EC1A1A;',
        '--deg-gradient-get-sugar': '115.76deg',
        '--color-gradient-left-get-sugar': '#ECB21F 1.79%',
        '--color-gradient-right-get-sugar': '#F7529C 81.02%',
        '--opacity-color': 'rgba(0, 0, 0, 0.05)',
        '--webclip-box-shadow-color': 'rgba(84, 84, 84, 0.15)',
        '--webclip-border-color': 'rgba(0, 0, 0, 0.1)',
        '--deg-gradient-background-modal': '111.26deg',
        '--color-gradient-left-background-modal': '#CE2791 3.93%',
        '--color-gradient-right-background-modal': '#FF7070 87.6%',
        '--close-icon-color': '#5C2448',
        '--deg-gradient-live-events': '111.26deg',
        '--color-gradient-left-live-events': '#941B68 3.93%',
        '--color-gradient-right-live-events': '#FB7474 87.6%',
    },
};
const DarkTheme = {
    name: 'dark-theme',
    properties: {
        '--scrollbar-color': 'rgba(255, 255, 255, 0.2)',
        '--pwa-bg-color': '#4D1445',
        '--color-gradient-left-icon': '#22BB96',
        '--color-gradient-right-icon': '#2290BA',
        '--color-gradient-left-icon-hover': '#941B68',
        '--color-gradient-right-icon-hover': '#FB7474',
        '--skeleton-color': '#34284C',
        '--color-bg-platform': 'rgba(65, 65, 65, 0.5)',
        '--header-color-gradient-left-1': '#60003D',
        '--header-color-gradient-right-1': '#523C73',
        '--deg--profile-image': '111.26deg',
        '--profile-image-bg-color-left': 'rgba(171, 196, 226, 0.2)',
        '--profile-image-bg-color-right': 'rgba(171, 196, 226, 0.2)',
        '--deg-gradient-webclip-banner': '267.37deg',
        '--gradient-left-webclip-banner': '#640842 0%',
        '--gradient-right-webclip-banner': '#620762 100%',
        '--gradient-left-webclip-full': 'rgba(100, 8, 66, 0.5) 0%',
        '--gradient-right-webclip-full': 'rgba(98, 7, 98, 0.5) 100%',
        '--reward-dropdown-color': 'rgba(70, 64, 83, 0.8)',
        '--header-color-gradient-left-2': '#523C73',
        '--header-color-gradient-right-2': '#54366E',
        '--footer-color-gradient-left-1': '#29777C',
        '--footer-color-gradient-right-1': '#0E2B56',
        '--color-fonts-list-head': '#C4C8D7',
        '--border-list-color': 'rgba(255, 255, 255, 0.1)',
        '--border-platform-color': 'rgba(255, 255, 255, 0.1)',
        '--bg-platform-color': 'rgba(65, 65, 65, 0.5)',
        '--bg-get-reward-color': 'rgba(184, 134, 83, 0.2)',
        '--avatar-bg-color': 'rgba(171, 196, 226, 0.2)',
        '--color-tertiary-input': '#332A43',
        '--color-header-active': '#ffffff',
        '--color-popular-text': '#E9E9E9',
        '--color-transparent': 'transparent',
        '--color-primary-1': '#941B68',
        '--color-primary-2': '#FB7474',
        '--color-primary-3': '#F09447',
        '--color-primary-4': '#ECB21F',
        '--color-secondary-1': '#22BB96',
        '--color-secondary-2': '#2290BA',
        '--color-tertiary-1': '#5533D2',
        '--color-tertiary-2': '#313C93',
        '--color-tertiary-3': '#2C58F5',
        '--color-tertiary-4': '#332A43',
        '--color-tertiary-5': '#5A5D66',
        '--color-fonts-1': '#8C93AC',
        '--color-fonts-2': '#EAEEFA',
        '--color-fonts-3': '#C4C8D7',
        '--color-bg-1': '#1B0C36',
        '--color-bg-2': '#0E0421',
        '--color-tooltip-text': '#EAEEFA',
        '--color-tooltip-close': '#22BB96',
        '--size-tooltip-close': '14px',
        '--box-shadow': 'rgba(125, 125, 125, 0.16)',
        '--deg-gradient-enabled-input': '180deg',
        '--gradient-left-enabled-input': '#B27B4D 0%',
        '--gradient-right-enabled-input': '#B76161 100%',
        '--deg-popular-platform': '106.8deg',
        '--color-popular-platform-left': '#941C68 7.2%',
        '--color-popular-platform-right': '#A2286A 94.65%',
        '--deg-gradient-1': '111.26deg',
        '--color-gradient-left-1': '#941B68 3.93%',
        '--color-gradient-right-1': '#FB7474 87.6%',
        '--color-gradient-name-left-1': '#FB7474 3.93%',
        '--color-gradient-name-right-1': '#941B68 87.6%',
        '--deg-gradient-2': '111.26deg',
        '--color-gradient-left-2': 'rgba(148, 27, 104, 0.23) 3.93%',
        '--color-gradient-right-2': 'rgba(251, 116, 116, 0.23) 87.6%',
        '--deg-gradient-3': '115.76deg',
        '--color-gradient-left-3': '#22BB96 1.79%',
        '--color-gradient-right-3': '#2290BA 81.02%',
        '--deg-gradient-4': '304.88deg',
        '--color-gradient-left-4': '#E13814 13.79%',
        '--color-gradient-right-4': '#CC1414 86.02%',
        '--deg-gradient-5': '138.9deg',
        '--color-gradient-left-5': '#1B0C36 12.25%',
        '--color-gradient-right-5': '#0E0421 92.3%',
        '--deg-gradient-6': '115.76deg',
        '--color-gradient-left-6': '#ECB21F 1.79%',
        '--color-gradient-right-6': '#F7529C 81.02%',
        '--deg-gradient-7': '180deg',
        '--color-gradient-left-7': '#EF3F19 0%',
        '--color-gradient-right-7': '#EC721A 100%',
        '--deg-gradient-8': '180deg',
        '--color-gradient-left-8': 'rgba(239, 63, 25, 0.23) 0%',
        '--color-gradient-right-8': 'rgba(236, 114, 26, 0.23) 100%',
        '--deg-gradient-9': '180deg',
        '--color-gradient-left-9': '#6FDF2B 0%',
        '--color-gradient-right-9': '#2BDF89 100%',
        '--deg-gradient-10': '180deg',
        '--color-gradient-left-10': 'rgba(111, 223, 43, 0.23) 0%',
        '--color-gradient-right-10': 'rgba(43, 223, 137, 0.23) 100%',
        '--deg-gradient-11': '180deg',
        '--color-gradient-left-11': '#FFB800 0%',
        '--color-gradient-right-11': '#EBD511 100%',
        '--deg-gradient-12': '180deg',
        '--color-gradient-left-12': 'rgba(255, 184, 0, 0.23) 0%',
        '--color-gradient-right-12': 'rgba(235, 213, 17, 0.23) 100%',
        '--deg-gradient-disabled': '115.76deg',
        '--color-gradient-left-disabled': '#1B384E 1.79%',
        '--color-gradient-right-disabled': '#162A4D 81.02%',
        '--deg-gradient-shadow': '90deg',
        '--color-gradient-left-shadow': 'rgba(19, 7, 40, 0) 0%',
        '--color-gradient-right-shadow': '#130728 100%',
        '--deg-gradient-shadow-kol': '90deg',
        '--color-gradient-left-shadow-kol': 'rgba(16, 6, 36, 0) 0%',
        '--color-gradient-right-shadow-kol': '#100624 100%',
        '--deg-gradient-toastr': '304.88deg',
        '--color-toastr-left': '#E1381440',
        '--color-toastr-right': '#CC141440',
        '--color-toasrt-text': '#EC1A1A;',
        '--deg-gradient-get-sugar': '111.26deg',
        '--color-gradient-left-get-sugar': '#460B31 3.93%',
        '--color-gradient-right-get-sugar': '#342267 87.6%',
        '--opacity-color': 'rgba(255, 255, 255, 0.04)',
        '--deg-gradient-background-modal': '111.26deg',
        '--color-gradient-left-background-modal': '#460B31 3.93%',
        '--color-gradient-right-background-modal': '#592267 87.6%',
        '--webclip-box-shadow-color': 'rgba(84, 84, 84, 0.15)',
        '--webclip-border-color': 'rgba(0, 0, 0, 0.1)',
        '--close-icon-color': '#EAEEFA',
        '--deg-gradient-live-events': '111.26deg',
        '--color-gradient-left-live-events': '#941B68 3.93%',
        '--color-gradient-right-live-events': '#FB7474 87.6%',
    },
};


/***/ }),

/***/ 7564:
/*!**************************************************************!*\
  !*** ./apps/frontend/src/app/core/types/toaster-position.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToasterPosition": () => (/* binding */ ToasterPosition)
/* harmony export */ });
var ToasterPosition;
(function (ToasterPosition) {
    ToasterPosition["topRight"] = "toast-top-right";
    ToasterPosition["topLeft"] = "toast-top-left";
    ToasterPosition["bottomRight"] = "toast-bottom-right";
    ToasterPosition["bottomLeft"] = "toast-bottom-left";
    ToasterPosition["topFullWidth"] = "toast-top-full-width";
    ToasterPosition["topCenter"] = "toast-top-center";
    ToasterPosition["bottomCenter"] = "toast-bottom-center";
})(ToasterPosition || (ToasterPosition = {}));


/***/ }),

/***/ 8326:
/*!*********************************************************************************!*\
  !*** ./apps/frontend/src/app/layout/content-layout/content-layout.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentLayoutComponent": () => (/* binding */ ContentLayoutComponent)
/* harmony export */ });
/* harmony import */ var _Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 4475);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 6873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 5231);
/* harmony import */ var _core_constants_local_storage_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/constants/local-storage-keys */ 6733);
/* harmony import */ var _services_device_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/device-service.service */ 8102);
/* harmony import */ var _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/classes/watcher */ 34);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _shared_components_webclip_webclip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/webclip/webclip.component */ 456);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ 2382);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ 7683);













function ContentLayoutComponent_cake_app_header_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "cake-app-header");
  }
}
function ContentLayoutComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4)(1, "cake-webclip", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("closePopupEmitter", function ContentLayoutComponent_div_4_Template_cake_webclip_closePopupEmitter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.handlePopupClose($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible", ctx_r1.isPopupVisible);
  }
}
function ContentLayoutComponent_cake_app_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "cake-app-footer", 6);
  }
}
class ContentLayoutComponent extends _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_3__.Watcher {
  constructor(router, deviseService) {
    var _this;
    super();
    _this = this;
    this.router = router;
    this.deviseService = deviseService;
    this.hideDefaultHeader = false;
    this.hideDefaultFooter = false;
    this.routesToHideHeader = ['/auth/sign-up', '/auth/sign-in'];
    this.routesToHideFooter = ['/auth/sign-up', '/auth/sign-in'];
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.unsubscribe)).subscribe( /*#__PURE__*/function () {
      var _ref = (0,_Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ev) {
        if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd) {
          _this.hideDefaultHeader = _this.routesToHideHeader.some(url => ev.url.indexOf(url) !== -1);
          _this.hideDefaultFooter = _this.routesToHideFooter.some(url => ev.url.indexOf(url) !== -1);
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    this.isPopupVisible = this.deviseService.isMobileOrTablet;
  }
  get isPwa() {
    return this.deviseService.isPwa;
  }
  handlePopupClose(value) {
    this.isPopupVisible = value;
  }
  get isHidden() {
    return !JSON.parse(localStorage.getItem(_core_constants_local_storage_keys__WEBPACK_IMPORTED_MODULE_1__.WEBCLIP_BANNER_CLOSED));
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
ContentLayoutComponent.ɵfac = function ContentLayoutComponent_Factory(t) {
  return new (t || ContentLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_device_service_service__WEBPACK_IMPORTED_MODULE_2__.DeviceService));
};
ContentLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ContentLayoutComponent,
  selectors: [["cake-app-content-layout"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 6,
  vars: 3,
  consts: [[1, "sparkles"], [4, "ngIf"], ["class", "webclip-wrapper", 4, "ngIf"], ["class", "cake-footer", 4, "ngIf"], [1, "webclip-wrapper"], [3, "visible", "closePopupEmitter"], [1, "cake-footer"]],
  template: function ContentLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ContentLayoutComponent_cake_app_header_2_Template, 1, 0, "cake-app-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ContentLayoutComponent_div_4_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ContentLayoutComponent_cake_app_footer_5_Template, 1, 0, "cake-app-footer", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.hideDefaultHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isHidden && !ctx.isPwa);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.hideDefaultFooter);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _shared_components_webclip_webclip_component__WEBPACK_IMPORTED_MODULE_4__.WebClipComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent],
  styles: [".sparkles[_ngcontent-%COMP%] {\n  background-image: url('sparkles-dark.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100vh;\n}\n.sparkles[_ngcontent-%COMP%]   .webclip-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  position: fixed;\n  bottom: 16px;\n  z-index: 999;\n}\n.sparkles[_ngcontent-%COMP%]   .cake-footer[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n@media (max-width: 768px) {\n  .sparkles[_ngcontent-%COMP%]   .cake-footer[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjtBQUVFO0VBQ0UsZ0JBQUE7QUFBSjtBQUVJO0VBSEY7SUFJSSxTQUFBO0VBQ0o7QUFDRiIsImZpbGUiOiJjb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFya2xlcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3Mvc3BhcmtsZXMtZGFyay5wbmcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gIC53ZWJjbGlwLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDE2cHg7XG4gICAgei1pbmRleDogOTk5O1xuICB9XG4gIFxuICAuY2FrZS1mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICBAbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH0gXG4gIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 7683:
/*!*****************************************************************!*\
  !*** ./apps/frontend/src/app/layout/footer/footer.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 9386);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8751);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 5231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6327);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 7724);
/* harmony import */ var _core_types_Themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/types/Themes */ 6251);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ 554);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 5894);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/theme.service */ 1266);
/* harmony import */ var _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/classes/watcher */ 34);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 6873);













function FooterComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const slice_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", slice_r1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
class FooterComponent extends _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_5__.Watcher {
    constructor(themeService, authService, apiService) {
        super();
        this.themeService = themeService;
        this.authService = authService;
        this.apiService = apiService;
        this.QUERY = {
            page: 1,
            pageSize: 8,
        };
        this.footerSlices = [];
    }
    ngOnInit() {
        if (this.isPlugin) {
            this.subscribes();
        }
    }
    subscribes() {
        this.authService.userProfile.
            pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.unsubscribe), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)((result) => this.apiService.getUserById(result.id, this.QUERY)), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(data => {
            this.footerSlices = data.data.rewards.map(slice => slice.smallImage);
        }))
            .subscribe();
    }
    get footerImage() {
        return this.themeService.active === _core_types_Themes__WEBPACK_IMPORTED_MODULE_1__.LightTheme ? 'footer-light' : 'footer-dark';
    }
    get mobileFooterImage() {
        return this.themeService.active === _core_types_Themes__WEBPACK_IMPORTED_MODULE_1__.LightTheme ? 'footer_light_mobile' : 'footer_dark_mobile';
    }
    get isPlugin() {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.plugin;
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_4__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService)); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["cake-app-footer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 3, consts: [[1, "vectors-bg-desktop"], ["loading", "lazy", "alt", "", 1, "banner", 3, "src"], [1, "vectors-bg-mobile"], [1, "slices"], ["loading", "lazy", "class", "slice", "alt", "slice", 3, "src", 4, "ngFor", "ngForOf"], [1, "text-container"], ["routerLink", "/grab-a-slice", 1, "link"], ["routerLink", "/confectionery", 1, "link"], ["href", "https://piurfe.axshare.com/#id=vpkgpf&p=about&c=1", 1, "link"], [1, "sub-logo"], ["loading", "lazy", "alt", "slice", 1, "slice", 3, "src"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "footer")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, FooterComponent_img_6_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5)(8, "div")(9, "ul")(10, "li")(11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Grab a slice!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "li")(14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Confectionery");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "li")(17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 9)(20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "\u00A9 2022 Cak3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("src", "assets/imgs/", ctx.footerImage, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("src", "assets/imgs/", ctx.mobileFooterImage, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.footerSlices);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref], styles: ["footer[_ngcontent-%COMP%] {\n  padding: 8px 50px 0 50px;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n}\n@media (max-width: 1439px) {\n  footer[_ngcontent-%COMP%] {\n    padding: 0px 50px 0 50px;\n    overflow: hidden;\n    height: 70px;\n  }\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg-desktop[_ngcontent-%COMP%] {\n  pointer-events: none;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  overflow: hidden;\n}\n@media (max-width: 767px) {\n  footer[_ngcontent-%COMP%]   .vectors-bg-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg-desktop[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 2880.01px;\n}\n@media (max-width: 769px) {\n  footer[_ngcontent-%COMP%]   .vectors-bg-desktop[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n    height: 40px;\n  }\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg-desktop[_ngcontent-%COMP%]   .block-3[_ngcontent-%COMP%] {\n  bottom: 0;\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg-mobile[_ngcontent-%COMP%] {\n  pointer-events: none;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  overflow: hidden;\n}\n@media (min-width: 769px) {\n  footer[_ngcontent-%COMP%]   .vectors-bg-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg-mobile[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n@media (max-width: 769px) {\n  footer[_ngcontent-%COMP%]   .vectors-bg-mobile[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n    height: 40px;\n  }\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg-mobile[_ngcontent-%COMP%]   .block-3[_ngcontent-%COMP%] {\n  bottom: 0;\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg-mobile[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin-top: 30px;\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg-mobile[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%] {\n  z-index: 9999999;\n  position: absolute;\n  border: 1px solid var(--color-border-profile-image);\n  object-fit: cover;\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg-mobile[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg-mobile[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-of-type(1) {\n  border-radius: 1px;\n  transform: rotate(-5deg);\n  width: 6px;\n  height: 6px;\n  left: 23px;\n  top: 28.51px;\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg-mobile[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-of-type(2) {\n  width: 16px;\n  height: 16px;\n  left: 34px;\n  top: 38px;\n  border-radius: 3px;\n  transform: rotate(-18deg);\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg-mobile[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-of-type(3) {\n  width: 25px;\n  height: 24px;\n  left: 74px;\n  top: 12px;\n  border-radius: 3px;\n  transform: rotate(25deg);\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg-mobile[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-of-type(4) {\n  width: 9px;\n  height: 9px;\n  left: 131px;\n  top: 12.01px;\n  border-radius: 2px;\n  transform: rotate(-26deg);\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg-mobile[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-of-type(5) {\n  width: 21px;\n  height: 21px;\n  left: 172.29px;\n  top: 33px;\n  border-radius: 3px;\n  transform: rotate(9deg);\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg-mobile[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-of-type(6) {\n  width: 15px;\n  height: 15px;\n  left: 232px;\n  top: 15px;\n  border-radius: 3px;\n  transform: rotate(14deg);\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg-mobile[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-of-type(7) {\n  width: 10px;\n  height: 10px;\n  left: 311px;\n  top: 39px;\n  border-radius: 2px;\n  transform: rotate(18deg);\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg-mobile[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   .slice[_ngcontent-%COMP%]:nth-of-type(8) {\n  width: 9px;\n  height: 9px;\n  left: 321px;\n  top: 7px;\n  border-radius: 2px;\n  transform: rotate(-30deg);\n}\nfooter[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n  z-index: 9;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\nfooter[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  footer[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nfooter[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0 20px;\n}\nfooter[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-decoration: none;\n  padding-bottom: 8px;\n  color: #ffffff;\n  font-family: \"Gilroy-400\";\n}\nfooter[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link.active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #ffffff;\n}\nfooter[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid #ffffff;\n}\nfooter[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-decoration: none;\n  padding-bottom: 8px;\n  color: #ffffff;\n  font-family: \"Gilroy-400\";\n}\n@media (max-width: 768px) {\n  footer[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFKRjtBQU1FO0VBTkY7SUFPSSx3QkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtFQUhGO0FBQ0Y7QUFLRTtFQUNFLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBSEo7QUFJSTtFQVRGO0lBVUksYUFBQTtFQURKO0FBQ0Y7QUFHSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBRE47QUFHTTtFQUxGO0lBTUksWUFBQTtFQUFOO0FBQ0Y7QUFHSTtFQUNFLFNBQUE7QUFETjtBQUtFO0VBQ0Usb0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQUtJO0VBVkY7SUFXSSxhQUFBO0VBRko7QUFDRjtBQUlJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUZOO0FBSU07RUFMRjtJQU1JLFlBQUE7RUFETjtBQUNGO0FBSUk7RUFDRSxTQUFBO0FBRk47QUFLSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSE47QUFJTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtREFBQTtFQUNBLGlCQUFBO0FBRlI7QUFHUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBRFY7QUFJUTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRlY7QUFLUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFFQSxrQkFBQTtFQUNBLHlCQUFBO0FBSlY7QUFPUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFFQSxrQkFBQTtFQUNBLHdCQUFBO0FBTlY7QUFTUTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLHlCQUFBO0FBUlY7QUFXUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFFQSxrQkFBQTtFQUNBLHVCQUFBO0FBVlY7QUFhUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFQSxrQkFBQTtFQUNBLHdCQUFBO0FBWlY7QUFlUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFQSxrQkFBQTtFQUNBLHdCQUFBO0FBZFY7QUFpQlE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkFBQTtBQWhCVjtBQXNCRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBcEJKO0FBcUJJO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUFuQk47QUFxQk07RUFKRjtJQUtJLGFBQUE7RUFsQk47QUFDRjtBQW9CTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBbEJSO0FBb0JRO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUE1TFIsY0FBQTtFQUNBLHlCQUFBO0FBMktGO0FBbUJVO0VBQ0UsZ0NBQUE7QUFqQlo7QUFvQlU7RUFDRSxnQ0FBQTtBQWxCWjtBQXdCSTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBN01KLGNBQUE7RUFDQSx5QkFBQTtBQXdMRjtBQXVCTTtFQU5GO0lBT0ksYUFBQTtFQXBCTjtBQUNGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBmb250LWNvbG9yIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95LTQwMCc7XG59XG5cbmZvb3RlciB7XG4gIHBhZGRpbmc6IDhweCA1MHB4IDAgNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MzlweCkge1xuICAgIHBhZGRpbmc6IDBweCA1MHB4IDAgNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogNzBweDtcbiAgfVxuXG4gIC52ZWN0b3JzLWJnLWRlc2t0b3Age1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuYmFubmVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHdpZHRoOiAyODgwLjAxcHg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJsb2NrLTMge1xuICAgICAgYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gIC52ZWN0b3JzLWJnLW1vYmlsZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmJhbm5lciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYmxvY2stMyB7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuXG4gICAgLnNsaWNlcyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAuc2xpY2Uge1xuICAgICAgICB6LWluZGV4OiA5OTk5OTk5O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlci1wcm9maWxlLWltYWdlKTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgICAgICAgICB3aWR0aDogNnB4O1xuICAgICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICAgIGxlZnQ6IDIzcHg7XG4gICAgICAgICAgdG9wOiAyOC41MXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgIGxlZnQ6IDM0cHg7XG4gICAgICAgICAgdG9wOiAzOHB4O1xuXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xOGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAmOm50aC1vZi10eXBlKDMpIHtcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgbGVmdDogNzRweDtcbiAgICAgICAgICB0b3A6IDEycHg7XG5cbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpudGgtb2YtdHlwZSg0KSB7XG4gICAgICAgICAgd2lkdGg6IDlweDtcbiAgICAgICAgICBoZWlnaHQ6IDlweDtcbiAgICAgICAgICBsZWZ0OiAxMzFweDtcbiAgICAgICAgICB0b3A6IDEyLjAxcHg7XG5cbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTI2ZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLW9mLXR5cGUoNSkge1xuICAgICAgICAgIHdpZHRoOiAyMXB4O1xuICAgICAgICAgIGhlaWdodDogMjFweDtcbiAgICAgICAgICBsZWZ0OiAxNzIuMjlweDtcbiAgICAgICAgICB0b3A6IDMzcHg7XG5cbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOWRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAmOm50aC1vZi10eXBlKDYpIHtcbiAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgbGVmdDogMjMycHg7XG4gICAgICAgICAgdG9wOiAxNXB4O1xuXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE0ZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLW9mLXR5cGUoNykge1xuICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICBsZWZ0OiAzMTFweDtcbiAgICAgICAgICB0b3A6IDM5cHg7XG5cbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMThkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpudGgtb2YtdHlwZSg4KSB7XG4gICAgICAgICAgd2lkdGg6IDlweDtcbiAgICAgICAgICBoZWlnaHQ6IDlweDtcbiAgICAgICAgICBsZWZ0OiAzMjFweDtcbiAgICAgICAgICB0b3A6IDdweDtcblxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnRleHQtY29udGFpbmVyIHtcbiAgICB6LWluZGV4OiA5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHVsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuXG4gICAgICAgIC5saW5rIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgQGluY2x1ZGUgZm9udC1jb2xvcjtcblxuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgQGluY2x1ZGUgZm9udC1jb2xvcjtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 2382:
/*!*****************************************************************!*\
  !*** ./apps/frontend/src/app/layout/header/header.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/theme.service */ 1266);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search.service */ 6490);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 6873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 8751);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 8552);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 5231);
/* harmony import */ var _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/classes/watcher */ 34);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 5894);
/* harmony import */ var _core_types_Themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/types/Themes */ 6251);
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/modals.service */ 5414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7661);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-skeleton-loader */ 3453);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/input/input.component */ 9852);
/* harmony import */ var _core_pipes_page_title_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/pipes/page-title.pipe */ 3951);





















function HeaderComponent_div_6_ng_container_1_div_4_div_1_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mat-icon", 24);
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgIcon", ctx_r12.headerOptions.titleIcon);
  }
}
function HeaderComponent_div_6_ng_container_1_div_4_div_1_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, ctx_r13.authService.userProfile)) == null ? null : tmp_0_0.sugar), " Sugar ");
  }
}
function HeaderComponent_div_6_ng_container_1_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20)(1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HeaderComponent_div_6_ng_container_1_div_4_div_1_mat_icon_2_Template, 1, 1, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "pageTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, HeaderComponent_div_6_ng_container_1_div_4_div_1_p_5_Template, 4, 5, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r11.headerOptions.titleIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 3, ctx_r11.headerOptions.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r11.headerOptions.showSugar);
  }
}
function HeaderComponent_div_6_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HeaderComponent_div_6_ng_container_1_div_4_div_1_Template, 6, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.headerOptions.title);
  }
}
function HeaderComponent_div_6_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HeaderComponent_div_6_ng_container_1_div_6_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r14.switchSearchState());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_div_6_ng_container_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HeaderComponent_div_6_ng_container_1_div_7_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r16.addWallet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_div_6_ng_container_1_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32)(1, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HeaderComponent_div_6_ng_container_1_div_8_div_2_Template_mat_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r21.changeTheme(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_div_6_ng_container_1_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32)(1, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HeaderComponent_div_6_ng_container_1_div_8_div_3_Template_mat_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r23.changeTheme(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_div_6_ng_container_1_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_div_6_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HeaderComponent_div_6_ng_container_1_div_8_div_2_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, HeaderComponent_div_6_ng_container_1_div_8_div_3_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, HeaderComponent_div_6_ng_container_1_div_8_div_4_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r10.themeService.active.name === "light-theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r10.themeService.active.name === "dark-theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r10.settings);
  }
}
function HeaderComponent_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HeaderComponent_div_6_ng_container_1_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r25.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "arrow-left");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, HeaderComponent_div_6_ng_container_1_div_4_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, HeaderComponent_div_6_ng_container_1_div_6_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, HeaderComponent_div_6_ng_container_1_div_7_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, HeaderComponent_div_6_ng_container_1_div_8_Template, 5, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r6.headerOptions.isProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.headerOptions.hasSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.headerOptions.isWallet);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.headerOptions.isProfile);
  }
}
function HeaderComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HeaderComponent_div_6_ng_container_1_Template, 9, 4, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isSearchOpened)("ngIfElse", _r2);
  }
}
function HeaderComponent_div_7_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 52);
  }
}
const _c0 = function (a2) {
  return {
    width: "185px",
    height: "81px",
    "background-color": a2,
    margin: "0"
  };
};
function HeaderComponent_div_7_ngx_skeleton_loader_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-skeleton-loader", 53);
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r28.activeTheme.properties["--skeleton-color"]));
  }
}
function HeaderComponent_div_7_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32)(1, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HeaderComponent_div_7_div_26_div_1_Template_mat_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r32.changeTheme(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_div_7_div_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32)(1, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HeaderComponent_div_7_div_26_div_2_Template_mat_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r34.changeTheme(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_div_7_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HeaderComponent_div_7_div_26_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HeaderComponent_div_7_div_26_div_2_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 54)(4, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mr--5", !ctx_r29.isMobileContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r29.themeService.active.name === "light-theme" && !ctx_r29.isMobileContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r29.themeService.active.name === "dark-theme" && !ctx_r29.isMobileContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 7, ctx_r29.authService.userProfile)) == null ? null : tmp_3_0.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 9, (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 11, ctx_r29.authService.userProfile)) == null ? null : tmp_4_0.sugar));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("src", ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 13, ctx_r29.authService.userProfile)) == null ? null : tmp_5_0.avatar) || ctx_r29.profileImg, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function HeaderComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 36)(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HeaderComponent_div_7_img_2_Template, 1, 0, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, HeaderComponent_div_7_ngx_skeleton_loader_4_Template, 1, 3, "ngx-skeleton-loader", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "nav", 40)(7, "ul")(8, "li")(9, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Grab a slice!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "li")(12, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Confectionery");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "li")(15, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Rewards");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "li")(18, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "li")(21, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "li")(24, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, HeaderComponent_div_7_div_26_Template, 14, 15, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "mat-icon", 49)(30, "mat-icon", 50)(31, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("desktop-size", !ctx_r1.isMobileContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("ml--5", !ctx_r1.isMobileContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 8, ctx_r1.authService.userProfile));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 10, ctx_r1.authService.userProfile) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 12, ctx_r1.authService.userProfile))("ngIfElse", _r4);
  }
}
function HeaderComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 57)(1, "div", 58)(2, "cake-input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("inputClose", function HeaderComponent_ng_template_8_Template_cake_input_inputClose_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r36.switchSearchState());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "mat-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hasCloseCircle", true)("control", ctx_r3.receiveFormControl());
  }
}
function HeaderComponent_ng_template_10_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HeaderComponent_ng_template_10_mat_icon_1_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r40.changeTheme(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_ng_template_10_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HeaderComponent_ng_template_10_mat_icon_2_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r42.changeTheme(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a2) {
  return {
    width: "89px",
    height: "19px",
    "background-color": a2,
    margin: "0"
  };
};
const _c2 = function (a2) {
  return {
    width: "40px",
    height: "40px",
    "background-color": a2
  };
};
function HeaderComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HeaderComponent_ng_template_10_mat_icon_1_Template, 1, 0, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HeaderComponent_ng_template_10_mat_icon_2_Template, 1, 0, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ngx-skeleton-loader", 53)(5, "ngx-skeleton-loader", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "ngx-skeleton-loader", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.themeService.active.name === "light-theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.themeService.active.name === "dark-theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c1, ctx_r5.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c1, ctx_r5.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](9, _c2, ctx_r5.activeTheme.properties["--skeleton-color"]));
  }
}
class HeaderComponent extends _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_2__.Watcher {
  constructor(themeService, location, searchService, router, authService, zone, modalService, route) {
    super();
    this.themeService = themeService;
    this.location = location;
    this.searchService = searchService;
    this.router = router;
    this.authService = authService;
    this.zone = zone;
    this.modalService = modalService;
    this.route = route;
    this.isSearchOpened = false;
    this.redirectTo = '';
    this.settings = false;
    this.isMobileHeaderVisible = false;
    this.isDesktopHeaderVisible = false;
    this.headerSet = false;
  }
  get profileImg() {
    return this.authService.randomAvatar;
  }
  get isMobileContent() {
    return window.innerWidth <= 810;
  }
  ngOnInit() {
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.RoutesRecognized), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.pairwise)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe)).subscribe({
      next: events => {
        this.redirectTo = events[0].urlAfterRedirects;
      }
    });
    this.setRouterData();
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe)).subscribe(val => {
      if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd) {
        this.setRouterData();
      }
    });
  }
  setRouterData() {
    this.headerOptions = this.route.snapshot?.firstChild?.data['headerOptions'];
    this.settings = this.route.snapshot?.firstChild?.firstChild?.data['settings'];
  }
  switchSearchState() {
    this.isSearchOpened = !this.isSearchOpened;
  }
  back() {
    if (!this.redirectTo) {
      this.zone.run(() => {
        this.router.navigateByUrl("/");
      });
      return;
    }
    this.location.back();
  }
  receiveFormControl() {
    return this.searchService.getFormControl();
  }
  //FOR MVP1
  changeTheme(boolean) {
    this.themeService.changeActiveTheme(boolean ? _core_types_Themes__WEBPACK_IMPORTED_MODULE_4__.DarkTheme : _core_types_Themes__WEBPACK_IMPORTED_MODULE_4__.LightTheme);
  }
  get headerImage() {
    return this.activeTheme === _core_types_Themes__WEBPACK_IMPORTED_MODULE_4__.LightTheme ? 'header-light' : 'header-dark';
  }
  addWallet() {
    this.modalService.openAddingWalletPopup();
  }
  get activeTheme() {
    return this.themeService.active;
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_modals_service__WEBPACK_IMPORTED_MODULE_5__.ModalsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["cake-app-header"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
  decls: 12,
  vars: 5,
  consts: [[1, "header"], [1, "vectors-bg", "desktop"], ["loading", "lazy", "alt", "", 3, "src"], [1, "vectors-bg", "mobile"], ["svgIcon", "header-bg-1", 1, "block-1", "header-bg"], ["svgIcon", "header-bg-2", 1, "block-2", "header-bg"], ["class", "wrapper-mobile", 4, "ngIf"], ["class", "wrapper-desktop", 3, "desktop-size", 4, "ngIf"], ["searchTemplate", ""], ["skeletonDesktopTemplate", ""], [1, "wrapper-mobile"], [4, "ngIf", "ngIfElse"], [1, "back-button", "pointer", "clickable-icon", 3, "click"], ["svgIcon", "back"], ["class", "user-detail", 4, "ngIf"], [1, "search-section"], ["class", "icon-section clickable-icon", 3, "click", 4, "ngIf"], ["class", "icon-section", 4, "ngIf"], [1, "user-detail"], ["class", "info header-title", 4, "ngIf"], [1, "info", "header-title"], [1, "user-name"], ["class", "reward-icon", 3, "svgIcon", 4, "ngIf"], ["class", "sugar", 4, "ngIf"], [1, "reward-icon", 3, "svgIcon"], [1, "sugar"], [1, "icon-section", "clickable-icon", 3, "click"], ["svgIcon", "search"], ["svgIcon", "circle-plus"], [1, "icon-section"], [1, "pointer", 2, "margin-top", "1em"], ["class", "clickable-icon", 4, "ngIf"], [1, "clickable-icon"], ["svgIcon", "moon", 1, "icons-theme", 3, "click"], ["svgIcon", "sun", 1, "icons-theme", 3, "click"], ["routerLink", "profile/settings", "svgIcon", "edit"], [1, "wrapper-desktop"], ["routerLink", "/home", 1, "logo"], ["loading", "lazy", "src", "../../../assets/imgs/logo-dark.png", "alt", "", 4, "ngIf"], ["count", "1", 3, "theme", 4, "ngIf"], [1, "navigation"], ["routerLink", "/grab-a-slice", "routerLinkActive", "active", 1, "link"], ["routerLink", "/confectionery", "routerLinkActive", "active", 1, "link"], ["routerLink", "/rewards", "routerLinkActive", "active", "id", "reward-link", 1, "link"], ["href", "https://piurfe.axshare.com/#id=rny0f2&p=friends&c=1", "routerLinkActive", "active", 1, "link"], ["href", "https://piurfe.axshare.com/#id=vpkgpf&p=about&c=1", "routerLinkActive", "active", 1, "link"], ["href", "https://piurfe.axshare.com/#id=pc7v7d&p=wallet&c=1", "routerLinkActive", "active", 1, "link"], ["class", "user-detail", 3, "mr--5", 4, "ngIf", "ngIfElse"], [1, "icons"], ["routerLink", "/confectionery", "svgIcon", "confectionery", 1, "pointer", "clickable-icon", "router-icon"], ["routerLink", "/rewards", "svgIcon", "reward", 1, "pointer", "clickable-icon", "router-icon"], ["routerLink", "/wallet", "svgIcon", "wallet", 1, "pointer", "clickable-icon", "router-icon"], ["loading", "lazy", "src", "../../../assets/imgs/logo-dark.png", "alt", ""], ["count", "1", 3, "theme"], ["routerLink", "/profile", 1, "info"], ["routerLink", "/profile", 1, "avatar"], ["alt", ""], [1, "search-wrapper"], [1, "search"], [3, "hasCloseCircle", "control", "inputClose"], ["svgIcon", "search-outline"], ["class", "icons-theme", "svgIcon", "moon", 3, "click", 4, "ngIf"], ["class", "icons-theme", "svgIcon", "sun", 3, "click", 4, "ngIf"], [1, "skeleton-info"], [1, "avatar"], ["appearance", "circle", 3, "theme"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "header", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "mat-icon", 4)(5, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, HeaderComponent_div_6_Template, 2, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, HeaderComponent_div_7_Template, 32, 14, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, HeaderComponent_ng_template_8_Template, 4, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, HeaderComponent_ng_template_10_Template, 8, 11, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("p-5", !ctx.headerOptions.default);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("src", "assets/imgs/", ctx.headerImage, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.headerOptions.default && ctx.isMobileContent);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isMobileContent || ctx.isMobileContent && ctx.headerOptions.default);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_15__.NgxSkeletonLoaderComponent, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe, _core_pipes_page_title_pipe__WEBPACK_IMPORTED_MODULE_7__.PageTitlePipe],
  styles: ["@charset \"UTF-8\";\n@font-face {\n  font-family: \"Gilroy-900\";\n  src: local(\"Gilroy-900\"), url('Gilroy-ExtraBold.otf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Gilroy-400\";\n  src: local(\"Gilroy-400\"), url('Gilroy-Light.otf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Gilroy-500\";\n  src: local(\"Gilroy-500\"), url('Gilroy-Medium.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Gilroy-600\";\n  src: local(\"Gilroy-600\"), url('Gilroy-Semibold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Santhony\";\n  src: local(\"Santhony\"), url('santhony.regular.otf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Gilroy-Regular\";\n  src: local(\"Gilroy-Regular\"), url('Gilroy-Regular.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n.button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  border-radius: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Gilroy-500\";\n  font-size: 16px;\n  transition: 0.5s ease-in-out;\n}\n.button[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n  font-size: 28px;\n  margin-right: 5px;\n  font-family: \"Gilroy-400\";\n}\n.button[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n.button.primary[_ngcontent-%COMP%] {\n  color: var(--color-fonts-3);\n  background: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  border: 2px solid linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  border-image-slice: 1;\n}\n.button.primary[_ngcontent-%COMP%]:hover {\n  color: var(--color-fonts-3);\n  background: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  text-decoration: none;\n  border: 2px solid linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n}\n.button.primary[_ngcontent-%COMP%]:disabled {\n  color: var(--color-fonts-3);\n  background: linear-gradient(var(--deg-gradient-disabled), var(--color-gradient-left-disabled), var(--color-gradient-right-disabled));\n  border: 2px solid linear-gradient(var(--deg-gradient-disabled), var(--color-gradient-left-disabled), var(--color-gradient-right-disabled));\n  cursor: not-allowed;\n  border-image-slice: 1;\n}\n.button.secondary[_ngcontent-%COMP%] {\n  background: var(--color-transparent);\n  border: none;\n  position: relative;\n  background-color: var(--color-gradient-left-3);\n  background-image: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.secondary[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 16px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.button.secondary[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n  text-decoration: none;\n  position: relative;\n  background-color: var(--color-gradient-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.secondary[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 16px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.button.secondary.unfollow[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n  text-decoration: none;\n  position: relative;\n  background-color: var(--color-gradient-left-7);\n  background-image: linear-gradient(var(--deg-gradient-7), var(--color-gradient-left-7), var(--color-gradient-right-7));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.secondary.unfollow[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 16px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-7), var(--color-gradient-left-7), var(--color-gradient-right-7));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.button.pink[_ngcontent-%COMP%] {\n  color: #fff;\n  background: linear-gradient(var(--deg-gradient-live-events), var(--color-gradient-left-live-events), var(--color-gradient-right-live-events));\n  border: 2px solid linear-gradient(var(--deg-gradient-live-events), var(--color-gradient-left-live-events), var(--color-gradient-right-live-events));\n  border-image-slice: 1;\n}\n.button.secondary-pink[_ngcontent-%COMP%] {\n  background: var(--color-transparent);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  color: #977E89;\n}\n.button.error[_ngcontent-%COMP%] {\n  background: var(--color-transparent);\n  border: none;\n  position: relative;\n  background-color: var(--color-gradient-left-4);\n  background-image: linear-gradient(var(--deg-gradient-4), var(--color-gradient-left-4), var(--color-gradient-right-4));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.error[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 16px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-4), var(--color-gradient-left-4), var(--color-gradient-right-4));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.button.error[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n  text-decoration: none;\n  position: relative;\n  background-color: var(--color-gradient-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.error[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 16px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.button.tertiary[_ngcontent-%COMP%] {\n  border: none;\n  background: -webkit-linear-gradient(var(--color-transparent));\n  background-color: var(--color-gradient-left-3);\n  background-image: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.tertiary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  background: -webkit-linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.tertiary[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n  text-decoration: none;\n  background-color: var(--color-gradient-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.tertiary[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n  text-decoration: none;\n  background-color: var(--color-gradient-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.tertiary[_ngcontent-%COMP%]:disabled {\n  -webkit-text-fill-color: var(--color-fonts-list-head);\n  -moz-text-fill-color: var(--color-fonts-list-head);\n  cursor: not-allowed;\n}\n\n\n.toast-center-center[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.toast-top-center[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-center[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-full-width[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-full-width[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-left[_ngcontent-%COMP%] {\n  top: 12px;\n  left: 12px;\n}\n.toast-top-right[_ngcontent-%COMP%] {\n  top: 12px;\n  right: 12px;\n}\n.toast-bottom-right[_ngcontent-%COMP%] {\n  right: 12px;\n  bottom: 12px;\n}\n.toast-bottom-left[_ngcontent-%COMP%] {\n  bottom: 12px;\n  left: 12px;\n}\n\n.toast-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.toast-message[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n.toast-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .toast-message[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n.toast-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n.toast-close-button[_ngcontent-%COMP%] {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  \n}\n.toast-close-button[_ngcontent-%COMP%]:hover, .toast-close-button[_ngcontent-%COMP%]:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n\nbutton.toast-close-button[_ngcontent-%COMP%] {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.toast-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n.toast-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.toast-container[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  border-radius: 16px;\n}\n.toast-container[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.toast-info[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOS4wNDMgOCA4IDExOS4wODMgOCAyNTZjMCAxMzYuOTk3IDExMS4wNDMgMjQ4IDI0OCAyNDhzMjQ4LTExMS4wMDMgMjQ4LTI0OEM1MDQgMTE5LjA4MyAzOTIuOTU3IDggMjU2IDh6bTAgMTEwYzIzLjE5NiAwIDQyIDE4LjgwNCA0MiA0MnMtMTguODA0IDQyLTQyIDQyLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDJ6bTU2IDI1NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC04OGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgxMnYtNjRoLTEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDY0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MTAwaDEyYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MjR6Jy8+PC9zdmc+\");\n}\n\n.toast-error[_ngcontent-%COMP%] {\n  background-image: url('toastr-warning-icon.svg');\n}\n\n.toast-success[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicvPjwvc3ZnPg==\");\n}\n\n.toast-warning[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJyB3aWR0aD0nNTc2JyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTU2OS41MTcgNDQwLjAxM0M1ODcuOTc1IDQ3Mi4wMDcgNTY0LjgwNiA1MTIgNTI3Ljk0IDUxMkg0OC4wNTRjLTM2LjkzNyAwLTU5Ljk5OS00MC4wNTUtNDEuNTc3LTcxLjk4N0wyNDYuNDIzIDIzLjk4NWMxOC40NjctMzIuMDA5IDY0LjcyLTMxLjk1MSA4My4xNTQgMGwyMzkuOTQgNDE2LjAyOHpNMjg4IDM1NGMtMjUuNDA1IDAtNDYgMjAuNTk1LTQ2IDQ2czIwLjU5NSA0NiA0NiA0NiA0Ni0yMC41OTUgNDYtNDYtMjAuNTk1LTQ2LTQ2LTQ2em0tNDMuNjczLTE2NS4zNDZsNy40MTggMTM2Yy4zNDcgNi4zNjQgNS42MDkgMTEuMzQ2IDExLjk4MiAxMS4zNDZoNDguNTQ2YzYuMzczIDAgMTEuNjM1LTQuOTgyIDExLjk4Mi0xMS4zNDZsNy40MTgtMTM2Yy4zNzUtNi44NzQtNS4wOTgtMTIuNjU0LTExLjk4Mi0xMi42NTRoLTYzLjM4M2MtNi44ODQgMC0xMi4zNTYgNS43OC0xMS45ODEgMTIuNjU0eicvPjwvc3ZnPg==\");\n}\n.toast-container.toast-top-center[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%], .toast-container.toast-bottom-center[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%] {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.toast-container.toast-top-full-width[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%], .toast-container.toast-bottom-full-width[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%] {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.ngx-toastr[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.toast-success[_ngcontent-%COMP%] {\n  background-color: #51A351;\n}\n.toast-error[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  background-color: var(--color-toastr-left);\n  border: 1px solid var(--color-toastr-right);\n  color: #EC1A1A !important;\n}\n.toast-info[_ngcontent-%COMP%] {\n  background-color: #2F96B4;\n}\n.toast-warning[_ngcontent-%COMP%] {\n  background-color: #F89406;\n}\n.toast-progress[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  opacity: 0.4;\n}\n\n@media all and (max-width: 240px) {\n  .toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%] {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container[_ngcontent-%COMP%]   .toast-close-button[_ngcontent-%COMP%] {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%] {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container[_ngcontent-%COMP%]   .toast-close-button[_ngcontent-%COMP%] {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%] {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\nmat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nmat-icon.tertiary[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   defs[_ngcontent-%COMP%]   linearGradient[_ngcontent-%COMP%]   stop[_ngcontent-%COMP%]:first-of-type {\n  stop-color: var(--color-gradient-left-icon-hover);\n}\nmat-icon.tertiary[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   defs[_ngcontent-%COMP%]   linearGradient[_ngcontent-%COMP%]   stop[_ngcontent-%COMP%]:last-of-type {\n  stop-color: var(--color-gradient-right-icon-hover);\n}\nmat-icon.tertiary[_ngcontent-%COMP%]     svg defs linearGradient stop:first-of-type {\n  stop-color: var(--color-gradient-left-icon);\n}\nmat-icon.tertiary[_ngcontent-%COMP%]     svg defs linearGradient stop:last-of-type {\n  stop-color: var(--color-gradient-right-icon);\n}\nmat-icon.primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: var(--color-tooltip-text);\n}\nmat-icon.header-bg[_ngcontent-%COMP%]     svg defs linearGradient stop:first-of-type {\n  stop-color: var(--header-color-gradient-left-1);\n}\nmat-icon.header-bg[_ngcontent-%COMP%]     svg defs linearGradient stop:last-of-type {\n  stop-color: var(--header-color-gradient-right-1);\n}\n.animation-hidden-skeleton[_ngcontent-%COMP%] {\n  animation: hide-skeleton 0.5s ease-in-out;\n}\n@keyframes hide-skeleton {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.icons-theme[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  margin-right: 10px;\n}\n.header[_ngcontent-%COMP%] {\n  padding: 8px 50px 0 50px;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n}\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n}\n@media (min-width: 1440px) {\n  .header[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n}\n@media (min-width: 1650px) {\n  .header[_ngcontent-%COMP%] {\n    margin-bottom: 90px !important;\n  }\n}\n@media (min-width: 2560px) {\n  .header[_ngcontent-%COMP%] {\n    margin-bottom: 150px !important;\n  }\n}\n@media (max-width: 1440px) {\n  .header[_ngcontent-%COMP%] {\n    overflow: hidden;\n    height: 160px;\n  }\n}\n@media (max-width: 425px) {\n  .header[_ngcontent-%COMP%] {\n    overflow: initial;\n    height: auto;\n  }\n}\n.header[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%] {\n  height: 170px !important;\n}\n@media (max-width: 425px) {\n  .header[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.header[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 370px !important;\n}\n@media (min-width: 426px) {\n  .header[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: -7px;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  overflow: hidden;\n}\n.header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2880.01px;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 170px;\n  }\n}\n.header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   .block-1[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   .block-2[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n}\n@media (min-width: 1440px) {\n  .header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   .block-1[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   .block-2[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n}\n@media (max-width: 425px) {\n  .header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   .block-1[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   .block-2[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n}\n.header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   .block-1[_ngcontent-%COMP%]   .block-3[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   .block-2[_ngcontent-%COMP%]   .block-3[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: inherit;\n  justify-content: space-between;\n  width: 100%;\n  margin: 10px 0;\n}\n@media (max-width: 810px) {\n  .header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n}\n@media (max-width: 425px) {\n  .header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n}\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   cake-input[_ngcontent-%COMP%] {\n  margin-top: -0.7em;\n}\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]:has(div   cake-input)[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  height: -moz-fit-content;\n  height: fit-content;\n  cursor: pointer;\n}\n@media (max-width: 810px) {\n  .header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n    width: 80%;\n  }\n}\n@media (max-width: 425px) {\n  .header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-right: 14px;\n}\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info.header-title[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-left: 30px;\n}\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info.header-title[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 22px;\n  position: relative;\n  text-align: left;\n  margin: 0;\n}\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info.header-title[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  left: -43px;\n  margin: 0;\n}\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info.header-title[_ngcontent-%COMP%]   .sugar[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Gilroy-400\";\n  text-align: left;\n}\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    margin: 0;\n    text-align: left;\n    margin-left: 14px;\n  }\n}\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-family: \"Gilroy-500\";\n  font-size: 16px;\n  margin: 0 -40px 0;\n}\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   .reward-icon[_ngcontent-%COMP%] {\n  margin-left: 11px;\n  vertical-align: middle;\n  display: inline-block;\n}\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .sugar[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-family: \"Gilroy-500\";\n  font-size: 12px;\n  margin: 0;\n}\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: inherit;\n  justify-content: inherit;\n  width: 100%;\n}\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  cursor: pointer;\n  z-index: 1;\n}\n@media (max-width: 810px) {\n  .header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 185px;\n}\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n@media (max-width: 810px) {\n  .header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0;\n}\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0 20px;\n}\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-decoration: none;\n  padding-bottom: 8px;\n  color: #ffffff;\n  font-family: \"Gilroy-500\";\n}\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link.active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--color-header-active);\n}\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid var(--color-header-active);\n}\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  z-index: 1;\n  margin-top: 1em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100px;\n}\n@media (min-width: 811px) {\n  .header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 425px) {\n  .header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: 0px 1px 4px rgba(103, 103, 103, 0.15);\n}\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  height: -moz-fit-content;\n  height: fit-content;\n  cursor: pointer;\n}\n@media (max-width: 810px) {\n  .header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n}\n@media (max-width: 425px) {\n  .header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-right: 14px;\n}\n@media (max-width: 810px) {\n  .header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    margin: 0;\n    text-align: left;\n    margin-left: 14px;\n  }\n}\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-family: \"Gilroy-500\";\n  font-size: 16px;\n  margin: 0;\n}\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .sugar[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-family: \"Gilroy-500\";\n  font-size: 12px;\n  margin: 0;\n}\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 50px;\n  background: rgba(255, 255, 255, 0.3);\n  position: relative;\n  transform: translateY(-5px);\n}\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 40px;\n  height: 40px;\n  border-radius: 50px;\n}\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  width: inherit;\n  display: flex;\n  margin-top: 16px;\n  justify-content: center;\n}\n.search-wrapper[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  width: 336px;\n  height: 40px;\n}\n.skeleton-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: right;\n}\n.clickable-icon[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n}\n.router-icon[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  font-size: 24px;\n}\n.p-5[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.desktop-size[_ngcontent-%COMP%] {\n  width: calc(100% - 46px - 46px);\n  margin: 0 46px;\n  padding-top: 10px;\n  justify-content: space-between;\n}\n.ml--5[_ngcontent-%COMP%] {\n  margin-left: -5px;\n}\n.mr--5[_ngcontent-%COMP%] {\n  margin-right: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL19mb250cy5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9jb21wb25lbnRzL2J1dHRvbi5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwvX21peGlucy5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9jb21wb25lbnRzL3RvYXN0ZXIuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29tcG9uZW50cy9pY29uLnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9fYW5pbWF0aW9ucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLHlCQUFBO0VBQ0Esd0VBQUE7RUFHQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURBRjtBQ0dBO0VBQ0UseUJBQUE7RUFDQSxvRUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRERGO0FDR0E7RUFDRSx5QkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEREY7QUNJQTtFQUNFLHlCQUFBO0VBQ0EsdUVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURGRjtBQ0tBO0VBQ0UsdUJBQUE7RUFDQSxzRUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBREhGO0FDTUE7RUFDRSw2QkFBQTtFQUNBLDBFQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FESkY7QUV4Q0E7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBRjBDRDtBRXhDQztFQUNDLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUYwQ0Y7QUV2Q0M7RUFDQyxhQUFBO0FGeUNGO0FFdENDO0VDRkMsMkJESUM7RUNIRCwrR0RJQztFQ0hELHFIQUFBO0VBQ0EscUJBQUE7QUgyQ0Y7QUduRUU7RUFDRSwyQkQ2QkQ7RUM1QkMsK0dENkJEO0VDNUJDLHFCQUFBO0VBQ0EscUhBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUhxRUo7QUdoRUU7RUFDRSwyQkR1QkQ7RUN0QkMsb0lEdUJEO0VDdEJDLDBJQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBSGtFSjtBRXpDQztFQUNDLG9DQUFBO0VBQ0EsWUFBQTtFQ0RBLGtCQUFBO0VBa0JBLDhDRGZxRDtFQ2dCckQscUhBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUg0QkY7QUdqREU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLG1CREp1SDtFQ0t2SCxZRExrSDtFQ01sSCwrR0FBQTtFQUNBLDhFQUFBLEVBQ3VDLFFBQUE7RUFDdkMsMkJBQUEsRUFBQSxnQ0FBQTtFQUNBLHVCQUFBLEVBQUEsUUFBQTtFQUNBLG9CQUFBO0FIa0RKO0FFMURFO0VBQ0MsZUFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUNSRCxrQkFBQTtFQWtCQSw4Q0RSc0Q7RUNTdEQscUhBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUhvREY7QUd6RUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLG1CREd3SDtFQ0Z4SCxZREVtSDtFQ0RuSCwrR0FBQTtFQUNBLDhFQUFBLEVBQ3VDLFFBQUE7RUFDdkMsMkJBQUEsRUFBQSxnQ0FBQTtFQUNBLHVCQUFBLEVBQUEsUUFBQTtFQUNBLG9CQUFBO0FIMEVKO0FFMUVFO0VBQ0MsZUFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUNoQkQsa0JBQUE7RUFrQkEsOENBQUE7RUFDQSxxSEFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBSDRFRjtBR2pHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJEV3dIO0VDVnhILFlEVW1IO0VDVG5ILCtHQUFBO0VBQ0EsOEVBQUEsRUFDdUMsUUFBQTtFQUN2QywyQkFBQSxFQUFBLGdDQUFBO0VBQ0EsdUJBQUEsRUFBQSxRQUFBO0VBQ0Esb0JBQUE7QUhrR0o7QUV6RkU7RUMzQ0EsV0Q2Q0M7RUM1Q0QsNklENkNDO0VDNUNELG1KQUFBO0VBQ0EscUJBQUE7QUh1SUY7QUV2RkU7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0MsY0FBQTtBRnlGSDtBRXRGQztFQUNDLG9DQUFBO0VBQ0EsWUFBQTtFQ3RDQSxrQkFBQTtFQWtCQSw4Q0RzQnFEO0VDckJyRCxxSEFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBSDhHRjtBR25JRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJEaUN1SDtFQ2hDdkgsWURnQ2tIO0VDL0JsSCwrR0FBQTtFQUNBLDhFQUFBLEVBQ3VDLFFBQUE7RUFDdkMsMkJBQUEsRUFBQSxnQ0FBQTtFQUNBLHVCQUFBLEVBQUEsUUFBQTtFQUNBLG9CQUFBO0FIb0lKO0FFdkdFO0VBQ0MsZUFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUM3Q0Qsa0JBQUE7RUFrQkEsOENENkJzRDtFQzVCdEQscUhBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUhzSUY7QUczSkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLG1CRHdDd0g7RUN2Q3hILFlEdUNtSDtFQ3RDbkgsK0dBQUE7RUFDQSw4RUFBQSxFQUN1QyxRQUFBO0VBQ3ZDLDJCQUFBLEVBQUEsZ0NBQUE7RUFDQSx1QkFBQSxFQUFBLFFBQUE7RUFDQSxvQkFBQTtBSDRKSjtBRXRIQztFQUNDLFlBQUE7RUFDQSw2REFBQTtFQ25DQSw4Q0RvQ3FEO0VDbkNyRCxxSEFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBSDRKRjtBRTFIRTtFQUNDLGdCQUFBO0VDdkJELHVIQUFBO0VBR0EsNkJBQUE7RUFDQSxvQ0FBQTtBSGtKRjtBRTNIRTtFQUNDLGVBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VDOUNELDhDRCtDc0Q7RUM5Q3RELHFIQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FINEtGO0FFL0hHO0VBQ0MsZUFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUNwREYsOENEcUR1RDtFQ3BEdkQscUhBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUhzTEY7QUVqSUU7RUFDQyxxREFBQTtFQUNBLGtEQUFBO0VBQ0EsbUJBQUE7QUZtSUg7QUk1UEEsa0pBQUE7QUFFQSxhQUFBO0FBQ0E7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FKOFBKO0FJNVBFO0VBQ0UsTUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FKK1BKO0FJN1BFO0VBQ0UsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FKZ1FKO0FJOVBFO0VBQ0UsTUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FKaVFKO0FJL1BFO0VBQ0UsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FKa1FKO0FJaFFFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUptUUo7QUlqUUU7RUFDRSxTQUFBO0VBQ0EsV0FBQTtBSm9RSjtBSWxRRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FKcVFKO0FJblFFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUpzUUo7QUluUUUsaUJBQUE7QUFDQTtFQUNFLGlCQUFBO0FKc1FKO0FJcFFFO0VBQ0UscUJBQUE7QUp1UUo7QUlyUUU7O0VBRUUsY0FBQTtBSndRSjtBSXRRRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBSnlRSjtBSXZRRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUowUUo7QUl4UUU7O0VBRUUsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUoyUUo7QUl6UUU7O3lEQUFBO0FBR0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBSjRRSjtBSTFRRTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUo2UUo7QUkzUUU7RUFDRSxzQkFBQTtBSjhRSjtBSTVRRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBSitRSjtBSTdRRTtFQUNFLGVBQUE7QUpnUko7QUk5UUUsaUhBQUE7QUFDQTtFQUNFLG12QkFBQTtBSmlSSjtBSS9RRSxrSEFBQTtBQUNBO0VBQ0UsZ0RBQUE7QUprUko7QUloUkUsMkdBQUE7QUFDQTtFQUNFLCtrQkFBQTtBSm1SSjtBSWpSRSwwSEFBQTtBQUNBO0VBQ0UsdXpCQUFBO0FKb1JKO0FJbFJFOztFQUVFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FKcVJKO0FJblJFOztFQUVFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FKc1JKO0FJcFJFO0VBRUUsb0JBQUE7QUpzUko7QUlwUkU7RUFDRSx5QkFBQTtBSnVSSjtBSXJSRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtBSndSSjtBSXRSRTtFQUNFLHlCQUFBO0FKeVJKO0FJdlJFO0VBQ0UseUJBQUE7QUowUko7QUl4UkU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUVBLFlBQUE7QUowUko7QUl4UkUsc0JBQUE7QUFDQTtFQUNFO0lBQ0UseUJBQUE7SUFDQSxXQUFBO0VKMlJKO0VJelJFO0lBQ0UsYUFBQTtJQUNBLFdBQUE7RUoyUko7QUFDRjtBSXpSRTtFQUNFO0lBQ0UseUJBQUE7SUFDQSxXQUFBO0VKMlJKO0VJelJFO0lBQ0UsYUFBQTtJQUNBLFdBQUE7RUoyUko7QUFDRjtBSXpSRTtFQUNFO0lBQ0UsNEJBQUE7SUFDQSxXQUFBO0VKMlJKO0FBQ0Y7QUsxZEE7RUFDQyxlQUFBO0FMNGREO0FLbGRPO0VBQ0MsaURBQUE7QUxvZFI7QUtsZE87RUFDQyxrREFBQTtBTG9kUjtBS3hjTTtFQUNDLDJDQUFBO0FMMGNQO0FLeGNNO0VBQ0MsNENBQUE7QUwwY1A7QUtoY1k7RUFDSSwrQkFBQTtBTGtjaEI7QUt6YndCO0VBQ0ksK0NBQUE7QUwyYjVCO0FLemJ3QjtFQUNJLGdEQUFBO0FMMmI1QjtBTWpmQTtFQUNJLHlDQUFBO0FOb2ZKO0FNaGZBO0VBQ0k7SUFDRSxVQUFBO0VObWZKO0VNamZFO0lBQ0UsVUFBQTtFTm1mSjtBQUNGO0FBeGZBO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtBQTBmRjtBQXZmQTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUEwZkY7QUF4ZkU7RUFORjtJQU9JLGFBQUE7RUEyZkY7QUFDRjtBQXpmRTtFQVZGO0lBV0ksbUJBQUE7RUE0ZkY7QUFDRjtBQTFmRTtFQWRGO0lBZUksOEJBQUE7RUE2ZkY7QUFDRjtBQTNmRTtFQWxCRjtJQW1CSSwrQkFBQTtFQThmRjtBQUNGO0FBNWZFO0VBdEJGO0lBdUJJLGdCQUFBO0lBQ0EsYUFBQTtFQStmRjtBQUNGO0FBN2ZFO0VBM0JGO0lBNEJJLGlCQUFBO0lBQ0EsWUFBQTtFQWdnQkY7QUFDRjtBQTlmRTtFQUNFLHdCQUFBO0FBZ2dCSjtBQS9mSTtFQUZGO0lBR0ksYUFBQTtFQWtnQko7QUFDRjtBQWhnQkU7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7QUFrZ0JKO0FBamdCSTtFQUhGO0lBSUksYUFBQTtFQW9nQko7QUFDRjtBQWxnQkU7RUFDRSxvQkFBQTtFQUVBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFFQSxnQkFBQTtBQWtnQko7QUFqZ0JJO0VBQ0Usa0JBQUE7QUFtZ0JOO0FBaGdCSTtFQUNFLGdCQUFBO0FBa2dCTjtBQWpnQk07RUFGRjtJQUdJLGFBQUE7RUFvZ0JOO0FBQ0Y7QUFqZ0JJOztFQUVFLE1BQUE7RUFDQSxPQUFBO0FBbWdCTjtBQWpnQk07RUFMRjs7SUFNSSxXQUFBO0lBQ0EsWUFBQTtFQXFnQk47QUFDRjtBQW5nQk07RUFWRjs7SUFXSSxXQUFBO0lBQ0EsWUFBQTtFQXVnQk47QUFDRjtBQXJnQk07O0VBQ0UsU0FBQTtBQXdnQlI7QUFuZ0JFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQXFnQko7QUFuZ0JJO0VBUEY7SUFRSSx1QkFBQTtFQXNnQko7QUFDRjtBQXJnQkk7RUFWRjtJQVdJLG1CQUFBO0VBd2dCSjtBQUNGO0FBcmdCTTtFQUNFLGtCQUFBO0FBdWdCUjtBQW5nQkk7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7QUFxZ0JOO0FBbGdCSTtFQUNFLGVBQUE7QUFvZ0JOO0FBN2ZJO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZUFBQTtBQStmTjtBQTdmTTtFQVJGO0lBU0ksMkJBQUE7SUFDQSxVQUFBO0VBZ2dCTjtBQUNGO0FBOWZNO0VBYkY7SUFjSSxhQUFBO0VBaWdCTjtBQUNGO0FBL2ZNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQWlnQlI7QUEvZlE7RUFDRSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUJBQUE7QUFpZ0JWO0FBL2ZVO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBaWdCWjtBQS9mWTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQWlnQmQ7QUE3ZlU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQStmWjtBQTNmUTtFQTlCRjtJQStCSSxTQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQThmUjtBQUNGO0FBNWZRO0VBdkxOLGNBQUE7RUFDQSx5QkFBQTtFQXdMUSxlQUFBO0VBQ0EsaUJBQUE7QUErZlY7QUE3ZlU7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUErZlo7QUEzZlE7RUFuTU4sY0FBQTtFQUNBLHlCQUFBO0VBb01RLGVBQUE7RUFDQSxTQUFBO0FBOGZWO0FBeGZFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FBMGZKO0FBeGZJO0VBS0UsZUFBQTtFQUNBLFVBQUE7QUFzZk47QUEzZk07RUFERjtJQUVJLGFBQUE7RUE4Zk47QUFDRjtBQXpmTTtFQUNFLFlBQUE7QUEyZlI7QUF2Zkk7RUFDRSxVQUFBO0FBeWZOO0FBdmZNO0VBSEY7SUFJSSxhQUFBO0VBMGZOO0FBQ0Y7QUF4Zk07RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQTBmUjtBQXhmUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBMGZWO0FBeGZVO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFqUFYsY0FBQTtFQUNBLHlCQUFBO0FBNHVCRjtBQXpmWTtFQUNFLG1EQUFBO0FBMmZkO0FBeGZZO0VBQ0UsbURBQUE7QUEwZmQ7QUFuZkk7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFlBQUE7QUFxZk47QUFuZk07RUFURjtJQVVJLGFBQUE7RUFzZk47QUFDRjtBQXBmTTtFQWJGO0lBY0ksYUFBQTtFQXVmTjtBQUNGO0FBcmZNO0VBQ0UsaURBQUE7QUF1ZlI7QUFuZkk7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxlQUFBO0FBcWZOO0FBbmZNO0VBUkY7SUFTSSwyQkFBQTtFQXNmTjtBQUNGO0FBcGZNO0VBWkY7SUFhSSxhQUFBO0VBdWZOO0FBQ0Y7QUFyZk07RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBdWZSO0FBcmZRO0VBSkY7SUFLSSxTQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQXdmUjtBQUNGO0FBdGZRO0VBaFROLGNBQUE7RUFDQSx5QkFBQTtFQWlUUSxlQUFBO0VBQ0EsU0FBQTtBQXlmVjtBQXRmUTtFQXRUTixjQUFBO0VBQ0EseUJBQUE7RUF1VFEsZUFBQTtFQUNBLFNBQUE7QUF5ZlY7QUFyZk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBdWZSO0FBcmZRO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQXVmVjtBQWhmQTtFQUNFLGtCQUFBO0FBbWZGO0FBaGZBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBbWZGO0FBbGZFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFvZko7QUEvZUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQWtmRjtBQTllQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBaWZGO0FBOWVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBaWZGO0FBOWVBO0VBQ0UsWUFBQTtBQWlmRjtBQTllQTtFQUNFLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFpZkY7QUE5ZUE7RUFDRSxpQkFBQTtBQWlmRjtBQTllQTtFQUNFLGtCQUFBO0FBaWZGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cbkBtaXhpbiBmb250LWNvbG9yIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95LTUwMCc7XG59XG5cbi5pY29ucy10aGVtZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmhlYWRlciB7XG4gIHBhZGRpbmc6IDhweCA1MHB4IDAgNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDE2NTBweCkge1xuICAgIG1hcmdpbi1ib3R0b206IDkwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAyNTYwcHgpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNTBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5kZXNrdG9wIHtcbiAgICBoZWlnaHQ6IDE3MHB4ICFpbXBvcnRhbnQ7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICAubW9iaWxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM3MHB4ICFpbXBvcnRhbnQ7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQyNnB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICAudmVjdG9ycy1iZyB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICB0b3A6IC03cHg7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDA7XG5cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hdC1pY29uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDI4ODAuMDFweDtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBoZWlnaHQ6IDE3MHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ibG9jay0xLFxuICAgIC5ibG9jay0yIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5ibG9jay0zIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC53cmFwcGVyLW1vYmlsZSB7XG4gICAgei1pbmRleDogMTtcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDEwcHggMDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MTBweCkge1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICBkaXYge1xuICAgICAgY2FrZS1pbnB1dCB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0wLjdlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhhcyhkaXYgY2FrZS1pbnB1dCkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuYmFjay1idXR0b24ge1xuICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIH1cblxuICAgIC5zZWFyY2gtc2VjdGlvbiB7XG4gICAgICAvLyBtYXJnaW4tdG9wOiAxZW07XG4gICAgfVxuXG4gICAgLnVzZXItZGV0YWlsIHtcbiAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogODEwcHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cblxuICAgICAgLmluZm8ge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuXG4gICAgICAgICYuaGVhZGVyLXRpdGxlIHtcbiAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG5cbiAgICAgICAgICAudXNlci1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICBsZWZ0OiAtNDNweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdWdhciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0dpbHJveS00MDAnO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICAgIEBpbmNsdWRlIGZvbnQtY29sb3I7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbjogMCAtNDBweCAwO1xuXG4gICAgICAgICAgLnJld2FyZC1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc3VnYXIge1xuICAgICAgICAgIEBpbmNsdWRlIGZvbnQtY29sb3I7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC53cmFwcGVyLWRlc2t0b3Age1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAubG9nbyB7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogODEwcHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgei1pbmRleDogMTtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDE4NXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgIHotaW5kZXg6IDE7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MTBweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcblxuICAgICAgICAgIC5saW5rIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgICBAaW5jbHVkZSBmb250LWNvbG9yO1xuXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci1oZWFkZXItYWN0aXZlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci1oZWFkZXItYWN0aXZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaWNvbnMge1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgIHdpZHRoOiAxMDBweDtcblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgxMXB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDRweCByZ2JhKDEwMywgMTAzLCAxMDMsIDAuMTUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC51c2VyLWRldGFpbCB7XG4gICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgxMHB4KSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICB9XG5cbiAgICAgIC5pbmZvIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODEwcHgpIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICAgIEBpbmNsdWRlIGZvbnQtY29sb3I7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWdhciB7XG4gICAgICAgICAgQGluY2x1ZGUgZm9udC1jb2xvcjtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hdmF0YXIge1xuICAgICAgICB3aWR0aDogNDZweDtcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5zZWFyY2gtd3JhcHBlciB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLnNlYXJjaCB7XG4gICAgd2lkdGg6IDMzNnB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxufVxuXG5cbi5za2VsZXRvbi1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cblxuLmNsaWNrYWJsZS1pY29uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucm91dGVyLWljb24ge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5wLTUge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5kZXNrdG9wLXNpemUge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDZweCAtIDQ2cHgpO1xuICBtYXJnaW46IDAgNDZweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1sLS01IHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG5cbi5tci0tNSB7XG4gIG1hcmdpbi1yaWdodDogLTVweDtcbn1cbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dpbHJveS05MDAnO1xuICBzcmM6IGxvY2FsKCdHaWxyb3ktOTAwJyksIHVybCguLy4uLy4uL2ZvbnRzL0dpbHJveS1FeHRyYUJvbGQub3RmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cbiAgLy8gbmVlZCBmb3IgU2FmYXJpIGNvbXBhYmlsaXR5XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNDAwJztcbiAgc3JjOiBsb2NhbCgnR2lscm95LTQwMCcpLCB1cmwoLi8uLi8uLi9mb250cy9HaWxyb3ktTGlnaHQub3RmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95LTUwMCc7XG4gIHNyYzogbG9jYWwoJ0dpbHJveS01MDAnKSwgdXJsKC4vLi4vLi4vZm9udHMvR2lscm95LU1lZGl1bS50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dpbHJveS02MDAnO1xuICBzcmM6IGxvY2FsKCdHaWxyb3ktNjAwJyksIHVybCguLy4uLy4uL2ZvbnRzL0dpbHJveS1TZW1pYm9sZC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NhbnRob255JztcbiAgc3JjOiBsb2NhbCgnU2FudGhvbnknKSwgdXJsKC4vLi4vLi4vZm9udHMvc2FudGhvbnkucmVndWxhci5vdGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dpbHJveS1SZWd1bGFyJztcbiAgc3JjOiBsb2NhbCgnR2lscm95LVJlZ3VsYXInKSwgdXJsKC4vLi4vLi4vZm9udHMvR2lscm95LVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuIiwiQGltcG9ydCBcIi4uL2dsb2JhbC9taXhpbnNcIjtcblxuLmJ1dHRvbiB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDQwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmb250LWZhbWlseTogXCJHaWxyb3ktNTAwXCI7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0dHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcblxuXHQucGx1cyB7XG5cdFx0cGFkZGluZy10b3A6IDAgIWltcG9ydGFudDsgXG5cdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdG1hcmdpbi1yaWdodDogNXB4O1xuXHRcdGZvbnQtZmFtaWx5OiBcIkdpbHJveS00MDBcIjtcblx0fVxuXG5cdCY6Zm9jdXMtdmlzaWJsZSB7XG5cdFx0b3V0bGluZTogbm9uZTtcblx0fVxuXG5cdCYucHJpbWFyeSB7XG5cdFx0QGluY2x1ZGUgYnRuLWRlZmF1bHQoXG5cdFx0XHR2YXIoLS1jb2xvci1mb250cy0zKSxcblx0XHRcdGxpbmVhci1ncmFkaWVudCh2YXIoLS1kZWctZ3JhZGllbnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTMpKSxcblx0XHRcdGxpbmVhci1ncmFkaWVudCh2YXIoLS1kZWctZ3JhZGllbnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTMpKVxuXHRcdCk7XG5cdFx0QGluY2x1ZGUgYnRuLWhvdmVyKFxuXHRcdFx0dmFyKC0tY29sb3ItZm9udHMtMyksXG5cdFx0XHRsaW5lYXItZ3JhZGllbnQodmFyKC0tZGVnLWdyYWRpZW50LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0xKSksXG5cdFx0XHRsaW5lYXItZ3JhZGllbnQodmFyKC0tZGVnLWdyYWRpZW50LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0xKSlcblx0XHQpO1xuXHRcdEBpbmNsdWRlIGJ0bi1kaXNhYmxlZChcblx0XHRcdHZhcigtLWNvbG9yLWZvbnRzLTMpLFxuXHRcdFx0bGluZWFyLWdyYWRpZW50KHZhcigtLWRlZy1ncmFkaWVudC1kaXNhYmxlZCksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtZGlzYWJsZWQpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC1kaXNhYmxlZCkpLFxuXHRcdFx0bGluZWFyLWdyYWRpZW50KHZhcigtLWRlZy1ncmFkaWVudC1kaXNhYmxlZCksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtZGlzYWJsZWQpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC1kaXNhYmxlZCkpXG5cdFx0KTtcblx0fVxuXG5cdCYuc2Vjb25kYXJ5IHtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci10cmFuc3BhcmVudCk7XG5cdFx0Ym9yZGVyOiBub25lO1xuXHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1ib3JkZXIodmFyKC0tZGVnLWdyYWRpZW50LTMpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTMpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0zKSwgMnB4LCAxNnB4KTtcblx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dCh2YXIoLS1kZWctZ3JhZGllbnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTMpKTtcblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0dHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1ib3JkZXIodmFyKC0tZGVnLWdyYWRpZW50LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0xKSwgMnB4LCAxNnB4KTtcblx0XHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KHZhcigtLWRlZy1ncmFkaWVudC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMSkpO1xuXHRcdH1cblxuXHRcdCYudW5mb2xsb3c6aG92ZXIge1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0dHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1ib3JkZXIodmFyKC0tZGVnLWdyYWRpZW50LTcpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTcpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC03KSwgMnB4LCAxNnB4KTtcblx0XHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KHZhcigtLWRlZy1ncmFkaWVudC03KSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC03KSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtNykpO1xuXHRcdH1cblx0fVxuXG4gICYucGluayB7XG5cdFx0QGluY2x1ZGUgYnRuLWRlZmF1bHQoXG5cdFx0XHQjZmZmLFxuXHRcdFx0bGluZWFyLWdyYWRpZW50KHZhcigtLWRlZy1ncmFkaWVudC1saXZlLWV2ZW50cyksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtbGl2ZS1ldmVudHMpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC1saXZlLWV2ZW50cykpLFxuXHRcdFx0bGluZWFyLWdyYWRpZW50KHZhcigtLWRlZy1ncmFkaWVudC1saXZlLWV2ZW50cyksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtbGl2ZS1ldmVudHMpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC1saXZlLWV2ZW50cykpXG5cdFx0KTtcblx0fVxuXG4gICYuc2Vjb25kYXJ5LXBpbmsge1xuXHRcdGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXRyYW5zcGFyZW50KTtcblx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdCAgY29sb3I6ICM5NzdFODk7XG5cdH1cblxuXHQmLmVycm9yIHtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci10cmFuc3BhcmVudCk7XG5cdFx0Ym9yZGVyOiBub25lO1xuXHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1ib3JkZXIodmFyKC0tZGVnLWdyYWRpZW50LTQpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTQpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC00KSwgMnB4LCAxNnB4KTtcblx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dCh2YXIoLS1kZWctZ3JhZGllbnQtNCksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtNCksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTQpKTtcblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0dHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1ib3JkZXIodmFyKC0tZGVnLWdyYWRpZW50LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0xKSwgMnB4LCAxNnB4KTtcblx0XHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KHZhcigtLWRlZy1ncmFkaWVudC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMSkpO1xuXHRcdH1cblx0fVxuXG5cdCYudGVydGlhcnkge1xuXHRcdGJvcmRlcjogbm9uZTtcblx0XHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh2YXIoLS1jb2xvci10cmFuc3BhcmVudCkpO1xuXHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KHZhcigtLWRlZy1ncmFkaWVudC0zKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0zKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMykpO1xuXG5cdFx0c3BhbiB7XG5cdFx0XHRwYWRkaW5nLXRvcDogM3B4O1xuXHRcdFx0QGluY2x1ZGUgZ3JhZGllbnQtbGluZXItc3Bhbi10ZXh0KHZhcigtLWRlZy1ncmFkaWVudC0zKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0zKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMykpO1xuXHRcdH1cblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0dHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KHZhcigtLWRlZy1ncmFkaWVudC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMSkpO1xuXG5cdFx0XHRzcGFuIHtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KHZhcigtLWRlZy1ncmFkaWVudC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCY6ZGlzYWJsZWQge1xuXHRcdFx0LXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLWxpc3QtaGVhZCk7XG5cdFx0XHQtbW96LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tY29sb3ItZm9udHMtbGlzdC1oZWFkKTtcblx0XHRcdGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cdFx0fVxuXHR9XG59XG4iLCJAbWl4aW4gYnRuLWhvdmVyKCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbkBtaXhpbiBidG4tZGlzYWJsZWQoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgJjpkaXNhYmxlZCB7XG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gICAgYmFja2dyb3VuZDogJGJnO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcbiAgfVxufVxuXG5AbWl4aW4gYnRuLWRlZmF1bHQoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gIGJhY2tncm91bmQ6ICRiZztcbiAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItYmcoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbn1cblxuQG1peGluIGJvcmRlci1ncmFkaWVudC1saW5lYXIoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYm9yZGVyLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci1ib3JkZXIoXG4gICRkZWcsXG4gICRsZWZ0Q29sb3IsXG4gICRyaWdodENvbG9yLFxuICAkYm9yZGVyV2lkdGgsXG4gICRib3JkZXJSYWRpdXNcbikge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcbiAgICBwYWRkaW5nOiAkYm9yZGVyV2lkdGg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbiAgICAtd2Via2l0LW1hc2s6IGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCkgY29udGVudC1ib3gsXG4gICAgICAvKiBbMV0gKi8gbGluZWFyLWdyYWRpZW50KCNmZmYgMCAwKTsgLyogWzJdICovXG4gICAgLXdlYmtpdC1tYXNrLWNvbXBvc2l0ZTogeG9yOyAvKiBbM10g0LTQu9GPINC/0ZbQtNGC0YDQuNC80LrQuCDQsdGA0LDRg9C30LXRgNGW0LIgKi9cbiAgICBtYXNrLWNvbXBvc2l0ZTogZXhjbHVkZTsgLyogWzNdICovXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci10ZXh0KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsZWZ0Q29sb3I7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci1ldmVudHMtbGl2ZSgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGVmdENvbG9yO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lci1zcGFuLXRleHQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3Ipe1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCggdmFyKC0tZGVnLWdyYWRpZW50LTMpLFxuICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTMpLFxuICB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0zKSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtaXhpbiBlcnJvci1tZXNzYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNTAwJztcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KFxuICAgIHZhcigtLWRlZy1ncmFkaWVudC00KSxcbiAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTQpLFxuICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTQpXG4gICk7XG59XG5cbkBtaXhpbiBHaWxyb3ktNDAwLTE2LWZvbnRzLTIge1xuICBmb250LWZhbWlseTogJ0dpbHJveS00MDAnO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBtaXhpbiBHaWxyb3ktNTAwLTMwLWZvbnRzLTIge1xuICBmb250LWZhbWlseTogJ0dpbHJveS01MDAnO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBtaXhpbiBHaWxyb3ktNjAwLTE0LWZvbnRzLTIge1xuICBmb250LWZhbWlseTogJ0dpbHJveS02MDAnO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4iLCIvKiBiYXNlZCBvbiBhbmd1bGFyLXRvYXN0ciBjc3MgaHR0cHM6Ly9naXRodWIuY29tL0ZveGFuZHhzcy9hbmd1bGFyLXRvYXN0ci9ibG9iL2NiNTA4ZmU2ODAxZDZiMjg4ZDNhZmM1MjViYjQwZmVlMWIxMDE2NTAvZGlzdC9hbmd1bGFyLXRvYXN0ci5jc3MgKi9cblxuLyogcG9zaXRpb24gKi9cbi50b2FzdC1jZW50ZXItY2VudGVyIHtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgLnRvYXN0LXRvcC1jZW50ZXIge1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAudG9hc3QtYm90dG9tLWNlbnRlciB7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC50b2FzdC10b3AtZnVsbC13aWR0aCB7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC50b2FzdC1ib3R0b20tZnVsbC13aWR0aCB7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC50b2FzdC10b3AtbGVmdCB7XG4gICAgdG9wOiAxMnB4O1xuICAgIGxlZnQ6IDEycHg7XG4gIH1cbiAgLnRvYXN0LXRvcC1yaWdodCB7XG4gICAgdG9wOiAxMnB4O1xuICAgIHJpZ2h0OiAxMnB4O1xuICB9XG4gIC50b2FzdC1ib3R0b20tcmlnaHQge1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIGJvdHRvbTogMTJweDtcbiAgfVxuICAudG9hc3QtYm90dG9tLWxlZnQge1xuICAgIGJvdHRvbTogMTJweDtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG4gIFxuICAvKiB0b2FzdCBzdHlsZXMgKi9cbiAgLnRvYXN0LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAudG9hc3QtbWVzc2FnZSB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB9XG4gIC50b2FzdC1tZXNzYWdlIGEsXG4gIC50b2FzdC1tZXNzYWdlIGxhYmVsIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgfVxuICAudG9hc3QtbWVzc2FnZSBhOmhvdmVyIHtcbiAgICBjb2xvcjogI0NDQ0NDQztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAtMC4zZW07XG4gICAgdG9wOiAtMC4zZW07XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmZmZmO1xuICAgIC8qIG9wYWNpdHk6IDAuODsgKi9cbiAgfVxuICAudG9hc3QtY2xvc2UtYnV0dG9uOmhvdmVyLFxuICAudG9hc3QtY2xvc2UtYnV0dG9uOmZvY3VzIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICAvKkFkZGl0aW9uYWwgcHJvcGVydGllcyBmb3IgYnV0dG9uIHZlcnNpb25cbiAgIGlPUyByZXF1aXJlcyB0aGUgYnV0dG9uIGVsZW1lbnQgaW5zdGVhZCBvZiBhbiBhbmNob3IgdGFnLlxuICAgSWYgeW91IHdhbnQgdGhlIGFuY2hvciB2ZXJzaW9uLCBpdCByZXF1aXJlcyBgaHJlZj1cIiNcImAuKi9cbiAgYnV0dG9uLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICB9XG4gIC50b2FzdC1jb250YWluZXIge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gIH1cbiAgLnRvYXN0LWNvbnRhaW5lciAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMCAwIDZweDtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDNweCAzcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTVweCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgfVxuICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvaW5mby1jaXJjbGUuc3ZnICovXG4gIC50b2FzdC1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY25JSFpwWlhkQ2IzZzlKekFnTUNBMU1USWdOVEV5SnlCM2FXUjBhRDBuTlRFeUp5Qm9aV2xuYUhROUp6VXhNaWMrUEhCaGRHZ2dabWxzYkQwbmNtZGlLREkxTlN3eU5UVXNNalUxS1NjZ1pEMG5UVEkxTmlBNFF6RXhPUzR3TkRNZ09DQTRJREV4T1M0d09ETWdPQ0F5TlRaak1DQXhNell1T1RrM0lERXhNUzR3TkRNZ01qUTRJREkwT0NBeU5EaHpNalE0TFRFeE1TNHdNRE1nTWpRNExUSTBPRU0xTURRZ01URTVMakE0TXlBek9USXVPVFUzSURnZ01qVTJJRGg2YlRBZ01URXdZekl6TGpFNU5pQXdJRFF5SURFNExqZ3dOQ0EwTWlBME1uTXRNVGd1T0RBMElEUXlMVFF5SURReUxUUXlMVEU0TGpnd05DMDBNaTAwTWlBeE9DNDRNRFF0TkRJZ05ESXROREo2YlRVMklESTFOR013SURZdU5qSTNMVFV1TXpjeklERXlMVEV5SURFeWFDMDRPR010Tmk0Mk1qY2dNQzB4TWkwMUxqTTNNeTB4TWkweE1uWXRNalJqTUMwMkxqWXlOeUExTGpNM015MHhNaUF4TWkweE1tZ3hNbll0TmpSb0xURXlZeTAyTGpZeU55QXdMVEV5TFRVdU16Y3pMVEV5TFRFeWRpMHlOR013TFRZdU5qSTNJRFV1TXpjekxURXlJREV5TFRFeWFEWTBZell1TmpJM0lEQWdNVElnTlM0ek56TWdNVElnTVRKMk1UQXdhREV5WXpZdU5qSTNJREFnTVRJZ05TNHpOek1nTVRJZ01USjJNalI2Snk4K1BDOXpkbWMrXCIpO1xuICB9XG4gIC8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL3RpbWVzLWNpcmNsZS5zdmcgKi9cbiAgLnRvYXN0LWVycm9yIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2ljb25zL3RvYXN0ci13YXJuaW5nLWljb24uc3ZnJyk7XG4gIH1cbiAgLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvY2hlY2suc3ZnICovXG4gIC50b2FzdC1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY25JSFpwWlhkQ2IzZzlKekFnTUNBMU1USWdOVEV5SnlCM2FXUjBhRDBuTlRFeUp5Qm9aV2xuYUhROUp6VXhNaWMrUEhCaGRHZ2dabWxzYkQwbmNtZGlLREkxTlN3eU5UVXNNalUxS1NjZ1pEMG5UVEUzTXk0NE9UZ2dORE01TGpRd05Hd3RNVFkyTGpRdE1UWTJMalJqTFRrdU9UazNMVGt1T1RrM0xUa3VPVGszTFRJMkxqSXdOaUF3TFRNMkxqSXdOR3d6Tmk0eU1ETXRNell1TWpBMFl6a3VPVGszTFRrdU9UazRJREkyTGpJd055MDVMams1T0NBek5pNHlNRFFnTUV3eE9USWdNekV5TGpZNUlEUXpNaTR3T1RVZ056SXVOVGsyWXprdU9UazNMVGt1T1RrM0lESTJMakl3TnkwNUxqazVOeUF6Tmk0eU1EUWdNR3d6Tmk0eU1ETWdNell1TWpBMFl6a3VPVGszSURrdU9UazNJRGt1T1RrM0lESTJMakl3TmlBd0lETTJMakl3Tkd3dE1qazBMalFnTWprMExqUXdNV010T1M0NU9UZ2dPUzQ1T1RjdE1qWXVNakEzSURrdU9UazNMVE0yTGpJd05DMHVNREF4ZWljdlBqd3ZjM1puUGc9PVwiKTtcbiAgfVxuICAvKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci9leGNsYW1hdGlvbi10cmlhbmdsZS5zdmcgKi9cbiAgLnRvYXN0LXdhcm5pbmcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owbmFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jbklIWnBaWGRDYjNnOUp6QWdNQ0ExTnpZZ05URXlKeUIzYVdSMGFEMG5OVGMySnlCb1pXbG5hSFE5SnpVeE1pYytQSEJoZEdnZ1ptbHNiRDBuY21kaUtESTFOU3d5TlRVc01qVTFLU2NnWkQwblRUVTJPUzQxTVRjZ05EUXdMakF4TTBNMU9EY3VPVGMxSURRM01pNHdNRGNnTlRZMExqZ3dOaUExTVRJZ05USTNMamswSURVeE1rZzBPQzR3TlRSakxUTTJMamt6TnlBd0xUVTVMams1T1MwME1DNHdOVFV0TkRFdU5UYzNMVGN4TGprNE4wd3lORFl1TkRJeklESXpMams0TldNeE9DNDBOamN0TXpJdU1EQTVJRFkwTGpjeUxUTXhMamsxTVNBNE15NHhOVFFnTUd3eU16a3VPVFFnTkRFMkxqQXlPSHBOTWpnNElETTFOR010TWpVdU5EQTFJREF0TkRZZ01qQXVOVGsxTFRRMklEUTJjekl3TGpVNU5TQTBOaUEwTmlBME5pQTBOaTB5TUM0MU9UVWdORFl0TkRZdE1qQXVOVGsxTFRRMkxUUTJMVFEyZW0wdE5ETXVOamN6TFRFMk5TNHpORFpzTnk0ME1UZ2dNVE0yWXk0ek5EY2dOaTR6TmpRZ05TNDJNRGtnTVRFdU16UTJJREV4TGprNE1pQXhNUzR6TkRab05EZ3VOVFEyWXpZdU16Y3pJREFnTVRFdU5qTTFMVFF1T1RneUlERXhMams0TWkweE1TNHpORFpzTnk0ME1UZ3RNVE0yWXk0ek56VXROaTQ0TnpRdE5TNHdPVGd0TVRJdU5qVTBMVEV4TGprNE1pMHhNaTQyTlRSb0xUWXpMak00TTJNdE5pNDRPRFFnTUMweE1pNHpOVFlnTlM0M09DMHhNUzQ1T0RFZ01USXVOalUwZWljdlBqd3ZjM1puUGc9PVwiKTtcbiAgfVxuICAudG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1jZW50ZXIgLm5neC10b2FzdHIsXG4gIC50b2FzdC1jb250YWluZXIudG9hc3QtYm90dG9tLWNlbnRlciAubmd4LXRvYXN0ciB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuICAudG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1mdWxsLXdpZHRoIC5uZ3gtdG9hc3RyLFxuICAudG9hc3QtY29udGFpbmVyLnRvYXN0LWJvdHRvbS1mdWxsLXdpZHRoIC5uZ3gtdG9hc3RyIHtcbiAgICB3aWR0aDogOTYlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuICAubmd4LXRvYXN0ciB7XG4gIFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB9XG4gIC50b2FzdC1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFBMzUxO1xuICB9XG4gIC50b2FzdC1lcnJvciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRvYXN0ci1sZWZ0KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci10b2FzdHItcmlnaHQpO1xuICAgIGNvbG9yOiAjRUMxQTFBICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRvYXN0LWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRjk2QjQ7XG4gIH1cbiAgLnRvYXN0LXdhcm5pbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGODk0MDY7XG4gIH1cbiAgLnRvYXN0LXByb2dyZXNzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbiAgLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMjQwcHgpIHtcbiAgICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xuICAgICAgd2lkdGg6IDExZW07XG4gICAgfVxuICAgIC50b2FzdC1jb250YWluZXIgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgICByaWdodDogLTAuMmVtO1xuICAgICAgdG9wOiAtMC4yZW07XG4gICAgfVxuICB9XG4gIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDI0MXB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xuICAgICAgd2lkdGg6IDE4ZW07XG4gICAgfVxuICAgIC50b2FzdC1jb250YWluZXIgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgICByaWdodDogLTAuMmVtO1xuICAgICAgdG9wOiAtMC4yZW07XG4gICAgfVxuICB9XG4gIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xuICAgICAgd2lkdGg6IDI1ZW07XG4gICAgfVxuICB9XG4gICIsIm1hdC1pY29uIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXG5cdCYudGVydGlhcnkge1xuXHRcdCY6aG92ZXIge1xuXHRcdFx0Ly9UT0RPIGhvdmVyIG5vdCB3b3JraW5nIGNvcnJlY3RseVxuXHRcdFx0Ly8gOjpuZy1kZWVwIHN2ZyB7XG5cdFx0XHRzdmcge1xuXHRcdFx0XHRkZWZzIHtcblx0XHRcdFx0XHRsaW5lYXJHcmFkaWVudCB7XG5cdFx0XHRcdFx0XHRzdG9wIHtcblx0XHRcdFx0XHRcdFx0JjpmaXJzdC1vZi10eXBlIHtcblx0XHRcdFx0XHRcdFx0XHRzdG9wLWNvbG9yOiB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LWljb24taG92ZXIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCY6bGFzdC1vZi10eXBlIHtcblx0XHRcdFx0XHRcdFx0XHRzdG9wLWNvbG9yOiB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC1pY29uLWhvdmVyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdDo6bmctZGVlcCBzdmcge1xuXHRcdFx0ZGVmcyB7XG5cdFx0XHRcdGxpbmVhckdyYWRpZW50IHtcblx0XHRcdFx0XHRzdG9wIHtcblx0XHRcdFx0XHRcdCY6Zmlyc3Qtb2YtdHlwZSB7XG5cdFx0XHRcdFx0XHRcdHN0b3AtY29sb3I6IHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtaWNvbik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQmOmxhc3Qtb2YtdHlwZSB7XG5cdFx0XHRcdFx0XHRcdHN0b3AtY29sb3I6IHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LWljb24pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdCYucHJpbWFyeSB7XG5cdFx0c3ZnIHtcbiAgICAgICAgICAgIHBhdGgge1xuICAgICAgICAgICAgICAgIGZpbGw6ICB2YXIoLS1jb2xvci10b29sdGlwLXRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICYuaGVhZGVyLWJnIHtcbiAgICAgICAgOjpuZy1kZWVwIHN2ZyB7XG4gICAgICAgICAgICBkZWZzIHtcbiAgICAgICAgICAgICAgICBsaW5lYXJHcmFkaWVudCB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3Age1xuICAgICAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3ItZ3JhZGllbnQtbGVmdC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3ItZ3JhZGllbnQtcmlnaHQtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbi5hbmltYXRpb24taGlkZGVuLXNrZWxldG9uIHtcbiAgICBhbmltYXRpb246IGhpZGUtc2tlbGV0b24gMC41cyBlYXNlLWluLW91dDtcbiAgfVxuXG5cbkBrZXlmcmFtZXMgaGlkZS1za2VsZXRvbiB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfSJdfQ== */"]
});

/***/ }),

/***/ 6908:
/*!*********************************************************************************************************!*\
  !*** ./apps/frontend/src/app/modules/profile/components/confirm-settings/confirm-settings.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmSettingsComponent": () => (/* binding */ ConfirmSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 6053);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/theme.service */ 1266);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/api.service */ 554);
/* harmony import */ var _core_types_Themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/types/Themes */ 6251);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6873);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7661);












class ConfirmSettingsComponent {
    constructor(data, dialogRef, apiService, router, themeService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.apiService = apiService;
        this.router = router;
        this.themeService = themeService;
        this.errorEmmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    onCloseClick() {
        this.dialogRef.close();
    }
    get closeCircle() {
        return this.themeService.active === _core_types_Themes__WEBPACK_IMPORTED_MODULE_2__.LightTheme ? 'close-light' : 'close-dark';
    }
    onSaveClick() {
        this.apiService.updateUser({ username: this.data.userName }, this.data.id).subscribe({
            next: () => {
                this.apiService.getUserProfileInfo().subscribe();
                this.router.navigateByUrl('/profile');
                this.dialogRef.close();
            },
            error: (err) => {
                if (err.status === 400 /* HttpStatusCode.BadRequest */ && err.error.error.code === "P2002") {
                    this.dialogRef.close({ P2002: true });
                }
            }
        });
    }
}
ConfirmSettingsComponent.ɵfac = function ConfirmSettingsComponent_Factory(t) { return new (t || ConfirmSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService)); };
ConfirmSettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ConfirmSettingsComponent, selectors: [["cake-confirm-settings"]], decls: 14, vars: 1, consts: [[1, "container"], [1, "close", 3, "click"], [3, "svgIcon"], [1, "info"], [1, "headings"], [1, "buttons"], [1, "button", "primary", 3, "click"], [1, "button", "tertiary", "close-btn", 3, "click"]], template: function ConfirmSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfirmSettingsComponent_Template_div_click_1_listener() { return ctx.onCloseClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Do you want");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "to save changes?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfirmSettingsComponent_Template_button_click_10_listener() { return ctx.onSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfirmSettingsComponent_Template_button_click_12_listener() { return ctx.onCloseClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "No, thanks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", ctx.closeCircle);
    } }, dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon], styles: [".container[_ngcontent-%COMP%] {\n  height: 90vh;\n  overflow: hidden;\n}\n.container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-align: right;\n}\n.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  word-wrap: break-word;\n  color: var(--color-tooltip-text);\n  margin: 0;\n}\n.container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 40px;\n}\n.container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUlJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtBQUZOO0FBTUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQUtJO0VBQ0UsZ0JBQUE7QUFITiIsImZpbGUiOiJjb25maXJtLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwvbWl4aW5zJztcblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogOTB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAuY2xvc2Uge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gIC5pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLmhlYWRpbmdzIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95LTQwMCc7XG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItdG9vbHRpcC10ZXh0KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cblxuICAuYnV0dG9ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAuY2xvc2UtYnRuIHtcbiAgICAgIG1hcmdpbi10b3A6IDI4cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 554:
/*!*******************************************************!*\
  !*** ./apps/frontend/src/app/services/api.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 2474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7724);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 9386);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 5894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 9609);







class ApiService {
    //!!TODO: add type!!
    constructor(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    getHeaders() {
        const header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("Authorization", `Bearer ${this.authService.getToken()}`),
        };
        return header;
    }
    getQuery(query) {
        return Object.entries(query)
            .filter((element) => element[1] || element[1] === false)
            .map((el) => `${el[0]}=${el[1]}`)
            .join("&");
    }
    signUp(req) {
        return this.httpClient.post(`${this.apiUrl}/api/register`, req);
    }
    signIn(req) {
        return this.httpClient.post(`${this.apiUrl}/api/login`, req);
    }
    getUsers(req) {
        return this.httpClient.get(`${this.apiUrl}/api/users?${this.getQuery(req)}`, this.getHeaders());
    }
    getRewards(req) {
        return this.httpClient.get(`${this.apiUrl}/api/reward?${this.getQuery(req)}`, this.getHeaders());
    }
    getRewardById(id) {
        return this.httpClient.get(`${this.apiUrl}/api/reward/${id}`, this.getHeaders());
    }
    getUserById(id, query) {
        return this.httpClient.get(`${this.apiUrl}/api/users/kol/${id}?${this.getQuery(query)}`, this.getHeaders());
    }
    follow(userId) {
        return this.httpClient.put(`${this.apiUrl}/api/followers`, { userId }, this.getHeaders());
    }
    unfollow(userId) {
        return this.httpClient.delete(`${this.apiUrl}/api/followers`, { body: { userId }, ...this.getHeaders() });
    }
    updateUser(userData, userId) {
        return this.httpClient.put(`${this.apiUrl}/api/users/${userId}`, {
            ...userData,
        }, this.getHeaders());
    }
    getUserProfileInfo() {
        return this.httpClient.get(`${this.apiUrl}/api/user/profile`, this.getHeaders()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)((data) => {
            this.authService.userProfile.next(data.data);
        }));
    }
    byReward(id) {
        return this.httpClient.put(`${this.apiUrl}/api/reward/buy/${id}`, {}, this.getHeaders());
    }
    claimCakebox(id) {
        return this.httpClient.put(`${this.apiUrl}/api/reward/claim/${id}`, {}, this.getHeaders());
    }
    toConfectionary(id) {
        return this.httpClient.put(`${this.apiUrl}/api/reward/toConfectionary/${id}`, { isConfectionary: true }, this.getHeaders());
    }
    RemoveFromConfectionary(id) {
        return this.httpClient.put(`${this.apiUrl}/api/reward/toConfectionary/${id}`, { isConfectionary: false }, this.getHeaders());
    }
    addWallet(address, type, name) {
        return this.httpClient.post(`${this.apiUrl}/api/wallet`, { address, type, name }, this.getHeaders());
    }
    editWallet(wallet) {
        return this.httpClient.put(`${this.apiUrl}/api/wallet`, wallet, this.getHeaders());
    }
    getWallets() {
        return this.httpClient.get(`${this.apiUrl}/api/wallet`, this.getHeaders());
    }
    deleteWallet(id) {
        return this.httpClient.delete(`${this.apiUrl}/api/wallet/${id}`, this.getHeaders());
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 5894:
/*!********************************************************!*\
  !*** ./apps/frontend/src/app/services/auth.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6027);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 6349);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 9386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6873);







class AuthService {
    constructor(router, zone) {
        this.router = router;
        this.zone = zone;
        this.isAuthenticated$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.userProfile = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.randomAvatar = 'https://s3.eu-central-1.amazonaws.com/backend.dev.cake/1668266906882-noun-avatar-978205%201.png';
        // if (this.isTokenExpired()) {
        //   localStorage.removeItem('accessToken');
        // } else {
        //   this.isAuthenticated$.next(true);
        //   this.setExpiredTokenTimer();
        // }
        this.isAuthenticated$.next(true);
        this.setExpiredTokenTimer();
    }
    signIn(response) {
        this.setToken(response.data?.authToken || '', response.data?.refreshToken || '');
        this.isAuthenticated$.next(true);
    }
    setToken(authToken, refreshToken) {
        localStorage.setItem('authToken', authToken);
        localStorage.setItem('refreshToken', refreshToken);
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.plugin) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            chrome.storage.sync.set({ authToken });
        }
    }
    getExpiresIn() {
        return this.getDecodedToken()?.exp || 0;
    }
    isTokenExpired() {
        if (this.getExpiresIn()) {
            const expires = new Date(this.getExpiresIn() * 1000);
            return expires.getTime() <= Date.now();
        }
        return true;
    }
    getDecodedToken() {
        const token = this.getToken();
        return token ? (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token) : null;
    }
    getToken() {
        return localStorage?.getItem('authToken') || '';
    }
    setExpiredTokenTimer() {
        if (this.getExpiresIn()) {
            const expires = new Date(this.getExpiresIn() * 1000);
            const timeout = expires.getTime() - Date.now();
            this.tokenExpiredTimeout = setTimeout(() => {
                this.stopSession();
            }, timeout);
        }
    }
    stopTokenExpiredTimeout() {
        clearTimeout(this.tokenExpiredTimeout);
    }
    stopSession() {
        this.stopTokenExpiredTimeout();
        this.isAuthenticated$.next(false);
        localStorage.clear();
    }
    signOut() {
        this.stopSession();
        this.zone.run(() => {
            this.router.navigateByUrl('/auth/sign-in');
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8102:
/*!******************************************************************!*\
  !*** ./apps/frontend/src/app/services/device-service.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceService": () => (/* binding */ DeviceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-device-detector */ 6824);



class DeviceService {
    constructor(deviceDetector) {
        this.deviceDetector = deviceDetector;
    }
    get isMobileOrTablet() {
        return this.deviceDetector.isMobile() || this.deviceDetector.isTablet();
    }
    get deviseName() {
        return this.deviceDetector.device;
    }
    get os() {
        return this.deviceDetector.os;
    }
    get browser() {
        return this.deviceDetector.browser;
    }
    get isPwa() {
        return window.matchMedia('(display-mode: standalone)').matches;
    }
}
DeviceService.ɵfac = function DeviceService_Factory(t) { return new (t || DeviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__.DeviceDetectorService)); };
DeviceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DeviceService, factory: DeviceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5222:
/*!**********************************************************!*\
  !*** ./apps/frontend/src/app/services/mapper.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapperService": () => (/* binding */ MapperService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9609);

class MapperService {
    cakeboxMapper(cakebox) {
        const { smallImage, image, rarity, rewards } = cakebox;
        return {
            smallImage,
            image,
            rarity,
            rewards: rewards.map(reward => ({ image: reward.smallImage || reward.image })),
        };
    }
    userProfileMapper(userProfile) {
        const { slicesCollected, slicesPurchased, slicesSold, cakeBoxClaimed, totalRewardsEarned } = userProfile;
        return [
            {
                label: 'Slices collected',
                value: slicesCollected
            },
            {
                label: 'Slices purchased',
                value: slicesPurchased
            },
            {
                label: 'Slices sold',
                value: slicesSold
            },
            {
                label: 'Cak3boxes claimed',
                value: cakeBoxClaimed
            },
            {
                label: 'Total rewards earned',
                value: totalRewardsEarned
            }
        ];
    }
}
MapperService.ɵfac = function MapperService_Factory(t) { return new (t || MapperService)(); };
MapperService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapperService, factory: MapperService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5414:
/*!**********************************************************!*\
  !*** ./apps/frontend/src/app/services/modals.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalsService": () => (/* binding */ ModalsService)
/* harmony export */ });
/* harmony import */ var _Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 4475);
/* harmony import */ var _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/classes/watcher */ 34);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ 554);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cake/lib-api-interface */ 171);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 6027);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 6991);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 5231);
/* harmony import */ var _modules_profile_components_confirm_settings_confirm_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/profile/components/confirm-settings/confirm-settings.component */ 6908);
/* harmony import */ var _shared_components_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/confirm-popup/confirm-popup.component */ 6945);
/* harmony import */ var _shared_components_get_reward_get_reward_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/get-reward/get-reward.component */ 5504);
/* harmony import */ var _shared_components_kol_kol_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/kol/kol.component */ 430);
/* harmony import */ var _shared_components_reward_reward_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/reward/reward.component */ 1325);
/* harmony import */ var _cake_web3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @cake/web3 */ 8518);
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./toaster.service */ 905);
/* harmony import */ var _core_types_toaster_position__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/types/toaster-position */ 7564);
/* harmony import */ var _shared_components_delete_wallet_delete_wallet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/components/delete-wallet/delete-wallet.component */ 1851);
/* harmony import */ var _shared_components_add_wallet_popup_add_wallet_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/components/add-wallet-popup/add-wallet-popup.component */ 7478);
/* harmony import */ var _cake_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @cake/utils */ 2521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 6053);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 6873);


























class ModalsService extends _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_1__.Watcher {
  constructor(dialog, document, apiService, web3Service, router, toastrService, dataService) {
    super();
    this.dialog = dialog;
    this.document = document;
    this.apiService = apiService;
    this.web3Service = web3Service;
    this.router = router;
    this.toastrService = toastrService;
    this.dataService = dataService;
    this.hasUsernameExistError = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject(false);
    this.handleDeleteWallet = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
    this.handleAddWallet = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
    this.handleClaimed = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
  }
  openRewardPopup(id) {
    this.dialog.open(_shared_components_reward_reward_component__WEBPACK_IMPORTED_MODULE_8__.RewardComponent, {
      data: {
        id
      },
      autoFocus: false,
      backdropClass: "backdropBackground"
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

  openClaimCakeboxPopup(id) {
    const dialogRef = this.dialog.open(_shared_components_reward_reward_component__WEBPACK_IMPORTED_MODULE_8__.RewardComponent, {
      data: {
        id,
        isClaimed: true
      },
      autoFocus: false,
      backdropClass: "backdropBackground"
    });
    document.documentElement.classList.remove("cdk-global-scrollblock");
    dialogRef.afterClosed().subscribe(() => {
      this.handleClaimed.next(true);
    });
  }
  getRewardPopup(reward) {
    this.dialog.open(_shared_components_get_reward_get_reward_component__WEBPACK_IMPORTED_MODULE_6__.GetRewardComponent, {
      data: reward,
      autoFocus: false,
      // mandatory if we need blur background
      backdropClass: "backdropBackground"
    });
    document.documentElement.classList.remove("cdk-global-scrollblock");
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

  openKolPopup(data) {
    this.dialog.open(_shared_components_kol_kol_component__WEBPACK_IMPORTED_MODULE_7__.KolComponent, {
      data: data,
      autoFocus: false,
      backdropClass: "backdropBackground"
    });
    document.documentElement.classList.remove("cdk-global-scrollblock");
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

  openDeleteWallet(address, id) {
    const dialogRef = this.dialog.open(_shared_components_delete_wallet_delete_wallet_component__WEBPACK_IMPORTED_MODULE_12__.DeleteWalletComponent, {
      data: {
        address
      },
      autoFocus: false,
      backdropClass: "backdropBackground",
      panelClass: "visible-mat-dialog-container"
    });
    dialogRef.afterClosed().subscribe(confirm => {
      if (confirm) {
        this.apiService.deleteWallet(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.unsubscribe)).subscribe(() => {
          this.handleDeleteWallet.next(true);
        });
      }
    });
  }
  openConfirmToAdd(text) {
    var _this = this;
    const dialogRef = this.dialog.open(_shared_components_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmPopupComponent, {
      data: {
        text
      },
      autoFocus: false,
      backdropClass: "backdropBackground",
      panelClass: "visible-mat-dialog-container"
    });
    dialogRef.afterClosed().subscribe( /*#__PURE__*/function () {
      var _ref = (0,_Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (confirm) {
        if (confirm) {
          //TODO add name
          _this.apiService.addWallet(yield _this.web3Service.connectToMetaMask(), _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_3__.WalletEnum.MetaMask, _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_3__.WalletEnum.MetaMask).subscribe(el => console.log(el), error => {
            console.log(error);
            _this.toastrService.showErrorToaster(_core_types_toaster_position__WEBPACK_IMPORTED_MODULE_11__.ToasterPosition.topCenter, "Address already exists");
          }, () => {
            _this.router.navigate([`/get-sugar/select-payment-method/false/${_this.dataService.selectedSugar.getValue()}`]);
          });
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  openSettingsConfirmationPopup(userName, id) {
    const dialogRef = this.dialog.open(_modules_profile_components_confirm_settings_confirm_settings_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmSettingsComponent, {
      data: {
        id,
        userName
      },
      backdropClass: "backdropBackground"
    });
    document.documentElement.classList.remove("cdk-global-scrollblock");
    dialogRef.afterClosed().subscribe(result => {
      if (result?.P2002) {
        this.hasUsernameExistError.next(true);
      } else {
        this.hasUsernameExistError.next(false);
      }
    });
  }
  openAddingWalletPopup() {
    this.dialog.open(_shared_components_add_wallet_popup_add_wallet_popup_component__WEBPACK_IMPORTED_MODULE_13__.AddWalletPopupComponent, {
      backdropClass: "backdropBackground"
    });
    document.documentElement.classList.remove("cdk-global-scrollblock");
  }
  get hasUsernameExistError$() {
    return this.hasUsernameExistError.asObservable();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
ModalsService.ɵfac = function ModalsService_Factory(t) {
  return new (t || ModalsService)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_cake_web3__WEBPACK_IMPORTED_MODULE_9__.Web3Service), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_toaster_service__WEBPACK_IMPORTED_MODULE_10__.CustomToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_cake_utils__WEBPACK_IMPORTED_MODULE_14__.DataService));
};
ModalsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjectable"]({
  token: ModalsService,
  factory: ModalsService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 7008:
/*!**********************************************************!*\
  !*** ./apps/frontend/src/app/services/reward.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardService": () => (/* binding */ RewardService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9609);


class RewardService {
    constructor() {
        this.toConfectionaryTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
}
RewardService.ɵfac = function RewardService_Factory(t) { return new (t || RewardService)(); };
RewardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RewardService, factory: RewardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6490:
/*!**********************************************************!*\
  !*** ./apps/frontend/src/app/services/search.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": () => (/* binding */ SearchService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9609);

class SearchService {
    setFormControl(control) {
        this.formControl = control;
    }
    getFormControl() {
        return this.formControl;
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(); };
SearchService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7888:
/*!*******************************************************!*\
  !*** ./apps/frontend/src/app/services/svg.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVG_ICONS": () => (/* binding */ SVG_ICONS),
/* harmony export */   "SvgService": () => (/* binding */ SvgService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 7661);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 3878);





const SVG_ICONS = {
    'tooltip-cross-close': 'assets/icons/close-cross-dark.svg',
    'arrow-left': 'assets/icons/arrow-left.svg',
    'arrow-left-blue': 'assets/icons/arrow-right-blue-grad.svg',
    'arrow-right': 'assets/icons/arrow-right.svg',
    'arrow-down': 'assets/icons/arrow-down.svg',
    'arrow-top': 'assets/icons/arrow-top.svg',
    'EXOTIC-cakebox': 'assets/icons/Exotic-cakebox.svg',
    'LEGENDARY-cakebox': 'assets/icons/Legendary-cakebox.svg',
    'EPIC-cakebox': 'assets/icons/Epic-cakebox.svg',
    'SUPERIOR-cakebox': 'assets/icons/Superior-cakebox.svg',
    'BASIC-cakebox': 'assets/icons/Basic-cakebox.svg',
    'STARTER-cakebox': 'assets/icons/Starter-cakebox.svg',
    'edit': 'assets/icons/edit.svg',
    'gear': 'assets/icons/settings.svg',
    'heart-eye-emoji': 'assets/icons/heart-eye-emoji.svg',
    'cool-emoji': 'assets/icons/cool-emoji.svg',
    'party-emoji': 'assets/icons/party-emoji.svg',
    'reward': 'assets/icons/rewards.svg',
    'back': 'assets/icons/back.svg',
    'wallet': 'assets/icons/wallet.svg',
    'confectionery': 'assets/icons/confectionery.svg',
    'confectionary': 'assets/icons/confectionery.svg',
    'close-dark': 'assets/icons/close-dark.svg',
    'close-light': 'assets/icons/close-light.svg',
    'close-icon': 'assets/icons/close-icon.svg',
    'search': 'assets/icons/search.svg',
    'search-outline': 'assets/icons/search-outline.svg',
    'cake-wallet': 'assets/icons/cake-wallet.svg',
    'arrow-up-green': 'assets/icons/arrow-up-outline-green.svg',
    'party-popper': 'assets/icons/party-popper.svg',
    'plus-light': 'assets/icons/plus-light.svg',
    'plus-dark': 'assets/icons/plus-dark.svg',
    'edit-dark': 'assets/icons/edit-dark.svg',
    'edit-light': 'assets/icons/edit-light.svg',
    'double-left': 'assets/icons/double-left.svg',
    'double-right': 'assets/icons/double-right.svg',
    'copy': 'assets/icons/copy.svg',
    'remove': 'assets/icons/remove.svg',
    'circle-plus': 'assets/icons/circle-plus.svg',
    'webclip-logo': 'assets/webclip/logo.svg',
    'safari-webclip': 'assets/webclip/safari-webclip.svg',
    'chrome-webclip': 'assets/webclip/chrome-webclip.svg',
    'samsung-webclip': 'assets/webclip/samsung-webclip.svg',
    'edge-webclip': 'assets/webclip/edge-webclip.svg',
    'close-tooltip': 'assets/icons/close-tooltip.svg',
    'eye-closed': 'assets/icons/eye-closed.svg',
    'eye': 'assets/icons/eye.svg',
    'close': 'assets/icons/close.svg',
    'details': 'assets/icons/details.svg',
    'header-bg-1': 'assets/icons/header-bg-1.svg',
    'header-bg-2': 'assets/icons/header-bg-2.svg',
    'sun': 'assets/icons/sun.svg',
    'moon': 'assets/icons/moon.svg',
    'credit-card': 'assets/wallets/Credit card.svg',
};
class SvgService {
    constructor(iconRegistry, sanitizer) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
    }
    registerSvg() {
        Object.keys(SVG_ICONS).forEach((key) => {
            this.iconRegistry.addSvgIcon(key, this.sanitizer.bypassSecurityTrustResourceUrl(SVG_ICONS[key]));
        });
    }
}
SvgService.ɵfac = function SvgService_Factory(t) { return new (t || SvgService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer)); };
SvgService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SvgService, factory: SvgService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1266:
/*!*********************************************************!*\
  !*** ./apps/frontend/src/app/services/theme.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var _core_types_Themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/types/Themes */ 6251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9609);


class ThemeService {
    constructor() {
        this.active = _core_types_Themes__WEBPACK_IMPORTED_MODULE_0__.LightTheme;
    }
    changeActiveTheme(theme) {
        localStorage.setItem('theme', theme.name);
        this.active = theme;
        document.getElementById("meta-theme")?.setAttribute('content', this.active.properties['--pwa-bg-color']);
        Object.keys(this.active.properties).forEach((property) => {
            document.documentElement.style.setProperty(property, this.active.properties[property]);
        });
    }
    getClassForColors(value) {
        if (value < 10000)
            return 'gradient-red-numbers';
        else if (value > 10000 && value < 100000)
            return 'gradient-yellow-numbers';
        else
            return 'gradient-green-numbers';
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 905:
/*!***********************************************************!*\
  !*** ./apps/frontend/src/app/services/toaster.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomToasterService": () => (/* binding */ CustomToasterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 3525);



class CustomToasterService {
    constructor(toasterService) {
        this.toasterService = toasterService;
    }
    showErrorToaster(position, message) {
        this.toasterService.error(message, '', {
            positionClass: position,
        });
    }
}
CustomToasterService.ɵfac = function CustomToasterService_Factory(t) { return new (t || CustomToasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService)); };
CustomToasterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomToasterService, factory: CustomToasterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 34:
/*!*********************************************************!*\
  !*** ./apps/frontend/src/app/shared/classes/watcher.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Watcher": () => (/* binding */ Watcher)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9609);


class Watcher {
    constructor() {
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject();
    }
    ngOnDestroy() {
        this.unsubscribe.next(null);
        this.unsubscribe.complete();
    }
}
Watcher.ɵfac = function Watcher_Factory(t) { return new (t || Watcher)(); };
Watcher.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Watcher, factory: Watcher.ɵfac });


/***/ }),

/***/ 7478:
/*!************************************************************************************************!*\
  !*** ./apps/frontend/src/app/shared/components/add-wallet-popup/add-wallet-popup.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddWalletPopupComponent": () => (/* binding */ AddWalletPopupComponent)
/* harmony export */ });
/* harmony import */ var _Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 4475);
/* harmony import */ var _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cake/lib-api-interface */ 171);
/* harmony import */ var _cake_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cake/web3 */ 8518);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 6027);
/* harmony import */ var _core_types_Themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/types/Themes */ 6251);
/* harmony import */ var _core_types_toaster_position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/types/toaster-position */ 7564);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/api.service */ 554);
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/modals.service */ 5414);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/theme.service */ 1266);
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/toaster.service */ 905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 6053);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7661);




















function AddWalletPopupComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AddWalletPopupComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.continue());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r0.selected || ctx_r0.loading);
  }
}
function AddWalletPopupComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AddWalletPopupComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r4.approve());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r1.selected || ctx_r1.loading);
  }
}
class AddWalletPopupComponent {
  constructor(dialogRef, themeService, web3Service, apiService, toastrService, modalService) {
    this.dialogRef = dialogRef;
    this.themeService = themeService;
    this.web3Service = web3Service;
    this.apiService = apiService;
    this.toastrService = toastrService;
    this.modalService = modalService;
    this.selected = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(0);
    this.userWallet = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject([{
      address: "",
      type: _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_1__.WalletEnum.MetaMask,
      id: '',
      name: ''
    }]);
    this.loading = false;
    this.allowance = false;
    this.isCrypto = false;
    this.apiService.getWallets().subscribe(wallets => {
      this.userWallet.next(wallets.data.wallets);
    });
  }
  setSelected(index) {
    this.selected.next(index);
  }
  get closeCircle() {
    return this.themeService.active === _core_types_Themes__WEBPACK_IMPORTED_MODULE_3__.LightTheme ? "close-light" : "close-dark";
  }
  checkAllowanceMetamask() {
    var _this = this;
    return (0,_Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      const allowance = yield _this.web3Service.checkAllowance(_this.userWallet.getValue()[_this.selected.getValue()].address);
      _this.loading = false;
      console.log("allowance", allowance);
      _this.allowance = allowance;
      _this.isCrypto = true;
    })();
  }
  approve() {
    var _this2 = this;
    return (0,_Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      yield _this2.web3Service.approve();
      yield _this2.checkAllowanceMetamask();
      _this2.loading = false;
    })();
  }
  continue() {
    var _this3 = this;
    return (0,_Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.selected.value === 1) {
        _this3.apiService.addWallet(yield _this3.web3Service.connectToMetaMask(), _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_1__.WalletEnum.MetaMask, _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_1__.WalletEnum.MetaMask).subscribe(el => console.log(el), error => {
          console.log(error);
          _this3.toastrService.showErrorToaster(_core_types_toaster_position__WEBPACK_IMPORTED_MODULE_4__.ToasterPosition.bottomCenter, "Address already exists");
        }, /*#__PURE__*/(0,_Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          yield _this3.web3Service.approve();
          _this3.modalService.handleAddWallet.next(true);
          _this3.dialogRef.close();
        }));
      }
    })();
  }
}
AddWalletPopupComponent.ɵfac = function AddWalletPopupComponent_Factory(t) {
  return new (t || AddWalletPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_7__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_cake_web3__WEBPACK_IMPORTED_MODULE_2__.Web3Service), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_toaster_service__WEBPACK_IMPORTED_MODULE_8__.CustomToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_modals_service__WEBPACK_IMPORTED_MODULE_6__.ModalsService));
};
AddWalletPopupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: AddWalletPopupComponent,
  selectors: [["cake-add-wallet-popup"]],
  decls: 15,
  vars: 7,
  consts: [[1, "container"], [1, "close", "pointer", 3, "click"], [3, "svgIcon"], [1, "content"], [1, "wallets"], [1, "wallet", "pointer", 3, "click"], ["loading", "lazy", "src", "/assets/wallets/logos_metamask-icon.png", "alt", ""], [1, "continue-btn"], ["class", "button primary", 3, "disabled", "click", 4, "ngIf"], [1, "button", "primary", 3, "disabled", "click"]],
  template: function AddWalletPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AddWalletPopupComponent_Template_div_click_1_listener() {
        return ctx.dialogRef.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3)(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Add wallet");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AddWalletPopupComponent_Template_div_click_7_listener() {
        return ctx.setSelected(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "MetaMask");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, AddWalletPopupComponent_button_13_Template, 2, 1, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, AddWalletPopupComponent_button_14_Template, 2, 1, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("svgIcon", ctx.closeCircle);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 5, ctx.selected) === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.allowance && !ctx.isCrypto);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.allowance && ctx.isCrypto);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
  styles: ["@charset \"UTF-8\";\n@font-face {\n  font-family: \"Gilroy-900\";\n  src: local(\"Gilroy-900\"), url('Gilroy-ExtraBold.otf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Gilroy-400\";\n  src: local(\"Gilroy-400\"), url('Gilroy-Light.otf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Gilroy-500\";\n  src: local(\"Gilroy-500\"), url('Gilroy-Medium.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Gilroy-600\";\n  src: local(\"Gilroy-600\"), url('Gilroy-Semibold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Santhony\";\n  src: local(\"Santhony\"), url('santhony.regular.otf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Gilroy-Regular\";\n  src: local(\"Gilroy-Regular\"), url('Gilroy-Regular.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n.button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  border-radius: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Gilroy-500\";\n  font-size: 16px;\n  transition: 0.5s ease-in-out;\n}\n.button[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n  font-size: 28px;\n  margin-right: 5px;\n  font-family: \"Gilroy-400\";\n}\n.button[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n.button.primary[_ngcontent-%COMP%] {\n  color: var(--color-fonts-3);\n  background: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  border: 2px solid linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  border-image-slice: 1;\n}\n.button.primary[_ngcontent-%COMP%]:hover {\n  color: var(--color-fonts-3);\n  background: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  text-decoration: none;\n  border: 2px solid linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n}\n.button.primary[_ngcontent-%COMP%]:disabled {\n  color: var(--color-fonts-3);\n  background: linear-gradient(var(--deg-gradient-disabled), var(--color-gradient-left-disabled), var(--color-gradient-right-disabled));\n  border: 2px solid linear-gradient(var(--deg-gradient-disabled), var(--color-gradient-left-disabled), var(--color-gradient-right-disabled));\n  cursor: not-allowed;\n  border-image-slice: 1;\n}\n.button.secondary[_ngcontent-%COMP%] {\n  background: var(--color-transparent);\n  border: none;\n  position: relative;\n  background-color: var(--color-gradient-left-3);\n  background-image: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.secondary[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 16px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.button.secondary[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n  text-decoration: none;\n  position: relative;\n  background-color: var(--color-gradient-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.secondary[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 16px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.button.secondary.unfollow[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n  text-decoration: none;\n  position: relative;\n  background-color: var(--color-gradient-left-7);\n  background-image: linear-gradient(var(--deg-gradient-7), var(--color-gradient-left-7), var(--color-gradient-right-7));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.secondary.unfollow[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 16px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-7), var(--color-gradient-left-7), var(--color-gradient-right-7));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.button.pink[_ngcontent-%COMP%] {\n  color: #fff;\n  background: linear-gradient(var(--deg-gradient-live-events), var(--color-gradient-left-live-events), var(--color-gradient-right-live-events));\n  border: 2px solid linear-gradient(var(--deg-gradient-live-events), var(--color-gradient-left-live-events), var(--color-gradient-right-live-events));\n  border-image-slice: 1;\n}\n.button.secondary-pink[_ngcontent-%COMP%] {\n  background: var(--color-transparent);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  color: #977E89;\n}\n.button.error[_ngcontent-%COMP%] {\n  background: var(--color-transparent);\n  border: none;\n  position: relative;\n  background-color: var(--color-gradient-left-4);\n  background-image: linear-gradient(var(--deg-gradient-4), var(--color-gradient-left-4), var(--color-gradient-right-4));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.error[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 16px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-4), var(--color-gradient-left-4), var(--color-gradient-right-4));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.button.error[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n  text-decoration: none;\n  position: relative;\n  background-color: var(--color-gradient-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.error[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 16px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.button.tertiary[_ngcontent-%COMP%] {\n  border: none;\n  background: -webkit-linear-gradient(var(--color-transparent));\n  background-color: var(--color-gradient-left-3);\n  background-image: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.tertiary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  background: -webkit-linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.tertiary[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n  text-decoration: none;\n  background-color: var(--color-gradient-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.tertiary[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n  text-decoration: none;\n  background-color: var(--color-gradient-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.tertiary[_ngcontent-%COMP%]:disabled {\n  -webkit-text-fill-color: var(--color-fonts-list-head);\n  -moz-text-fill-color: var(--color-fonts-list-head);\n  cursor: not-allowed;\n}\n\n\n.toast-center-center[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.toast-top-center[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-center[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-full-width[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-full-width[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-left[_ngcontent-%COMP%] {\n  top: 12px;\n  left: 12px;\n}\n.toast-top-right[_ngcontent-%COMP%] {\n  top: 12px;\n  right: 12px;\n}\n.toast-bottom-right[_ngcontent-%COMP%] {\n  right: 12px;\n  bottom: 12px;\n}\n.toast-bottom-left[_ngcontent-%COMP%] {\n  bottom: 12px;\n  left: 12px;\n}\n\n.toast-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.toast-message[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n.toast-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .toast-message[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n.toast-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n.toast-close-button[_ngcontent-%COMP%] {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  \n}\n.toast-close-button[_ngcontent-%COMP%]:hover, .toast-close-button[_ngcontent-%COMP%]:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n\nbutton.toast-close-button[_ngcontent-%COMP%] {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.toast-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n.toast-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.toast-container[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  border-radius: 16px;\n}\n.toast-container[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.toast-info[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOS4wNDMgOCA4IDExOS4wODMgOCAyNTZjMCAxMzYuOTk3IDExMS4wNDMgMjQ4IDI0OCAyNDhzMjQ4LTExMS4wMDMgMjQ4LTI0OEM1MDQgMTE5LjA4MyAzOTIuOTU3IDggMjU2IDh6bTAgMTEwYzIzLjE5NiAwIDQyIDE4LjgwNCA0MiA0MnMtMTguODA0IDQyLTQyIDQyLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDJ6bTU2IDI1NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC04OGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgxMnYtNjRoLTEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDY0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MTAwaDEyYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MjR6Jy8+PC9zdmc+\");\n}\n\n.toast-error[_ngcontent-%COMP%] {\n  background-image: url('toastr-warning-icon.svg');\n}\n\n.toast-success[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicvPjwvc3ZnPg==\");\n}\n\n.toast-warning[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJyB3aWR0aD0nNTc2JyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTU2OS41MTcgNDQwLjAxM0M1ODcuOTc1IDQ3Mi4wMDcgNTY0LjgwNiA1MTIgNTI3Ljk0IDUxMkg0OC4wNTRjLTM2LjkzNyAwLTU5Ljk5OS00MC4wNTUtNDEuNTc3LTcxLjk4N0wyNDYuNDIzIDIzLjk4NWMxOC40NjctMzIuMDA5IDY0LjcyLTMxLjk1MSA4My4xNTQgMGwyMzkuOTQgNDE2LjAyOHpNMjg4IDM1NGMtMjUuNDA1IDAtNDYgMjAuNTk1LTQ2IDQ2czIwLjU5NSA0NiA0NiA0NiA0Ni0yMC41OTUgNDYtNDYtMjAuNTk1LTQ2LTQ2LTQ2em0tNDMuNjczLTE2NS4zNDZsNy40MTggMTM2Yy4zNDcgNi4zNjQgNS42MDkgMTEuMzQ2IDExLjk4MiAxMS4zNDZoNDguNTQ2YzYuMzczIDAgMTEuNjM1LTQuOTgyIDExLjk4Mi0xMS4zNDZsNy40MTgtMTM2Yy4zNzUtNi44NzQtNS4wOTgtMTIuNjU0LTExLjk4Mi0xMi42NTRoLTYzLjM4M2MtNi44ODQgMC0xMi4zNTYgNS43OC0xMS45ODEgMTIuNjU0eicvPjwvc3ZnPg==\");\n}\n.toast-container.toast-top-center[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%], .toast-container.toast-bottom-center[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%] {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.toast-container.toast-top-full-width[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%], .toast-container.toast-bottom-full-width[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%] {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.ngx-toastr[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.toast-success[_ngcontent-%COMP%] {\n  background-color: #51A351;\n}\n.toast-error[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  background-color: var(--color-toastr-left);\n  border: 1px solid var(--color-toastr-right);\n  color: #EC1A1A !important;\n}\n.toast-info[_ngcontent-%COMP%] {\n  background-color: #2F96B4;\n}\n.toast-warning[_ngcontent-%COMP%] {\n  background-color: #F89406;\n}\n.toast-progress[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  opacity: 0.4;\n}\n\n@media all and (max-width: 240px) {\n  .toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%] {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container[_ngcontent-%COMP%]   .toast-close-button[_ngcontent-%COMP%] {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%] {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container[_ngcontent-%COMP%]   .toast-close-button[_ngcontent-%COMP%] {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%] {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\nmat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nmat-icon.tertiary[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   defs[_ngcontent-%COMP%]   linearGradient[_ngcontent-%COMP%]   stop[_ngcontent-%COMP%]:first-of-type {\n  stop-color: var(--color-gradient-left-icon-hover);\n}\nmat-icon.tertiary[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   defs[_ngcontent-%COMP%]   linearGradient[_ngcontent-%COMP%]   stop[_ngcontent-%COMP%]:last-of-type {\n  stop-color: var(--color-gradient-right-icon-hover);\n}\nmat-icon.tertiary[_ngcontent-%COMP%]     svg defs linearGradient stop:first-of-type {\n  stop-color: var(--color-gradient-left-icon);\n}\nmat-icon.tertiary[_ngcontent-%COMP%]     svg defs linearGradient stop:last-of-type {\n  stop-color: var(--color-gradient-right-icon);\n}\nmat-icon.primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: var(--color-tooltip-text);\n}\nmat-icon.header-bg[_ngcontent-%COMP%]     svg defs linearGradient stop:first-of-type {\n  stop-color: var(--header-color-gradient-left-1);\n}\nmat-icon.header-bg[_ngcontent-%COMP%]     svg defs linearGradient stop:last-of-type {\n  stop-color: var(--header-color-gradient-right-1);\n}\n.animation-hidden-skeleton[_ngcontent-%COMP%] {\n  animation: hide-skeleton 0.5s ease-in-out;\n}\n@keyframes hide-skeleton {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  height: 561px;\n  width: 536px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  text-align: center;\n}\n@media (max-width: 1023px) {\n  .container[_ngcontent-%COMP%] {\n    padding-top: 61px;\n    width: 100%;\n    height: 80vh;\n    justify-content: space-between;\n  }\n}\n.container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n@media (max-width: 1023px) {\n  .container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: \"Gilroy-400\";\n  color: var(--color-fonts-2);\n  margin-bottom: 32px;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wallets[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wallets[_ngcontent-%COMP%]   .wallet[_ngcontent-%COMP%] {\n  height: 175px;\n  width: 152px;\n  border-radius: 6px;\n  background: var(--bg-platform-color);\n  border: 1px solid var(--border-list-color);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 24px;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wallets[_ngcontent-%COMP%]   .wallet[_ngcontent-%COMP%] {\n    height: 118px;\n    width: 107px;\n  }\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wallets[_ngcontent-%COMP%]   .wallet.active[_ngcontent-%COMP%] {\n  border: 0px solid transparent;\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wallets[_ngcontent-%COMP%]   .wallet.active[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 4px;\n  padding: 1px;\n  background: linear-gradient(var(--deg-gradient-6), var(--color-gradient-left-6), var(--color-gradient-right-6));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wallets[_ngcontent-%COMP%]   .wallet[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 88px;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wallets[_ngcontent-%COMP%]   .wallet[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 64px;\n    height: 64px;\n  }\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wallets[_ngcontent-%COMP%]   .wallet[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 20px;\n  color: var(--color-fonts-2);\n  margin: 17px 0 0;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .wallets[_ngcontent-%COMP%]   .wallet[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .continue-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 175px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC13YWxsZXQtcG9wdXAuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9fZm9udHMuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29tcG9uZW50cy9idXR0b24uc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL19taXhpbnMuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29tcG9uZW50cy90b2FzdGVyLnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2NvbXBvbmVudHMvaWNvbi5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwvX2FuaW1hdGlvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSx5QkFBQTtFQUNBLHdFQUFBO0VBR0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEQUY7QUNHQTtFQUNFLHlCQUFBO0VBQ0Esb0VBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURERjtBQ0dBO0VBQ0UseUJBQUE7RUFDQSxxRUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRERGO0FDSUE7RUFDRSx5QkFBQTtFQUNBLHVFQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FERkY7QUNLQTtFQUNFLHVCQUFBO0VBQ0Esc0VBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURIRjtBQ01BO0VBQ0UsNkJBQUE7RUFDQSwwRUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBREpGO0FFeENBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUYwQ0Q7QUV4Q0M7RUFDQyx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FGMENGO0FFdkNDO0VBQ0MsYUFBQTtBRnlDRjtBRXRDQztFQ0ZDLDJCRElDO0VDSEQsK0dESUM7RUNIRCxxSEFBQTtFQUNBLHFCQUFBO0FIMkNGO0FHbkVFO0VBQ0UsMkJENkJEO0VDNUJDLCtHRDZCRDtFQzVCQyxxQkFBQTtFQUNBLHFIQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FIcUVKO0FHaEVFO0VBQ0UsMkJEdUJEO0VDdEJDLG9JRHVCRDtFQ3RCQywwSUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUhrRUo7QUV6Q0M7RUFDQyxvQ0FBQTtFQUNBLFlBQUE7RUNEQSxrQkFBQTtFQWtCQSw4Q0RmcUQ7RUNnQnJELHFIQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FINEJGO0FHakRFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxtQkRKdUg7RUNLdkgsWURMa0g7RUNNbEgsK0dBQUE7RUFDQSw4RUFBQSxFQUN1QyxRQUFBO0VBQ3ZDLDJCQUFBLEVBQUEsZ0NBQUE7RUFDQSx1QkFBQSxFQUFBLFFBQUE7RUFDQSxvQkFBQTtBSGtESjtBRTFERTtFQUNDLGVBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VDUkQsa0JBQUE7RUFrQkEsOENEUnNEO0VDU3RELHFIQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FIb0RGO0FHekVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxtQkRHd0g7RUNGeEgsWURFbUg7RUNEbkgsK0dBQUE7RUFDQSw4RUFBQSxFQUN1QyxRQUFBO0VBQ3ZDLDJCQUFBLEVBQUEsZ0NBQUE7RUFDQSx1QkFBQSxFQUFBLFFBQUE7RUFDQSxvQkFBQTtBSDBFSjtBRTFFRTtFQUNDLGVBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VDaEJELGtCQUFBO0VBa0JBLDhDQUFBO0VBQ0EscUhBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUg0RUY7QUdqR0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLG1CRFd3SDtFQ1Z4SCxZRFVtSDtFQ1RuSCwrR0FBQTtFQUNBLDhFQUFBLEVBQ3VDLFFBQUE7RUFDdkMsMkJBQUEsRUFBQSxnQ0FBQTtFQUNBLHVCQUFBLEVBQUEsUUFBQTtFQUNBLG9CQUFBO0FIa0dKO0FFekZFO0VDM0NBLFdENkNDO0VDNUNELDZJRDZDQztFQzVDRCxtSkFBQTtFQUNBLHFCQUFBO0FIdUlGO0FFdkZFO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNDLGNBQUE7QUZ5Rkg7QUV0RkM7RUFDQyxvQ0FBQTtFQUNBLFlBQUE7RUN0Q0Esa0JBQUE7RUFrQkEsOENEc0JxRDtFQ3JCckQscUhBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUg4R0Y7QUduSUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLG1CRGlDdUg7RUNoQ3ZILFlEZ0NrSDtFQy9CbEgsK0dBQUE7RUFDQSw4RUFBQSxFQUN1QyxRQUFBO0VBQ3ZDLDJCQUFBLEVBQUEsZ0NBQUE7RUFDQSx1QkFBQSxFQUFBLFFBQUE7RUFDQSxvQkFBQTtBSG9JSjtBRXZHRTtFQUNDLGVBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VDN0NELGtCQUFBO0VBa0JBLDhDRDZCc0Q7RUM1QnRELHFIQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FIc0lGO0FHM0pFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxtQkR3Q3dIO0VDdkN4SCxZRHVDbUg7RUN0Q25ILCtHQUFBO0VBQ0EsOEVBQUEsRUFDdUMsUUFBQTtFQUN2QywyQkFBQSxFQUFBLGdDQUFBO0VBQ0EsdUJBQUEsRUFBQSxRQUFBO0VBQ0Esb0JBQUE7QUg0Sko7QUV0SEM7RUFDQyxZQUFBO0VBQ0EsNkRBQUE7RUNuQ0EsOENEb0NxRDtFQ25DckQscUhBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUg0SkY7QUUxSEU7RUFDQyxnQkFBQTtFQ3ZCRCx1SEFBQTtFQUdBLDZCQUFBO0VBQ0Esb0NBQUE7QUhrSkY7QUUzSEU7RUFDQyxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQzlDRCw4Q0QrQ3NEO0VDOUN0RCxxSEFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBSDRLRjtBRS9IRztFQUNDLGVBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VDcERGLDhDRHFEdUQ7RUNwRHZELHFIQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FIc0xGO0FFaklFO0VBQ0MscURBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0FGbUlIO0FJNVBBLGtKQUFBO0FBRUEsYUFBQTtBQUNBO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBSjhQSjtBSTVQRTtFQUNFLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBSitQSjtBSTdQRTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBSmdRSjtBSTlQRTtFQUNFLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBSmlRSjtBSS9QRTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBSmtRSjtBSWhRRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FKbVFKO0FJalFFO0VBQ0UsU0FBQTtFQUNBLFdBQUE7QUpvUUo7QUlsUUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBSnFRSjtBSW5RRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FKc1FKO0FJblFFLGlCQUFBO0FBQ0E7RUFDRSxpQkFBQTtBSnNRSjtBSXBRRTtFQUNFLHFCQUFBO0FKdVFKO0FJclFFOztFQUVFLGNBQUE7QUp3UUo7QUl0UUU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUp5UUo7QUl2UUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FKMFFKO0FJeFFFOztFQUVFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FKMlFKO0FJelFFOzt5REFBQTtBQUdBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUo0UUo7QUkxUUU7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FKNlFKO0FJM1FFO0VBQ0Usc0JBQUE7QUo4UUo7QUk1UUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUorUUo7QUk3UUU7RUFDRSxlQUFBO0FKZ1JKO0FJOVFFLGlIQUFBO0FBQ0E7RUFDRSxtdkJBQUE7QUppUko7QUkvUUUsa0hBQUE7QUFDQTtFQUNFLGdEQUFBO0FKa1JKO0FJaFJFLDJHQUFBO0FBQ0E7RUFDRSwra0JBQUE7QUptUko7QUlqUkUsMEhBQUE7QUFDQTtFQUNFLHV6QkFBQTtBSm9SSjtBSWxSRTs7RUFFRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBSnFSSjtBSW5SRTs7RUFFRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBSnNSSjtBSXBSRTtFQUVFLG9CQUFBO0FKc1JKO0FJcFJFO0VBQ0UseUJBQUE7QUp1Uko7QUlyUkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7QUp3Uko7QUl0UkU7RUFDRSx5QkFBQTtBSnlSSjtBSXZSRTtFQUNFLHlCQUFBO0FKMFJKO0FJeFJFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFQSxZQUFBO0FKMFJKO0FJeFJFLHNCQUFBO0FBQ0E7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsV0FBQTtFSjJSSjtFSXpSRTtJQUNFLGFBQUE7SUFDQSxXQUFBO0VKMlJKO0FBQ0Y7QUl6UkU7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsV0FBQTtFSjJSSjtFSXpSRTtJQUNFLGFBQUE7SUFDQSxXQUFBO0VKMlJKO0FBQ0Y7QUl6UkU7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsV0FBQTtFSjJSSjtBQUNGO0FLMWRBO0VBQ0MsZUFBQTtBTDRkRDtBS2xkTztFQUNDLGlEQUFBO0FMb2RSO0FLbGRPO0VBQ0Msa0RBQUE7QUxvZFI7QUt4Y007RUFDQywyQ0FBQTtBTDBjUDtBS3hjTTtFQUNDLDRDQUFBO0FMMGNQO0FLaGNZO0VBQ0ksK0JBQUE7QUxrY2hCO0FLemJ3QjtFQUNJLCtDQUFBO0FMMmI1QjtBS3pid0I7RUFDSSxnREFBQTtBTDJiNUI7QU1qZkE7RUFDSSx5Q0FBQTtBTm9mSjtBTWhmQTtFQUNJO0lBQ0UsVUFBQTtFTm1mSjtFTWpmRTtJQUNFLFVBQUE7RU5tZko7QUFDRjtBQTdmQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0gsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBK2ZEO0FBN2ZDO0VBVEQ7SUFVRSxpQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ00sOEJBQUE7RUFnZ0JOO0FBQ0Y7QUE5ZkM7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQWdnQkY7QUE5ZkU7RUFORDtJQU9FLGNBQUE7RUFpZ0JEO0FBQ0Y7QUEvZkM7RUFDTyxXQUFBO0VBQ04sYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBaWdCRjtBQS9mRTtFQUNDLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ1MsbUJBQUE7QUFpZ0JaO0FBOWZRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQWdnQlo7QUE5Zlk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWdnQmhCO0FBOWZnQjtFQVpKO0lBYVEsYUFBQTtJQUNBLFlBQUE7RUFpZ0JsQjtBQUNGO0FBL2ZnQjtFQUNJLDZCQUFBO0VHekJsQixrQkFBQTtBSDJoQkY7QUcxaEJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkhvQnlJO0VHbkJ6SSxZSG1Cb0k7RUdsQnBJLCtHQUFBO0VBQ0EsOEVBQUEsRUFDdUMsUUFBQTtFQUN2QywyQkFBQSxFQUFBLGdDQUFBO0VBQ0EsdUJBQUEsRUFBQSxRQUFBO0VBQ0Esb0JBQUE7QUgyaEJKO0FBM2dCZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBNmdCcEI7QUEzZ0JvQjtFQUxKO0lBTU0sV0FBQTtJQUNBLFlBQUE7RUE4Z0JwQjtBQUNGO0FBM2dCa0I7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBNmdCcEI7QUEzZ0JvQjtFQU5GO0lBT0ksZUFBQTtFQThnQnBCO0FBQ0Y7QUF2Z0JDO0VBQ0MsV0FBQTtBQXlnQkY7QUF0Z0JDO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0FBd2dCRiIsImZpbGUiOiJhZGQtd2FsbGV0LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG4uY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDU2MXB4O1xuICAgIHdpZHRoOiA1MzZweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0QG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuXHRcdHBhZGRpbmctdG9wOiA2MXB4O1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogODB2aDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR9XG5cblx0LmNsb3NlIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRyaWdodDogMDtcblx0XHR0b3A6IDA7XG5cblx0XHRAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR9XG5cdH1cblx0LmNvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdFx0aDEge1xuXHRcdFx0Zm9udC1zaXplOiAzMnB4O1xuXHRcdFx0Zm9udC1mYW1pbHk6IFwiR2lscm95LTQwMFwiO1xuXHRcdFx0Y29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcblx0XHR9XG5cbiAgICAgICAgLndhbGxldHMge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgICAgLndhbGxldCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNzVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXBsYXRmb3JtLWNvbG9yKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlzdC1jb2xvcik7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTE4cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDdweDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1ib3JkZXIodmFyKC0tZGVnLWdyYWRpZW50LTYpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTYpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC02KSwgMXB4LCA0cHgpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg4cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODhweDtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95LTQwMCc7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE3cHggMCAwO1xuICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDo3NjhweCkge1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0fVxuXG5cdC5idXR0b25zIHtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXG5cdC5jb250aW51ZS1idG4ge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1hcmdpbi10b3A6IDE3NXB4O1xuXHR9XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktOTAwJztcbiAgc3JjOiBsb2NhbCgnR2lscm95LTkwMCcpLCB1cmwoLi8uLi8uLi9mb250cy9HaWxyb3ktRXh0cmFCb2xkLm90ZikgZm9ybWF0KCd0cnVldHlwZScpO1xuXG4gIC8vIG5lZWQgZm9yIFNhZmFyaSBjb21wYWJpbGl0eVxuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95LTQwMCc7XG4gIHNyYzogbG9jYWwoJ0dpbHJveS00MDAnKSwgdXJsKC4vLi4vLi4vZm9udHMvR2lscm95LUxpZ2h0Lm90ZikgZm9ybWF0KCd0cnVldHlwZScpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dpbHJveS01MDAnO1xuICBzcmM6IGxvY2FsKCdHaWxyb3ktNTAwJyksIHVybCguLy4uLy4uL2ZvbnRzL0dpbHJveS1NZWRpdW0udHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNjAwJztcbiAgc3JjOiBsb2NhbCgnR2lscm95LTYwMCcpLCB1cmwoLi8uLi8uLi9mb250cy9HaWxyb3ktU2VtaWJvbGQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTYW50aG9ueSc7XG4gIHNyYzogbG9jYWwoJ1NhbnRob255JyksIHVybCguLy4uLy4uL2ZvbnRzL3NhbnRob255LnJlZ3VsYXIub3RmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktUmVndWxhcic7XG4gIHNyYzogbG9jYWwoJ0dpbHJveS1SZWd1bGFyJyksIHVybCguLy4uLy4uL2ZvbnRzL0dpbHJveS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbiIsIkBpbXBvcnQgXCIuLi9nbG9iYWwvbWl4aW5zXCI7XG5cbi5idXR0b24ge1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiA0MHB4O1xuXHRib3JkZXItcmFkaXVzOiAxNnB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6IFwiR2lscm95LTUwMFwiO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG5cblx0LnBsdXMge1xuXHRcdHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7IFxuXHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRtYXJnaW4tcmlnaHQ6IDVweDtcblx0XHRmb250LWZhbWlseTogXCJHaWxyb3ktNDAwXCI7XG5cdH1cblxuXHQmOmZvY3VzLXZpc2libGUge1xuXHRcdG91dGxpbmU6IG5vbmU7XG5cdH1cblxuXHQmLnByaW1hcnkge1xuXHRcdEBpbmNsdWRlIGJ0bi1kZWZhdWx0KFxuXHRcdFx0dmFyKC0tY29sb3ItZm9udHMtMyksXG5cdFx0XHRsaW5lYXItZ3JhZGllbnQodmFyKC0tZGVnLWdyYWRpZW50LTMpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTMpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0zKSksXG5cdFx0XHRsaW5lYXItZ3JhZGllbnQodmFyKC0tZGVnLWdyYWRpZW50LTMpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTMpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0zKSlcblx0XHQpO1xuXHRcdEBpbmNsdWRlIGJ0bi1ob3Zlcihcblx0XHRcdHZhcigtLWNvbG9yLWZvbnRzLTMpLFxuXHRcdFx0bGluZWFyLWdyYWRpZW50KHZhcigtLWRlZy1ncmFkaWVudC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMSkpLFxuXHRcdFx0bGluZWFyLWdyYWRpZW50KHZhcigtLWRlZy1ncmFkaWVudC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMSkpXG5cdFx0KTtcblx0XHRAaW5jbHVkZSBidG4tZGlzYWJsZWQoXG5cdFx0XHR2YXIoLS1jb2xvci1mb250cy0zKSxcblx0XHRcdGxpbmVhci1ncmFkaWVudCh2YXIoLS1kZWctZ3JhZGllbnQtZGlzYWJsZWQpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LWRpc2FibGVkKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtZGlzYWJsZWQpKSxcblx0XHRcdGxpbmVhci1ncmFkaWVudCh2YXIoLS1kZWctZ3JhZGllbnQtZGlzYWJsZWQpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LWRpc2FibGVkKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtZGlzYWJsZWQpKVxuXHRcdCk7XG5cdH1cblxuXHQmLnNlY29uZGFyeSB7XG5cdFx0YmFja2dyb3VuZDogdmFyKC0tY29sb3ItdHJhbnNwYXJlbnQpO1xuXHRcdGJvcmRlcjogbm9uZTtcblx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItYm9yZGVyKHZhcigtLWRlZy1ncmFkaWVudC0zKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0zKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMyksIDJweCwgMTZweCk7XG5cdFx0QGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLXRleHQodmFyKC0tZGVnLWdyYWRpZW50LTMpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTMpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0zKSk7XG5cblx0XHQmOmhvdmVyIHtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItYm9yZGVyKHZhcigtLWRlZy1ncmFkaWVudC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMSksIDJweCwgMTZweCk7XG5cdFx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dCh2YXIoLS1kZWctZ3JhZGllbnQtMSksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMSksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTEpKTtcblx0XHR9XG5cblx0XHQmLnVuZm9sbG93OmhvdmVyIHtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItYm9yZGVyKHZhcigtLWRlZy1ncmFkaWVudC03KSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC03KSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtNyksIDJweCwgMTZweCk7XG5cdFx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dCh2YXIoLS1kZWctZ3JhZGllbnQtNyksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtNyksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTcpKTtcblx0XHR9XG5cdH1cblxuICAmLnBpbmsge1xuXHRcdEBpbmNsdWRlIGJ0bi1kZWZhdWx0KFxuXHRcdFx0I2ZmZixcblx0XHRcdGxpbmVhci1ncmFkaWVudCh2YXIoLS1kZWctZ3JhZGllbnQtbGl2ZS1ldmVudHMpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LWxpdmUtZXZlbnRzKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtbGl2ZS1ldmVudHMpKSxcblx0XHRcdGxpbmVhci1ncmFkaWVudCh2YXIoLS1kZWctZ3JhZGllbnQtbGl2ZS1ldmVudHMpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LWxpdmUtZXZlbnRzKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtbGl2ZS1ldmVudHMpKVxuXHRcdCk7XG5cdH1cblxuICAmLnNlY29uZGFyeS1waW5rIHtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci10cmFuc3BhcmVudCk7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuXHQgIGNvbG9yOiAjOTc3RTg5O1xuXHR9XG5cblx0Ji5lcnJvciB7XG5cdFx0YmFja2dyb3VuZDogdmFyKC0tY29sb3ItdHJhbnNwYXJlbnQpO1xuXHRcdGJvcmRlcjogbm9uZTtcblx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItYm9yZGVyKHZhcigtLWRlZy1ncmFkaWVudC00KSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC00KSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtNCksIDJweCwgMTZweCk7XG5cdFx0QGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLXRleHQodmFyKC0tZGVnLWdyYWRpZW50LTQpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTQpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC00KSk7XG5cblx0XHQmOmhvdmVyIHtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItYm9yZGVyKHZhcigtLWRlZy1ncmFkaWVudC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMSksIDJweCwgMTZweCk7XG5cdFx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dCh2YXIoLS1kZWctZ3JhZGllbnQtMSksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMSksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTEpKTtcblx0XHR9XG5cdH1cblxuXHQmLnRlcnRpYXJ5IHtcblx0XHRib3JkZXI6IG5vbmU7XG5cdFx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodmFyKC0tY29sb3ItdHJhbnNwYXJlbnQpKTtcblx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dCh2YXIoLS1kZWctZ3JhZGllbnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTMpKTtcblxuXHRcdHNwYW4ge1xuXHRcdFx0cGFkZGluZy10b3A6IDNweDtcblx0XHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVyLXNwYW4tdGV4dCh2YXIoLS1kZWctZ3JhZGllbnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTMpKTtcblx0XHR9XG5cblx0XHQmOmhvdmVyIHtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dCh2YXIoLS1kZWctZ3JhZGllbnQtMSksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMSksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTEpKTtcblxuXHRcdFx0c3BhbiB7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0dHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dCh2YXIoLS1kZWctZ3JhZGllbnQtMSksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMSksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTEpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmOmRpc2FibGVkIHtcblx0XHRcdC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS1jb2xvci1mb250cy1saXN0LWhlYWQpO1xuXHRcdFx0LW1vei10ZXh0LWZpbGwtY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLWxpc3QtaGVhZCk7XG5cdFx0XHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXHRcdH1cblx0fVxufVxuIiwiQG1peGluIGJ0bi1ob3ZlcigkdGV4dENvbG9yLCAkYmcsICRib3JkZXJDb2xvcikge1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHRleHRDb2xvcjtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgfVxufVxuXG5AbWl4aW4gYnRuLWRpc2FibGVkKCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gICY6ZGlzYWJsZWQge1xuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG4gIH1cbn1cblxuQG1peGluIGJ0bi1kZWZhdWx0KCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gIGNvbG9yOiAkdGV4dENvbG9yO1xuICBiYWNrZ3JvdW5kOiAkYmc7XG4gIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZWFyLWJnKCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG59XG5cbkBtaXhpbiBib3JkZXItZ3JhZGllbnQtbGluZWFyKCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJvcmRlci1pbWFnZTogIGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItYm9yZGVyKFxuICAkZGVnLFxuICAkbGVmdENvbG9yLFxuICAkcmlnaHRDb2xvcixcbiAgJGJvcmRlcldpZHRoLFxuICAkYm9yZGVyUmFkaXVzXG4pIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XG4gICAgcGFkZGluZzogJGJvcmRlcldpZHRoO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG4gICAgLXdlYmtpdC1tYXNrOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiAwIDApIGNvbnRlbnQtYm94LFxuICAgICAgLyogWzFdICovIGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCk7IC8qIFsyXSAqL1xuICAgIC13ZWJraXQtbWFzay1jb21wb3NpdGU6IHhvcjsgLyogWzNdINC00LvRjyDQv9GW0LTRgtGA0LjQvNC60Lgg0LHRgNCw0YPQt9C10YDRltCyICovXG4gICAgbWFzay1jb21wb3NpdGU6IGV4Y2x1ZGU7IC8qIFszXSAqL1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItdGV4dCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGVmdENvbG9yO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItZXZlbnRzLWxpdmUoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxlZnRDb2xvcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZXItc3Bhbi10ZXh0KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKXtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIHZhcigtLWRlZy1ncmFkaWVudC0zKSxcbiAgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0zKSxcbiAgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMykpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5AbWl4aW4gZXJyb3ItbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95LTUwMCc7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dChcbiAgICB2YXIoLS1kZWctZ3JhZGllbnQtNCksXG4gICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC00KSxcbiAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC00KVxuICApO1xufVxuXG5AbWl4aW4gR2lscm95LTQwMC0xNi1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNDAwJztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AbWl4aW4gR2lscm95LTUwMC0zMC1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNTAwJztcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AbWl4aW4gR2lscm95LTYwMC0xNC1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNjAwJztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuIiwiLyogYmFzZWQgb24gYW5ndWxhci10b2FzdHIgY3NzIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3hhbmR4c3MvYW5ndWxhci10b2FzdHIvYmxvYi9jYjUwOGZlNjgwMWQ2YjI4OGQzYWZjNTI1YmI0MGZlZTFiMTAxNjUwL2Rpc3QvYW5ndWxhci10b2FzdHIuY3NzICovXG5cbi8qIHBvc2l0aW9uICovXG4udG9hc3QtY2VudGVyLWNlbnRlciB7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIC50b2FzdC10b3AtY2VudGVyIHtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnRvYXN0LWJvdHRvbS1jZW50ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAudG9hc3QtdG9wLWZ1bGwtd2lkdGgge1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAudG9hc3QtYm90dG9tLWZ1bGwtd2lkdGgge1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAudG9hc3QtdG9wLWxlZnQge1xuICAgIHRvcDogMTJweDtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG4gIC50b2FzdC10b3AtcmlnaHQge1xuICAgIHRvcDogMTJweDtcbiAgICByaWdodDogMTJweDtcbiAgfVxuICAudG9hc3QtYm90dG9tLXJpZ2h0IHtcbiAgICByaWdodDogMTJweDtcbiAgICBib3R0b206IDEycHg7XG4gIH1cbiAgLnRvYXN0LWJvdHRvbS1sZWZ0IHtcbiAgICBib3R0b206IDEycHg7XG4gICAgbGVmdDogMTJweDtcbiAgfVxuICBcbiAgLyogdG9hc3Qgc3R5bGVzICovXG4gIC50b2FzdC10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnRvYXN0LW1lc3NhZ2Uge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgfVxuICAudG9hc3QtbWVzc2FnZSBhLFxuICAudG9hc3QtbWVzc2FnZSBsYWJlbCB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIH1cbiAgLnRvYXN0LW1lc3NhZ2UgYTpob3ZlciB7XG4gICAgY29sb3I6ICNDQ0NDQ0M7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIC50b2FzdC1jbG9zZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogLTAuM2VtO1xuICAgIHRvcDogLTAuM2VtO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZmZmZjtcbiAgICAvKiBvcGFjaXR5OiAwLjg7ICovXG4gIH1cbiAgLnRvYXN0LWNsb3NlLWJ1dHRvbjpob3ZlcixcbiAgLnRvYXN0LWNsb3NlLWJ1dHRvbjpmb2N1cyB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbiAgLypBZGRpdGlvbmFsIHByb3BlcnRpZXMgZm9yIGJ1dHRvbiB2ZXJzaW9uXG4gICBpT1MgcmVxdWlyZXMgdGhlIGJ1dHRvbiBlbGVtZW50IGluc3RlYWQgb2YgYW4gYW5jaG9yIHRhZy5cbiAgIElmIHlvdSB3YW50IHRoZSBhbmNob3IgdmVyc2lvbiwgaXQgcmVxdWlyZXMgYGhyZWY9XCIjXCJgLiovXG4gIGJ1dHRvbi50b2FzdC1jbG9zZS1idXR0b24ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbiAgfVxuICAudG9hc3QtY29udGFpbmVyIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5OTk5O1xuICB9XG4gIC50b2FzdC1jb250YWluZXIgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDAgMCA2cHg7XG4gICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAzcHggM3B4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE1cHggY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIH1cbiAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0cjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2luZm8tY2lyY2xlLnN2ZyAqL1xuICAudG9hc3QtaW5mbyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBuYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNuSUhacFpYZENiM2c5SnpBZ01DQTFNVElnTlRFeUp5QjNhV1IwYUQwbk5URXlKeUJvWldsbmFIUTlKelV4TWljK1BIQmhkR2dnWm1sc2JEMG5jbWRpS0RJMU5Td3lOVFVzTWpVMUtTY2daRDBuVFRJMU5pQTRRekV4T1M0d05ETWdPQ0E0SURFeE9TNHdPRE1nT0NBeU5UWmpNQ0F4TXpZdU9UazNJREV4TVM0d05ETWdNalE0SURJME9DQXlORGh6TWpRNExURXhNUzR3TURNZ01qUTRMVEkwT0VNMU1EUWdNVEU1TGpBNE15QXpPVEl1T1RVM0lEZ2dNalUySURoNmJUQWdNVEV3WXpJekxqRTVOaUF3SURReUlERTRMamd3TkNBME1pQTBNbk10TVRndU9EQTBJRFF5TFRReUlEUXlMVFF5TFRFNExqZ3dOQzAwTWkwME1pQXhPQzQ0TURRdE5ESWdOREl0TkRKNmJUVTJJREkxTkdNd0lEWXVOakkzTFRVdU16Y3pJREV5TFRFeUlERXlhQzA0T0dNdE5pNDJNamNnTUMweE1pMDFMak0zTXkweE1pMHhNbll0TWpSak1DMDJMall5TnlBMUxqTTNNeTB4TWlBeE1pMHhNbWd4TW5ZdE5qUm9MVEV5WXkwMkxqWXlOeUF3TFRFeUxUVXVNemN6TFRFeUxURXlkaTB5TkdNd0xUWXVOakkzSURVdU16Y3pMVEV5SURFeUxURXlhRFkwWXpZdU5qSTNJREFnTVRJZ05TNHpOek1nTVRJZ01USjJNVEF3YURFeVl6WXVOakkzSURBZ01USWdOUzR6TnpNZ01USWdNVEoyTWpSNkp5OCtQQzl6ZG1jK1wiKTtcbiAgfVxuICAvKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci90aW1lcy1jaXJjbGUuc3ZnICovXG4gIC50b2FzdC1lcnJvciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9pY29ucy90b2FzdHItd2FybmluZy1pY29uLnN2ZycpO1xuICB9XG4gIC8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2NoZWNrLnN2ZyAqL1xuICAudG9hc3Qtc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBuYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNuSUhacFpYZENiM2c5SnpBZ01DQTFNVElnTlRFeUp5QjNhV1IwYUQwbk5URXlKeUJvWldsbmFIUTlKelV4TWljK1BIQmhkR2dnWm1sc2JEMG5jbWRpS0RJMU5Td3lOVFVzTWpVMUtTY2daRDBuVFRFM015NDRPVGdnTkRNNUxqUXdOR3d0TVRZMkxqUXRNVFkyTGpSakxUa3VPVGszTFRrdU9UazNMVGt1T1RrM0xUSTJMakl3TmlBd0xUTTJMakl3Tkd3ek5pNHlNRE10TXpZdU1qQTBZemt1T1RrM0xUa3VPVGs0SURJMkxqSXdOeTA1TGprNU9DQXpOaTR5TURRZ01Fd3hPVElnTXpFeUxqWTVJRFF6TWk0d09UVWdOekl1TlRrMll6a3VPVGszTFRrdU9UazNJREkyTGpJd055MDVMams1TnlBek5pNHlNRFFnTUd3ek5pNHlNRE1nTXpZdU1qQTBZemt1T1RrM0lEa3VPVGszSURrdU9UazNJREkyTGpJd05pQXdJRE0yTGpJd05Hd3RNamswTGpRZ01qazBMalF3TVdNdE9TNDVPVGdnT1M0NU9UY3RNall1TWpBM0lEa3VPVGszTFRNMkxqSXdOQzB1TURBeGVpY3ZQand2YzNablBnPT1cIik7XG4gIH1cbiAgLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvZXhjbGFtYXRpb24tdHJpYW5nbGUuc3ZnICovXG4gIC50b2FzdC13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY25JSFpwWlhkQ2IzZzlKekFnTUNBMU56WWdOVEV5SnlCM2FXUjBhRDBuTlRjMkp5Qm9aV2xuYUhROUp6VXhNaWMrUEhCaGRHZ2dabWxzYkQwbmNtZGlLREkxTlN3eU5UVXNNalUxS1NjZ1pEMG5UVFUyT1M0MU1UY2dORFF3TGpBeE0wTTFPRGN1T1RjMUlEUTNNaTR3TURjZ05UWTBMamd3TmlBMU1USWdOVEkzTGprMElEVXhNa2cwT0M0d05UUmpMVE0yTGprek55QXdMVFU1TGprNU9TMDBNQzR3TlRVdE5ERXVOVGMzTFRjeExqazROMHd5TkRZdU5ESXpJREl6TGprNE5XTXhPQzQwTmpjdE16SXVNREE1SURZMExqY3lMVE14TGprMU1TQTRNeTR4TlRRZ01Hd3lNemt1T1RRZ05ERTJMakF5T0hwTk1qZzRJRE0xTkdNdE1qVXVOREExSURBdE5EWWdNakF1TlRrMUxUUTJJRFEyY3pJd0xqVTVOU0EwTmlBME5pQTBOaUEwTmkweU1DNDFPVFVnTkRZdE5EWXRNakF1TlRrMUxUUTJMVFEyTFRRMmVtMHRORE11TmpjekxURTJOUzR6TkRac055NDBNVGdnTVRNMll5NHpORGNnTmk0ek5qUWdOUzQyTURrZ01URXVNelEySURFeExqazRNaUF4TVM0ek5EWm9ORGd1TlRRMll6WXVNemN6SURBZ01URXVOak0xTFRRdU9UZ3lJREV4TGprNE1pMHhNUzR6TkRac055NDBNVGd0TVRNMll5NHpOelV0Tmk0NE56UXROUzR3T1RndE1USXVOalUwTFRFeExqazRNaTB4TWk0Mk5UUm9MVFl6TGpNNE0yTXROaTQ0T0RRZ01DMHhNaTR6TlRZZ05TNDNPQzB4TVM0NU9ERWdNVEl1TmpVMGVpY3ZQand2YzNablBnPT1cIik7XG4gIH1cbiAgLnRvYXN0LWNvbnRhaW5lci50b2FzdC10b3AtY2VudGVyIC5uZ3gtdG9hc3RyLFxuICAudG9hc3QtY29udGFpbmVyLnRvYXN0LWJvdHRvbS1jZW50ZXIgLm5neC10b2FzdHIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbiAgLnRvYXN0LWNvbnRhaW5lci50b2FzdC10b3AtZnVsbC13aWR0aCAubmd4LXRvYXN0cixcbiAgLnRvYXN0LWNvbnRhaW5lci50b2FzdC1ib3R0b20tZnVsbC13aWR0aCAubmd4LXRvYXN0ciB7XG4gICAgd2lkdGg6IDk2JTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbiAgLm5neC10b2FzdHIge1xuICBcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgfVxuICAudG9hc3Qtc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxQTM1MTtcbiAgfVxuICAudG9hc3QtZXJyb3Ige1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10b2FzdHItbGVmdCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItdG9hc3RyLXJpZ2h0KTtcbiAgICBjb2xvcjogI0VDMUExQSAhaW1wb3J0YW50O1xuICB9XG4gIC50b2FzdC1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkY5NkI0O1xuICB9XG4gIC50b2FzdC13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjg5NDA2O1xuICB9XG4gIC50b2FzdC1wcm9ncmVzcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogNHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIC8qIFJlc3BvbnNpdmUgRGVzaWduICovXG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDI0MHB4KSB7XG4gICAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ci5kaXYge1xuICAgICAgcGFkZGluZzogOHB4IDhweCA4cHggNTBweDtcbiAgICAgIHdpZHRoOiAxMWVtO1xuICAgIH1cbiAgICAudG9hc3QtY29udGFpbmVyIC50b2FzdC1jbG9zZS1idXR0b24ge1xuICAgICAgcmlnaHQ6IC0wLjJlbTtcbiAgICAgIHRvcDogLTAuMmVtO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAyNDFweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ci5kaXYge1xuICAgICAgcGFkZGluZzogOHB4IDhweCA4cHggNTBweDtcbiAgICAgIHdpZHRoOiAxOGVtO1xuICAgIH1cbiAgICAudG9hc3QtY29udGFpbmVyIC50b2FzdC1jbG9zZS1idXR0b24ge1xuICAgICAgcmlnaHQ6IC0wLjJlbTtcbiAgICAgIHRvcDogLTAuMmVtO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ci5kaXYge1xuICAgICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcbiAgICAgIHdpZHRoOiAyNWVtO1xuICAgIH1cbiAgfVxuICAiLCJtYXQtaWNvbiB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblxuXHQmLnRlcnRpYXJ5IHtcblx0XHQmOmhvdmVyIHtcblx0XHRcdC8vVE9ETyBob3ZlciBub3Qgd29ya2luZyBjb3JyZWN0bHlcblx0XHRcdC8vIDo6bmctZGVlcCBzdmcge1xuXHRcdFx0c3ZnIHtcblx0XHRcdFx0ZGVmcyB7XG5cdFx0XHRcdFx0bGluZWFyR3JhZGllbnQge1xuXHRcdFx0XHRcdFx0c3RvcCB7XG5cdFx0XHRcdFx0XHRcdCY6Zmlyc3Qtb2YtdHlwZSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RvcC1jb2xvcjogdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC1pY29uLWhvdmVyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQmOmxhc3Qtb2YtdHlwZSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RvcC1jb2xvcjogdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtaWNvbi1ob3Zlcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQ6Om5nLWRlZXAgc3ZnIHtcblx0XHRcdGRlZnMge1xuXHRcdFx0XHRsaW5lYXJHcmFkaWVudCB7XG5cdFx0XHRcdFx0c3RvcCB7XG5cdFx0XHRcdFx0XHQmOmZpcnN0LW9mLXR5cGUge1xuXHRcdFx0XHRcdFx0XHRzdG9wLWNvbG9yOiB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LWljb24pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0JjpsYXN0LW9mLXR5cGUge1xuXHRcdFx0XHRcdFx0XHRzdG9wLWNvbG9yOiB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC1pY29uKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQmLnByaW1hcnkge1xuXHRcdHN2ZyB7XG4gICAgICAgICAgICBwYXRoIHtcbiAgICAgICAgICAgICAgICBmaWxsOiAgdmFyKC0tY29sb3ItdG9vbHRpcC10ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmhlYWRlci1iZyB7XG4gICAgICAgIDo6bmctZGVlcCBzdmcge1xuICAgICAgICAgICAgZGVmcyB7XG4gICAgICAgICAgICAgICAgbGluZWFyR3JhZGllbnQge1xuICAgICAgICAgICAgICAgICAgICBzdG9wIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yLWdyYWRpZW50LWxlZnQtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG4uYW5pbWF0aW9uLWhpZGRlbi1za2VsZXRvbiB7XG4gICAgYW5pbWF0aW9uOiBoaWRlLXNrZWxldG9uIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuXG5Aa2V5ZnJhbWVzIGhpZGUtc2tlbGV0b24ge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH0iXX0= */"]
});

/***/ }),

/***/ 3755:
/*!******************************************************************************!*\
  !*** ./apps/frontend/src/app/shared/components/cakebox/cakebox.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CakeboxComponent": () => (/* binding */ CakeboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7661);



function CakeboxComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} }
function CakeboxComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx_r1.cakebox.smallImage || ctx_r1.cakebox.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CakeboxComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} if (rf & 2) {
    const reward_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("z-index", i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", reward_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class CakeboxComponent {
    constructor() {
        this.isSmall = false;
        this.maxSize = 11;
    }
}
CakeboxComponent.ɵfac = function CakeboxComponent_Factory(t) { return new (t || CakeboxComponent)(); };
CakeboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CakeboxComponent, selectors: [["cake-cakebox"]], inputs: { isSmall: "isSmall", cakebox: "cakebox", maxSize: "maxSize" }, decls: 8, vars: 9, consts: [[1, "cakebox-container", 3, "ngClass"], [1, "box"], ["loading", "lazy", "src", "../../../../assets/imgs/confetti-cakebox.png", "alt", "", "class", "confetti", 4, "ngIf"], ["class", "background-small-icon", 4, "ngIf"], [3, "svgIcon"], [1, "slices"], ["loading", "lazy", "alt", "", 3, "z-index", 4, "ngFor", "ngForOf"], ["loading", "lazy", "src", "../../../../assets/imgs/confetti-cakebox.png", "alt", "", 1, "confetti"], [1, "background-small-icon"], ["loading", "lazy", "alt", ""]], template: function CakeboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CakeboxComponent_img_2_Template, 1, 0, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CakeboxComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CakeboxComponent_img_6_Template, 1, 3, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isSmall ? "small-container" : "big-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSmall);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSmall && ((ctx.cakebox == null ? null : ctx.cakebox.smallImage) || (ctx.cakebox == null ? null : ctx.cakebox.image)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("svgIcon", "", ctx.cakebox.rarity || "STARTER", "-cakebox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 5, ctx.cakebox == null ? null : ctx.cakebox.rewards, 0, ctx.isSmall ? 3 : ctx.maxSize));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_1__.SlicePipe], styles: ["@-moz-document url-prefix() {\n  .confetti {\n    transform: scale(0.75) translate(-50%, -50%) !important;\n    transform-origin: left top;\n    width: 133.3333333333%;\n    height: 133.3333333333%;\n  }\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  margin: auto;\n  transform: translateY(-5%);\n  width: 250px;\n  height: 250px;\n  position: relative;\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .confetti[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  zoom: 0.75;\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: none;\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  border-radius: 13.1674px;\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(1) {\n  display: block;\n  left: 4%;\n  top: 22%;\n  width: 98px;\n  height: 98px;\n  transform: rotate(-15deg);\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(2) {\n  display: block;\n  left: 55%;\n  top: 22%;\n  width: 79px;\n  height: 79px;\n  transform: rotate(15deg);\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(3) {\n  display: block;\n  left: 44%;\n  top: 50%;\n  width: 60px;\n  height: 60px;\n  transform: rotate(5deg);\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(4) {\n  display: block;\n  left: 25%;\n  top: 10%;\n  width: 14px;\n  height: 14px;\n  transform: rotate(-26deg);\n  border-radius: 5px;\n  opacity: 0.6;\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(11) {\n  display: block;\n  left: -40%;\n  top: 20%;\n  width: 26px;\n  border-radius: 5px;\n  height: 26px;\n  transform: rotate(-18deg);\n  opacity: 0.6;\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(10) {\n  display: block;\n  left: 0%;\n  top: 0%;\n  width: 11px;\n  border-radius: 5px;\n  height: 11px;\n  transform: rotate(-60deg);\n  opacity: 0.6;\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(7) {\n  display: block;\n  left: -15%;\n  top: 50%;\n  width: 10px;\n  border-radius: 5px;\n  height: 10px;\n  transform: rotate(-5deg);\n  opacity: 0.6;\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(8) {\n  display: block;\n  left: 0%;\n  top: 70%;\n  width: 12px;\n  border-radius: 5px;\n  height: 12px;\n  transform: rotate(-60deg);\n  opacity: 0.6;\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(9) {\n  display: block;\n  left: 90%;\n  top: 15%;\n  width: 16px;\n  border-radius: 5px;\n  height: 16px;\n  transform: rotate(18deg);\n  opacity: 0.6;\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(6) {\n  display: block;\n  left: 110%;\n  top: 21%;\n  width: 14px;\n  border-radius: 5px;\n  height: 14px;\n  transform: rotate(-30deg);\n  opacity: 0.6;\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(5) {\n  display: block;\n  left: 90%;\n  top: 70%;\n  width: 16px;\n  border-radius: 5px;\n  height: 16px;\n  transform: rotate(18deg);\n  opacity: 0.6;\n}\n.cakebox-container.small-container[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-image: none !important;\n}\n.cakebox-container.small-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  width: 37px;\n  height: 37px;\n}\n.cakebox-container.small-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: none;\n}\n.cakebox-container.small-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(1) {\n  display: block;\n  left: 10%;\n  top: 10%;\n  width: 15px;\n  height: 15px;\n  transform: rotate(-15deg);\n}\n.cakebox-container.small-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(2) {\n  display: block;\n  left: 57%;\n  top: 5%;\n  width: 12px;\n  height: 12px;\n  transform: rotate(15deg);\n}\n.cakebox-container.small-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(3) {\n  display: block;\n  left: 40%;\n  top: 45%;\n  width: 10px;\n  height: 10px;\n  transform: rotate(5deg);\n}\n.cakebox-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.cakebox-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .background-small-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  overflow: hidden;\n  left: 17.3%;\n  top: 8.79%;\n  width: 65%;\n  height: 65%;\n  border-radius: 2px;\n  transform: rotate(45deg) skew(-8.5deg, -8.5deg) scale(1.01);\n}\n.cakebox-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .background-small-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(-45deg) scale(1.5) translate(0%, -50%);\n  width: 22px;\n  height: 22px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n}\n.cakebox-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.cakebox-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.cakebox-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  object-fit: cover;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNha2Vib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQztJQUNDLHVEQUFBO0lBQ0EsMEJBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0VBQ0E7QUFDRjtBQUdFO0VBQ0MsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQURIO0FBR0c7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0FBREo7QUFLSTtFQUNDLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLHdCQUFBO0FBSEw7QUFLSztFQUNDLGNBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFITjtBQUtLO0VBQ0MsY0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQUhOO0FBS0s7RUFDQyxjQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBSE47QUFLSztFQUNDLGNBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFITjtBQUtLO0VBQ0MsY0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUhOO0FBS0s7RUFDQyxjQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBSE47QUFLSztFQUNDLGNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUFITjtBQUtLO0VBQ0MsY0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUhOO0FBS0s7RUFDQyxjQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FBSE47QUFLSztFQUNDLGNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFITjtBQUtLO0VBQ0MsY0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQUhOO0FBVUM7RUFDQyx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGlDQUFBO0FBUkY7QUFVRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FBUkg7QUFXSTtFQUNDLGFBQUE7QUFUTDtBQVdLO0VBQ0MsY0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQVROO0FBV0s7RUFDQyxjQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBVE47QUFXSztFQUNDLGNBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFUTjtBQWdCQztFQUNDLGtCQUFBO0FBZEY7QUFnQkU7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkRBQUE7QUFkSDtBQWdCRztFQUNDLHdEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBZEo7QUFrQkU7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQWhCSDtBQW1CRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQWpCSDtBQW1CRztFQUNDLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWpCSiIsImZpbGUiOiJjYWtlYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcblx0LmNvbmZldHRpIHtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDAuNzUpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xuXHRcdHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLyAwLjc1KTtcblx0XHRoZWlnaHQ6IGNhbGMoMTAwJSAvIDAuNzUpO1xuXHR9XG59XG4uY2FrZWJveC1jb250YWluZXIge1xuXHQmLmJpZy1jb250YWluZXIge1xuXHRcdC5ib3gge1xuXHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XG5cdFx0XHR3aWR0aDogMjUwcHg7XG5cdFx0XHRoZWlnaHQ6IDI1MHB4O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdFx0XHQuY29uZmV0dGkge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGxlZnQ6IDUwJTtcblx0XHRcdFx0dG9wOiA1MCU7XG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHRcdFx0XHR6b29tOiAwLjc1O1xuXHRcdFx0fVxuXG5cdFx0XHQuc2xpY2VzIHtcblx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMy4xNjc0cHg7XG5cblx0XHRcdFx0XHQmOm50aC1vZi10eXBlKDEpIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0bGVmdDogNCU7XG5cdFx0XHRcdFx0XHR0b3A6IDIyJTtcblx0XHRcdFx0XHRcdHdpZHRoOiA5OHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA5OHB4O1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JjpudGgtb2YtdHlwZSgyKSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdGxlZnQ6IDU1JTtcblx0XHRcdFx0XHRcdHRvcDogMjIlO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDc5cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDc5cHg7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCY6bnRoLW9mLXR5cGUoMykge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRsZWZ0OiA0NCU7XG5cdFx0XHRcdFx0XHR0b3A6IDUwJTtcblx0XHRcdFx0XHRcdHdpZHRoOiA2MHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA2MHB4O1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCY6bnRoLW9mLXR5cGUoNCkge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRsZWZ0OiAyNSU7XG5cdFx0XHRcdFx0XHR0b3A6IDEwJTtcblx0XHRcdFx0XHRcdHdpZHRoOiAxNHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxNHB4O1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTI2ZGVnKTtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuNjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JjpudGgtb2YtdHlwZSgxMSkge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRsZWZ0OiAtNDAlO1xuXHRcdFx0XHRcdFx0dG9wOiAyMCU7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjZweDtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjZweDtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC0xOGRlZyk7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwLjY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCY6bnRoLW9mLXR5cGUoMTApIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0bGVmdDogMCU7XG5cdFx0XHRcdFx0XHR0b3A6IDAlO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDExcHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDExcHg7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpO1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMC42O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQmOm50aC1vZi10eXBlKDcpIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0bGVmdDogLTE1JTtcblx0XHRcdFx0XHRcdHRvcDogNTAlO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwcHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwLjY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCY6bnRoLW9mLXR5cGUoOCkge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwJTtcblx0XHRcdFx0XHRcdHRvcDogNzAlO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEycHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEycHg7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpO1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMC42O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQmOm50aC1vZi10eXBlKDkpIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0bGVmdDogOTAlO1xuXHRcdFx0XHRcdFx0dG9wOiAxNSU7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTZweDtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMTZweDtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDE4ZGVnKTtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuNjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JjpudGgtb2YtdHlwZSg2KSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdGxlZnQ6IDExMCU7XG5cdFx0XHRcdFx0XHR0b3A6IDIxJTtcblx0XHRcdFx0XHRcdHdpZHRoOiAxNHB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxNHB4O1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKTtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuNjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JjpudGgtb2YtdHlwZSg1KSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdGxlZnQ6IDkwJTtcblx0XHRcdFx0XHRcdHRvcDogNzAlO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDE2cHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDE2cHg7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxOGRlZyk7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwLjY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ji5zbWFsbC1jb250YWluZXIge1xuXHRcdHdpZHRoOiBmaXQtY29udGVudDtcblx0XHRoZWlnaHQ6IGZpdC1jb250ZW50O1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcblxuXHRcdC5ib3gge1xuXHRcdFx0d2lkdGg6IDM3cHg7XG5cdFx0XHRoZWlnaHQ6IDM3cHg7XG5cblx0XHRcdC5zbGljZXMge1xuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cblx0XHRcdFx0XHQmOm50aC1vZi10eXBlKDEpIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0bGVmdDogMTAlO1xuXHRcdFx0XHRcdFx0dG9wOiAxMCU7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTVweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMTVweDtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCY6bnRoLW9mLXR5cGUoMikge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRsZWZ0OiA1NyU7XG5cdFx0XHRcdFx0XHR0b3A6IDUlO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEycHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEycHg7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCY6bnRoLW9mLXR5cGUoMykge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRsZWZ0OiA0MCU7XG5cdFx0XHRcdFx0XHR0b3A6IDQ1JTtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMHB4O1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LmJveCB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdFx0LmJhY2tncm91bmQtc21hbGwtaWNvbiB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0bGVmdDogMTcuMyU7XG5cdFx0XHR0b3A6IDguNzklO1xuXHRcdFx0d2lkdGg6IDY1JTtcblx0XHRcdGhlaWdodDogNjUlO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNrZXcoLTguNWRlZywgLTguNWRlZykgc2NhbGUoMS4wMSk7XG5cblx0XHRcdGltZyB7XG5cdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMS41KSB0cmFuc2xhdGUoMCUsIC01MCUpO1xuXHRcdFx0XHR3aWR0aDogMjJweDtcblx0XHRcdFx0aGVpZ2h0OiAyMnB4O1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGxlZnQ6IDUwJTtcblx0XHRcdFx0dG9wOiA1MCU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bWF0LWljb24ge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0fVxuXG5cdFx0LnNsaWNlcyB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogMDtcblx0XHRcdGxlZnQ6IDA7XG5cblx0XHRcdGltZyB7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDJweDtcblx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6945:
/*!******************************************************************************************!*\
  !*** ./apps/frontend/src/app/shared/components/confirm-popup/confirm-popup.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPopupComponent": () => (/* binding */ ConfirmPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 6053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7661);




class ConfirmPopupComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
}
ConfirmPopupComponent.ɵfac = function ConfirmPopupComponent_Factory(t) { return new (t || ConfirmPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ConfirmPopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmPopupComponent, selectors: [["cake-confirm-popup"]], decls: 11, vars: 1, consts: [[1, "close", "pointer", 3, "click"], ["svgIcon", "close-icon"], [1, "container"], ["loading", "lazy", "src", "assets/imgs/Hugging face.png", "alt", ""], [1, "buttons"], [1, "button", "tertiary", 3, "click"], [1, "button", "primary", 3, "click"]], template: function ConfirmPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmPopupComponent_Template_div_click_0_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmPopupComponent_Template_button_click_7_listener() { return ctx.dialogRef.close(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmPopupComponent_Template_button_click_9_listener() { return ctx.dialogRef.close(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.text);
    } }, dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon], styles: [".close[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 12.5px;\n  top: 7vh;\n}\n@media (max-width: 1023px) {\n  .close[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--close-icon-color);\n}\n.container[_ngcontent-%COMP%] {\n  width: 492px;\n  height: 158px;\n  position: relative;\n  text-align: center;\n}\n@media (max-width: 800px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  object-fit: contain;\n  position: absolute;\n  top: -175px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n@media (max-width: 800px) {\n  .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  font-family: \"Gilroy-400\";\n  font-size: 38px;\n  color: var(--color-fonts-2);\n  margin-bottom: 32px;\n}\n@media (max-width: 800px) {\n  .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-family: \"Gilroy-400\";\n    font-size: 32px;\n    line-height: 51px;\n    width: 90%;\n    margin: 49% auto 40px;\n  }\n}\n.container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media (max-width: 800px) {\n  .container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n}\n.container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 210px;\n}\n@media (max-width: 800px) {\n  .container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 0 auto 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtBQUNGO0FBQ0U7RUFORjtJQU9JLGNBQUE7RUFFRjtBQUNGO0FBQUU7RUFDRSw2QkFBQTtBQUVKO0FBQ0E7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFRDtBQUFDO0VBTkQ7SUFPRSxXQUFBO0VBR0E7QUFDRjtBQUNDO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQUNGO0FBQ0U7RUFURDtJQVVFLGFBQUE7RUFFRDtBQUNGO0FBQ0M7RUFDQyxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBUEQ7SUFRRSx5QkFBQTtJQUNBLGVBQUE7SUFDRyxpQkFBQTtJQUNBLFVBQUE7SUFDQSxxQkFBQTtFQUVKO0FBQ0Y7QUFDQztFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFORDtJQU9FLDhCQUFBO0VBRUQ7QUFDRjtBQUFFO0VBQ0MsWUFBQTtBQUVIO0FBQUc7RUFIRDtJQUlFLFVBQUE7SUFDQSxtQkFBQTtFQUdGO0FBQ0YiLCJmaWxlIjoiY29uZmlybS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEyLjVweDtcbiAgdG9wOiA3dmg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgbWF0LWljb24ge1xuICAgIGZpbGw6IHZhcigtLWNsb3NlLWljb24tY29sb3IpO1xuICB9XG59XG4uY29udGFpbmVyIHtcblx0d2lkdGg6IDQ5MnB4O1xuXHRoZWlnaHQ6IDE1OHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXG5cblxuXHRpbWcge1xuXHRcdHdpZHRoOiAxNTBweDtcblx0XHRoZWlnaHQ6IDE1MHB4O1xuXHRcdG9iamVjdC1maXQ6IGNvbnRhaW47XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogLTE3NXB4O1xuXHRcdGxlZnQ6IDUwJTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cblx0XHRAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcblx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0fVxuXHR9XG5cblx0aDEge1xuXHRcdG1hcmdpbi10b3A6IDQwcHg7XG5cdFx0Zm9udC1mYW1pbHk6IFwiR2lscm95LTQwMFwiO1xuXHRcdGZvbnQtc2l6ZTogMzhweDtcblx0XHRjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG5cdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuXHRcdFx0Zm9udC1mYW1pbHk6IFwiR2lscm95LTQwMFwiO1xuXHRcdFx0Zm9udC1zaXplOiAzMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDUxcHg7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbWFyZ2luOiA0OSUgYXV0byA0MHB4O1xuXHRcdH1cblx0fVxuXG5cdC5idXR0b25zIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdFx0fVxuXG5cdFx0YnV0dG9uIHtcblx0XHRcdHdpZHRoOiAyMTBweDtcblxuXHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG5cdFx0XHRcdHdpZHRoOiA5MCU7XG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvIDEwcHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0= */"] });


/***/ }),

/***/ 708:
/*!************************************************************************************************************!*\
  !*** ./apps/frontend/src/app/shared/components/congratulations-screen/congratulations-screen.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CongratulationsScreenComponent": () => (/* binding */ CongratulationsScreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6873);
/* harmony import */ var _download_plugin_download_plugin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../download-plugin/download-plugin.component */ 7507);




function CongratulationsScreenComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "cake-download-plugin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CongratulationsScreenComponent {
    constructor() {
        this.router = '/';
    }
}
CongratulationsScreenComponent.ɵfac = function CongratulationsScreenComponent_Factory(t) { return new (t || CongratulationsScreenComponent)(); };
CongratulationsScreenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CongratulationsScreenComponent, selectors: [["cake-congratulations-screen"]], inputs: { title: "title", titleImg: "titleImg", mark: "mark", text: "text", isNeedPlugin: "isNeedPlugin", router: "router", btnText: "btnText" }, decls: 15, vars: 7, consts: [[1, "flex-block"], [1, "title"], ["loading", "lazy", 3, "src"], [1, "check-mark-block"], ["loading", "lazy", "alt", "", 3, "src"], [1, "text-block"], ["class", "plugin-block", 4, "ngIf"], [1, "have-account-block"], [1, "button", "primary", 3, "routerLink"], [1, "plugin-block"]], template: function CongratulationsScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CongratulationsScreenComponent_div_9_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u00A9 2022 Cak3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.titleImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.mark, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isNeedPlugin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.router);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.btnText);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _download_plugin_download_plugin_component__WEBPACK_IMPORTED_MODULE_0__.DownloadPluginComponent], styles: [".flex-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 100vh;\n  margin: auto;\n}\n.flex-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 785px;\n  background-image: url('confetti.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n@media (max-width: 990px) {\n  .flex-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.flex-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding: 50px 0;\n  font-family: \"Santhony\";\n  font-weight: 100;\n  font-size: 56px;\n  background-color: var(--color-gradient-left-3);\n  background-image: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n@media (max-width: 425px) {\n  .flex-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n@media (max-width: 375px) {\n  .flex-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n.flex-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 50px 0;\n  width: 59px;\n}\n.flex-block[_ngcontent-%COMP%]   .check-mark-block[_ngcontent-%COMP%] {\n  width: 132px;\n}\n.flex-block[_ngcontent-%COMP%]   .check-mark-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.flex-block[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%] {\n  width: 424px;\n  font-family: \"Gilroy-500\";\n  font-size: 30px;\n  color: var(--color-fonts-2);\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n  text-align: center;\n}\n@media (max-width: 425px) {\n  .flex-block[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%] {\n    font-size: 20px;\n    width: 90%;\n  }\n}\n.flex-block[_ngcontent-%COMP%]   .plugin-block[_ngcontent-%COMP%] {\n  margin-left: 64px;\n  margin-right: 64px;\n  width: calc(100% - 64px - 64px);\n}\n.flex-block[_ngcontent-%COMP%]   .have-account-block[_ngcontent-%COMP%] {\n  width: 202px;\n}\n.flex-block[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 16px;\n  color: var(--color-fonts-2);\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmdyYXR1bGF0aW9ucy1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFESjtBQUlJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUFGUjtBQUlRO0VBVko7SUFXUSxXQUFBO0VBRFY7QUFDRjtBQUdRO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VDZ0NWLDhDRC9CK0Q7RUNnQy9ELHFIQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FEaENGO0FBRFk7RUFQSjtJQVFRLGVBQUE7RUFJZDtBQUNGO0FBSFk7RUFWSjtJQVdRLGVBQUE7RUFNZDtBQUNGO0FBSFE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUtaO0FBREk7RUFDSSxZQUFBO0FBR1I7QUFEUTtFQUNJLFdBQUE7QUFHWjtBQUNJO0VBQ0ksWUFBQTtFQ29ETix5QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFRGxETSxrQkFBQTtBQUNSO0FBTFE7RUFKSjtJQUtRLGVBQUE7SUFDQSxVQUFBO0VBUVY7QUFDRjtBQUpJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBTVI7QUFISTtFQUNJLFlBQUE7QUFLUjtBQUZJO0VDdUJGLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEbEJGIiwiZmlsZSI6ImNvbmdyYXR1bGF0aW9ucy1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9taXhpbnMnO1xuXG4uZmxleC1ibG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG5cbiAgICAudGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDc4NXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2NvbmZldHRpLnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1NhbnRob255JztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDU2cHg7XG4gICAgICAgICAgICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dCh2YXIoLS1kZWctZ3JhZGllbnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTMpKTtcblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDA7XG4gICAgICAgICAgICB3aWR0aDogNTlweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuY2hlY2stbWFyay1ibG9jayB7XG4gICAgICAgIHdpZHRoOiAxMzJweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGV4dC1ibG9jayB7XG4gICAgICAgIHdpZHRoOiA0MjRweDtcbiAgICAgICAgQGluY2x1ZGUgR2lscm95LTUwMC0zMC1mb250cy0yO1xuICAgICAgICBcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5wbHVnaW4tYmxvY2sge1xuICAgICAgICBtYXJnaW4tbGVmdDogNjRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2NHB4O1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjRweCAtIDY0cHgpO1xuICAgIH1cblxuICAgIC5oYXZlLWFjY291bnQtYmxvY2sge1xuICAgICAgICB3aWR0aDogMjAycHg7XG4gICAgfVxuXG4gICAgZm9vdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgR2lscm95LTQwMC0xNi1mb250cy0yKCk7XG4gICAgICB9XG59IiwiQG1peGluIGJ0bi1ob3ZlcigkdGV4dENvbG9yLCAkYmcsICRib3JkZXJDb2xvcikge1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHRleHRDb2xvcjtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgfVxufVxuXG5AbWl4aW4gYnRuLWRpc2FibGVkKCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gICY6ZGlzYWJsZWQge1xuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG4gIH1cbn1cblxuQG1peGluIGJ0bi1kZWZhdWx0KCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gIGNvbG9yOiAkdGV4dENvbG9yO1xuICBiYWNrZ3JvdW5kOiAkYmc7XG4gIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZWFyLWJnKCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG59XG5cbkBtaXhpbiBib3JkZXItZ3JhZGllbnQtbGluZWFyKCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJvcmRlci1pbWFnZTogIGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItYm9yZGVyKFxuICAkZGVnLFxuICAkbGVmdENvbG9yLFxuICAkcmlnaHRDb2xvcixcbiAgJGJvcmRlcldpZHRoLFxuICAkYm9yZGVyUmFkaXVzXG4pIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XG4gICAgcGFkZGluZzogJGJvcmRlcldpZHRoO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG4gICAgLXdlYmtpdC1tYXNrOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiAwIDApIGNvbnRlbnQtYm94LFxuICAgICAgLyogWzFdICovIGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCk7IC8qIFsyXSAqL1xuICAgIC13ZWJraXQtbWFzay1jb21wb3NpdGU6IHhvcjsgLyogWzNdINC00LvRjyDQv9GW0LTRgtGA0LjQvNC60Lgg0LHRgNCw0YPQt9C10YDRltCyICovXG4gICAgbWFzay1jb21wb3NpdGU6IGV4Y2x1ZGU7IC8qIFszXSAqL1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItdGV4dCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGVmdENvbG9yO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItZXZlbnRzLWxpdmUoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxlZnRDb2xvcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZXItc3Bhbi10ZXh0KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKXtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIHZhcigtLWRlZy1ncmFkaWVudC0zKSxcbiAgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0zKSxcbiAgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMykpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5AbWl4aW4gZXJyb3ItbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95LTUwMCc7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dChcbiAgICB2YXIoLS1kZWctZ3JhZGllbnQtNCksXG4gICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC00KSxcbiAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC00KVxuICApO1xufVxuXG5AbWl4aW4gR2lscm95LTQwMC0xNi1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNDAwJztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AbWl4aW4gR2lscm95LTUwMC0zMC1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNTAwJztcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AbWl4aW4gR2lscm95LTYwMC0xNC1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNjAwJztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuIl19 */"] });


/***/ }),

/***/ 1851:
/*!******************************************************************************************!*\
  !*** ./apps/frontend/src/app/shared/components/delete-wallet/delete-wallet.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteWalletComponent": () => (/* binding */ DeleteWalletComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 6053);
/* harmony import */ var _core_types_Themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/types/Themes */ 6251);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/theme.service */ 1266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7661);







class DeleteWalletComponent {
    constructor(dialogRef, data, themeService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.themeService = themeService;
    }
    get closeCircle() {
        return this.themeService.active === _core_types_Themes__WEBPACK_IMPORTED_MODULE_0__.LightTheme ? "close-light" : "close-dark";
    }
}
DeleteWalletComponent.ɵfac = function DeleteWalletComponent_Factory(t) { return new (t || DeleteWalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_1__.ThemeService)); };
DeleteWalletComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DeleteWalletComponent, selectors: [["cake-delete-wallet"]], decls: 19, vars: 2, consts: [[1, "container"], [1, "close", "pointer", 3, "click"], [3, "svgIcon"], [1, "content"], [1, "warning-img"], ["src", "assets/imgs/Exclamation mark button.png", "alt", ""], [1, "buttons"], [1, "confirm-btn"], [1, "button", "error", 3, "click"], [1, "cancel-btn"], [1, "button", "tertiary", 3, "click"]], template: function DeleteWalletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DeleteWalletComponent_Template_div_click_1_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Do you want to delete MetaMask? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "If\u00A0you change your mind, you can add it\u00A0back again");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6)(13, "div", 7)(14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DeleteWalletComponent_Template_button_click_14_listener() { return ctx.dialogRef.close(ctx.data.address); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9)(17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DeleteWalletComponent_Template_button_click_17_listener() { return ctx.dialogRef.close(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", ctx.closeCircle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.address);
    } }, dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon], styles: ["@charset \"UTF-8\";\n@font-face {\n  font-family: \"Gilroy-900\";\n  src: local(\"Gilroy-900\"), url('Gilroy-ExtraBold.otf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Gilroy-400\";\n  src: local(\"Gilroy-400\"), url('Gilroy-Light.otf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Gilroy-500\";\n  src: local(\"Gilroy-500\"), url('Gilroy-Medium.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Gilroy-600\";\n  src: local(\"Gilroy-600\"), url('Gilroy-Semibold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Santhony\";\n  src: local(\"Santhony\"), url('santhony.regular.otf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Gilroy-Regular\";\n  src: local(\"Gilroy-Regular\"), url('Gilroy-Regular.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n.button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  border-radius: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Gilroy-500\";\n  font-size: 16px;\n  transition: 0.5s ease-in-out;\n}\n.button[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n  font-size: 28px;\n  margin-right: 5px;\n  font-family: \"Gilroy-400\";\n}\n.button[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n.button.primary[_ngcontent-%COMP%] {\n  color: var(--color-fonts-3);\n  background: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  border: 2px solid linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  border-image-slice: 1;\n}\n.button.primary[_ngcontent-%COMP%]:hover {\n  color: var(--color-fonts-3);\n  background: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  text-decoration: none;\n  border: 2px solid linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n}\n.button.primary[_ngcontent-%COMP%]:disabled {\n  color: var(--color-fonts-3);\n  background: linear-gradient(var(--deg-gradient-disabled), var(--color-gradient-left-disabled), var(--color-gradient-right-disabled));\n  border: 2px solid linear-gradient(var(--deg-gradient-disabled), var(--color-gradient-left-disabled), var(--color-gradient-right-disabled));\n  cursor: not-allowed;\n  border-image-slice: 1;\n}\n.button.secondary[_ngcontent-%COMP%] {\n  background: var(--color-transparent);\n  border: none;\n  position: relative;\n  background-color: var(--color-gradient-left-3);\n  background-image: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.secondary[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 16px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.button.secondary[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n  text-decoration: none;\n  position: relative;\n  background-color: var(--color-gradient-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.secondary[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 16px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.button.secondary.unfollow[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n  text-decoration: none;\n  position: relative;\n  background-color: var(--color-gradient-left-7);\n  background-image: linear-gradient(var(--deg-gradient-7), var(--color-gradient-left-7), var(--color-gradient-right-7));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.secondary.unfollow[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 16px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-7), var(--color-gradient-left-7), var(--color-gradient-right-7));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.button.pink[_ngcontent-%COMP%] {\n  color: #fff;\n  background: linear-gradient(var(--deg-gradient-live-events), var(--color-gradient-left-live-events), var(--color-gradient-right-live-events));\n  border: 2px solid linear-gradient(var(--deg-gradient-live-events), var(--color-gradient-left-live-events), var(--color-gradient-right-live-events));\n  border-image-slice: 1;\n}\n.button.secondary-pink[_ngcontent-%COMP%] {\n  background: var(--color-transparent);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  color: #977E89;\n}\n.button.error[_ngcontent-%COMP%] {\n  background: var(--color-transparent);\n  border: none;\n  position: relative;\n  background-color: var(--color-gradient-left-4);\n  background-image: linear-gradient(var(--deg-gradient-4), var(--color-gradient-left-4), var(--color-gradient-right-4));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.error[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 16px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-4), var(--color-gradient-left-4), var(--color-gradient-right-4));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.button.error[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n  text-decoration: none;\n  position: relative;\n  background-color: var(--color-gradient-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.error[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 16px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.button.tertiary[_ngcontent-%COMP%] {\n  border: none;\n  background: -webkit-linear-gradient(var(--color-transparent));\n  background-color: var(--color-gradient-left-3);\n  background-image: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.tertiary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  background: -webkit-linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.tertiary[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n  text-decoration: none;\n  background-color: var(--color-gradient-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.tertiary[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: 0.5s ease-in-out;\n  text-decoration: none;\n  background-color: var(--color-gradient-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button.tertiary[_ngcontent-%COMP%]:disabled {\n  -webkit-text-fill-color: var(--color-fonts-list-head);\n  -moz-text-fill-color: var(--color-fonts-list-head);\n  cursor: not-allowed;\n}\n\n\n.toast-center-center[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.toast-top-center[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-center[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-full-width[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-full-width[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-left[_ngcontent-%COMP%] {\n  top: 12px;\n  left: 12px;\n}\n.toast-top-right[_ngcontent-%COMP%] {\n  top: 12px;\n  right: 12px;\n}\n.toast-bottom-right[_ngcontent-%COMP%] {\n  right: 12px;\n  bottom: 12px;\n}\n.toast-bottom-left[_ngcontent-%COMP%] {\n  bottom: 12px;\n  left: 12px;\n}\n\n.toast-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.toast-message[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n.toast-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .toast-message[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n.toast-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n.toast-close-button[_ngcontent-%COMP%] {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  \n}\n.toast-close-button[_ngcontent-%COMP%]:hover, .toast-close-button[_ngcontent-%COMP%]:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n\nbutton.toast-close-button[_ngcontent-%COMP%] {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.toast-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n.toast-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.toast-container[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  border-radius: 16px;\n}\n.toast-container[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.toast-info[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOS4wNDMgOCA4IDExOS4wODMgOCAyNTZjMCAxMzYuOTk3IDExMS4wNDMgMjQ4IDI0OCAyNDhzMjQ4LTExMS4wMDMgMjQ4LTI0OEM1MDQgMTE5LjA4MyAzOTIuOTU3IDggMjU2IDh6bTAgMTEwYzIzLjE5NiAwIDQyIDE4LjgwNCA0MiA0MnMtMTguODA0IDQyLTQyIDQyLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDJ6bTU2IDI1NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC04OGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgxMnYtNjRoLTEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDY0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MTAwaDEyYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MjR6Jy8+PC9zdmc+\");\n}\n\n.toast-error[_ngcontent-%COMP%] {\n  background-image: url('toastr-warning-icon.svg');\n}\n\n.toast-success[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicvPjwvc3ZnPg==\");\n}\n\n.toast-warning[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJyB3aWR0aD0nNTc2JyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTU2OS41MTcgNDQwLjAxM0M1ODcuOTc1IDQ3Mi4wMDcgNTY0LjgwNiA1MTIgNTI3Ljk0IDUxMkg0OC4wNTRjLTM2LjkzNyAwLTU5Ljk5OS00MC4wNTUtNDEuNTc3LTcxLjk4N0wyNDYuNDIzIDIzLjk4NWMxOC40NjctMzIuMDA5IDY0LjcyLTMxLjk1MSA4My4xNTQgMGwyMzkuOTQgNDE2LjAyOHpNMjg4IDM1NGMtMjUuNDA1IDAtNDYgMjAuNTk1LTQ2IDQ2czIwLjU5NSA0NiA0NiA0NiA0Ni0yMC41OTUgNDYtNDYtMjAuNTk1LTQ2LTQ2LTQ2em0tNDMuNjczLTE2NS4zNDZsNy40MTggMTM2Yy4zNDcgNi4zNjQgNS42MDkgMTEuMzQ2IDExLjk4MiAxMS4zNDZoNDguNTQ2YzYuMzczIDAgMTEuNjM1LTQuOTgyIDExLjk4Mi0xMS4zNDZsNy40MTgtMTM2Yy4zNzUtNi44NzQtNS4wOTgtMTIuNjU0LTExLjk4Mi0xMi42NTRoLTYzLjM4M2MtNi44ODQgMC0xMi4zNTYgNS43OC0xMS45ODEgMTIuNjU0eicvPjwvc3ZnPg==\");\n}\n.toast-container.toast-top-center[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%], .toast-container.toast-bottom-center[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%] {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.toast-container.toast-top-full-width[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%], .toast-container.toast-bottom-full-width[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%] {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.ngx-toastr[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.toast-success[_ngcontent-%COMP%] {\n  background-color: #51A351;\n}\n.toast-error[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  background-color: var(--color-toastr-left);\n  border: 1px solid var(--color-toastr-right);\n  color: #EC1A1A !important;\n}\n.toast-info[_ngcontent-%COMP%] {\n  background-color: #2F96B4;\n}\n.toast-warning[_ngcontent-%COMP%] {\n  background-color: #F89406;\n}\n.toast-progress[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  opacity: 0.4;\n}\n\n@media all and (max-width: 240px) {\n  .toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%] {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container[_ngcontent-%COMP%]   .toast-close-button[_ngcontent-%COMP%] {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%] {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container[_ngcontent-%COMP%]   .toast-close-button[_ngcontent-%COMP%] {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%] {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\nmat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nmat-icon.tertiary[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   defs[_ngcontent-%COMP%]   linearGradient[_ngcontent-%COMP%]   stop[_ngcontent-%COMP%]:first-of-type {\n  stop-color: var(--color-gradient-left-icon-hover);\n}\nmat-icon.tertiary[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   defs[_ngcontent-%COMP%]   linearGradient[_ngcontent-%COMP%]   stop[_ngcontent-%COMP%]:last-of-type {\n  stop-color: var(--color-gradient-right-icon-hover);\n}\nmat-icon.tertiary[_ngcontent-%COMP%]     svg defs linearGradient stop:first-of-type {\n  stop-color: var(--color-gradient-left-icon);\n}\nmat-icon.tertiary[_ngcontent-%COMP%]     svg defs linearGradient stop:last-of-type {\n  stop-color: var(--color-gradient-right-icon);\n}\nmat-icon.primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: var(--color-tooltip-text);\n}\nmat-icon.header-bg[_ngcontent-%COMP%]     svg defs linearGradient stop:first-of-type {\n  stop-color: var(--header-color-gradient-left-1);\n}\nmat-icon.header-bg[_ngcontent-%COMP%]     svg defs linearGradient stop:last-of-type {\n  stop-color: var(--header-color-gradient-right-1);\n}\n.animation-hidden-skeleton[_ngcontent-%COMP%] {\n  animation: hide-skeleton 0.5s ease-in-out;\n}\n@keyframes hide-skeleton {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  height: 411px;\n  width: 454px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  text-align: center;\n}\n@media (max-width: 1023px) {\n  .container[_ngcontent-%COMP%] {\n    padding-top: 61px;\n    width: 100%;\n    height: 80vh;\n    justify-content: space-between;\n  }\n}\n.container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n@media (max-width: 1023px) {\n  .container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .warning-img[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: auto;\n  transform: translate(-50%, -150px);\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  left: 50%;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .warning-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 170px;\n}\n@media (max-width: 1023px) {\n  .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .warning-img[_ngcontent-%COMP%] {\n    position: initial;\n    transform: none;\n    margin: 0;\n  }\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 54px;\n  min-width: 336px;\n  font-size: 32px;\n  font-family: \"Gilroy-400\";\n  color: var(--color-fonts-2);\n  line-height: 51px;\n  margin-bottom: 0;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  font-family: \"Gilroy-500\";\n  background-color: var(--color-gradient-left-1);\n  background-image: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  width: 208px;\n  font-size: 16px;\n  line-height: 22px;\n  font-family: \"Gilroy-400\";\n  color: var(--color-fonts-2);\n}\n.container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS13YWxsZXQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9fZm9udHMuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29tcG9uZW50cy9idXR0b24uc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL19taXhpbnMuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29tcG9uZW50cy90b2FzdGVyLnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2NvbXBvbmVudHMvaWNvbi5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwvX2FuaW1hdGlvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSx5QkFBQTtFQUNBLHdFQUFBO0VBR0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEQUY7QUNHQTtFQUNFLHlCQUFBO0VBQ0Esb0VBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURERjtBQ0dBO0VBQ0UseUJBQUE7RUFDQSxxRUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRERGO0FDSUE7RUFDRSx5QkFBQTtFQUNBLHVFQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FERkY7QUNLQTtFQUNFLHVCQUFBO0VBQ0Esc0VBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURIRjtBQ01BO0VBQ0UsNkJBQUE7RUFDQSwwRUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBREpGO0FFeENBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUYwQ0Q7QUV4Q0M7RUFDQyx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FGMENGO0FFdkNDO0VBQ0MsYUFBQTtBRnlDRjtBRXRDQztFQ0ZDLDJCRElDO0VDSEQsK0dESUM7RUNIRCxxSEFBQTtFQUNBLHFCQUFBO0FIMkNGO0FHbkVFO0VBQ0UsMkJENkJEO0VDNUJDLCtHRDZCRDtFQzVCQyxxQkFBQTtFQUNBLHFIQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FIcUVKO0FHaEVFO0VBQ0UsMkJEdUJEO0VDdEJDLG9JRHVCRDtFQ3RCQywwSUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUhrRUo7QUV6Q0M7RUFDQyxvQ0FBQTtFQUNBLFlBQUE7RUNEQSxrQkFBQTtFQWtCQSw4Q0RmcUQ7RUNnQnJELHFIQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FINEJGO0FHakRFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxtQkRKdUg7RUNLdkgsWURMa0g7RUNNbEgsK0dBQUE7RUFDQSw4RUFBQSxFQUN1QyxRQUFBO0VBQ3ZDLDJCQUFBLEVBQUEsZ0NBQUE7RUFDQSx1QkFBQSxFQUFBLFFBQUE7RUFDQSxvQkFBQTtBSGtESjtBRTFERTtFQUNDLGVBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VDUkQsa0JBQUE7RUFrQkEsOENEUnNEO0VDU3RELHFIQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FIb0RGO0FHekVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxtQkRHd0g7RUNGeEgsWURFbUg7RUNEbkgsK0dBQUE7RUFDQSw4RUFBQSxFQUN1QyxRQUFBO0VBQ3ZDLDJCQUFBLEVBQUEsZ0NBQUE7RUFDQSx1QkFBQSxFQUFBLFFBQUE7RUFDQSxvQkFBQTtBSDBFSjtBRTFFRTtFQUNDLGVBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VDaEJELGtCQUFBO0VBa0JBLDhDQUFBO0VBQ0EscUhBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUg0RUY7QUdqR0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLG1CRFd3SDtFQ1Z4SCxZRFVtSDtFQ1RuSCwrR0FBQTtFQUNBLDhFQUFBLEVBQ3VDLFFBQUE7RUFDdkMsMkJBQUEsRUFBQSxnQ0FBQTtFQUNBLHVCQUFBLEVBQUEsUUFBQTtFQUNBLG9CQUFBO0FIa0dKO0FFekZFO0VDM0NBLFdENkNDO0VDNUNELDZJRDZDQztFQzVDRCxtSkFBQTtFQUNBLHFCQUFBO0FIdUlGO0FFdkZFO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNDLGNBQUE7QUZ5Rkg7QUV0RkM7RUFDQyxvQ0FBQTtFQUNBLFlBQUE7RUN0Q0Esa0JBQUE7RUFrQkEsOENEc0JxRDtFQ3JCckQscUhBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUg4R0Y7QUduSUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLG1CRGlDdUg7RUNoQ3ZILFlEZ0NrSDtFQy9CbEgsK0dBQUE7RUFDQSw4RUFBQSxFQUN1QyxRQUFBO0VBQ3ZDLDJCQUFBLEVBQUEsZ0NBQUE7RUFDQSx1QkFBQSxFQUFBLFFBQUE7RUFDQSxvQkFBQTtBSG9JSjtBRXZHRTtFQUNDLGVBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VDN0NELGtCQUFBO0VBa0JBLDhDRDZCc0Q7RUM1QnRELHFIQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FIc0lGO0FHM0pFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxtQkR3Q3dIO0VDdkN4SCxZRHVDbUg7RUN0Q25ILCtHQUFBO0VBQ0EsOEVBQUEsRUFDdUMsUUFBQTtFQUN2QywyQkFBQSxFQUFBLGdDQUFBO0VBQ0EsdUJBQUEsRUFBQSxRQUFBO0VBQ0Esb0JBQUE7QUg0Sko7QUV0SEM7RUFDQyxZQUFBO0VBQ0EsNkRBQUE7RUNuQ0EsOENEb0NxRDtFQ25DckQscUhBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUg0SkY7QUUxSEU7RUFDQyxnQkFBQTtFQ3ZCRCx1SEFBQTtFQUdBLDZCQUFBO0VBQ0Esb0NBQUE7QUhrSkY7QUUzSEU7RUFDQyxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQzlDRCw4Q0QrQ3NEO0VDOUN0RCxxSEFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBSDRLRjtBRS9IRztFQUNDLGVBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VDcERGLDhDRHFEdUQ7RUNwRHZELHFIQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FIc0xGO0FFaklFO0VBQ0MscURBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0FGbUlIO0FJNVBBLGtKQUFBO0FBRUEsYUFBQTtBQUNBO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBSjhQSjtBSTVQRTtFQUNFLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBSitQSjtBSTdQRTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBSmdRSjtBSTlQRTtFQUNFLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBSmlRSjtBSS9QRTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBSmtRSjtBSWhRRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FKbVFKO0FJalFFO0VBQ0UsU0FBQTtFQUNBLFdBQUE7QUpvUUo7QUlsUUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBSnFRSjtBSW5RRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FKc1FKO0FJblFFLGlCQUFBO0FBQ0E7RUFDRSxpQkFBQTtBSnNRSjtBSXBRRTtFQUNFLHFCQUFBO0FKdVFKO0FJclFFOztFQUVFLGNBQUE7QUp3UUo7QUl0UUU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUp5UUo7QUl2UUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FKMFFKO0FJeFFFOztFQUVFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FKMlFKO0FJelFFOzt5REFBQTtBQUdBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUo0UUo7QUkxUUU7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FKNlFKO0FJM1FFO0VBQ0Usc0JBQUE7QUo4UUo7QUk1UUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUorUUo7QUk3UUU7RUFDRSxlQUFBO0FKZ1JKO0FJOVFFLGlIQUFBO0FBQ0E7RUFDRSxtdkJBQUE7QUppUko7QUkvUUUsa0hBQUE7QUFDQTtFQUNFLGdEQUFBO0FKa1JKO0FJaFJFLDJHQUFBO0FBQ0E7RUFDRSwra0JBQUE7QUptUko7QUlqUkUsMEhBQUE7QUFDQTtFQUNFLHV6QkFBQTtBSm9SSjtBSWxSRTs7RUFFRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBSnFSSjtBSW5SRTs7RUFFRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBSnNSSjtBSXBSRTtFQUVFLG9CQUFBO0FKc1JKO0FJcFJFO0VBQ0UseUJBQUE7QUp1Uko7QUlyUkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7QUp3Uko7QUl0UkU7RUFDRSx5QkFBQTtBSnlSSjtBSXZSRTtFQUNFLHlCQUFBO0FKMFJKO0FJeFJFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFQSxZQUFBO0FKMFJKO0FJeFJFLHNCQUFBO0FBQ0E7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsV0FBQTtFSjJSSjtFSXpSRTtJQUNFLGFBQUE7SUFDQSxXQUFBO0VKMlJKO0FBQ0Y7QUl6UkU7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsV0FBQTtFSjJSSjtFSXpSRTtJQUNFLGFBQUE7SUFDQSxXQUFBO0VKMlJKO0FBQ0Y7QUl6UkU7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsV0FBQTtFSjJSSjtBQUNGO0FLMWRBO0VBQ0MsZUFBQTtBTDRkRDtBS2xkTztFQUNDLGlEQUFBO0FMb2RSO0FLbGRPO0VBQ0Msa0RBQUE7QUxvZFI7QUt4Y007RUFDQywyQ0FBQTtBTDBjUDtBS3hjTTtFQUNDLDRDQUFBO0FMMGNQO0FLaGNZO0VBQ0ksK0JBQUE7QUxrY2hCO0FLemJ3QjtFQUNJLCtDQUFBO0FMMmI1QjtBS3pid0I7RUFDSSxnREFBQTtBTDJiNUI7QU1qZkE7RUFDSSx5Q0FBQTtBTm9mSjtBTWhmQTtFQUNJO0lBQ0UsVUFBQTtFTm1mSjtFTWpmRTtJQUNFLFVBQUE7RU5tZko7QUFDRjtBQTdmQTtFQUNDLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBK2ZEO0FBN2ZDO0VBVEQ7SUFVRSxpQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ00sOEJBQUE7RUFnZ0JOO0FBQ0Y7QUE5ZkM7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQWdnQkY7QUE5ZkU7RUFORDtJQU9FLGNBQUE7RUFpZ0JEO0FBQ0Y7QUEvZkM7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFpZ0JGO0FBaGdCRTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxTQUFBO0FBa2dCSDtBQWpnQkc7RUFDQyxZQUFBO0FBbWdCSjtBQWhnQkc7RUFYRDtJQVlFLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLFNBQUE7RUFtZ0JGO0FBQ0Y7QUFoZ0JFO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ1MsaUJBQUE7RUFDQSxnQkFBQTtBQWtnQlo7QUEvZkU7RUFDQyxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFR05ELDhDSE9zRDtFR050RCxxSEFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBSHdnQkY7QUFsZ0JFO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNTLGlCQUFBO0VBQ1QseUJBQUE7RUFDQSwyQkFBQTtBQW9nQkg7QUFoZ0JDO0VBQ0MsV0FBQTtBQWtnQkY7QUEvZkM7O0VBRUMsV0FBQTtFQUNBLGdCQUFBO0FBaWdCRiIsImZpbGUiOiJkZWxldGUtd2FsbGV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG4uY29udGFpbmVyIHtcblx0aGVpZ2h0OiA0MTFweDtcblx0d2lkdGg6IDQ1NHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG5cdFx0cGFkZGluZy10b3A6IDYxcHg7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiA4MHZoO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdH1cblxuXHQuY2xvc2Uge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHRvcDogMDtcblxuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdH1cblx0fVxuXHQuY29udGVudCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHQud2FybmluZy1pbWcge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1MHB4KTtcblx0XHRcdHdpZHRoOiBmaXQtY29udGVudDtcblx0XHRcdGhlaWdodDogZml0LWNvbnRlbnQ7XG5cdFx0XHRsZWZ0OiA1MCU7XG5cdFx0XHRpbWcge1xuXHRcdFx0XHR3aWR0aDogMTcwcHg7XG5cdFx0XHR9XG5cblx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcblx0XHRcdFx0cG9zaXRpb246IGluaXRpYWw7XG5cdFx0XHRcdHRyYW5zZm9ybTogbm9uZTtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGgxIHtcblx0XHRcdG1hcmdpbi10b3A6IDU0cHg7XG5cdFx0XHRtaW4td2lkdGg6IDMzNnB4O1xuXHRcdFx0Zm9udC1zaXplOiAzMnB4O1xuXHRcdFx0Zm9udC1mYW1pbHk6IFwiR2lscm95LTQwMFwiO1xuXHRcdFx0Y29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUxcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuXHRcdH1cblxuXHRcdHAge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0Zm9udC1mYW1pbHk6IFwiR2lscm95LTUwMFwiO1xuXHRcdFx0QGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLXRleHQodmFyKC0tZGVnLWdyYWRpZW50LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0xKSk7XG5cdFx0fVxuXG5cdFx0aDMge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTJweDtcblx0XHRcdHdpZHRoOiAyMDhweDtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRcdFx0Zm9udC1mYW1pbHk6IFwiR2lscm95LTQwMFwiO1xuXHRcdFx0Y29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuXHRcdH1cblx0fVxuXG5cdC5idXR0b25zIHtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXG5cdC5jb25maXJtLWJ0bixcblx0LmNhbmNlbC1idG4ge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdH1cbn1cbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dpbHJveS05MDAnO1xuICBzcmM6IGxvY2FsKCdHaWxyb3ktOTAwJyksIHVybCguLy4uLy4uL2ZvbnRzL0dpbHJveS1FeHRyYUJvbGQub3RmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cbiAgLy8gbmVlZCBmb3IgU2FmYXJpIGNvbXBhYmlsaXR5XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNDAwJztcbiAgc3JjOiBsb2NhbCgnR2lscm95LTQwMCcpLCB1cmwoLi8uLi8uLi9mb250cy9HaWxyb3ktTGlnaHQub3RmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95LTUwMCc7XG4gIHNyYzogbG9jYWwoJ0dpbHJveS01MDAnKSwgdXJsKC4vLi4vLi4vZm9udHMvR2lscm95LU1lZGl1bS50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dpbHJveS02MDAnO1xuICBzcmM6IGxvY2FsKCdHaWxyb3ktNjAwJyksIHVybCguLy4uLy4uL2ZvbnRzL0dpbHJveS1TZW1pYm9sZC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NhbnRob255JztcbiAgc3JjOiBsb2NhbCgnU2FudGhvbnknKSwgdXJsKC4vLi4vLi4vZm9udHMvc2FudGhvbnkucmVndWxhci5vdGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dpbHJveS1SZWd1bGFyJztcbiAgc3JjOiBsb2NhbCgnR2lscm95LVJlZ3VsYXInKSwgdXJsKC4vLi4vLi4vZm9udHMvR2lscm95LVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuIiwiQGltcG9ydCBcIi4uL2dsb2JhbC9taXhpbnNcIjtcblxuLmJ1dHRvbiB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDQwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmb250LWZhbWlseTogXCJHaWxyb3ktNTAwXCI7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0dHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcblxuXHQucGx1cyB7XG5cdFx0cGFkZGluZy10b3A6IDAgIWltcG9ydGFudDsgXG5cdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdG1hcmdpbi1yaWdodDogNXB4O1xuXHRcdGZvbnQtZmFtaWx5OiBcIkdpbHJveS00MDBcIjtcblx0fVxuXG5cdCY6Zm9jdXMtdmlzaWJsZSB7XG5cdFx0b3V0bGluZTogbm9uZTtcblx0fVxuXG5cdCYucHJpbWFyeSB7XG5cdFx0QGluY2x1ZGUgYnRuLWRlZmF1bHQoXG5cdFx0XHR2YXIoLS1jb2xvci1mb250cy0zKSxcblx0XHRcdGxpbmVhci1ncmFkaWVudCh2YXIoLS1kZWctZ3JhZGllbnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTMpKSxcblx0XHRcdGxpbmVhci1ncmFkaWVudCh2YXIoLS1kZWctZ3JhZGllbnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTMpKVxuXHRcdCk7XG5cdFx0QGluY2x1ZGUgYnRuLWhvdmVyKFxuXHRcdFx0dmFyKC0tY29sb3ItZm9udHMtMyksXG5cdFx0XHRsaW5lYXItZ3JhZGllbnQodmFyKC0tZGVnLWdyYWRpZW50LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0xKSksXG5cdFx0XHRsaW5lYXItZ3JhZGllbnQodmFyKC0tZGVnLWdyYWRpZW50LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0xKSlcblx0XHQpO1xuXHRcdEBpbmNsdWRlIGJ0bi1kaXNhYmxlZChcblx0XHRcdHZhcigtLWNvbG9yLWZvbnRzLTMpLFxuXHRcdFx0bGluZWFyLWdyYWRpZW50KHZhcigtLWRlZy1ncmFkaWVudC1kaXNhYmxlZCksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtZGlzYWJsZWQpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC1kaXNhYmxlZCkpLFxuXHRcdFx0bGluZWFyLWdyYWRpZW50KHZhcigtLWRlZy1ncmFkaWVudC1kaXNhYmxlZCksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtZGlzYWJsZWQpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC1kaXNhYmxlZCkpXG5cdFx0KTtcblx0fVxuXG5cdCYuc2Vjb25kYXJ5IHtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci10cmFuc3BhcmVudCk7XG5cdFx0Ym9yZGVyOiBub25lO1xuXHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1ib3JkZXIodmFyKC0tZGVnLWdyYWRpZW50LTMpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTMpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0zKSwgMnB4LCAxNnB4KTtcblx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dCh2YXIoLS1kZWctZ3JhZGllbnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTMpKTtcblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0dHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1ib3JkZXIodmFyKC0tZGVnLWdyYWRpZW50LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0xKSwgMnB4LCAxNnB4KTtcblx0XHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KHZhcigtLWRlZy1ncmFkaWVudC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMSkpO1xuXHRcdH1cblxuXHRcdCYudW5mb2xsb3c6aG92ZXIge1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0dHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1ib3JkZXIodmFyKC0tZGVnLWdyYWRpZW50LTcpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTcpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC03KSwgMnB4LCAxNnB4KTtcblx0XHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KHZhcigtLWRlZy1ncmFkaWVudC03KSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC03KSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtNykpO1xuXHRcdH1cblx0fVxuXG4gICYucGluayB7XG5cdFx0QGluY2x1ZGUgYnRuLWRlZmF1bHQoXG5cdFx0XHQjZmZmLFxuXHRcdFx0bGluZWFyLWdyYWRpZW50KHZhcigtLWRlZy1ncmFkaWVudC1saXZlLWV2ZW50cyksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtbGl2ZS1ldmVudHMpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC1saXZlLWV2ZW50cykpLFxuXHRcdFx0bGluZWFyLWdyYWRpZW50KHZhcigtLWRlZy1ncmFkaWVudC1saXZlLWV2ZW50cyksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtbGl2ZS1ldmVudHMpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC1saXZlLWV2ZW50cykpXG5cdFx0KTtcblx0fVxuXG4gICYuc2Vjb25kYXJ5LXBpbmsge1xuXHRcdGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXRyYW5zcGFyZW50KTtcblx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdCAgY29sb3I6ICM5NzdFODk7XG5cdH1cblxuXHQmLmVycm9yIHtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci10cmFuc3BhcmVudCk7XG5cdFx0Ym9yZGVyOiBub25lO1xuXHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1ib3JkZXIodmFyKC0tZGVnLWdyYWRpZW50LTQpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTQpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC00KSwgMnB4LCAxNnB4KTtcblx0XHRAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dCh2YXIoLS1kZWctZ3JhZGllbnQtNCksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtNCksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTQpKTtcblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0dHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1ib3JkZXIodmFyKC0tZGVnLWdyYWRpZW50LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTEpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0xKSwgMnB4LCAxNnB4KTtcblx0XHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KHZhcigtLWRlZy1ncmFkaWVudC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMSkpO1xuXHRcdH1cblx0fVxuXG5cdCYudGVydGlhcnkge1xuXHRcdGJvcmRlcjogbm9uZTtcblx0XHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh2YXIoLS1jb2xvci10cmFuc3BhcmVudCkpO1xuXHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KHZhcigtLWRlZy1ncmFkaWVudC0zKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0zKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMykpO1xuXG5cdFx0c3BhbiB7XG5cdFx0XHRwYWRkaW5nLXRvcDogM3B4O1xuXHRcdFx0QGluY2x1ZGUgZ3JhZGllbnQtbGluZXItc3Bhbi10ZXh0KHZhcigtLWRlZy1ncmFkaWVudC0zKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0zKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMykpO1xuXHRcdH1cblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0dHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KHZhcigtLWRlZy1ncmFkaWVudC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMSkpO1xuXG5cdFx0XHRzcGFuIHtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KHZhcigtLWRlZy1ncmFkaWVudC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCY6ZGlzYWJsZWQge1xuXHRcdFx0LXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLWxpc3QtaGVhZCk7XG5cdFx0XHQtbW96LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tY29sb3ItZm9udHMtbGlzdC1oZWFkKTtcblx0XHRcdGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cdFx0fVxuXHR9XG59XG4iLCJAbWl4aW4gYnRuLWhvdmVyKCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbkBtaXhpbiBidG4tZGlzYWJsZWQoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgJjpkaXNhYmxlZCB7XG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gICAgYmFja2dyb3VuZDogJGJnO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcbiAgfVxufVxuXG5AbWl4aW4gYnRuLWRlZmF1bHQoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gIGJhY2tncm91bmQ6ICRiZztcbiAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItYmcoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbn1cblxuQG1peGluIGJvcmRlci1ncmFkaWVudC1saW5lYXIoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYm9yZGVyLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci1ib3JkZXIoXG4gICRkZWcsXG4gICRsZWZ0Q29sb3IsXG4gICRyaWdodENvbG9yLFxuICAkYm9yZGVyV2lkdGgsXG4gICRib3JkZXJSYWRpdXNcbikge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcbiAgICBwYWRkaW5nOiAkYm9yZGVyV2lkdGg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbiAgICAtd2Via2l0LW1hc2s6IGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCkgY29udGVudC1ib3gsXG4gICAgICAvKiBbMV0gKi8gbGluZWFyLWdyYWRpZW50KCNmZmYgMCAwKTsgLyogWzJdICovXG4gICAgLXdlYmtpdC1tYXNrLWNvbXBvc2l0ZTogeG9yOyAvKiBbM10g0LTQu9GPINC/0ZbQtNGC0YDQuNC80LrQuCDQsdGA0LDRg9C30LXRgNGW0LIgKi9cbiAgICBtYXNrLWNvbXBvc2l0ZTogZXhjbHVkZTsgLyogWzNdICovXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci10ZXh0KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsZWZ0Q29sb3I7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci1ldmVudHMtbGl2ZSgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGVmdENvbG9yO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lci1zcGFuLXRleHQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3Ipe1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCggdmFyKC0tZGVnLWdyYWRpZW50LTMpLFxuICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTMpLFxuICB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0zKSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtaXhpbiBlcnJvci1tZXNzYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNTAwJztcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KFxuICAgIHZhcigtLWRlZy1ncmFkaWVudC00KSxcbiAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTQpLFxuICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTQpXG4gICk7XG59XG5cbkBtaXhpbiBHaWxyb3ktNDAwLTE2LWZvbnRzLTIge1xuICBmb250LWZhbWlseTogJ0dpbHJveS00MDAnO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBtaXhpbiBHaWxyb3ktNTAwLTMwLWZvbnRzLTIge1xuICBmb250LWZhbWlseTogJ0dpbHJveS01MDAnO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBtaXhpbiBHaWxyb3ktNjAwLTE0LWZvbnRzLTIge1xuICBmb250LWZhbWlseTogJ0dpbHJveS02MDAnO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4iLCIvKiBiYXNlZCBvbiBhbmd1bGFyLXRvYXN0ciBjc3MgaHR0cHM6Ly9naXRodWIuY29tL0ZveGFuZHhzcy9hbmd1bGFyLXRvYXN0ci9ibG9iL2NiNTA4ZmU2ODAxZDZiMjg4ZDNhZmM1MjViYjQwZmVlMWIxMDE2NTAvZGlzdC9hbmd1bGFyLXRvYXN0ci5jc3MgKi9cblxuLyogcG9zaXRpb24gKi9cbi50b2FzdC1jZW50ZXItY2VudGVyIHtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgLnRvYXN0LXRvcC1jZW50ZXIge1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAudG9hc3QtYm90dG9tLWNlbnRlciB7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC50b2FzdC10b3AtZnVsbC13aWR0aCB7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC50b2FzdC1ib3R0b20tZnVsbC13aWR0aCB7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC50b2FzdC10b3AtbGVmdCB7XG4gICAgdG9wOiAxMnB4O1xuICAgIGxlZnQ6IDEycHg7XG4gIH1cbiAgLnRvYXN0LXRvcC1yaWdodCB7XG4gICAgdG9wOiAxMnB4O1xuICAgIHJpZ2h0OiAxMnB4O1xuICB9XG4gIC50b2FzdC1ib3R0b20tcmlnaHQge1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIGJvdHRvbTogMTJweDtcbiAgfVxuICAudG9hc3QtYm90dG9tLWxlZnQge1xuICAgIGJvdHRvbTogMTJweDtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG4gIFxuICAvKiB0b2FzdCBzdHlsZXMgKi9cbiAgLnRvYXN0LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAudG9hc3QtbWVzc2FnZSB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB9XG4gIC50b2FzdC1tZXNzYWdlIGEsXG4gIC50b2FzdC1tZXNzYWdlIGxhYmVsIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgfVxuICAudG9hc3QtbWVzc2FnZSBhOmhvdmVyIHtcbiAgICBjb2xvcjogI0NDQ0NDQztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAtMC4zZW07XG4gICAgdG9wOiAtMC4zZW07XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmZmZmO1xuICAgIC8qIG9wYWNpdHk6IDAuODsgKi9cbiAgfVxuICAudG9hc3QtY2xvc2UtYnV0dG9uOmhvdmVyLFxuICAudG9hc3QtY2xvc2UtYnV0dG9uOmZvY3VzIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICAvKkFkZGl0aW9uYWwgcHJvcGVydGllcyBmb3IgYnV0dG9uIHZlcnNpb25cbiAgIGlPUyByZXF1aXJlcyB0aGUgYnV0dG9uIGVsZW1lbnQgaW5zdGVhZCBvZiBhbiBhbmNob3IgdGFnLlxuICAgSWYgeW91IHdhbnQgdGhlIGFuY2hvciB2ZXJzaW9uLCBpdCByZXF1aXJlcyBgaHJlZj1cIiNcImAuKi9cbiAgYnV0dG9uLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICB9XG4gIC50b2FzdC1jb250YWluZXIge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gIH1cbiAgLnRvYXN0LWNvbnRhaW5lciAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMCAwIDZweDtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDNweCAzcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTVweCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgfVxuICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvaW5mby1jaXJjbGUuc3ZnICovXG4gIC50b2FzdC1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY25JSFpwWlhkQ2IzZzlKekFnTUNBMU1USWdOVEV5SnlCM2FXUjBhRDBuTlRFeUp5Qm9aV2xuYUhROUp6VXhNaWMrUEhCaGRHZ2dabWxzYkQwbmNtZGlLREkxTlN3eU5UVXNNalUxS1NjZ1pEMG5UVEkxTmlBNFF6RXhPUzR3TkRNZ09DQTRJREV4T1M0d09ETWdPQ0F5TlRaak1DQXhNell1T1RrM0lERXhNUzR3TkRNZ01qUTRJREkwT0NBeU5EaHpNalE0TFRFeE1TNHdNRE1nTWpRNExUSTBPRU0xTURRZ01URTVMakE0TXlBek9USXVPVFUzSURnZ01qVTJJRGg2YlRBZ01URXdZekl6TGpFNU5pQXdJRFF5SURFNExqZ3dOQ0EwTWlBME1uTXRNVGd1T0RBMElEUXlMVFF5SURReUxUUXlMVEU0TGpnd05DMDBNaTAwTWlBeE9DNDRNRFF0TkRJZ05ESXROREo2YlRVMklESTFOR013SURZdU5qSTNMVFV1TXpjeklERXlMVEV5SURFeWFDMDRPR010Tmk0Mk1qY2dNQzB4TWkwMUxqTTNNeTB4TWkweE1uWXRNalJqTUMwMkxqWXlOeUExTGpNM015MHhNaUF4TWkweE1tZ3hNbll0TmpSb0xURXlZeTAyTGpZeU55QXdMVEV5TFRVdU16Y3pMVEV5TFRFeWRpMHlOR013TFRZdU5qSTNJRFV1TXpjekxURXlJREV5TFRFeWFEWTBZell1TmpJM0lEQWdNVElnTlM0ek56TWdNVElnTVRKMk1UQXdhREV5WXpZdU5qSTNJREFnTVRJZ05TNHpOek1nTVRJZ01USjJNalI2Snk4K1BDOXpkbWMrXCIpO1xuICB9XG4gIC8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL3RpbWVzLWNpcmNsZS5zdmcgKi9cbiAgLnRvYXN0LWVycm9yIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2ljb25zL3RvYXN0ci13YXJuaW5nLWljb24uc3ZnJyk7XG4gIH1cbiAgLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvY2hlY2suc3ZnICovXG4gIC50b2FzdC1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY25JSFpwWlhkQ2IzZzlKekFnTUNBMU1USWdOVEV5SnlCM2FXUjBhRDBuTlRFeUp5Qm9aV2xuYUhROUp6VXhNaWMrUEhCaGRHZ2dabWxzYkQwbmNtZGlLREkxTlN3eU5UVXNNalUxS1NjZ1pEMG5UVEUzTXk0NE9UZ2dORE01TGpRd05Hd3RNVFkyTGpRdE1UWTJMalJqTFRrdU9UazNMVGt1T1RrM0xUa3VPVGszTFRJMkxqSXdOaUF3TFRNMkxqSXdOR3d6Tmk0eU1ETXRNell1TWpBMFl6a3VPVGszTFRrdU9UazRJREkyTGpJd055MDVMams1T0NBek5pNHlNRFFnTUV3eE9USWdNekV5TGpZNUlEUXpNaTR3T1RVZ056SXVOVGsyWXprdU9UazNMVGt1T1RrM0lESTJMakl3TnkwNUxqazVOeUF6Tmk0eU1EUWdNR3d6Tmk0eU1ETWdNell1TWpBMFl6a3VPVGszSURrdU9UazNJRGt1T1RrM0lESTJMakl3TmlBd0lETTJMakl3Tkd3dE1qazBMalFnTWprMExqUXdNV010T1M0NU9UZ2dPUzQ1T1RjdE1qWXVNakEzSURrdU9UazNMVE0yTGpJd05DMHVNREF4ZWljdlBqd3ZjM1puUGc9PVwiKTtcbiAgfVxuICAvKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci9leGNsYW1hdGlvbi10cmlhbmdsZS5zdmcgKi9cbiAgLnRvYXN0LXdhcm5pbmcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owbmFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jbklIWnBaWGRDYjNnOUp6QWdNQ0ExTnpZZ05URXlKeUIzYVdSMGFEMG5OVGMySnlCb1pXbG5hSFE5SnpVeE1pYytQSEJoZEdnZ1ptbHNiRDBuY21kaUtESTFOU3d5TlRVc01qVTFLU2NnWkQwblRUVTJPUzQxTVRjZ05EUXdMakF4TTBNMU9EY3VPVGMxSURRM01pNHdNRGNnTlRZMExqZ3dOaUExTVRJZ05USTNMamswSURVeE1rZzBPQzR3TlRSakxUTTJMamt6TnlBd0xUVTVMams1T1MwME1DNHdOVFV0TkRFdU5UYzNMVGN4TGprNE4wd3lORFl1TkRJeklESXpMams0TldNeE9DNDBOamN0TXpJdU1EQTVJRFkwTGpjeUxUTXhMamsxTVNBNE15NHhOVFFnTUd3eU16a3VPVFFnTkRFMkxqQXlPSHBOTWpnNElETTFOR010TWpVdU5EQTFJREF0TkRZZ01qQXVOVGsxTFRRMklEUTJjekl3TGpVNU5TQTBOaUEwTmlBME5pQTBOaTB5TUM0MU9UVWdORFl0TkRZdE1qQXVOVGsxTFRRMkxUUTJMVFEyZW0wdE5ETXVOamN6TFRFMk5TNHpORFpzTnk0ME1UZ2dNVE0yWXk0ek5EY2dOaTR6TmpRZ05TNDJNRGtnTVRFdU16UTJJREV4TGprNE1pQXhNUzR6TkRab05EZ3VOVFEyWXpZdU16Y3pJREFnTVRFdU5qTTFMVFF1T1RneUlERXhMams0TWkweE1TNHpORFpzTnk0ME1UZ3RNVE0yWXk0ek56VXROaTQ0TnpRdE5TNHdPVGd0TVRJdU5qVTBMVEV4TGprNE1pMHhNaTQyTlRSb0xUWXpMak00TTJNdE5pNDRPRFFnTUMweE1pNHpOVFlnTlM0M09DMHhNUzQ1T0RFZ01USXVOalUwZWljdlBqd3ZjM1puUGc9PVwiKTtcbiAgfVxuICAudG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1jZW50ZXIgLm5neC10b2FzdHIsXG4gIC50b2FzdC1jb250YWluZXIudG9hc3QtYm90dG9tLWNlbnRlciAubmd4LXRvYXN0ciB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuICAudG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1mdWxsLXdpZHRoIC5uZ3gtdG9hc3RyLFxuICAudG9hc3QtY29udGFpbmVyLnRvYXN0LWJvdHRvbS1mdWxsLXdpZHRoIC5uZ3gtdG9hc3RyIHtcbiAgICB3aWR0aDogOTYlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuICAubmd4LXRvYXN0ciB7XG4gIFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB9XG4gIC50b2FzdC1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFBMzUxO1xuICB9XG4gIC50b2FzdC1lcnJvciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRvYXN0ci1sZWZ0KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci10b2FzdHItcmlnaHQpO1xuICAgIGNvbG9yOiAjRUMxQTFBICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRvYXN0LWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRjk2QjQ7XG4gIH1cbiAgLnRvYXN0LXdhcm5pbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGODk0MDY7XG4gIH1cbiAgLnRvYXN0LXByb2dyZXNzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbiAgLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMjQwcHgpIHtcbiAgICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xuICAgICAgd2lkdGg6IDExZW07XG4gICAgfVxuICAgIC50b2FzdC1jb250YWluZXIgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgICByaWdodDogLTAuMmVtO1xuICAgICAgdG9wOiAtMC4yZW07XG4gICAgfVxuICB9XG4gIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDI0MXB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xuICAgICAgd2lkdGg6IDE4ZW07XG4gICAgfVxuICAgIC50b2FzdC1jb250YWluZXIgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgICByaWdodDogLTAuMmVtO1xuICAgICAgdG9wOiAtMC4yZW07XG4gICAgfVxuICB9XG4gIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xuICAgICAgd2lkdGg6IDI1ZW07XG4gICAgfVxuICB9XG4gICIsIm1hdC1pY29uIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXG5cdCYudGVydGlhcnkge1xuXHRcdCY6aG92ZXIge1xuXHRcdFx0Ly9UT0RPIGhvdmVyIG5vdCB3b3JraW5nIGNvcnJlY3RseVxuXHRcdFx0Ly8gOjpuZy1kZWVwIHN2ZyB7XG5cdFx0XHRzdmcge1xuXHRcdFx0XHRkZWZzIHtcblx0XHRcdFx0XHRsaW5lYXJHcmFkaWVudCB7XG5cdFx0XHRcdFx0XHRzdG9wIHtcblx0XHRcdFx0XHRcdFx0JjpmaXJzdC1vZi10eXBlIHtcblx0XHRcdFx0XHRcdFx0XHRzdG9wLWNvbG9yOiB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LWljb24taG92ZXIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCY6bGFzdC1vZi10eXBlIHtcblx0XHRcdFx0XHRcdFx0XHRzdG9wLWNvbG9yOiB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC1pY29uLWhvdmVyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdDo6bmctZGVlcCBzdmcge1xuXHRcdFx0ZGVmcyB7XG5cdFx0XHRcdGxpbmVhckdyYWRpZW50IHtcblx0XHRcdFx0XHRzdG9wIHtcblx0XHRcdFx0XHRcdCY6Zmlyc3Qtb2YtdHlwZSB7XG5cdFx0XHRcdFx0XHRcdHN0b3AtY29sb3I6IHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtaWNvbik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQmOmxhc3Qtb2YtdHlwZSB7XG5cdFx0XHRcdFx0XHRcdHN0b3AtY29sb3I6IHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LWljb24pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdCYucHJpbWFyeSB7XG5cdFx0c3ZnIHtcbiAgICAgICAgICAgIHBhdGgge1xuICAgICAgICAgICAgICAgIGZpbGw6ICB2YXIoLS1jb2xvci10b29sdGlwLXRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICYuaGVhZGVyLWJnIHtcbiAgICAgICAgOjpuZy1kZWVwIHN2ZyB7XG4gICAgICAgICAgICBkZWZzIHtcbiAgICAgICAgICAgICAgICBsaW5lYXJHcmFkaWVudCB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3Age1xuICAgICAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3ItZ3JhZGllbnQtbGVmdC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3ItZ3JhZGllbnQtcmlnaHQtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbi5hbmltYXRpb24taGlkZGVuLXNrZWxldG9uIHtcbiAgICBhbmltYXRpb246IGhpZGUtc2tlbGV0b24gMC41cyBlYXNlLWluLW91dDtcbiAgfVxuXG5cbkBrZXlmcmFtZXMgaGlkZS1za2VsZXRvbiB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfSJdfQ== */"] });


/***/ }),

/***/ 7507:
/*!**********************************************************************************************!*\
  !*** ./apps/frontend/src/app/shared/components/download-plugin/download-plugin.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadPluginComponent": () => (/* binding */ DownloadPluginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9609);

class DownloadPluginComponent {
}
DownloadPluginComponent.ɵfac = function DownloadPluginComponent_Factory(t) { return new (t || DownloadPluginComponent)(); };
DownloadPluginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DownloadPluginComponent, selectors: [["cake-download-plugin"]], decls: 4, vars: 0, consts: [[1, "download-block"], ["loading", "lazy", "src", "assets/banner/1312.png", "alt", ""], ["loading", "lazy", "src", "assets/banner/1024.png", "alt", ""], ["loading", "lazy", "src", "assets/banner/768.png", "alt", ""]], template: function DownloadPluginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1)(2, "img", 2)(3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".download-block[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n}\n.download-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.download-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(1) {\n  display: block;\n}\n@media (max-width: 1024px) {\n  .download-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(1) {\n    display: none;\n  }\n}\n.download-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2) {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .download-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2) {\n    display: block;\n  }\n}\n@media (max-width: 768px) {\n  .download-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2) {\n    display: none;\n  }\n}\n.download-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(3) {\n  display: none;\n}\n@media (max-width: 768px) {\n  .download-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(3) {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvd25sb2FkLXBsdWdpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBQUY7QUFDRTtFQUNFLFdBQUE7QUFDSjtBQUFJO0VBQ0UsY0FBQTtBQUVOO0FBRE07RUFGRjtJQUdJLGFBQUE7RUFJTjtBQUNGO0FBRkk7RUFDRSxhQUFBO0FBSU47QUFITTtFQUZGO0lBR0ksY0FBQTtFQU1OO0FBQ0Y7QUFMTTtFQUxGO0lBTUksYUFBQTtFQVFOO0FBQ0Y7QUFOSTtFQUNFLGFBQUE7QUFRTjtBQVBNO0VBRkY7SUFHSSxjQUFBO0VBVU47QUFDRiIsImZpbGUiOiJkb3dubG9hZC1wbHVnaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5kb3dubG9hZC1ibG9jayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19 */"] });


/***/ }),

/***/ 4662:
/*!**********************************************************************************!*\
  !*** ./apps/frontend/src/app/shared/components/drop-down/drop-down.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropDownComponent": () => (/* binding */ DropDownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7661);




const _c0 = ["dropDown"];
function DropDownComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.error);
} }
function DropDownComponent_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropDownComponent_ul_7_li_1_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const option_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r5.chooseOption.emit(option_r4); ctx_r5.isOpened = !ctx_r5.isOpened; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.chosenOption = option_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r4.label, " ");
} }
function DropDownComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropDownComponent_ul_7_li_1_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.options);
} }
class DropDownComponent {
    constructor() {
        this.chooseOption = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.error = '';
        this.isOpened = false;
    }
    onCloseClick(target) {
        const clickedInside = this.dropDown.nativeElement.contains(target);
        if (!clickedInside && this.isOpened) {
            this.isOpened = false;
        }
    }
}
DropDownComponent.ɵfac = function DropDownComponent_Factory(t) { return new (t || DropDownComponent)(); };
DropDownComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropDownComponent, selectors: [["cake-drop-down"]], viewQuery: function DropDownComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropDown = _t.first);
    } }, hostBindings: function DropDownComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropDownComponent_click_HostBindingHandler($event) { return ctx.onCloseClick($event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { label: "label", options: "options", placeholder: "placeholder", error: "error", chosenOption: "chosenOption" }, outputs: { chooseOption: "chooseOption" }, decls: 8, vars: 9, consts: [[1, "drop-down"], ["dropDown", ""], [1, "block", 3, "click"], ["svgIcon", "arrow-down"], ["class", "error-message", 4, "ngIf"], ["class", "drop-down-list", 4, "ngIf"], [1, "error-message"], [1, "drop-down-list"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function DropDownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropDownComponent_Template_div_click_2_listener() { return ctx.isOpened = !ctx.isOpened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DropDownComponent_span_6_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DropDownComponent_ul_7_Template, 2, 1, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focus", ctx.isOpened || ctx.chosenOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.chosenOption ? ctx.chosenOption.label : ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("revert", ctx.isOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpened);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon], styles: ["@charset \"UTF-8\";\n.drop-down[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  cursor: pointer;\n}\n.drop-down[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-family: \"Gilroy-500\";\n  padding-left: 20px;\n  margin-top: 5px;\n  background-color: var(--color-gradient-left-4);\n  background-image: linear-gradient(var(--deg-gradient-4), var(--color-gradient-left-4), var(--color-gradient-right-4));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.drop-down[_ngcontent-%COMP%]   .drop-down-list[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--color-tertiary-input);\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 0;\n  margin-top: 4px;\n  box-shadow: 0px 0px 14px var(--box-shadow);\n  position: absolute;\n  z-index: 999;\n}\n.drop-down[_ngcontent-%COMP%]   .drop-down-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--color-fonts-2);\n  font-size: 14px;\n  font-family: Gilroy-400;\n  padding: 8px 16px;\n  border-bottom: 1px solid rgba(152, 149, 149, 0.16);\n}\n.drop-down[_ngcontent-%COMP%]   .drop-down-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  border: none;\n}\n.drop-down[_ngcontent-%COMP%]   .drop-down-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n}\n.drop-down[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  width: calc(100% - 32px);\n  height: 100%;\n  display: flex;\n  padding: 0 16px;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--color-tertiary-input);\n  border-radius: 12px;\n  position: relative;\n}\n.drop-down[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 12px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-enabled-input), var(--gradient-left-enabled-input), var(--gradient-right-enabled-input));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.drop-down[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--color-fonts-1);\n  font-family: Gilroy-400;\n  font-size: 16px;\n  display: block;\n  width: 80%;\n}\n.drop-down[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: block;\n  transition: 0.5s ease;\n}\n.drop-down[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   mat-icon.revert[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.drop-down[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]     svg path {\n  stroke: var(--color-fonts-1);\n}\n.drop-down[_ngcontent-%COMP%]   .block.focus[_ngcontent-%COMP%] {\n  position: relative;\n}\n.drop-down[_ngcontent-%COMP%]   .block.focus[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 12px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-6), var(--color-gradient-left-6), var(--color-gradient-right-6));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.drop-down[_ngcontent-%COMP%]   .block.focus[_ngcontent-%COMP%]:hover {\n  position: relative;\n}\n.drop-down[_ngcontent-%COMP%]   .block.focus[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 12px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.drop-down[_ngcontent-%COMP%]   .block.focus[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\n  color: var(--color-fonts-2);\n}\n.drop-down[_ngcontent-%COMP%]   .block.focus[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: var(--color-fonts-2);\n}\n.drop-down[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:active {\n  position: relative;\n}\n.drop-down[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:active::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 12px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.drop-down.error[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  position: relative;\n}\n.drop-down.error[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 12px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-4), var(--color-gradient-left-4), var(--color-gradient-left-4));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3AtZG93bi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFFaEI7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFGO0FBRUU7RUM2RUEsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQTVCQSw4Q0ErQkU7RUE5QkYscUhBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUQvQ0Y7QUFORTtFQUNFLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVFKO0FBTkk7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtEQUFBO0FBUU47QUFOTTtFQUNFLFlBQUE7QUFRUjtBQUxNO0VDUEosK0dBQUE7QURlRjtBQUZFO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQ1BGLGtCQUFBO0FEWUY7QUNYRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJET0U7RUNORixZREtFO0VDSkYsdUlBQUE7RUFDQSw4RUFBQSxFQUN1QyxRQUFBO0VBQ3ZDLDJCQUFBLEVBQUEsZ0NBQUE7RUFDQSx1QkFBQSxFQUFBLFFBQUE7RUFDQSxvQkFBQTtBRFlKO0FBVEk7RUFDRSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBV047QUFSSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQVVOO0FBUk07RUFDRSx5QkFBQTtBQVVSO0FBUFE7RUFDRSw0QkFBQTtBQVNWO0FBSEk7RUN2Q0Ysa0JBQUE7QUQ2Q0Y7QUM1Q0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLG1CRHVDSTtFQ3RDSixZRHFDSTtFQ3BDSiwrR0FBQTtFQUNBLDhFQUFBLEVBQ3VDLFFBQUE7RUFDdkMsMkJBQUEsRUFBQSxnQ0FBQTtFQUNBLHVCQUFBLEVBQUEsUUFBQTtFQUNBLG9CQUFBO0FENkNKO0FBVk07RUNoREosa0JBQUE7QUQ2REY7QUM1REU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLG1CRGdETTtFQy9DTixZRDhDTTtFQzdDTiwrR0FBQTtFQUNBLDhFQUFBLEVBQ3VDLFFBQUE7RUFDdkMsMkJBQUEsRUFBQSxnQ0FBQTtFQUNBLHVCQUFBLEVBQUEsUUFBQTtFQUNBLG9CQUFBO0FENkRKO0FBakJRO0VBQ0UsMkJBQUE7QUFtQlY7QUFmVTtFQUNFLDRCQUFBO0FBaUJaO0FBWEk7RUNyRUYsa0JBQUE7QURtRkY7QUNsRkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLG1CRHFFSTtFQ3BFSixZRG1FSTtFQ2xFSiwrR0FBQTtFQUNBLDhFQUFBLEVBQ3VDLFFBQUE7RUFDdkMsMkJBQUEsRUFBQSxnQ0FBQTtFQUNBLHVCQUFBLEVBQUEsUUFBQTtFQUNBLG9CQUFBO0FEbUZKO0FBaEJFO0VDaEZBLGtCQUFBO0FEbUdGO0FDbEdFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxtQkRnRkU7RUMvRUYsWUQ4RUU7RUM3RUYsOEdBQUE7RUFDQSw4RUFBQSxFQUN1QyxRQUFBO0VBQ3ZDLDJCQUFBLEVBQUEsZ0NBQUE7RUFDQSx1QkFBQSxFQUFBLFFBQUE7RUFDQSxvQkFBQTtBRG1HSiIsImZpbGUiOiJkcm9wLWRvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9taXhpbnMnO1xuXG4uZHJvcC1kb3duIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgLmVycm9yLW1lc3NhZ2Uge1xuICAgIEBpbmNsdWRlIGVycm9yLW1lc3NhZ2U7XG4gIH1cblxuICAuZHJvcC1kb3duLWxpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXRlcnRpYXJ5LWlucHV0KTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTRweCB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk5O1xuICAgIFxuICAgIGxpIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC1mYW1pbHk6IEdpbHJveS00MDA7XG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE1MiwgMTQ5LCAxNDksIDAuMTYpO1xuXG4gICAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1iZyh2YXIoLS1kZWctZ3JhZGllbnQtMyksdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0zKSx2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0zKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJsb2NrIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXRlcnRpYXJ5LWlucHV0KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1ib3JkZXIoXG4gICAgICB2YXIoLS1kZWctZ3JhZGllbnQtZW5hYmxlZC1pbnB1dCksXG4gICAgICB2YXIoLS1ncmFkaWVudC1sZWZ0LWVuYWJsZWQtaW5wdXQpLFxuICAgICAgdmFyKC0tZ3JhZGllbnQtcmlnaHQtZW5hYmxlZC1pbnB1dCksXG4gICAgICAycHgsXG4gICAgICAxMnB4XG4gICAgKTtcblxuICAgIGgyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0xKTtcbiAgICAgIGZvbnQtZmFtaWx5OiBHaWxyb3ktNDAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogODAlO1xuICAgIH1cblxuICAgIG1hdC1pY29uIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuXG4gICAgICAmLnJldmVydCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICB9XG4gICAgICA6Om5nLWRlZXAgc3ZnIHtcbiAgICAgICAgcGF0aCB7XG4gICAgICAgICAgc3Ryb2tlOiB2YXIoLS1jb2xvci1mb250cy0xKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgfVxuXG4gICAgJi5mb2N1cyB7XG4gICAgICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItYm9yZGVyKFxuICAgICAgICB2YXIoLS1kZWctZ3JhZGllbnQtNiksXG4gICAgICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtNiksXG4gICAgICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTYpLFxuICAgICAgICAycHgsXG4gICAgICAgIDEycHhcbiAgICAgICk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItYm9yZGVyKFxuICAgICAgICAgIHZhcigtLWRlZy1ncmFkaWVudC0xKSxcbiAgICAgICAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTEpLFxuICAgICAgICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTEpLFxuICAgICAgICAgIDJweCxcbiAgICAgICAgICAxMnB4XG4gICAgICAgICk7XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgcGF0aCB7XG4gICAgICAgICAgICBzdHJva2U6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1ib3JkZXIoXG4gICAgICAgIHZhcigtLWRlZy1ncmFkaWVudC0xKSxcbiAgICAgICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0xKSxcbiAgICAgICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMSksXG4gICAgICAgIDJweCxcbiAgICAgICAgMTJweFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAmLmVycm9yIC5ibG9jayB7XG4gICAgQGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLWJvcmRlcihcbiAgICAgIHZhcigtLWRlZy1ncmFkaWVudC00KSxcbiAgICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtNCksXG4gICAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTQpLFxuICAgICAgMnB4LFxuICAgICAgMTJweFxuICAgICk7XG4gIH1cbn1cbiIsIkBtaXhpbiBidG4taG92ZXIoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gICAgYmFja2dyb3VuZDogJGJnO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIH1cbn1cblxuQG1peGluIGJ0bi1kaXNhYmxlZCgkdGV4dENvbG9yLCAkYmcsICRib3JkZXJDb2xvcikge1xuICAmOmRpc2FibGVkIHtcbiAgICBjb2xvcjogJHRleHRDb2xvcjtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gICAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xuICB9XG59XG5cbkBtaXhpbiBidG4tZGVmYXVsdCgkdGV4dENvbG9yLCAkYmcsICRib3JkZXJDb2xvcikge1xuICBjb2xvcjogJHRleHRDb2xvcjtcbiAgYmFja2dyb3VuZDogJGJnO1xuICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gIGJvcmRlci1pbWFnZS1zbGljZTogMTtcbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci1iZygkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcikge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWdyYWRpZW50LWxpbmVhcigkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcikge1xuICBib3JkZXItaW1hZ2U6ICBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZWFyLWJvcmRlcihcbiAgJGRlZyxcbiAgJGxlZnRDb2xvcixcbiAgJHJpZ2h0Q29sb3IsXG4gICRib3JkZXJXaWR0aCxcbiAgJGJvcmRlclJhZGl1c1xuKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDA7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xuICAgIHBhZGRpbmc6ICRib3JkZXJXaWR0aDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xuICAgIC13ZWJraXQtbWFzazogbGluZWFyLWdyYWRpZW50KCNmZmYgMCAwKSBjb250ZW50LWJveCxcbiAgICAgIC8qIFsxXSAqLyBsaW5lYXItZ3JhZGllbnQoI2ZmZiAwIDApOyAvKiBbMl0gKi9cbiAgICAtd2Via2l0LW1hc2stY29tcG9zaXRlOiB4b3I7IC8qIFszXSDQtNC70Y8g0L/RltC00YLRgNC40LzQutC4INCx0YDQsNGD0LfQtdGA0ZbQsiAqL1xuICAgIG1hc2stY29tcG9zaXRlOiBleGNsdWRlOyAvKiBbM10gKi9cbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZWFyLXRleHQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxlZnRDb2xvcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZWFyLWV2ZW50cy1saXZlKCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsZWZ0Q29sb3I7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVyLXNwYW4tdGV4dCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcil7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCB2YXIoLS1kZWctZ3JhZGllbnQtMyksXG4gIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMyksXG4gIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTMpKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuQG1peGluIGVycm9yLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LWZhbWlseTogJ0dpbHJveS01MDAnO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgQGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLXRleHQoXG4gICAgdmFyKC0tZGVnLWdyYWRpZW50LTQpLFxuICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtNCksXG4gICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtNClcbiAgKTtcbn1cblxuQG1peGluIEdpbHJveS00MDAtMTYtZm9udHMtMiB7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95LTQwMCc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQG1peGluIEdpbHJveS01MDAtMzAtZm9udHMtMiB7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95LTUwMCc7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQG1peGluIEdpbHJveS02MDAtMTQtZm9udHMtMiB7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95LTYwMCc7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 5504:
/*!************************************************************************************!*\
  !*** ./apps/frontend/src/app/shared/components/get-reward/get-reward.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetRewardComponent": () => (/* binding */ GetRewardComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 6053);
/* harmony import */ var _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cake/lib-api-interface */ 171);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 7114);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 3012);
/* harmony import */ var _core_types_toaster_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/types/toaster-position */ 7564);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api.service */ 554);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ 5894);
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/modals.service */ 5414);
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/toaster.service */ 905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 6873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7661);
/* harmony import */ var _cakebox_cakebox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cakebox/cakebox.component */ 3755);
/* harmony import */ var _core_pipes_cakebox_transform_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/pipes/cakebox-transform.pipe */ 7603);





















function GetRewardComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "cake-cakebox", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "cakeboxTransform");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cakebox", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r0.data));
  }
}
class GetRewardComponent {
  constructor(data, dialogRef, modalService, authService, apiService, customToasterService, router, zone) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.modalService = modalService;
    this.authService = authService;
    this.apiService = apiService;
    this.customToasterService = customToasterService;
    this.router = router;
    this.zone = zone;
    this.rewardEnum = _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.RewardEnum;
    this.disabled = false;
  }
  returnToReward(id) {
    this.modalService.openRewardPopup(id);
    this.dialogRef.close();
  }
  byReward(id) {
    this.disabled = true;
    this.apiService.byReward(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => {
      this.customToasterService.showErrorToaster(_core_types_toaster_position__WEBPACK_IMPORTED_MODULE_1__.ToasterPosition.bottomCenter, error.error.error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(error);
    })).subscribe(() => {
      this.zone.run(() => {
        this.router.navigateByUrl('/rewards');
      });
      this.dialogRef.close();
    });
  }
}
GetRewardComponent.ɵfac = function GetRewardComponent_Factory(t) {
  return new (t || GetRewardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_modals_service__WEBPACK_IMPORTED_MODULE_4__.ModalsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__.CustomToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone));
};
GetRewardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: GetRewardComponent,
  selectors: [["cake-get-reward"]],
  decls: 19,
  vars: 8,
  consts: [[1, "slice-container"], [1, "close", "pointer", 3, "click"], ["svgIcon", "tooltip-cross-close"], [1, "image"], [1, "background"], ["loading", "lazy", "alt", ""], ["class", "cakebox", 4, "ngIf"], [1, "text"], [1, "confirm-btn"], [1, "button", "primary", 3, "disabled", "click"], [1, "button", "tertiary", 3, "click"], [1, "cakebox"], [3, "cakebox"]],
  template: function GetRewardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GetRewardComponent_Template_div_click_1_listener() {
        return ctx.dialogRef.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "div", 4)(5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, GetRewardComponent_div_6_Template, 3, 3, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 7)(8, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 8)(14, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GetRewardComponent_Template_button_click_14_listener() {
        return ctx.byReward(ctx.data.id);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 8)(17, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GetRewardComponent_Template_button_click_17_listener() {
        return ctx.returnToReward(ctx.data.id);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("src", ctx.data.image || ctx.data.smallImage, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.data.type === ctx.rewardEnum.CAKEBOX);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" Get ", ctx.data.name, " for ", ctx.data.cost, " sugar? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" You currently have ", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 6, ctx.authService.userProfile)) == null ? null : tmp_3_0.sugar, " sugar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.disabled);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _cakebox_cakebox_component__WEBPACK_IMPORTED_MODULE_6__.CakeboxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _core_pipes_cakebox_transform_pipe__WEBPACK_IMPORTED_MODULE_7__.CakeboxTransformPipe],
  styles: ["@-moz-document url-prefix() {\n  .slice-container .image .cakebox {\n    transform: scale(0.6) translateX(-50%) !important;\n    transform-origin: left top;\n    width: 166.6666666667%;\n    height: 166.6666666667%;\n  }\n}\n.slice-container[_ngcontent-%COMP%] {\n  width: 610px;\n  height: -moz-fit-content;\n  height: fit-content;\n  position: relative;\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    height: 80vh;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 153px;\n  height: 153px;\n  position: relative;\n  margin: 23px auto auto;\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    margin-top: 195px;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 13px;\n  left: 20px;\n  width: 153px;\n  height: 153px;\n  background: var(--bg-get-reward-color);\n  border-radius: 16px;\n  transform: rotate(5deg);\n  z-index: 1;\n}\n.slice-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  z-index: 2;\n  top: 0;\n  left: 0;\n  position: absolute;\n  width: 153px;\n  height: 153px;\n  object-fit: cover;\n  border-radius: 16px;\n}\n.slice-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%] {\n  position: absolute;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  left: 50%;\n  top: 10%;\n  transform: translateX(-50%);\n  zoom: 0.6;\n  z-index: 9999;\n}\n.slice-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin: 40px auto 32px;\n  max-width: 336px;\n  text-align: center;\n  font-family: \"Gilroy-400\";\n  font-weight: 400;\n  text-align: center;\n  color: var(--color-fonts-2);\n}\n.slice-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin: 0;\n}\n.slice-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 16px;\n  margin-bottom: 0;\n}\n.slice-container[_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%] {\n  width: 202px;\n  margin: auto;\n  padding-bottom: 16px;\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%]:last-of-type {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1yZXdhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQztJQUNDLGlEQUFBO0lBQ0EsMEJBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0VBREE7QUFDRjtBQUlBO0VBQ0MsWUFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQUZEO0FBSUM7RUFMRDtJQU1FLGlCQUFBO0lBQ0EsWUFBQTtFQURBO0FBQ0Y7QUFHQztFQUNDLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FBREY7QUFHRTtFQU5EO0lBT0UsY0FBQTtFQUFEO0FBQ0Y7QUFHQztFQXJCRDtJQXNCRSxzQkFBQTtFQUFBO0FBQ0Y7QUFFQztFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUFGO0FBQ0U7RUFMRDtJQU1FLGlCQUFBO0VBRUQ7QUFDRjtBQUFFO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQUVIO0FBQ0U7RUFDQyxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNIO0FBRUU7RUFDQyxrQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDRyxhQUFBO0FBQU47QUFJQztFQUNDLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBRkY7QUFJRTtFQUNDLGVBQUE7RUFDQSxTQUFBO0FBRkg7QUFLRTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSEg7QUFPQztFQUNDLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFMRjtBQU9FO0VBTEQ7SUFNRSxXQUFBO0VBSkQ7QUFDRjtBQU1FO0VBQ0MsaUJBQUE7QUFKSCIsImZpbGUiOiJnZXQtcmV3YXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL21peGluc1wiO1xuXG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuXHQuc2xpY2UtY29udGFpbmVyIC5pbWFnZSAuY2FrZWJveCB7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVgoLTUwJSkgIWltcG9ydGFudDtcblx0XHR0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcblx0XHR3aWR0aDogY2FsYygxMDAlIC8gMC42KTtcblx0XHRoZWlnaHQ6IGNhbGMoMTAwJSAvIDAuNik7XG5cdH1cbn1cblxuLnNsaWNlLWNvbnRhaW5lciB7XG5cdHdpZHRoOiA2MTBweDtcblx0aGVpZ2h0OiBmaXQtY29udGVudDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcblx0XHRwYWRkaW5nLXRvcDogNTBweDtcblx0XHRoZWlnaHQ6IDgwdmg7XG5cdH1cblxuXHQuY2xvc2Uge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHRvcDogMDtcblxuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdH1cblx0fVxuXG5cdEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcblx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXHR9XG5cblx0LmltYWdlIHtcblx0XHR3aWR0aDogMTUzcHg7XG5cdFx0aGVpZ2h0OiAxNTNweDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0bWFyZ2luOiAyM3B4IGF1dG8gYXV0bztcblx0XHRAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG5cdFx0XHRtYXJnaW4tdG9wOiAxOTVweDtcblx0XHR9XG5cblx0XHQuYmFja2dyb3VuZCB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR0b3A6IDEzcHg7XG5cdFx0XHRsZWZ0OiAyMHB4O1xuXHRcdFx0d2lkdGg6IDE1M3B4O1xuXHRcdFx0aGVpZ2h0OiAxNTNweDtcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWJnLWdldC1yZXdhcmQtY29sb3IpO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuXHRcdFx0ei1pbmRleDogMTtcblx0XHR9XG5cblx0XHRpbWcge1xuXHRcdFx0ei1pbmRleDogMjtcblx0XHRcdHRvcDogMDtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR3aWR0aDogMTUzcHg7XG5cdFx0XHRoZWlnaHQ6IDE1M3B4O1xuXHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAxNnB4O1xuXHRcdH1cblxuXHRcdC5jYWtlYm94IHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHdpZHRoOiBmaXQtY29udGVudDtcblx0XHRcdGhlaWdodDogZml0LWNvbnRlbnQ7XG5cdFx0XHRsZWZ0OiA1MCU7XG5cdFx0XHR0b3A6IDEwJTtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHRcdHpvb206IDAuNjtcbiAgICAgIHotaW5kZXg6IDk5OTk7XG5cdFx0fVxuXHR9XG5cblx0LnRleHQge1xuXHRcdG1hcmdpbjogNDBweCBhdXRvIDMycHg7XG5cdFx0bWF4LXdpZHRoOiAzMzZweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Zm9udC1mYW1pbHk6IFwiR2lscm95LTQwMFwiO1xuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcblxuXHRcdGgxIHtcblx0XHRcdGZvbnQtc2l6ZTogMzJweDtcblx0XHRcdG1hcmdpbjogMDtcblx0XHR9XG5cblx0XHRoMiB7XG5cdFx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0XHR9XG5cdH1cblxuXHQuY29uZmlybS1idG4ge1xuXHRcdHdpZHRoOiAyMDJweDtcblx0XHRtYXJnaW46IGF1dG87XG5cdFx0cGFkZGluZy1ib3R0b206IDE2cHg7XG5cblx0XHRAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHR9XG5cblx0XHQmOmxhc3Qtb2YtdHlwZSB7XG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogMDtcblx0XHR9XG5cdH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 9852:
/*!**************************************************************************!*\
  !*** ./apps/frontend/src/app/shared/components/input/input.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3557);
/* harmony import */ var _core_constants_browsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/constants/browsers */ 8574);
/* harmony import */ var _core_constants_devices_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/constants/devices.enum */ 4167);
/* harmony import */ var _services_device_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/device-service.service */ 8102);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7661);
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/member-ordering */










const _c0 = ["ref"];
function InputComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("for", ctx_r0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.label);
} }
function InputComponent_span_7_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InputComponent_span_7_mat_icon_1_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r6.eyeHidden = !ctx_r6.eyeHidden; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.type = "password"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function InputComponent_span_7_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InputComponent_span_7_mat_icon_2_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r8.eyeHidden = !ctx_r8.eyeHidden; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.type = "text"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function InputComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, InputComponent_span_7_mat_icon_1_Template, 1, 0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, InputComponent_span_7_mat_icon_2_Template, 1, 0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.eyeHidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.eyeHidden);
} }
function InputComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InputComponent_div_8_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.onClosePressed()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
const _c1 = ["*"];
class InputComponent {
    constructor(deviceService) {
        this.deviceService = deviceService;
        this.label = '';
        this.defaultType = 'text';
        this.placeholder = '';
        this.error = '';
        this.hasError = false;
        this.hasEye = false;
        this.defaultValue = '';
        this.hasCloseCircle = false;
        this.inputEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.inputClose = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.onFocus = false;
        this.eyeHidden = true;
        this.type = 'text';
        this.onChange = () => { };
        this.onTouch = () => { };
    }
    get isIphoneSafari() {
        return this.deviceService.browser === _core_constants_browsers__WEBPACK_IMPORTED_MODULE_0__.BrowserEnum.SAFARI && this.deviceService.deviseName === _core_constants_devices_enum__WEBPACK_IMPORTED_MODULE_1__.DevicesEnum.IPHONE;
    }
    ngOnInit() {
        this.type = this.defaultType;
    }
    onFocusDetect(boolean) {
        this.onFocus = boolean;
    }
    set value(val) {
        this.onChange(val);
        this.onTouch(val);
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    onClosePressed() {
        this.inputClose.emit();
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_device_service_service__WEBPACK_IMPORTED_MODULE_2__.DeviceService)); };
InputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["cake-input"]], viewQuery: function InputComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
    } }, inputs: { label: "label", id: "id", defaultType: "defaultType", placeholder: "placeholder", error: "error", hasError: "hasError", hasEye: "hasEye", defaultValue: "defaultValue", control: "control", hasCloseCircle: "hasCloseCircle" }, outputs: { inputEmitter: "inputEmitter", inputClose: "inputClose" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => InputComponent),
                multi: true,
            },
        ])], ngContentSelectors: _c1, decls: 11, vars: 18, consts: [[1, "input-control"], [3, "for", 4, "ngIf"], [1, "block"], ["ref", ""], [3, "type", "placeholder", "id", "formControl", "input", "focus", "blur"], ["class", "eye", 4, "ngIf"], ["class", "close-icon", 4, "ngIf"], [1, "error-message"], [3, "for"], [1, "eye"], ["svgIcon", "eye-closed", 3, "click", 4, "ngIf"], ["svgIcon", "eye", 3, "click", 4, "ngIf"], ["svgIcon", "eye-closed", 3, "click"], ["svgIcon", "eye", 3, "click"], [1, "close-icon"], ["svgIcon", "close", 3, "click"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, InputComponent_label_1_Template, 2, 2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "span", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function InputComponent_Template_input_input_6_listener() { return ctx.inputEmitter.emit(ctx.value); })("focus", function InputComponent_Template_input_focus_6_listener() { return ctx.onFocusDetect(true); })("blur", function InputComponent_Template_input_blur_6_listener() { return ctx.onFocusDetect(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, InputComponent_span_7_Template, 3, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, InputComponent_div_8_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("error", ctx.error || ctx.hasError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("on-focus", ctx.onFocus);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("has-icon", _r1 == null ? null : _r1.childNodes == null ? null : _r1.childNodes.length)("has-eye", ctx.hasEye)("iphone-safari", ctx.isIphoneSafari);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("type", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasEye);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasCloseCircle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.error);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon], styles: ["@charset \"UTF-8\";\n.input-control[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.input-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: var(--color-fonts-2);\n  margin-bottom: 8px;\n  font-family: \"Gilroy-600\";\n}\n.input-control[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-family: \"Gilroy-500\";\n  padding-left: 20px;\n  margin-top: 5px;\n  background-color: var(--color-gradient-left-4);\n  background-image: linear-gradient(var(--deg-gradient-4), var(--color-gradient-left-4), var(--color-gradient-right-4));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  position: relative;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 12px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-enabled-input), var(--gradient-left-enabled-input), var(--gradient-right-enabled-input));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.input-control[_ngcontent-%COMP%]   .block.on-focus[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-control[_ngcontent-%COMP%]   .block.on-focus[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 12px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-6), var(--color-gradient-left-6), var(--color-gradient-right-6));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:active {\n  position: relative;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:active::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 12px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]     mat-icon {\n  position: absolute;\n  left: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 24px;\n  z-index: 1;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]     mat-icon   svg path {\n  stroke: var(--color-fonts-1);\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  left: auto;\n  right: 20px;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  left: auto;\n  right: 20px;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  width: calc(100% - 20px);\n  width: -moz-calc(100% - 20px);\n  height: 43px;\n  border: none;\n  padding-left: 16px;\n  color: var(--color-fonts-1);\n  background: var(--color-tertiary-input);\n  font-family: \"Gilroy-500\";\n  font-size: 16px;\n  line-height: 22px;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   input.iphone-safari[_ngcontent-%COMP%] {\n  width: calc(100% - 25px);\n  width: -moz-calc(100% - 25px);\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   input.iphone-safari.has-icon[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  width: calc(100% - 57px);\n  width: -webkit-calc(100% - 57px);\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   input.iphone-safari.has-eye[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  width: calc(100% - 25px);\n  width: -webkit-calc(100% - 25px);\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   input.has-icon[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  width: calc(100% - 53px);\n  width: -webkit-calc(100% - 53px);\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   input.has-eye[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  width: calc(100% - 20px);\n  width: -webkit-calc(100% - 20px);\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-fonts-1);\n  font-size: 16px;\n  font-family: \"Gilroy-400\";\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  color: var(--color-fonts-2);\n}\n.input-control.error[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-control.error[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 12px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-4), var(--color-gradient-left-4), var(--color-gradient-left-4));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUVoQjtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUFGO0FBRUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFKO0FBR0U7RUN1RUEsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQTVCQSw4Q0ErQkU7RUE5QkYscUhBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUQxQ0Y7QUFMRTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VDdUJGLGtCQUFBO0FEZkY7QUNnQkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLG1CRHZCRTtFQ3dCRixZRHpCRTtFQzBCRix1SUFBQTtFQUNBLDhFQUFBLEVBQ3VDLFFBQUE7RUFDdkMsMkJBQUEsRUFBQSxnQ0FBQTtFQUNBLHVCQUFBLEVBQUEsUUFBQTtFQUNBLG9CQUFBO0FEZko7QUFaSTtFQ2NGLGtCQUFBO0FEQ0Y7QUNBRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJEbkIySDtFQ29CM0gsWURwQnNIO0VDcUJ0SCwrR0FBQTtFQUNBLDhFQUFBLEVBQ3VDLFFBQUE7RUFDdkMsMkJBQUEsRUFBQSxnQ0FBQTtFQUNBLHVCQUFBLEVBQUEsUUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUF4Qkk7RUNVRixrQkFBQTtBRGlCRjtBQ2hCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJEZjJIO0VDZ0IzSCxZRGhCc0g7RUNpQnRILCtHQUFBO0VBQ0EsOEVBQUEsRUFDdUMsUUFBQTtFQUN2QywyQkFBQSxFQUFBLGdDQUFBO0VBQ0EsdUJBQUEsRUFBQSxRQUFBO0VBQ0Esb0JBQUE7QURpQko7QUFwQ0k7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQXNDTjtBQXBDUTtFQUNFLDRCQUFBO0FBc0NWO0FBaENNO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBa0NSO0FBN0JNO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBK0JSO0FBM0JJO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtFQUVBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQTZCTjtBQTNCTTtFQUNFLHdCQUFBO0VBRUEsNkJBQUE7QUE2QlI7QUEzQlE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBRUEsZ0NBQUE7QUE2QlY7QUExQlE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBRUEsZ0NBQUE7QUE0QlY7QUF4Qk07RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBRUEsZ0NBQUE7QUEwQlI7QUF2Qk07RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBRUEsZ0NBQUE7QUF5QlI7QUF0Qk07RUFDRSwyQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQXdCUjtBQXJCTTtFQUNFLGFBQUE7QUF1QlI7QUFwQk07RUFDRSwyQkFBQTtBQXNCUjtBQWpCRTtFQ3hGQSxrQkFBQTtBRDRHRjtBQzNHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJEbUZ3SDtFQ2xGeEgsWURrRm1IO0VDakZuSCw4R0FBQTtFQUNBLDhFQUFBLEVBQ3VDLFFBQUE7RUFDdkMsMkJBQUEsRUFBQSxnQ0FBQTtFQUNBLHVCQUFBLEVBQUEsUUFBQTtFQUNBLG9CQUFBO0FENEdKIiwiZmlsZSI6ImlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwvbWl4aW5zJztcblxuLmlucHV0LWNvbnRyb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBmb250LWZhbWlseTogJ0dpbHJveS02MDAnO1xuICB9XG5cbiAgLmVycm9yLW1lc3NhZ2Uge1xuICAgIEBpbmNsdWRlIGVycm9yLW1lc3NhZ2U7XG4gIH1cblxuICAuYmxvY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgQGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLWJvcmRlcihcbiAgICAgIHZhcigtLWRlZy1ncmFkaWVudC1lbmFibGVkLWlucHV0KSxcbiAgICAgIHZhcigtLWdyYWRpZW50LWxlZnQtZW5hYmxlZC1pbnB1dCksXG4gICAgICB2YXIoLS1ncmFkaWVudC1yaWdodC1lbmFibGVkLWlucHV0KSxcbiAgICAgIDJweCxcbiAgICAgIDEycHhcbiAgICApO1xuXG4gICAgJi5vbi1mb2N1cyB7XG4gICAgICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItYm9yZGVyKHZhcigtLWRlZy1ncmFkaWVudC02KSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC02KSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtNiksIDJweCwgMTJweCk7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgQGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLWJvcmRlcih2YXIoLS1kZWctZ3JhZGllbnQtMSksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMSksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTEpLCAycHgsIDEycHgpO1xuICAgIH1cblxuICAgIDo6bmctZGVlcCBtYXQtaWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAyMHB4O1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgOjpuZy1kZWVwIHN2ZyB7XG4gICAgICAgIHBhdGgge1xuICAgICAgICAgIHN0cm9rZTogdmFyKC0tY29sb3ItZm9udHMtMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2xvc2UtaWNvbiB7XG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmV5ZSB7XG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgd2lkdGg6IC1tb3otY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICBoZWlnaHQ6IDQzcHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMSk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci10ZXJ0aWFyeS1pbnB1dCk7XG4gICAgICBmb250LWZhbWlseTogJ0dpbHJveS01MDAnO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgICAgICYuaXBob25lLXNhZmFyaSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcbiAgICAgICAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gMjVweCk7XG4gICAgICAgIHdpZHRoOiAtbW96LWNhbGMoMTAwJSAtIDI1cHgpO1xuICAgICAgICBcbiAgICAgICAgJi5oYXMtaWNvbiB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1N3B4KTtcbiAgICAgICAgICB3aWR0aDogLW1vei1jYWxjKDEwMCUgLSA1N3B4KTtcbiAgICAgICAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSA1N3B4KTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAmLmhhcy1leWUge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG4gICAgICAgICAgd2lkdGg6IC1tb3otY2FsYygxMDAlIC0gMjVweCk7XG4gICAgICAgICAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gMjVweCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5oYXMtaWNvbiB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUzcHgpO1xuICAgICAgICB3aWR0aDogLW1vei1jYWxjKDEwMCUgLSA1M3B4KTtcbiAgICAgICAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gNTNweCk7XG4gICAgICB9XG4gIFxuICAgICAgJi5oYXMtZXllIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgIHdpZHRoOiAtbW96LWNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgIH1cblxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNDAwJztcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cy12aXNpYmxlIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5lcnJvciAuYmxvY2sge1xuICAgIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1ib3JkZXIodmFyKC0tZGVnLWdyYWRpZW50LTQpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTQpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTQpLCAycHgsIDEycHgpO1xuICB9XG59XG4iLCJAbWl4aW4gYnRuLWhvdmVyKCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbkBtaXhpbiBidG4tZGlzYWJsZWQoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgJjpkaXNhYmxlZCB7XG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gICAgYmFja2dyb3VuZDogJGJnO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcbiAgfVxufVxuXG5AbWl4aW4gYnRuLWRlZmF1bHQoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gIGJhY2tncm91bmQ6ICRiZztcbiAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItYmcoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbn1cblxuQG1peGluIGJvcmRlci1ncmFkaWVudC1saW5lYXIoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYm9yZGVyLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci1ib3JkZXIoXG4gICRkZWcsXG4gICRsZWZ0Q29sb3IsXG4gICRyaWdodENvbG9yLFxuICAkYm9yZGVyV2lkdGgsXG4gICRib3JkZXJSYWRpdXNcbikge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcbiAgICBwYWRkaW5nOiAkYm9yZGVyV2lkdGg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbiAgICAtd2Via2l0LW1hc2s6IGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCkgY29udGVudC1ib3gsXG4gICAgICAvKiBbMV0gKi8gbGluZWFyLWdyYWRpZW50KCNmZmYgMCAwKTsgLyogWzJdICovXG4gICAgLXdlYmtpdC1tYXNrLWNvbXBvc2l0ZTogeG9yOyAvKiBbM10g0LTQu9GPINC/0ZbQtNGC0YDQuNC80LrQuCDQsdGA0LDRg9C30LXRgNGW0LIgKi9cbiAgICBtYXNrLWNvbXBvc2l0ZTogZXhjbHVkZTsgLyogWzNdICovXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci10ZXh0KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsZWZ0Q29sb3I7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci1ldmVudHMtbGl2ZSgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGVmdENvbG9yO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lci1zcGFuLXRleHQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3Ipe1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCggdmFyKC0tZGVnLWdyYWRpZW50LTMpLFxuICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTMpLFxuICB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0zKSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtaXhpbiBlcnJvci1tZXNzYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNTAwJztcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KFxuICAgIHZhcigtLWRlZy1ncmFkaWVudC00KSxcbiAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTQpLFxuICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTQpXG4gICk7XG59XG5cbkBtaXhpbiBHaWxyb3ktNDAwLTE2LWZvbnRzLTIge1xuICBmb250LWZhbWlseTogJ0dpbHJveS00MDAnO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBtaXhpbiBHaWxyb3ktNTAwLTMwLWZvbnRzLTIge1xuICBmb250LWZhbWlseTogJ0dpbHJveS01MDAnO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBtaXhpbiBHaWxyb3ktNjAwLTE0LWZvbnRzLTIge1xuICBmb250LWZhbWlseTogJ0dpbHJveS02MDAnO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4iXX0= */"] });


/***/ }),

/***/ 430:
/*!**********************************************************************!*\
  !*** ./apps/frontend/src/app/shared/components/kol/kol.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KolComponent": () => (/* binding */ KolComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 6053);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 5231);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api.service */ 554);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ 5894);
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/modals.service */ 5414);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/theme.service */ 1266);
/* harmony import */ var _classes_watcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/watcher */ 34);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7661);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-skeleton-loader */ 3453);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pagination/pagination.component */ 2774);

















function KolComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function KolComponent_div_0_div_11_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const reward_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.modalsService.openRewardPopup(reward_r8.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Sugar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const reward_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", reward_r8.smallImage, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, reward_r8.type.toLowerCase().replace("cake", "cak3")));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](reward_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 6, reward_r8.cost));
} }
function KolComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function KolComponent_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.dialogRef.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 9)(6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "KOL");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, KolComponent_div_0_div_11_Template, 12, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 12)(13, "cake-pagination", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function KolComponent_div_0_Template_cake_pagination_pageChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.page = $event); })("pageChange", function KolComponent_div_0_Template_cake_pagination_pageChange_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.getUser()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("src", ctx_r0.kol.user.avatar || ctx_r0.profileImg, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.kol.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.getRewards);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("page", ctx_r0.page)("pageSize", ctx_r0.pageSize)("count", ctx_r0.totalCount);
} }
const _c0 = function (a0) { return { "background-color": a0, height: "72px", width: "72px" }; };
function KolComponent_ng_template_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ngx-skeleton-loader", 22)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](3, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](5, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](7, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Sugar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, ctx_r15.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r5);
} }
const _c1 = function (a0) { return { "background-color": a0, height: "104px", width: "104px", "margin-left": "7.5px" }; };
const _c2 = function (a0) { return { "background-color": a0, height: "64px", width: "200px", "margin-left": "50%", "margin-top": "10px", transform: "translateX(-50%)" }; };
function KolComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ngx-skeleton-loader", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "ngx-skeleton-loader", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "KOL");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, KolComponent_ng_template_1_div_10_Template, 10, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c1, ctx_r2.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c2, ctx_r2.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.getMockArray(9));
} }
const _c3 = function (a0) { return { "background-color": a0, height: "18px", width: "50px" }; };
function KolComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-skeleton-loader", 23);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c3, ctx_r4.activeTheme.properties["--skeleton-color"]));
} }
const _c4 = function (a0) { return { "background-color": a0, height: "30px", width: "90px" }; };
function KolComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-skeleton-loader", 23);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c4, ctx_r6.activeTheme.properties["--skeleton-color"]));
} }
class KolComponent extends _classes_watcher__WEBPACK_IMPORTED_MODULE_4__.Watcher {
    constructor(dialogRef, data, apiService, dialog, modalsService, authService, themeService) {
        super();
        this.dialogRef = dialogRef;
        this.data = data;
        this.apiService = apiService;
        this.dialog = dialog;
        this.modalsService = modalsService;
        this.authService = authService;
        this.themeService = themeService;
        this.page = 1;
        this.pageSize = 9;
    }
    get profileImg() {
        return this.authService.randomAvatar;
    }
    get activeTheme() {
        return this.themeService.active;
    }
    get getRewards() {
        return this.kol.rewards;
    }
    get getQueryObj() {
        return {
            page: this.page,
            pageSize: this.pageSize,
        };
    }
    ngOnInit() {
        this.getUser();
    }
    getMockArray(number) {
        return Array(number);
    }
    getUser() {
        this.apiService
            .getUserById(this.data.user.id, this.getQueryObj)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unsubscribe))
            .subscribe((kol) => {
            this.kol = { ...this.data };
            this.kol.rewards = kol.data.rewards;
            this.page = kol.page;
            this.pageSize = kol.pageSize;
            this.totalCount = kol.count;
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
KolComponent.ɵfac = function KolComponent_Factory(t) { return new (t || KolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_modals_service__WEBPACK_IMPORTED_MODULE_2__.ModalsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService)); };
KolComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: KolComponent, selectors: [["cake-kol"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 2, consts: [["class", "slice-container animation-hidden-skeleton", 4, "ngIf", "ngIfElse"], ["skeleton", ""], ["skeletonText", ""], ["skeletonTextBig", ""], [1, "slice-container", "animation-hidden-skeleton"], [1, "close", "pointer", "clickable-icon", 3, "click"], ["svgIcon", "close-icon"], [1, "avatar"], ["loading", "lazy", "alt", ""], [1, "info"], [1, "rewards"], ["class", "reward", 3, "click", 4, "ngFor", "ngForOf"], [1, "pagination"], [3, "page", "pageSize", "count", "pageChange"], [1, "reward", 3, "click"], ["loading", "lazy", "alt", "", 3, "src"], [1, "type"], [1, "name"], [1, "cost"], [1, "sugar"], [1, "slice-container"], [1, "close", "pointer"], ["count", "1", "appearance", "circle", "animation", "progress-dark", 3, "theme"], ["count", "1", "appearance", "line", "animation", "progress-dark", 3, "theme"], ["class", "reward", 4, "ngFor", "ngForOf"], [1, "reward"], [3, "ngTemplateOutlet"]], template: function KolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, KolComponent_div_0_Template, 14, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, KolComponent_ng_template_1_Template, 11, 7, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, KolComponent_ng_template_3_Template, 1, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, KolComponent_ng_template_5_Template, 1, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.kol)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__.NgxSkeletonLoaderComponent, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe], styles: [".slice-container[_ngcontent-%COMP%] {\n  width: 610px;\n  height: -moz-fit-content;\n  height: fit-content;\n  position: relative;\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    height: 100vh;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.slice-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: var(--close-icon-color);\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Gilroy-400\";\n  font-size: 16px;\n  margin: 0;\n  color: var(--color-fonts-1);\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .slice-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 119px;\n  height: 119px;\n  background: linear-gradient(var(--deg-gradient-2), var(--color-gradient-left-2), var(--color-gradient-right-2));\n  border-radius: 50%;\n  margin: auto;\n}\n.slice-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  display: block;\n  object-fit: cover;\n  margin: auto;\n  width: 104px;\n  height: 104px;\n  padding-top: 2px;\n}\n.slice-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-list-color);\n  padding-bottom: 30px;\n}\n@media (max-width: 768px) {\n  .slice-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Santhony\";\n  font-weight: 400;\n  font-size: 40px;\n  background-color: var(--color-gradient-left-3);\n  background-image: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-align: center;\n  margin: 20px 0 0;\n}\n@media (max-width: 768px) {\n  .slice-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n    margin: 5px 0 0;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 245px;\n  max-width: 610px;\n  flex-wrap: wrap;\n  margin: auto;\n}\n.slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  width: 180px;\n  text-align: left;\n}\n@media (max-width: 768px) {\n  .slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%] {\n    width: 30%;\n    margin-top: 15px;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%], .slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   .sugar[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  object-fit: cover;\n  display: block;\n  margin: auto;\n  border-radius: 50%;\n}\n.slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 20px;\n  color: var(--color-fonts-2);\n}\n@media (max-width: 768px) {\n  .slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-600\";\n  font-size: 32px;\n  color: var(--color-fonts-2);\n  margin-top: 10px;\n}\n@media (max-width: 768px) {\n  .slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   .sugar[_ngcontent-%COMP%] {\n  color: var(--color-fonts-2);\n  text-align: left;\n}\n.slice-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtvbC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLFlBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUFERDtBQUdDO0VBTEQ7SUFNRSxpQkFBQTtJQUNBLGFBQUE7RUFBQTtBQUNGO0FBRUM7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FBQUY7QUFFRTtFQUNDLDZCQUFBO0FBQUg7QUFJQztFQXBCRDtJQXFCRSxzQkFBQTtFQURBO0FBQ0Y7QUFHQztFQUNDLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQURGO0FBR0U7RUFSRDtJQVNFLGVBQUE7RUFBRDtBQUNGO0FBR0M7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtHQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBREY7QUFHRTtFQUNDLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFESDtBQUtDO0VBQ0MsaURBQUE7RUFDQSxvQkFBQTtBQUhGO0FBS0U7RUFKRDtJQUtFLG9CQUFBO0VBRkQ7QUFDRjtBQUlFO0VBQ0MsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUNQRCw4Q0RRc0Q7RUNQdEQscUhBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RURLQyxrQkFBQTtFQUNBLGdCQUFBO0FBRUg7QUFBRztFQVJEO0lBU0UsZUFBQTtJQUNBLGVBQUE7RUFHRjtBQUNGO0FBQ0M7RUFDQyxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNIO0FBQ0c7RUFMRDtJQU1FLFVBQUE7SUFDQSxnQkFBQTtFQUVGO0FBQ0Y7QUFBRzs7O0VBR0MsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUNHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVHO0VBQ0MsZ0JBQUE7QUFBSjtBQUdHO0VBQ0MseUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFESjtBQUdJO0VBTEQ7SUFNRSxlQUFBO0VBQUg7QUFDRjtBQUdHO0VBQ0MseUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQURKO0FBR0k7RUFORDtJQU9FLGVBQUE7RUFBSDtBQUNGO0FBR0c7RUFDQywyQkFBQTtFQUNBLGdCQUFBO0FBREo7QUFNQztFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUpGIiwiZmlsZSI6ImtvbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9taXhpbnNcIjtcblxuLnNsaWNlLWNvbnRhaW5lciB7XG5cdHdpZHRoOiA2MTBweDtcblx0aGVpZ2h0OiBmaXQtY29udGVudDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcblx0XHRwYWRkaW5nLXRvcDogMjBweDtcblx0XHRoZWlnaHQ6IDEwMHZoO1xuXHR9XG5cblx0LmNsb3NlIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0dG9wOiAwO1xuICAgIFxuXHRcdG1hdC1pY29uIHtcblx0XHRcdGZpbGw6IHZhcigtLWNsb3NlLWljb24tY29sb3IpO1xuXHRcdH1cblx0fVxuXG5cdEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcblx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXHR9XG5cblx0aDMge1xuXHRcdG1hcmdpbjogMDtcblx0XHRmb250LWZhbWlseTogXCJHaWxyb3ktNDAwXCI7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdG1hcmdpbjogMDtcblx0XHRjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMSk7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0fVxuXHR9XG5cblx0LmF2YXRhciB7XG5cdFx0d2lkdGg6IDExOXB4O1xuXHRcdGhlaWdodDogMTE5cHg7XG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWRlZy1ncmFkaWVudC0yKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0yKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMikpO1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRtYXJnaW46IGF1dG87XG5cblx0XHRpbWcge1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdHdpZHRoOiAxMDRweDtcblx0XHRcdGhlaWdodDogMTA0cHg7XG5cdFx0XHRwYWRkaW5nLXRvcDogMnB4O1xuXHRcdH1cblx0fVxuXG5cdC5pbmZvIHtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpc3QtY29sb3IpO1xuXHRcdHBhZGRpbmctYm90dG9tOiAzMHB4O1xuXG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogMTBweDtcblx0XHR9XG5cblx0XHRoMSB7XG5cdFx0XHRmb250LWZhbWlseTogXCJTYW50aG9ueVwiO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdGZvbnQtc2l6ZTogNDBweDtcblx0XHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KHZhcigtLWRlZy1ncmFkaWVudC0zKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0zKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMykpO1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0bWFyZ2luOiAyMHB4IDAgMDtcblxuXHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMzJweDtcblx0XHRcdFx0bWFyZ2luOiA1cHggMCAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5yZXdhcmRzIHtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWluLWhlaWdodDogMjQ1cHg7XG5cdFx0bWF4LXdpZHRoOiA2MTBweDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXG5cdFx0LnJld2FyZCB7XG5cdFx0XHRtYXJnaW4tdG9wOiAzMHB4O1xuXHRcdFx0d2lkdGg6IDE4MHB4O1xuXHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblxuXHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRcdHdpZHRoOiAzMCU7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDE1cHg7XG5cdFx0XHR9XG5cblx0XHRcdC5uYW1lLFxuXHRcdFx0LmNvc3QsXG5cdFx0XHQuc3VnYXIge1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRcdH1cblxuXHRcdFx0aW1nIHtcblx0XHRcdFx0d2lkdGg6IDcycHg7XG5cdFx0XHRcdGhlaWdodDogNzJweDtcblx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdH1cblxuXHRcdFx0LnR5cGUge1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0fVxuXG5cdFx0XHQubmFtZSB7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkdpbHJveS00MDBcIjtcblx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG5cblx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5jb3N0IHtcblx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiR2lscm95LTYwMFwiO1xuXHRcdFx0XHRmb250LXNpemU6IDMycHg7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcblx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcblxuXHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnN1Z2FyIHtcblx0XHRcdFx0Y29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5wYWdpbmF0aW9uIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdH1cbn1cbiIsIkBtaXhpbiBidG4taG92ZXIoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gICAgYmFja2dyb3VuZDogJGJnO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIH1cbn1cblxuQG1peGluIGJ0bi1kaXNhYmxlZCgkdGV4dENvbG9yLCAkYmcsICRib3JkZXJDb2xvcikge1xuICAmOmRpc2FibGVkIHtcbiAgICBjb2xvcjogJHRleHRDb2xvcjtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gICAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xuICB9XG59XG5cbkBtaXhpbiBidG4tZGVmYXVsdCgkdGV4dENvbG9yLCAkYmcsICRib3JkZXJDb2xvcikge1xuICBjb2xvcjogJHRleHRDb2xvcjtcbiAgYmFja2dyb3VuZDogJGJnO1xuICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gIGJvcmRlci1pbWFnZS1zbGljZTogMTtcbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci1iZygkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcikge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xufVxuXG5AbWl4aW4gYm9yZGVyLWdyYWRpZW50LWxpbmVhcigkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcikge1xuICBib3JkZXItaW1hZ2U6ICBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZWFyLWJvcmRlcihcbiAgJGRlZyxcbiAgJGxlZnRDb2xvcixcbiAgJHJpZ2h0Q29sb3IsXG4gICRib3JkZXJXaWR0aCxcbiAgJGJvcmRlclJhZGl1c1xuKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDA7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xuICAgIHBhZGRpbmc6ICRib3JkZXJXaWR0aDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xuICAgIC13ZWJraXQtbWFzazogbGluZWFyLWdyYWRpZW50KCNmZmYgMCAwKSBjb250ZW50LWJveCxcbiAgICAgIC8qIFsxXSAqLyBsaW5lYXItZ3JhZGllbnQoI2ZmZiAwIDApOyAvKiBbMl0gKi9cbiAgICAtd2Via2l0LW1hc2stY29tcG9zaXRlOiB4b3I7IC8qIFszXSDQtNC70Y8g0L/RltC00YLRgNC40LzQutC4INCx0YDQsNGD0LfQtdGA0ZbQsiAqL1xuICAgIG1hc2stY29tcG9zaXRlOiBleGNsdWRlOyAvKiBbM10gKi9cbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZWFyLXRleHQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxlZnRDb2xvcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZWFyLWV2ZW50cy1saXZlKCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsZWZ0Q29sb3I7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVyLXNwYW4tdGV4dCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcil7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCB2YXIoLS1kZWctZ3JhZGllbnQtMyksXG4gIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMyksXG4gIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTMpKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuQG1peGluIGVycm9yLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LWZhbWlseTogJ0dpbHJveS01MDAnO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgQGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLXRleHQoXG4gICAgdmFyKC0tZGVnLWdyYWRpZW50LTQpLFxuICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtNCksXG4gICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtNClcbiAgKTtcbn1cblxuQG1peGluIEdpbHJveS00MDAtMTYtZm9udHMtMiB7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95LTQwMCc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQG1peGluIEdpbHJveS01MDAtMzAtZm9udHMtMiB7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95LTUwMCc7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQG1peGluIEdpbHJveS02MDAtMTQtZm9udHMtMiB7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95LTYwMCc7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2774:
/*!************************************************************************************!*\
  !*** ./apps/frontend/src/app/shared/components/pagination/pagination.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 7661);



class PaginationComponent {
    constructor() {
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    get getPages() {
        return Math.ceil(this.count / this.pageSize) || 1;
    }
    firstPage() {
        if (this.page !== 1) {
            this.pageChange.emit(1);
        }
    }
    lastPage() {
        if (this.getPages !== this.page) {
            this.pageChange.emit(this.getPages);
        }
    }
    nextPage() {
        if (this.getPages !== this.page) {
            this.pageChange.emit(this.page + 1);
        }
    }
    previousPage() {
        if (1 !== this.page) {
            this.pageChange.emit(this.page - 1);
        }
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["cake-pagination"]], inputs: { page: "page", pageSize: "pageSize", count: "count" }, outputs: { pageChange: "pageChange" }, decls: 14, vars: 2, consts: [[1, "pagination"], [1, "wrapper"], [1, "left-arrows", "pointer"], [1, "double", 3, "click"], ["svgIcon", "double-left"], [1, "arrow", "pointer", 3, "click"], ["svgIcon", "arrow-left"], [1, "pages"], [1, "right-arrows"], ["svgIcon", "arrow-right"], [1, "double", "pointer", 3, "click"], ["svgIcon", "double-right"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_div_click_3_listener() { return ctx.firstPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_div_click_5_listener() { return ctx.previousPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_div_click_10_listener() { return ctx.nextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_div_click_12_listener() { return ctx.lastPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.page, " of ", ctx.getPages, " ");
    } }, dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon], styles: [".pagination[_ngcontent-%COMP%] {\n  margin: 25px auto auto;\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.pagination[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  width: 250px;\n  display: flex;\n  justify-content: center;\n}\n.pagination[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-500\";\n  font-size: 16px;\n  color: var(--color-fonts-2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.pagination[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .left-arrows[_ngcontent-%COMP%] {\n  display: flex;\n}\n.pagination[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .right-arrows[_ngcontent-%COMP%] {\n  display: flex;\n}\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  height: 16px !important;\n  width: 16px !important;\n}\n.arrow[_ngcontent-%COMP%] {\n  width: 40px !important;\n  height: 40px !important;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.double[_ngcontent-%COMP%] {\n  width: 40px !important;\n  height: 40px !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmat-icon[_ngcontent-%COMP%] {\n  overflow: visible;\n  width: 9px;\n  height: 9px;\n  cursor: pointer;\n}\nmat-icon[_ngcontent-%COMP%]     svg path {\n  stroke: var(--color-fonts-list-head);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUVBLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUFKO0FBRUk7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQU47QUFHSTtFQUNFLGFBQUE7QUFETjtBQUlJO0VBQ0UsYUFBQTtBQUZOO0FBT0E7RUFDRSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFKRjtBQU9BO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUxGO0FBUUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFMRjtBQVFBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFMRjtBQVFJO0VBQ0Usb0NBQUE7QUFOTiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2luYXRpb24ge1xuICBtYXJnaW46IDI1cHggYXV0byBhdXRvO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAud3JhcHBlciB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAucGFnZXMge1xuICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNTAwJztcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmxlZnQtYXJyb3dzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLnJpZ2h0LWFycm93cyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgfVxufVxuXG4ubWF0LWljb24ge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hcnJvdyB7XG4gIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kb3VibGUge1xuICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbm1hdC1pY29uIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHdpZHRoOiA5cHg7XG4gIGhlaWdodDogOXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgOjpuZy1kZWVwIHN2ZyB7XG4gICAgcGF0aCB7XG4gICAgICBzdHJva2U6IHZhcigtLWNvbG9yLWZvbnRzLWxpc3QtaGVhZCk7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 1325:
/*!****************************************************************************!*\
  !*** ./apps/frontend/src/app/shared/components/reward/reward.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardComponent": () => (/* binding */ RewardComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 6053);
/* harmony import */ var _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cake/lib-api-interface */ 171);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 5231);
/* harmony import */ var _core_types_Themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/types/Themes */ 6251);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api.service */ 554);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ 5894);
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/modals.service */ 5414);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/theme.service */ 1266);
/* harmony import */ var _classes_watcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../classes/watcher */ 34);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7661);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-skeleton-loader */ 3453);
/* harmony import */ var _cakebox_cakebox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cakebox/cakebox.component */ 3755);
/* harmony import */ var _core_pipes_cakebox_transform_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/pipes/cakebox-transform.pipe */ 7603);




















function RewardComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "cake-cakebox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "cakeboxTransform");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("cakebox", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r7.reward));
} }
function RewardComponent_div_0_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 21)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const rewardInBox_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("src", rewardInBox_r16.smallImage || rewardInBox_r16.image, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", rewardInBox_r16.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](rewardInBox_r16.name);
} }
function RewardComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RewardComponent_div_0_div_14_div_1_Template, 7, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r8.reward.rewards);
} }
function RewardComponent_div_0_div_15_li_30_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RewardComponent_div_0_div_15_li_30_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r19.showHistory = !ctx_r19.showHistory); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Transaction history ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("revers", ctx_r17.showHistory);
} }
function RewardComponent_div_0_div_15_div_31_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 40)(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const transaction_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](transaction_r22.createdAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](transaction_r22.User.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 3, transaction_r22.amount), "");
} }
function RewardComponent_div_0_div_15_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 32)(1, "ul")(2, "li", 33)(3, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "h2", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Owner's Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "h2", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, RewardComponent_div_0_div_15_div_31_li_9_Template, 8, 5, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 38)(11, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RewardComponent_div_0_div_15_div_31_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r23.showFullHistory = !ctx_r23.showFullHistory); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("show-history", ctx_r18.showHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("show-full-history", ctx_r18.showFullHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r18.reward.TransactionHystory);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r18.showFullHistory ? "Hide" : "See", " full history");
} }
function RewardComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Sugar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 25)(11, "ul")(12, "li")(13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, " Rarity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "li")(19, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](23, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "li")(25, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, " Created ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, RewardComponent_div_0_div_15_li_30_Template, 5, 2, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, RewardComponent_div_0_div_15_div_31_Template, 13, 6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r9.reward.cost ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 6, ctx_r9.reward.cost) : "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 8, ctx_r9.reward.rarity), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](23, 10, ctx_r9.reward.category), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](29, 12, ctx_r9.reward.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r9.reward.TransactionHystory.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r9.reward.TransactionHystory.length);
} }
function RewardComponent_div_0_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 41)(1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RewardComponent_div_0_div_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r25.getReward()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Get it");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function RewardComponent_div_0_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 41)(1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RewardComponent_div_0_div_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r27.putIntoConfectionary()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Put into confectionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function RewardComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 41)(1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RewardComponent_div_0_div_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r29.removeFromConfectionary()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Remove from confectionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function RewardComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 41)(1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RewardComponent_div_0_div_20_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r31.claimCakebox()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Claim");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function RewardComponent_div_0_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 43)(1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RewardComponent_div_0_div_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r33.dialogRef.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function RewardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 4)(1, "div")(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RewardComponent_div_0_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r35.dialogRef.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, RewardComponent_div_0_div_6_Template, 3, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 10)(8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, RewardComponent_div_0_div_14_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, RewardComponent_div_0_div_15_Template, 32, 14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, RewardComponent_div_0_div_17_Template, 3, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, RewardComponent_div_0_div_18_Template, 3, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, RewardComponent_div_0_div_19_Template, 3, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, RewardComponent_div_0_div_20_Template, 3, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, RewardComponent_div_0_div_21_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("cakebox-container", ctx_r0.reward.type === ctx_r0.rewardEnum.CAKEBOX);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("svgIcon", ctx_r0.closeCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("hide-img", ctx_r0.showHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("src", ctx_r0.reward.image, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.reward.type === ctx_r0.rewardEnum.CAKEBOX && !ctx_r0.showHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 16, ctx_r0.reward.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.reward.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.reward.type === ctx_r0.rewardEnum.CAKEBOX);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.data.isClaimed);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.data.isClaimed && ctx_r0.reward.userId !== ctx_r0.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.data.isClaimed && ctx_r0.reward.userId === ctx_r0.userId && !ctx_r0.reward.isConfectionary);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.data.isClaimed && ctx_r0.reward.userId === ctx_r0.userId && ctx_r0.reward.isConfectionary);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.data.isClaimed);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.data.isClaimed);
} }
const _c0 = function (a0) { return { "background-color": a0, height: "380px", width: "100%", "border-radius": "12px" }; };
function RewardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 44)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ngx-skeleton-loader", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](4, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](6, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 11)(8, "div", 22)(9, "div", 23)(10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](11, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](13, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](15, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 25)(17, "ul")(18, "li")(19, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, " Rarity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](22, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "li")(24, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](27, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "li")(29, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, " Created ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](32, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RewardComponent_ng_template_1_Template_li_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r37.showHistory = !ctx_r37.showHistory); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, " Transaction history ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](37, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 41)(39, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "Get it");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](4);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](11, _c0, ctx_r2.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("revers", ctx_r2.showHistory);
} }
const _c1 = function (a0) { return { "background-color": a0, height: "18px", width: "50px", "border-radius": "2px" }; };
function RewardComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-skeleton-loader", 45);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](1, _c1, ctx_r4.activeTheme.properties["--skeleton-color"]));
} }
const _c2 = function (a0) { return { "background-color": a0, height: "26px", width: "60px", "border-radius": "2px" }; };
function RewardComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-skeleton-loader", 45);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](1, _c2, ctx_r6.activeTheme.properties["--skeleton-color"]));
} }
class RewardComponent extends _classes_watcher__WEBPACK_IMPORTED_MODULE_6__.Watcher {
    constructor(dialogRef, data, apiService, themeService, modalService, authService) {
        super();
        this.dialogRef = dialogRef;
        this.data = data;
        this.apiService = apiService;
        this.themeService = themeService;
        this.modalService = modalService;
        this.authService = authService;
        this.rewardEnum = _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.RewardEnum;
        this.showHistory = false;
        this.showFullHistory = false;
    }
    get activeTheme() {
        return this.themeService.active;
    }
    get userId() {
        return this.authService.getDecodedToken()?.data.id || '';
    }
    ngOnInit() {
        this.apiService.getRewardById(this.data.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribe)).subscribe((reward) => {
            this.reward = reward.data;
        });
    }
    getReward() {
        this.modalService.getRewardPopup(this.reward);
        this.dialogRef.close();
    }
    claimCakebox() {
        this.apiService.claimCakebox(this.reward.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribe)).subscribe();
        this.dialogRef.close();
    }
    putIntoConfectionary() {
        this.apiService.toConfectionary(this.reward.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribe)).subscribe(() => {
            this.reward.isConfectionary = true;
        });
    }
    removeFromConfectionary() {
        this.apiService.RemoveFromConfectionary(this.reward.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribe)).subscribe(() => {
            this.reward.isConfectionary = false;
        });
    }
    get closeCircle() {
        return this.activeTheme === _core_types_Themes__WEBPACK_IMPORTED_MODULE_1__.LightTheme ? 'close-light' : 'close-dark';
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
RewardComponent.ɵfac = function RewardComponent_Factory(t) { return new (t || RewardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_5__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_modals_service__WEBPACK_IMPORTED_MODULE_4__.ModalsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
RewardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: RewardComponent, selectors: [["cake-reward"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 2, consts: [["class", "slice-container animation-hidden-skeleton", 3, "cakebox-container", 4, "ngIf", "ngIfElse"], ["skeleton", ""], ["skeletonText", ""], ["skeletonTextBig", ""], [1, "slice-container", "animation-hidden-skeleton"], [1, "close", "pointer", "clickable-icon", 3, "click"], [3, "svgIcon"], [1, "image"], ["loading", "lazy", "alt", ""], ["class", "cakebox", 4, "ngIf"], [1, "title"], [1, "flex"], ["class", "cake-box-items", 4, "ngIf"], ["class", "information-block", 4, "ngIf"], ["class", "get-it-btn", 4, "ngIf"], ["class", "cancel-btn", 4, "ngIf"], [1, "cakebox"], [3, "cakebox"], [1, "cake-box-items"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "text"], [1, "information-block"], [1, "stats"], [1, "cost"], [1, "info"], [1, "name"], [1, "value"], ["class", "pointer", 3, "click", 4, "ngIf"], ["class", "transaction-history", 3, "show-history", 4, "ngIf"], [1, "pointer", 3, "click"], ["svgIcon", "arrow-down"], [1, "transaction-history"], [1, "row", "header"], [1, "col", "date"], [1, "col", "owner"], [1, "col", "price"], ["class", "row list", 4, "ngFor", "ngForOf"], [1, "full-history"], [1, "button", "tertiary", 3, "click"], [1, "row", "list"], [1, "get-it-btn"], [1, "button", "primary", 3, "click"], [1, "cancel-btn"], [1, "slice-container"], ["count", "1", "appearance", "line", "animation", "progress-dark", 3, "theme"], [3, "ngTemplateOutlet"], [1, "button", "primary"]], template: function RewardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, RewardComponent_div_0_Template, 22, 18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RewardComponent_ng_template_1_Template, 41, 13, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, RewardComponent_ng_template_3_Template, 1, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, RewardComponent_ng_template_5_Template, 1, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.reward)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_14__.NgxSkeletonLoaderComponent, _cakebox_cakebox_component__WEBPACK_IMPORTED_MODULE_7__.CakeboxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, _core_pipes_cakebox_transform_pipe__WEBPACK_IMPORTED_MODULE_8__.CakeboxTransformPipe], styles: ["@-moz-document url-prefix() {\n  @media (max-width: 1023px) {\n    .cakebox {\n      transform: scale(0.6);\n      transform-origin: left top;\n      width: 166.6666666667%;\n      height: 166.6666666667%;\n    }\n  }\n}\n.slice-container[_ngcontent-%COMP%] {\n  width: 610px;\n  height: 90vh;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    height: 80vh;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  transition: 0.3s ease-in;\n  position: relative;\n  width: 100%;\n  height: 380px;\n  overflow: hidden;\n}\n@media (max-width: 767px) {\n  .slice-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    width: 336px;\n    height: 336px;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n@media (max-width: 350px) {\n  .slice-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    width: 310px;\n    height: 310px;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .image.hide-img[_ngcontent-%COMP%] {\n  height: 0;\n}\n.slice-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.slice-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%] {\n  animation: 0.3s show_box ease-in-out;\n  position: absolute;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  left: 50%;\n  top: 10%;\n  transform: translateX(-50%);\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%] {\n    top: -22%;\n    zoom: 0.6;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 16px;\n  margin: 0;\n  color: var(--color-fonts-1);\n}\n.slice-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-500\";\n  font-size: 22px;\n  margin: 0;\n  color: var(--color-fonts-2);\n}\n.slice-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  width: 100%;\n  border-bottom: 1px solid var(--border-list-color);\n}\n@media (max-width: 767px) {\n  .slice-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 14px;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n@media (max-width: 767px) {\n  .slice-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 19px;\n    margin: 0 0 5px 0;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  padding-top: 35px;\n  display: flex;\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .cake-box-items[_ngcontent-%COMP%] {\n  width: 325px;\n  border-right: 1px solid var(--border-list-color);\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .cake-box-items[_ngcontent-%COMP%] {\n    width: 100%;\n    border-right: none;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .cake-box-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-list-color);\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .cake-box-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  object-fit: cover;\n  border-radius: 50px;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .cake-box-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .cake-box-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 20px;\n  margin: 3px 0 0;\n  color: var(--color-fonts-2);\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-600\";\n  font-size: 32px;\n  margin: 5px 0 0;\n  color: var(--color-fonts-2);\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-list-color);\n  padding-bottom: 25px;\n}\n@media (max-width: 767px) {\n  .slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 14px;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-600\";\n  font-size: 24px;\n  line-height: 29px;\n}\n@media (max-width: 767px) {\n  .slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 29px;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-500\";\n  font-size: 16px;\n  margin: 0;\n  color: var(--color-fonts-2);\n}\n@media (max-width: 767px) {\n  .slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding-top: 25px;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0;\n  color: var(--color-fonts-2);\n  padding: 5px 0;\n}\n@media (max-width: 767px) {\n  .slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 3px 0;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 20px;\n}\n@media (max-width: 767px) {\n  .slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 22px;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-500\";\n  font-size: 18px;\n  transition: 0.2s ease-in;\n}\n@media (max-width: 767px) {\n  .slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 19px;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .value.revers[_ngcontent-%COMP%] {\n  transition: 0.2s ease-in;\n  transform: rotate(180deg);\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: translateY(5px);\n  margin-top: -5px;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]     svg path {\n  stroke: var(--color-fonts-2);\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .transaction-history[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  height: 0;\n  transition: 0.2s ease-in;\n  overflow: hidden;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .transaction-history.show-history[_ngcontent-%COMP%] {\n  transition: 0.2s ease-in;\n  height: 200px;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .transaction-history.show-history[_ngcontent-%COMP%]:has(.show-full-history) {\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .transaction-history[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0 0 10px;\n  overflow: hidden;\n  height: 150px;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .transaction-history[_ngcontent-%COMP%]   ul.show-full-history[_ngcontent-%COMP%] {\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .transaction-history[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n}\n@media (max-width: 767px) {\n  .slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .transaction-history[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .row.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n    line-height: 14px !important;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .transaction-history[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%] {\n  color: var(--color-fonts-2);\n  font-family: \"Gilroy-400\";\n  font-size: 16px;\n}\n@media (max-width: 767px) {\n  .slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .transaction-history[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 17px;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .transaction-history[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-600\";\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .transaction-history[_ngcontent-%COMP%]   .full-history[_ngcontent-%COMP%] {\n  width: 202px;\n  margin: auto;\n}\n.slice-container[_ngcontent-%COMP%]   .get-it-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 18px 16px 16px 0;\n  padding-bottom: 20px;\n}\n.slice-container[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  width: 202px;\n  margin: auto;\n  padding-bottom: 20px;\n}\n.cakebox-container[_ngcontent-%COMP%] {\n  width: 930px;\n}\n@media (max-width: 1023px) {\n  .cakebox-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.cakebox-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  height: 279px;\n  overflow: initial;\n}\n@media (max-width: 1023px) {\n  .cakebox-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    height: 90px;\n  }\n}\n.cakebox-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n.cakebox-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  width: calc(100% - 325px);\n}\n@media (max-width: 1023px) {\n  .cakebox-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 0;\n  }\n}\n@keyframes show_box {\n  0% {\n    opacity: 0;\n  }\n  90% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.clickable-icon[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  display: table-cell;\n  vertical-align: middle;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJld2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJO0lBREY7TUFFSSxxQkFBQTtNQUNBLDBCQUFBO01BQ0Esc0JBQUE7TUFDQSx1QkFBQTtJQURGO0VBQ0Y7QUFDRjtBQUtBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBSEY7QUFLRTtFQVJGO0lBU0ksaUJBQUE7SUFDQSxZQUFBO0VBRkY7QUFDRjtBQUlFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUFGSjtBQUlJO0VBTkY7SUFPSSxjQUFBO0VBREo7QUFDRjtBQUlFO0VBeEJGO0lBeUJJLHNCQUFBO0VBREY7QUFDRjtBQUdFO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUdJO0VBUEY7SUFRSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFNBQUE7SUFDQSwyQkFBQTtFQUFKO0FBQ0Y7QUFFSTtFQWRGO0lBZUksWUFBQTtJQUNBLGFBQUE7RUFDSjtBQUNGO0FBQ0k7RUFDRSxTQUFBO0FBQ047QUFFSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFOO0FBR0k7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBRE47QUFHTTtFQVRGO0lBVUksU0FBQTtJQUNBLFNBQUE7RUFBTjtBQUNGO0FBSUU7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUFGSjtBQUtFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBSEo7QUFNRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlEQUFBO0FBSko7QUFNTTtFQURGO0lBRUksZUFBQTtJQUNBLGlCQUFBO0VBSE47QUFDRjtBQU1JO0VBQ0UsYUFBQTtBQUpOO0FBTU07RUFIRjtJQUlJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBSE47QUFDRjtBQU9FO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FBTEo7QUFPSTtFQUpGO0lBS0ksc0JBQUE7RUFKSjtBQUNGO0FBTUk7RUFDRSxZQUFBO0VBQ0EsZ0RBQUE7QUFKTjtBQUtNO0VBSEY7SUFJSSxXQUFBO0lBQ0Esa0JBQUE7RUFGTjtBQUNGO0FBSU07RUFDRSxpREFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFGUjtBQUlRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRlY7QUFLUTtFQUNFLGlCQUFBO0FBSFY7QUFLVTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQUhaO0FBU0k7RUFDRSxXQUFBO0FBUE47QUFTTTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQVBSO0FBVU07RUFDRSxpREFBQTtFQUNBLG9CQUFBO0FBUlI7QUFZWTtFQURGO0lBRUksZUFBQTtJQUNBLGlCQUFBO0VBVFo7QUFDRjtBQVdVO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFUWjtBQVdZO0VBTEY7SUFNSSxlQUFBO0lBQ0EsaUJBQUE7RUFSWjtBQUNGO0FBWVE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUFWVjtBQVlVO0VBTkY7SUFPSSxlQUFBO0lBQ0EsaUJBQUE7RUFUVjtBQUNGO0FBYU07RUFDRSxpQkFBQTtBQVhSO0FBYVE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQVhWO0FBYVU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBWFo7QUFhWTtFQVBGO0lBUUcsY0FBQTtFQVZYO0FBQ0Y7QUFZWTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQVZkO0FBWWM7RUFKRjtJQUtJLGVBQUE7SUFDQSxpQkFBQTtFQVRkO0FBQ0Y7QUFZWTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBVmQ7QUFZYztFQUxGO0lBTUksZUFBQTtJQUNBLGlCQUFBO0VBVGQ7QUFDRjtBQVdjO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtBQVRoQjtBQVljO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtBQVZoQjtBQWFrQjtFQUNFLDRCQUFBO0FBWHBCO0FBb0JNO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQWxCUjtBQW9CUTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtBQWxCVjtBQW1CVTtFQUNFLHdCQUFBO0VBQUEsbUJBQUE7QUFqQlo7QUFxQlE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFuQlY7QUFxQlU7RUFDRSx3QkFBQTtFQUFBLG1CQUFBO0FBbkJaO0FBc0JVO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQXBCWjtBQXdCZ0I7RUFERjtJQUVJLDBCQUFBO0lBQ0EsNEJBQUE7RUFyQmhCO0FBQ0Y7QUF5Qlk7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQXZCZDtBQXlCYztFQUxGO0lBTUksZUFBQTtJQUNBLGlCQUFBO0VBdEJkO0FBQ0Y7QUF3QmM7RUFDRSx5QkFBQTtBQXRCaEI7QUE0QlE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQTFCVjtBQWdDRTtFQUNFLFdBQUE7RUFFQSx3QkFBQTtFQUNBLG9CQUFBO0FBL0JKO0FBaUNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQS9CSjtBQW1DQTtFQUNFLFlBQUE7QUFoQ0Y7QUFrQ0U7RUFIRjtJQUlJLFdBQUE7RUEvQkY7QUFDRjtBQWlDRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQS9CSjtBQWlDSTtFQUpGO0lBS0ksWUFBQTtFQTlCSjtBQUNGO0FBaUNFO0VBQ0UsY0FBQTtBQS9CSjtBQWlDSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUEvQk47QUFnQ007RUFIRjtJQUlJLFdBQUE7SUFDQSxlQUFBO0VBN0JOO0FBQ0Y7QUFrQ0E7RUFDRTtJQUNFLFVBQUE7RUEvQkY7RUFpQ0E7SUFDRSxVQUFBO0VBL0JGO0VBaUNBO0lBQ0UsVUFBQTtFQS9CRjtBQUNGO0FBbUNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFqQ0YiLCJmaWxlIjoicmV3YXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwvbWl4aW5zJztcblxuQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgLmNha2Vib3gge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDAuNik7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAvIDAuNik7XG4gICAgfVxuICAgICBcbiAgICAgfVxuICAgfVxuXG4uc2xpY2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDYxMHB4O1xuICBoZWlnaHQ6IDkwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gIH1cblxuICAuY2xvc2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmltYWdlIHtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzgwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgd2lkdGg6IDMzNnB4O1xuICAgICAgaGVpZ2h0OiAzMzZweDtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgICAgIHdpZHRoOiAzMTBweDtcbiAgICAgIGhlaWdodDogMzEwcHg7XG4gICAgfVxuXG4gICAgJi5oaWRlLWltZyB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cblxuICAgIC5jYWtlYm94IHtcbiAgICAgIGFuaW1hdGlvbjogMC4zcyBzaG93X2JveCBlYXNlLWluLW91dDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0b3A6IDEwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgICAgICB0b3A6IC0yMiU7XG4gICAgICAgIHpvb206IDAuNjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNDAwJztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0xKTtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogJ0dpbHJveS01MDAnO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlzdC1jb2xvcik7XG4gICAgaDIge1xuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgbWFyZ2luOiA1cHggMDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgIG1hcmdpbjowIDAgNXB4IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZsZXgge1xuICAgIHBhZGRpbmctdG9wOiAzNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5jYWtlLWJveC1pdGVtcyB7XG4gICAgICB3aWR0aDogMzI1cHg7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlzdC1jb2xvcik7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5pdGVtIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saXN0LWNvbG9yKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95LTQwMCc7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDNweCAwIDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmluZm9ybWF0aW9uLWJsb2NrIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95LTYwMCc7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgbWFyZ2luOiA1cHggMCAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gICAgICB9XG5cbiAgICAgIC5zdGF0cyB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlzdC1jb2xvcik7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuXG4gICAgICAgIC5jb3N0IHtcbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNjAwJztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0dpbHJveS01MDAnO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmluZm8ge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcblxuICAgICAgICB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95LTQwMCc7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcblxuICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNTAwJztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW47XG5cbiAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi5yZXZlcnMge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG5cbiAgICAgICAgICAgICAgICA6Om5nLWRlZXAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgIHBhdGgge1xuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudHJhbnNhY3Rpb24taGlzdG9yeSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgICYuc2hvdy1oaXN0b3J5IHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW47XG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAmOmhhcyguc2hvdy1mdWxsLWhpc3RvcnkpIHtcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGhlaWdodDogMTUwcHg7XG5cbiAgICAgICAgICAmLnNob3ctZnVsbC1oaXN0b3J5IHtcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDA7XG5cbiAgICAgICAgICAgICYuaGVhZGVyIHtcbiAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmxpc3Qge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95LTQwMCc7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95LTYwMCc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZnVsbC1oaXN0b3J5IHtcbiAgICAgICAgICB3aWR0aDogMjAycHg7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmdldC1pdC1idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgbWFyZ2luOiAxOHB4IDE2cHggMTZweCAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG4gIC5jYW5jZWwtYnRuIHtcbiAgICB3aWR0aDogMjAycHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG59XG5cbi5jYWtlYm94LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MzBweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuaW1hZ2Uge1xuICAgIGhlaWdodDogMjc5cHg7XG4gICAgb3ZlcmZsb3c6IGluaXRpYWw7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgfVxuICB9XG5cbiAgLmZsZXgge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuXG4gICAgLmluZm9ybWF0aW9uLWJsb2NrIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMjVweCk7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBrZXlmcmFtZXMgc2hvd19ib3gge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA5MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5cbi5jbGlja2FibGUtaWNvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */"] });


/***/ }),

/***/ 8126:
/*!**********************************************************************************************!*\
  !*** ./apps/frontend/src/app/shared/components/rewards-options/rewards-options.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardsOptionsComponent": () => (/* binding */ RewardsOptionsComponent)
/* harmony export */ });
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api.service */ 554);
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/modals.service */ 5414);
/* harmony import */ var _services_reward_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/reward.service */ 7008);
/* harmony import */ var _classes_watcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/watcher */ 34);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 6053);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2954);











function RewardsOptionsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RewardsOptionsComponent_ng_container_4_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const option_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onMenuOptionClick(option_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r1);
} }
class RewardsOptionsComponent extends _classes_watcher__WEBPACK_IMPORTED_MODULE_3__.Watcher {
    constructor(dialog, modalService, apiService, rewardService) {
        super();
        this.dialog = dialog;
        this.modalService = modalService;
        this.apiService = apiService;
        this.rewardService = rewardService;
    }
    onMenuOptionClick(option) {
        if (option === 'View details') {
            this.onViewDetailsClick();
        }
        else if (option === 'Share') {
            // TODO: Implement on Share click
        }
        else if (option === 'Put into confectionary') {
            this.apiService.toConfectionary(this.reward.id).pipe().subscribe(() => {
                this.rewardService.toConfectionaryTrigger.next(null);
            });
        }
        else if (option === 'Remove from confectionary') {
            this.apiService.RemoveFromConfectionary(this.reward.id).pipe().subscribe(() => {
                this.rewardService.toConfectionaryTrigger.next(null);
            });
        }
    }
    get OPTIONS() {
        return ['View details', ...(this.reward?.isConfectionary ? ['Remove from confectionary'] : ['Put into confectionary'])];
    }
    onViewDetailsClick() {
        this.modalService.openRewardPopup(this.reward.id);
    }
}
RewardsOptionsComponent.ɵfac = function RewardsOptionsComponent_Factory(t) { return new (t || RewardsOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_modals_service__WEBPACK_IMPORTED_MODULE_1__.ModalsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_reward_service__WEBPACK_IMPORTED_MODULE_2__.RewardService)); };
RewardsOptionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RewardsOptionsComponent, selectors: [["cake-rewards-options"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 3, consts: [[1, "wrapper"], [1, "container"], [1, "arrow"], [1, "content"], [4, "ngFor", "ngForOf"], [1, "item", "pointer", 3, "click"]], template: function RewardsOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, RewardsOptionsComponent_ng_container_4_Template, 4, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", ctx.top + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.OPTIONS);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 8px;\n  z-index: 99999;\n  position: fixed;\n  width: calc(100% - 16px);\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  background: var(--reward-dropdown-color);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n  border-radius: 12px;\n  padding: 4px 0px;\n  position: relative;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  right: 21px;\n  top: -24px;\n  background: var(--reward-dropdown-color);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n  clip-path: polygon(100% 0, 0% 100%, 100% 100%);\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  height: 54px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-500\";\n  font-size: 16px;\n  line-height: 22px;\n  color: var(--color-fonts-3);\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJld2FyZHMtb3B0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQUNGO0FBQUU7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQURJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsOENBQUE7QUFHTjtBQURJO0VBQ0UsV0FBQTtBQUdOO0FBRk07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSVI7QUFIUTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFLVjtBQUhRO0VBQ0UsaURBQUE7QUFLViIsImZpbGUiOiJyZXdhcmRzLW9wdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgOHB4O1xuICB6LWluZGV4OiA5OTk5OTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gIC5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXJld2FyZC1kcm9wZG93bi1jb2xvcik7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuYXJyb3cge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICByaWdodDogMjFweDtcbiAgICAgIHRvcDogLTI0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZXdhcmQtZHJvcGRvd24tY29sb3IpO1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG4gICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwLCAwJSAxMDAlLCAxMDAlIDEwMCUpO1xuICAgIH1cbiAgICAuY29udGVudCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC5pdGVtIHtcbiAgICAgICAgaGVpZ2h0OiA1NHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95LTUwMCc7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0zKTtcbiAgICAgICAgfVxuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8416:
/*!******************************************************************************!*\
  !*** ./apps/frontend/src/app/shared/components/tooltip/tooltip.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipComponent": () => (/* binding */ TooltipComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7661);



class TooltipComponent {
    constructor() {
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
        this.tooltip = '';
        this.left = 0;
        this.top = 0;
    }
    destroy() {
        this.destroyed$.next(false);
        this.destroyed$.complete();
    }
}
TooltipComponent.ɵfac = function TooltipComponent_Factory(t) { return new (t || TooltipComponent)(); };
TooltipComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TooltipComponent, selectors: [["cake-tooltip"]], decls: 7, vars: 6, consts: [[1, "tooltip"], [1, "wrapper"], [1, "close-btn"], [3, "svgIcon", "click"], [1, "content", 2, "width", "100%", "height", "100%", "display", "flex", "align-items", "center", "justify-content", "center", "text-align", "center", "margin", "-20px -10px 0 0", "word-break", "break-word"], [1, "tooltip-text"]], template: function TooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TooltipComponent_Template_mat_icon_click_3_listener() { return ctx.destroy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("left", ctx.left + "px")("top", ctx.top + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", "close-tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.tooltip, " ");
    } }, dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon], styles: [".tooltip[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: var(--color-tertiary-input);\n  border-radius: 4px;\n  color: var(--color-tooltip-text);\n  font-family: Arial;\n  padding: 3px 6px;\n  font-size: 13px;\n  margin-top: 5px;\n  transform: translateX(-50%);\n  width: 232px;\n  height: 108px;\n  z-index: 99999;\n}\n.tooltip[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid var(--color-tertiary-input);\n  position: absolute;\n  left: calc(50% - 5px);\n  bottom: -5px;\n  transform: rotate(180deg);\n}\n.tooltip[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 10px;\n}\n.tooltip[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: right;\n}\n.tooltip[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: var(--size-tooltip-close);\n  height: var(--size-tooltip-close);\n}\n.tooltip[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]     svg path {\n  stroke: var(--color-tooltip-close);\n}\n.tooltip[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2x0aXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFDRDtBQUFDO0VBQ0MsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLG9EQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUVGO0FBQ0M7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQUU7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7QUFFSDtBQURHO0VBQ0MscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FBR0o7QUFESztFQUNDLGtDQUFBO0FBR047QUFBSTtFQUNDLGVBQUE7QUFFTCIsImZpbGUiOiJ0b29sdGlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2x0aXAge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlcnRpYXJ5LWlucHV0KTtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRjb2xvcjogdmFyKC0tY29sb3ItdG9vbHRpcC10ZXh0KTtcblx0Zm9udC1mYW1pbHk6IEFyaWFsO1xuXHRwYWRkaW5nOiAzcHggNnB4O1xuXHRmb250LXNpemU6IDEzcHg7XG5cdG1hcmdpbi10b3A6IDVweDtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXHR3aWR0aDogMjMycHg7XG5cdGhlaWdodDogMTA4cHg7XG5cdHotaW5kZXg6IDk5OTk5O1xuXHQmOjpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0d2lkdGg6IDA7XG5cdFx0aGVpZ2h0OiAwO1xuXHRcdGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0Ym9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLWNvbG9yLXRlcnRpYXJ5LWlucHV0KTtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogY2FsYyg1MCUgLSA1cHgpO1xuXHRcdGJvdHRvbTogLTVweDtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuXHR9XG5cblx0LndyYXBwZXIge1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdC5jbG9zZS1idG4ge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR0ZXh0LWFsaWduOiByaWdodDtcblx0XHRcdG1hdC1pY29uIHtcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHR3aWR0aDogdmFyKC0tc2l6ZS10b29sdGlwLWNsb3NlKTtcblx0XHRcdFx0aGVpZ2h0OiB2YXIoLS1zaXplLXRvb2x0aXAtY2xvc2UpO1xuXHRcdFx0XHQ6Om5nLWRlZXAgc3ZnIHtcblx0XHRcdFx0XHRwYXRoIHtcblx0XHRcdFx0XHRcdHN0cm9rZTogdmFyKC0tY29sb3ItdG9vbHRpcC1jbG9zZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19 */"] });


/***/ }),

/***/ 456:
/*!******************************************************************************!*\
  !*** ./apps/frontend/src/app/shared/components/webclip/webclip.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebClipComponent": () => (/* binding */ WebClipComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _core_constants_browsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/constants/browsers */ 8574);
/* harmony import */ var _core_constants_local_storage_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/constants/local-storage-keys */ 6733);
/* harmony import */ var _services_device_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/device-service.service */ 8102);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7661);








function WebClipComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WebClipComponent_div_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.closePopup()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WebClipComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WebClipComponent_div_0_div_1_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 6)(6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "To install this app, tap ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " then select \u201CAdd to Home screen\u201D");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.isPopup ? "wrapper-popup" : "wrapper-full");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", ctx_r0.browserSettingsIcon);
} }
class WebClipComponent {
    constructor(deviseService) {
        this.deviseService = deviseService;
        this.visible = true;
        this.isPopup = true;
        this.closePopupEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    get browserSettingsIcon() {
        switch (this.deviseService.browser) {
            case _core_constants_browsers__WEBPACK_IMPORTED_MODULE_0__.BrowserEnum.SAFARI:
                return 'safari-webclip';
            case _core_constants_browsers__WEBPACK_IMPORTED_MODULE_0__.BrowserEnum.INSTACLIP:
            case _core_constants_browsers__WEBPACK_IMPORTED_MODULE_0__.BrowserEnum.CHROME:
                return 'chrome-webclip';
            case _core_constants_browsers__WEBPACK_IMPORTED_MODULE_0__.BrowserEnum.SAMSUNG:
                return 'samsung-webclip';
            case _core_constants_browsers__WEBPACK_IMPORTED_MODULE_0__.BrowserEnum.HUAWEI:
            case _core_constants_browsers__WEBPACK_IMPORTED_MODULE_0__.BrowserEnum.EDGE:
                return 'edge-webclip';
            default:
                return 'chrome-webclip';
        }
    }
    closePopup() {
        this.visible = false;
        localStorage.setItem(_core_constants_local_storage_keys__WEBPACK_IMPORTED_MODULE_1__.WEBCLIP_BANNER_CLOSED, JSON.stringify(true));
        this.closePopupEmitter.emit(this.visible);
    }
}
WebClipComponent.ɵfac = function WebClipComponent_Factory(t) { return new (t || WebClipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_device_service_service__WEBPACK_IMPORTED_MODULE_2__.DeviceService)); };
WebClipComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WebClipComponent, selectors: [["cake-webclip"]], inputs: { visible: "visible", isPopup: "isPopup" }, outputs: { closePopupEmitter: "closePopupEmitter" }, decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["class", "close", 3, "click", 4, "ngIf"], [1, "content"], [1, "logo"], ["svgIcon", "webclip-logo"], [1, "text"], [1, "info"], [1, "primary", 3, "svgIcon"], [1, "close", 3, "click"], ["svgIcon", "close-dark", 1, "primary"]], template: function WebClipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, WebClipComponent_div_0_Template, 10, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.visible);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon], styles: [".wrapper-popup[_ngcontent-%COMP%] {\n  z-index: 999;\n  height: 81px;\n  width: calc(100% - 16px - 16px - 24px - 24px);\n  margin: 0 16px;\n  border-radius: 16px;\n  position: relative;\n  padding: 16px 24px;\n  box-shadow: 0px 0px 26px var(--webclip-box-shadow-color);\n  border-image: linear-gradient(1px, solid, var(--webclip-border-color));\n  background: linear-gradient(var(--deg-gradient-webclip-banner), var(--gradient-left-webclip-banner), var(--gradient-right-webclip-banner));\n}\n.wrapper-popup[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  right: 8px;\n  top: 8px;\n  display: block;\n}\n.wrapper-popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.wrapper-popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 16px;\n}\n.wrapper-popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 58px;\n  width: 58px;\n  font-size: 58px;\n}\n.wrapper-popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 190px;\n  font-family: \"Gilroy-400\";\n  font-style: normal;\n  font-size: 16px;\n  line-height: 27px;\n  color: var(--color-tooltip-text);\n  margin: 0;\n  padding: 0;\n}\n@media (max-width: 374px) {\n  .wrapper-popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    width: 186px;\n    font-size: 13px;\n    line-height: 24px;\n  }\n}\n@media (min-width: 768px) {\n  .wrapper-popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    width: 450px;\n  }\n}\n.wrapper-full[_ngcontent-%COMP%] {\n  height: 81px;\n  width: calc(100% - 24px - 24px);\n  margin: 0;\n  position: relative;\n  padding: 16px 24px;\n  box-shadow: 0px 0px 26px var(--webclip-box-shadow-color);\n  border: 1px solid var(--webclip-border-color);\n  background: linear-gradient(var(--deg-gradient-webclip-banner), var(--gradient-left-webclip-full), var(--gradient-right-webclip-full));\n}\n.wrapper-full[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  right: 8px;\n  top: 8px;\n  display: block;\n}\n.wrapper-full[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.wrapper-full[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 16px;\n}\n.wrapper-full[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 58px;\n  width: 58px;\n  font-size: 58px;\n}\n.wrapper-full[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 186px;\n  font-family: \"Gilroy-400\";\n  font-style: normal;\n  font-size: 16px;\n  line-height: 27px;\n  color: var(--color-tooltip-text);\n  margin: 0;\n  padding: 0;\n}\n@media (max-width: 321px) {\n  .wrapper-full[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmNsaXAuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0M7RUFDQyxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZDQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLHdEQUFBO0VDcUJBLHNFQUFBO0VBSkEsMElBQUE7QURsQkY7QUFVRTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUFSSDtBQVdFO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FBVEg7QUFXRztFQUNDLHFCQUFBO0VBUUEsa0JBQUE7QUFoQko7QUFVSTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVJMO0FBZUk7RUFDQyxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFiTDtBQWVLO0VBVkQ7SUFXRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VBWko7QUFDRjtBQWNLO0VBaEJEO0lBaUJFLFlBQUE7RUFYSjtBQUNGO0FBaUJDO0VBQ0MsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSx3REFBQTtFQUNBLDZDQUFBO0VDbERBLHNJQUFBO0FEbUNGO0FBdUJFO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQXJCSDtBQXdCRTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtBQXRCSDtBQXdCRztFQUNDLHFCQUFBO0VBUUEsa0JBQUE7QUE3Qko7QUF1Qkk7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFyQkw7QUE0Qkk7RUFDQyxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUExQkw7QUE0Qks7RUFWRDtJQVdFLGVBQUE7SUFDQSxpQkFBQTtFQXpCSjtBQUNGIiwiZmlsZSI6IndlYmNsaXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwvbWl4aW5zXCI7XG5cbi53cmFwcGVyIHtcblx0Ji1wb3B1cCB7XG5cdFx0ei1pbmRleDogOTk5O1xuXHRcdGhlaWdodDogY2FsYygxMTNweCAtIDE2cHggLSAxNnB4KTtcblx0XHR3aWR0aDogY2FsYygxMDAlIC0gMTZweCAtIDE2cHggLSAyNHB4IC0gMjRweCk7XG5cdFx0bWFyZ2luOiAwIDE2cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0cGFkZGluZzogMTZweCAyNHB4O1xuXG5cdFx0Ym94LXNoYWRvdzogMHB4IDBweCAyNnB4IHZhcigtLXdlYmNsaXAtYm94LXNoYWRvdy1jb2xvcik7XG5cdFx0QGluY2x1ZGUgYm9yZGVyLWdyYWRpZW50LWxpbmVhcigxcHgsIHNvbGlkLCB2YXIoLS13ZWJjbGlwLWJvcmRlci1jb2xvcikpO1xuXG5cdFx0QGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLWJnKFxuXHRcdFx0dmFyKC0tZGVnLWdyYWRpZW50LXdlYmNsaXAtYmFubmVyKSxcblx0XHRcdHZhcigtLWdyYWRpZW50LWxlZnQtd2ViY2xpcC1iYW5uZXIpLFxuXHRcdFx0dmFyKC0tZ3JhZGllbnQtcmlnaHQtd2ViY2xpcC1iYW5uZXIpXG5cdFx0KTtcblxuXHRcdC5jbG9zZSB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR3aWR0aDogMjRweDtcblx0XHRcdGhlaWdodDogMjRweDtcblx0XHRcdHJpZ2h0OiA4cHg7XG5cdFx0XHR0b3A6IDhweDtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdH1cblxuXHRcdC5jb250ZW50IHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdFx0XHQubG9nbyB7XG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuXHRcdFx0XHQubWF0LWljb24ge1xuXHRcdFx0XHRcdGhlaWdodDogNThweDtcblx0XHRcdFx0XHR3aWR0aDogNThweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDU4cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDE2cHg7XG5cdFx0XHR9XG5cblx0XHRcdC50ZXh0IHtcblx0XHRcdFx0LmluZm8ge1xuXHRcdFx0XHRcdHdpZHRoOiAxOTBweDtcblx0XHRcdFx0XHRmb250LWZhbWlseTogXCJHaWxyb3ktNDAwXCI7XG5cdFx0XHRcdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjdweDtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tY29sb3ItdG9vbHRpcC10ZXh0KTtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0cGFkZGluZzogMDtcblxuXHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiAzNzRweCkge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDE4NnB4O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogNDUwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ji1mdWxsIHtcblx0XHRoZWlnaHQ6IGNhbGMoMTEzcHggLSAxNnB4IC0gMTZweCk7XG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDI0cHggLSAyNHB4KTtcblx0XHRtYXJnaW46IDA7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHBhZGRpbmc6IDE2cHggMjRweDtcblxuXHRcdGJveC1zaGFkb3c6IDBweCAwcHggMjZweCB2YXIoLS13ZWJjbGlwLWJveC1zaGFkb3ctY29sb3IpO1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdlYmNsaXAtYm9yZGVyLWNvbG9yKTtcblxuXHRcdEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1iZyhcblx0XHRcdHZhcigtLWRlZy1ncmFkaWVudC13ZWJjbGlwLWJhbm5lciksXG5cdFx0XHR2YXIoLS1ncmFkaWVudC1sZWZ0LXdlYmNsaXAtZnVsbCksXG5cdFx0XHR2YXIoLS1ncmFkaWVudC1yaWdodC13ZWJjbGlwLWZ1bGwpXG5cdFx0KTtcblxuXHRcdC5jbG9zZSB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR3aWR0aDogMjRweDtcblx0XHRcdGhlaWdodDogMjRweDtcblx0XHRcdHJpZ2h0OiA4cHg7XG5cdFx0XHR0b3A6IDhweDtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdH1cblxuXHRcdC5jb250ZW50IHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdFx0XHQubG9nbyB7XG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuXHRcdFx0XHQubWF0LWljb24ge1xuXHRcdFx0XHRcdGhlaWdodDogNThweDtcblx0XHRcdFx0XHR3aWR0aDogNThweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDU4cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDE2cHg7XG5cdFx0XHR9XG5cblx0XHRcdC50ZXh0IHtcblx0XHRcdFx0LmluZm8ge1xuXHRcdFx0XHRcdHdpZHRoOiAxODZweDtcblx0XHRcdFx0XHRmb250LWZhbWlseTogXCJHaWxyb3ktNDAwXCI7XG5cdFx0XHRcdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjdweDtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tY29sb3ItdG9vbHRpcC10ZXh0KTtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0cGFkZGluZzogMDtcblxuXHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiAzMjFweCkge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJAbWl4aW4gYnRuLWhvdmVyKCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbkBtaXhpbiBidG4tZGlzYWJsZWQoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgJjpkaXNhYmxlZCB7XG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gICAgYmFja2dyb3VuZDogJGJnO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcbiAgfVxufVxuXG5AbWl4aW4gYnRuLWRlZmF1bHQoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gIGJhY2tncm91bmQ6ICRiZztcbiAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItYmcoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbn1cblxuQG1peGluIGJvcmRlci1ncmFkaWVudC1saW5lYXIoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYm9yZGVyLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci1ib3JkZXIoXG4gICRkZWcsXG4gICRsZWZ0Q29sb3IsXG4gICRyaWdodENvbG9yLFxuICAkYm9yZGVyV2lkdGgsXG4gICRib3JkZXJSYWRpdXNcbikge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcbiAgICBwYWRkaW5nOiAkYm9yZGVyV2lkdGg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbiAgICAtd2Via2l0LW1hc2s6IGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCkgY29udGVudC1ib3gsXG4gICAgICAvKiBbMV0gKi8gbGluZWFyLWdyYWRpZW50KCNmZmYgMCAwKTsgLyogWzJdICovXG4gICAgLXdlYmtpdC1tYXNrLWNvbXBvc2l0ZTogeG9yOyAvKiBbM10g0LTQu9GPINC/0ZbQtNGC0YDQuNC80LrQuCDQsdGA0LDRg9C30LXRgNGW0LIgKi9cbiAgICBtYXNrLWNvbXBvc2l0ZTogZXhjbHVkZTsgLyogWzNdICovXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci10ZXh0KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsZWZ0Q29sb3I7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci1ldmVudHMtbGl2ZSgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGVmdENvbG9yO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lci1zcGFuLXRleHQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3Ipe1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCggdmFyKC0tZGVnLWdyYWRpZW50LTMpLFxuICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTMpLFxuICB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0zKSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtaXhpbiBlcnJvci1tZXNzYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNTAwJztcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KFxuICAgIHZhcigtLWRlZy1ncmFkaWVudC00KSxcbiAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTQpLFxuICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTQpXG4gICk7XG59XG5cbkBtaXhpbiBHaWxyb3ktNDAwLTE2LWZvbnRzLTIge1xuICBmb250LWZhbWlseTogJ0dpbHJveS00MDAnO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBtaXhpbiBHaWxyb3ktNTAwLTMwLWZvbnRzLTIge1xuICBmb250LWZhbWlseTogJ0dpbHJveS01MDAnO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBtaXhpbiBHaWxyb3ktNjAwLTE0LWZvbnRzLTIge1xuICBmb250LWZhbWlseTogJ0dpbHJveS02MDAnO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4iXX0= */"] });


/***/ }),

/***/ 2762:
/*!******************************************************************************!*\
  !*** ./apps/frontend/src/app/shared/components/welcome/welcome.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeComponent": () => (/* binding */ WelcomeComponent)
/* harmony export */ });
/* harmony import */ var _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cake/lib-api-interface */ 171);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5231);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api.service */ 554);
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/modals.service */ 5414);
/* harmony import */ var _classes_watcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/watcher */ 34);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 6873);










function WelcomeComponent_div_0_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "All free cak3boxes claimed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WelcomeComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WelcomeComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WelcomeComponent_div_0_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WelcomeComponent_div_0_div_4_div_5_Template_div_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const cakeBox_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.claim(cakeBox_r6.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Claim");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const cakeBox_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("alt", cakeBox_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("src", cakeBox_r6.smallImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cakeBox_r6.name);
} }
function WelcomeComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, WelcomeComponent_div_0_div_4_div_5_Template, 8, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("New Cak3boxes (", ctx_r4.count, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.cakeboxes);
} }
function WelcomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WelcomeComponent_div_0_h2_1_Template, 2, 0, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, WelcomeComponent_div_0_div_2_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, WelcomeComponent_div_0_div_3_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, WelcomeComponent_div_0_div_4_Template, 6, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.cakeboxes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.hasInitialBoxes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.cakeboxes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.cakeboxes.length);
} }
class WelcomeComponent extends _classes_watcher__WEBPACK_IMPORTED_MODULE_3__.Watcher {
    constructor(apiService, modalsService) {
        super();
        this.apiService = apiService;
        this.modalsService = modalsService;
        this.count = 0;
    }
    get getQueryObj() {
        return {
            pageSize: 5,
            sort: _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.SortRewardEum.Rarity,
            where: _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.RewardEnum.CAKEBOX,
            isConfectionary: false,
            owner: true,
        };
    }
    get hasInitialBoxes() {
        return !!this.cakeboxes?.find(box => box.initial);
    }
    ngOnInit() {
        this.getBoxes();
    }
    claim(id) {
        this.modalsService.openClaimCakeboxPopup(id);
        this.modalsService.handleClaimed.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscribe)).subscribe((res) => {
            this.getBoxes();
        });
    }
    getBoxes() {
        this.apiService
            .getRewards(this.getQueryObj)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscribe))
            .subscribe((boxes) => {
            this.cakeboxes = boxes.data;
            this.count = boxes.count;
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_modals_service__WEBPACK_IMPORTED_MODULE_2__.ModalsService)); };
WelcomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["cake-welcome"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [4, "ngIf"], ["class", "logo", 4, "ngIf"], ["class", "logo", "routerLink", "/confectionery", 4, "ngIf"], ["class", "cake-boxes", 4, "ngIf"], [1, "logo"], ["loading", "lazy", "src", "assets/imgs/download plugin banner.png", "alt", ""], ["routerLink", "/confectionery", 1, "logo"], ["loading", "lazy", "src", "assets/imgs/download plugin banner (1).png", "alt", ""], [1, "cake-boxes"], [1, "title"], [1, "cake-boxes-container"], ["class", "cake-box-item", 4, "ngFor", "ngForOf"], [1, "cake-box-item"], [1, "cake-box-info"], ["loading", "lazy", 3, "alt"], [1, "claim-button", 3, "click"], [1, "button", "primary"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, WelcomeComponent_div_0_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cakeboxes);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink], styles: [".container[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n@media (max-width: 426px) {\n  .container[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n@media (max-width: 376px) {\n  .container[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-500\";\n  font-size: 20px;\n  text-align: center;\n  color: var(--color-fonts-1);\n  margin-bottom: 0;\n  transform: translateY(20px);\n}\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  height: 200px;\n}\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 368px;\n  object-fit: contain;\n  transform: translateX(6px);\n}\n@media (max-width: 320px) {\n  .container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 280px;\n  }\n}\n@media (max-width: 376px) {\n  .container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 300px;\n    margin-top: 15px;\n  }\n}\n.container[_ngcontent-%COMP%]   .cake-boxes[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   .cake-boxes[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-500\";\n  font-size: 20px;\n  line-height: 24px;\n  color: var(--color-tooltip-text);\n}\n.container[_ngcontent-%COMP%]   .cake-boxes-container[_ngcontent-%COMP%]   .cake-box-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 56px;\n  border-bottom: 1px solid var(--border-list-color);\n}\n.container[_ngcontent-%COMP%]   .cake-boxes-container[_ngcontent-%COMP%]   .cake-box-item[_ngcontent-%COMP%]:first-child {\n  border-top: 1px solid var(--border-list-color);\n}\n.container[_ngcontent-%COMP%]   .cake-boxes-container[_ngcontent-%COMP%]   .cake-box-item[_ngcontent-%COMP%]   .cake-box-info[_ngcontent-%COMP%] {\n  height: 32px;\n  max-width: 200px;\n  display: inherit;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .cake-boxes-container[_ngcontent-%COMP%]   .cake-box-item[_ngcontent-%COMP%]   .cake-box-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  width: 32px;\n  height: 32px;\n  object-fit: cover;\n  border: 1px solid var(--color-border-profile-image);\n  border-radius: 32px;\n}\n.container[_ngcontent-%COMP%]   .cake-boxes-container[_ngcontent-%COMP%]   .cake-box-item[_ngcontent-%COMP%]   .cake-box-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: \"Gilroy-500\";\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--color-tooltip-text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.container[_ngcontent-%COMP%]   .cake-boxes-container[_ngcontent-%COMP%]   .cake-box-item[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%] {\n  width: 104px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7QUFDRTtFQUhGO0lBSUksZ0JBQUE7RUFFRjtBQUNGO0FBQUU7RUFQRjtJQVFJLGFBQUE7RUFHRjtBQUNGO0FBREU7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQUdKO0FBQUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBRUo7QUFBSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBRU47QUFDSTtFQUNFO0lBQ0UsWUFBQTtFQUNOO0FBQ0Y7QUFFSTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGdCQUFBO0VBQU47QUFDRjtBQUtJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBSE47QUFLTTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFIUjtBQVFNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7QUFOUjtBQU9RO0VBQ0UsOENBQUE7QUFMVjtBQVFRO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU5WO0FBUVU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtREFBQTtFQUNBLG1CQUFBO0FBTlo7QUFTVTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUFo7QUFXUTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBVFYiLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXJnaW46IDAgMTZweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNDI2cHgpIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NnB4KSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LWZhbWlseTogJ0dpbHJveS01MDAnO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTEpO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMDBweDtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMzY4cHg7XG4gICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDZweCk7XG4gICAgfVxuICAgIFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCl7XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NnB4KXtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2FrZS1ib3hlcyB7XG4gICAgLnRpdGxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNTAwJztcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRvb2x0aXAtdGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1jb250YWluZXIge1xuICAgICAgLmNha2UtYm94LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saXN0LWNvbG9yKTtcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saXN0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYWtlLWJveC1pbmZvIHtcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyLXByb2ZpbGUtaW1hZ2UpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNTAwJztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRvb2x0aXAtdGV4dCk7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jbGFpbS1idXR0b24ge1xuICAgICAgICAgIHdpZHRoOiAxMDRweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2114:
/*!****************************************************************************************!*\
  !*** ./apps/frontend/src/app/shared/directives/rewards-options-directive.directive.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardsOptionsDirective": () => (/* binding */ RewardsOptionsDirective)
/* harmony export */ });
/* harmony import */ var _components_rewards_options_rewards_options_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/rewards-options/rewards-options.component */ 8126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9609);



class RewardsOptionsDirective {
    constructor(viewContainerRef, elementRef, appRef, componentFactoryResolver, injector) {
        this.viewContainerRef = viewContainerRef;
        this.elementRef = elementRef;
        this.appRef = appRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.componentRef = null;
    }
    onClick(event) {
        event.preventDefault();
        if (this.componentRef === null) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_components_rewards_options_rewards_options_component__WEBPACK_IMPORTED_MODULE_0__.RewardsOptionsComponent);
            this.componentRef = componentFactory.create(this.injector);
            this.appRef.attachView(this.componentRef.hostView);
            const domElement = this.componentRef.hostView
                .rootNodes[0];
            document.body.appendChild(domElement);
            this.setRewardsOptionsComponentProerties();
        }
    }
    setRewardsOptionsComponentProerties() {
        if (this.componentRef !== null) {
            this.componentRef.instance.reward = this.cakeRewardsOptions;
            const { right, bottom } = this.elementRef.nativeElement.getBoundingClientRect();
            this.componentRef.instance.right = right;
            this.componentRef.instance.top = bottom + 24;
        }
    }
    onCloseClick(target) {
        const clickedInside = this.elementRef.nativeElement.contains(target);
        if (!clickedInside) {
            this.destroy();
        }
    }
    ngOnDestroy() {
        this.destroy();
    }
    destroy() {
        if (this.componentRef !== null) {
            this.appRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
}
RewardsOptionsDirective.ɵfac = function RewardsOptionsDirective_Factory(t) { return new (t || RewardsOptionsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector)); };
RewardsOptionsDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: RewardsOptionsDirective, selectors: [["", "cakeRewardsOptions", ""]], hostBindings: function RewardsOptionsDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RewardsOptionsDirective_click_HostBindingHandler($event) { return ctx.onClick($event); })("click", function RewardsOptionsDirective_click_HostBindingHandler($event) { return ctx.onCloseClick($event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, inputs: { cakeRewardsOptions: "cakeRewardsOptions" } });


/***/ }),

/***/ 2009:
/*!**********************************************************************!*\
  !*** ./apps/frontend/src/app/shared/directives/tooltip.directive.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipDirective": () => (/* binding */ TooltipDirective)
/* harmony export */ });
/* harmony import */ var _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/tooltip/tooltip.component */ 8416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9609);



class TooltipDirective {
    constructor(elementRef, appRef, componentFactoryResolver, injector) {
        this.elementRef = elementRef;
        this.appRef = appRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.cakeTooltip = '';
        this.componentRef = null;
    }
    onClick(event) {
        event.preventDefault();
        if (this.componentRef === null) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_0__.TooltipComponent);
            this.componentRef = componentFactory.create(this.injector);
            this.appRef.attachView(this.componentRef.hostView);
            const domElement = this.componentRef.hostView
                .rootNodes[0];
            document.body.appendChild(domElement);
            this.setTooltipComponentProperties();
        }
    }
    setTooltipComponentProperties() {
        if (this.componentRef !== null) {
            this.componentRef.instance.tooltip = this.cakeTooltip;
            const { left, right, top } = this.elementRef.nativeElement.getBoundingClientRect();
            this.componentRef.instance.left = (right - left) / 2 + left;
            this.componentRef.instance.top = top - 255 / 2 - 5;
            this.componentRef.instance.destroyed$.subscribe({
                next: (data) => {
                    if (!data) {
                        this.destroy();
                    }
                },
            });
        }
    }
    onCloseClick(target) {
        const clickedInside = this.elementRef.nativeElement.contains(target);
        if (!clickedInside) {
            this.destroy();
        }
    }
    ngOnDestroy() {
        this.destroy();
    }
    destroy() {
        if (this.componentRef !== null) {
            this.appRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
}
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector)); };
TooltipDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TooltipDirective, selectors: [["", "cakeTooltip", ""]], hostBindings: function TooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TooltipDirective_click_HostBindingHandler($event) { return ctx.onClick($event); })("click", function TooltipDirective_click_HostBindingHandler($event) { return ctx.onCloseClick($event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, inputs: { cakeTooltip: "cakeTooltip" } });


/***/ }),

/***/ 811:
/*!*******************************************************!*\
  !*** ./apps/frontend/src/app/shared/shared.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 3557);
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-material.module */ 4029);
/* harmony import */ var _directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/tooltip.directive */ 2009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 6873);
/* harmony import */ var _directives_rewards_options_directive_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/rewards-options-directive.directive */ 2114);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-skeleton-loader */ 3453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/drop-down/drop-down.component */ 4662);
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/input/input.component */ 9852);
/* harmony import */ var _components_congratulations_screen_congratulations_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/congratulations-screen/congratulations-screen.component */ 708);
/* harmony import */ var _components_download_plugin_download_plugin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/download-plugin/download-plugin.component */ 7507);
/* harmony import */ var _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tooltip/tooltip.component */ 8416);
/* harmony import */ var _components_reward_reward_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/reward/reward.component */ 1325);
/* harmony import */ var _components_kol_kol_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/kol/kol.component */ 430);
/* harmony import */ var _components_rewards_options_rewards_options_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/rewards-options/rewards-options.component */ 8126);
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pagination/pagination.component */ 2774);
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/welcome/welcome.component */ 2762);
/* harmony import */ var _components_cakebox_cakebox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cakebox/cakebox.component */ 3755);
/* harmony import */ var _core_pipes_followers_count_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/pipes/followers-count.pipe */ 4376);
/* harmony import */ var _core_pipes_cakebox_transform_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/pipes/cakebox-transform.pipe */ 7603);
/* harmony import */ var _core_pipes_page_title_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/pipes/page-title.pipe */ 3951);
/* harmony import */ var _components_get_reward_get_reward_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/get-reward/get-reward.component */ 5504);
/* harmony import */ var _components_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/confirm-popup/confirm-popup.component */ 6945);
/* harmony import */ var _core_pipes_cake_title_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/pipes/cake-title.pipe */ 7048);
/* harmony import */ var _components_delete_wallet_delete_wallet_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/delete-wallet/delete-wallet.component */ 1851);
/* harmony import */ var _components_add_wallet_popup_add_wallet_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/add-wallet-popup/add-wallet-popup.component */ 7478);
/* harmony import */ var _components_webclip_webclip_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/webclip/webclip.component */ 456);






























const MODULES = [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _app_material_module__WEBPACK_IMPORTED_MODULE_0__.AppMaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_26__.NgxSkeletonLoaderModule];
const DIRECTIVES = [_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__.TooltipDirective, _directives_rewards_options_directive_directive__WEBPACK_IMPORTED_MODULE_2__.RewardsOptionsDirective];
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ imports: [MODULES, _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _app_material_module__WEBPACK_IMPORTED_MODULE_0__.AppMaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_26__.NgxSkeletonLoaderModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_3__.DropDownComponent, _components_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _components_congratulations_screen_congratulations_screen_component__WEBPACK_IMPORTED_MODULE_5__.CongratulationsScreenComponent, _components_download_plugin_download_plugin_component__WEBPACK_IMPORTED_MODULE_6__.DownloadPluginComponent, _directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__.TooltipDirective, _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_7__.TooltipComponent, _components_reward_reward_component__WEBPACK_IMPORTED_MODULE_8__.RewardComponent, _components_kol_kol_component__WEBPACK_IMPORTED_MODULE_9__.KolComponent, _directives_rewards_options_directive_directive__WEBPACK_IMPORTED_MODULE_2__.RewardsOptionsDirective, _components_rewards_options_rewards_options_component__WEBPACK_IMPORTED_MODULE_10__.RewardsOptionsComponent, _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__.PaginationComponent, _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__.WelcomeComponent, _components_cakebox_cakebox_component__WEBPACK_IMPORTED_MODULE_13__.CakeboxComponent, _core_pipes_followers_count_pipe__WEBPACK_IMPORTED_MODULE_14__.FollowersCountPipe, _core_pipes_cakebox_transform_pipe__WEBPACK_IMPORTED_MODULE_15__.CakeboxTransformPipe, _core_pipes_page_title_pipe__WEBPACK_IMPORTED_MODULE_16__.PageTitlePipe, _components_get_reward_get_reward_component__WEBPACK_IMPORTED_MODULE_17__.GetRewardComponent, _components_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_18__.ConfirmPopupComponent, _core_pipes_cake_title_pipe__WEBPACK_IMPORTED_MODULE_19__.CakeTitlePipe, _components_delete_wallet_delete_wallet_component__WEBPACK_IMPORTED_MODULE_20__.DeleteWalletComponent, _components_add_wallet_popup_add_wallet_popup_component__WEBPACK_IMPORTED_MODULE_21__.AddWalletPopupComponent, _components_webclip_webclip_component__WEBPACK_IMPORTED_MODULE_22__.WebClipComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _app_material_module__WEBPACK_IMPORTED_MODULE_0__.AppMaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_26__.NgxSkeletonLoaderModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _app_material_module__WEBPACK_IMPORTED_MODULE_0__.AppMaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_26__.NgxSkeletonLoaderModule, _components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_3__.DropDownComponent, _components_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _components_congratulations_screen_congratulations_screen_component__WEBPACK_IMPORTED_MODULE_5__.CongratulationsScreenComponent, _components_download_plugin_download_plugin_component__WEBPACK_IMPORTED_MODULE_6__.DownloadPluginComponent, _directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__.TooltipDirective, _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_7__.TooltipComponent, _components_reward_reward_component__WEBPACK_IMPORTED_MODULE_8__.RewardComponent, _components_kol_kol_component__WEBPACK_IMPORTED_MODULE_9__.KolComponent, _directives_rewards_options_directive_directive__WEBPACK_IMPORTED_MODULE_2__.RewardsOptionsDirective, _components_rewards_options_rewards_options_component__WEBPACK_IMPORTED_MODULE_10__.RewardsOptionsComponent, _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__.PaginationComponent, _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__.WelcomeComponent, _components_cakebox_cakebox_component__WEBPACK_IMPORTED_MODULE_13__.CakeboxComponent, _core_pipes_followers_count_pipe__WEBPACK_IMPORTED_MODULE_14__.FollowersCountPipe, _core_pipes_cakebox_transform_pipe__WEBPACK_IMPORTED_MODULE_15__.CakeboxTransformPipe, _core_pipes_page_title_pipe__WEBPACK_IMPORTED_MODULE_16__.PageTitlePipe, _components_get_reward_get_reward_component__WEBPACK_IMPORTED_MODULE_17__.GetRewardComponent, _components_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_18__.ConfirmPopupComponent, _core_pipes_cake_title_pipe__WEBPACK_IMPORTED_MODULE_19__.CakeTitlePipe, _components_delete_wallet_delete_wallet_component__WEBPACK_IMPORTED_MODULE_20__.DeleteWalletComponent, _components_add_wallet_popup_add_wallet_popup_component__WEBPACK_IMPORTED_MODULE_21__.AddWalletPopupComponent, _components_webclip_webclip_component__WEBPACK_IMPORTED_MODULE_22__.WebClipComponent, _directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__.TooltipDirective, _directives_rewards_options_directive_directive__WEBPACK_IMPORTED_MODULE_2__.RewardsOptionsDirective] }); })();


/***/ }),

/***/ 9386:
/*!*******************************************************!*\
  !*** ./apps/frontend/src/environments/environment.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    apiUrl: 'https://backend-dev.cak3.io',
    plugin: true,
    frontendUrl: 'https://dev.cak3.io',
};


/***/ }),

/***/ 9962:
/*!***********************************!*\
  !*** ./apps/frontend/src/main.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 3878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9609);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 1274);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 9386);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ }),

/***/ 171:
/*!*********************************************!*\
  !*** ./libs/lib-api-interface/src/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiErrorModel": () => (/* reexport safe */ _lib_model_index__WEBPACK_IMPORTED_MODULE_0__.ApiErrorModel),
/* harmony export */   "AuthorizedRequest": () => (/* reexport safe */ _lib_request_index__WEBPACK_IMPORTED_MODULE_1__.AuthorizedRequest),
/* harmony export */   "BINANCE": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.BINANCE),
/* harmony export */   "BINANCE_NETWORK_IDS": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.BINANCE_NETWORK_IDS),
/* harmony export */   "CategoryEnum": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.CategoryEnum),
/* harmony export */   "DEFAULT_GAS_LIMIT": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_GAS_LIMIT),
/* harmony export */   "ETHER": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.ETHER),
/* harmony export */   "ETHEREUM": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.ETHEREUM),
/* harmony export */   "ETHEREUM_CHAINS": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.ETHEREUM_CHAINS),
/* harmony export */   "ETHEREUM_NETWORK_IDS": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.ETHEREUM_NETWORK_IDS),
/* harmony export */   "GET_BALANCES": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.GET_BALANCES),
/* harmony export */   "GOERLI": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.GOERLI),
/* harmony export */   "MAINNET": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.MAINNET),
/* harmony export */   "METAMASK_ERRORS": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.METAMASK_ERRORS),
/* harmony export */   "METAMASK_LINK": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.METAMASK_LINK),
/* harmony export */   "MOONRIVER": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.MOONRIVER),
/* harmony export */   "MUMBAI": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.MUMBAI),
/* harmony export */   "NETWORK_PROVIDERS": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.NETWORK_PROVIDERS),
/* harmony export */   "Network": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.Network),
/* harmony export */   "NetworkName": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.NetworkName),
/* harmony export */   "POLYGON": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.POLYGON),
/* harmony export */   "PlatformEnum": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.PlatformEnum),
/* harmony export */   "RINKEBY": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.RINKEBY),
/* harmony export */   "RarityEnum": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.RarityEnum),
/* harmony export */   "ResponseEnvelope": () => (/* reexport safe */ _lib_response_index__WEBPACK_IMPORTED_MODULE_2__.ResponseEnvelope),
/* harmony export */   "RewardEnum": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.RewardEnum),
/* harmony export */   "Role": () => (/* reexport safe */ _lib_model_index__WEBPACK_IMPORTED_MODULE_0__.Role),
/* harmony export */   "STAKING_CONTRACT": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.STAKING_CONTRACT),
/* harmony export */   "STAKING_RETURNED": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.STAKING_RETURNED),
/* harmony export */   "SortRewardEum": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.SortRewardEum),
/* harmony export */   "SortUserEum": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.SortUserEum),
/* harmony export */   "TEST_PROVIDER": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.TEST_PROVIDER),
/* harmony export */   "USDT_ABI": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.USDT_ABI),
/* harmony export */   "USDT_CONTRACT": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.USDT_CONTRACT),
/* harmony export */   "WALLET_CONNECT_PROVIDER_INFURA_ID": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.WALLET_CONNECT_PROVIDER_INFURA_ID),
/* harmony export */   "WEB3": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.WEB3),
/* harmony export */   "WalletEnum": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.WalletEnum),
/* harmony export */   "abi": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.abi),
/* harmony export */   "defaultNetwork": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.defaultNetwork),
/* harmony export */   "defaultNetworkID": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.defaultNetworkID),
/* harmony export */   "sortDirection": () => (/* reexport safe */ _lib_model_index__WEBPACK_IMPORTED_MODULE_0__.sortDirection)
/* harmony export */ });
/* harmony import */ var _lib_model_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/model/index */ 506);
/* harmony import */ var _lib_request_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/request/index */ 1729);
/* harmony import */ var _lib_response_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/response/index */ 5264);
/* harmony import */ var _lib_token_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/token/jwt */ 3881);
/* harmony import */ var _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/constants/index */ 8756);







/***/ }),

/***/ 5742:
/*!**********************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/constants/STAKING_CONTRACT.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STAKING_CONTRACT": () => (/* binding */ STAKING_CONTRACT)
/* harmony export */ });
const STAKING_CONTRACT = "0x8947d34e4F98B87F3c8C681E49BfAf0Be5996016";


/***/ }),

/***/ 6829:
/*!**************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/constants/USDT_ABI.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USDT_ABI": () => (/* binding */ USDT_ABI)
/* harmony export */ });
const USDT_ABI = [
    'constructor()',
    'event Approval(address indexed,address indexed,uint256)',
    'event Transfer(address indexed,address indexed,uint256)',
    'function allowance(address,address) view returns (uint256)',
    'function approve(address,uint256) returns (bool)',
    'function balanceOf(address) view returns (uint256)',
    'function burn(uint256)',
    'function burnFrom(address,uint256)',
    'function decimals() view returns (uint8)',
    'function decreaseAllowance(address,uint256) returns (bool)',
    'function increaseAllowance(address,uint256) returns (bool)',
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address,uint256) returns (bool)',
    'function transferFrom(address,address,uint256) returns (bool)',
];


/***/ }),

/***/ 7430:
/*!*******************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/constants/USDT_CONTRACT.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USDT_CONTRACT": () => (/* binding */ USDT_CONTRACT)
/* harmony export */ });
const USDT_CONTRACT = '0x43053b996A4905A0ba461dCc7aA332A0b1cba050';


/***/ }),

/***/ 5262:
/*!*********************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/constants/abi.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "abi": () => (/* binding */ abi)
/* harmony export */ });
const abi = [
    'constructor(address)',
    'event OwnershipTransferred(address indexed,address indexed)',
    'event Stake(address indexed,uint256,uint256)',
    'function halted() view returns (bool)',
    'function owner() view returns (address)',
    'function renounceOwnership()',
    'function stake(uint256)',
    'function transferOwnership(address)',
];


/***/ }),

/***/ 688:
/*!*******************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/constants/category.enum.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryEnum": () => (/* binding */ CategoryEnum)
/* harmony export */ });
var CategoryEnum;
(function (CategoryEnum) {
    CategoryEnum["SPORT"] = "SPORT";
    CategoryEnum["ENTERTAINMENT"] = "ENTERTAINMENT";
    CategoryEnum["TECH"] = "TECH";
    CategoryEnum["TRENDS"] = "TRENDS";
    CategoryEnum["FOOD"] = "FOOD";
    CategoryEnum["ART"] = "ART";
    CategoryEnum["BEAUTY"] = "BEAUTY";
    CategoryEnum["HEALTH"] = "HEALTH";
})(CategoryEnum || (CategoryEnum = {}));


/***/ }),

/***/ 8756:
/*!***********************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/constants/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BINANCE": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.BINANCE),
/* harmony export */   "BINANCE_NETWORK_IDS": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.BINANCE_NETWORK_IDS),
/* harmony export */   "CategoryEnum": () => (/* reexport safe */ _category_enum__WEBPACK_IMPORTED_MODULE_2__.CategoryEnum),
/* harmony export */   "DEFAULT_GAS_LIMIT": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.DEFAULT_GAS_LIMIT),
/* harmony export */   "ETHER": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.ETHER),
/* harmony export */   "ETHEREUM": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.ETHEREUM),
/* harmony export */   "ETHEREUM_CHAINS": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.ETHEREUM_CHAINS),
/* harmony export */   "ETHEREUM_NETWORK_IDS": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.ETHEREUM_NETWORK_IDS),
/* harmony export */   "GET_BALANCES": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.GET_BALANCES),
/* harmony export */   "GOERLI": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.GOERLI),
/* harmony export */   "MAINNET": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.MAINNET),
/* harmony export */   "METAMASK_ERRORS": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.METAMASK_ERRORS),
/* harmony export */   "METAMASK_LINK": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.METAMASK_LINK),
/* harmony export */   "MOONRIVER": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.MOONRIVER),
/* harmony export */   "MUMBAI": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.MUMBAI),
/* harmony export */   "NETWORK_PROVIDERS": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.NETWORK_PROVIDERS),
/* harmony export */   "Network": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.Network),
/* harmony export */   "NetworkName": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.NetworkName),
/* harmony export */   "POLYGON": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.POLYGON),
/* harmony export */   "PlatformEnum": () => (/* reexport safe */ _platforms_enum__WEBPACK_IMPORTED_MODULE_1__.PlatformEnum),
/* harmony export */   "RINKEBY": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.RINKEBY),
/* harmony export */   "RarityEnum": () => (/* reexport safe */ _rarity_enum__WEBPACK_IMPORTED_MODULE_0__.RarityEnum),
/* harmony export */   "RewardEnum": () => (/* reexport safe */ _reward_enum__WEBPACK_IMPORTED_MODULE_3__.RewardEnum),
/* harmony export */   "STAKING_CONTRACT": () => (/* reexport safe */ _STAKING_CONTRACT__WEBPACK_IMPORTED_MODULE_8__.STAKING_CONTRACT),
/* harmony export */   "STAKING_RETURNED": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.STAKING_RETURNED),
/* harmony export */   "SortRewardEum": () => (/* reexport safe */ _sorts_enum__WEBPACK_IMPORTED_MODULE_4__.SortRewardEum),
/* harmony export */   "SortUserEum": () => (/* reexport safe */ _sorts_enum__WEBPACK_IMPORTED_MODULE_4__.SortUserEum),
/* harmony export */   "TEST_PROVIDER": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.TEST_PROVIDER),
/* harmony export */   "USDT_ABI": () => (/* reexport safe */ _USDT_ABI__WEBPACK_IMPORTED_MODULE_10__.USDT_ABI),
/* harmony export */   "USDT_CONTRACT": () => (/* reexport safe */ _USDT_CONTRACT__WEBPACK_IMPORTED_MODULE_9__.USDT_CONTRACT),
/* harmony export */   "WALLET_CONNECT_PROVIDER_INFURA_ID": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.WALLET_CONNECT_PROVIDER_INFURA_ID),
/* harmony export */   "WEB3": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.WEB3),
/* harmony export */   "WalletEnum": () => (/* reexport safe */ _wallet_enum__WEBPACK_IMPORTED_MODULE_11__.WalletEnum),
/* harmony export */   "abi": () => (/* reexport safe */ _abi__WEBPACK_IMPORTED_MODULE_7__.abi),
/* harmony export */   "defaultNetwork": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.defaultNetwork),
/* harmony export */   "defaultNetworkID": () => (/* reexport safe */ _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__.defaultNetworkID)
/* harmony export */ });
/* harmony import */ var _rarity_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rarity.enum */ 582);
/* harmony import */ var _platforms_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platforms.enum */ 2273);
/* harmony import */ var _category_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.enum */ 688);
/* harmony import */ var _reward_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reward.enum */ 2298);
/* harmony import */ var _sorts_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sorts.enum */ 7134);
/* harmony import */ var _window_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./window.type */ 5781);
/* harmony import */ var _metamaskEthereumProvider_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metamaskEthereumProvider.interface */ 2886);
/* harmony import */ var _abi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./abi */ 5262);
/* harmony import */ var _STAKING_CONTRACT__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./STAKING_CONTRACT */ 5742);
/* harmony import */ var _USDT_CONTRACT__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./USDT_CONTRACT */ 7430);
/* harmony import */ var _USDT_ABI__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./USDT_ABI */ 6829);
/* harmony import */ var _wallet_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wallet.enum */ 7961);
/* harmony import */ var _wallet_connection_dictionary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wallet-connection.dictionary */ 624);















/***/ }),

/***/ 2886:
/*!****************************************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/constants/metamaskEthereumProvider.interface.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2273:
/*!********************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/constants/platforms.enum.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlatformEnum": () => (/* binding */ PlatformEnum)
/* harmony export */ });
var PlatformEnum;
(function (PlatformEnum) {
    PlatformEnum["Youtube"] = "Youtube";
    PlatformEnum["Twitter"] = "Twitter";
    PlatformEnum["Facebook"] = "Facebook";
    PlatformEnum["Twitch"] = "Twitch";
    PlatformEnum["Tiktok"] = "Tiktok";
    PlatformEnum["Instagram"] = "Instagram";
    PlatformEnum["Pinterest"] = "Pinterest";
    PlatformEnum["Snapchat"] = "Snapchat";
    PlatformEnum["Onlyfans"] = "Onlyfans";
    PlatformEnum["Linkedin"] = "Linkedin";
    PlatformEnum["Vimeo"] = "Vimeo";
    PlatformEnum["Reddit"] = "Reddit";
})(PlatformEnum || (PlatformEnum = {}));


/***/ }),

/***/ 582:
/*!*****************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/constants/rarity.enum.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RarityEnum": () => (/* binding */ RarityEnum)
/* harmony export */ });
var RarityEnum;
(function (RarityEnum) {
    RarityEnum["EXOTIC"] = "EXOTIC";
    RarityEnum["LEGENDARY"] = "LEGENDARY";
    RarityEnum["EPIC"] = "EPIC";
    RarityEnum["SUPERIOR"] = "SUPERIOR";
    RarityEnum["BASIC"] = "BASIC";
    RarityEnum["STARTER"] = "STARTER";
    RarityEnum["SLICE"] = "SLICE";
    RarityEnum["COMMON"] = "COMMON";
})(RarityEnum || (RarityEnum = {}));


/***/ }),

/***/ 2298:
/*!*****************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/constants/reward.enum.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardEnum": () => (/* binding */ RewardEnum)
/* harmony export */ });
var RewardEnum;
(function (RewardEnum) {
    RewardEnum["SLICE"] = "SLICE";
    RewardEnum["CAKEBOX"] = "CAKEBOX";
    RewardEnum["SUGAR"] = "SUGAR";
})(RewardEnum || (RewardEnum = {}));


/***/ }),

/***/ 7134:
/*!****************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/constants/sorts.enum.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortRewardEum": () => (/* binding */ SortRewardEum),
/* harmony export */   "SortUserEum": () => (/* binding */ SortUserEum)
/* harmony export */ });
var SortUserEum;
(function (SortUserEum) {
    SortUserEum["Reward"] = "rewards";
    SortUserEum["Cakebox"] = "cakebox";
    SortUserEum["FollowedByIDs"] = "followedByIDs";
    SortUserEum["Rank"] = "rank";
    SortUserEum["CreatedAt"] = "createdAt";
    SortUserEum["Role"] = "role";
})(SortUserEum || (SortUserEum = {}));
var SortRewardEum;
(function (SortRewardEum) {
    SortRewardEum["Cost"] = "cost";
    SortRewardEum["Rarity"] = "rarity";
    SortRewardEum["Category"] = "category";
    SortRewardEum["CreatedAt"] = "createdAt";
})(SortRewardEum || (SortRewardEum = {}));


/***/ }),

/***/ 624:
/*!**********************************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/constants/wallet-connection.dictionary.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BINANCE": () => (/* binding */ BINANCE),
/* harmony export */   "BINANCE_NETWORK_IDS": () => (/* binding */ BINANCE_NETWORK_IDS),
/* harmony export */   "DEFAULT_GAS_LIMIT": () => (/* binding */ DEFAULT_GAS_LIMIT),
/* harmony export */   "ETHER": () => (/* binding */ ETHER),
/* harmony export */   "ETHEREUM": () => (/* binding */ ETHEREUM),
/* harmony export */   "ETHEREUM_CHAINS": () => (/* binding */ ETHEREUM_CHAINS),
/* harmony export */   "ETHEREUM_NETWORK_IDS": () => (/* binding */ ETHEREUM_NETWORK_IDS),
/* harmony export */   "GET_BALANCES": () => (/* binding */ GET_BALANCES),
/* harmony export */   "GOERLI": () => (/* binding */ GOERLI),
/* harmony export */   "MAINNET": () => (/* binding */ MAINNET),
/* harmony export */   "METAMASK_ERRORS": () => (/* binding */ METAMASK_ERRORS),
/* harmony export */   "METAMASK_LINK": () => (/* binding */ METAMASK_LINK),
/* harmony export */   "MOONRIVER": () => (/* binding */ MOONRIVER),
/* harmony export */   "MUMBAI": () => (/* binding */ MUMBAI),
/* harmony export */   "NETWORK_PROVIDERS": () => (/* binding */ NETWORK_PROVIDERS),
/* harmony export */   "Network": () => (/* binding */ Network),
/* harmony export */   "NetworkName": () => (/* binding */ NetworkName),
/* harmony export */   "POLYGON": () => (/* binding */ POLYGON),
/* harmony export */   "RINKEBY": () => (/* binding */ RINKEBY),
/* harmony export */   "STAKING_RETURNED": () => (/* binding */ STAKING_RETURNED),
/* harmony export */   "TEST_PROVIDER": () => (/* binding */ TEST_PROVIDER),
/* harmony export */   "WALLET_CONNECT_PROVIDER_INFURA_ID": () => (/* binding */ WALLET_CONNECT_PROVIDER_INFURA_ID),
/* harmony export */   "WEB3": () => (/* binding */ WEB3),
/* harmony export */   "defaultNetwork": () => (/* binding */ defaultNetwork),
/* harmony export */   "defaultNetworkID": () => (/* binding */ defaultNetworkID)
/* harmony export */ });
const DEFAULT_GAS_LIMIT = 500000;
const WALLET_CONNECT_PROVIDER_INFURA_ID = "";
const TEST_PROVIDER = "http://localhost:4200/";
const METAMASK_LINK = "https://metamask.io/";
const ETHEREUM = "ethereum";
const ETHER = "ether";
const WEB3 = "web3";
const STAKING_RETURNED = "STAKING_RETURNED";
const GET_BALANCES = "GET_BALANCES";
const METAMASK_ERRORS = {
    notInstalled: "ERROR.METAMASK__NOT__INSTALLED",
    needUserPermission: "ERROR.NEED__USER__PERMISSION",
    failedToRetrieveGasPrice: "ERROR.FAILED__RETRIEVING__GAS__PRICE",
};
var Network;
(function (Network) {
    Network[Network["Moonbeam"] = 507] = "Moonbeam";
    Network[Network["MainNet"] = 1] = "MainNet";
    Network[Network["Ropsten"] = 3] = "Ropsten";
    Network[Network["Rinkeby"] = 4] = "Rinkeby";
    Network[Network["Goerli"] = 5] = "Goerli";
    Network[Network["Kovan"] = 42] = "Kovan";
    Network[Network["Polygon"] = 89] = "Polygon";
    Network[Network["Mumbai"] = 13881] = "Mumbai";
    Network[Network["Moonriver"] = 505] = "Moonriver";
    Network[Network["Binance"] = 38] = "Binance";
})(Network || (Network = {}));
var NetworkName;
(function (NetworkName) {
    NetworkName["Moonbeam"] = "moonbeam";
    NetworkName["MainNet"] = "mainnet";
    NetworkName["Ropsten"] = "ropsten";
    NetworkName["Rinkeby"] = "rinkeby";
    NetworkName["Goerli"] = "goerli";
    NetworkName["Kovan"] = "kovan";
    NetworkName["Polygon"] = "polygon";
    NetworkName["Mumbai"] = "mumbai";
    NetworkName["Moonriver"] = "moonriver";
    NetworkName["Binance"] = "binance";
})(NetworkName || (NetworkName = {}));
const ETHEREUM_NETWORK_IDS = {
    [Network.MainNet]: "Ethereum Mainnet (1)",
    [Network.Ropsten]: "Ethereum Ropsten (3)",
    [Network.Rinkeby]: "Ethereum Rinkeby (4)",
    [Network.Goerli]: "Ethereum Goerli (5)",
    [Network.Kovan]: "Ethereum Kovan (42)",
    [Network.Moonbeam]: "Ethereum Moonbeam (1287)",
    [Network.Polygon]: "Polygon Mainnet (137)",
    [Network.Mumbai]: "Mumbai TestNet (13881)",
    [Network.Moonriver]: "Moonriver TestNet (1285)",
    [Network.Binance]: "Binance Smart Chain (56)",
};
const BINANCE_NETWORK_IDS = {
    56: "Binance Smart Chain (56)",
    97: "Binance Smart Chain TESTING Network (97)",
};
const NETWORK_PROVIDERS = [
    {
        name: "MetaMask",
        imgPath: "/assets/img/wallet-connect/wallet/metamask.svg",
    },
];
const defaultNetwork = Network.Moonbeam;
const defaultNetworkID = `0x${defaultNetwork}`;
const RINKEBY = `0x${Network.Rinkeby}`;
const MAINNET = `0x${Network.MainNet}`;
const POLYGON = `0x${Network.Polygon}`;
const MUMBAI = `0x${Network.Mumbai}`;
const MOONRIVER = `0x${Network.Moonriver}`;
const BINANCE = `0x${Network.Binance}`;
const GOERLI = `0x${Network.Goerli}`;
const ETHEREUM_CHAINS = {
    moonbeam: {
        chainId: defaultNetworkID,
        chanName: "Moonbeam",
        nativeCurrency: { name: "DEV", symbol: "DEV", decimals: 18 },
        rpcUrls: ["https://rpc.testnet.moonbeam.network/"],
        blockExplorerUrls: ["https://moonbase-blockscout.testnet.moonbeam.network/"],
    },
    rinkeby: {
        chainId: RINKEBY,
        chanName: "Rinkeby",
        rpcUrls: ["https://rinkeby.infura.io/v3/f0961e3efc8d4548a9c5fa9a1a165c20"],
    },
    mainnet: {
        chainId: MAINNET,
        chanName: "Mainnet",
        rpcUrls: ["https://mainnet.infura.io/v3/f0961e3efc8d4548a9c5fa9a1a165c20"],
    },
    polygon: {
        chainId: POLYGON,
        chanName: "Polygon",
        nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
        rpcUrls: ["https://rpc-mainnet.maticvigil.com/"],
        blockExplorerUrls: ["https://explorer.matic.network/"],
    },
    mumbai: {
        chainId: MUMBAI,
        chanName: "Mumbai",
        nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
        rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
        blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    },
    binance: {
        chainId: BINANCE,
        chanName: "Binance",
        nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
        rpcUrls: ["https://bsc-dataseed.binance.org/"],
        blockExplorerUrls: ["https://bscscan.com/"],
    },
    moonriver: {
        chainId: MOONRIVER,
        chanName: "Moonriver",
        rpcUrls: ["https://rpc.moonriver.moonbeam.network"],
    },
    goerli: {
        chainId: GOERLI,
        chanName: "Goerli",
        rpcUrls: ["https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    },
    ropsten: {
        chainId: GOERLI,
        chanName: "Goerli",
        rpcUrls: ["https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    },
    kovan: {
        chainId: GOERLI,
        chanName: "Goerli",
        rpcUrls: ["https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    },
};


/***/ }),

/***/ 7961:
/*!*****************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/constants/wallet.enum.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletEnum": () => (/* binding */ WalletEnum)
/* harmony export */ });
var WalletEnum;
(function (WalletEnum) {
    WalletEnum["MetaMask"] = "METAMASK";
})(WalletEnum || (WalletEnum = {}));


/***/ }),

/***/ 5781:
/*!*****************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/constants/window.type.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2885:
/*!*****************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/model/api-error-model.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiErrorModel": () => (/* binding */ ApiErrorModel)
/* harmony export */ });
class ApiErrorModel {
}


/***/ }),

/***/ 2849:
/*!*********************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/model/authenticationModel.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 506:
/*!*******************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/model/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiErrorModel": () => (/* reexport safe */ _api_error_model__WEBPACK_IMPORTED_MODULE_7__.ApiErrorModel),
/* harmony export */   "Role": () => (/* reexport safe */ _role__WEBPACK_IMPORTED_MODULE_0__.Role),
/* harmony export */   "sortDirection": () => (/* reexport safe */ _sort_direction__WEBPACK_IMPORTED_MODULE_3__.sortDirection)
/* harmony export */ });
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role */ 4884);
/* harmony import */ var _authenticationModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authenticationModel */ 2849);
/* harmony import */ var _pagination_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination-options */ 1546);
/* harmony import */ var _sort_direction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sort-direction */ 8204);
/* harmony import */ var _sort_params__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sort-params */ 2888);
/* harmony import */ var _transactionHystoryModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transactionHystoryModel */ 162);
/* harmony import */ var _rewardModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rewardModel */ 1015);
/* harmony import */ var _api_error_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api-error-model */ 2885);
/* harmony import */ var _userModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userModel */ 2398);
/* harmony import */ var _wallet_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wallet.modal */ 2438);












/***/ }),

/***/ 1546:
/*!********************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/model/pagination-options.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 1015:
/*!*************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/model/rewardModel.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 4884:
/*!******************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/model/role.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": () => (/* binding */ Role)
/* harmony export */ });
var Role;
(function (Role) {
    Role["admin"] = "ADMIN";
    Role["user"] = "USER";
    Role["kol"] = "KOL";
})(Role || (Role = {}));


/***/ }),

/***/ 8204:
/*!****************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/model/sort-direction.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortDirection": () => (/* binding */ sortDirection)
/* harmony export */ });
var sortDirection;
(function (sortDirection) {
    sortDirection["asc"] = "asc";
    sortDirection["desc"] = "desc";
})(sortDirection || (sortDirection = {}));


/***/ }),

/***/ 2888:
/*!*************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/model/sort-params.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 162:
/*!*************************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/model/transactionHystoryModel.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2398:
/*!***********************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/model/userModel.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2438:
/*!**************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/model/wallet.modal.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2191:
/*!**************************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/request/addPlatformRequestBody.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 6958:
/*!**********************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/request/authorized-request.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizedRequest": () => (/* binding */ AuthorizedRequest)
/* harmony export */ });
/* harmony import */ var typescript_openapi_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript-openapi-router */ 7152);

class AuthorizedRequest extends typescript_openapi_router__WEBPACK_IMPORTED_MODULE_0__.Request {
    constructor(opts) {
        super(opts);
        this.extra = opts.extra;
    }
}


/***/ }),

/***/ 3742:
/*!****************************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/request/createCakeBoxRequestBody.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 231:
/*!***************************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/request/createRewardRequestBody.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 501:
/*!*********************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/request/getKOLByIdRequest.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 1729:
/*!*********************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/request/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizedRequest": () => (/* reexport safe */ _authorized_request__WEBPACK_IMPORTED_MODULE_2__.AuthorizedRequest)
/* harmony export */ });
/* harmony import */ var _registerRequestBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerRequestBody */ 3556);
/* harmony import */ var _loginRequestBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginRequestBody */ 8994);
/* harmony import */ var _authorized_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorized-request */ 6958);
/* harmony import */ var _createRewardRequestBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createRewardRequestBody */ 231);
/* harmony import */ var _addPlatformRequestBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addPlatformRequestBody */ 2191);
/* harmony import */ var _pathParams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pathParams */ 6511);
/* harmony import */ var _paginationQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginationQuery */ 6616);
/* harmony import */ var _getKOLByIdRequest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getKOLByIdRequest */ 501);
/* harmony import */ var _removePlatformRequestBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./removePlatformRequestBody */ 5249);
/* harmony import */ var _updateUserRequestBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./updateUserRequestBody */ 7567);
/* harmony import */ var _createCakeBoxRequestBody__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createCakeBoxRequestBody */ 3742);













/***/ }),

/***/ 8994:
/*!********************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/request/loginRequestBody.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 6616:
/*!*******************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/request/paginationQuery.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 6511:
/*!**************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/request/pathParams.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3556:
/*!***********************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/request/registerRequestBody.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 5249:
/*!*****************************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/request/removePlatformRequestBody.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7567:
/*!*************************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/request/updateUserRequestBody.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 5318:
/*!*****************************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/response/getAllRewardResponseBody.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 5714:
/*!**********************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/response/getMeResponseBody.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2208:
/*!**************************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/response/getWalletResponseBody.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 5264:
/*!**********************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/response/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResponseEnvelope": () => (/* reexport safe */ _response_envelope__WEBPACK_IMPORTED_MODULE_4__.ResponseEnvelope)
/* harmony export */ });
/* harmony import */ var _registerResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerResponse */ 4094);
/* harmony import */ var _loginResponseBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginResponseBody */ 7208);
/* harmony import */ var _kol_list_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kol-list.interface */ 3747);
/* harmony import */ var _rewards_list_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rewards-list.interface */ 9613);
/* harmony import */ var _response_envelope__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./response-envelope */ 6168);
/* harmony import */ var _user_profile_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile.interface */ 840);
/* harmony import */ var _getAllRewardResponseBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getAllRewardResponseBody */ 5318);
/* harmony import */ var _getMeResponseBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getMeResponseBody */ 5714);
/* harmony import */ var _userByPlatformResponse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userByPlatformResponse */ 7942);
/* harmony import */ var _getWalletResponseBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getWalletResponseBody */ 2208);












/***/ }),

/***/ 3747:
/*!***********************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/response/kol-list.interface.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7208:
/*!**********************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/response/loginResponseBody.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 4094:
/*!*********************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/response/registerResponse.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 6168:
/*!**********************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/response/response-envelope.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResponseEnvelope": () => (/* binding */ ResponseEnvelope)
/* harmony export */ });
class ResponseEnvelope {
}


/***/ }),

/***/ 9613:
/*!***************************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/response/rewards-list.interface.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 840:
/*!***************************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/response/user-profile.interface.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7942:
/*!***************************************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/response/userByPlatformResponse.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3881:
/*!*****************************************************!*\
  !*** ./libs/lib-api-interface/src/lib/token/jwt.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2521:
/*!*********************************!*\
  !*** ./libs/utils/src/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.DataService)
/* harmony export */ });
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index */ 3526);



/***/ }),

/***/ 6086:
/*!*************************************************!*\
  !*** ./libs/utils/src/lib/data/data.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9609);


class DataService {
    constructor() {
        this.selectedSugar = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.walletAddres = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    }
    setSelectedSugar(sugarAmount) {
        try {
            Number(sugarAmount);
            this.selectedSugar.next(sugarAmount);
        }
        catch (error) {
            throw new Error("Error in setSelectedSugar");
        }
    }
    setWalletAddress(walletAddres) {
        try {
            this.walletAddres.next(walletAddres);
        }
        catch (error) {
            throw new Error("Cannot set wallet address");
        }
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 9570:
/*!******************************************!*\
  !*** ./libs/utils/src/lib/data/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* reexport safe */ _data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)
/* harmony export */ });
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ 6086);



/***/ }),

/***/ 3526:
/*!*************************************!*\
  !*** ./libs/utils/src/lib/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* reexport safe */ _data_index__WEBPACK_IMPORTED_MODULE_0__.DataService)
/* harmony export */ });
/* harmony import */ var _data_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/index */ 9570);



/***/ }),

/***/ 8518:
/*!********************************!*\
  !*** ./libs/web3/src/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserWindowRef": () => (/* reexport safe */ _lib_provider_index__WEBPACK_IMPORTED_MODULE_2__.BrowserWindowRef),
/* harmony export */   "ConnectionsService": () => (/* reexport safe */ _lib_connection_index__WEBPACK_IMPORTED_MODULE_4__.ConnectionsService),
/* harmony export */   "ContractService": () => (/* reexport safe */ _lib_service_index__WEBPACK_IMPORTED_MODULE_1__.ContractService),
/* harmony export */   "DetectMetaMask": () => (/* reexport safe */ _lib_provider_index__WEBPACK_IMPORTED_MODULE_2__.DetectMetaMask),
/* harmony export */   "EthereumEventService": () => (/* reexport safe */ _lib_events_index__WEBPACK_IMPORTED_MODULE_3__.EthereumEventService),
/* harmony export */   "PROVIDER": () => (/* reexport safe */ _lib_provider_index__WEBPACK_IMPORTED_MODULE_2__.PROVIDER),
/* harmony export */   "WINDOW": () => (/* reexport safe */ _lib_provider_index__WEBPACK_IMPORTED_MODULE_2__.WINDOW),
/* harmony export */   "WINDOW_PROVIDERS": () => (/* reexport safe */ _lib_provider_index__WEBPACK_IMPORTED_MODULE_2__.WINDOW_PROVIDERS),
/* harmony export */   "Web3Module": () => (/* reexport safe */ _lib_web3_module__WEBPACK_IMPORTED_MODULE_0__.Web3Module),
/* harmony export */   "Web3Service": () => (/* reexport safe */ _lib_service_index__WEBPACK_IMPORTED_MODULE_1__.Web3Service),
/* harmony export */   "WindowRef": () => (/* reexport safe */ _lib_provider_index__WEBPACK_IMPORTED_MODULE_2__.WindowRef),
/* harmony export */   "windowProvider": () => (/* reexport safe */ _lib_provider_index__WEBPACK_IMPORTED_MODULE_2__.windowProvider)
/* harmony export */ });
/* harmony import */ var _lib_web3_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/web3.module */ 8035);
/* harmony import */ var _lib_service_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/service/index */ 4319);
/* harmony import */ var _lib_provider_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/provider/index */ 591);
/* harmony import */ var _lib_events_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/events/index */ 6482);
/* harmony import */ var _lib_connection_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/connection/index */ 6467);







/***/ }),

/***/ 7139:
/*!************************************************************!*\
  !*** ./libs/web3/src/lib/connection/connection.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionsService": () => (/* binding */ ConnectionsService)
/* harmony export */ });
/* harmony import */ var _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cake/lib-api-interface */ 171);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3231);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../provider */ 591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9609);




class ConnectionsService {
    constructor(window) {
        this.window = window;
    }
    connectToGoerli() {
        const { goerli } = _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.ETHEREUM_CHAINS;
        try {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.window.ethereum.request({ method: "eth_requestAccounts" }));
            (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.GOERLI }],
            }));
            return true;
        }
        catch (error) {
            if (error.code === 4902) {
                try {
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [
                            {
                                chainId: goerli.chainId,
                                chainName: goerli.chanName,
                                rpcUrls: goerli.rpcUrls,
                            },
                        ],
                    }));
                    return true;
                }
                catch (e) {
                    throw new Error(error);
                }
            }
            if (error.code === 4001) {
                // User rejected the request.
                throw new Error(error);
            }
        }
        return false;
    }
}
ConnectionsService.ɵfac = function ConnectionsService_Factory(t) { return new (t || ConnectionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_provider__WEBPACK_IMPORTED_MODULE_1__.WINDOW)); };
ConnectionsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ConnectionsService, factory: ConnectionsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 6467:
/*!***********************************************!*\
  !*** ./libs/web3/src/lib/connection/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionsService": () => (/* reexport safe */ _connection_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionsService)
/* harmony export */ });
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection.service */ 7139);



/***/ }),

/***/ 536:
/*!************************************************************!*\
  !*** ./libs/web3/src/lib/events/ethereum.event.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EthereumEventService": () => (/* binding */ EthereumEventService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 5231);
/* harmony import */ var _cake_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cake/utils */ 2521);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ 3123);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ 4420);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../provider */ 591);
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connection */ 6467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 9609);









class EthereumEventService extends ethers__WEBPACK_IMPORTED_MODULE_3__.Signer {
    constructor(window, provider, dataService, connection) {
        super();
        this.window = window;
        this.provider = provider;
        this.dataService = dataService;
        this.connection = connection;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.ReplaySubject();
        if (window.ethereum) {
            this.connectToMetaMask();
            connection.connectToGoerli();
            window.ethereum.on("chainChanged", (chainId) => {
                console.log(chainId);
                window.location.reload();
            });
            window.ethereum.on("accountsChanged", (account) => {
                this.dataService.setWalletAddress(account[0]);
                console.log(this.dataService.walletAddres.value);
            });
        }
    }
    getAddress() {
        throw new Error("Method not implemented.");
    }
    connectToMetaMask() {
        const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.Web3Provider(this.window.ethereum, "any");
        // Prompt user for account connections
        provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(signer.getAddress())
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unsubscribe))
            .subscribe((address) => {
            this.dataService.setWalletAddress(address);
        });
    }
    signMessage(message) {
        console.log(message);
        throw new Error("Method not implemented.");
    }
    signTransaction(transaction) {
        console.log(transaction);
        throw new Error("Method not implemented.");
    }
    connect(provider) {
        console.log(provider);
        throw new Error("Method not implemented.");
    }
    ngOnDestroy() {
        this.unsubscribe.next(null);
        this.unsubscribe.complete();
    }
}
EthereumEventService.ɵfac = function EthereumEventService_Factory(t) { return new (t || EthereumEventService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_provider__WEBPACK_IMPORTED_MODULE_1__.WINDOW), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_provider__WEBPACK_IMPORTED_MODULE_1__.PROVIDER), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_cake_utils__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_connection__WEBPACK_IMPORTED_MODULE_2__.ConnectionsService)); };
EthereumEventService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: EthereumEventService, factory: EthereumEventService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 6482:
/*!*******************************************!*\
  !*** ./libs/web3/src/lib/events/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EthereumEventService": () => (/* reexport safe */ _ethereum_event_service__WEBPACK_IMPORTED_MODULE_0__.EthereumEventService)
/* harmony export */ });
/* harmony import */ var _ethereum_event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ethereum.event.service */ 536);



/***/ }),

/***/ 7424:
/*!******************************************************!*\
  !*** ./libs/web3/src/lib/provider/ether.provider.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PROVIDER": () => (/* binding */ PROVIDER)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ 3006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9609);


class PROVIDER extends ethers__WEBPACK_IMPORTED_MODULE_0__.BaseProvider {
    constructor() {
        super("goerli");
    }
}
PROVIDER.ɵfac = function PROVIDER_Factory(t) { return new (t || PROVIDER)(); };
PROVIDER.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PROVIDER, factory: PROVIDER.ɵfac, providedIn: "root" });


/***/ }),

/***/ 591:
/*!*********************************************!*\
  !*** ./libs/web3/src/lib/provider/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserWindowRef": () => (/* reexport safe */ _window_provider__WEBPACK_IMPORTED_MODULE_0__.BrowserWindowRef),
/* harmony export */   "DetectMetaMask": () => (/* reexport safe */ _metamask_provider__WEBPACK_IMPORTED_MODULE_2__.DetectMetaMask),
/* harmony export */   "PROVIDER": () => (/* reexport safe */ _ether_provider__WEBPACK_IMPORTED_MODULE_1__.PROVIDER),
/* harmony export */   "WINDOW": () => (/* reexport safe */ _window_provider__WEBPACK_IMPORTED_MODULE_0__.WINDOW),
/* harmony export */   "WINDOW_PROVIDERS": () => (/* reexport safe */ _window_provider__WEBPACK_IMPORTED_MODULE_0__.WINDOW_PROVIDERS),
/* harmony export */   "WindowRef": () => (/* reexport safe */ _window_provider__WEBPACK_IMPORTED_MODULE_0__.WindowRef),
/* harmony export */   "windowProvider": () => (/* reexport safe */ _window_provider__WEBPACK_IMPORTED_MODULE_0__.windowProvider)
/* harmony export */ });
/* harmony import */ var _window_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./window.provider */ 2518);
/* harmony import */ var _ether_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ether.provider */ 7424);
/* harmony import */ var _metamask_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metamask.provider */ 5855);





/***/ }),

/***/ 5855:
/*!*********************************************************!*\
  !*** ./libs/web3/src/lib/provider/metamask.provider.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetectMetaMask": () => (/* binding */ DetectMetaMask)
/* harmony export */ });
/* harmony import */ var _Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 4475);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @metamask/detect-provider */ 8313);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1__);


const DetectMetaMask = /*#__PURE__*/function () {
  var _ref = (0,_Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    const provider = yield _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1___default()();
    if (provider) {
      console.log("provider: ", provider);
      return true;
    } else {
      console.log("Please install MetaMask!");
      return false;
    }
  });
  return function DetectMetaMask() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 2518:
/*!*******************************************************!*\
  !*** ./libs/web3/src/lib/provider/window.provider.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserWindowRef": () => (/* binding */ BrowserWindowRef),
/* harmony export */   "WINDOW": () => (/* binding */ WINDOW),
/* harmony export */   "WINDOW_PROVIDERS": () => (/* binding */ WINDOW_PROVIDERS),
/* harmony export */   "WindowRef": () => (/* binding */ WindowRef),
/* harmony export */   "windowProvider": () => (/* binding */ windowProvider)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9609);


//**  Create a new injection token for injecting the window into a component. **/
const WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('WindowToken');
//**  Define abstract class for obtaining reference to the global window object. **/
class WindowRef {
    get nativeWindow() {
        throw new Error('Not implemented.');
    }
}
//**  Define class that implements the abstract class and returns the native window object. **/
class BrowserWindowRef extends WindowRef {
    constructor() {
        super();
    }
    get nativeWindow() {
        return window;
    }
}
//**  Create an factory function that returns the native window object. **/
function windowFactory(browserWindowRef, platformId) {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return new Object();
}
//**  Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. **/
const browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef,
};
//**  Create an injectable provider that uses the windowFactory function for returning the native window object. **/
const windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID],
};
//**  Create an array of providers. **/
const WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];


/***/ }),

/***/ 4193:
/*!*******************************************************!*\
  !*** ./libs/web3/src/lib/service/contract.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractService": () => (/* binding */ ContractService)
/* harmony export */ });
/* harmony import */ var _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cake/lib-api-interface */ 171);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ 6138);
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web3.service */ 9355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9609);





class ContractService extends ethers__WEBPACK_IMPORTED_MODULE_2__.Contract {
    constructor(web3Service) {
        super(_cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.STAKING_CONTRACT, _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__.abi, web3Service);
        this.web3Service = web3Service;
    }
}
ContractService.ɵfac = function ContractService_Factory(t) { return new (t || ContractService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_web3_service__WEBPACK_IMPORTED_MODULE_1__.Web3Service)); };
ContractService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ContractService, factory: ContractService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 4319:
/*!********************************************!*\
  !*** ./libs/web3/src/lib/service/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractService": () => (/* reexport safe */ _contract_service__WEBPACK_IMPORTED_MODULE_1__.ContractService),
/* harmony export */   "Web3Service": () => (/* reexport safe */ _web3_service__WEBPACK_IMPORTED_MODULE_0__.Web3Service)
/* harmony export */ });
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3.service */ 9355);
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contract.service */ 4193);




/***/ }),

/***/ 9355:
/*!***************************************************!*\
  !*** ./libs/web3/src/lib/service/web3.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Web3Service": () => (/* binding */ Web3Service)
/* harmony export */ });
/* harmony import */ var _Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 4475);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3231);
/* harmony import */ var _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cake/lib-api-interface */ 171);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider */ 591);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ 3123);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ 4420);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ 173);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ 6138);
/* harmony import */ var ethers_lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers/lib/utils */ 7384);
/* harmony import */ var ethers_lib_utils__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ethers_lib_utils__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 9609);








class Web3Service extends ethers__WEBPACK_IMPORTED_MODULE_3__.Signer {
  constructor(window, provider) {
    console.log(window);
    super();
    this.window = window;
    this.provider = provider;
  }
  connectToMetaMask() {
    var _this = this;
    return (0,_Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.Web3Provider(_this.window.ethereum, "any");
      // Prompt user for account connections
      yield provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      console.log("Account:", yield signer.getAddress());
      return yield signer.getAddress();
    })();
  }
  signTransaction(_transaction) {
    console.log("_transaction: ", _transaction);
    throw new Error("Method not implemented.");
  }
  connect(_provider) {
    console.log("_provider: ", _provider);
    throw new Error("Method not implemented.");
  }
  login(password) {
    var _this2 = this;
    return (0,_Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const wallet = yield ethers__WEBPACK_IMPORTED_MODULE_5__.Wallet.fromEncryptedJson(localStorage["get"]("wallet"), password);
      _this2.wallet = wallet.connect(_this2.provider);
    })();
  }
  getAddress() {
    return this.wallet.getAddress();
  }
  signMessage(message) {
    return this.wallet.signMessage(message);
  }
  sendTransaction(transaction) {
    return this.wallet.sendTransaction(transaction);
  }
  getUserBalance() {
    const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.Web3Provider(this.window.ethereum);
    provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const daiAddress = _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_1__.USDT_CONTRACT;
    let userbalance = "";
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(signer.getAddress()).forEach(address => {
      console.log(address, "signer address");
      const daiContract = new ethers__WEBPACK_IMPORTED_MODULE_7__.Contract(daiAddress, _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_1__.USDT_ABI, signer);
      const t = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(daiContract["balanceOf"](address)).subscribe(res => {
        console.log((0,ethers_lib_utils__WEBPACK_IMPORTED_MODULE_8__.formatUnits)(res._hex, 18), "balance daaa");
        userbalance = (0,ethers_lib_utils__WEBPACK_IMPORTED_MODULE_8__.formatUnits)(res._hex, 18);
      });
    });
    return Number(userbalance);
  }
  approve() {
    var _this3 = this;
    return (0,_Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.Web3Provider(_this3.window.ethereum);
      yield provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      console.log(signer);
      const daiAddress = _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_1__.USDT_CONTRACT;
      const daiContract = new ethers__WEBPACK_IMPORTED_MODULE_7__.Contract(daiAddress, _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_1__.USDT_ABI, signer);
      console.log();
      const t = yield daiContract["approve"](_cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_1__.STAKING_CONTRACT, "500000000000000000000000");
      // t.hash();
      t.wait().then(receipt => {
        console.log(receipt);
      });
    })();
  }
  checkAllowance(selectedAddress) {
    var _this4 = this;
    return (0,_Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.Web3Provider(_this4.window.ethereum);
      const signer = provider.getSigner();
      const address = yield provider.send("eth_requestAccounts", []);
      console.log(address[0], "user address");
      const daiAddress = _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_1__.USDT_CONTRACT;
      const daiContract = new ethers__WEBPACK_IMPORTED_MODULE_7__.Contract(daiAddress, _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_1__.USDT_ABI, signer);
      const {
        _hex
      } = yield daiContract["allowance"](selectedAddress, _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_1__.STAKING_CONTRACT);
      console.log(_hex, "allowance");
      return _hex === "0x00";
    })();
  }
  deposit(amount) {
    var _this5 = this;
    return (0,_Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.Web3Provider(_this5.window.ethereum);
      yield provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      console.log(signer);
      const daiAddress = _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_1__.STAKING_CONTRACT;
      const daiContract = new ethers__WEBPACK_IMPORTED_MODULE_7__.Contract(daiAddress, _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_1__.abi, signer);
      console.log();
      const t = yield daiContract["stake"]((0,ethers_lib_utils__WEBPACK_IMPORTED_MODULE_8__.parseUnits)(String(amount), 18));
      t.wait().then(receipt => {
        console.log(receipt);
      });
    })();
  }
}
Web3Service.ɵfac = function Web3Service_Factory(t) {
  return new (t || Web3Service)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_provider__WEBPACK_IMPORTED_MODULE_2__.WINDOW), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_provider__WEBPACK_IMPORTED_MODULE_2__.PROVIDER));
};
Web3Service.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: Web3Service,
  factory: Web3Service.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 8035:
/*!******************************************!*\
  !*** ./libs/web3/src/lib/web3.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Web3Module": () => (/* binding */ Web3Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 2954);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider */ 591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9609);




class Web3Module {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('Web3Module is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot() {
        return {
            ngModule: Web3Module,
            providers: [],
        };
    }
}
Web3Module.ɵfac = function Web3Module_Factory(t) { return new (t || Web3Module)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](Web3Module, 12)); };
Web3Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Web3Module });
Web3Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [_provider__WEBPACK_IMPORTED_MODULE_0__.WINDOW_PROVIDERS], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Web3Module, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] }); })();


/***/ }),

/***/ 6601:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(9962)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map