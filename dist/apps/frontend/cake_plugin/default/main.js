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
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tree */ 3453);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/bidi */ 2867);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/clipboard */ 6079);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/observers */ 3773);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/platform */ 9107);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/portal */ 7520);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/stepper */ 1861);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/cdk/table */ 9673);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/cdk/text-field */ 5804);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/cdk/tree */ 5183);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


















































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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_constants_main_list_components_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/constants/main-list-components.enum */ 7091);
/* harmony import */ var _core_guards_access_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/guards/access.guard */ 1406);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/guards/auth.guard */ 8057);
/* harmony import */ var _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/content-layout/content-layout.component */ 8326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







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
                    canActivate: [_core_guards_access_guard__WEBPACK_IMPORTED_MODULE_1__.AccessGuard],
                },
            },
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "apps_frontend_src_app_modules_main_main_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/main/main.module */ 1401)).then((m) => m.MainModule),
                data: {
                    webAllowed: true,
                    pluginAllowed: true,
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
                }
            },
            {
                path: 'grab-a-slice/:id',
                loadChildren: () => __webpack_require__.e(/*! import() */ "apps_frontend_src_app_modules_main-list_main-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/main-list/main-list.module */ 4056)).then((m) => m.MainListModule),
                data: {
                    page: _core_constants_main_list_components_enum__WEBPACK_IMPORTED_MODULE_0__.MainListComponentsEnum.Grab,
                    webAllowed: true,
                    pluginAllowed: false,
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
/* harmony import */ var _Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _core_types_Themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/types/Themes */ 6251);
/* harmony import */ var _services_svg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/svg.service */ 7888);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/theme.service */ 1266);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 9386);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);












class AppComponent {
  constructor(themeService, svgService, router, zone, document) {
    this.themeService = themeService;
    this.svgService = svgService;
    this.router = router;
    this.zone = zone;
    this.document = document;
    this.title = 'frontend';
    this.themeService.changeActiveTheme(localStorage.getItem('theme') === 'dark-theme' ? _core_types_Themes__WEBPACK_IMPORTED_MODULE_1__.DarkTheme : _core_types_Themes__WEBPACK_IMPORTED_MODULE_1__.LightTheme);
    this.svgService.registerSvg();

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.plugin) {
      this.document.body.classList.add('plugin');
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
          }); // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore


          yield chrome.storage.sync.remove('redirect', () => {// Your code
            // This is an asyn function
          }); // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore

          yield chrome.storage.local.remove('redirect', () => {// Your code
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
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_svg_service__WEBPACK_IMPORTED_MODULE_2__.SvgService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["cake-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet],
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 9503);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/header/header.component */ 2382);
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/footer/footer.component */ 7683);
/* harmony import */ var _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/content-layout/content-layout.component */ 8326);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ 4394);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ 811);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-skeleton-loader */ 8495);
/* harmony import */ var _core_Interceptors_handle_error_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/Interceptors/handle-error.interceptor */ 5951);
/* harmony import */ var _cake_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @cake/web3 */ 8518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);

















class AppModule {
    constructor(web3Service, contractService) {
        this.web3Service = web3Service;
        this.contractService = contractService;
        console.log('AppModule loaded');
        console.log(this.contractService.address);
        this.web3Service.connectToMetaMask();
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_cake_web3__WEBPACK_IMPORTED_MODULE_7__.Web3Service), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_cake_web3__WEBPACK_IMPORTED_MODULE_7__.ContractService)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS,
            useClass: _core_Interceptors_handle_error_interceptor__WEBPACK_IMPORTED_MODULE_6__.HandleErrorInterceptor,
            multi: true,
        },
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrModule.forRoot(),
        ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastContainerModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__.NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...' }),
        _cake_web3__WEBPACK_IMPORTED_MODULE_7__.Web3Module] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_3__.ContentLayoutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastContainerModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__.NgxSkeletonLoaderModule, _cake_web3__WEBPACK_IMPORTED_MODULE_7__.Web3Module] }); })();


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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/toaster.service */ 905);
/* harmony import */ var _types_toaster_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/toaster-position */ 7564);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 5894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);








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
/* harmony import */ var apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apps/frontend/src/environments/environment */ 9386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





class AccessGuard {
    constructor(router, zone) {
        this.router = router;
        this.zone = zone;
        this.isPlugin = apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.plugin;
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
        if (!route.data['webAllowed']) {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FollowersCountPipe {
    getNumber(value) {
        if (value < 1000)
            return `${value}`;
        else if (value > 1000 && value < 1000000)
            return `${(value / 1000).toFixed(1)}k`.replace(',', '.');
        else
            return `${(value / 1000000).toFixed(2)}m`.replace(',', '.');
    }
    getClass(value) {
        if (value < 10000)
            return 'gradient-red-numbers';
        else if (value > 10000 && value < 100000)
            return 'gradient-yellow-numbers';
        else
            return 'gradient-green-numbers';
    }
    transform(value) {
        return `<span class='${this.getClass(value)}'>${this.getNumber(value)}</span>`;
    }
}
FollowersCountPipe.ɵfac = function FollowersCountPipe_Factory(t) { return new (t || FollowersCountPipe)(); };
FollowersCountPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "followersCount", type: FollowersCountPipe, pure: true });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

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
        '--skeleton-color': '#EADDD0',
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
        '--box-shadow': 'rgba(152, 149, 149, 0.16)',
        '--deg-gradient-enabled-input': '180deg',
        '--gradient-left-enabled-input': '#F2CCAD 0%',
        '--gradient-right-enabled-input': '#F4ACAC 100%',
        '--deg-gradient-1': '111.26deg',
        '--color-gradient-left-1': '#CE2791 3.93%',
        '--color-gradient-right-1': '#FF7070 87.6%',
        '--color-gradient-name-left-1': '#FF7070 3.93%',
        '--color-gradient-name-right-1': '#CE2791 87.6%',
        '--deg-gradient-2': '111.26deg',
        '--color-gradient-left-2': 'rgba(206, 39, 145, 0.23) 3.93%',
        '--color-gradient-right-2': 'rgba(255, 112, 112, 0.23) 87.6%',
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
        '--deg-gradient-toastr': '304.88deg',
        '--color-toastr-left': '#EF3F1933',
        '--color-toastr-right': '#EC1A1A',
        '--color-toasrt-text': '#EC1A1A;',
        '--opacity-color': 'rgba(0, 0, 0, 0.05)'
    },
};
const DarkTheme = {
    name: 'dark-theme',
    properties: {
        '--skeleton-color': '#34284C',
        '--header-color-gradient-left-1': '#60003D',
        '--header-color-gradient-right-1': '#523C73',
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
        '--deg-gradient-toastr': '304.88deg',
        '--color-toastr-left': '#E1381440',
        '--color-toastr-right': '#CC141440',
        '--color-toasrt-text': '#EC1A1A;',
        '--opacity-color': 'rgba(255, 255, 255, 0.04)'
    },
};


/***/ }),

/***/ 2832:
/*!****************************************************************!*\
  !*** ./apps/frontend/src/app/core/types/page-title-options.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageTitle": () => (/* binding */ PageTitle)
/* harmony export */ });
var PageTitle;
(function (PageTitle) {
    PageTitle["grab"] = "grab-a-slice";
    PageTitle["rewards"] = "rewards";
    PageTitle["profile"] = "profile";
    PageTitle["settings"] = "profile/settings";
    PageTitle["confectionary"] = "confectionary";
})(PageTitle || (PageTitle = {}));


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
/* harmony import */ var _Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/classes/watcher */ 34);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ 2382);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ 7683);










function ContentLayoutComponent_cake_app_header_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "cake-app-header");
  }
}

function ContentLayoutComponent_cake_app_footer_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "cake-app-footer", 3);
  }
}

class ContentLayoutComponent extends _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_1__.Watcher {
  constructor(router) {
    var _this;

    super();
    _this = this;
    this.router = router;
    this.hideDefaultHeader = false;
    this.hideDefaultFooter = false;
    this.routesToHideHeader = ['/auth/sign-up', '/auth/sign-in'];
    this.routesToHideFooter = ['/auth/sign-up', '/auth/sign-in'];
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscribe)).subscribe( /*#__PURE__*/function () {
      var _ref = (0,_Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ev) {
        if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
          _this.hideDefaultHeader = _this.routesToHideHeader.some(url => ev.url.indexOf(url) !== -1);
          _this.hideDefaultFooter = _this.routesToHideFooter.some(url => ev.url.indexOf(url) !== -1);
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

}

ContentLayoutComponent.ɵfac = function ContentLayoutComponent_Factory(t) {
  return new (t || ContentLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};

ContentLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ContentLayoutComponent,
  selectors: [["cake-app-content-layout"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 5,
  vars: 2,
  consts: [[1, "sparkles"], [4, "ngIf"], ["class", "cake-footer", 4, "ngIf"], [1, "cake-footer"]],
  template: function ContentLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ContentLayoutComponent_cake_app_header_2_Template, 1, 0, "cake-app-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ContentLayoutComponent_cake_app_footer_4_Template, 1, 0, "cake-app-footer", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.hideDefaultHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.hideDefaultFooter);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
  styles: [".sparkles[_ngcontent-%COMP%] {\n  background-image: url('sparkles-dark.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100vh;\n}\n.sparkles[_ngcontent-%COMP%]   .cake-footer[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0FBQ0oiLCJmaWxlIjoiY29udGVudC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhcmtsZXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWdzL3NwYXJrbGVzLWRhcmsucG5nJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICAuY2FrZS1mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbn1cbiJdfQ== */"]
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
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/theme.service */ 1266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class FooterComponent {
    constructor(themeService) {
        this.themeService = themeService;
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService)); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["cake-app-footer"]], decls: 29, vars: 4, consts: [[1, "vectors-bg"], ["width", "1440", "height", "80", "viewBox", "0 0 1440 80", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "block-1"], ["d", "M24.9562 5.11244C224.461 -13.2021 714.477 24.0811 997.985 17.5402C1202.25 12.8275 1364.99 11.1707 1440 10.6128V80H0V8.01714C7.66807 6.91039 15.9725 5.93714 24.9562 5.11244Z", "fill", "url(#paint0_linear_942_23890)"], ["id", "paint0_linear_942_23890", "x1", "38.2089", "y1", "80", "x2", "60.3322", "y2", "-112.182", "gradientUnits", "userSpaceOnUse"], ["offset", "1"], ["width", "1440", "height", "103", "viewBox", "0 0 1440 103", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "block-2"], ["d", "M23.499 5C223.004 -16.3405 743.991 41.1216 1027.5 33.5C1226.18 28.1587 1371.08 21.7358 1440 18.3706V103H0V8.16966C7.25735 6.96233 15.0785 5.90072 23.499 5Z", "fill", "url(#paint0_linear_942_23889)", "fill-opacity", "0.23"], ["id", "paint0_linear_942_23889", "x1", "-43.241", "y1", "138", "x2", "15.7967", "y2", "-186.637", "gradientUnits", "userSpaceOnUse"], [1, "text-container"], ["routerLink", "/grab-a-slice", 1, "link"], ["routerLink", "/confectionery", 1, "link"], ["routerLink", "/about", 1, "link"], [1, "sub-logo"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "defs")(5, "linearGradient", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "stop")(7, "stop", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "defs")(11, "linearGradient", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "stop")(13, "stop", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8)(15, "div")(16, "ul")(17, "li")(18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Grab a slice!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Confectionery");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12)(27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u00A9 2022 Cak3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("stop-color", ctx.themeService.active.properties["--footer-color-gradient-left-1"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("stop-color", ctx.themeService.active.properties["--footer-color-gradient-right-1"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("stop-color", ctx.themeService.active.properties["--footer-color-gradient-left-1"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("stop-color", ctx.themeService.active.properties["--footer-color-gradient-right-1"]);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["footer[_ngcontent-%COMP%] {\n  padding: 30px 50px 0 50px;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n}\n@media (max-width: 1439px) {\n  footer[_ngcontent-%COMP%] {\n    overflow: hidden;\n    height: 70px;\n  }\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   .block-1[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   .block-2[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n}\n@media (min-width: 1440px) {\n  footer[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   .block-1[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   .block-2[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n}\nfooter[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   .block-3[_ngcontent-%COMP%] {\n  bottom: 0;\n}\nfooter[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n  z-index: 9;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\nfooter[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  footer[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nfooter[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0 20px;\n}\nfooter[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-decoration: none;\n  padding-bottom: 8px;\n  color: #ffffff;\n  font-family: \"Gilroy-400\";\n}\nfooter[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link.active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #ffffff;\n}\nfooter[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid #ffffff;\n}\nfooter[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-decoration: none;\n  padding-bottom: 8px;\n  color: #ffffff;\n  font-family: \"Gilroy-400\";\n}\n@media (max-width: 768px) {\n  footer[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFKRjtBQUtFO0VBTEY7SUFNSSxnQkFBQTtJQUNBLFlBQUE7RUFGRjtBQUNGO0FBSUU7RUFDRSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBRko7QUFJSTtFQUNFLGtCQUFBO0FBRk47QUFLSTs7RUFFRSxTQUFBO0VBQ0EsT0FBQTtBQUhOO0FBS007RUFMRjs7SUFNSSxXQUFBO0lBQ0EsWUFBQTtFQUROO0FBQ0Y7QUFJSTtFQUNFLFNBQUE7QUFGTjtBQU1FO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFKSjtBQUtJO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUFITjtBQUtNO0VBSkY7SUFLSSxhQUFBO0VBRk47QUFDRjtBQUlNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFGUjtBQUlRO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUE5RFIsY0FBQTtFQUNBLHlCQUFBO0FBNkRGO0FBR1U7RUFDRSxnQ0FBQTtBQURaO0FBSVU7RUFDRSxnQ0FBQTtBQUZaO0FBUUk7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQS9FSixjQUFBO0VBQ0EseUJBQUE7QUEwRUY7QUFPTTtFQU5GO0lBT0ksYUFBQTtFQUpOO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGZvbnQtY29sb3Ige1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNDAwJztcbn1cblxuZm9vdGVyIHtcbiAgcGFkZGluZzogMzBweCA1MHB4IDAgNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNDM5cHgpIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogNzBweDtcbiAgfVxuXG4gIC52ZWN0b3JzLWJnIHtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDA7XG5cbiAgICBzdmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuICAgIC5ibG9jay0xLFxuICAgIC5ibG9jay0yIHtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYmxvY2stMyB7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuICB9XG5cbiAgLnRleHQtY29udGFpbmVyIHtcbiAgICB6LWluZGV4OiA5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHVsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuXG4gICAgICAgIC5saW5rIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgQGluY2x1ZGUgZm9udC1jb2xvcjtcblxuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgQGluY2x1ZGUgZm9udC1jb2xvcjtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


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
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/url.service */ 7664);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search.service */ 6490);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 679);
/* harmony import */ var _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/classes/watcher */ 34);
/* harmony import */ var _core_types_page_title_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/types/page-title-options */ 2832);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ 5894);
/* harmony import */ var _core_types_Themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/types/Themes */ 6251);
/* harmony import */ var _services_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/title.service */ 8373);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/input/input.component */ 9852);
/* harmony import */ var _core_pipes_page_title_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/pipes/page-title.pipe */ 3951);
























function HeaderComponent_div_31_ng_container_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "svg", 44)(4, "g", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "defs")(7, "filter", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "feFlood", 31)(9, "feColorMatrix", 32)(10, "feOffset", 33)(11, "feGaussianBlur", 34)(12, "feComposite", 35)(13, "feColorMatrix", 36)(14, "feBlend", 48)(15, "feBlend", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "pageTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 2, ctx_r7.titleService.getPageTitle(ctx_r7.pageTitle)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](20, 4, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](21, 6, ctx_r7.authService.userProfile)) == null ? null : tmp_1_0.sugar), " Sugar");
  }
}

function HeaderComponent_div_31_ng_container_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HeaderComponent_div_31_ng_container_1_div_16_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r9.switchSearchState());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "svg", 52)(2, "g", 53)(3, "g", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "path", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "g", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "path", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "defs")(8, "filter", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "feFlood", 31)(10, "feColorMatrix", 32)(11, "feOffset", 33)(12, "feGaussianBlur", 34)(13, "feComposite", 35)(14, "feColorMatrix", 36)(15, "feBlend", 59)(16, "feBlend", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "filter", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "feFlood", 31)(19, "feColorMatrix", 32)(20, "feOffset", 33)(21, "feGaussianBlur", 34)(22, "feComposite", 35)(23, "feColorMatrix", 36)(24, "feBlend", 59)(25, "feBlend", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "clipPath", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "rect", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
}

function HeaderComponent_div_31_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HeaderComponent_div_31_ng_container_1_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r11.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "svg", 27)(3, "g", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "defs")(6, "filter", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "feFlood", 31)(8, "feColorMatrix", 32)(9, "feOffset", 33)(10, "feGaussianBlur", 34)(11, "feComposite", 35)(12, "feColorMatrix", 36)(13, "feBlend", 37)(14, "feBlend", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, HeaderComponent_div_31_ng_container_1_div_15_Template, 22, 8, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, HeaderComponent_div_31_ng_container_1_div_16_Template, 28, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](36);

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r6.isSettings && !ctx_r6.isProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r6.isSettings && !ctx_r6.isProfile)("ngIfElse", _r4);
  }
}

function HeaderComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HeaderComponent_div_31_ng_container_1_Template, 17, 3, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](34);

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.isSearchOpened)("ngIfElse", _r2);
  }
}

function HeaderComponent_div_32_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 80)(1, "div", 42)(2, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 3, ctx_r13.authService.userProfile)) == null ? null : tmp_0_0.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 5, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 7, ctx_r13.authService.userProfile)) == null ? null : tmp_1_0.sugar));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("src", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 9, ctx_r13.authService.userProfile)) == null ? null : tmp_2_0.avatar) || ctx_r13.profileImg, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}

function HeaderComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 64)(1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "nav", 67)(4, "ul")(5, "li")(6, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Grab a slice!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "li")(9, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Confectionery");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "li")(12, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Rewards");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "li")(15, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, HeaderComponent_div_32_div_17_Template, 12, 11, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 73)(20, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 1, ctx_r1.authService.userProfile));
  }
}

function HeaderComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 83)(1, "cake-input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("inputClose", function HeaderComponent_ng_template_33_Template_cake_input_inputClose_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r14.switchSearchState());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "svg", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "path", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hasCloseCircle", true)("control", ctx_r3.receiveFormControl());
  }
}

function HeaderComponent_ng_template_35_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HeaderComponent_ng_template_35_mat_icon_1_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r19.changeTheme(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "dark_mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function HeaderComponent_ng_template_35_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HeaderComponent_ng_template_35_mat_icon_2_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r21.changeTheme(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "light_mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function HeaderComponent_ng_template_35_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-icon", 91);
  }
}

function HeaderComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HeaderComponent_ng_template_35_mat_icon_1_Template, 2, 0, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HeaderComponent_ng_template_35_mat_icon_2_Template, 2, 0, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, HeaderComponent_ng_template_35_mat_icon_3_Template, 1, 0, "mat-icon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.themeService.active.name === "light-theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.themeService.active.name === "dark-theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r5.isSettings);
  }
}

class HeaderComponent extends _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_3__.Watcher {
  constructor(themeService, location, urlService, searchService, router, cdr, authService, zone, titleService) {
    super();
    this.themeService = themeService;
    this.location = location;
    this.urlService = urlService;
    this.searchService = searchService;
    this.router = router;
    this.cdr = cdr;
    this.authService = authService;
    this.zone = zone;
    this.titleService = titleService;
    this.isSearchOpened = false;
    this.pageTitle = '';
    this.redirectTo = '';
    this.isMobileHeaderVisible = false;
    this.isDesktopHeaderVisible = false;
  }

  get profileImg() {
    return this.authService.randomAvatar;
  }

  ngOnInit() {
    this.urlService.titleSubj.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe)).subscribe({
      next: title => {
        if (this.pageTitle !== title) {
          this.pageTitle = title;
          this.cdr.detectChanges();
        }
      }
    });
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_13__.RoutesRecognized), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.pairwise)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe)).subscribe({
      next: events => {
        this.redirectTo = events[0].urlAfterRedirects;
      }
    });
  }

  switchSearchState() {
    this.isSearchOpened = !this.isSearchOpened;
  }

  onResize() {
    this.cdr.detectChanges();
  }

  get isMobileHeader() {
    return this.pageTitle === _core_types_page_title_options__WEBPACK_IMPORTED_MODULE_4__.PageTitle.grab && window.innerWidth <= 768 || this.pageTitle === _core_types_page_title_options__WEBPACK_IMPORTED_MODULE_4__.PageTitle.rewards && window.innerWidth <= 768 || this.pageTitle === _core_types_page_title_options__WEBPACK_IMPORTED_MODULE_4__.PageTitle.confectionary && window.innerWidth <= 768 || this.pageTitle === _core_types_page_title_options__WEBPACK_IMPORTED_MODULE_4__.PageTitle.profile && window.innerWidth <= 768 || this.pageTitle === _core_types_page_title_options__WEBPACK_IMPORTED_MODULE_4__.PageTitle.settings && window.innerWidth <= 768;
  }

  get isDesktopHeader() {
    return !this.pageTitle || this.pageTitle === _core_types_page_title_options__WEBPACK_IMPORTED_MODULE_4__.PageTitle.grab && window.innerWidth > 768 || this.pageTitle === _core_types_page_title_options__WEBPACK_IMPORTED_MODULE_4__.PageTitle.rewards && window.innerWidth > 768 || this.pageTitle === _core_types_page_title_options__WEBPACK_IMPORTED_MODULE_4__.PageTitle.profile && window.innerWidth > 768 || this.pageTitle === _core_types_page_title_options__WEBPACK_IMPORTED_MODULE_4__.PageTitle.settings && window.innerWidth > 768 || this.pageTitle === _core_types_page_title_options__WEBPACK_IMPORTED_MODULE_4__.PageTitle.confectionary && window.innerWidth > 768;
  }

  get isProfile() {
    return this.pageTitle === _core_types_page_title_options__WEBPACK_IMPORTED_MODULE_4__.PageTitle.profile;
  }

  get isSettings() {
    return this.pageTitle === _core_types_page_title_options__WEBPACK_IMPORTED_MODULE_4__.PageTitle.settings;
  }

  back() {
    if (this.redirectTo.includes('auth')) {
      this.zone.run(() => {
        this.router.navigateByUrl('/home');
      });
      return;
    }

    this.location.back();
  }

  receiveFormControl() {
    return this.searchService.getFormControl();
  } //FOR MVP1


  changeTheme(boolean) {
    this.themeService.changeActiveTheme(boolean ? _core_types_Themes__WEBPACK_IMPORTED_MODULE_6__.DarkTheme : _core_types_Themes__WEBPACK_IMPORTED_MODULE_6__.LightTheme);
  }

}

HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_1__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_title_service__WEBPACK_IMPORTED_MODULE_7__.TitleService));
};

HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["cake-app-header"]],
  hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("resize", function HeaderComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveWindow"]);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 37,
  vars: 12,
  consts: [[1, "header"], [1, "vectors-bg", "desktop"], ["width", "1440", "height", "146", "viewBox", "0 0 1440 146", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "block-1"], ["opacity", "0.23", "d", "M1430 129C1219 184.5 649.501 79 290.001 107C134.945 119.077 48.3479 129.851 0 138.2V0H1440V126.251C1436.77 127.18 1433.44 128.097 1430 129Z", "fill", "url(#paint0_linear_942_22557)"], ["id", "paint0_linear_942_22557", "x1", "1361.49", "y1", "9.86852e-05", "x2", "1255.85", "y2", "406.973", "gradientUnits", "userSpaceOnUse"], ["offset", "1"], ["width", "1440", "height", "171", "viewBox", "0 0 1440 171", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "block-2"], ["d", "M68.5 157C69.8333 150.833 74.6015 133.897 68.5 127C57 114 29.8682 127.916 21 129.5C14.0438 130.742 6.21324 130.12 0 129.071V103.687L106 100H294.5C221 104 217 122.937 204 127C188.5 131.844 177.5 125 165.5 123.5C153.5 122 150 136 141 140.5C122.98 149.51 110.46 119.835 90 134C75.5693 143.99 96 166.5 79.5 170.5C70.9389 172.575 66.7703 165 68.5 157Z", "fill", "url(#paint0_linear_1096_24532)"], ["d", "M1376 116C1176.5 144 686.5 87 403 97C229.027 103.137 85.1802 105.884 0 107.091V0H1440V98.9911C1424.08 106.31 1403.14 112.191 1376 116Z", "fill", "url(#paint1_linear_1096_24532)"], ["id", "paint0_linear_1096_24532", "x1", "12.8564", "y1", "97", "x2", "117.359", "y2", "230.103", "gradientUnits", "userSpaceOnUse"], ["offset", "0.132203"], ["offset", "0.958151"], ["id", "paint1_linear_1096_24532", "x1", "1361.49", "y1", "8.40371e-05", "x2", "1283.53", "y2", "352.683", "gradientUnits", "userSpaceOnUse"], [1, "vectors-bg", "mobile"], ["width", "368", "height", "91", "viewBox", "0 0 368 91", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "block-1"], ["opacity", "0.23", "d", "M141.5 73C75 68 30.5 77.5 0 88.5V12C0 5.37258 5.37258 0 12 0H356C362.627 0 368 5.37258 368 12V90.5C235.5 93.5 192.651 76.846 141.5 73Z", "fill", "url(#paint0_linear_337_9412)"], ["id", "paint0_linear_337_9412", "x1", "20.0648", "y1", "6.16686e-05", "x2", "142.881", "y2", "193.5", "gradientUnits", "userSpaceOnUse"], ["width", "368", "height", "100", "viewBox", "0 0 368 100", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "block-2"], ["d", "M368 83C283.5 92.5 227 81 150 74.5C120.655 72.0228 101.969 73.1912 67.6584 77.9613C61.0334 79.5851 60.7387 80.0827 56.0868 82.6201C51.435 85.1575 48.5853 82.0566 46.3621 84.2369C42.5251 88 39.8061 90.0212 34.9607 88C30.1153 85.9788 29.3191 85.0311 27.5 85.5C27.5 85.5 24.5 86.3865 26.4423 90.8956C28.8456 96.475 26.7162 99.0572 24.0975 99.0572C21.0346 99.0572 19.9303 95.9231 21 92.5C23.5 84.5 18.2643 85 15 85.5C9.04208 86.4366 5.69477 87.1008 0 88V8C0 3.58172 3.58172 0 8 0H360C364.418 0 368 3.58172 368 8V83Z", "fill", "url(#paint0_linear_547_14011)"], ["id", "paint0_linear_547_14011", "x1", "20.0648", "y1", "6.72327e-05", "x2", "158.544", "y2", "200.121", "gradientUnits", "userSpaceOnUse"], ["class", "wrapper-mobile", 4, "ngIf"], ["class", "wrapper-desktop", 4, "ngIf"], ["searchTemplate", ""], ["settingsTemplate", ""], [1, "wrapper-mobile"], [4, "ngIf", "ngIfElse"], [1, "back-button", "pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "23", "viewBox", "0 0 18 23", "fill", "none"], ["filter", "url(#filter0_d_345_9489)"], ["d", "M12.375 4.25L5.625 11L12.375 17.75", "stroke", "white", "stroke-opacity", "0.8", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "shape-rendering", "crispEdges"], ["id", "filter0_d_345_9489", "x", "0.625", "y", "0.25", "width", "16.75", "height", "23.5", "filterUnits", "userSpaceOnUse", "color-interpolation-filters", "sRGB"], ["flood-opacity", "0", "result", "BackgroundImageFix"], ["in", "SourceAlpha", "type", "matrix", "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", "result", "hardAlpha"], ["dy", "1"], ["stdDeviation", "2"], ["in2", "hardAlpha", "operator", "out"], ["type", "matrix", "values", "0 0 0 0 0.404167 0 0 0 0 0.404167 0 0 0 0 0.404167 0 0 0 0.15 0"], ["mode", "normal", "in2", "BackgroundImageFix", "result", "effect1_dropShadow_345_9489"], ["mode", "normal", "in", "SourceGraphic", "in2", "effect1_dropShadow_345_9489", "result", "shape"], ["class", "user-detail", 4, "ngIf"], ["class", "search-section", 3, "click", 4, "ngIf", "ngIfElse"], [1, "user-detail"], [1, "info"], [1, "user-name"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", 1, "reward-icon"], ["filter", "url(#filter0_d_517_14056)"], ["d", "M16.8016 1.60299C15.7115 1.5685 14.6422 1.90624 13.7698 2.56059C12.8973 3.21494 12.2737 4.14689 12.0016 5.20299C11.7295 4.14689 11.1058 3.21494 10.2334 2.56059C9.36089 1.90624 8.2916 1.5685 7.20156 1.60299C4.43036 1.51499 3.57756 4.47499 4.51036 6.39979H2.40156C2.18939 6.39979 1.98591 6.48407 1.83588 6.6341C1.68585 6.78413 1.60156 6.98762 1.60156 7.19979V8.79979C1.60156 9.01196 1.68585 9.21544 1.83588 9.36547C1.98591 9.5155 2.18939 9.59979 2.40156 9.59979H21.6016C21.8137 9.59979 22.0172 9.5155 22.1672 9.36547C22.3173 9.21544 22.4016 9.01196 22.4016 8.79979V7.19979C22.4016 6.98762 22.3173 6.78413 22.1672 6.6341C22.0172 6.48407 21.8137 6.39979 21.6016 6.39979H19.512C20.4816 4.50379 19.6688 1.60139 16.8656 1.60139H16.8016V1.60299ZM17.0944 6.39979H13.6016C13.6024 5.55165 13.9399 4.73854 14.54 4.13911C15.14 3.53969 15.9534 3.20299 16.8016 3.20299C18.6816 3.20299 19.0144 6.19819 17.0944 6.39979ZM10.4016 6.39979H6.86876C5.21276 6.21259 5.11516 3.36939 6.93276 3.20299C7.02217 3.1948 7.11215 3.1948 7.20156 3.20299C8.0497 3.20299 8.86315 3.53969 9.46317 4.13911C10.0632 4.73854 10.4007 5.55165 10.4016 6.39979ZM3.20156 11.2014V18.4014C3.20156 19.0379 3.45442 19.6484 3.90451 20.0984C4.35459 20.5485 4.96504 20.8014 5.60156 20.8014H11.0485V11.2014H3.20156ZM13.0175 11.2014V20.8014H18.4016C19.0381 20.8014 19.6485 20.5485 20.0986 20.0984C20.5487 19.6484 20.8016 19.0379 20.8016 18.4014V11.2014H13.0175Z", "fill", "white", "fill-opacity", "0.8", "shape-rendering", "crispEdges"], ["id", "filter0_d_517_14056", "x", "-2.39844", "y", "-1.39941", "width", "28.8008", "height", "27.2012", "filterUnits", "userSpaceOnUse", "color-interpolation-filters", "sRGB"], ["mode", "normal", "in2", "BackgroundImageFix", "result", "effect1_dropShadow_517_14056"], ["mode", "normal", "in", "SourceGraphic", "in2", "effect1_dropShadow_517_14056", "result", "shape"], [1, "sugar"], [1, "search-section", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none"], ["clip-path", "url(#clip0_345_9496)"], ["filter", "url(#filter0_d_345_9496)"], ["d", "M10.3636 3C8.90722 3 7.48354 3.43187 6.2726 4.24099C5.06167 5.05011 4.11786 6.20015 3.56052 7.54567C3.00319 8.89119 2.85737 10.3718 3.14149 11.8002C3.42562 13.2286 4.12693 14.5406 5.15675 15.5704C6.18657 16.6003 7.49863 17.3016 8.92703 17.5857C10.3554 17.8698 11.836 17.724 13.1815 17.1667C14.527 16.6093 15.6771 15.6655 16.4862 14.4546C17.2953 13.2437 17.7272 11.82 17.7272 10.3636C17.7271 8.41069 16.9512 6.5378 15.5703 5.15688C14.1894 3.77597 12.3165 3.00012 10.3636 3Z", "stroke", "white", "stroke-opacity", "0.8", "stroke-width", "2", "stroke-miterlimit", "10", "shape-rendering", "crispEdges"], ["filter", "url(#filter1_d_345_9496)"], ["d", "M15.8555 15.8574L20.9981 21.0001", "stroke", "white", "stroke-opacity", "0.8", "stroke-width", "2", "stroke-miterlimit", "10", "stroke-linecap", "round", "shape-rendering", "crispEdges"], ["id", "filter0_d_345_9496", "x", "-2", "y", "-1", "width", "24.7266", "height", "24.7275", "filterUnits", "userSpaceOnUse", "color-interpolation-filters", "sRGB"], ["mode", "normal", "in2", "BackgroundImageFix", "result", "effect1_dropShadow_345_9496"], ["mode", "normal", "in", "SourceGraphic", "in2", "effect1_dropShadow_345_9496", "result", "shape"], ["id", "filter1_d_345_9496", "x", "10.8555", "y", "11.8574", "width", "15.1426", "height", "15.1426", "filterUnits", "userSpaceOnUse", "color-interpolation-filters", "sRGB"], ["id", "clip0_345_9496"], ["width", "24", "height", "24", "fill", "white"], [1, "wrapper-desktop"], ["routerLink", "/home", 1, "logo"], ["src", "../../../assets/imgs/logo-dark.png", "alt", ""], [1, "navigation"], ["routerLink", "/grab-a-slice", "routerLinkActive", "active", 1, "link"], ["routerLink", "/confectionery", "routerLinkActive", "active", 1, "link"], ["routerLink", "/rewards", "routerLinkActive", "active", "id", "reward-link", 1, "link"], ["routerLink", "/about", "routerLinkActive", "active", 1, "link"], ["class", "user-detail", "routerLink", "/profile", 4, "ngIf"], [1, "icons"], ["routerLink", "/confectionery"], ["src", "../../../assets/icons/confectionery.svg", "alt", ""], ["routerLink", "/rewards"], ["src", "../../../assets/icons/rewards.svg", "alt", ""], ["routerLink", "/wallet"], ["src", "../../../assets/icons/wallet.svg", "alt", ""], ["routerLink", "/profile", 1, "user-detail"], [1, "avatar"], ["alt", ""], [2, "width", "336px", "height", "40px"], [3, "hasCloseCircle", "control", "inputClose"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none"], ["d", "M13.8574 13.8573L19.0001 19M8.3636 1C6.90722 1 5.48354 1.43187 4.2726 2.24099C3.06167 3.05011 2.11786 4.20015 1.56052 5.54567C1.00319 6.89119 0.857367 8.37176 1.14149 9.80016C1.42562 11.2286 2.12693 12.5406 3.15675 13.5704C4.18657 14.6003 5.49863 15.3016 6.92703 15.5857C8.35543 15.8698 9.836 15.724 11.1815 15.1667C12.527 14.6093 13.6771 13.6655 14.4862 12.4546C15.2953 11.2437 15.7272 9.81997 15.7272 8.36359C15.7271 6.41069 14.9512 4.5378 13.5703 3.15688C12.1894 1.77597 10.3165 1.00012 8.3636 1Z", "stroke", "#5C2448", "stroke-miterlimit", "10", "stroke-linecap", "round"], [1, "pointer", 2, "margin-top", "1em", "width", "44px", "height", "44px"], ["class", "icons-theme", 3, "click", 4, "ngIf"], ["routerLink", "profile/settings", "svgIcon", "edit", 4, "ngIf"], [1, "icons-theme", 3, "click"], ["routerLink", "profile/settings", "svgIcon", "edit"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "header", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "svg", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "path", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "defs")(5, "linearGradient", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "stop")(7, "stop", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "svg", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "path", 7)(10, "path", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "defs")(12, "linearGradient", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "stop", 10)(14, "stop", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "linearGradient", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "stop")(17, "stop", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "svg", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "path", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "defs")(22, "linearGradient", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "stop")(24, "stop", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "svg", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "path", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "defs")(28, "linearGradient", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "stop")(30, "stop", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, HeaderComponent_div_31_Template, 2, 2, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, HeaderComponent_div_32_Template, 26, 3, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, HeaderComponent_ng_template_33_Template, 4, 2, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, HeaderComponent_ng_template_35_Template, 4, 3, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("stop-color", ctx.themeService.active.properties["--header-color-gradient-left-1"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("stop-color", ctx.themeService.active.properties["--header-color-gradient-left-1"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("stop-color", ctx.themeService.active.properties["--header-color-gradient-left-2"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("stop-color", ctx.themeService.active.properties["--header-color-gradient-right-2"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("stop-color", ctx.themeService.active.properties["--header-color-gradient-left-1"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("stop-color", ctx.themeService.active.properties["--header-color-gradient-right-1"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("stop-color", ctx.themeService.active.properties["--header-color-gradient-left-1"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("stop-color", ctx.themeService.active.properties["--header-color-gradient-right-1"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("stop-color", ctx.themeService.active.properties["--header-color-gradient-left-1"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("stop-color", ctx.themeService.active.properties["--header-color-gradient-right-1"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isMobileHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isDesktopHeader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_8__.InputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DecimalPipe, _core_pipes_page_title_pipe__WEBPACK_IMPORTED_MODULE_9__.PageTitlePipe],
  styles: [".icons-theme[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  margin-right: 10px;\n}\n\n.header[_ngcontent-%COMP%] {\n  padding: 30px 50px 0 50px;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n}\n\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n}\n\n@media (min-width: 1440px) {\n  .header[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n}\n\n@media (min-width: 1650px) {\n  .header[_ngcontent-%COMP%] {\n    margin-bottom: 90px !important;\n  }\n}\n\n@media (min-width: 2560px) {\n  .header[_ngcontent-%COMP%] {\n    margin-bottom: 150px !important;\n  }\n}\n\n@media (max-width: 1440px) {\n  .header[_ngcontent-%COMP%] {\n    overflow: hidden;\n    height: 140px;\n  }\n}\n\n@media (max-width: 425px) {\n  .header[_ngcontent-%COMP%] {\n    overflow: initial;\n    height: auto;\n  }\n}\n\n@media (max-width: 425px) {\n  .header[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (min-width: 426px) {\n  .header[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%] {\n  top: -7px;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n\n.header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   .block-1[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   .block-2[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n}\n\n@media (min-width: 1440px) {\n  .header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   .block-1[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   .block-2[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n}\n\n@media (max-width: 425px) {\n  .header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   .block-1[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   .block-2[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n}\n\n.header[_ngcontent-%COMP%]   .vectors-bg[_ngcontent-%COMP%]   .block-3[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: inherit;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   cake-input[_ngcontent-%COMP%] {\n  margin-top: -0.7em;\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]:has(div   cake-input)[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .search-section[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  height: -moz-fit-content;\n  height: fit-content;\n  cursor: pointer;\n}\n\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n}\n\n@media (max-width: 425px) {\n  .header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-right: 14px;\n}\n\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    margin: 0;\n    text-align: left;\n    margin-left: 14px;\n  }\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-family: \"Gilroy-400\";\n  font-size: 16px;\n  margin: 0 -40px 0;\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   .reward-icon[_ngcontent-%COMP%] {\n  margin-left: 9px;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-mobile[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .sugar[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-family: \"Gilroy-400\";\n  font-size: 12px;\n  margin: 0;\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: inherit;\n  justify-content: inherit;\n  width: 100%;\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  cursor: pointer;\n  z-index: 1;\n}\n\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 185px;\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0;\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0 20px;\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-decoration: none;\n  padding-bottom: 8px;\n  color: #ffffff;\n  font-family: \"Gilroy-400\";\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link.active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--color-header-active);\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid var(--color-header-active);\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  z-index: 1;\n  margin-top: 1em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100px;\n}\n\n@media (min-width: 769px) {\n  .header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 425px) {\n  .header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: 0px 1px 4px rgba(103, 103, 103, 0.15);\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  height: -moz-fit-content;\n  height: fit-content;\n  cursor: pointer;\n}\n\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n}\n\n@media (max-width: 425px) {\n  .header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-right: 14px;\n}\n\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    margin: 0;\n    text-align: left;\n    margin-left: 14px;\n  }\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-family: \"Gilroy-400\";\n  font-size: 16px;\n  margin: 0;\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .sugar[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-family: \"Gilroy-400\";\n  font-size: 12px;\n  margin: 0;\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 50px;\n  background: rgba(255, 255, 255, 0.3);\n  position: relative;\n  transform: translateY(-5px);\n}\n\n.header[_ngcontent-%COMP%]   .wrapper-desktop[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 40px;\n  height: 40px;\n  border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFNRTtFQU5GO0lBT0ksYUFBQTtFQUhGO0FBQ0Y7O0FBS0U7RUFWRjtJQVdJLG1CQUFBO0VBRkY7QUFDRjs7QUFJRTtFQWRGO0lBZUksOEJBQUE7RUFERjtBQUNGOztBQUdFO0VBbEJGO0lBbUJJLCtCQUFBO0VBQUY7QUFDRjs7QUFFRTtFQXRCRjtJQXVCSSxnQkFBQTtJQUNBLGFBQUE7RUFDRjtBQUNGOztBQUNFO0VBM0JGO0lBNEJJLGlCQUFBO0lBQ0EsWUFBQTtFQUVGO0FBQ0Y7O0FBQ0k7RUFERjtJQUVJLGFBQUE7RUFFSjtBQUNGOztBQUNJO0VBREY7SUFFSSxhQUFBO0VBRUo7QUFDRjs7QUFBRTtFQUNFLFNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFFSjs7QUFBSTtFQUNFLGtCQUFBO0FBRU47O0FBQ0k7O0VBRUUsTUFBQTtFQUNBLE9BQUE7QUFDTjs7QUFDTTtFQUxGOztJQU1JLFdBQUE7SUFDQSxZQUFBO0VBR047QUFDRjs7QUFETTtFQVZGOztJQVdJLFdBQUE7SUFDQSxZQUFBO0VBS047QUFDRjs7QUFGSTtFQUNFLFNBQUE7QUFJTjs7QUFBRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNNO0VBQ0Usa0JBQUE7QUFDUjs7QUFHSTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtBQUROOztBQUlJO0VBQ0UsZUFBQTtBQUZOOztBQUtJO0VBQ0UsZUFBQTtBQUhOOztBQU1JO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZUFBQTtBQUpOOztBQU1NO0VBUkY7SUFTSSwyQkFBQTtFQUhOO0FBQ0Y7O0FBS007RUFaRjtJQWFJLGFBQUE7RUFGTjtBQUNGOztBQUlNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUZSOztBQUlRO0VBSkY7SUFLSSxTQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQURSO0FBQ0Y7O0FBR1E7RUF2SU4sY0FBQTtFQUNBLHlCQUFBO0VBd0lRLGVBQUE7RUFDQSxpQkFBQTtBQUFWOztBQUVVO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBQVo7O0FBSVE7RUFuSk4sY0FBQTtFQUNBLHlCQUFBO0VBb0pRLGVBQUE7RUFDQSxTQUFBO0FBRFY7O0FBT0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7QUFMSjs7QUFPSTtFQUtFLGVBQUE7RUFDQSxVQUFBO0FBVE47O0FBSU07RUFERjtJQUVJLGFBQUE7RUFETjtBQUNGOztBQU1NO0VBQ0UsWUFBQTtBQUpSOztBQVFJO0VBQ0UsVUFBQTtBQU5OOztBQVFNO0VBSEY7SUFJSSxhQUFBO0VBTE47QUFDRjs7QUFPTTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBTFI7O0FBT1E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUxWOztBQU9VO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFqTVYsY0FBQTtFQUNBLHlCQUFBO0FBNkxGOztBQU1ZO0VBQ0UsbURBQUE7QUFKZDs7QUFPWTtFQUNFLG1EQUFBO0FBTGQ7O0FBWUk7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFlBQUE7QUFWTjs7QUFZTTtFQVRGO0lBVUksYUFBQTtFQVROO0FBQ0Y7O0FBV007RUFiRjtJQWNJLGFBQUE7RUFSTjtBQUNGOztBQVVNO0VBQ0UsaURBQUE7QUFSUjs7QUFZSTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGVBQUE7QUFWTjs7QUFZTTtFQVJGO0lBU0ksMkJBQUE7RUFUTjtBQUNGOztBQVdNO0VBWkY7SUFhSSxhQUFBO0VBUk47QUFDRjs7QUFVTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFSUjs7QUFVUTtFQUpGO0lBS0ksU0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUFQUjtBQUNGOztBQVNRO0VBaFFOLGNBQUE7RUFDQSx5QkFBQTtFQWlRUSxlQUFBO0VBQ0EsU0FBQTtBQU5WOztBQVNRO0VBdFFOLGNBQUE7RUFDQSx5QkFBQTtFQXVRUSxlQUFBO0VBQ0EsU0FBQTtBQU5WOztBQVVNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQVJSOztBQVVRO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVJWIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBmb250LWNvbG9yIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiAnR2lscm95LTQwMCc7XG59XG5cbi5pY29ucy10aGVtZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmhlYWRlciB7XG4gIHBhZGRpbmc6IDMwcHggNTBweCAwIDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNjUwcHgpIHtcbiAgICBtYXJnaW4tYm90dG9tOiA5MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMjU2MHB4KSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMTQwcHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuZGVza3RvcCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICAubW9iaWxlIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDI2cHgpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gIC52ZWN0b3JzLWJnIHtcbiAgICB0b3A6IC03cHg7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDA7XG5cbiAgICBzdmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuICAgIC5ibG9jay0xLFxuICAgIC5ibG9jay0yIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJsb2NrLTMge1xuICAgICAgYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gIC53cmFwcGVyLW1vYmlsZSB7XG4gICAgei1pbmRleDogMTtcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGRpdiB7XG4gICAgICBjYWtlLWlucHV0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTAuN2VtO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aGFzKGRpdiBjYWtlLWlucHV0KSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5iYWNrLWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgfVxuXG4gICAgLnNlYXJjaC1zZWN0aW9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICB9XG5cbiAgICAudXNlci1kZXRhaWwge1xuICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgfVxuXG4gICAgICAuaW5mbyB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudXNlci1uYW1lIHtcbiAgICAgICAgICBAaW5jbHVkZSBmb250LWNvbG9yO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW46IDAgLTQwcHggMDtcblxuICAgICAgICAgIC5yZXdhcmQtaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOXB4O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc3VnYXIge1xuICAgICAgICAgIEBpbmNsdWRlIGZvbnQtY29sb3I7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC53cmFwcGVyLWRlc2t0b3Age1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAubG9nbyB7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgei1pbmRleDogMTtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDE4NXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgIHotaW5kZXg6IDE7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcblxuICAgICAgICAgIC5saW5rIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgICBAaW5jbHVkZSBmb250LWNvbG9yO1xuXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci1oZWFkZXItYWN0aXZlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci1oZWFkZXItYWN0aXZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaWNvbnMge1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgIHdpZHRoOiAxMDBweDtcblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDRweCByZ2JhKDEwMywgMTAzLCAxMDMsIDAuMTUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC51c2VyLWRldGFpbCB7XG4gICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICB9XG5cbiAgICAgIC5pbmZvIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICAgIEBpbmNsdWRlIGZvbnQtY29sb3I7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWdhciB7XG4gICAgICAgICAgQGluY2x1ZGUgZm9udC1jb2xvcjtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hdmF0YXIge1xuICAgICAgICB3aWR0aDogNDZweDtcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/api.service */ 554);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);








class ConfirmSettingsComponent {
    constructor(data, dialogRef, apiService, router) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.apiService = apiService;
        this.router = router;
        this.errorEmmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    onCloseClick() {
        this.dialogRef.close();
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
ConfirmSettingsComponent.ɵfac = function ConfirmSettingsComponent_Factory(t) { return new (t || ConfirmSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ConfirmSettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfirmSettingsComponent, selectors: [["cake-confirm-settings"]], decls: 15, vars: 0, consts: [[1, "container"], [1, "close", 3, "click"], ["viewBox", "0 0 12 12", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M11.25 11.25L0.75 0.75M11.25 0.75L0.75 11.25", "stroke", "#977E89", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "info"], [1, "headings"], [1, "buttons"], [1, "button", "primary", 3, "click"], [1, "button", "tertiary", "close-btn", 3, "click"]], template: function ConfirmSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmSettingsComponent_Template_div_click_1_listener() { return ctx.onCloseClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Do you want");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "to save changes?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmSettingsComponent_Template_button_click_11_listener() { return ctx.onSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmSettingsComponent_Template_button_click_13_listener() { return ctx.onCloseClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "No, thanks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  height: 90vh;\n  overflow: hidden;\n}\n.container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-align: right;\n}\n.container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n.container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: var(--color-tooltip-close);\n}\n.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  word-wrap: break-word;\n  color: var(--color-tooltip-text);\n  margin: 0;\n}\n.container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 40px;\n}\n.container[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBREo7QUFFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQU47QUFDTTtFQUNFLGtDQUFBO0FBQ1I7QUFJRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUlJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtBQUZOO0FBTUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQUtJO0VBQ0UsZ0JBQUE7QUFITiIsImZpbGUiOiJjb25maXJtLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwvbWl4aW5zJztcblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogOTB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAuY2xvc2Uge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBzdmcge1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICBwYXRoIHtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1jb2xvci10b29sdGlwLWNsb3NlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5oZWFkaW5ncyB7XG4gICAgICBmb250LWZhbWlseTogJ0dpbHJveS00MDAnO1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRvb2x0aXAtdGV4dCk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG5cbiAgLmJ1dHRvbnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgLmNsb3NlLWJ0biB7XG4gICAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 9386);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 5894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







class ApiService {
    constructor(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    getHeaders() {
        const header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`),
        };
        return header;
    }
    getQuery(query) {
        return Object.entries(query).filter(element => element[1] || element[1] === false).map((el) => `${el[0]}=${el[1]}`).join('&');
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
            ...userData
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
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 9168);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 9386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);







class AuthService {
    constructor(router, zone) {
        this.router = router;
        this.zone = zone;
        this.isAuthenticated$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.userProfile = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.randomAvatar = 'https://xsgames.co/randomusers/avatar.php?g=pixel';
        if (this.isTokenExpired()) {
            localStorage.removeItem('accessToken');
        }
        else {
            this.isAuthenticated$.next(true);
            this.setExpiredTokenTimer();
        }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _modules_profile_components_confirm_settings_confirm_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/profile/components/confirm-settings/confirm-settings.component */ 6908);
/* harmony import */ var _shared_components_get_reward_get_reward_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/get-reward/get-reward.component */ 5504);
/* harmony import */ var _shared_components_kol_kol_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/kol/kol.component */ 8167);
/* harmony import */ var _shared_components_reward_reward_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/reward/reward.component */ 1325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);








class ModalsService {
    constructor(dialog) {
        this.dialog = dialog;
        this.hasUsernameExistError = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
    }
    openRewardPopup(id) {
        this.dialog.open(_shared_components_reward_reward_component__WEBPACK_IMPORTED_MODULE_3__.RewardComponent, {
            data: {
                id
            },
            autoFocus: false,
        });
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log('The dialog was closed');
        //   this.animal = result;
        // });
    }
    openClaimCakeboxPopup(id) {
        this.dialog.open(_shared_components_reward_reward_component__WEBPACK_IMPORTED_MODULE_3__.RewardComponent, {
            data: {
                id,
                isClaimed: true,
            },
            autoFocus: false,
        });
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log('The dialog was closed');
        //   this.animal = result;
        // });
    }
    getRewardPopup(reward) {
        this.dialog.open(_shared_components_get_reward_get_reward_component__WEBPACK_IMPORTED_MODULE_1__.GetRewardComponent, {
            data: reward,
            autoFocus: false,
            // mandatory if we need blur background
            backdropClass: 'backdropBackground'
        });
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log('The dialog was closed');
        //   this.animal = result;
        // });
    }
    openKolPopup(data) {
        this.dialog.open(_shared_components_kol_kol_component__WEBPACK_IMPORTED_MODULE_2__.KolComponent, {
            data: data,
            autoFocus: false,
            backdropClass: 'backdropBackground'
        });
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log('The dialog was closed');
        //   this.animal = result;
        // });
    }
    openSettingsConfirmationPopup(userName, id) {
        const dialogRef = this.dialog.open(_modules_profile_components_confirm_settings_confirm_settings_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmSettingsComponent, {
            data: {
                id,
                userName
            },
            backdropClass: 'backdropBackground'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result?.P2002) {
                this.hasUsernameExistError.next(true);
            }
            else {
                this.hasUsernameExistError.next(false);
            }
        });
    }
    get hasUsernameExistError$() {
        return this.hasUsernameExistError.asObservable();
    }
}
ModalsService.ɵfac = function ModalsService_Factory(t) { return new (t || ModalsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
ModalsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ModalsService, factory: ModalsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4052:
/*!**********************************************************!*\
  !*** ./apps/frontend/src/app/services/reward.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardService": () => (/* binding */ RewardService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);





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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ThemeService {
    constructor() {
        this.active = _core_types_Themes__WEBPACK_IMPORTED_MODULE_0__.LightTheme;
    }
    changeActiveTheme(theme) {
        localStorage.setItem('theme', theme.name);
        this.active = theme;
        Object.keys(this.active.properties).forEach((property) => {
            document.documentElement.style.setProperty(property, this.active.properties[property]);
        });
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8373:
/*!*********************************************************!*\
  !*** ./apps/frontend/src/app/services/title.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleService": () => (/* binding */ TitleService)
/* harmony export */ });
/* harmony import */ var _core_types_page_title_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/types/page-title-options */ 2832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class TitleService {
    getPageTitle(title) {
        if (title === _core_types_page_title_options__WEBPACK_IMPORTED_MODULE_0__.PageTitle.grab) {
            return 'grab a slice';
        }
        return title;
    }
}
TitleService.ɵfac = function TitleService_Factory(t) { return new (t || TitleService)(); };
TitleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TitleService, factory: TitleService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 4817);



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

/***/ 7664:
/*!*******************************************************!*\
  !*** ./apps/frontend/src/app/services/url.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlService": () => (/* binding */ UrlService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/classes/watcher */ 34);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





class UrlService extends _shared_classes_watcher__WEBPACK_IMPORTED_MODULE_0__.Watcher {
    constructor(activatedRoute) {
        super();
        this.activatedRoute = activatedRoute;
        this.pageTitleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
    }
    setPageTitle(title) {
        this.pageTitleSubject.next(title);
    }
    getPageTitle() {
        return this.pageTitleSubject.value;
    }
    subscribeUrlCange() {
        this.activatedRoute.data
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.unsubscribe)).subscribe({
            next: (resolved) => {
                // 
            }
        });
    }
    get titleSubj() {
        return this.pageTitleSubject;
    }
    unsubscribeObsv() {
        super.ngOnDestroy();
    }
}
UrlService.ɵfac = function UrlService_Factory(t) { return new (t || UrlService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
UrlService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UrlService, factory: UrlService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7822);



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
CakeboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CakeboxComponent, selectors: [["cake-cakebox"]], inputs: { isSmall: "isSmall", cakebox: "cakebox", maxSize: "maxSize" }, decls: 8, vars: 9, consts: [[1, "cakebox-container", 3, "ngClass"], [1, "box"], ["src", "../../../../assets/imgs/confetti-cakebox.png", "alt", "", "class", "confetti", 4, "ngIf"], ["class", "background-small-icon", 4, "ngIf"], [3, "svgIcon"], [1, "slices"], ["alt", "", 3, "z-index", 4, "ngFor", "ngForOf"], ["src", "../../../../assets/imgs/confetti-cakebox.png", "alt", "", 1, "confetti"], [1, "background-small-icon"], ["alt", ""]], template: function CakeboxComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSmall && (ctx.cakebox.smallImage || ctx.cakebox.image));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("svgIcon", "", ctx.cakebox.rarity || "STARTER", "-cakebox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 5, ctx.cakebox.rewards, 0, ctx.isSmall ? 3 : ctx.maxSize));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_1__.SlicePipe], styles: [".cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  margin: auto;\n  transform: translateY(-5%);\n  width: 250px;\n  height: 250px;\n  position: relative;\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .confetti[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  zoom: 0.75;\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: none;\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  border-radius: 13.1674px;\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(1) {\n  display: block;\n  left: 4%;\n  top: 22%;\n  width: 98px;\n  height: 98px;\n  transform: rotate(-15deg);\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(2) {\n  display: block;\n  left: 55%;\n  top: 22%;\n  width: 79px;\n  height: 79px;\n  transform: rotate(15deg);\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(3) {\n  display: block;\n  left: 44%;\n  top: 50%;\n  width: 60px;\n  height: 60px;\n  transform: rotate(5deg);\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(4) {\n  display: block;\n  left: 25%;\n  top: 10%;\n  width: 14px;\n  height: 14px;\n  transform: rotate(-26deg);\n  border-radius: 5px;\n  opacity: 0.6;\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(11) {\n  display: block;\n  left: -40%;\n  top: 20%;\n  width: 26px;\n  border-radius: 5px;\n  height: 26px;\n  transform: rotate(-18deg);\n  opacity: 0.6;\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(10) {\n  display: block;\n  left: 0%;\n  top: 0%;\n  width: 11px;\n  border-radius: 5px;\n  height: 11px;\n  transform: rotate(-60deg);\n  opacity: 0.6;\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(7) {\n  display: block;\n  left: -15%;\n  top: 50%;\n  width: 10px;\n  border-radius: 5px;\n  height: 10px;\n  transform: rotate(-5deg);\n  opacity: 0.6;\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(8) {\n  display: block;\n  left: 0%;\n  top: 70%;\n  width: 12px;\n  border-radius: 5px;\n  height: 12px;\n  transform: rotate(-60deg);\n  opacity: 0.6;\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(9) {\n  display: block;\n  left: 90%;\n  top: 15%;\n  width: 16px;\n  border-radius: 5px;\n  height: 16px;\n  transform: rotate(18deg);\n  opacity: 0.6;\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(6) {\n  display: block;\n  left: 110%;\n  top: 21%;\n  width: 14px;\n  border-radius: 5px;\n  height: 14px;\n  transform: rotate(-30deg);\n  opacity: 0.6;\n}\n.cakebox-container.big-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(5) {\n  display: block;\n  left: 90%;\n  top: 70%;\n  width: 16px;\n  border-radius: 5px;\n  height: 16px;\n  transform: rotate(18deg);\n  opacity: 0.6;\n}\n.cakebox-container.small-container[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-image: none !important;\n}\n.cakebox-container.small-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  width: 37px;\n  height: 37px;\n}\n.cakebox-container.small-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: none;\n}\n.cakebox-container.small-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(1) {\n  display: block;\n  left: 10%;\n  top: 10%;\n  width: 15px;\n  height: 15px;\n  transform: rotate(-15deg);\n}\n.cakebox-container.small-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(2) {\n  display: block;\n  left: 57%;\n  top: 5%;\n  width: 12px;\n  height: 12px;\n  transform: rotate(15deg);\n}\n.cakebox-container.small-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(3) {\n  display: block;\n  left: 40%;\n  top: 45%;\n  width: 10px;\n  height: 10px;\n  transform: rotate(5deg);\n}\n.cakebox-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.cakebox-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .background-small-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  overflow: hidden;\n  left: 17.3%;\n  top: 8.79%;\n  width: 65%;\n  height: 65%;\n  border-radius: 2px;\n  transform: rotate(45deg) skew(-8.5deg, -8.5deg) scale(1.01);\n}\n.cakebox-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .background-small-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(-45deg) scale(1.5) translate(0%, -50%);\n  width: 22px;\n  height: 22px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n}\n.cakebox-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.cakebox-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.cakebox-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .slices[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  object-fit: cover;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNha2Vib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVE7RUFDSSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBSFo7QUFLWTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUFIaEI7QUFRZ0I7RUFDSSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSx3QkFBQTtBQU5wQjtBQVFvQjtFQUNJLGNBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFOeEI7QUFRb0I7RUFDSSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBTnhCO0FBUW9CO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQU54QjtBQVFvQjtFQUNJLGNBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFOeEI7QUFRb0I7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBTnhCO0FBUW9CO0VBQ0ksY0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQU54QjtBQVFvQjtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUFOeEI7QUFRb0I7RUFDSSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBTnhCO0FBUW9CO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQU54QjtBQVFvQjtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFOeEI7QUFRb0I7RUFDSSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FBTnhCO0FBYUk7RUFDSSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGlDQUFBO0FBWFI7QUFhUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBWFo7QUFjZ0I7RUFDSSxhQUFBO0FBWnBCO0FBY29CO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQVp4QjtBQWNvQjtFQUNJLGNBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFaeEI7QUFjb0I7RUFDSSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBWnhCO0FBbUJJO0VBQ0ksa0JBQUE7QUFqQlI7QUFtQlE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkRBQUE7QUFqQlo7QUFtQlk7RUFDSSx3REFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQWpCaEI7QUFxQlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQW5CWjtBQXNCUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQXBCWjtBQXNCWTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXBCaEIiLCJmaWxlIjoiY2FrZWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNha2Vib3gtY29udGFpbmVyIHtcbiAgICAmLmJpZy1jb250YWluZXIge1xuXG4gICAgICAgIC5ib3gge1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAuY29uZmV0dGkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgem9vbTogMC43NTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNsaWNlcyB7XG5cbiAgICAgICAgICAgICAgICBpbWcgeyAgICBcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMy4xNjc0cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDQlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAyMiU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDU1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMjIlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDQ0JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yNmRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC00MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDIwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4ZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTYwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC42O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMTUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC42O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoOCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSg5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxOGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMjElO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSg1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxOGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuc21hbGwtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgLmJveCB7XG4gICAgICAgICAgICB3aWR0aDogMzdweDtcbiAgICAgICAgICAgIGhlaWdodDogMzdweDtcblxuICAgICAgICAgICAgLnNsaWNlcyB7XG4gICAgICAgICAgICAgICAgaW1nIHsgICAgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAgICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1NyU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNDUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuYm94IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5iYWNrZ3JvdW5kLXNtYWxsLWljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGxlZnQ6IDE3LjMlO1xuICAgICAgICAgICAgdG9wOiA4Ljc5JTtcbiAgICAgICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgICAgICBoZWlnaHQ6IDY1JTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBza2V3KC04LjVkZWcsIC04LjVkZWcpIHNjYWxlKDEuMDEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMS41KSB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuc2xpY2VzIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
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
CongratulationsScreenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CongratulationsScreenComponent, selectors: [["cake-congratulations-screen"]], inputs: { title: "title", titleImg: "titleImg", mark: "mark", text: "text", isNeedPlugin: "isNeedPlugin", router: "router", btnText: "btnText" }, decls: 15, vars: 7, consts: [[1, "flex-block"], [1, "title"], [3, "src"], [1, "check-mark-block"], ["alt", "", 3, "src"], [1, "text-block"], ["class", "plugin-block", 4, "ngIf"], [1, "have-account-block"], [1, "button", "primary", 3, "routerLink"], [1, "plugin-block"]], template: function CongratulationsScreenComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _download_plugin_download_plugin_component__WEBPACK_IMPORTED_MODULE_0__.DownloadPluginComponent], styles: [".flex-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 100vh;\n  margin: auto;\n}\n.flex-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 785px;\n  background-image: url('confetti.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n@media (max-width: 990px) {\n  .flex-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.flex-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding: 50px 0;\n  font-family: \"Santhony\";\n  font-weight: 100;\n  font-size: 56px;\n  background-color: var(--color-gradient-left-3);\n  background-image: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n}\n@media (max-width: 425px) {\n  .flex-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n@media (max-width: 375px) {\n  .flex-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n.flex-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 50px 0;\n  width: 59px;\n}\n.flex-block[_ngcontent-%COMP%]   .check-mark-block[_ngcontent-%COMP%] {\n  width: 132px;\n}\n.flex-block[_ngcontent-%COMP%]   .check-mark-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.flex-block[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%] {\n  width: 424px;\n  font-family: Gilroy-400;\n  font-size: 30px;\n  color: var(--color-fonts-2);\n  text-align: center;\n}\n@media (max-width: 425px) {\n  .flex-block[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%] {\n    font-size: 20px;\n    width: 90%;\n  }\n}\n.flex-block[_ngcontent-%COMP%]   .plugin-block[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.flex-block[_ngcontent-%COMP%]   .have-account-block[_ngcontent-%COMP%] {\n  width: 202px;\n}\n.flex-block[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  font-family: Gilroy-300;\n  font-size: 16px;\n  color: var(--color-fonts-2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmdyYXR1bGF0aW9ucy1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFESjtBQUlJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUFGUjtBQUlRO0VBVko7SUFXUSxXQUFBO0VBRFY7QUFDRjtBQUdRO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VDZ0NWLDhDRC9CK0Q7RUNnQy9ELHFIQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtBRGhDRjtBQUhZO0VBUEo7SUFRUSxlQUFBO0VBTWQ7QUFDRjtBQUxZO0VBVko7SUFXUSxlQUFBO0VBUWQ7QUFDRjtBQUxRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFPWjtBQUhJO0VBQ0ksWUFBQTtBQUtSO0FBSFE7RUFDSSxXQUFBO0FBS1o7QUFESTtFQUNJLFlBQUE7RUNtQ04sdUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUQ5Qk0sa0JBQUE7QUFBUjtBQUpRO0VBSko7SUFLUSxlQUFBO0lBQ0EsVUFBQTtFQU9WO0FBQ0Y7QUFISTtFQUNJLFVBQUE7QUFLUjtBQUZJO0VBQ0ksWUFBQTtBQUlSO0FBREk7RUNXRix1QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBRFBGIiwiZmlsZSI6ImNvbmdyYXR1bGF0aW9ucy1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9taXhpbnMnO1xuXG4uZmxleC1ibG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG5cbiAgICAudGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDc4NXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2NvbmZldHRpLnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1NhbnRob255JztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDU2cHg7XG4gICAgICAgICAgICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dCh2YXIoLS1kZWctZ3JhZGllbnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMyksIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTMpKTtcblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDA7XG4gICAgICAgICAgICB3aWR0aDogNTlweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuY2hlY2stbWFyay1ibG9jayB7XG4gICAgICAgIHdpZHRoOiAxMzJweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGV4dC1ibG9jayB7XG4gICAgICAgIHdpZHRoOiA0MjRweDtcbiAgICAgICAgQGluY2x1ZGUgR2lscm95LTQwMC0zMC1mb250cy0yO1xuICAgICAgICBcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5wbHVnaW4tYmxvY2sge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cblxuICAgIC5oYXZlLWFjY291bnQtYmxvY2sge1xuICAgICAgICB3aWR0aDogMjAycHg7XG4gICAgfVxuXG4gICAgZm9vdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgR2lscm95LTMwMC0xNi1mb250cy0yKCk7XG4gICAgICB9XG59IiwiQG1peGluIGJ0bi1ob3ZlcigkdGV4dENvbG9yLCAkYmcsICRib3JkZXJDb2xvcikge1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHRleHRDb2xvcjtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgfVxufVxuXG5AbWl4aW4gYnRuLWRpc2FibGVkKCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gICY6ZGlzYWJsZWQge1xuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG4gIH1cbn1cblxuQG1peGluIGJ0bi1kZWZhdWx0KCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gIGNvbG9yOiAkdGV4dENvbG9yO1xuICBiYWNrZ3JvdW5kOiAkYmc7XG4gIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZWFyLWJnKCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG59XG5cbkBtaXhpbiBib3JkZXItZ3JhZGllbnQtbGluZWFyKCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJvcmRlci1pbWFnZTogIGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItYm9yZGVyKFxuICAkZGVnLFxuICAkbGVmdENvbG9yLFxuICAkcmlnaHRDb2xvcixcbiAgJGJvcmRlcldpZHRoLFxuICAkYm9yZGVyUmFkaXVzXG4pIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XG4gICAgcGFkZGluZzogJGJvcmRlcldpZHRoO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG4gICAgLXdlYmtpdC1tYXNrOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiAwIDApIGNvbnRlbnQtYm94LFxuICAgICAgLyogWzFdICovIGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCk7IC8qIFsyXSAqL1xuICAgIC13ZWJraXQtbWFzay1jb21wb3NpdGU6IHhvcjsgLyogWzNdINC00LvRjyDQv9GW0LTRgtGA0LjQvNC60Lgg0LHRgNCw0YPQt9C10YDRltCyICovXG4gICAgbWFzay1jb21wb3NpdGU6IGV4Y2x1ZGU7IC8qIFszXSAqL1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItdGV4dCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGVmdENvbG9yO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtaXhpbiBlcnJvci1tZXNzYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IEdpbHJveS00MDA7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dChcbiAgICB2YXIoLS1kZWctZ3JhZGllbnQtNCksXG4gICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC00KSxcbiAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC00KVxuICApO1xufVxuXG5AbWl4aW4gR2lscm95LTMwMC0xNi1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6IEdpbHJveS0zMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xufVxuXG5AbWl4aW4gR2lscm95LTQwMC0zMC1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6IEdpbHJveS00MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xufVxuXG5AbWl4aW4gR2lscm95LTUwMC0xNC1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6IEdpbHJveS01MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xufVxuIl19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DownloadPluginComponent {
}
DownloadPluginComponent.ɵfac = function DownloadPluginComponent_Factory(t) { return new (t || DownloadPluginComponent)(); };
DownloadPluginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DownloadPluginComponent, selectors: [["cake-download-plugin"]], decls: 5, vars: 0, consts: [[1, "download-block"]], template: function DownloadPluginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Taste the sugary delights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Download Cak3 plugin for your browser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: [".download-block[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  background-image: url('download-plugin-bg.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 25px;\n  text-align: center;\n  padding: 24px 0;\n}\n.download-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .download-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Gilroy-300\";\n  background-color: #fbf5eb 58.96%;\n  background-image: linear-gradient(180deg, #fbf5eb 58.96%, #fbe3d5 99.84%);\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n}\n.download-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media (max-width: 990px) {\n  .download-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 425px) {\n  .download-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.download-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n@media (max-width: 990px) {\n  .download-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n@media (max-width: 768px) {\n  .download-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n@media (max-width: 425px) {\n  .download-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvd25sb2FkLXBsdWdpbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsK0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQURGO0FBRUU7O0VBRUUsU0FBQTtFQUNBLHlCQUFBO0VDOENGLGdDRDdDd0M7RUM4Q3hDLHlFQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtBRDdDRjtBQUhFO0VBQ0UsZUFBQTtBQUtKO0FBSEk7RUFIRjtJQUlJLGVBQUE7RUFNSjtBQUNGO0FBSkk7RUFQRjtJQVFJLGVBQUE7RUFPSjtBQUNGO0FBSkU7RUFDRSxlQUFBO0FBTUo7QUFMSTtFQUZGO0lBR0ksZUFBQTtFQVFKO0FBQ0Y7QUFOSTtFQU5GO0lBT0ksZUFBQTtFQVNKO0FBQ0Y7QUFQSTtFQVZGO0lBV0ksZUFBQTtFQVVKO0FBQ0YiLCJmaWxlIjoiZG93bmxvYWQtcGx1Z2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwvbWl4aW5zJztcblxuLmRvd25sb2FkLWJsb2NrIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9kb3dubG9hZC1wbHVnaW4tYmcucG5nJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4IDA7XG4gIGgzLFxuICBoMSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95LTMwMCc7XG4gICAgQGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLXRleHQoMTgwZGVnLCAjZmJmNWViIDU4Ljk2JSwgI2ZiZTNkNSA5OS44NCUpO1xuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCkge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MHB4KSB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gYnRuLWhvdmVyKCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbkBtaXhpbiBidG4tZGlzYWJsZWQoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgJjpkaXNhYmxlZCB7XG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gICAgYmFja2dyb3VuZDogJGJnO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcbiAgfVxufVxuXG5AbWl4aW4gYnRuLWRlZmF1bHQoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gIGJhY2tncm91bmQ6ICRiZztcbiAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItYmcoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbn1cblxuQG1peGluIGJvcmRlci1ncmFkaWVudC1saW5lYXIoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYm9yZGVyLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci1ib3JkZXIoXG4gICRkZWcsXG4gICRsZWZ0Q29sb3IsXG4gICRyaWdodENvbG9yLFxuICAkYm9yZGVyV2lkdGgsXG4gICRib3JkZXJSYWRpdXNcbikge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcbiAgICBwYWRkaW5nOiAkYm9yZGVyV2lkdGg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbiAgICAtd2Via2l0LW1hc2s6IGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCkgY29udGVudC1ib3gsXG4gICAgICAvKiBbMV0gKi8gbGluZWFyLWdyYWRpZW50KCNmZmYgMCAwKTsgLyogWzJdICovXG4gICAgLXdlYmtpdC1tYXNrLWNvbXBvc2l0ZTogeG9yOyAvKiBbM10g0LTQu9GPINC/0ZbQtNGC0YDQuNC80LrQuCDQsdGA0LDRg9C30LXRgNGW0LIgKi9cbiAgICBtYXNrLWNvbXBvc2l0ZTogZXhjbHVkZTsgLyogWzNdICovXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci10ZXh0KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsZWZ0Q29sb3I7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuQG1peGluIGVycm9yLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LWZhbWlseTogR2lscm95LTQwMDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KFxuICAgIHZhcigtLWRlZy1ncmFkaWVudC00KSxcbiAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTQpLFxuICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTQpXG4gICk7XG59XG5cbkBtaXhpbiBHaWxyb3ktMzAwLTE2LWZvbnRzLTIge1xuICBmb250LWZhbWlseTogR2lscm95LTMwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG59XG5cbkBtaXhpbiBHaWxyb3ktNDAwLTMwLWZvbnRzLTIge1xuICBmb250LWZhbWlseTogR2lscm95LTQwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG59XG5cbkBtaXhpbiBHaWxyb3ktNTAwLTE0LWZvbnRzLTIge1xuICBmb250LWZhbWlseTogR2lscm95LTUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG59XG4iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



const _c0 = ["dropDown"];
function DropDownComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.error);
} }
function DropDownComponent_ul_8_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropDownComponent_ul_8_li_1_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const option_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r5.chooseOption.emit(option_r4); ctx_r5.isOpened = !ctx_r5.isOpened; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.chosenOption = option_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r4.label, " ");
} }
function DropDownComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropDownComponent_ul_8_li_1_Template, 2, 1, "li", 9);
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
    } }, inputs: { label: "label", options: "options", placeholder: "placeholder", error: "error" }, outputs: { chooseOption: "chooseOption" }, decls: 9, vars: 9, consts: [[1, "drop-down"], ["dropDown", ""], [1, "block", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M5.25 8.625L12 15.375L18.75 8.625", "stroke", "black", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "error-message", 4, "ngIf"], ["class", "drop-down-list", 4, "ngIf"], [1, "error-message"], [1, "drop-down-list"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function DropDownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropDownComponent_Template_div_click_2_listener() { return ctx.isOpened = !ctx.isOpened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DropDownComponent_span_7_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DropDownComponent_ul_8_Template, 2, 1, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focus", ctx.isOpened || ctx.chosenOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.chosenOption ? ctx.chosenOption.label : ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("revert", ctx.isOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpened);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["@charset \"UTF-8\";\n.drop-down[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  cursor: pointer;\n}\n.drop-down[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-family: Gilroy-400;\n  padding-left: 20px;\n  margin-top: 5px;\n  background-color: var(--color-gradient-left-4);\n  background-image: linear-gradient(var(--deg-gradient-4), var(--color-gradient-left-4), var(--color-gradient-right-4));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n}\n.drop-down[_ngcontent-%COMP%]   .drop-down-list[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--color-tertiary-input);\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 0;\n  margin-top: 4px;\n  box-shadow: 0px 0px 14px var(--box-shadow);\n  position: absolute;\n  z-index: 999;\n}\n.drop-down[_ngcontent-%COMP%]   .drop-down-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--color-fonts-2);\n  font-size: 14px;\n  font-family: Gilroy-300;\n  padding: 8px 16px;\n  border-bottom: 1px solid rgba(152, 149, 149, 0.16);\n}\n.drop-down[_ngcontent-%COMP%]   .drop-down-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  border: none;\n}\n.drop-down[_ngcontent-%COMP%]   .drop-down-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n}\n.drop-down[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  width: calc(100% - 32px);\n  height: 100%;\n  display: flex;\n  padding: 0 16px;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--color-tertiary-input);\n  border-radius: 12px;\n  position: relative;\n}\n.drop-down[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 12px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-enabled-input), var(--gradient-left-enabled-input), var(--gradient-right-enabled-input));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.drop-down[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--color-fonts-1);\n  font-family: Gilroy-300;\n  font-size: 16px;\n  display: block;\n  width: 80%;\n}\n.drop-down[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  transition: 0.5s ease;\n}\n.drop-down[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   svg.revert[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.drop-down[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: var(--color-fonts-1);\n}\n.drop-down[_ngcontent-%COMP%]   .block.focus[_ngcontent-%COMP%] {\n  position: relative;\n}\n.drop-down[_ngcontent-%COMP%]   .block.focus[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 12px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-6), var(--color-gradient-left-6), var(--color-gradient-right-6));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.drop-down[_ngcontent-%COMP%]   .block.focus[_ngcontent-%COMP%]:hover {\n  position: relative;\n}\n.drop-down[_ngcontent-%COMP%]   .block.focus[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 12px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.drop-down[_ngcontent-%COMP%]   .block.focus[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\n  color: var(--color-fonts-2);\n}\n.drop-down[_ngcontent-%COMP%]   .block.focus[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: var(--color-fonts-2);\n}\n.drop-down[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:active {\n  position: relative;\n}\n.drop-down[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:active::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 12px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.drop-down.error[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  position: relative;\n}\n.drop-down.error[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 12px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-4), var(--color-gradient-left-4), var(--color-gradient-left-4));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3AtZG93bi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFFaEI7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFGO0FBRUU7RUMrREEsY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQWRBLDhDQWlCRTtFQWhCRixxSEFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7QUQvQ0Y7QUFSRTtFQUNFLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVVKO0FBUkk7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtEQUFBO0FBVU47QUFSTTtFQUNFLFlBQUE7QUFVUjtBQVBNO0VDUEosK0dBQUE7QURpQkY7QUFKRTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUNQRixrQkFBQTtBRGNGO0FDYkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLG1CRE9FO0VDTkYsWURLRTtFQ0pGLHVJQUFBO0VBQ0EsOEVBQUEsRUFDdUMsUUFBQTtFQUN2QywyQkFBQSxFQUFBLGdDQUFBO0VBQ0EsdUJBQUEsRUFBQSxRQUFBO0VBQ0Esb0JBQUE7QURjSjtBQVhJO0VBQ0UsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQWFOO0FBVkk7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFZTjtBQVZNO0VBQ0UseUJBQUE7QUFZUjtBQVRNO0VBQ0UsNEJBQUE7QUFXUjtBQVBJO0VDckNGLGtCQUFBO0FEK0NGO0FDOUNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxtQkRxQ0k7RUNwQ0osWURtQ0k7RUNsQ0osK0dBQUE7RUFDQSw4RUFBQSxFQUN1QyxRQUFBO0VBQ3ZDLDJCQUFBLEVBQUEsZ0NBQUE7RUFDQSx1QkFBQSxFQUFBLFFBQUE7RUFDQSxvQkFBQTtBRCtDSjtBQWRNO0VDOUNKLGtCQUFBO0FEK0RGO0FDOURFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxtQkQ4Q007RUM3Q04sWUQ0Q007RUMzQ04sK0dBQUE7RUFDQSw4RUFBQSxFQUN1QyxRQUFBO0VBQ3ZDLDJCQUFBLEVBQUEsZ0NBQUE7RUFDQSx1QkFBQSxFQUFBLFFBQUE7RUFDQSxvQkFBQTtBRCtESjtBQXJCUTtFQUNFLDJCQUFBO0FBdUJWO0FBbkJVO0VBQ0UsNEJBQUE7QUFxQlo7QUFmSTtFQ25FRixrQkFBQTtBRHFGRjtBQ3BGRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJEbUVJO0VDbEVKLFlEaUVJO0VDaEVKLCtHQUFBO0VBQ0EsOEVBQUEsRUFDdUMsUUFBQTtFQUN2QywyQkFBQSxFQUFBLGdDQUFBO0VBQ0EsdUJBQUEsRUFBQSxRQUFBO0VBQ0Esb0JBQUE7QURxRko7QUFwQkU7RUM5RUEsa0JBQUE7QURxR0Y7QUNwR0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLG1CRDhFRTtFQzdFRixZRDRFRTtFQzNFRiw4R0FBQTtFQUNBLDhFQUFBLEVBQ3VDLFFBQUE7RUFDdkMsMkJBQUEsRUFBQSxnQ0FBQTtFQUNBLHVCQUFBLEVBQUEsUUFBQTtFQUNBLG9CQUFBO0FEcUdKIiwiZmlsZSI6ImRyb3AtZG93bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL21peGlucyc7XG5cbi5kcm9wLWRvd24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgQGluY2x1ZGUgZXJyb3ItbWVzc2FnZTtcbiAgfVxuXG4gIC5kcm9wLWRvd24tbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItdGVydGlhcnktaW5wdXQpO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IHZhcigtLWJveC1zaGFkb3cpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LWZhbWlseTogR2lscm95LTMwMDtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTUyLCAxNDksIDE0OSwgMC4xNik7XG5cbiAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgQGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLWJnKHZhcigtLWRlZy1ncmFkaWVudC0zKSx2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTMpLHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTMpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYmxvY2sge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItdGVydGlhcnktaW5wdXQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgQGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLWJvcmRlcihcbiAgICAgIHZhcigtLWRlZy1ncmFkaWVudC1lbmFibGVkLWlucHV0KSxcbiAgICAgIHZhcigtLWdyYWRpZW50LWxlZnQtZW5hYmxlZC1pbnB1dCksXG4gICAgICB2YXIoLS1ncmFkaWVudC1yaWdodC1lbmFibGVkLWlucHV0KSxcbiAgICAgIDJweCxcbiAgICAgIDEycHhcbiAgICApO1xuXG4gICAgaDIge1xuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTEpO1xuICAgICAgZm9udC1mYW1pbHk6IEdpbHJveS0zMDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuXG4gICAgc3ZnIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuXG4gICAgICAmLnJldmVydCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICB9XG5cbiAgICAgIHBhdGgge1xuICAgICAgICBzdHJva2U6IHZhcigtLWNvbG9yLWZvbnRzLTEpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuZm9jdXMge1xuICAgICAgQGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLWJvcmRlcihcbiAgICAgICAgdmFyKC0tZGVnLWdyYWRpZW50LTYpLFxuICAgICAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTYpLFxuICAgICAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC02KSxcbiAgICAgICAgMnB4LFxuICAgICAgICAxMnB4XG4gICAgICApO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgQGluY2x1ZGUgZ3JhZGllbnQtbGluZWFyLWJvcmRlcihcbiAgICAgICAgICB2YXIoLS1kZWctZ3JhZGllbnQtMSksXG4gICAgICAgICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0xKSxcbiAgICAgICAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0xKSxcbiAgICAgICAgICAycHgsXG4gICAgICAgICAgMTJweFxuICAgICAgICApO1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgIHBhdGgge1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItYm9yZGVyKFxuICAgICAgICB2YXIoLS1kZWctZ3JhZGllbnQtMSksXG4gICAgICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LWxlZnQtMSksXG4gICAgICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTEpLFxuICAgICAgICAycHgsXG4gICAgICAgIDEycHhcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgJi5lcnJvciAuYmxvY2sge1xuICAgIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1ib3JkZXIoXG4gICAgICB2YXIoLS1kZWctZ3JhZGllbnQtNCksXG4gICAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTQpLFxuICAgICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC00KSxcbiAgICAgIDJweCxcbiAgICAgIDEycHhcbiAgICApO1xuICB9XG59XG4iLCJAbWl4aW4gYnRuLWhvdmVyKCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbkBtaXhpbiBidG4tZGlzYWJsZWQoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgJjpkaXNhYmxlZCB7XG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gICAgYmFja2dyb3VuZDogJGJnO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcbiAgfVxufVxuXG5AbWl4aW4gYnRuLWRlZmF1bHQoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gIGJhY2tncm91bmQ6ICRiZztcbiAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItYmcoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbn1cblxuQG1peGluIGJvcmRlci1ncmFkaWVudC1saW5lYXIoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYm9yZGVyLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci1ib3JkZXIoXG4gICRkZWcsXG4gICRsZWZ0Q29sb3IsXG4gICRyaWdodENvbG9yLFxuICAkYm9yZGVyV2lkdGgsXG4gICRib3JkZXJSYWRpdXNcbikge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcbiAgICBwYWRkaW5nOiAkYm9yZGVyV2lkdGg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbiAgICAtd2Via2l0LW1hc2s6IGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCkgY29udGVudC1ib3gsXG4gICAgICAvKiBbMV0gKi8gbGluZWFyLWdyYWRpZW50KCNmZmYgMCAwKTsgLyogWzJdICovXG4gICAgLXdlYmtpdC1tYXNrLWNvbXBvc2l0ZTogeG9yOyAvKiBbM10g0LTQu9GPINC/0ZbQtNGC0YDQuNC80LrQuCDQsdGA0LDRg9C30LXRgNGW0LIgKi9cbiAgICBtYXNrLWNvbXBvc2l0ZTogZXhjbHVkZTsgLyogWzNdICovXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci10ZXh0KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsZWZ0Q29sb3I7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuQG1peGluIGVycm9yLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LWZhbWlseTogR2lscm95LTQwMDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KFxuICAgIHZhcigtLWRlZy1ncmFkaWVudC00KSxcbiAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTQpLFxuICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTQpXG4gICk7XG59XG5cbkBtaXhpbiBHaWxyb3ktMzAwLTE2LWZvbnRzLTIge1xuICBmb250LWZhbWlseTogR2lscm95LTMwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG59XG5cbkBtaXhpbiBHaWxyb3ktNDAwLTMwLWZvbnRzLTIge1xuICBmb250LWZhbWlseTogR2lscm95LTQwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG59XG5cbkBtaXhpbiBHaWxyb3ktNTAwLTE0LWZvbnRzLTIge1xuICBmb250LWZhbWlseTogR2lscm95LTUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG59XG4iXX0= */"] });


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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cake/lib-api-interface */ 171);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _core_types_toaster_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/types/toaster-position */ 7564);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api.service */ 554);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ 5894);
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/modals.service */ 5414);
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/toaster.service */ 905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
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
  consts: [[1, "slice-container"], [1, "close", "pointer", 3, "click"], ["svgIcon", "tooltip-cross-close"], [1, "image"], [1, "background"], ["alt", ""], ["class", "cakebox", 4, "ngIf"], [1, "text"], [1, "confirm-btn"], [1, "button", "primary", 3, "disabled", "click"], [1, "button", "tertiary", 3, "click"], [1, "cakebox"], [3, "cakebox"]],
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
  styles: [".slice-container[_ngcontent-%COMP%] {\n  width: 610px;\n  height: -moz-fit-content;\n  height: fit-content;\n  position: relative;\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    height: 80vh;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 153px;\n  height: 153px;\n  position: relative;\n  margin: 23px auto auto;\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    margin-top: 195px;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 13px;\n  left: 20px;\n  width: 153px;\n  height: 153px;\n  background: var(--bg-get-reward-color);\n  border-radius: 16px;\n  transform: rotate(5deg);\n  z-index: 1;\n}\n.slice-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  z-index: 2;\n  top: 0;\n  left: 0;\n  position: absolute;\n  width: 153px;\n  height: 153px;\n  object-fit: cover;\n  border-radius: 16px;\n}\n.slice-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%] {\n  position: absolute;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  left: 50%;\n  top: 10%;\n  transform: translateX(-50%);\n  zoom: 0.6;\n}\n.slice-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin: 40px auto 32px;\n  max-width: 336px;\n  text-align: center;\n  font-family: \"Gilroy-300\";\n  font-weight: 400;\n  text-align: center;\n  color: var(--color-fonts-2);\n}\n.slice-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin: 0;\n}\n.slice-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 16px;\n  margin-bottom: 0;\n}\n.slice-container[_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%] {\n  width: 202px;\n  margin: auto;\n  padding-bottom: 16px;\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%]:last-of-type {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1yZXdhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FBREY7QUFHRTtFQUxGO0lBTUksaUJBQUE7SUFDQSxZQUFBO0VBQUY7QUFDRjtBQUVFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUFBSjtBQUVJO0VBTkY7SUFPSSxjQUFBO0VBQ0o7QUFDRjtBQUVFO0VBckJGO0lBc0JJLHNCQUFBO0VBQ0Y7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFBSTtFQUxGO0lBTU0saUJBQUE7RUFHTjtBQUNGO0FBREk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBR047QUFBSTtFQUNFLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRU47QUFDSTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtBQUNSO0FBR0U7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQURKO0FBR0k7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQUROO0FBSUk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZOO0FBTUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBSko7QUFNSTtFQUxGO0lBTU0sV0FBQTtFQUhOO0FBQ0Y7QUFLSTtFQUNFLGlCQUFBO0FBSE4iLCJmaWxlIjoiZ2V0LXJld2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL21peGlucyc7XG5cbi5zbGljZS1jb250YWluZXIge1xuICB3aWR0aDogNjEwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICB9XG5cbiAgLmNsb3NlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbWFnZSB7XG4gICAgd2lkdGg6IDE1M3B4O1xuICAgIGhlaWdodDogMTUzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMjNweCBhdXRvIGF1dG87XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAxOTVweDtcbiAgICAgIH1cblxuICAgIC5iYWNrZ3JvdW5kIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTNweDtcbiAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICB3aWR0aDogMTUzcHg7XG4gICAgICBoZWlnaHQ6IDE1M3B4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctZ2V0LXJld2FyZC1jb2xvcik7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxNTNweDtcbiAgICAgIGhlaWdodDogMTUzcHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgfVxuXG4gICAgLmNha2Vib3gge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICB6b29tOiAwLjY7XG4gICAgICB9XG4gIH1cblxuICAudGV4dCB7XG4gICAgbWFyZ2luOiA0MHB4IGF1dG8gMzJweDtcbiAgICBtYXgtd2lkdGg6IDMzNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0dpbHJveS0zMDAnO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcblxuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICAuY29uZmlybS1idG4ge1xuICAgIHdpZHRoOiAyMDJweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuICB9XG59XG4iXX0= */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/member-ordering */





function InputComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", ctx_r0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
} }
function InputComponent_span_5__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputComponent_span_5__svg_svg_1_Template__svg_svg_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r5.eyeHidden = !ctx_r5.eyeHidden; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.type = "password"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 11)(2, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputComponent_span_5__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputComponent_span_5__svg_svg_2_Template__svg_svg_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r7.eyeHidden = !ctx_r7.eyeHidden; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.type = "text"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputComponent_span_5__svg_svg_1_Template, 3, 0, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputComponent_span_5__svg_svg_2_Template, 2, 0, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.eyeHidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.eyeHidden);
} }
function InputComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputComponent_div_6_Template__svg_svg_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.onClosePressed()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
const _c0 = ["*"];
class InputComponent {
    constructor() {
        this.label = '';
        this.defaultType = 'text';
        this.placeholder = '';
        this.error = '';
        this.hasEye = false;
        this.defaultValue = '';
        this.hasCloseCircle = false;
        this.inputEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.inputClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.eyeHidden = true;
        this.type = 'text';
        this.onChange = () => { };
        this.onTouch = () => { };
    }
    ngOnInit() {
        this.type = this.defaultType;
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
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["cake-input"]], inputs: { label: "label", id: "id", defaultType: "defaultType", placeholder: "placeholder", error: "error", hasEye: "hasEye", defaultValue: "defaultValue", control: "control", hasCloseCircle: "hasCloseCircle" }, outputs: { inputEmitter: "inputEmitter", inputClose: "inputClose" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => InputComponent),
                multi: true,
            },
        ])], ngContentSelectors: _c0, decls: 9, vars: 10, consts: [[1, "input-control"], [3, "for", 4, "ngIf"], [1, "block"], [3, "type", "placeholder", "id", "formControl", "input"], ["class", "eye", 4, "ngIf"], ["class", "close-icon", 4, "ngIf"], [1, "error-message"], [3, "for"], [1, "eye"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "click", 4, "ngIf"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "click"], ["d", "M21.2565 10.962C21.7305 11.582 21.7305 12.419 21.2565 13.038C19.7635 14.987 16.1815 19 11.9995 19C7.81752 19 4.23552 14.987 2.74252 13.038C2.51191 12.7411 2.38672 12.3759 2.38672 12C2.38672 11.6241 2.51191 11.2589 2.74252 10.962C4.23552 9.013 7.81752 5 11.9995 5C16.1815 5 19.7635 9.013 21.2565 10.962Z", "stroke", "black", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M11.9995 15C13.6564 15 14.9995 13.6569 14.9995 12C14.9995 10.3431 13.6564 9 11.9995 9C10.3427 9 8.99952 10.3431 8.99952 12C8.99952 13.6569 10.3427 15 11.9995 15Z", "stroke", "black", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M6.87265 17.129C5.02764 15.819 3.56764 14.115 2.74264 13.039C2.51195 12.742 2.38672 12.3766 2.38672 12.0005C2.38672 11.6244 2.51195 11.259 2.74264 10.962C4.23564 9.013 7.81765 5 11.9996 5C13.8756 5 15.6296 5.807 17.1296 6.874M14.1296 9.887C13.8519 9.60467 13.5211 9.38011 13.1562 9.22629C12.7912 9.07246 12.3995 8.99241 12.0034 8.99075C11.6074 8.98909 11.215 9.06586 10.8488 9.21662C10.4826 9.36738 10.1499 9.58916 9.8698 9.86915C9.58974 10.1492 9.36789 10.4818 9.21704 10.848C9.06619 11.2142 8.98933 11.6066 8.9909 12.0026C8.99246 12.3986 9.07242 12.7904 9.22616 13.1554C9.3799 13.5203 9.60438 13.8512 9.88665 14.129M3.99964 20L19.9996 4M9.99964 18.704C10.6488 18.8972 11.3223 18.9969 11.9996 19C16.1816 19 19.7636 14.987 21.2566 13.038C21.4873 12.7407 21.6124 12.3751 21.6122 11.9988C21.612 11.6226 21.4866 11.2571 21.2556 10.96C20.7309 10.2755 20.168 9.62112 19.5696 9", "stroke", "black", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "close-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "12", "height", "11", "viewBox", "0 0 12 11", "fill", "none", 3, "click"], ["d", "M10.8135 0.780273L1.26758 10.3262M10.8135 10.3262L1.26758 0.780273", "stroke", "#977E89", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputComponent_label_1_Template, 2, 2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputComponent_Template_input_input_4_listener() { return ctx.inputEmitter.emit(ctx.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputComponent_span_5_Template, 3, 2, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InputComponent_div_6_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasEye);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasCloseCircle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.error);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective], styles: ["@charset \"UTF-8\";\n.input-control[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.input-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: var(--color-fonts-2);\n  margin-bottom: 8px;\n  font-family: Gilroy-500;\n}\n.input-control[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-family: Gilroy-400;\n  padding-left: 20px;\n  margin-top: 5px;\n  background-color: var(--color-gradient-left-4);\n  background-image: linear-gradient(var(--deg-gradient-4), var(--color-gradient-left-4), var(--color-gradient-right-4));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 43px;\n  position: relative;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 12px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-enabled-input), var(--gradient-left-enabled-input), var(--gradient-right-enabled-input));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:has(input:focus-visible) {\n  position: relative;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:has(input:focus-visible)::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 12px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-6), var(--color-gradient-left-6), var(--color-gradient-right-6));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:has(input:active) {\n  position: relative;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:has(input:active)::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 12px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-1), var(--color-gradient-left-1), var(--color-gradient-right-1));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:has(svg)    > input[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  width: calc(100% - 53px);\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:has(.eye)    > input[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  width: calc(100% - 20px);\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]     svg {\n  position: absolute;\n  left: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 24px;\n  z-index: 1;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]     svg path {\n  stroke: var(--color-fonts-1);\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  cursor: pointer;\n  left: auto;\n  right: 20px;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  cursor: pointer;\n  left: auto;\n  right: 20px;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  width: calc(100% - 20px);\n  height: calc(100% - 3px);\n  border: none;\n  padding-left: 16px;\n  color: var(--color-fonts-1);\n  background: var(--color-tertiary-input);\n  font-family: \"Gilroy-400\";\n  font-size: 16px;\n  line-height: 22px;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-fonts-1);\n  font-size: 16px;\n  font-family: Gilroy-300;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n.input-control[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  color: var(--color-fonts-2);\n}\n.input-control.error[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-control.error[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: 12px;\n  padding: 2px;\n  background: linear-gradient(var(--deg-gradient-4), var(--color-gradient-left-4), var(--color-gradient-left-4));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); \n  -webkit-mask-composite: xor; \n  mask-composite: exclude; \n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUVoQjtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUFGO0FBRUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUFKO0FBR0U7RUN5REEsY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQWRBLDhDQWlCRTtFQWhCRixxSEFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7QUQxQ0Y7QUFQRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VDdUJGLGtCQUFBO0FEYkY7QUNjRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJEdkJFO0VDd0JGLFlEekJFO0VDMEJGLHVJQUFBO0VBQ0EsOEVBQUEsRUFDdUMsUUFBQTtFQUN2QywyQkFBQSxFQUFBLGdDQUFBO0VBQ0EsdUJBQUEsRUFBQSxRQUFBO0VBQ0Esb0JBQUE7QURiSjtBQWRJO0VDY0Ysa0JBQUE7QURHRjtBQ0ZFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxtQkRuQjJIO0VDb0IzSCxZRHBCc0g7RUNxQnRILCtHQUFBO0VBQ0EsOEVBQUEsRUFDdUMsUUFBQTtFQUN2QywyQkFBQSxFQUFBLGdDQUFBO0VBQ0EsdUJBQUEsRUFBQSxRQUFBO0VBQ0Esb0JBQUE7QURHSjtBQTFCSTtFQ1VGLGtCQUFBO0FEbUJGO0FDbEJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxtQkRmMkg7RUNnQjNILFlEaEJzSDtFQ2lCdEgsK0dBQUE7RUFDQSw4RUFBQSxFQUN1QyxRQUFBO0VBQ3ZDLDJCQUFBLEVBQUEsZ0NBQUE7RUFDQSx1QkFBQSxFQUFBLFFBQUE7RUFDQSxvQkFBQTtBRG1CSjtBQXRDSTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7QUF3Q047QUFyQ0k7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0FBdUNOO0FBcENJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFzQ047QUFyQ007RUFDRSw0QkFBQTtBQXVDUjtBQWxDTTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQW9DUjtBQS9CTTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQWlDUjtBQTdCSTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQStCTjtBQTdCTTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBK0JSO0FBNUJNO0VBQ0UsYUFBQTtBQThCUjtBQTNCTTtFQUNFLDJCQUFBO0FBNkJSO0FBeEJFO0VDNURBLGtCQUFBO0FEdUZGO0FDdEZFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxtQkR1RHdIO0VDdER4SCxZRHNEbUg7RUNyRG5ILDhHQUFBO0VBQ0EsOEVBQUEsRUFDdUMsUUFBQTtFQUN2QywyQkFBQSxFQUFBLGdDQUFBO0VBQ0EsdUJBQUEsRUFBQSxRQUFBO0VBQ0Esb0JBQUE7QUR1RkoiLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9taXhpbnMnO1xuXG4uaW5wdXQtY29udHJvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBHaWxyb3ktNTAwO1xuICB9XG5cbiAgLmVycm9yLW1lc3NhZ2Uge1xuICAgIEBpbmNsdWRlIGVycm9yLW1lc3NhZ2U7XG4gIH1cblxuICAuYmxvY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDNweDtcbiAgICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItYm9yZGVyKFxuICAgICAgdmFyKC0tZGVnLWdyYWRpZW50LWVuYWJsZWQtaW5wdXQpLFxuICAgICAgdmFyKC0tZ3JhZGllbnQtbGVmdC1lbmFibGVkLWlucHV0KSxcbiAgICAgIHZhcigtLWdyYWRpZW50LXJpZ2h0LWVuYWJsZWQtaW5wdXQpLFxuICAgICAgMnB4LFxuICAgICAgMTJweFxuICAgICk7XG5cbiAgICAmOmhhcyhpbnB1dDpmb2N1cy12aXNpYmxlKSB7XG4gICAgICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItYm9yZGVyKHZhcigtLWRlZy1ncmFkaWVudC02KSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC02KSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtNiksIDJweCwgMTJweCk7XG4gICAgfVxuXG4gICAgJjpoYXMoaW5wdXQ6YWN0aXZlKSB7XG4gICAgICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItYm9yZGVyKHZhcigtLWRlZy1ncmFkaWVudC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0xKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMSksIDJweCwgMTJweCk7XG4gICAgfVxuXG4gICAgJjpoYXMoc3ZnKSA+IGlucHV0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1M3B4KTtcbiAgICB9XG5cbiAgICAmOmhhcyguZXllKSA+IGlucHV0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICB9XG5cbiAgICA6Om5nLWRlZXAgc3ZnIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBwYXRoIHtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1jb2xvci1mb250cy0xKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2xvc2UtaWNvbiB7XG4gICAgICBzdmcge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5leWUge1xuICAgICAgc3ZnIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICByaWdodDogMjBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzcHgpO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTEpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItdGVydGlhcnktaW5wdXQpO1xuICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNDAwJztcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0xKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogR2lscm95LTMwMDtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cy12aXNpYmxlIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5lcnJvciAuYmxvY2sge1xuICAgIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci1ib3JkZXIodmFyKC0tZGVnLWdyYWRpZW50LTQpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTQpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTQpLCAycHgsIDEycHgpO1xuICB9XG59XG4iLCJAbWl4aW4gYnRuLWhvdmVyKCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbkBtaXhpbiBidG4tZGlzYWJsZWQoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgJjpkaXNhYmxlZCB7XG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gICAgYmFja2dyb3VuZDogJGJnO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcbiAgfVxufVxuXG5AbWl4aW4gYnRuLWRlZmF1bHQoJHRleHRDb2xvciwgJGJnLCAkYm9yZGVyQ29sb3IpIHtcbiAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gIGJhY2tncm91bmQ6ICRiZztcbiAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckNvbG9yO1xuICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItYmcoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbn1cblxuQG1peGluIGJvcmRlci1ncmFkaWVudC1saW5lYXIoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpIHtcbiAgYm9yZGVyLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci1ib3JkZXIoXG4gICRkZWcsXG4gICRsZWZ0Q29sb3IsXG4gICRyaWdodENvbG9yLFxuICAkYm9yZGVyV2lkdGgsXG4gICRib3JkZXJSYWRpdXNcbikge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcbiAgICBwYWRkaW5nOiAkYm9yZGVyV2lkdGg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKTtcbiAgICAtd2Via2l0LW1hc2s6IGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCkgY29udGVudC1ib3gsXG4gICAgICAvKiBbMV0gKi8gbGluZWFyLWdyYWRpZW50KCNmZmYgMCAwKTsgLyogWzJdICovXG4gICAgLXdlYmtpdC1tYXNrLWNvbXBvc2l0ZTogeG9yOyAvKiBbM10g0LTQu9GPINC/0ZbQtNGC0YDQuNC80LrQuCDQsdGA0LDRg9C30LXRgNGW0LIgKi9cbiAgICBtYXNrLWNvbXBvc2l0ZTogZXhjbHVkZTsgLyogWzNdICovXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuQG1peGluIGdyYWRpZW50LWxpbmVhci10ZXh0KCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsZWZ0Q29sb3I7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuQG1peGluIGVycm9yLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LWZhbWlseTogR2lscm95LTQwMDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KFxuICAgIHZhcigtLWRlZy1ncmFkaWVudC00KSxcbiAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTQpLFxuICAgIHZhcigtLWNvbG9yLWdyYWRpZW50LXJpZ2h0LTQpXG4gICk7XG59XG5cbkBtaXhpbiBHaWxyb3ktMzAwLTE2LWZvbnRzLTIge1xuICBmb250LWZhbWlseTogR2lscm95LTMwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG59XG5cbkBtaXhpbiBHaWxyb3ktNDAwLTMwLWZvbnRzLTIge1xuICBmb250LWZhbWlseTogR2lscm95LTQwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG59XG5cbkBtaXhpbiBHaWxyb3ktNTAwLTE0LWZvbnRzLTIge1xuICBmb250LWZhbWlseTogR2lscm95LTUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG59XG4iXX0= */"] });


/***/ }),

/***/ 8167:
/*!**********************************************************************!*\
  !*** ./apps/frontend/src/app/shared/components/kol/kol.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KolComponent": () => (/* binding */ KolComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api.service */ 554);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ 5894);
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/modals.service */ 5414);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/theme.service */ 1266);
/* harmony import */ var _classes_watcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/watcher */ 34);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-skeleton-loader */ 8495);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pagination/pagination.component */ 2774);

















function KolComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function KolComponent_div_0_div_11_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const reward_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.modalsService.openRewardPopup(reward_r8.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Sugar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const reward_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", reward_r8.smallImage, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](reward_r8.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](reward_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind4"](8, 4, reward_r8.cost, "USD", "symbol-narrow", "1.0-0"));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, KolComponent_div_0_div_11_Template, 11, 9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "cake-pagination", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function KolComponent_div_0_Template_cake_pagination_pageChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.page = $event); })("pageChange", function KolComponent_div_0_Template_cake_pagination_pageChange_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.getUser()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("src", ctx_r0.kol.user.avatar || ctx_r0.profileImg, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.kol.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.getRewards);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("page", ctx_r0.page)("pageSize", ctx_r0.pageSize)("count", ctx_r0.totalCount);
} }
const _c0 = function (a0) { return { "background-color": a0, height: "72px", width: "72px" }; };
function KolComponent_ng_template_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ngx-skeleton-loader", 21)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](3, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](5, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](7, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h3", 18);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ngx-skeleton-loader", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "ngx-skeleton-loader", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "KOL");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, KolComponent_ng_template_1_div_10_Template, 10, 6, "div", 23);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-skeleton-loader", 22);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c3, ctx_r4.activeTheme.properties["--skeleton-color"]));
} }
const _c4 = function (a0) { return { "background-color": a0, height: "30px", width: "90px" }; };
function KolComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-skeleton-loader", 22);
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
KolComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: KolComponent, selectors: [["cake-kol"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 2, consts: [["class", "slice-container animation-hidden-skeleton", 4, "ngIf", "ngIfElse"], ["skeleton", ""], ["skeletonText", ""], ["skeletonTextBig", ""], [1, "slice-container", "animation-hidden-skeleton"], [1, "close", "pointer", 3, "click"], ["svgIcon", "tooltip-cross-close"], [1, "avatar"], ["alt", ""], [1, "info"], [1, "rewards"], ["class", "reward", 3, "click", 4, "ngFor", "ngForOf"], [3, "page", "pageSize", "count", "pageChange"], [1, "reward", 3, "click"], ["alt", "", 3, "src"], [1, "type"], [1, "name"], [1, "cost"], [1, "sugar"], [1, "slice-container"], [1, "close", "pointer"], ["count", "1", "appearance", "circle", "animation", "progress-dark", 3, "theme"], ["count", "1", "appearance", "line", "animation", "progress-dark", 3, "theme"], ["class", "reward", 4, "ngFor", "ngForOf"], [1, "reward"], [3, "ngTemplateOutlet"]], template: function KolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, KolComponent_div_0_Template, 13, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, KolComponent_ng_template_1_Template, 11, 7, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, KolComponent_ng_template_3_Template, 1, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, KolComponent_ng_template_5_Template, 1, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.kol)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__.NgxSkeletonLoaderComponent, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CurrencyPipe], styles: [".slice-container[_ngcontent-%COMP%] {\n  width: 610px;\n  height: 90vh;\n  position: relative;\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    height: 80vh;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Gilroy-300\";\n  font-size: 16px;\n  margin: 0;\n  color: var(--color-fonts-1);\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .slice-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 119px;\n  height: 119px;\n  background: linear-gradient(var(--deg-gradient-2), var(--color-gradient-left-2), var(--color-gradient-right-2));\n  border-radius: 50%;\n  margin: auto;\n}\n.slice-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  display: block;\n  object-fit: cover;\n  margin: auto;\n  width: 104px;\n  height: 104px;\n}\n.slice-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-list-color);\n  padding-bottom: 30px;\n}\n@media (max-width: 768px) {\n  .slice-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Santhony\";\n  font-weight: 400;\n  font-size: 40px;\n  background-color: var(--color-gradient-left-3);\n  background-image: linear-gradient(var(--deg-gradient-3), var(--color-gradient-left-3), var(--color-gradient-right-3));\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n  text-align: center;\n  margin: 20px 0 0;\n}\n@media (max-width: 768px) {\n  .slice-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n    margin: 5px 0 0;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 610px;\n  flex-wrap: wrap;\n  margin: auto;\n}\n.slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  width: 180px;\n  text-align: left;\n}\n@media (max-width: 768px) {\n  .slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%] {\n    width: 30%;\n    margin-top: 15px;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%], .slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   .sugar[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  object-fit: cover;\n  display: block;\n  margin: auto;\n  border-radius: 50%;\n}\n.slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-300\";\n  font-size: 20px;\n  color: var(--color-fonts-2);\n}\n@media (max-width: 768px) {\n  .slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-500\";\n  font-size: 32px;\n  color: var(--color-fonts-2);\n  margin-top: 10px;\n}\n@media (max-width: 768px) {\n  .slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .rewards[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   .sugar[_ngcontent-%COMP%] {\n  color: var(--color-fonts-2);\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtvbC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUdFO0VBTEY7SUFNSSxpQkFBQTtJQUNBLFlBQUE7RUFBRjtBQUNGO0FBRUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQUFKO0FBRUk7RUFORjtJQU9NLGNBQUE7RUFDTjtBQUNGO0FBR0U7RUF0QkY7SUF1Qkksc0JBQUE7RUFBRjtBQUNGO0FBRUU7RUFDRSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUVJO0VBUkY7SUFTSSxlQUFBO0VBQ0o7QUFDRjtBQUVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwrR0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFKO0FBRUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUFSO0FBSUU7RUFDRSxpREFBQTtFQUNBLG9CQUFBO0FBRko7QUFJSTtFQUpGO0lBS0ksb0JBQUE7RUFESjtBQUNGO0FBR0k7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQ1JKLDhDRFN5RDtFQ1J6RCxxSEFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7RURJSSxrQkFBQTtFQUNBLGdCQUFBO0FBS047QUFITTtFQVJGO0lBU0ksZUFBQTtJQUNBLGVBQUE7RUFNTjtBQUNGO0FBREU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFHSjtBQURJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFHTjtBQURNO0VBTEY7SUFNSSxVQUFBO0lBQ0EsZ0JBQUE7RUFJTjtBQUNGO0FBRk07RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUlSO0FBRE07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUdSO0FBQU07RUFDRSxnQkFBQTtBQUVSO0FBQ007RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQUNSO0FBQ1E7RUFMRjtJQU1JLGVBQUE7RUFFUjtBQUNGO0FBQ007RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFDUTtFQU5GO0lBT0ksZUFBQTtFQUVSO0FBQ0Y7QUFDTTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7QUFDUiIsImZpbGUiOiJrb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2dsb2JhbC9taXhpbnMnO1xuXG4uc2xpY2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDYxMHB4O1xuICBoZWlnaHQ6IDkwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICB9XG5cbiAgLmNsb3NlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIFxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95LTMwMCc7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG4gIFxuICAuYXZhdGFyIHtcbiAgICB3aWR0aDogMTE5cHg7XG4gICAgaGVpZ2h0OiAxMTlweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tZGVnLWdyYWRpZW50LTIpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1sZWZ0LTIpLCB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC0yKSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBcbiAgICBpbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogMTA0cHg7XG4gICAgICAgIGhlaWdodDogMTA0cHg7XG4gICAgfVxuICB9XG5cbiAgLmluZm8ge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlzdC1jb2xvcik7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnU2FudGhvbnknO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIEBpbmNsdWRlIGdyYWRpZW50LWxpbmVhci10ZXh0KHZhcigtLWRlZy1ncmFkaWVudC0zKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC0zKSwgdmFyKC0tY29sb3ItZ3JhZGllbnQtcmlnaHQtMykpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAyMHB4IDAgMDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgbWFyZ2luOiA1cHggMCAwO1xuICAgICAgfVxuICAgIH1cblxuICB9IFxuXG4gIC5yZXdhcmRzIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA2MTBweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgLnJld2FyZCB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICB9XG5cbiAgICAgIC5uYW1lLCAuY29zdCwgLnN1Z2FyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA3MnB4O1xuICAgICAgICBoZWlnaHQ6IDcycHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB9XG5cbiAgICAgIC50eXBlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgLm5hbWUge1xuICAgICAgICBmb250LWZhbWlseTogJ0dpbHJveS0zMDAnO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvc3Qge1xuICAgICAgICBmb250LWZhbWlseTogJ0dpbHJveS01MDAnO1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnN1Z2FyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuIiwiQG1peGluIGJ0bi1ob3ZlcigkdGV4dENvbG9yLCAkYmcsICRib3JkZXJDb2xvcikge1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHRleHRDb2xvcjtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgfVxufVxuXG5AbWl4aW4gYnRuLWRpc2FibGVkKCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gICY6ZGlzYWJsZWQge1xuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG4gIH1cbn1cblxuQG1peGluIGJ0bi1kZWZhdWx0KCR0ZXh0Q29sb3IsICRiZywgJGJvcmRlckNvbG9yKSB7XG4gIGNvbG9yOiAkdGV4dENvbG9yO1xuICBiYWNrZ3JvdW5kOiAkYmc7XG4gIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXJDb2xvcjtcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtbGluZWFyLWJnKCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG59XG5cbkBtaXhpbiBib3JkZXItZ3JhZGllbnQtbGluZWFyKCRkZWcsICRsZWZ0Q29sb3IsICRyaWdodENvbG9yKSB7XG4gIGJvcmRlci1pbWFnZTogIGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItYm9yZGVyKFxuICAkZGVnLFxuICAkbGVmdENvbG9yLFxuICAkcmlnaHRDb2xvcixcbiAgJGJvcmRlcldpZHRoLFxuICAkYm9yZGVyUmFkaXVzXG4pIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XG4gICAgcGFkZGluZzogJGJvcmRlcldpZHRoO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcik7XG4gICAgLXdlYmtpdC1tYXNrOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiAwIDApIGNvbnRlbnQtYm94LFxuICAgICAgLyogWzFdICovIGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCk7IC8qIFsyXSAqL1xuICAgIC13ZWJraXQtbWFzay1jb21wb3NpdGU6IHhvcjsgLyogWzNdINC00LvRjyDQv9GW0LTRgtGA0LjQvNC60Lgg0LHRgNCw0YPQt9C10YDRltCyICovXG4gICAgbWFzay1jb21wb3NpdGU6IGV4Y2x1ZGU7IC8qIFszXSAqL1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59XG5cbkBtaXhpbiBncmFkaWVudC1saW5lYXItdGV4dCgkZGVnLCAkbGVmdENvbG9yLCAkcmlnaHRDb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGVmdENvbG9yO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJGxlZnRDb2xvciwgJHJpZ2h0Q29sb3IpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtaXhpbiBlcnJvci1tZXNzYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IEdpbHJveS00MDA7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBAaW5jbHVkZSBncmFkaWVudC1saW5lYXItdGV4dChcbiAgICB2YXIoLS1kZWctZ3JhZGllbnQtNCksXG4gICAgdmFyKC0tY29sb3ItZ3JhZGllbnQtbGVmdC00KSxcbiAgICB2YXIoLS1jb2xvci1ncmFkaWVudC1yaWdodC00KVxuICApO1xufVxuXG5AbWl4aW4gR2lscm95LTMwMC0xNi1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6IEdpbHJveS0zMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xufVxuXG5AbWl4aW4gR2lscm95LTQwMC0zMC1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6IEdpbHJveS00MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xufVxuXG5AbWl4aW4gR2lscm95LTUwMC0xNC1mb250cy0yIHtcbiAgZm9udC1mYW1pbHk6IEdpbHJveS01MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xufVxuIl19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 7822);



class PaginationComponent {
    constructor() {
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    get getPages() {
        return Math.ceil(this.count / this.pageSize);
    }
    nextPage() {
        this.pageChange.emit(this.getPages === this.page ? 1 : this.page + 1);
    }
    previousPage() {
        this.pageChange.emit(this.page === 1 ? this.getPages : this.page - 1);
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["cake-pagination"]], inputs: { page: "page", pageSize: "pageSize", count: "count" }, outputs: { pageChange: "pageChange" }, decls: 15, vars: 2, consts: [[1, "pagination"], [1, "left-pagination"], [1, "double-arrow", 3, "click"], ["svgIcon", "arrow-left"], [3, "click"], [1, "pages"], [1, "right-pagination"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_span_click_2_listener() { return ctx.pageChange.emit(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 3)(4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_span_click_5_listener() { return ctx.previousPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_span_click_10_listener() { return ctx.pageChange.emit(ctx.getPages); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-icon", 3)(12, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_span_click_13_listener() { return ctx.nextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.page, " of ", ctx.getPages, " ");
    } }, dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon], styles: [".pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  width: 170px;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 25px auto auto;\n}\n.pagination[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 16px;\n  color: var(--color-fonts-2);\n}\n.pagination[_ngcontent-%COMP%]   .left-pagination[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   .right-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  width: 40px;\n  justify-content: space-around;\n}\n.pagination[_ngcontent-%COMP%]   .right-pagination[_ngcontent-%COMP%] {\n  transform: scale(-1, 1);\n}\n.pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  display: block;\n}\n.pagination[_ngcontent-%COMP%]   span.double-arrow[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  position: relative;\n}\n.pagination[_ngcontent-%COMP%]   span.double-arrow[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:nth-of-type(1) {\n  position: absolute;\n  left: 0;\n}\n.pagination[_ngcontent-%COMP%]   span.double-arrow[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:nth-of-type(2) {\n  position: absolute;\n  left: 3px;\n}\n.pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  overflow: visible;\n  width: 9px;\n  height: 9px;\n  cursor: pointer;\n}\n.pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]     svg path {\n  stroke: var(--color-fonts-list-head);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUNJO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFDUjtBQUVJOztFQUVFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFBTjtBQUdJO0VBS0ksdUJBQUE7QUFEUjtBQUlJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBRk47QUFJTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQUlRO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0FBRlY7QUFLUTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUhWO0FBT007RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUxSO0FBUVk7RUFDSSxvQ0FBQTtBQU5oQiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2luYXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICB3aWR0aDogMTcwcHg7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBtYXJnaW46IDI1cHggYXV0byBhdXRvO1xuXG4gICAgLnBhZ2VzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNDAwJztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gICAgfVxuXG4gICAgLmxlZnQtcGFnaW5hdGlvbixcbiAgICAucmlnaHQtcGFnaW5hdGlvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB9XG5cbiAgICAucmlnaHQtcGFnaW5hdGlvbiB7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgd2lkdGg6IDlweDtcbiAgICAgIGhlaWdodDogOXB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICYuZG91YmxlLWFycm93IHtcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICYgbWF0LWljb246bnRoLW9mLXR5cGUoMSkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJiBtYXQtaWNvbjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDNweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICB3aWR0aDogOXB4O1xuICAgICAgICBoZWlnaHQ6IDlweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIDo6bmctZGVlcCBzdmcge1xuICAgICAgICAgICAgcGF0aCB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1jb2xvci1mb250cy1saXN0LWhlYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9Il19 */"] });


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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _cake_lib_api_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cake/lib-api-interface */ 171);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api.service */ 554);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ 5894);
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/modals.service */ 5414);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/theme.service */ 1266);
/* harmony import */ var _classes_watcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../classes/watcher */ 34);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-skeleton-loader */ 8495);
/* harmony import */ var _cakebox_cakebox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cakebox/cakebox.component */ 3755);
/* harmony import */ var _core_pipes_cakebox_transform_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/pipes/cakebox-transform.pipe */ 7603);



















function RewardComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "cake-cakebox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "cakeboxTransform");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cakebox", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r7.reward));
} }
function RewardComponent_div_0_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 21)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const rewardInBox_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("src", rewardInBox_r16.smallImage || rewardInBox_r16.image, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", rewardInBox_r16.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](rewardInBox_r16.name);
} }
function RewardComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, RewardComponent_div_0_div_14_div_1_Template, 7, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r8.reward.rewards);
} }
function RewardComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Sugar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 25)(11, "ul")(12, "li")(13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " Rarity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "li")(18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "li")(23, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, " Created ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RewardComponent_div_0_div_15_Template_li_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r17.showHistory = !ctx_r17.showHistory); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, " Transaction history ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 30)(34, "ul")(35, "li", 31)(36, "h2", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "h2", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "Owner\u2019s Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "li", 35)(43, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "Apr 09, 2011");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "Robert Fox");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, " $349,400");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "li", 35)(50, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "Apr 09, 2011");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "Robert Fox");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, " $349,400");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "li", 35)(57, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58, "Apr 09, 2011");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "Robert Fox");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, " $349,400");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "li", 35)(64, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65, "Apr 09, 2011");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "Robert Fox");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, " $349,400");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "li", 35)(71, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, "Apr 09, 2011");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74, "Robert Fox");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76, " $349,400");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "li", 35)(78, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79, "Apr 09, 2011");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](81, "Robert Fox");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](83, " $349,400");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "li", 35)(85, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86, "Apr 09, 2011");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](88, "Robert Fox");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90, " $349,400");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "div", 36)(92, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RewardComponent_div_0_div_15_Template_button_click_92_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r19.showFullHistory = !ctx_r19.showFullHistory); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind4"](7, 11, ctx_r9.reward.cost, "USD", "symbol-narrow", "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r9.reward.rarity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r9.reward.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 16, ctx_r9.reward.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("revers", ctx_r9.showHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("show-history", ctx_r9.showHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("show-full-history", ctx_r9.showFullHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r9.showFullHistory ? "Hide" : "See", " full history");
} }
function RewardComponent_div_0_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38)(1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RewardComponent_div_0_div_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r20.getReward()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Get it");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function RewardComponent_div_0_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38)(1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RewardComponent_div_0_div_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r22.putIntoConfectionary()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Put into confectionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function RewardComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38)(1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RewardComponent_div_0_div_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r24.putIntoConfectionary()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Already in confectionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function RewardComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38)(1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RewardComponent_div_0_div_20_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r26.claimCakebox()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Claim");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function RewardComponent_div_0_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41)(1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RewardComponent_div_0_div_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r28.dialogRef.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} }
function RewardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4)(1, "div")(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RewardComponent_div_0_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r30.dialogRef.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, RewardComponent_div_0_div_6_Template, 3, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 10)(8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, RewardComponent_div_0_div_14_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, RewardComponent_div_0_div_15_Template, 94, 18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, RewardComponent_div_0_div_17_Template, 3, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, RewardComponent_div_0_div_18_Template, 3, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, RewardComponent_div_0_div_19_Template, 3, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, RewardComponent_div_0_div_20_Template, 3, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, RewardComponent_div_0_div_21_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("cakebox-container", ctx_r0.reward.type === ctx_r0.rewardEnum.CAKEBOX);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("hide-img", ctx_r0.showHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("src", ctx_r0.reward.image, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.reward.type === ctx_r0.rewardEnum.CAKEBOX && !ctx_r0.showHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 15, ctx_r0.reward.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.reward.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.reward.type === ctx_r0.rewardEnum.CAKEBOX);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.data.isClaimed);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.data.isClaimed && ctx_r0.reward.userId !== ctx_r0.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.data.isClaimed && ctx_r0.reward.userId === ctx_r0.userId && !ctx_r0.reward.isConfectionary);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.data.isClaimed && ctx_r0.reward.userId === ctx_r0.userId && ctx_r0.reward.isConfectionary);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.data.isClaimed);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.data.isClaimed);
} }
const _c0 = function (a0) { return { "background-color": a0, height: "380px", width: "100%", "border-radius": "12px" }; };
function RewardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 42)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ngx-skeleton-loader", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](4, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](6, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 11)(8, "div", 22)(9, "div", 23)(10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](11, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](13, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](15, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 25)(17, "ul")(18, "li")(19, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, " Rarity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](22, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "li")(24, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](27, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "li")(29, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, " Created ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](32, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RewardComponent_ng_template_1_Template_li_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r32.showHistory = !ctx_r32.showHistory); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, " Transaction history ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 38)(39, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Get it");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](4);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](11, _c0, ctx_r2.activeTheme.properties["--skeleton-color"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("revers", ctx_r2.showHistory);
} }
const _c1 = function (a0) { return { "background-color": a0, height: "18px", width: "50px", "border-radius": "2px" }; };
function RewardComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-skeleton-loader", 43);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c1, ctx_r4.activeTheme.properties["--skeleton-color"]));
} }
const _c2 = function (a0) { return { "background-color": a0, height: "26px", width: "60px", "border-radius": "2px" }; };
function RewardComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-skeleton-loader", 43);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c2, ctx_r6.activeTheme.properties["--skeleton-color"]));
} }
class RewardComponent extends _classes_watcher__WEBPACK_IMPORTED_MODULE_5__.Watcher {
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
        this.apiService.getRewardById(this.data.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.unsubscribe)).subscribe((reward) => {
            this.reward = reward.data;
        });
    }
    getReward() {
        this.modalService.getRewardPopup(this.reward);
        this.dialogRef.close();
    }
    claimCakebox() {
        this.apiService.claimCakebox(this.reward.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.unsubscribe)).subscribe();
        this.dialogRef.close();
    }
    putIntoConfectionary() {
        this.apiService.toConfectionary(this.reward.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.unsubscribe)).subscribe(() => {
            this.reward.isConfectionary = true;
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
RewardComponent.ɵfac = function RewardComponent_Factory(t) { return new (t || RewardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_4__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_modals_service__WEBPACK_IMPORTED_MODULE_3__.ModalsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
RewardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: RewardComponent, selectors: [["cake-reward"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 2, consts: [["class", "slice-container animation-hidden-skeleton", 3, "cakebox-container", 4, "ngIf", "ngIfElse"], ["skeleton", ""], ["skeletonText", ""], ["skeletonTextBig", ""], [1, "slice-container", "animation-hidden-skeleton"], [1, "close", "pointer", 3, "click"], ["svgIcon", "tooltip-cross-close"], [1, "image"], ["alt", ""], ["class", "cakebox", 4, "ngIf"], [1, "title"], [1, "flex"], ["class", "cake-box-items", 4, "ngIf"], ["class", "information-block", 4, "ngIf"], ["class", "get-it-btn", 4, "ngIf"], ["class", "cancel-btn", 4, "ngIf"], [1, "cakebox"], [3, "cakebox"], [1, "cake-box-items"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "text"], [1, "information-block"], [1, "stats"], [1, "cost"], [1, "info"], [1, "name"], [1, "value"], [1, "pointer", 3, "click"], ["svgIcon", "arrow-down"], [1, "transaction-history"], [1, "row", "header"], [1, "col", "date"], [1, "col", "owner"], [1, "col", "price"], [1, "row", "list"], [1, "full-history"], [1, "button", "tertiary", 3, "click"], [1, "get-it-btn"], [1, "button", "primary", 3, "click"], ["disabled", "", 1, "button", "primary", 3, "click"], [1, "cancel-btn"], [1, "slice-container"], ["count", "1", "appearance", "line", "animation", "progress-dark", 3, "theme"], [3, "ngTemplateOutlet"], [1, "button", "primary"]], template: function RewardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, RewardComponent_div_0_Template, 22, 17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, RewardComponent_ng_template_1_Template, 41, 13, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, RewardComponent_ng_template_3_Template, 1, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, RewardComponent_ng_template_5_Template, 1, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.reward)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__.NgxSkeletonLoaderComponent, _cakebox_cakebox_component__WEBPACK_IMPORTED_MODULE_6__.CakeboxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, _core_pipes_cakebox_transform_pipe__WEBPACK_IMPORTED_MODULE_7__.CakeboxTransformPipe], styles: [".slice-container[_ngcontent-%COMP%] {\n  width: 610px;\n  height: 90vh;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    height: 80vh;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  transition: 0.3s ease-in;\n  position: relative;\n  width: 100%;\n  height: 380px;\n  overflow: hidden;\n}\n.slice-container[_ngcontent-%COMP%]   .image.hide-img[_ngcontent-%COMP%] {\n  height: 0;\n}\n.slice-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.slice-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%] {\n  animation: 0.3s show_box ease-in-out;\n  position: absolute;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  left: 50%;\n  top: 10%;\n  transform: translateX(-50%);\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .cakebox[_ngcontent-%COMP%] {\n    top: -22%;\n    zoom: 0.6;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-300\";\n  font-size: 16px;\n  margin: 0;\n  color: var(--color-fonts-1);\n}\n.slice-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 22px;\n  margin: 0;\n  color: var(--color-fonts-2);\n}\n.slice-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  width: 100%;\n  border-bottom: 1px solid var(--border-list-color);\n}\n.slice-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  padding-top: 35px;\n  display: flex;\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .cake-box-items[_ngcontent-%COMP%] {\n  width: 325px;\n  border-right: 1px solid var(--border-list-color);\n}\n@media (max-width: 1023px) {\n  .slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .cake-box-items[_ngcontent-%COMP%] {\n    width: 100%;\n    border-right: none;\n  }\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .cake-box-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-list-color);\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .cake-box-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  object-fit: cover;\n  border-radius: 50px;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .cake-box-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .cake-box-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-300\";\n  font-size: 20px;\n  margin: 3px 0 0;\n  color: var(--color-fonts-2);\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-500\";\n  font-size: 32px;\n  margin: 5px 0 0;\n  color: var(--color-fonts-2);\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-list-color);\n  padding-bottom: 25px;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 16px;\n  margin: 0;\n  color: var(--color-fonts-2);\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding-top: 25px;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--border-list-color);\n  margin: 0;\n  color: var(--color-fonts-2);\n  padding: 5px 0;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-300\";\n  font-size: 20px;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 18px;\n  transition: 0.2s ease-in;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .value.revers[_ngcontent-%COMP%] {\n  transition: 0.2s ease-in;\n  transform: rotate(180deg);\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: translateY(5px);\n  margin-top: -5px;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]     svg path {\n  stroke: var(--color-fonts-2);\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .transaction-history[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  height: 0;\n  transition: 0.2s ease-in;\n  overflow: hidden;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .transaction-history.show-history[_ngcontent-%COMP%] {\n  transition: 0.2s ease-in;\n  height: 200px;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .transaction-history.show-history[_ngcontent-%COMP%]:has(.show-full-history) {\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .transaction-history[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0 0 10px;\n  overflow: hidden;\n  height: 150px;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .transaction-history[_ngcontent-%COMP%]   ul.show-full-history[_ngcontent-%COMP%] {\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .transaction-history[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--border-list-color);\n  padding: 8px 0;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .transaction-history[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%] {\n  color: var(--color-fonts-2);\n  font-family: \"Gilroy-300\";\n  font-size: 16px;\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .transaction-history[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .row.list[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-500\";\n}\n.slice-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]   .transaction-history[_ngcontent-%COMP%]   .full-history[_ngcontent-%COMP%] {\n  width: 202px;\n  margin: auto;\n}\n.slice-container[_ngcontent-%COMP%]   .get-it-btn[_ngcontent-%COMP%] {\n  width: 202px;\n  margin: 40px auto 0;\n  padding-bottom: 20px;\n}\n.slice-container[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  width: 202px;\n  margin: auto;\n  padding-bottom: 20px;\n}\n.cakebox-container[_ngcontent-%COMP%] {\n  width: 930px;\n}\n@media (max-width: 1023px) {\n  .cakebox-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.cakebox-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  height: 279px;\n  overflow: initial;\n}\n@media (max-width: 1023px) {\n  .cakebox-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    height: 90px;\n  }\n}\n.cakebox-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n.cakebox-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  width: calc(100% - 325px);\n}\n@media (max-width: 1023px) {\n  .cakebox-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 0;\n  }\n}\n@keyframes show_box {\n  0% {\n    opacity: 0;\n  }\n  90% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJld2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQURGO0FBR0U7RUFSRjtJQVNJLGlCQUFBO0lBQ0EsWUFBQTtFQUFGO0FBQ0Y7QUFFRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FBQUo7QUFFSTtFQU5GO0lBT00sY0FBQTtFQUNOO0FBQ0Y7QUFHRTtFQXpCRjtJQTBCSSxzQkFBQTtFQUFGO0FBQ0Y7QUFFRTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQUo7QUFFSTtFQUNFLFNBQUE7QUFBTjtBQUdJO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRE47QUFJSTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFGTjtBQUlNO0VBVEY7SUFVSSxTQUFBO0lBQ0EsU0FBQTtFQUROO0FBQ0Y7QUFLRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQUhKO0FBTUU7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUFKSjtBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaURBQUE7QUFMSjtBQU9JO0VBQ0UsYUFBQTtBQUxOO0FBU0U7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUFQSjtBQVNJO0VBSkY7SUFLTSxzQkFBQTtFQU5OO0FBQ0Y7QUFRSTtFQUNFLFlBQUE7RUFDQSxnREFBQTtBQU5OO0FBT007RUFIRjtJQUlJLFdBQUE7SUFDQSxrQkFBQTtFQUpOO0FBQ0Y7QUFNTTtFQUNFLGlEQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUpSO0FBTVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFKVjtBQU9RO0VBQ0ksaUJBQUE7QUFMWjtBQU9VO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBTFo7QUFXSTtFQUNFLFdBQUE7QUFUTjtBQVdNO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBVFI7QUFZTTtFQUNFLGlEQUFBO0VBQ0Esb0JBQUE7QUFWUjtBQVlRO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBVlY7QUFjTTtFQUNFLGlCQUFBO0FBWlI7QUFjUTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBWlY7QUFjVTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlEQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQVpaO0FBY1k7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFaZDtBQWVZO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFiZDtBQWVjO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtBQWJoQjtBQWdCYztFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7QUFkaEI7QUFpQmtCO0VBQ0UsNEJBQUE7QUFmcEI7QUF3Qk07RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBdEJSO0FBeUJRO0VBQ0Usd0JBQUE7RUFDQSxhQUFBO0FBdkJWO0FBd0JVO0VBQ0Usd0JBQUE7RUFBQSxtQkFBQTtBQXRCWjtBQTRCUTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQTFCVjtBQTRCVTtFQUNFLHdCQUFBO0VBQUEsbUJBQUE7QUExQlo7QUE2QlU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpREFBQTtFQUNBLGNBQUE7QUEzQlo7QUE2Qlk7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQTNCZDtBQTZCYztFQUNFLHlCQUFBO0FBM0JoQjtBQWlDUTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBL0JWO0FBcUNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFuQ0o7QUFxQ0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBbkNKO0FBdUNBO0VBQ0UsWUFBQTtBQXBDRjtBQXNDRTtFQUhGO0lBSUksV0FBQTtFQW5DRjtBQUNGO0FBcUNFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBbkNKO0FBcUNJO0VBSkY7SUFLSSxZQUFBO0VBbENKO0FBQ0Y7QUFzQ0U7RUFDRSxjQUFBO0FBcENKO0FBc0NJO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQXBDTjtBQXFDTTtFQUhGO0lBSUksV0FBQTtJQUNBLGVBQUE7RUFsQ047QUFDRjtBQXdDQTtFQUNFO0lBQ0UsVUFBQTtFQXJDRjtFQXVDQTtJQUNFLFVBQUE7RUFyQ0Y7RUF1Q0E7SUFDRSxVQUFBO0VBckNGO0FBQ0YiLCJmaWxlIjoicmV3YXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9nbG9iYWwvbWl4aW5zJztcblxuLnNsaWNlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA2MTBweDtcbiAgaGVpZ2h0OiA5MHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gIH1cblxuICAuY2xvc2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgXG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbWFnZSB7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM4MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmLmhpZGUtaW1nIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuXG4gICAgLmNha2Vib3gge1xuICAgICAgYW5pbWF0aW9uOiAwLjNzIHNob3dfYm94ICBlYXNlLWluLW91dDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0b3A6IDEwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgICAgICB0b3A6IC0yMiU7XG4gICAgICAgIHpvb206IDAuNjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktMzAwJztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0xKTtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogJ0dpbHJveS00MDAnO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlzdC1jb2xvcik7XG5cbiAgICBoMSB7XG4gICAgICBtYXJnaW46IDVweCAwO1xuICAgIH1cbiAgfVxuXG4gIC5mbGV4IHtcbiAgICBwYWRkaW5nLXRvcDogMzVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5jYWtlLWJveC1pdGVtcyB7XG4gICAgICB3aWR0aDogMzI1cHg7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlzdC1jb2xvcik7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5pdGVtIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saXN0LWNvbG9yKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcblxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktMzAwJztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbjogM3B4IDAgMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5mb3JtYXRpb24tYmxvY2sge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNTAwJztcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICBtYXJnaW46IDVweCAwIDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgICAgIH1cblxuICAgICAgLnN0YXRzIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saXN0LWNvbG9yKTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNDAwJztcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250cy0yKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaW5mbyB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpc3QtY29sb3IpO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XG5cbiAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktMzAwJztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudmFsdWUge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0dpbHJveS00MDAnO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcblxuICAgICAgICAgICAgICAmLnJldmVycyB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcblxuICAgICAgICAgICAgICAgIDo6bmctZGVlcCBzdmcge1xuICAgICAgICAgICAgICAgICAgcGF0aCB7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tY29sb3ItZm9udHMtMik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50cmFuc2FjdGlvbi1oaXN0b3J5IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW47XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cblxuICAgICAgICAmLnNob3ctaGlzdG9yeSB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgJjpoYXMoLnNob3ctZnVsbC1oaXN0b3J5KSB7XG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuXG4gICAgICAgICAgJi5zaG93LWZ1bGwtaGlzdG9yeSB7XG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yb3cge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlzdC1jb2xvcik7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcblxuICAgICAgICAgICAgJi5saXN0IHtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnRzLTIpO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0dpbHJveS0zMDAnO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG5cbiAgICAgICAgICAgICAgLnByaWNlIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0dpbHJveS01MDAnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmZ1bGwtaGlzdG9yeSB7XG4gICAgICAgICAgd2lkdGg6IDIwMnB4O1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5nZXQtaXQtYnRuIHtcbiAgICB3aWR0aDogMjAycHg7XG4gICAgbWFyZ2luOiA0MHB4IGF1dG8gMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuICAuY2FuY2VsLWJ0biB7XG4gICAgd2lkdGg6IDIwMnB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxufVxuXG4uY2FrZWJveC1jb250YWluZXIge1xuICB3aWR0aDogOTMwcHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmltYWdlIHtcbiAgICBoZWlnaHQ6IDI3OXB4O1xuICAgIG92ZXJmbG93OiBpbml0aWFsO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgIH1cblxuICB9XG5cbiAgLmZsZXgge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuXG4gICAgLmluZm9ybWF0aW9uLWJsb2NrIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMjVweCk7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuQGtleWZyYW1lcyBzaG93X2JveCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDkwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */"] });


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
/* harmony import */ var _services_reward_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/reward.service */ 4052);
/* harmony import */ var _classes_watcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/watcher */ 34);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);











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
    }
    get OPTIONS() {
        return ['View details', ...(this.reward?.isConfectionary ? ['Already in confectionary'] : ['Put into confectionary'])];
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 8px;\n  z-index: 99999;\n  position: fixed;\n  width: calc(100% - 16px);\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  background: rgba(70, 64, 83, 0.8);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n  border-radius: 12px;\n  padding: 4px 0px;\n  position: relative;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  right: 21px;\n  top: -24px;\n  background: rgba(70, 64, 83, 0.8);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n  clip-path: polygon(100% 0, 0% 100%, 100% 100%);\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  height: 54px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 16px;\n  line-height: 22px;\n  color: var(--color-fonts-3);\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJld2FyZHMtb3B0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQUNGO0FBQUU7RUFDRSxpQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQURJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsOENBQUE7QUFHTjtBQURJO0VBQ0UsV0FBQTtBQUdOO0FBRk07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSVI7QUFIUTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFLVjtBQUhRO0VBQ0UsaURBQUE7QUFLViIsImZpbGUiOiJyZXdhcmRzLW9wdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgOHB4O1xuICB6LWluZGV4OiA5OTk5OTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gIC5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNzAsIDY0LCA4MywgMC44KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDRweCAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5hcnJvdyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIHJpZ2h0OiAyMXB4O1xuICAgICAgdG9wOiAtMjRweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNzAsIDY0LCA4MywgMC44KTtcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCwgMCUgMTAwJSwgMTAwJSAxMDAlKTtcbiAgICB9XG4gICAgLmNvbnRlbnQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAuaXRlbSB7XG4gICAgICAgIGhlaWdodDogNTRweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0dpbHJveS00MDAnO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udHMtMyk7XG4gICAgICAgIH1cbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


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
TooltipComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TooltipComponent, selectors: [["cake-tooltip"]], decls: 8, vars: 5, consts: [[1, "tooltip"], [1, "wrapper"], [1, "close-btn"], ["viewBox", "0 0 12 12", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "click"], ["d", "M11.25 11.25L0.75 0.75M11.25 0.75L0.75 11.25", "stroke", "#977E89", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "content", 2, "width", "100%", "height", "100%", "display", "flex", "align-items", "center", "justify-content", "center", "text-align", "center", "margin", "-20px -10px 0 0", "word-break", "break-word"], [1, "tooltip-text"]], template: function TooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TooltipComponent_Template__svg_svg_click_3_listener() { return ctx.destroy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("left", ctx.left + "px")("top", ctx.top + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.tooltip, " ");
    } }, styles: [".tooltip[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: var(--color-tertiary-input);\n  border-radius: 4px;\n  color: var(--color-tooltip-text);\n  font-family: Arial;\n  padding: 3px 6px;\n  font-size: 13px;\n  margin-top: 5px;\n  transform: translateX(-50%);\n  width: 232px;\n  height: 108px;\n  z-index: 99999;\n}\n.tooltip[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid var(--color-tertiary-input);\n  position: absolute;\n  left: calc(50% - 5px);\n  bottom: -5px;\n  transform: rotate(180deg);\n}\n.tooltip[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 10px;\n}\n.tooltip[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: right;\n}\n.tooltip[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: var(--size-tooltip-close);\n  height: var(--size-tooltip-close);\n}\n.tooltip[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: var(--color-tooltip-close);\n}\n.tooltip[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2x0aXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLG9EQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUVKO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQUk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFFTjtBQURNO0VBQ0UscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FBR1I7QUFGUTtFQUNFLGtDQUFBO0FBSVY7QUFEUTtFQUNFLGVBQUE7QUFHViIsImZpbGUiOiJ0b29sdGlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2x0aXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlcnRpYXJ5LWlucHV0KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItdG9vbHRpcC10ZXh0KTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBwYWRkaW5nOiAzcHggNnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogMjMycHg7XG4gIGhlaWdodDogMTA4cHg7XG4gIHotaW5kZXg6IDk5OTk5O1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1jb2xvci10ZXJ0aWFyeS1pbnB1dCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNXB4KTtcbiAgICBib3R0b206IC01cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxuXG4gIC53cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAuY2xvc2UtYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBzdmcge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1zaXplLXRvb2x0aXAtY2xvc2UpO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLXNpemUtdG9vbHRpcC1jbG9zZSk7XG4gICAgICAgIHBhdGgge1xuICAgICAgICAgIHN0cm9rZTogdmFyKC0tY29sb3ItdG9vbHRpcC1jbG9zZSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICAudG9vbHRpcC10ZXh0IHtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api.service */ 554);
/* harmony import */ var _services_modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/modals.service */ 5414);
/* harmony import */ var _classes_watcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/watcher */ 34);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);









function WelcomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WelcomeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WelcomeComponent_div_7_Template_div_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const cakeBox_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.claim(cakeBox_r2.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Claim");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const cakeBox_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("alt", cakeBox_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("src", cakeBox_r2.smallImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cakeBox_r2.name);
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
        this.apiService
            .getRewards(this.getQueryObj)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscribe))
            .subscribe((boxes) => {
            this.cakeboxes = boxes.data;
            this.count = boxes.count;
        });
    }
    claim(id) {
        this.modalsService.openClaimCakeboxPopup(id);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_modals_service__WEBPACK_IMPORTED_MODULE_2__.ModalsService)); };
WelcomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["cake-welcome"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 3, consts: [[1, "container"], ["class", "logo", 4, "ngIf"], [1, "cake-boxes"], [1, "title"], [1, "cake-boxes-container"], ["class", "cake-box-item", 4, "ngFor", "ngForOf"], [1, "logo"], ["src", "assets/imgs/download plugin banner.png", "alt", ""], [1, "cake-box-item"], [1, "cake-box-info"], [3, "alt"], [1, "claim-button", 3, "click"], [1, "button", "primary"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WelcomeComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, WelcomeComponent_div_7_Template, 8, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hasInitialBoxes);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("New Cak3boxes (", ctx.count, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.cakeboxes);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], styles: [".container[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  height: 200px;\n}\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 368px;\n  height: 352px;\n  transform: translateY(-20%);\n}\n@media (max-width: 320px) {\n  .container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n.container[_ngcontent-%COMP%]   .cake-boxes[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   .cake-boxes[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 20px;\n  line-height: 24px;\n  color: var(--color-tooltip-text);\n}\n.container[_ngcontent-%COMP%]   .cake-boxes-container[_ngcontent-%COMP%]   .cake-box-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 56px;\n  border-bottom: 1px solid var(--border-list-color);\n}\n.container[_ngcontent-%COMP%]   .cake-boxes-container[_ngcontent-%COMP%]   .cake-box-item[_ngcontent-%COMP%]:first-child {\n  border-top: 1px solid var(--border-list-color);\n}\n.container[_ngcontent-%COMP%]   .cake-boxes-container[_ngcontent-%COMP%]   .cake-box-item[_ngcontent-%COMP%]   .cake-box-info[_ngcontent-%COMP%] {\n  height: 32px;\n  display: inherit;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .cake-boxes-container[_ngcontent-%COMP%]   .cake-box-item[_ngcontent-%COMP%]   .cake-box-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  width: 32px;\n  height: 32px;\n  object-fit: cover;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 32px;\n}\n.container[_ngcontent-%COMP%]   .cake-boxes-container[_ngcontent-%COMP%]   .cake-box-item[_ngcontent-%COMP%]   .cake-box-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-400\";\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--color-tooltip-text);\n}\n.container[_ngcontent-%COMP%]   .cake-boxes-container[_ngcontent-%COMP%]   .cake-box-item[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%] {\n  width: 104px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFDSjtBQUFJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQUVOO0FBQUk7RUFDRTtJQUNFLFlBQUE7RUFFTjtBQUNGO0FBR0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUdNO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQURSO0FBTU07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpREFBQTtBQUpSO0FBS1E7RUFDRSw4Q0FBQTtBQUhWO0FBTVE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUpWO0FBTVU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0FBSlo7QUFPVTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFMWjtBQVNRO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFQViIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCAxNnB4O1xuXG4gIC5sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAzNjhweDtcbiAgICAgIGhlaWdodDogMzUycHg7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCl7XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNha2UtYm94ZXMge1xuICAgIC50aXRsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95LTQwMCc7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10b29sdGlwLXRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYtY29udGFpbmVyIHtcbiAgICAgIC5jYWtlLWJveC1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlzdC1jb2xvcik7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlzdC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FrZS1ib3gtaW5mbyB7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktNDAwJztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRvb2x0aXAtdGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNsYWltLWJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDEwNHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-material.module */ 4029);
/* harmony import */ var _directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/tooltip.directive */ 2009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _directives_rewards_options_directive_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/rewards-options-directive.directive */ 2114);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-skeleton-loader */ 8495);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/drop-down/drop-down.component */ 4662);
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/input/input.component */ 9852);
/* harmony import */ var _components_congratulations_screen_congratulations_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/congratulations-screen/congratulations-screen.component */ 708);
/* harmony import */ var _components_download_plugin_download_plugin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/download-plugin/download-plugin.component */ 7507);
/* harmony import */ var _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tooltip/tooltip.component */ 8416);
/* harmony import */ var _components_reward_reward_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/reward/reward.component */ 1325);
/* harmony import */ var _components_kol_kol_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/kol/kol.component */ 8167);
/* harmony import */ var _components_rewards_options_rewards_options_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/rewards-options/rewards-options.component */ 8126);
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pagination/pagination.component */ 2774);
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/welcome/welcome.component */ 2762);
/* harmony import */ var _components_cakebox_cakebox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cakebox/cakebox.component */ 3755);
/* harmony import */ var _core_pipes_followers_count_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/pipes/followers-count.pipe */ 4376);
/* harmony import */ var _core_pipes_cakebox_transform_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/pipes/cakebox-transform.pipe */ 7603);
/* harmony import */ var _core_pipes_page_title_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/pipes/page-title.pipe */ 3951);
/* harmony import */ var _components_get_reward_get_reward_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/get-reward/get-reward.component */ 5504);

























const MODULES = [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _app_material_module__WEBPACK_IMPORTED_MODULE_0__.AppMaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_21__.NgxSkeletonLoaderModule];
const DIRECTIVES = [_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__.TooltipDirective, _directives_rewards_options_directive_directive__WEBPACK_IMPORTED_MODULE_2__.RewardsOptionsDirective];
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ imports: [MODULES, _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _app_material_module__WEBPACK_IMPORTED_MODULE_0__.AppMaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_21__.NgxSkeletonLoaderModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_3__.DropDownComponent, _components_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _components_congratulations_screen_congratulations_screen_component__WEBPACK_IMPORTED_MODULE_5__.CongratulationsScreenComponent, _components_download_plugin_download_plugin_component__WEBPACK_IMPORTED_MODULE_6__.DownloadPluginComponent, _directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__.TooltipDirective, _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_7__.TooltipComponent, _components_reward_reward_component__WEBPACK_IMPORTED_MODULE_8__.RewardComponent, _components_kol_kol_component__WEBPACK_IMPORTED_MODULE_9__.KolComponent, _directives_rewards_options_directive_directive__WEBPACK_IMPORTED_MODULE_2__.RewardsOptionsDirective, _components_rewards_options_rewards_options_component__WEBPACK_IMPORTED_MODULE_10__.RewardsOptionsComponent, _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__.PaginationComponent, _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__.WelcomeComponent, _components_cakebox_cakebox_component__WEBPACK_IMPORTED_MODULE_13__.CakeboxComponent, _core_pipes_followers_count_pipe__WEBPACK_IMPORTED_MODULE_14__.FollowersCountPipe, _core_pipes_cakebox_transform_pipe__WEBPACK_IMPORTED_MODULE_15__.CakeboxTransformPipe, _core_pipes_page_title_pipe__WEBPACK_IMPORTED_MODULE_16__.PageTitlePipe, _components_get_reward_get_reward_component__WEBPACK_IMPORTED_MODULE_17__.GetRewardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _app_material_module__WEBPACK_IMPORTED_MODULE_0__.AppMaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_21__.NgxSkeletonLoaderModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _app_material_module__WEBPACK_IMPORTED_MODULE_0__.AppMaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_21__.NgxSkeletonLoaderModule, _components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_3__.DropDownComponent, _components_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _components_congratulations_screen_congratulations_screen_component__WEBPACK_IMPORTED_MODULE_5__.CongratulationsScreenComponent, _components_download_plugin_download_plugin_component__WEBPACK_IMPORTED_MODULE_6__.DownloadPluginComponent, _directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__.TooltipDirective, _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_7__.TooltipComponent, _components_reward_reward_component__WEBPACK_IMPORTED_MODULE_8__.RewardComponent, _components_kol_kol_component__WEBPACK_IMPORTED_MODULE_9__.KolComponent, _directives_rewards_options_directive_directive__WEBPACK_IMPORTED_MODULE_2__.RewardsOptionsDirective, _components_rewards_options_rewards_options_component__WEBPACK_IMPORTED_MODULE_10__.RewardsOptionsComponent, _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__.PaginationComponent, _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__.WelcomeComponent, _components_cakebox_cakebox_component__WEBPACK_IMPORTED_MODULE_13__.CakeboxComponent, _core_pipes_followers_count_pipe__WEBPACK_IMPORTED_MODULE_14__.FollowersCountPipe, _core_pipes_cakebox_transform_pipe__WEBPACK_IMPORTED_MODULE_15__.CakeboxTransformPipe, _core_pipes_page_title_pipe__WEBPACK_IMPORTED_MODULE_16__.PageTitlePipe, _components_get_reward_get_reward_component__WEBPACK_IMPORTED_MODULE_17__.GetRewardComponent, _directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__.TooltipDirective, _directives_rewards_options_directive_directive__WEBPACK_IMPORTED_MODULE_2__.RewardsOptionsDirective] }); })();


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
    production: false,
    apiUrl: 'http://localhost:3333',
    plugin: true
};


/***/ }),

/***/ 9962:
/*!***********************************!*\
  !*** ./apps/frontend/src/main.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
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
/* harmony export */   "CategoryEnum": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.CategoryEnum),
/* harmony export */   "PlatformEnum": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.PlatformEnum),
/* harmony export */   "RarityEnum": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.RarityEnum),
/* harmony export */   "ResponseEnvelope": () => (/* reexport safe */ _lib_response_index__WEBPACK_IMPORTED_MODULE_2__.ResponseEnvelope),
/* harmony export */   "RewardEnum": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.RewardEnum),
/* harmony export */   "Role": () => (/* reexport safe */ _lib_model_index__WEBPACK_IMPORTED_MODULE_0__.Role),
/* harmony export */   "SortRewardEum": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.SortRewardEum),
/* harmony export */   "SortUserEum": () => (/* reexport safe */ _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__.SortUserEum),
/* harmony export */   "sortDirection": () => (/* reexport safe */ _lib_model_index__WEBPACK_IMPORTED_MODULE_0__.sortDirection)
/* harmony export */ });
/* harmony import */ var _lib_model_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/model/index */ 506);
/* harmony import */ var _lib_request_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/request/index */ 1729);
/* harmony import */ var _lib_response_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/response/index */ 5264);
/* harmony import */ var _lib_token_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/token/jwt */ 3881);
/* harmony import */ var _lib_constants_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/constants/index */ 8756);







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
/* harmony export */   "CategoryEnum": () => (/* reexport safe */ _category_enum__WEBPACK_IMPORTED_MODULE_2__.CategoryEnum),
/* harmony export */   "PlatformEnum": () => (/* reexport safe */ _platforms_enum__WEBPACK_IMPORTED_MODULE_1__.PlatformEnum),
/* harmony export */   "RarityEnum": () => (/* reexport safe */ _rarity_enum__WEBPACK_IMPORTED_MODULE_0__.RarityEnum),
/* harmony export */   "RewardEnum": () => (/* reexport safe */ _reward_enum__WEBPACK_IMPORTED_MODULE_3__.RewardEnum),
/* harmony export */   "SortRewardEum": () => (/* reexport safe */ _sorts_enum__WEBPACK_IMPORTED_MODULE_4__.SortRewardEum),
/* harmony export */   "SortUserEum": () => (/* reexport safe */ _sorts_enum__WEBPACK_IMPORTED_MODULE_4__.SortUserEum)
/* harmony export */ });
/* harmony import */ var _rarity_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rarity.enum */ 582);
/* harmony import */ var _platforms_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platforms.enum */ 2273);
/* harmony import */ var _category_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.enum */ 688);
/* harmony import */ var _reward_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reward.enum */ 6355);
/* harmony import */ var _sorts_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sorts.enum */ 7134);
/* harmony import */ var _window_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./window.type */ 5781);
/* harmony import */ var _metamaskEthereumProvider_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metamaskEthereumProvider.interface */ 2886);









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

/***/ 6355:
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
/* harmony import */ var typescript_openapi_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript-openapi-router */ 9118);

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

/***/ 8518:
/*!********************************!*\
  !*** ./libs/web3/src/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserWindowRef": () => (/* reexport safe */ _lib_provider_index__WEBPACK_IMPORTED_MODULE_2__.BrowserWindowRef),
/* harmony export */   "ContractService": () => (/* reexport safe */ _lib_service_index__WEBPACK_IMPORTED_MODULE_1__.ContractService),
/* harmony export */   "DetectMetaMask": () => (/* reexport safe */ _lib_provider_index__WEBPACK_IMPORTED_MODULE_2__.DetectMetaMask),
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
/* harmony import */ var _lib_provider_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/provider/index */ 5752);





/***/ }),

/***/ 6395:
/*!*******************************************************!*\
  !*** ./libs/web3/src/lib/provider/ether.provaider.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PROVIDER": () => (/* binding */ PROVIDER)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ 659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class PROVIDER extends ethers__WEBPACK_IMPORTED_MODULE_0__.BaseProvider {
    constructor() {
        super('goerli');
    }
}
PROVIDER.ɵfac = function PROVIDER_Factory(t) { return new (t || PROVIDER)(); };
PROVIDER.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PROVIDER, factory: PROVIDER.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5752:
/*!*********************************************!*\
  !*** ./libs/web3/src/lib/provider/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserWindowRef": () => (/* reexport safe */ _window_provaider__WEBPACK_IMPORTED_MODULE_0__.BrowserWindowRef),
/* harmony export */   "DetectMetaMask": () => (/* reexport safe */ _metamask_provaider__WEBPACK_IMPORTED_MODULE_2__.DetectMetaMask),
/* harmony export */   "PROVIDER": () => (/* reexport safe */ _ether_provaider__WEBPACK_IMPORTED_MODULE_1__.PROVIDER),
/* harmony export */   "WINDOW": () => (/* reexport safe */ _window_provaider__WEBPACK_IMPORTED_MODULE_0__.WINDOW),
/* harmony export */   "WINDOW_PROVIDERS": () => (/* reexport safe */ _window_provaider__WEBPACK_IMPORTED_MODULE_0__.WINDOW_PROVIDERS),
/* harmony export */   "WindowRef": () => (/* reexport safe */ _window_provaider__WEBPACK_IMPORTED_MODULE_0__.WindowRef),
/* harmony export */   "windowProvider": () => (/* reexport safe */ _window_provaider__WEBPACK_IMPORTED_MODULE_0__.windowProvider)
/* harmony export */ });
/* harmony import */ var _window_provaider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./window.provaider */ 33);
/* harmony import */ var _ether_provaider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ether.provaider */ 6395);
/* harmony import */ var _metamask_provaider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metamask.provaider */ 2244);





/***/ }),

/***/ 2244:
/*!**********************************************************!*\
  !*** ./libs/web3/src/lib/provider/metamask.provaider.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetectMetaMask": () => (/* binding */ DetectMetaMask)
/* harmony export */ });
/* harmony import */ var _Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @metamask/detect-provider */ 2890);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1__);


const DetectMetaMask = /*#__PURE__*/function () {
  var _ref = (0,_Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    const provider = yield _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1___default()();

    if (provider) {
      console.log('provider: ', provider);
      return true;
    } else {
      console.log('Please install MetaMask!');
      return false;
    }
  });

  return function DetectMetaMask() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 33:
/*!********************************************************!*\
  !*** ./libs/web3/src/lib/provider/window.provaider.ts ***!
  \********************************************************/
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


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

/***/ 8004:
/*!*******************************************************!*\
  !*** ./libs/web3/src/lib/service/contract.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractService": () => (/* binding */ ContractService)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ 8838);
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3.service */ 9355);
/* harmony import */ var _web3_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../web3.module */ 8035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





const abi = [
    'constructor()',
    'event Deposit(address indexed,uint256)',
    'event OwnershipTransferred(address indexed,address indexed)',
    'function accountBalances(address,string) view returns (uint256)',
    'function contractAddress() view returns (address)',
    'function depositTokens(uint256,string) payable',
    'function getWhitelistedTokenAddresses(string) view returns (address)',
    'function owner() view returns (address)',
    'function renounceOwnership()',
    'function transferOwnership(address)',
    'function whitelistToken(string,address)',
    'function whitelistedTokens(string) view returns (address)',
    'function withdrawTokens(uint256,string)',
];
class ContractService extends ethers__WEBPACK_IMPORTED_MODULE_2__.Contract {
    constructor(web3Service) {
        super('0xf270f6FD845D8f88fC588BbDd6547E10Df579577', abi, web3Service);
        this.web3Service = web3Service;
    }
}
ContractService.ɵfac = function ContractService_Factory(t) { return new (t || ContractService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_web3_service__WEBPACK_IMPORTED_MODULE_0__.Web3Service)); };
ContractService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ContractService, factory: ContractService.ɵfac, providedIn: _web3_module__WEBPACK_IMPORTED_MODULE_1__.Web3Module });


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
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contract.service */ 8004);




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
/* harmony import */ var _Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../provider */ 5752);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ 3481);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ 1204);
/* harmony import */ var _web3_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web3.module */ 8035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);






class Web3Service extends ethers__WEBPACK_IMPORTED_MODULE_3__.Signer {
  constructor(window, provider) {
    console.log(window);
    super();
    this.window = window;
    this.provider = provider;
  }

  connectToMetaMask() {
    const ethereum = this.window.ethereum;

    if (typeof ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    }

    if (ethereum) {
      try {
        // Request account access
        ethereum.request({
          method: 'eth_requestAccounts'
        }).then(address => {
          console.log('Account connected: ', address[0]); // Account address that you had imported
        });
      } catch (error) {
        // User denied account access...
        console.error('User denied account access');
      }
    }
  }

  signTransaction(_transaction) {
    console.log('_transaction: ', _transaction);
    throw new Error('Method not implemented.');
  }

  connect(_provider) {
    console.log('_provider: ', _provider);
    throw new Error('Method not implemented.');
  }

  login(password) {
    var _this = this;

    return (0,_Users_pro_project_cake_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const wallet = yield ethers__WEBPACK_IMPORTED_MODULE_4__.Wallet.fromEncryptedJson(localStorage['get']('wallet'), password);
      _this.wallet = wallet.connect(_this.provider);
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

}

Web3Service.ɵfac = function Web3Service_Factory(t) {
  return new (t || Web3Service)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_provider__WEBPACK_IMPORTED_MODULE_1__.WINDOW), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_provider__WEBPACK_IMPORTED_MODULE_1__.PROVIDER));
};

Web3Service.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: Web3Service,
  factory: Web3Service.ɵfac,
  providedIn: _web3_module__WEBPACK_IMPORTED_MODULE_2__.Web3Module
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider */ 5752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




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

/***/ 8677:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2808:
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