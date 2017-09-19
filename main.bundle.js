webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__oasp_oasp_component__ = __webpack_require__("../../../../../src/app/oasp/oasp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__oasp4_j_oasp4_j_component__ = __webpack_require__("../../../../../src/app/oasp4-j/oasp4-j.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__oasp4_js_oasp4_js_component__ = __webpack_require__("../../../../../src/app/oasp4-js/oasp4-js.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__oasp4_net_oasp4_net_component__ = __webpack_require__("../../../../../src/app/oasp4-net/oasp4-net.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__more_more_component__ = __webpack_require__("../../../../../src/app/more/more.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tab_panel_tab_panel_component__ = __webpack_require__("../../../../../src/app/tab-panel/tab-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__used_technologies_used_technologies_component__ = __webpack_require__("../../../../../src/app/used-technologies/used-technologies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__collaboration_contribution_collaboration_contribution_component__ = __webpack_require__("../../../../../src/app/collaboration-contribution/collaboration-contribution.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__try_it_try_it_component__ = __webpack_require__("../../../../../src/app/try-it/try-it.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__getting_started_getting_started_component__ = __webpack_require__("../../../../../src/app/getting-started/getting-started.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__framework_framework_component__ = __webpack_require__("../../../../../src/app/framework/framework.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__devonfw_devonfw_component__ = __webpack_require__("../../../../../src/app/devonfw/devonfw.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__university_activities_university_activities_component__ = __webpack_require__("../../../../../src/app/university-activities/university-activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__slider_slider_component__ = __webpack_require__("../../../../../src/app/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_markdown__ = __webpack_require__("../../../../angular2-markdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ngb_modal_ngb_modal_component__ = __webpack_require__("../../../../../src/app/ngb-modal/ngb-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ngb_modal_collaboration_ngb_modal_collaboration_component__ = __webpack_require__("../../../../../src/app/ngb-modal-collaboration/ngb-modal-collaboration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__oasp4_fn_oasp4_fn_component__ = __webpack_require__("../../../../../src/app/oasp4-fn/oasp4-fn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__terms_of_use_terms_of_use_component__ = __webpack_require__("../../../../../src/app/terms-of-use/terms-of-use.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var routes = [
    { path: '', redirectTo: 'oasp', pathMatch: 'full' },
    { path: 'oasp', component: __WEBPACK_IMPORTED_MODULE_8__oasp_oasp_component__["a" /* OASPComponent */] },
    { path: 'oasp4-j', component: __WEBPACK_IMPORTED_MODULE_9__oasp4_j_oasp4_j_component__["a" /* OASP4JComponent */] },
    { path: 'oasp4-js', component: __WEBPACK_IMPORTED_MODULE_10__oasp4_js_oasp4_js_component__["a" /* OASP4JSComponent */] },
    { path: 'oasp4-net', component: __WEBPACK_IMPORTED_MODULE_11__oasp4_net_oasp4_net_component__["a" /* OASP4NETComponent */] },
    { path: 'More', component: __WEBPACK_IMPORTED_MODULE_12__more_more_component__["a" /* MoreComponent */] },
    { path: 'TermsOfUse', component: __WEBPACK_IMPORTED_MODULE_27__terms_of_use_terms_of_use_component__["a" /* TermsOfUseComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__oasp_oasp_component__["a" /* OASPComponent */],
            __WEBPACK_IMPORTED_MODULE_9__oasp4_j_oasp4_j_component__["a" /* OASP4JComponent */],
            __WEBPACK_IMPORTED_MODULE_10__oasp4_js_oasp4_js_component__["a" /* OASP4JSComponent */],
            __WEBPACK_IMPORTED_MODULE_11__oasp4_net_oasp4_net_component__["a" /* OASP4NETComponent */],
            __WEBPACK_IMPORTED_MODULE_12__more_more_component__["a" /* MoreComponent */],
            __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__tab_panel_tab_panel_component__["a" /* TabPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_15__used_technologies_used_technologies_component__["a" /* UsedTechnologiesComponent */],
            __WEBPACK_IMPORTED_MODULE_16__collaboration_contribution_collaboration_contribution_component__["a" /* CollaborationContributionComponent */],
            __WEBPACK_IMPORTED_MODULE_17__try_it_try_it_component__["a" /* TryItComponent */],
            __WEBPACK_IMPORTED_MODULE_18__getting_started_getting_started_component__["a" /* GettingStartedComponent */],
            __WEBPACK_IMPORTED_MODULE_19__framework_framework_component__["a" /* FrameworkComponent */],
            __WEBPACK_IMPORTED_MODULE_20__devonfw_devonfw_component__["a" /* DevonfwComponent */],
            __WEBPACK_IMPORTED_MODULE_21__university_activities_university_activities_component__["a" /* UniversityActivitiesComponent */],
            __WEBPACK_IMPORTED_MODULE_22__slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_24__ngb_modal_ngb_modal_component__["a" /* NgbModalComponent */],
            __WEBPACK_IMPORTED_MODULE_25__ngb_modal_collaboration_ngb_modal_collaboration_component__["a" /* NgbModalCollaborationComponent */],
            __WEBPACK_IMPORTED_MODULE_26__oasp4_fn_oasp4_fn_component__["a" /* Oasp4FnComponent */],
            __WEBPACK_IMPORTED_MODULE_27__terms_of_use_terms_of_use_component__["a" /* TermsOfUseComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_23_angular2_markdown__["a" /* MarkdownModule */].forRoot(),
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/collaboration-contribution/collaboration-contribution.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "     @font-face {\r\n       font-family: Montserrat-Regular;\r\n       src: url(" + __webpack_require__("../../../../../src/assets/fonts/Montserrat-Regular.ttf") + ")\r\n     }\r\n\r\n     @font-face {\r\n       font-family: Montserrat-Bold;\r\n       src: url(" + __webpack_require__("../../../../../src/assets/fonts/Montserrat-Bold.ttf") + ")\r\n     }\r\n\r\n     .Collaboration {\r\n       background: url(" + __webpack_require__("../../../../../src/assets/images/github.png") + ") center center no-repeat;\r\n       background-size: contain;\r\n       background-color: #ffffff;\r\n       background-position-y: 180px;\r\n       box-shadow: inset 0px 7px 20px 0px #e2e2e2;\r\n       padding-bottom: 4em;\r\n       padding-top: 80px;\r\n     }\r\n\r\n     .btn-primary {\r\n       color: #4bbdec;\r\n       font-size: 12pt;\r\n       font-family: Montserrat-regular;\r\n       font-weight: 500;\r\n       background-color: transparent;\r\n       border-color: #4bbdec;\r\n       border-top-color: #4bbdec;\r\n       border-right-color: #4bbdec;\r\n       border-bottom-color: #4bbdec;\r\n       border-left-color: #4bbdec;\r\n       border-radius: 72px;\r\n       margin-bottom: 100%;\r\n       padding-left: 40px;\r\n       padding-right: 40px;\r\n       padding-top: 14px;\r\n       padding-bottom: 14px;\r\n       border-radius: 72px;\r\n       font-size: 12pt;\r\n       font-size: 12pt;\r\n       border-width: 2px;\r\n       font-family: Montserrat-Regular;\r\n     }\r\n\r\n     h2 {\r\n       margin-top: 25%;\r\n       color: #585657;\r\n       font-family: Montserrat-Medium;\r\n       font-size: 23pt;\r\n     }\r\n\r\n     hr {\r\n       width: 15%;\r\n       background-color: #4bbdec;\r\n       height: 3px;\r\n     }\r\n\r\n     p {\r\n       color: #9d9d9d;\r\n       font-family: Montserrat-Regular;\r\n       font-size: 12pt;\r\n       font-style: italic;\r\n       padding: 20px 0px;\r\n     }\r\n\r\n     @media only screen and (max-width: 1199px) and (min-width: 992px) {\r\n       .Collaboration {\r\n         background-position-y: 340px;\r\n       }\r\n     }\r\n\r\n     @media only screen and (max-width: 1023px) and (min-width: 768px) {\r\n       .Collaboration {\r\n         background-position-y: 423px;\r\n       }\r\n     }\r\n\r\n     @media (max-width: 767px) {\r\n       .Collaboration {\r\n         background-position-y: 480px;\r\n       }\r\n     }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/collaboration-contribution/collaboration-contribution.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid Collaboration\">\r\n  <div class=\"container text-center\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 col-sm-3\"></div>\r\n      <div class=\"col-md-6 col-sm-6 col-12\">\r\n        <div class=\"markdown markdown-center\">\r\n          <markdown [path]=\"'../../assets/content/OASP/collaboration-contribution.md'\"></markdown>\r\n        </div>\r\n        <app-ngb-modal-collaboration></app-ngb-modal-collaboration>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/collaboration-contribution/collaboration-contribution.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollaborationContributionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollaborationContributionComponent = (function () {
    function CollaborationContributionComponent() {
    }
    CollaborationContributionComponent.prototype.ngOnInit = function () {
    };
    return CollaborationContributionComponent;
}());
CollaborationContributionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-collaboration-contribution',
        template: __webpack_require__("../../../../../src/app/collaboration-contribution/collaboration-contribution.component.html"),
        styles: [__webpack_require__("../../../../../src/app/collaboration-contribution/collaboration-contribution.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CollaborationContributionComponent);

//# sourceMappingURL=collaboration-contribution.component.js.map

/***/ }),

/***/ "../../../../../src/app/devonfw/devonfw.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".devonfw {\r\n  background: url(" + __webpack_require__("../../../../../src/assets/images/logo.png") + ") center center no-repeat;\r\n  background-color: #4bbdec;\r\n  background-size: contain;\r\n  background-position-x: -140px;\r\n  text-align: right!important;\r\n}\r\n\r\n.devonfw h1 {\r\n  margin-top: 40%;\r\n}\r\n\r\n\r\n/**Markdown Styles**/\r\n\r\n.devonfw .markdown h1 {\r\n  color: #ffffff;\r\n  font-family: montserrat-regular;\r\n  font-weight: 500\r\n}\r\n\r\n.devonfw .markdown p {\r\n  color: #ffffff!important;\r\n  font-style: normal;\r\n  font-family: montserrat-light;\r\n}\r\n\r\n.devonfw .markdown h1::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  right: 15px;\r\n  margin: 10px 0px;\r\n  width: 15%;\r\n  background-color: #ffffff;\r\n  height: 4px;\r\n}\r\n\r\n.devonfw .markdown a {\r\n  border-color: #FFFFFF;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.devonfw .markdown a:hover {\r\n  border-color: #FFFFFF;\r\n  color: #4bbdec;\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n\r\n/**Media query*/\r\n\r\n@media only screen and (max-width: 1023px) and (min-width: 768px) {\r\n  .devonfw {\r\n    background-position-x: -250px;\r\n  }\r\n  .devonfw .markdown p {\r\n    text-align: right\r\n  }\r\n  .devonfw .markdown h1 {\r\n    text-align: right;\r\n  }\r\n    .devonfw .markdown a {\r\n      text-align: center;\r\n    }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .devonfw {\r\n    text-align: center!important;\r\n  }\r\n  .devonfw h1 {\r\n    margin-top: 10%;\r\n  }\r\n  .devonfw .markdown h1::after {\r\n    width: 15%;\r\n    margin-right: 35%;\r\n    margin-left: 43%;\r\n    position: relative;\r\n    right: 0px;\r\n  }\r\n  .devonfw {\r\n    background-image: none;\r\n  }\r\n  .devonfw img {\r\n    width: 100px;\r\n    padding-top: 40px;\r\n    text-align: center;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/devonfw/devonfw.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid devonfw\">\r\n  <div class=\"container\">\r\n    <div class=\"col-10 offset-1 d-md-none d-block\">\r\n      <img src=\"../../assets/images/devon_logo.png\" class=\"icon\">\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-sm-6\"></div>\r\n      <div class=\"col-md-5 col-sm-5 col-10 offset-1 text-xs-center\" style=\"margin-bottom:15%\">\r\n        <div class=\"markdown\">\r\n          <markdown [path]=\"'../../assets/content/OASP/devonfw.md'\"></markdown>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/devonfw/devonfw.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevonfwComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DevonfwComponent = (function () {
    function DevonfwComponent() {
    }
    DevonfwComponent.prototype.ngOnInit = function () {
    };
    return DevonfwComponent;
}());
DevonfwComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-devonfw',
        template: __webpack_require__("../../../../../src/app/devonfw/devonfw.component.html"),
        styles: [__webpack_require__("../../../../../src/app/devonfw/devonfw.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DevonfwComponent);

//# sourceMappingURL=devonfw.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " @font-face{\r\n     font-family: Montserrat-Regular;\r\n     src: url(" + __webpack_require__("../../../../../src/assets/fonts/Montserrat-Regular.ttf") + ")\r\n }\r\n@font-face{\r\n     font-family: Montserrat-Bold;\r\n     src: url(" + __webpack_require__("../../../../../src/assets/fonts/Montserrat-Bold.ttf") + ")\r\n }\r\n#footer{\r\n   background: url(" + __webpack_require__("../../../../../src/assets/images/capgemini.png") + ") center;\r\n    background-color: #2e2e2e;\r\n    background-size: 100%;\r\n    background-position-y: 250px;\r\n    background-repeat: no-repeat;\r\n    z-index: 1;\r\n}\r\nimg{\r\nwidth: 50px;\r\nheight: 50px;\r\nmargin-left: 10px;\r\nmargin-top:40px;\r\n}\r\nb{\r\ncolor: white;\r\nmargin-top:30px;\r\n}\r\np.destacado{\r\ncolor: white;\r\nfont-size:12px;\r\n}\r\np.titulo{\r\ncolor:white;\r\nfont-family: Montserrat-Regular;\r\nfont-size: 16pt;\r\n}\r\np{\r\ncolor: white;\r\nmargin-top: 20px;\r\nfont-family: Montserrat-Regular;\r\nfont-size: 10pt;\r\n}\r\na{\r\ncolor: white;\r\n}\r\n\r\nimg.icon{\r\nwidth:30px ;\r\nheight:30px;\r\nmargin-bottom: 50px;\r\n}\r\nimg.icon:hover{\r\nwidth:30px ;\r\nheight:30px;\r\nmargin-bottom: 50px;\r\ncursor: pointer;\r\n}\r\nimg.cap{\r\nwidth:150px ;\r\nheight:30px;\r\nmargin-left: 0px;\r\n}\r\nspan{\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n  }\r\n\r\n@media (max-width: 767px) {\r\n\r\n  .text-xs-center {\r\n    text-align: center;\r\n  } \r\n  .text-xs-center .cap{\r\n    margin-top:auto;\r\n    margin-bottom:10%\r\n  }\r\n}\r\n@media only screen and (max-width: 992px) and (min-width: 768px)  {\r\n  .text-xs-center {\r\n    text-align: center;\r\n  } \r\n  .text-xs-center .cap{\r\n    margin-top:auto;\r\n    margin-bottom:10%\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\" class=\"container-fluid\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-xs-center\">      \r\n  \r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-sm-6  hidden-md-down\">\r\n        <p class=\"titulo\">         \r\n            <b>Important Links</b>          \r\n        </p>\r\n        <p> \r\n            <span>\r\n                <a target=\"_\" href=\"https://oasp.github.io/oasp\">OASP</a>  \r\n            </span> |\r\n            <span> \r\n              <a target=\"_\" href=\"https://oasp.github.io/oasp4-j\">OASP4J</a>\r\n            </span> |\r\n            <span>\r\n                <a target=\"_\" href=\"https://oasp.github.io/oasp4-js\">OASP4JS</a>\r\n            </span> |\r\n            <span>\r\n                <a target=\"_\" href=\"https://troom.capgemini.com/sites/vcc/devon/index.aspx\">devonfw</a>\r\n            </span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-5 col-md-12 col-sm-5 col-12 text-xs-center\">     \r\n        <p>© Capgemini 2017 <span style=\"margin-left: 17mm\"><a target=\"_\" href=\"TermsOfUse\">Terms of Use</a></span></p>\r\n        <p class=\"destacado\">This page is mantained by \r\n          Capgemini Germany APPS Evolve and Capgemini Spain</p>         \r\n      </div>\r\n      <!--iconos-->\r\n      <div class=\"col-lg-4 col-md-12 col-sm-4 col-12 text-xs-center \">\r\n        <img src=\"../../assets/images/slideshare.png\" class=\"icon\">\r\n        <img src=\"../../assets/images/facebook.png\" class=\"icon\">\r\n        <img src=\"../../assets/images/twitter.png\" class=\"icon\">\r\n        <img src=\"../../assets/images/linkedin.png\" class=\"icon\">\r\n        <img src=\"../../assets/images/youtube.png\" class=\"icon\">\r\n      </div>\r\n      <div class=\"col-lg-2 col-md-12 col-sm-2 col-12 text-xs-center\"> \r\n        <a href=\"https://www.es.capgemini.com/\"><img src=\"../../assets/images/logo_capgemini_white.png\" class=\"cap\"></a>\r\n      </div>    \r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/framework/framework.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".framework {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/corte_2.png") + ");\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position-x: -200px;\r\n  background-position-y: 200px;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.framework img {\r\n  width: auto;\r\n  max-height: 60px;\r\n  margin-top: 170px;\r\n}\r\n\r\n.framework p {\r\n  font-size: 14pt;\r\n  color: #9d9d9d;\r\n  font-family: montserrat-Regular;\r\n  font-weight: 100;\r\n  line-height: 18pt;\r\n}\r\n\r\n.framework p.java {\r\n  color: #222c38;\r\n  text-align: center;\r\n}\r\n\r\n.framework p.javaScript {\r\n  color: #222c38;\r\n}\r\n\r\n.framework p.net {\r\n  color: #222c38;\r\n  text-align: center;\r\n}\r\n\r\n\r\n/**     Markdown styles*/\r\n\r\n.framework .markdown p {\r\n  color: #9d9d9d;\r\n  font-family: Montserrat-Regular;\r\n  padding: 20px 0px;\r\n  font-size: 14pt;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 18pt;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.framework .markdown h1 {\r\n  margin-top: 150px;\r\n  color: #222c38;\r\n  font-family: montserrat-Regular;\r\n  line-height: 28pt;\r\n  font-weight: 500;\r\n  padding-bottom: 10px;\r\n  text-align: left;\r\n}\r\n\r\n.framework .markdown h1::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 15px;\r\n  margin: 20px 0px;\r\n  width: 15%;\r\n  background-color: #4bbdec;\r\n  height: 4px;\r\n}\r\n\r\n\r\n/**Media syles*/\r\n\r\n@media only screen and (max-width: 1023px) and (min-width: 768px) {\r\n  .framework .markdown h1 {\r\n    text-align: center;\r\n  }\r\n  .framework .markdown h1::after {\r\n    width: 2em;\r\n    left: 8em;\r\n  }\r\n  .framework {\r\n    background-image: none;\r\n  }\r\n  .framework img {\r\n    margin-top: 100px;\r\n  }\r\n  .framework .markdown p {\r\n    padding: 30px 0px;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .text-xs-center {\r\n    text-align: center;\r\n  }\r\n  .framework .markdown h1 {\r\n    text-align: center;\r\n  }\r\n  .framework .markdown h1::after {\r\n    width: 15%;\r\n    margin-right: 35%;\r\n    margin-left: 40%;\r\n  }\r\n  .btn-primary {\r\n    margin-bottom: 40px;\r\n  }\r\n  .mg-top10 {\r\n    margin-top: 10px;\r\n  }\r\n  .framework {\r\n    background-image: none;\r\n  }\r\n  p {\r\n    padding: 10px 0px;\r\n  }\r\n  .framework img {\r\n    margin-top: 70px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/framework/framework.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid framework\" id=\"fw\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\" col-lg-6 col-md-12 col-sm-12 col-12 text-xs-center\">\r\n        <div class=\"markdown\">\r\n          <markdown [path]=\"'../../assets/content/OASP/framework.md'\"></markdown>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-2 col-md-4 col-sm-4\" style=\"text-align:center\">\r\n        <img class=\"mg-top10\" src=\"../../assets/images/javascript_icon.png\">\r\n        <br>\r\n        <br>\r\n        <p class=\"javaScript\"><b>JavaScript</b></p>\r\n        <div name=\"radioBasic\">\r\n          <a class=\"btn btn-primary\" [routerLink]=\"['/oasp4-js']\">\r\n            More info\r\n            </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-2 col-md-4 col-sm-4\" style=\"text-align:center\">\r\n        <img cl src=\"../../assets/images/java_icon.png\">\r\n        <br>\r\n        <br>\r\n        <p class=\"java\"><b>Java</b></p>\r\n        <div name=\"radioBasic\">\r\n          <a class=\"btn btn-primary\" [routerLink]=\"['/oasp4-j']\">\r\n            More info\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-2 col-md-4 col-sm-4\" style=\"text-align:center\">\r\n        <img cl src=\"../../assets/images/net_icon.png\">\r\n        <br>\r\n        <br>\r\n        <p class=\"net\"><b>.NET</b></p>\r\n        <div name=\"radioBasic\">\r\n          <a class=\"btn btn-primary\" style=\"max-width: 159px; padding-left:23px;\" href=\"#\">\r\n              ..coming soon \r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/framework/framework.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrameworkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FrameworkComponent = (function () {
    function FrameworkComponent() {
    }
    FrameworkComponent.prototype.ngOnInit = function () {
    };
    return FrameworkComponent;
}());
FrameworkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-framework',
        template: __webpack_require__("../../../../../src/app/framework/framework.component.html"),
        styles: [__webpack_require__("../../../../../src/app/framework/framework.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FrameworkComponent);

//# sourceMappingURL=framework.component.js.map

/***/ }),

/***/ "../../../../../src/app/getting-started/getting-started.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gettingstarted {\r\n  background: url(" + __webpack_require__("../../../../../src/assets/images/getting_started.png") + ") center center no-repeat;\r\n  background-size: 40%;\r\n  background-position-x: 90px;\r\n  background-position-y: 180px;\r\n  box-shadow: 0 0 30px rgba(68, 68, 68, 0.3);\r\n}\r\n\r\n.started {\r\n  padding: 0px 60px 0px 60px !important;\r\n}\r\n\r\n.gettingstarted h1 {\r\n  margin-top: 50%;\r\n}\r\n\r\n.timeline {\r\n  background-color: white;\r\n  box-shadow: inset 0px 0px 100px #e2e2e2;\r\n}\r\n\r\n.gettingstarted .markdown p {\r\n  text-align: right;\r\n  color: #9d9d9d;\r\n  font-family: Montserrat-Regular;\r\n  font-style: normal;\r\n}\r\n\r\n.gettingstarted .markdown h1::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: relative;\r\n  margin: 10px 0px 0px 403px;\r\n  width: 15%;\r\n  background-color: #4bbdec;\r\n  height: 4px;\r\n  float: right;\r\n}\r\n\r\n.gettingstarted .markdown h1 {\r\n  font-family: Montserrat-Medium;\r\n  font-size: 25pt;\r\n  text-align: right;\r\n  color: #222c38\r\n}\r\n\r\n.gettingstarted img {\r\n  width: 50px;\r\n  padding-left: 0px;\r\n  margin-left: 30px;\r\n}\r\n\r\n.timeline img {\r\n  width: 50px;\r\n  padding: 0px;\r\n  margin-left: 30px;\r\n}\r\n\r\n.media-body p {\r\n  padding-top: 3%;\r\n  text-align: left;\r\n}\r\n\r\n.timeline-centered {\r\n  margin-bottom: 0px;\r\n  right: 200px;\r\n}\r\n\r\n.timeline-centered:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline-centered:before,\r\n.timeline-centered:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline-centered:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline-centered:before {\r\n  content: '';\r\n  position: absolute;\r\n  display: block;\r\n  width: 2px;\r\n  background: #58ACFA;\r\n  left: 25%;\r\n  top: 0px;\r\n  bottom: 0px;\r\n  margin-left: 4px;\r\n}\r\n\r\n.timeline-centered .timeline-entry {\r\n  position: relative;\r\n  width: 75%;\r\n  float: right;\r\n  clear: both;\r\n  padding: 50px 0px;\r\n}\r\n\r\n.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner {\r\n  margin-left: 0;\r\n  margin-right: -18px;\r\n}\r\n\r\n.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-icon {\r\n  float: right;\r\n  font-weight: bold;\r\n}\r\n\r\n.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-label {\r\n  margin-left: 0;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner {\r\n  position: relative;\r\n  margin-left: -22px;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {\r\n  background: #fff;\r\n  color: #58ACFA;\r\n  display: block;\r\n  width: 40px;\r\n  height: 40px;\r\n  background-clip: padding-box;\r\n  border-radius: 20px;\r\n  text-align: center;\r\n  box-shadow: 0 0 0 2px #58ACFA;\r\n  line-height: 40px;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  float: left;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2,\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p {\r\n  color: #585657;\r\n  font-family: Montserrat-Regular;\r\n  font-size: 12px;\r\n  margin: 0;\r\n  line-height: 1.428571429;\r\n}\r\n\r\n@media only screen and (max-width: 1199px) and (min-width: 992px) {\r\n  .gettingstarted .markdown a {\r\n    display: inline !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .gettingstarted {\r\n    background-position-x: 195px;\r\n    background-position-y: 112px;\r\n  }\r\n  .gettingstarted .markdown p {\r\n    text-align: center;\r\n    padding: 0px 0px 20px 0px;\r\n  }\r\n  .gettingstarted .markdown h1::after {\r\n    width: 2em;\r\n    margin-left: 8.5em;\r\n    float: none;\r\n  }\r\n  .gettingstarted .markdown h1 {\r\n    text-align: center;\r\n    padding: 0px 0 20px 0px;\r\n  }\r\n  .gettingstarted h1 {\r\n    margin-top: 20%;\r\n  }\r\n  .gettingstarted .markdown a {\r\n    margin-bottom: 20%;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .gettingstarted {\r\n    background-size: 75%;\r\n    background-position-y: 128px;\r\n    background-position-x: 53px;\r\n    padding-top: 7em;\r\n  }\r\n  .gettingstarted .markdown p {\r\n    text-align: center;\r\n    padding: 0px 0px 20px 0px;\r\n  }\r\n  .gettingstarted .markdown h1::after {\r\n    width: 15%;\r\n    margin-right: 35%;\r\n    margin-left: 43%;\r\n    float: none;\r\n  }\r\n  .gettingstarted .markdown h1 {\r\n    text-align: center;\r\n    padding: 0px 0 20px 0px;\r\n    margin-top: 0px;\r\n  }\r\n  .gettingstarted .markdown a {\r\n    text-align: center;\r\n    margin-right: 0px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/getting-started/getting-started.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid gettingstarted\" id=\"gettingstarted\">\r\n  <div class=\"row\">\r\n    <div class=\"started col-lg-6 col-md-12 col-sm-4 col-12 text-xs-center\">\r\n      <div class=\"markdown markdown-center\">\r\n        <markdown [path]=\"'../../assets/content/OASP/getiing-started.md'\"></markdown>\r\n      </div>\r\n    </div>\r\n    <!--Timeline-->\r\n    <div class=\"timeline col-lg-6 col-md-12 col-sm-6\">\r\n      <div class=\" timeline-centered\">\r\n        <article class=\"timeline-entry\">\r\n          <div class=\"timeline-entry-inner\">\r\n            <div class=\"timeline-icon\">\r\n              <i class=\"entypo-feather\"></i> 1\r\n            </div>\r\n            <div class=\"timeline-label\">\r\n              <div class=\"media\">\r\n                <div class=\"media-left\">\r\n                  <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/read_icon.png\">\r\n                </div>\r\n                <div class=\"media-body\">\r\n                  <p>Read the platform GUIDE</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </article>\r\n        <article class=\"timeline-entry\">\r\n          <div class=\"timeline-entry-inner\">\r\n            <div class=\"timeline-icon\">\r\n              <i class=\"entypo-feather\"></i> 2\r\n            </div>\r\n            <div class=\"timeline-label\">\r\n              <div class=\"media \">\r\n                <div class=\"media-left\">\r\n                  <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/view_icon.png\">\r\n                </div>\r\n                <div class=\"media-body\">\r\n                  <p>View the demo tutorial</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </article>\r\n        <article class=\"timeline-entry\">\r\n          <div class=\"timeline-entry-inner \">\r\n            <div class=\"timeline-icon\">\r\n              <i class=\"entypo-feather\"></i> 3\r\n            </div>\r\n            <div class=\"timeline-label\">\r\n              <div class=\"media \">\r\n                <div class=\"media-left\">\r\n                  <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/enviroment_icon.png \">\r\n                </div>\r\n                <div class=\"media-body\">\r\n                  <p>Setup the develop enviroment</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </article>\r\n        <article class=\"timeline-entry\">\r\n          <div class=\"timeline-entry-inner\">\r\n            <div class=\"timeline-icon\">\r\n              <i class=\"entypo-feather \"></i> 4\r\n            </div>\r\n            <div class=\"timeline-label\">\r\n              <div class=\"media \">\r\n                <div class=\"media-left\">\r\n                  <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/code_icon.png\">\r\n                </div>\r\n                <div class=\"media-body\">\r\n                  <p>Get the code</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </article>\r\n        <article class=\"timeline-entry\">\r\n          <div class=\"timeline-entry-inner\">\r\n            <div class=\"timeline-icon\">\r\n              <i class=\"entypo-feather \"></i> 5\r\n            </div>\r\n            <div class=\"timeline-label\">\r\n              <div class=\"media \">\r\n                <div class=\"media-left\">\r\n                  <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/help_icon.png\">\r\n                </div>\r\n                <div class=\"media-body\">\r\n                  <p>Help making OASP even better</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </article>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/getting-started/getting-started.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GettingStartedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GettingStartedComponent = (function () {
    function GettingStartedComponent() {
    }
    GettingStartedComponent.prototype.ngOnInit = function () {
    };
    return GettingStartedComponent;
}());
GettingStartedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-getting-started',
        template: __webpack_require__("../../../../../src/app/getting-started/getting-started.component.html"),
        styles: [__webpack_require__("../../../../../src/app/getting-started/getting-started.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GettingStartedComponent);

//# sourceMappingURL=getting-started.component.js.map

/***/ }),

/***/ "../../../../../src/app/more/more.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/more/more.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  more works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/more/more.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MoreComponent = (function () {
    function MoreComponent() {
    }
    MoreComponent.prototype.ngOnInit = function () {
    };
    return MoreComponent;
}());
MoreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-more',
        template: __webpack_require__("../../../../../src/app/more/more.component.html"),
        styles: [__webpack_require__("../../../../../src/app/more/more.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MoreComponent);

//# sourceMappingURL=more.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n  font-family: Montserrat-Medium;\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Montserrat-Medium.ttf") + ")\r\n}\r\n\r\n.navbar {\r\n  background-color: transparent;\r\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10);\r\n}\r\n\r\n.navbar .active {\r\n  /*background: #FFFFFF;\r\n  border-radius: 4px;\r\n  transition: all 300ms;*/\r\n  border-bottom: 6px solid #ffffff;\r\n}\r\n\r\n.navbar .active .nav-link {\r\n  color: #ffffff !important;\r\n}\r\n\r\n.navbar .active .nav-link:hover {\r\n  text-shadow: none !important;\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link {\r\n  color: #FFFFFF;\r\n  font-family: Montserrat-Regular;\r\n  margin: 13px;\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link:hover {\r\n  /*text-shadow: 1px 1px 1px #207090;*/\r\n  color: rgba(255, 255, 255, .5);\r\n  transition: all .2s ease-in-out;\r\n}\r\n\r\nimg {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  .collapse.navbar-collapse.show {\r\n    margin-top: 12px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-toggleable-md navbar-light bg-faded\">\r\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/oasp']\"><img src=\"../../assets/images/OASP.png\"></a>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isCollapsed\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" (click)=\"isCollapsed = !isCollapsed\" [routerLink]=\"['/oasp']\">\r\n          OASP\r\n          </a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" (click)=\"isCollapsed = !isCollapsed\" [routerLink]=\"['/oasp4-j']\">\r\n          OASP4J\r\n          </a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" (click)=\"isCollapsed = !isCollapsed\" [routerLink]=\"['/oasp4-js']\">\r\n          OASP4JS\r\n          </a>\r\n      </li>\r\n      <!--<li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\"\r\n          (click)=\"isCollapsed = !isCollapsed\"\r\n          [routerLink]=\"['/oasp4net']\">\r\n          OASP4NET\r\n          </a>\r\n      </li>\r\n       <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\"\r\n          (click)=\"isCollapsed = !isCollapsed\"\r\n          [routerLink]=\"['/more']\">\r\n          More\r\n          </a>\r\n      </li>-->\r\n\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = (function () {
    function NavBarComponent(router) {
        var _this = this;
        this.router = router;
        this.isCollapsed = true;
        this.router.events.subscribe(function (val) {
            _this.current = val.url;
        });
    }
    NavBarComponent.prototype.ngOnInit = function () { };
    NavBarComponent.prototype.isCurrentPath = function (path) {
        if (this.current === undefined) {
            return false;
        }
        var x = this.current.split('#')[0] || this.current;
        return x === path;
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-nav-bar',
        template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], NavBarComponent);

var _a;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/ngb-modal-collaboration/ngb-modal-collaboration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ngb-modal-collaboration/ngb-modal-collaboration.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Collaboration & contribution</h4>\r\n    <button class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"markdown markdown-left\">\r\n      <markdown [path]=\"'../../assets/content/OASP/collaboration-contribution-getinvolved.md'\"></markdown>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button  class=\"btn btn-primary\" (click)=\"c('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"open(content)\">Get involved</button>\r\n\r\n<pre>{{closeResult}}</pre>\r\n"

/***/ }),

/***/ "../../../../../src/app/ngb-modal-collaboration/ngb-modal-collaboration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbModalCollaborationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbModalCollaborationComponent = (function () {
    function NgbModalCollaborationComponent(modalService) {
        this.modalService = modalService;
    }
    NgbModalCollaborationComponent.prototype.open = function (content) {
        this.modalService.open(content, { size: 'lg' });
    };
    NgbModalCollaborationComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbModalCollaborationComponent.prototype.ngOnInit = function () {
    };
    return NgbModalCollaborationComponent;
}());
NgbModalCollaborationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-ngb-modal-collaboration',
        template: __webpack_require__("../../../../../src/app/ngb-modal-collaboration/ngb-modal-collaboration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ngb-modal-collaboration/ngb-modal-collaboration.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _a || Object])
], NgbModalCollaborationComponent);

var _a;
//# sourceMappingURL=ngb-modal-collaboration.component.js.map

/***/ }),

/***/ "../../../../../src/app/ngb-modal/ngb-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ngb-modal/ngb-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">University activities</h4>\r\n    <button class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"markdown markdown-center\">\r\n      <markdown [path]=\"'../../assets/content/OASP/university-activities-learn-more.md'\"></markdown>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button  class=\"btn btn-primary\" (click)=\"c('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"open(content)\">Learn more</button>\r\n\r\n<pre>{{closeResult}}</pre>\r\n"

/***/ }),

/***/ "../../../../../src/app/ngb-modal/ngb-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbModalComponent = (function () {
    function NgbModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbModalComponent.prototype.open = function (content) {
        this.modalService.open(content, { size: 'lg' });
    };
    NgbModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbModalComponent.prototype.ngOnInit = function () {
    };
    return NgbModalComponent;
}());
NgbModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-ngb-modal',
        template: __webpack_require__("../../../../../src/app/ngb-modal/ngb-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ngb-modal/ngb-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _a || Object])
], NgbModalComponent);

var _a;
//# sourceMappingURL=ngb-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/oasp/oasp.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".OASP {\r\n  background: url(" + __webpack_require__("../../../../../src/assets/images/img_1.png") + ") center no-repeat;\r\n  background-color: #4bbdec;\r\n  background-size: cover;\r\n}\r\n\r\n.OASP .markdown p {\r\n  color: white;\r\n  font-size: 14pt;\r\n  font-family: montserrat-light;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 18pt;\r\n  padding: 20px 0px;\r\n}\r\n\r\n.OASP .markdown h2 {\r\n  color: white;\r\n  font-family: montserrat-Regular;\r\n  font-size: 24pt;\r\n  line-height: 28pt;\r\n  font-weight: 500;\r\n}\r\n\r\n.OASP .markdown h2::after {\r\n  display: none;\r\n}\r\n@media (min-width: 768px) and (max-width: 1023px) {\r\n  .OASP {\r\n    background-size: 160%;\r\n  }\r\n  .OASP p {\r\n    text-align: center\r\n  }\r\n  .OASP h2 {\r\n    text-align: center\r\n  }\r\n  .text-xs-center {\r\n    text-align: center;\r\n  }\r\n  .OASP .markdown p {\r\n    margin: 20px 0px;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .text-xs-center {\r\n    text-align: center;\r\n  }\r\n  .OASP {\r\n    background: url(" + __webpack_require__("../../../../../src/assets/images/img_1.png") + ") center center no-repeat;\r\n    background-color: #4bbdec;\r\n    background-size: 500%;\r\n  }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/oasp/oasp.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid OASP\">\r\n  <div class=\"container\">\r\n    <div class=\"row\" style=\"padding-top: 180px\">\r\n      <div class=\"col-lg-7 col-md-12 col-sm-7 col-12 text-xs-center\">\r\n        <div class=\"markdown\">\r\n          <markdown [path]=\"'../../assets/content/OASP/about.md'\"></markdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" style=\"padding-bottom:200px\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-12 text-xs-center\">\r\n        <!--Getting started-->\r\n        <a href=\"oasp#gettingstarted\" class=\"btn btn-primary btn-dark\">Getting started</a>\r\n        <!--framework-->\r\n        <a href=\"oasp#fw\" class=\"btn btn-primary btn-white\">Framework</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-framework></app-framework>\r\n<app-tab-panel></app-tab-panel>\r\n<app-used-technologies></app-used-technologies>\r\n<app-try-it></app-try-it>\r\n<app-devonfw></app-devonfw>\r\n<app-collaboration-contribution></app-collaboration-contribution>\r\n<app-slider></app-slider>\r\n<app-university-activities></app-university-activities>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/oasp/oasp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OASPComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OASPComponent = (function () {
    function OASPComponent() {
    }
    OASPComponent.prototype.ngOnInit = function () {
    };
    return OASPComponent;
}());
OASPComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-oasp',
        template: __webpack_require__("../../../../../src/app/oasp/oasp.component.html"),
        styles: [__webpack_require__("../../../../../src/app/oasp/oasp.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OASPComponent);

//# sourceMappingURL=oasp.component.js.map

/***/ }),

/***/ "../../../../../src/app/oasp4-fn/oasp4-fn.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/oasp4-fn/oasp4-fn.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  oasp4-fn works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/oasp4-fn/oasp4-fn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Oasp4FnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Oasp4FnComponent = (function () {
    function Oasp4FnComponent() {
    }
    Oasp4FnComponent.prototype.ngOnInit = function () {
    };
    return Oasp4FnComponent;
}());
Oasp4FnComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-oasp4-fn',
        template: __webpack_require__("../../../../../src/app/oasp4-fn/oasp4-fn.component.html"),
        styles: [__webpack_require__("../../../../../src/app/oasp4-fn/oasp4-fn.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Oasp4FnComponent);

//# sourceMappingURL=oasp4-fn.component.js.map

/***/ }),

/***/ "../../../../../src/app/oasp4-j/oasp4-j.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n  background-color: #4bbdec!important;\r\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10);\r\n  transition: all 300ms;\r\n}\r\n\r\n.oasp4j-container {\r\n  padding-top: 80px;\r\n}\r\n\r\n.content-roadmap {\r\n  padding: 0px!important;\r\n}\r\n\r\n.roadmap {\r\n  background: url(" + __webpack_require__("../../../../../src/assets/images/corte_4.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position-x: -550px;\r\n}\r\n\r\n.roadmap .main-title h1 {\r\n  text-align: left;\r\n}\r\n\r\n.roadmap .main-title h1::before {\r\n  position: absolute;\r\n}\r\n\r\n.roadmap h1 {\r\n  color: #4bbdec;\r\n  padding: 40px 0px;\r\n  font-family: montserrat-Regular;\r\n  text-align: center;\r\n}\r\n\r\n.roadmap h1.road {\r\n  margin-bottom: 0px;\r\n  margin-top: 40px;\r\n}\r\n\r\n.roadmap h1::after {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 30%;\r\n  margin-left: 1em;\r\n  background-color: #4bbdec;\r\n  height: 1px;\r\n  line-height: 1px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.roadmap h1::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 30%;\r\n  margin-right: 1em;\r\n  background-color: #4bbdec;\r\n  height: 1px;\r\n  line-height: 1px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.tl.markdown h4 {\r\n  padding: 35px 0;\r\n  margin: 35px 0px 0 0px;\r\n  font-family: montserrat-Regular;\r\n  text-align: center;\r\n  color: #ffffff;\r\n  background: #4bbdec;\r\n}\r\n\r\n.timeline {\r\n  background-color: transparent;\r\n  box-shadow: inset 0px 0px 100px #e2e2e2;\r\n}\r\n\r\n.timeline-centered .timeline-entry {\r\n  width: 85%;\r\n}\r\n\r\n.timeline-centered:before {\r\n  content: '';\r\n  position: absolute;\r\n  display: block;\r\n  width: 2px;\r\n  background: #58ACFA;\r\n  left: 15%;\r\n  top: 0px;\r\n  bottom: 0px;\r\n  margin-left: 8px;\r\n}\r\n\r\n.media-body p {\r\n  padding-top: 0px;\r\n  text-align: left;\r\n  font-weight: 700 !important;\r\n  font-size: 11pt !important;\r\n}\r\n\r\n.media-body a p {\r\n  color: #4bbdec !important;\r\n  text-decoration: none;\r\n  font-weight: 700 !important;\r\n}\r\n\r\n.media-body .description {\r\n  padding-top: 15px;\r\n  font-weight: normal !important;\r\n}\r\n\r\n\r\n/**Markdown styles**/\r\n\r\n.roadmap .main-title.markdown {\r\n  background: url(" + __webpack_require__("../../../../../src/assets/images/corte_4.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-size: 200%;\r\n  background-position-x: -400px;\r\n  background-position-y: -950px;\r\n  padding: 10%;\r\n  box-shadow: 0 5px 20px rgba(68, 68, 68, 0.3);\r\n}\r\n\r\n.roadmap .markdown {\r\n  padding: 2em 10%;\r\n}\r\n\r\n.roadmap .markdown p {\r\n  color: white;\r\n  font-size: 14pt;\r\n  font-family: montserrat-light;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 18pt;\r\n  padding: 0px 0px;\r\n  text-align: left;\r\n}\r\n\r\n.roadmap .markdown h1 {\r\n  color: white;\r\n  font-family: montserrat-Regular;\r\n  font-size: 24pt;\r\n  line-height: 28pt;\r\n  font-weight: 500;\r\n  text-align: left;\r\n}\r\n\r\n.roadmap .markdown h2 {\r\n  color: #585657;\r\n  font-family: montserrat-light;\r\n  font-size: 24pt;\r\n  line-height: 28pt;\r\n  font-weight: 500;\r\n  text-align: center;\r\n}\r\n\r\n.roadmap .markdown h1::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: relative;\r\n  margin: 10px 380px 0px 0px;\r\n  width: 2.2em;\r\n  background-color: #ffffff;\r\n  height: 4px;\r\n}\r\n\r\n.over.markdown a {\r\n  margin-top: 0px;\r\n  margin-right: 20px;\r\n  margin-left: 20px !important;\r\n  width: 214px;\r\n  height: auto;\r\n}\r\n\r\n.over.markdown h2 {\r\n  font-family: montserrat-light;\r\n  text-align: center;\r\n}\r\n\r\n.over.markdown h2::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: relative;\r\n  width: 5%;\r\n  background-color: #585657;\r\n  height: 2px;\r\n  margin-top: 2%;\r\n}\r\n\r\n.over.markdown p {\r\n  color: #585657;\r\n  font-size: 12pt;\r\n  font-family: montserrat-light;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 18pt;\r\n  padding: 20px 10px;\r\n  text-align: center;\r\n}\r\n\r\n.tl.markdown h1 {\r\n  color: #4bbdec;\r\n  font-family: montserrat-Regular;\r\n  font-size: 24pt;\r\n  line-height: 28pt;\r\n  font-weight: 500;\r\n}\r\n\r\n.tl.markdown h1::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 30%;\r\n  background-color: #4bbdec;\r\n  height: 1px;\r\n  line-height: 1px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.tl.markdown h1::after {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 30%;\r\n  background-color: #4bbdec;\r\n  height: 1px;\r\n  line-height: 1px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.tl.markdown p {\r\n  color: #585657;\r\n  font-size: 14pt;\r\n  font-family: montserrat-light;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 18pt;\r\n  padding: 20px 0px 20px 0px;\r\n  text-align: center;\r\n  margin-top: 20px !important;\r\n}\r\n\r\n.tl.markdown ul {\r\n  color: #959595;\r\n  font-size: 10pt;\r\n  font-family: montserrat-light;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 25px;\r\n  text-align: left;\r\n  padding-left: 4em;\r\n}\r\n\r\n\r\n/* SIDENAV\r\n----------------------------------------------------------*/\r\n\r\n.sidebar-left {\r\n  box-shadow: 0 0 20px rgba(68, 68, 68, 0.3);\r\n  padding: 0px;\r\n  z-index: 1;\r\n}\r\n\r\n\r\n/* Sidebar Styles */\r\n\r\n.sidebar-nav {\r\n  position: fixed;\r\n  top: 100px;\r\n  width: auto;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.sidebar-nav .active {\r\n  background-color: red !important;\r\n}\r\n\r\nul.sidebar-nav-list {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  list-style: none;\r\n}\r\n\r\n.sidebar-nav-list li a:hover {\r\n  text-decoration: none;\r\n  background: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\nul.sidebar-nav-list li {\r\n  padding-top: 3px !important;\r\n}\r\n\r\nul.sidebar-nav-list li.dropdown a {\r\n  padding: 14px;\r\n  background-color: #ffffff;\r\n  border-left: 6px solid #4bbdec;\r\n  font-weight: 500;\r\n}\r\nul.sidebar-nav-list li.dropdown a:hover {\r\n  padding: 14px;\r\n  background-color: #ffffff;\r\n  border-left: 6px solid #4bbdec;\r\n  font-weight: 500;\r\n}\r\n\r\nul.sidebar-nav-list li a {\r\n  display: block;\r\n  padding: 7px 10px;\r\n  text-decoration: none;\r\n  color: #384759;\r\n}\r\n\r\nul.sidebar-nav-list li a:hover {\r\n  font-style: montserrat-Regular;\r\n  text-decoration: none;\r\n  color: #4bbdec;\r\n  cursor: pointer;\r\n}\r\n\r\nul.sidebar-nav-list ul.dropdown-submenu {\r\n  list-style: none;\r\n}\r\n\r\nul.sidebar-nav-list ul.dropdown-submenu li a {\r\n  /*display: none;*/\r\n  padding: 10px;\r\n  background-color: #ffffff;\r\n  border-left: 10px solid transparent;\r\n  list-style: none;\r\n  font-weight: 200;\r\n}\r\n\r\nul.sidebar-nav-list ul.dropdown-submenu li a:hover {\r\n  /*display: none;*/\r\n  padding: 10px;\r\n  color: #4bbdec;\r\n  border-left: 10px solid transparent;\r\n  list-style: none;\r\n}\r\n\r\n.timeline h1::before,\r\n.timeline h1::after {\r\n  width: 0%\r\n}\r\n\r\n.timeline h1 {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 1199px) and (min-width: 992px) {\r\n  .roadmap .main-title.markdown {\r\n    background-position-x: -384px;\r\n    background-position-y: -650px;\r\n  }\r\n  .roadmap {\r\n    background-position-x: -260px;\r\n  }\r\n  .roadmap .markdown {\r\n    padding: 2em 0px;\r\n  }\r\n  .over.markdown a {\r\n    width: 214px;\r\n    height: auto;\r\n    margin-left: 0px !important;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 991px) and (min-width: 768px) {\r\n  .oasp4j-container {\r\n    padding-top: 74px;\r\n  }\r\n  .roadmap .main-title.markdown {\r\n    background-size: 250%;\r\n    background-position-x: -580px;\r\n    background-position-y: -300px;\r\n  }\r\n  .roadmap {\r\n    background-position-x: -250px;\r\n    background-position-y: 230px;\r\n  }\r\n  .roadmap h1::before,\r\n  .roadmap h1::after {\r\n    width: 10%;\r\n  }\r\n  .timeline h1::before,\r\n  .timeline h1::after {\r\n    width: 0%\r\n  }\r\n  .timeline h1 {\r\n    padding-bottom: 10px;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .oasp4j-container {\r\n    padding-top: 73px;\r\n  }\r\n  .tl.markdown h1 {\r\n    display: none;\r\n  }\r\n  .roadmap .main-title.markdown {\r\n    background-color: #4bbdec;\r\n  }\r\n  .roadmap .main-title.markdown p {\r\n    text-align: center;\r\n  }\r\n  .roadmap .main-title.markdown h1 {\r\n    text-align: center;\r\n  }\r\n  .roadmap .main-title.markdown h1::after {\r\n    width: 15%;\r\n    margin-right: 35%;\r\n    margin-left: 43%;\r\n  }\r\n  .over.markdown a {\r\n    margin-bottom: 10px;\r\n  }\r\n  .sidebar-left {\r\n    display: none;\r\n  }\r\n  .sidebar-nav {\r\n    display: none;\r\n  }\r\n  .roadmap .markdown {\r\n    padding: 0px 0px;\r\n  }\r\n  .roadmap h1::before,\r\n  .roadmap h1::after {\r\n    width: 0%;\r\n  }\r\n  .tl.markdown ul li {\r\n    text-align: left;\r\n  }\r\n  .tabset4j .nav-pills .nav-item {\r\n    width: 100%;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n    padding-top: 10px;\r\n  }\r\n  .tabset4j ul.nav-pills {\r\n    height: 42px;\r\n    background-color: #fff;\r\n    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .25);\r\n    position: fixed;\r\n    top: 73px;\r\n    width: 100%;\r\n    z-index: 900;\r\n    font-size: 76%;\r\n  }\r\n  .about .nav-pills .nav-item.show .nav-link,\r\n  .nav-pills .nav-link:hover {\r\n    color: #4bbdec;\r\n    border-bottom: 3px solid #4bbdec !important;\r\n    border-radius: 0px;\r\n  }\r\n  .tl.markdown {\r\n    padding-right: 0px;\r\n    padding-left: 0px;\r\n  }\r\n  .tl.markdown h4 {\r\n    padding: 35px 0;\r\n    margin: 50px 0px 0 0px;\r\n    font-family: montserrat-Regular;\r\n    text-align: center;\r\n    color: #ffffff;\r\n    background: #4bbdec;\r\n    box-shadow: 0px 2px 9px rgba(68, 68, 68, 0.35);\r\n  }\r\n  .timeline-centered {\r\n    margin-top: 43px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/oasp4-j/oasp4-j.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid oasp4j-container\">\r\n  <div class=\"row\">\r\n    <!-- Sidebar -->\r\n    <div class=\"col-lg-3 col-md-4 sidebar-left\">\r\n      <div class=\"sidebar-nav\">\r\n        <ul class=\"sidebar-nav-list\">\r\n          <li class=\"dropdown\">\r\n            <a href=\"oasp4-j#over-view\" [ngClass]=\"{'active': isCurrentPath('/oasp4-j#over-view')}\">Overview</a>\r\n            <ul class=\"dropdown-submenu\">\r\n              <li><a href=\"oasp4-j#documentacion\">Documentation</a></li>\r\n              <li><a href=\"oasp4-j#modules\">Modules</a></li>\r\n              <li><a href=\"oasp4-j#sample-app\">Sample Application</a></li>\r\n            </ul>\r\n            <li class=\"dropdown\">\r\n              <a href=\"oasp4-j#get-start4j\">Getting started</a>\r\n            </li>\r\n            <li class=\"dropdown\">\r\n              <a href=\"oasp4-j#tl-go\">Roadmap</a>\r\n            </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <!-- Sidebar -->\r\n\r\n    <!--Overview-->\r\n\r\n    <div class=\"hidden-sm-down col-lg-9 col-md-8 col-sm-7 col-12 content-roadmap\">\r\n      <div class=\"roadmap\">\r\n        <div class=\"markdown main-title\">\r\n          <markdown [path]=\"'../../assets/content/OASP4J/header.md'\"></markdown>\r\n        </div>\r\n        <h4 class=\"developers\" id=\"over-view\">¡From developers to developers!</h4>\r\n        <h1>Overview</h1>\r\n        <div class=\"markdown over\" id=\"documentacion\">\r\n          <markdown [path]=\"'../../assets/content/OASP4J/overview/documentation.md'\"></markdown>\r\n        </div>\r\n        <div class=\"markdown over\" id=\"modules\">\r\n          <markdown [path]=\"'../../assets/content/OASP4J/overview/modules.md'\"></markdown>\r\n        </div>\r\n        <div class=\"markdown over\" id=\"sample-app\">\r\n          <markdown [path]=\"'../../assets/content/OASP4J/overview/sample-app.md'\"></markdown>\r\n        </div>\r\n        <div id=\"get-start4j\"></div>\r\n        <!--Getting started-->\r\n        <div class=\"timeline col-lg-12  col-md-12 col-sm-6\">\r\n          <h1 class=\"timeline-started\">Getting started</h1>\r\n          <div class=\" timeline-centered\">\r\n            <article class=\"timeline-entry\">\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon\">\r\n                  <i class=\"entypo-feather\"></i> 1\r\n                </div>\r\n                <div class=\"timeline-label\">\r\n                  <div class=\"media\">\r\n                    <div class=\"media-left\">\r\n                      <a href=\"../../assets/PDF/OASP4J.pdf\">\r\n                        <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/read_icon.png\">\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"media-body\">\r\n                      <a href=\"../../assets/PDF/OASP4J.pdf\">\r\n                        <p>Read the platform GUIDE <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\r\n                        </p>\r\n                      </a>\r\n                      <p class=\"description\">First things first. Start your way through OASP by reading the OASP4j Platform Guide</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </article>\r\n            <article class=\"timeline-entry\">\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon\">\r\n                  <i class=\"entypo-feather\"></i> 2\r\n                </div>\r\n                <div class=\"timeline-label\">\r\n                  <div class=\"media \">\r\n                    <div class=\"media-left\">\r\n                      <a href=\"http://oasp-ci.cloudapp.net/oasp4j-sample/jsclient/\">\r\n                        <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/view_icon.png\">\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"media-body\">\r\n                      <a href=\"http://oasp-ci.cloudapp.net/oasp4j-sample/jsclient/\">\r\n                        <p>View the demo tutorial <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\r\n                        </p>\r\n                      </a>\r\n                      <p class=\"description\">There is currently one rather technical demo, simulating a few use cases of a restaurant management\r\n                        application\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </article>\r\n            <article class=\"timeline-entry\">\r\n              <div class=\"timeline-entry-inner \">\r\n                <div class=\"timeline-icon\">\r\n                  <i class=\"entypo-feather\"></i> 3\r\n                </div>\r\n                <div class=\"timeline-label\">\r\n                  <div class=\"media \">\r\n                    <div class=\"media-left\">\r\n                      <a href=\"https://github.com/oasp/oasp4j/wiki/oasp-ide-setup\">\r\n                        <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/enviroment_icon.png\">\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"media-body\">\r\n                      <a href=\"https://github.com/oasp/oasp4j/wiki/oasp-ide-setup\">\r\n                        <p>Setup the develop enviroment <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\r\n                        </p>\r\n                      </a>\r\n                      <p class=\"description\">The OASP IDE setup guide will guide you how to get your development environment up and running.</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </article>\r\n            <article class=\"timeline-entry\">\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon\">\r\n                  <i class=\"entypo-feather \"></i> 4\r\n                </div>\r\n                <div class=\"timeline-label\">\r\n                  <div class=\"media \">\r\n                    <div class=\"media-left\">\r\n                      <a href=\"http://github.com/oasp/oasp4j/\">\r\n                        <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/code_icon.png\">\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"media-body\">\r\n                      <a href=\"http://github.com/oasp/oasp4j/\">\r\n                        <p>Get the code <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\r\n                        </p>\r\n                      </a>\r\n                      <p class=\"description\">Once you are able to code applications with OASP support you surely want to take a peek to the technology\r\n                        underneath and be able to customize for your needs.The code is hosted on Github, here are the main\r\n                        repositories\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </article>\r\n            <article class=\"timeline-entry\">\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon\">\r\n                  <i class=\"entypo-feather \"></i> 5\r\n                </div>\r\n                <div class=\"timeline-label\">\r\n                  <div class=\"media \">\r\n                    <div class=\"media-left\">\r\n                      <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/help_icon.png\">\r\n                    </div>\r\n                    <div class=\"media-body\" id=\"tl-go\">\r\n                      <p>Help making OASP even better</p>\r\n                      <p class=\"description\">Remember this is a joint effort and you are welcome to contribute.</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </article>\r\n          </div>\r\n        </div>\r\n        <!--Roadmap-->\r\n        <h1 class=\"road\">Roadmap</h1>\r\n        <div class=\"markdown tl\">\r\n          <markdown [path]=\"'../../assets/content/OASP4J/roadmap/roadmap.md'\"></markdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--mvl version-->\r\n\r\n<div class=\"container-fluid oasp4jmvl\">\r\n  <div class=\"row\">\r\n    <div class=\"hidden-md-up\">\r\n      <ngb-tabset type=\"pills\" class=\"tabset4j\">\r\n        <ngb-tab title=\"Overview\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"markdown over\" id=\"documentacion\">\r\n              <markdown [path]=\"'../../assets/content/OASP4J/overview/documentation.md'\"></markdown>\r\n            </div>\r\n            <div class=\"markdown over\" id=\"sample-app\">\r\n              <markdown [path]=\"'../../assets/content/OASP4J/overview/sample-app.md'\"></markdown>\r\n            </div>\r\n            <div class=\"markdown over\" id=\"modules\">\r\n              <markdown [path]=\"'../../assets/content/OASP4J/overview/modules.md'\"></markdown>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"Getting started\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"timeline col-12 \">\r\n              <div class=\" timeline-centered \">\r\n                <article class=\"timeline-entry\">\r\n                  <div class=\"timeline-entry-inner\">\r\n                    <div class=\"timeline-icon\">\r\n                      <i class=\"entypo-feather\"></i> 1\r\n                    </div>\r\n                    <div class=\"timeline-label\">\r\n                      <div class=\"media\">\r\n                        <div class=\"media-left\">\r\n                          <a href=\"../../assets/PDF/OASP4J.pdf\">\r\n                            <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/read_icon.png\">\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"media-body\">\r\n                          <a href=\"../../assets/PDF/OASP4J.pdf\">\r\n                            <p>Read the platform GUIDE <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\r\n                            </p>\r\n                          </a>\r\n                          <p class=\"description\">First things first. Start your way through OASP by reading the OASP4j Platform Guide</p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n                <article class=\"timeline-entry\">\r\n                  <div class=\"timeline-entry-inner\">\r\n                    <div class=\"timeline-icon\">\r\n                      <i class=\"entypo-feather\"></i> 2\r\n                    </div>\r\n                    <div class=\"timeline-label\">\r\n                      <div class=\"media \">\r\n                        <div class=\"media-left\">\r\n                          <a href=\"http://oasp-ci.cloudapp.net/oasp4j-sample/jsclient/\">\r\n                            <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/view_icon.png\">\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"media-body\">\r\n                          <a href=\"http://oasp-ci.cloudapp.net/oasp4j-sample/jsclient/\">\r\n                            <p>View the demo tutorial <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\r\n                            </p>\r\n                          </a>\r\n                          <p class=\"description\">There is currently one rather technical demo, simulating a few use cases of a restaurant management\r\n                            application\r\n                          </p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n                <article class=\"timeline-entry\">\r\n                  <div class=\"timeline-entry-inner \">\r\n                    <div class=\"timeline-icon\">\r\n                      <i class=\"entypo-feather\"></i> 3\r\n                    </div>\r\n                    <div class=\"timeline-label\">\r\n                      <div class=\"media \">\r\n                        <div class=\"media-left\">\r\n                          <a href=\"https://github.com/oasp/oasp4j/wiki/oasp-ide-setup\">\r\n                            <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/enviroment_icon.png\">\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"media-body\">\r\n                          <a href=\"https://github.com/oasp/oasp4j/wiki/oasp-ide-setup\">\r\n                            <p>Setup the develop enviroment <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\r\n                            </p>\r\n                          </a>\r\n                          <p class=\"description\">The OASP IDE setup guide will guide you how to get your development environment up and running.</p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n                <article class=\"timeline-entry\">\r\n                  <div class=\"timeline-entry-inner\">\r\n                    <div class=\"timeline-icon\">\r\n                      <i class=\"entypo-feather \"></i> 4\r\n                    </div>\r\n                    <div class=\"timeline-label\">\r\n                      <div class=\"media \">\r\n                        <div class=\"media-left\">\r\n                          <a href=\"http://github.com/oasp/oasp4j/\">\r\n                            <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/code_icon.png\">\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"media-body\">\r\n                          <a href=\"http://github.com/oasp/oasp4j/\">\r\n                            <p>Get the code <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\r\n                            </p>\r\n                          </a>\r\n                          <p class=\"description\">Once you are able to code applications with OASP support you surely want to take a peek to the\r\n                            technology underneath and be able to customize for your needs.The code is hosted on Github, here\r\n                            are the main repositories\r\n                          </p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n                <article class=\"timeline-entry\">\r\n                  <div class=\"timeline-entry-inner\">\r\n                    <div class=\"timeline-icon\">\r\n                      <i class=\"entypo-feather \"></i> 5\r\n                    </div>\r\n                    <div class=\"timeline-label\">\r\n                      <div class=\"media \">\r\n                        <div class=\"media-left\">\r\n                          <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/help_icon.png\">\r\n                        </div>\r\n                        <div class=\"media-body\" id=\"tl-go\">\r\n                          <p>Help making OASP even better</p>\r\n                          <p class=\"description\">Remember this is a joint effort and you are welcome to contribute.</p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"Roadmap\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"markdown tl\">\r\n              <markdown [path]=\"'../../assets/content/OASP4J/roadmap/roadmap.md'\"></markdown>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n      </ngb-tabset>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/oasp4-j/oasp4-j.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OASP4JComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OASP4JComponent = (function () {
    function OASP4JComponent(router) {
        var _this = this;
        this.router = router;
        this.router.events.subscribe(function (val) {
            _this.current = val.url;
        });
    }
    OASP4JComponent.prototype.ngOnInit = function () {
    };
    OASP4JComponent.prototype.onclick = function (menuItem) {
    };
    OASP4JComponent.prototype.isCurrentPath = function (path) {
        if (this.current === undefined) {
            return false;
        }
        var x = this.current.split('#')[0] || this.current;
        return x === path;
    };
    return OASP4JComponent;
}());
OASP4JComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-oasp4-j',
        template: __webpack_require__("../../../../../src/app/oasp4-j/oasp4-j.component.html"),
        styles: [__webpack_require__("../../../../../src/app/oasp4-j/oasp4-j.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], OASP4JComponent);

var _a;
//# sourceMappingURL=oasp4-j.component.js.map

/***/ }),

/***/ "../../../../../src/app/oasp4-js/oasp4-js.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n  background-color: #4bbdec;\r\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10);\r\n  transition: all 300ms;\r\n}\r\n\r\n.oasp4js-container {\r\n  padding-top: 80px;\r\n}\r\n\r\n.content-roadmap {\r\n  padding: 0px !important;\r\n}\r\n\r\n.roadmap {\r\n  background: url(" + __webpack_require__("../../../../../src/assets/images/corte_4.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position-x: -550px;\r\n}\r\n\r\n.roadmap .main-title h1 {\r\n  text-align: left;\r\n}\r\n\r\n.roadmap .main-title h1::before {\r\n  position: absolute;\r\n}\r\n\r\n.roadmap h1 {\r\n  color: #4bbdec;\r\n  padding: 40px 0px;\r\n  font-family: montserrat-Regular;\r\n  text-align: center;\r\n}\r\n\r\n.roadmap h1::after {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 30%;\r\n  margin-left: 1em;\r\n  background-color: #4bbdec;\r\n  height: 1px;\r\n  line-height: 1px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.roadmap h1::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 30%;\r\n  margin-right: 1em;\r\n  background-color: #4bbdec;\r\n  height: 1px;\r\n  line-height: 1px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.roadmap h4 {\r\n  padding: 35px 0;\r\n  margin: 35px 16px 0 16px;\r\n  font-family: montserrat-Regular;\r\n  text-align: center;\r\n  color: black;\r\n  background: transparent;\r\n}\r\n\r\n.tl.markdown h4 {\r\n  padding: 35px 0;\r\n  margin: 35px 0px 0 0px;\r\n  font-family: montserrat-Regular;\r\n  text-align: center;\r\n  color: #ffffff;\r\n  background: #4bbdec;\r\n  box-shadow: 0px 2px 9px rgba(68, 68, 68, 0.35);\r\n}\r\n\r\n.tl.markdown {\r\n  padding-right: 0px !important;\r\n  padding-left: 0px !important;\r\n}\r\n\r\n.tl.markdown li {\r\n  padding: 0.5em !important\r\n}\r\n\r\n\r\n/**Markdown styles**/\r\n\r\n.roadmap .main-title.markdown {\r\n  background: url(" + __webpack_require__("../../../../../src/assets/images/corte_4.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-size: 200%;\r\n  background-position-x: -400px;\r\n  background-position-y: -950px;\r\n  padding: 10%;\r\n  box-shadow: 0 5px 20px rgba(68, 68, 68, 0.3);\r\n}\r\n\r\n.roadmap .markdown {\r\n  padding: 2em 10%;\r\n}\r\n\r\n.roadmap .markdown p {\r\n  color: white;\r\n  font-size: 14pt;\r\n  font-family: montserrat-light;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 18pt;\r\n  padding: 0px 0px;\r\n  text-align: left;\r\n}\r\n\r\n.roadmap .markdown h1 {\r\n  color: white;\r\n  font-family: montserrat-Regular;\r\n  font-size: 24pt;\r\n  line-height: 28pt;\r\n  font-weight: 500;\r\n  text-align: left;\r\n}\r\n\r\n.roadmap .markdown h2 {\r\n  color: #585657;\r\n  font-family: montserrat-light;\r\n  font-size: 24pt;\r\n  line-height: 28pt;\r\n  font-weight: 500;\r\n  text-align: center;\r\n}\r\n\r\n.roadmap .markdown h1::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: relative;\r\n  margin: 10px 380px 0px 0px;\r\n  width: 2.2em;\r\n  background-color: #ffffff;\r\n  height: 4px;\r\n}\r\n\r\n.over.markdown h2 {\r\n  font-family: montserrat-light;\r\n  text-align: center;\r\n}\r\n\r\n.over.markdown h2::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: relative;\r\n  width: 5%;\r\n  background-color: #585657;\r\n  height: 2px;\r\n  margin-top: 2%;\r\n}\r\n\r\n.over.markdown p {\r\n  color: #585657;\r\n  font-size: 12pt;\r\n  font-family: montserrat-light;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 18pt;\r\n  padding: 20px 10px;\r\n  text-align: center;\r\n}\r\n\r\n.tl.markdown h1 {\r\n  color: #4bbdec;\r\n  font-family: montserrat-Regular;\r\n  font-size: 24pt;\r\n  line-height: 28pt;\r\n  font-weight: 500;\r\n}\r\n\r\n.tl.markdown h1::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 30%;\r\n  background-color: #4bbdec;\r\n  height: 1px;\r\n  line-height: 1px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.tl.markdown h1::after {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 30%;\r\n  background-color: #4bbdec;\r\n  height: 1px;\r\n  line-height: 1px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.tl.markdown p {\r\n  color: #585657;\r\n  font-size: 14pt;\r\n  font-family: montserrat-light;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 18pt;\r\n  padding: 20px 0px 20px 0px;\r\n  text-align: center;\r\n  margin-top: 20px !important;\r\n}\r\n\r\n.tl.markdown ul {\r\n  color: #959595;\r\n  font-size: 10pt;\r\n  font-family: montserrat-light;\r\n  font-style: normal;\r\n  font-weight: 100;\r\n  line-height: 25px;\r\n  text-align: left;\r\n  padding-left: 4em;\r\n}\r\n\r\n\r\n/* Sidebar Styles */\r\n\r\n.sidebar-left {\r\n  box-shadow: 0 0 20px rgba(68, 68, 68, 0.3);\r\n  padding: 0px;\r\n  z-index: 1;\r\n}\r\n\r\n.sidebar-nav {\r\n  position: fixed;\r\n  top: 100px;\r\n  width: auto;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\nul.sidebar-nav-list {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  list-style: none;\r\n}\r\n\r\n.sidebar-nav-list li a:hover {\r\n  text-decoration: none;\r\n  background: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\nul.sidebar-nav-list li {\r\n  padding: 0px;\r\n}\r\n\r\nul.sidebar-nav-list li.dropdown a {\r\n  padding: 14px 14px 14px 25px;\r\n  background-color: #ffffff;\r\n  border-left: 6px solid #4bbdec;\r\n  font-weight: 500;\r\n}\r\n\r\nul.sidebar-nav-list li a {\r\n  display: block;\r\n  padding: 7px 10px;\r\n  text-decoration: none;\r\n  color: #384759;\r\n}\r\n\r\nul.sidebar-nav-list li a:hover {\r\n  text-decoration: none;\r\n  color: #4bbdec;\r\n  cursor: pointer;\r\n}\r\n\r\nul.sidebar-nav-list ul.dropdown-submenu {\r\n  list-style: none;\r\n}\r\n\r\nul.sidebar-nav-list ul.dropdown-submenu li a {\r\n  /*display: none;*/\r\n  padding: 10px;\r\n  background-color: #ffffff;\r\n  border-left: 10px solid transparent;\r\n  list-style: none;\r\n  font-weight: 200;\r\n}\r\n\r\nul.sidebar-nav-list ul.dropdown-submenu li a:hover {\r\n  /*display: none;*/\r\n  padding: 10px;\r\n  color: #4bbdec;\r\n  border-left: 10px solid transparent;\r\n  list-style: none;\r\n}\r\n\r\n.timeline h1::before,\r\n.timeline h1::after {\r\n  width: 0%\r\n}\r\n\r\n.timeline h1 {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.media-body a p {\r\n  color: #4bbdec !important;\r\n  text-decoration: none;\r\n  font-weight: 700 !important;\r\n  font-size: 11pt;\r\n}\r\n\r\n\r\n/** Media query*/\r\n\r\n@media only screen and (max-width: 1199px) and (min-width: 992px) {\r\n  .roadmap .main-title.markdown {\r\n    background-position-x: -384px;\r\n    background-position-y: -650px;\r\n  }\r\n  .roadmap {\r\n    background-position-x: -260px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 991px) and (min-width: 768px) {\r\n  .roadmap .main-title.markdown {\r\n    background-size: 250%;\r\n    background-position-x: -580px;\r\n    background-position-y: -300px;\r\n  }\r\n  .roadmap {\r\n    background-position-x: -250px;\r\n    background-position-y: 230px;\r\n  }\r\n  .roadmap h1::before,\r\n  .roadmap h1::after {\r\n    width: 10%;\r\n  }\r\n  .timeline h1::before,\r\n  .timeline h1::after {\r\n    width: 0%\r\n  }\r\n  .timeline h1 {\r\n    padding-bottom: 10px;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .roadmap .main-title.markdown {\r\n    background-color: #4bbdec;\r\n  }\r\n  .roadmap .main-title.markdown p {\r\n    text-align: center;\r\n  }\r\n  .roadmap .main-title.markdown h1 {\r\n    text-align: center;\r\n  }\r\n  .roadmap .main-title.markdown h1::after {\r\n    width: 15%;\r\n    margin-right: 35%;\r\n    margin-left: 43%;\r\n  }\r\n  .sidebar-left {\r\n    display: none;\r\n  }\r\n  .sidebar-nav {\r\n    display: none;\r\n  }\r\n  .roadmap .markdown {\r\n    padding: 2em 10%;\r\n  }\r\n  .roadmap h1::before,\r\n  .roadmap h1::after {\r\n    width: 0%;\r\n  }\r\n  .tl.markdown ul li {\r\n    text-align: left;\r\n  }\r\n  .tabset4js .nav-pills .nav-item {\r\n    width: 100%;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n    padding-top: 10px;\r\n  }\r\n  .tabset4js ul.nav-pills {\r\n    height: 42px;\r\n    background-color: #fff;\r\n    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .25);\r\n    position: fixed;\r\n    top: 73px;\r\n    width: 100%;\r\n    z-index: 900;\r\n    font-size: 76%;\r\n  }\r\n  .about .nav-pills .nav-item.show .nav-link,\r\n  .nav-pills .nav-link:hover {\r\n    color: #4bbdec;\r\n    border-bottom: 3px solid #4bbdec !important;\r\n    border-radius: 0px;\r\n  }\r\n  .tl.markdown h4 {\r\n    padding: 35px 0;\r\n    margin: 50px 0px 0 0px;\r\n    font-family: montserrat-Regular;\r\n    text-align: center;\r\n    color: #ffffff;\r\n    background: #4bbdec;\r\n    box-shadow: 0px 2px 9px rgba(68, 68, 68, 0.35);\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/oasp4-js/oasp4-js.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid oasp4j-container\">\r\n  <div class=\"row\">\r\n    <!-- Sidebar -->\r\n    <div class=\"col-lg-3 col-md-4 sidebar-left\">\r\n      <div class=\"sidebar-nav\">\r\n        <ul class=\"sidebar-nav-list\">\r\n          <li class=\"dropdown\">\r\n            <a href=\"oasp4-js#over-view\">Overview</a>\r\n            <ul class=\"dropdown-submenu\">\r\n              <li><a href=\"oasp4-js#sample-application\">Sample Application</a></li>\r\n              <li><a href=\"oasp4-js#app-template\">Application template</a></li>\r\n              <li><a href=\"oasp4-js#ng-modules\">Ng-modules</a></li>\r\n              <li><a href=\"oasp4-js#oasp4js-catalog\">OASP4JS Catalog</a></li>\r\n            </ul>\r\n            <li class=\"dropdown\">\r\n              <a href=\"oasp4-js#get-start4js\">Getting started</a>\r\n            </li>\r\n            <li class=\"dropdown\">\r\n              <a href=\"oasp4-js#tl-go\">Roadmap</a>\r\n            </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <!-- Sidebar -->\r\n\r\n    <div class=\"hidden-sm-down col-lg-9 col-md-8 col-sm-7 col-12 content-roadmap\">\r\n      <div class=\"roadmap\">\r\n        <div class=\"markdown main-title\">\r\n          <markdown [path]=\"'../../assets/content/OASP4JS/header.md'\"></markdown>\r\n        </div>\r\n        <h4 id=\"over-view\">¡From developers to developers!</h4>\r\n        <h1>Overview</h1>\r\n        <div class=\"markdown over\" id=\"sample-application\">\r\n          <markdown [path]=\"'../../assets/content/OASP4JS/overview/sample-app.md'\"></markdown>\r\n        </div>\r\n        <div class=\"markdown over\" id=\"app-template\">\r\n          <markdown [path]=\"'../../assets/content/OASP4JS/overview/app-template.md'\"></markdown>\r\n        </div>\r\n        <div class=\"markdown over\" id=\"ng-modules\">\r\n          <markdown [path]=\"'../../assets/content/OASP4JS/overview/ng-modules.md'\"></markdown>\r\n        </div>\r\n        <div class=\"markdown over\" id=\"oasp4js-catalog\">\r\n          <markdown [path]=\"'../../assets/content/OASP4JS/overview/oasp4js-catalog.md'\"></markdown>\r\n        </div>\r\n        <div id=\"get-start4js\"></div>\r\n\r\n        <!--Getting started-->\r\n        <div class=\"timeline col-lg-12  col-md-12 col-sm-6\">\r\n          <h1>Getting started</h1>\r\n          <div class=\" timeline-centered\">\r\n            <article class=\"timeline-entry\">\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon\">\r\n                  <i class=\"entypo-feather\"></i> 1\r\n                </div>\r\n                <div class=\"timeline-label\">\r\n                  <div class=\"media\">\r\n                    <div class=\"media-left\">\r\n                      <a href=\"http://oasp-ci.cloudapp.net/oasp4j-sample/jsclient/\">\r\n                        <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/view_icon.png\">\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"media-body\">\r\n                      <a href=\"http://oasp-ci.cloudapp.net/oasp4j-sample/jsclient/\">\r\n                        <p>View the demo <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\r\n                        </p>\r\n                      </a>\r\n                      <p class=\"description\">There is currently one rather technical demo, simulating a few use cases of a restaurant management\r\n                        application. Oasp sample application</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </article>\r\n            <article class=\"timeline-entry\">\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon\">\r\n                  <i class=\"entypo-feather\"></i> 2\r\n                </div>\r\n                <div class=\"timeline-label\">\r\n                  <div class=\"media \">\r\n                    <div class=\"media-left\">\r\n                      <a href=\"https://github.com/oasp/oasp4js/wiki/IDE-agnostic-setup\">\r\n                        <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/enviroment_icon.png\">\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"media-body\">\r\n                      <a href=\"https://github.com/oasp/oasp4js/wiki/IDE-agnostic-setup\">\r\n                        <p>Setup the develop enviroment <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\r\n                        </p>\r\n                      </a>\r\n                      <p class=\"description\">The OASP4js IDE setup guide will guide you how to get your AngularJs development environment up and\r\n                        running.\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </article>\r\n            <article class=\"timeline-entry\">\r\n              <div class=\"timeline-entry-inner \">\r\n                <div class=\"timeline-icon\">\r\n                  <i class=\"entypo-feather\"></i> 3\r\n                </div>\r\n                <div class=\"timeline-label\">\r\n                  <div class=\"media \">\r\n                    <div class=\"media-left\">\r\n                      <a href=\"http://github.com/oasp/oasp4js/\">\r\n                        <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/code_icon.png\">\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"media-body\">\r\n                      <a href=\"http://github.com/oasp/oasp4js/\">\r\n                        <p>Get the code <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\r\n                        </p>\r\n                      </a>\r\n                      <p class=\"description\">The code is hosted on Github, here is the OASP4js main repository .\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </article>\r\n            <article class=\"timeline-entry\">\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon\">\r\n                  <i class=\"entypo-feather \"></i> 4\r\n                </div>\r\n                <div class=\"timeline-label\">\r\n                  <div class=\"media \">\r\n                    <div class=\"media-left\">\r\n                      <a href=\"https://github.com/oasp/oasp4js/wiki/Tutorial-Introduction\">\r\n                        <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/read_icon.png\">\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"media-body\">\r\n                      <a href=\"https://github.com/oasp/oasp4js/wiki/Tutorial-Introduction\">\r\n                        <p>Read the tutorial <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\r\n                        </p>\r\n                      </a>\r\n                      <p class=\"description\">Read and follow the tutorial at OASP4js Client Tutorial\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </article>\r\n            <article class=\"timeline-entry\">\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon\">\r\n                  <i class=\"entypo-feather \"></i> 5\r\n                </div>\r\n                <div class=\"timeline-label\">\r\n                  <div class=\"media \">\r\n                    <div class=\"media-left\">\r\n                      <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/help_icon.png\">\r\n                    </div>\r\n                    <div class=\"media-body\" id=\"tl-go\">\r\n                      <p>Help making OASP even better</p>\r\n                      <p class=\" description \">Remember this is a joint effort and you are welcome to contribute.</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </article>\r\n          </div>\r\n        </div>\r\n        <h1 class=\"road\">Roadmap</h1>\r\n        <div class=\"markdown tl \">\r\n          <markdown [path]=\" '../../assets/content/OASP4JS/roadmap/Roadmap.md' \"></markdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--version movil-->\r\n<div class=\"container-fluid oasp4jsmvl \">\r\n  <div class=\"row \">\r\n    <div class=\"hidden-md-up \">\r\n      <ngb-tabset type=\"pills \" class=\"tabset4js \">\r\n        <ngb-tab title=\"Overview \">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"markdown over \" id=\"sample-application \">\r\n              <markdown [path]=\" '../../assets/content/OASP4JS/overview/sample-app.md' \"></markdown>\r\n            </div>\r\n            <div class=\"markdown over \" id=\"app-template \">\r\n              <markdown [path]=\" '../../assets/content/OASP4JS/overview/app-template.md' \"></markdown>\r\n            </div>\r\n            <div class=\"markdown over \" id=\"ng-modules \">\r\n              <markdown [path]=\" '../../assets/content/OASP4JS/overview/ng-modules.md' \"></markdown>\r\n            </div>\r\n            <div class=\"markdown over\" id=\"oasp4js-catalog\">\r\n              <markdown [path]=\"'../../assets/content/OASP4JS/overview/oasp4js-catalog.md'\"></markdown>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"Getting started \">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"timeline col-12 \">\r\n              <div class=\" timeline-centered \">\r\n                <article class=\"timeline-entry \">\r\n                  <div class=\"timeline-entry-inner \">\r\n                    <div class=\"timeline-icon \">\r\n                      <i class=\"entypo-feather \"></i> 1\r\n                    </div>\r\n                    <div class=\"timeline-label \">\r\n                      <div class=\"media\">\r\n                        <div class=\"media-left\">\r\n                          <a href=\"http://oasp-ci.cloudapp.net/oasp4j-sample/jsclient/\">\r\n                            <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/view_icon.png\">\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"media-body\">\r\n                          <a href=\"http://oasp-ci.cloudapp.net/oasp4j-sample/jsclient/\">\r\n                            <p>View the demo <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\r\n                            </p>\r\n                          </a>\r\n                          <p class=\"description\">There is currently one rather technical demo, simulating a few use cases of a restaurant management\r\n                            application. Oasp sample application</p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n                <article class=\"timeline-entry \">\r\n                  <div class=\"timeline-entry-inner \">\r\n                    <div class=\"timeline-icon \">\r\n                      <i class=\"entypo-feather \"></i> 3\r\n                    </div>\r\n                    <div class=\"timeline-label \">\r\n                      <div class=\"media \">\r\n                        <div class=\"media-left\">\r\n                          <a href=\"https://github.com/oasp/oasp4js/wiki/IDE-agnostic-setup\">\r\n                            <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/enviroment_icon.png\">\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"media-body\">\r\n                          <a href=\"https://github.com/oasp/oasp4js/wiki/IDE-agnostic-setup\">\r\n                            <p>Setup the develop enviroment <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\r\n                            </p>\r\n                          </a>\r\n                          <p class=\"description\">The OASP4js IDE setup guide will guide you how to get your AngularJs development environment up\r\n                            and running.\r\n                          </p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n                <article class=\"timeline-entry \">\r\n                  <div class=\"timeline-entry-inner \">\r\n                    <div class=\"timeline-icon \">\r\n                      <i class=\"entypo-feather \"></i> 4\r\n                    </div>\r\n                    <div class=\"timeline-label \">\r\n                      <div class=\"media \">\r\n                        <div class=\"media-left\">\r\n                          <a href=\"http://github.com/oasp/oasp4js/\">\r\n                            <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/code_icon.png\">\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"media-body\">\r\n                          <a href=\"http://github.com/oasp/oasp4js/\">\r\n                            <p>Get the code <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\r\n                            </p>\r\n                          </a>\r\n                          <p class=\"description\">The code is hosted on Github, here is the OASP4js main repository .\r\n                          </p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n                <article class=\"timeline-entry\">\r\n                  <div class=\"timeline-entry-inner\">\r\n                    <div class=\"timeline-icon\">\r\n                      <i class=\"entypo-feather \"></i> 4\r\n                    </div>\r\n                    <div class=\"timeline-label\">\r\n                      <div class=\"media \">\r\n                        <div class=\"media-left\">\r\n                          <a href=\"https://github.com/oasp/oasp4js/wiki/Tutorial-Introduction\">\r\n                            <img class=\"d-flex align-self-start mr-3\" src=\"../../assets/images/read_icon.png\">\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"media-body\">\r\n                          <a href=\"https://github.com/oasp/oasp4js/wiki/Tutorial-Introduction\">\r\n                            <p>Read the tutorial <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\r\n                            </p>\r\n                          </a>\r\n                          <p class=\"description\">Read and follow the tutorial at OASP4js Client Tutorial\r\n                          </p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n                <article class=\"timeline-entry \">\r\n                  <div class=\"timeline-entry-inner \">\r\n                    <div class=\"timeline-icon \">\r\n                      <i class=\"entypo-feather \"></i> 5\r\n                    </div>\r\n                    <div class=\"timeline-label \">\r\n                      <div class=\"media \">\r\n                        <div class=\"media-left \">\r\n                          <img class=\"d-flex align-self-start mr-3 \" src=\"../../assets/images/help_icon.png \">\r\n                        </div>\r\n                        <div class=\"media-body \">\r\n                          <p>Help making OASP even better</p>\r\n                          <p class=\"description \">Remember this is a joint effort and you are welcome to contribute.</p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab title=\"Roadmap \">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"markdown tl roadmap \">\r\n              <markdown [path]=\" '../../assets/content/OASP4JS/roadmap/Roadmap.md' \"></markdown>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n      </ngb-tabset>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/oasp4-js/oasp4-js.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OASP4JSComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OASP4JSComponent = (function () {
    function OASP4JSComponent() {
    }
    OASP4JSComponent.prototype.ngOnInit = function () {
    };
    return OASP4JSComponent;
}());
OASP4JSComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-oasp4-js',
        template: __webpack_require__("../../../../../src/app/oasp4-js/oasp4-js.component.html"),
        styles: [__webpack_require__("../../../../../src/app/oasp4-js/oasp4-js.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OASP4JSComponent);

//# sourceMappingURL=oasp4-js.component.js.map

/***/ }),

/***/ "../../../../../src/app/oasp4-net/oasp4-net.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/oasp4-net/oasp4-net.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/oasp4-net/oasp4-net.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OASP4NETComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OASP4NETComponent = (function () {
    function OASP4NETComponent() {
    }
    OASP4NETComponent.prototype.ngOnInit = function () {
    };
    return OASP4NETComponent;
}());
OASP4NETComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-oasp4-net',
        template: __webpack_require__("../../../../../src/app/oasp4-net/oasp4-net.component.html"),
        styles: [__webpack_require__("../../../../../src/app/oasp4-net/oasp4-net.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OASP4NETComponent);

//# sourceMappingURL=oasp4-net.component.js.map

/***/ }),

/***/ "../../../../../src/app/slider/slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.slider {\r\n  background: url(" + __webpack_require__("../../../../../src/assets/images/testimonials.png") + ") center center no-repeat;\r\n  background-size: contain;\r\n  background-color: #293645;\r\n  background-position-y: 350px;\r\n  ;\r\n  padding: 10% 0% 5% 0%;\r\n}\r\n\r\n.testimonials {\r\n  background: url(" + __webpack_require__("../../../../../src/assets/images/comillas.png") + ") center no-repeat;\r\n  background-size: 30%;\r\n  background-position-x: 300px;\r\n  background-position-y: 0px;\r\n  height: 190px;\r\n  margin-top: 40px;\r\n  margin-bottom: 90px;\r\n  margin-right:0px;\r\n}\r\n\r\n.nomargin {\r\n  margin-right: 0px;\r\n}\r\n\r\n.slider img {\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 50%\r\n}\r\n\r\n.carouselExampleSlidesOnly {\r\n  margin-top: 10%;\r\n  margin-bottom: 10%;\r\n}\r\n\r\n.slider h3 {\r\n  color: white;\r\n  font-family: Montserrat-Regular;\r\n}\r\n\r\n.slider .carousel-indicators {\r\n  margin-top: 0px;\r\n  top: 170px;\r\n}\r\n\r\n.slider .carousel-indicators li {\r\n  max-width: 15px;\r\n  height: 15px;\r\n  border: 2px solid white;\r\n  border-radius: 50%;\r\n  background-color: transparent;\r\n}\r\n\r\n.slider .carousel-indicators .active {\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n.slider p {\r\n  color: white;\r\n  font-family: Montserrat-Extralight;\r\n  font-size: 12pt;\r\n  text-align: left;\r\n}\r\n\r\n.slider .carousel-caption {\r\n  text-align: left;\r\n  left: 180px;\r\n  top: 0px;\r\n}\r\n\r\n.slider .right.carousel-control-next,\r\n.slider .left.carousel-control-prev {\r\n  display: none;\r\n}\r\n\r\n.slider * {\r\n  outline: none;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  p {\r\n    margin-left: auto !important;\r\n    margin-right: auto !important;\r\n    display: block !important\r\n  }\r\n  .slider {\r\n    text-align: center;\r\n  }\r\n  .nomargin {\r\n    margin-right: 0px;\r\n  }\r\n  .testimonials{margin-bottom: 113px;}\r\n\r\n  .slider>img {\r\n    display: inline-block;\r\n  }\r\n  .slider .carousel-caption {\r\n    top: auto;\r\n    left: auto;\r\n    width: 100%;\r\n    position: relative;\r\n    float: none;\r\n    right: auto;\r\n  }\r\n  .slider img {\r\n    text-align: center;\r\n    margin: 10px auto!important;\r\n  }\r\n  .slider p,\r\n  .slider h3 {\r\n    text-align: center;\r\n    width: 100%;\r\n  }\r\n  .carousel-testimonial .carousel-indicators[_ngcontent-c12] {\r\n    margin-top: 0px;\r\n    position: relative;\r\n    top: 0px;\r\n  }\r\n  .carousel-item.active {\r\n    display: block!important;\r\n  }\r\n  .slider .carousel-indicators {\r\n    top: -90px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid slider\">\r\n  <div class=\"row nomargin\">\r\n    <div class=\"testimonials col-lg-6 offset-lg-3 col-sm-10 offset-sm-1 col-12\">\r\n      <ngb-carousel>\r\n        <ng-template ngbSlide>\r\n          <img class=\"d-flex align-self-top mr-3\" src=\"../../assets/images/slider1.jpg\">\r\n          <div class=\"carousel-caption\">\r\n            <h3>Ruben Martinez</h3>\r\n            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <img class=\"d-flex align-self-top mr-3\" src=\"../../assets/images/slider2.jpg\">\r\n          <div class=\"carousel-caption\">\r\n            <h3>julie </h3>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n              rem ipsum dolor sit amerem ipsum dolor sit amerem ipsum dolor sit amerem ipsum dolor sit.</p>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <img class=\"d-flex align-self-top mr-3\" src=\"../../assets/images/slider3.jpg\">\r\n          <div class=\"carousel-caption\">\r\n            <h3>julietta</h3>\r\n            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-carousel>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    return SliderComponent;
}());
SliderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-slider',
        template: __webpack_require__("../../../../../src/app/slider/slider.component.html"),
        styles: [__webpack_require__("../../../../../src/app/slider/slider.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SliderComponent);

//# sourceMappingURL=slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/tab-panel/tab-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about {\r\n  background: url(" + __webpack_require__("../../../../../src/assets/images/on_the_flexible_solution.png") + ")0px 540px, url(" + __webpack_require__("../../../../../src/assets/images/corte_2.png") + ") -695px -300px;\r\n  background-size: 180%;\r\n  background-repeat: no-repeat;\r\n  box-shadow: 0 0 30px rgba(68, 68, 68, 0.3);\r\n  padding: 40px 0px 30px;\r\n  height: 700px;\r\n}\r\n\r\n.about .nav-pills .nav-item.show .nav-link,\r\n.nav-pills .nav-link.active {\r\n  color: #0275d8;\r\n  cursor: default;\r\n  background-color: rgba(255, 255, 255, 0.0);\r\n  border-bottom: 3px solid #0275d8;\r\n  border-radius: 0px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.about .nav-pills .nav-item.show .nav-link,\r\n.nav-pills .nav-link:hover {\r\n  color: #0275d8;\r\n  border-bottom: 3px solid #0275d8;\r\n  border-radius: 0px;\r\n}\r\n\r\n.about .nav-pills {\r\n  -webkit-box-pack: center !important;\r\n      -ms-flex-pack: center !important;\r\n          justify-content: center !important;\r\n}\r\n\r\nli {\r\n  padding: 0px 10px;\r\n}\r\n\r\n.gallery {\r\n  box-shadow: 0 0 30px rgba(68, 68, 68, 0.3);\r\n  background: #ddd;\r\n  border-radius: 3px;\r\n  margin-bottom: 40px;\r\n  background-color: #4bbdec;\r\n  text-align: center;\r\n}\r\n\r\n.gallery img {\r\n  width: auto;\r\n  height: 100px;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.desc {\r\n  background-color: white;\r\n  padding: 15px;\r\n  text-align: left;\r\n  padding-top: 23px;\r\n  font-family: Montserrat-medium;\r\n  color: #4bbdec;\r\n  height: 70px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n}\r\n\r\n.desc h5::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  margin: 0px 0px;\r\n  width: 2em;\r\n  background-color: #4bbdec;\r\n  height: 4px;\r\n  margin-top: 4px;\r\n}\r\n\r\n.carousel-indicators li {\r\n  border-radius: 50%;\r\n  padding: 0px;\r\n  max-width: 15px;\r\n  max-height: 15px;\r\n  width: 15px;\r\n  height: 15px;\r\n  border: 2px solid #4bbdec;\r\n  background-color: #4bbdec;\r\n  top: 40px;\r\n}\r\n\r\n.carousel-tab-panel .carousel-item p {\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.img-resp {\r\n  text-align: center;\r\n  box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, .15);\r\n}\r\n\r\n.about * {\r\n  outline: none;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .about {\r\n    height: auto;\r\n  }\r\n  .img-resp {\r\n    max-width: 100%;\r\n    height: auto;\r\n    margin-bottom: 10px;\r\n  }\r\n  .text-xs-center {\r\n    text-align: center;\r\n  }\r\n  .about .tabset {\r\n    display: none;\r\n  }\r\n  .gallery img {\r\n    width: auto;\r\n    height: 60px;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n  }\r\n  li {\r\n    text-align: center\r\n  }\r\n  .carousel-indicators .active {\r\n    background-color: transparent;\r\n  }\r\n  .carousel-indicators {\r\n    top: -80px;\r\n  }\r\n  .carousel-item.active {\r\n    display: block!important;\r\n  }\r\n  .carousel-caption {\r\n    color: #4bbdec;\r\n    font-family: Montserrat-Medium;\r\n    font-size: 12pt;\r\n    font-weight: 200;\r\n    top: auto;\r\n    left: auto;\r\n    width: 100%;\r\n    position: relative;\r\n    float: none;\r\n    right: auto;\r\n  }\r\n  .about .carousel-caption h3 {\r\n    color: #4bbdec;\r\n    font-family: Montserrat-Medium;\r\n    font-size: 12pt;\r\n  }\r\n  p {\r\n    text-align: center;\r\n    padding: 0px 10px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 992px) and (min-width: 768px) {\r\n  .about {\r\n    background-size: 200%;\r\n  }\r\n  .img-resp {\r\n    max-width: inherit;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tab-panel/tab-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid about\">\r\n  <div class=\"container\">\r\n    <ngb-tabset type=\"pills\" class=\"tabset\">\r\n      <ngb-tab title=\"One Flexible Solution\">\r\n        <ng-template ngbTabContent>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-1 col-md-4 col-6\">\r\n              <div class=\"gallery\">\r\n                <img src=\"../../assets/images/desktop_icon.png\" alt=\"Desktop apps\">\r\n                <div class=\"desc\">\r\n                  <h5>Desktop Apps</h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-1 col-md-4 col-6\">\r\n              <div class=\"gallery\">\r\n                <img src=\"../../assets/images/web_icon.png\" alt=\"Desktop apps\">\r\n                <div class=\"desc\">\r\n                  <h5>Web Apps</h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-1 col-md-4 col-6\">\r\n              <div class=\"gallery\">\r\n                <img src=\"../../assets/images/mobile_icon.png\" alt=\"Mobile apps\">\r\n                <div class=\"desc\">\r\n                  <h5>Mobile Apps</h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-1 col-md-4 col-6\">\r\n              <div class=\"gallery\">\r\n                <img src=\"../../assets/images/batch_icon.png\" alt=\"Desktop apps\">\r\n                <div class=\"desc\">\r\n                  <h5>Batch processing</h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-1 col-md-4 col-6\">\r\n              <div class=\"gallery\">\r\n                <img src=\"../../assets/images/integration_icon.png\" alt=\"Desktop apps\">\r\n                <div class=\"desc\">\r\n                  <h5>Integration</h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-1 col-md-4 col-6\">\r\n              <div class=\"gallery\">\r\n                <img src=\"../../assets/images/cloud_icon.png\" alt=\"Desktop apps\">\r\n                <div class=\"desc\">\r\n                  <h5>Cloud</h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-tab>\r\n      <ngb-tab title=\"Architecture Background\">\r\n        <ng-template ngbTabContent>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 col-12\">\r\n              <img class=\"img-resp\" src=\"../../assets/images/CG-architectureBackground.png\" alt=\"Arch.Back.\">\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-tab>\r\n      <ngb-tab title=\"Architecture Patterns\">\r\n        <ng-template ngbTabContent>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 col-12\">\r\n              <img class=\"img-resp\" src=\"../../assets/images/OASP-Layering.png\" alt=\"Arch.Patterns\">\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-tab>\r\n      <ngb-tab title=\"Used Technologies\">\r\n        <ng-template ngbTabContent>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 col-12\">\r\n              <img class=\"img-resp\" src=\"../../assets/images/OASP_technologies_used.png\" alt=\"Technologies used\">\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-tab>\r\n      <ngb-tab title=\"Ide\">\r\n        <ng-template ngbTabContent>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 col-12\">\r\n              <img class=\"img-resp\" src=\"../../assets/images/IntegratedIDE.png\" alt=\"IDE\">\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-tab>\r\n      <ngb-tab title=\"Examples\">\r\n        <ng-template ngbTabContent>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 col-12\">\r\n              <img class=\"img-resp\"src=\"../../assets/images/Example_Angular_Restaurant_Screen.png\" alt=\"Examples\">\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-tab>\r\n    </ngb-tabset>\r\n\r\n\r\n\r\n    <!--version movil-->\r\n    <div class=\"col-10 offset-1 d-sm-none d-md-none d-inline\">\r\n      <ngb-carousel>\r\n        <ng-template ngbSlide>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-1 col-md-4 col-6\">\r\n              <div class=\"gallery\">\r\n                <img src=\"../../assets/images/desktop_icon.png\" alt=\"Desktop apps\">\r\n                <div class=\"desc\">\r\n                  Desktop Apps\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-1 col-md-4 col-6\">\r\n              <div class=\"gallery\">\r\n                <img src=\"../../assets/images/web_icon.png\" alt=\"Desktop apps\">\r\n                <div class=\"desc\">\r\n                  Web Apps\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-1 col-md-4 col-6\">\r\n              <div class=\"gallery\">\r\n                <img src=\"../../assets/images/mobile_icon.png\" alt=\"Mobile apps\">\r\n                <div class=\"desc\">\r\n                  Mobile Apps\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-1 col-md-4 col-6\">\r\n              <div class=\"gallery\">\r\n                <img src=\"../../assets/images/batch_icon.png\" alt=\"Desktop apps\">\r\n                <div class=\"desc\">\r\n                  Batch processing\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-1 col-md-4 col-6\">\r\n              <div class=\"gallery\">\r\n                <img src=\"../../assets/images/integration_icon.png\" alt=\"Desktop apps\">\r\n                <div class=\"desc\">\r\n                  Integration\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-1 col-md-4 col-6\">\r\n              <div class=\"gallery\">\r\n                <img src=\"../../assets/images/cloud_icon.png\" alt=\"Desktop apps\">\r\n                <div class=\"desc\">\r\n                  Cloud\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n           <div class=\"carousel-caption\">\r\n            <h3>One flexible solution</h3>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 col-12\">\r\n              <img class=\"img-resp\" src=\"../../assets/images/CG-architectureBackground.png\" alt=\"Arch.Back.\">\r\n            </div>\r\n          </div>\r\n          <div class=\"carousel-caption\">\r\n            <h3>Architecture background</h3>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 col-12\">\r\n              <img class=\"img-resp\" src=\"../../assets/images/OASP-Layering.png\" alt=\"Arch.Patterns\">\r\n            </div>\r\n          </div>\r\n          <div class=\"carousel-caption\">\r\n            <h3>Architecture Patterns</h3>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 col-12\">\r\n              <img class=\"img-resp\" src=\"../../assets/images/OASP_technologies_used.png\" alt=\"Technologies used\">\r\n            </div>\r\n          </div>\r\n          <div class=\"carousel-caption\">\r\n            <h3>Used Technologies</h3>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 col-12\">\r\n              <img class=\"img-resp\" src=\"../../assets/images/IntegratedIDE.png\" alt=\"IDE\">\r\n            </div>\r\n          </div>\r\n          <div class=\"carousel-caption\">\r\n            <h3>IDE</h3>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 col-12\">\r\n              <img class=\"img-resp\" src=\"../../assets/images/Example_Angular_Restaurant_Screen.png\" alt=\"Examples\">\r\n            </div>\r\n          </div>\r\n          <div class=\"carousel-caption\">\r\n            <h3>Examples</h3>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-carousel>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/tab-panel/tab-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabPanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabPanelComponent = (function () {
    function TabPanelComponent() {
    }
    TabPanelComponent.prototype.ngOnInit = function () { };
    return TabPanelComponent;
}());
TabPanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-tab-panel',
        template: __webpack_require__("../../../../../src/app/tab-panel/tab-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tab-panel/tab-panel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TabPanelComponent);

//# sourceMappingURL=tab-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/terms-of-use/terms-of-use.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".p {\r\n    color: #9d9d9d;\r\n    font-family: Montserrat-Regular;\r\n    padding: 20px 0px;\r\n    font-size: 14pt;\r\n    font-style: normal;\r\n    font-weight: 100;\r\n    line-height: 18pt;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  .heading {\r\n    color: white;\r\n    font-family: montserrat-Regular;\r\n    font-size: 24pt;\r\n    line-height: 28pt;\r\n    font-weight: 500;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/terms-of-use/terms-of-use.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid OASP\">\n    <div class=\"container\">\n      <div class=\"row\" style=\"padding-top: 130px\">\n        <div class=\"col-lg-7 col-md-12 col-sm-7 col-12 text-xs-center\">    \n            <h1 class=\"heading\">OASP - Terms of Use</h1>      \n        </div>\n      </div>\n    </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div>    \n      <p>We provide the computer program of the Open Application Standard Platform, (hereinafter \"Software\") free of charge to download. Regarding this software the license terms of the <a href=\"http://www.apache.org/licenses/LICENSE-2.0.html\">Apache License 2.0</a> apply. The user shall be responsible to provide the required system environment for using the software. In accordance with the license terms of the Apache License 2.0, the user is entitled to use the Software in own / other projects (also commercial projects), provided that the copyright notice will be taken.</p>\n      <p>The software also requires open-source components of third-parties (providers), for which the respective open source license terms apply. The open-source components of third parties are not from us and must be licensed directly from the respective third party. The rights to use will be granted directly by the respective right owner to the extent of each relevant open source license terms. The user himself can download the desired third party component from the servers of the respective provider and install them in his own environment.</p>\n      <p>The open-source components of third-parties are shown in the following table including the respective and applicable license terms: \n      <table border=\"1\" width=\"100%\">\n          <tr>\n              <th>Platform</th>\n              <th>Component</th>\n              <th>License</th>\n              <th>Comment</th>\n            </tr>\n            <tr>\n              <td rowspan=\"33\"><a href=\"oasp4j_content/overview.html\">OASP4J</a></td>\n              <td><a href=\"http://spring.io\">springframework</a></td>\n              <td><a href=\"http://www.apache.org/licenses/LICENSE-2.0.html\">ASL 2.0</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://hibernate.org/\">hibernate</a></td>\n              <td><a href=\"http://hibernate.org/community/license/\">LGPL 2.1</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://www.querydsl.com/\">QueryDSL</a></td>\n              <td><a href=\"http://www.apache.org/licenses/LICENSE-2.0.html\">ASL 2.0</a></td>\n              <td>optional</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://cxf.apache.org/\">CXF</a></td>\n              <td><a href=\"http://www.apache.org/licenses/LICENSE-2.0.html\">ASL 2.0</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://wsdl4j.sourceforge.net/\">WSDL4J</a></td>\n              <td><a href=\"http://sourceforge.net/projects/wsdl4j/\">CPL 1.0</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://ws.apache.org/neethi/\">neethi</a></td>\n              <td><a href=\"http://www.apache.org/licenses/LICENSE-2.0.html\">ASL 2.0</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://wiki.fasterxml.com/JacksonHome\">jackson</a></td>\n              <td><a href=\"http://wiki.fasterxml.com/JacksonLicensing\">ASL 2.0</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://woodstox.codehaus.org/\">woodstox</a></td>\n              <td><a href=\"http://www.apache.org/licenses/LICENSE-2.0.html\">ASL 2.0</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://xerces.apache.org/xml-commons/components/resolver/\">xml-resolver</a></td>\n              <td><a href=\"http://xerces.apache.org/xml-commons/licenses.html\">ASL 2.0</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://xerces.apache.org/xml-commons/components/external/index.html\">xml-apis</a></td>\n              <td><a href=\"http://www.apache.org/licenses/LICENSE-1.1\">ASL 1.1</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"https://jaxb.java.net/\">jaxb</a></td>\n              <td><a href=\"https://glassfish.java.net/public/CDDL+GPL_1_1.html\">CDDL 1.1</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            \n            <tr>\n              <td><a href=\"http://www.slf4j.org/\">SLF4J</a></td>\n              <td><a href=\"http://www.slf4j.org/license.html\">MIT License</a></td>\n              <td>including <a href=\"http://www.slf4j.org/legacy.html#jclOverSLF4J\">jcl-over-slf4j</a></td>\n            </tr>\n            <tr>\n              <td><a href=\"http://logback.qos.ch/\">logback</a></td>\n              <td><a href=\"http://logback.qos.ch/license.html\">LGPL 2.1</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://www.antlr.org/\">antlr</a></td>\n              <td><a href=\"http://www.antlr.org/license.html\">BSD License</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://asm.ow2.org/\">asm</a></td>\n              <td><a href=\"http://asm.ow2.org/license.html\">BSD License</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"https://github.com/cglib/cglib/wiki\">cglib</a></td>\n              <td><a href=\"https://github.com/cglib/cglib/blob/master/LICENSE\">ASL 2.0</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://www.javassist.org/\">javassist</a></td>\n              <td><a href=\"http://www.apache.org/licenses/\">ASL</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://bridge-method-injector.infradna.com/bridge-method-injector/dependencies.html\">Bridge Method Injector</a></td>\n              <td><a href=\"http://bridge-method-injector.infradna.com/bridge-method-injector/license.html\">MIT License</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"https://github.com/wildfly/jandex\">jandex</a></td>\n              <td><a href=\"https://github.com/wildfly/jandex/blob/master/LICENSE.txt\">ASL 2.0</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"https://jstl.java.net/\">JSTL</a></td>\n              <td><a href=\"https://jstl.java.net/license.html\">CDDL 1.1</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"https://jcp.org/en/jsr/detail?id=250\">javax.annotation</a></td>\n              <td><a href=\"https://glassfish.java.net/public/CDDLv1.0.html\">CDDL 1.0</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"https://code.google.com/p/atinject/\">JSR330</a></td>\n              <td><a href=\"http://www.apache.org/licenses/LICENSE-2.0\">ASL 2.0</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"https://code.google.com/p/jsr-305/\">JSR305</a></td>\n              <td><a href=\"https://code.google.com/p/jsr-305/source/browse/trunk/ri/LICENSE\">BSD License</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://beanvalidation.org/\">JSR303 (BV)</a></td>\n              <td><a href=\"http://www.apache.org/licenses/LICENSE-2.0.txt\">ASL 2.0</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"https://java.net/projects/servlet-spec/\">servlet-api</a></td>\n              <td><a href=\"https://glassfish.java.net/nonav/public/CDDL+GPL.html\">CDDL 1.0</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"https://code.google.com/p/guava-libraries/\">guava</a></td>\n              <td><a href=\"http://www.apache.org/licenses/LICENSE-2.0\">ASL 2.0</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://commons.apache.org/\">apache commons</a></td>\n              <td><a href=\"http://www.apache.org/licenses/LICENSE-2.0\">ASL 2.0</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://dozer.sourceforge.net/\">dozer</a></td>\n              <td><a href=\"http://dozer.sourceforge.net/license.html\">ASL 2.0</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://flywaydb.org/\">flyway</a></td>\n              <td><a href=\"https://raw.githubusercontent.com/flyway/flyway/master/LICENSE\">ASL 2.0</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://m-m-m.sourceforge.net/\">mmm</a></td>\n              <td><a href=\"http://m-m-m.sourceforge.net/license.html\">ASL 2.0</a></td>\n              <td>&nbsp;</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://www.h2database.com/\">h2</a></td>\n              <td><a href=\"http://www.h2database.com/html/license.html\">EPL 1.0</a></td>\n              <td>optional, no code dependency, only for sample, to be replaced with real DB in productive use.</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://junit.org/\">JUnit</a></td>\n              <td><a href=\"http://opensource.org/licenses/eclipse-1.0.html\">EPL 1.0</a></td>\n              <td>optional, only used internally for testing.</td>\n            </tr>\n            <tr>\n              <td><a href=\"http://hamcrest.org/JavaHamcrest/\">hamcrest</a></td>\n              <td><a href=\"http://opensource.org/licenses/BSD-3-Clause\">BSD License</a></td>\n              <td>optional, only used internally for testing.</td>\n            </tr>\n            <tr>\n                <td rowspan=\"47\"><a href=\"./oasp4js_content/oasp4js_overview.html\">OASP4JS</a></td>\n                <td><a href=\"https://angularjs.org/\">AngularJS</a></td>\n                <td><a href=\"https://github.com/angular/angular.js/blob/master/LICENSE\">MIT License</a></td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td><a href=\"https://docs.angularjs.org/api/ngRoute\">angular-route</a></td>\n                <td><a href=\"https://github.com/angular/angular.js/blob/master/LICENSE\">MIT License</a></td>\n                <td>It is an AngularJS module.</td>\n            </tr>\n            <tr>\n                <td><a href=\"http://angular-translate.github.io/\">angular-translate</a></td>\n                <td><a href=\"https://github.com/angular-translate/angular-translate/blob/master/LICENSE\">MIT License</a></td>\n                <td>It is an AngularJS module.</td>\n            </tr>\n            <tr>\n                <td><a href=\"http://angular-translate.github.io/\">angular-translate-loader-partial</a></td>\n                <td><a href=\"https://github.com/angular-translate/angular-translate/blob/master/LICENSE\">MIT License</a></td>\n                <td>It is a plugin for angular-translate.</td>\n            </tr>\n            <tr>\n                <td><a href=\"http://angular-ui.github.io/bootstrap/\">Angular UI Bootstrap</a></td>\n                <td><a href=\"https://github.com/angular-ui/bootstrap/blob/master/LICENSE\">MIT License</a></td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/angular-ui/ui-select\">Angular UI-Select</a></td>\n                <td><a href=\"https://github.com/angular-ui/ui-select/blob/master/LICENSE\">MIT License</a></td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td><a href=\"http://getbootstrap.com/\">Bootstrap</a></td>\n                <td><a href=\"https://github.com/twbs/bootstrap/blob/master/LICENSE\">MIT License</a></td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td><a href=\"http://jasmine.github.io/\">Jasmine</a></td>\n                <td><a href=\"https://github.com/pivotal/jasmine/blob/master/MIT.LICENSE\">MIT License</a></td>\n                <td>Optional, only used for testing.</td>\n            </tr>\n            <tr>\n                <td><a href=\"http://modernizr.com/\">Modernizr</a></td>\n                <td><a href=\"http://modernizr.com/license/\">MIT License</a></td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/scottjehl/Respond\">Respond.js</a></td>\n                <td><a href=\"https://github.com/scottjehl/Respond/blob/master/LICENSE-MIT\">MIT License</a></td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/urish/angular-spinner\">angular-spinner</a></td>\n                <td><a href=\"https://github.com/urish/angular-spinner#license\">MIT License</a></td>\n                <td>Uses <a href=\"http://fgnass.github.io/spin.js/\">spin.js</a> (MIT License)</td>\n            </tr>\n            <tr>\n                <td><a\thref=\"https://github.com/tbosch/autofill-event\">Autofill event polyfill</a></td>\n                <td><a href=\"https://github.com/tbosch/autofill-event/blob/master/LICENSE\">MIT License</a></td>\n                <td>&nbsp;</td>\n            </tr>\n            <tr>\n                <td><a href=\"https://docs.angularjs.org/api/ngMock\">angular-mocks</a></td>\n                <td><a href=\"https://github.com/angular/angular.js/blob/master/LICENSE\">MIT License</a></td>\n                <td>Required for development, not required for production use. It is an AngularJS module.</td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/senchalabs/connect\">Connect</a></td>\n                <td><a href=\"https://github.com/senchalabs/connect/blob/master/LICENSE\">MIT License</a></td>\n                <td rowspan=\"34\">Required for development, not required for production use.</td>\n            </tr>\n            <tr>\n                <td><a href=\"http://gruntjs.com/\">Grunt</a></td>\n                <td><a href=\"https://github.com/gruntjs/grunt/blob/master/LICENSE-MIT\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/drewzboto/grunt-connect-proxy\">grunt-connect-proxy</a></td>\n                <td><a href=\"https://github.com/drewzboto/grunt-connect-proxy/blob/master/LICENSE-MIT\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/gruntjs/grunt-contrib-concat\">grunt-contrib-concat</a></td>\n                <td><a href=\"https://github.com/gruntjs/grunt-contrib-concat/blob/master/LICENSE-MIT\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/gruntjs/grunt-contrib-connect\">grunt-contrib-connect</a></td>\n                <td><a href=\"https://github.com/gruntjs/grunt-contrib-connect/blob/master/LICENSE-MIT\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/gruntjs/grunt-contrib-copy\">grunt-contrib-copy</a></td>\n                <td><a href=\"https://github.com/gruntjs/grunt-contrib-copy/blob/master/LICENSE-MIT\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/gruntjs/grunt-contrib-cssmin\">grunt-contrib-cssmin</a></td>\n                <td><a href=\"https://github.com/gruntjs/grunt-contrib-cssmin/blob/master/LICENSE-MIT\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/gruntjs/grunt-contrib-less\">grunt-contrib-less</a></td>\n                <td><a href=\"https://github.com/gruntjs/grunt-contrib-less/blob/master/LICENSE-MIT\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/gruntjs/grunt-contrib-uglify\">grunt-contrib-uglify</a></td>\n                <td><a href=\"https://github.com/gruntjs/grunt-contrib-uglify/blob/master/LICENSE-MIT\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/gruntjs/grunt-contrib-watch\">grunt-contrib-watch</a></td>\n                <td><a href=\"https://github.com/gruntjs/grunt-contrib-watch/blob/master/LICENSE-MIT\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/psyrendust/grunt-eol\">grunt-eol</a></td>\n                <td><a href=\"https://github.com/psyrendust/grunt-eol/blob/master/LICENSE-MIT\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/yeoman/grunt-filerev\">grunt-filerev</a></td>\n                <td><a href=\"https://github.com/yeoman/grunt-filerev#license\">BSD license</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/karlgoldstein/grunt-html2js\">grunt-html2js</a></td>\n                <td><a href=\"https://github.com/karlgoldstein/grunt-html2js/blob/master/LICENSE-MIT\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/stephenmathieson/grunt-jslint\">grunt-jslint</a></td>\n                <td><a href=\"https://github.com/stephenmathieson/grunt-jslint/blob/master/LICENSE-WTFPL\">WTFPL license</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/karma-runner/grunt-karma\">grunt-karma</a></td>\n                <td><a href=\"https://github.com/karma-runner/grunt-karma/blob/master/LICENSE\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/mzgol/grunt-ng-annotate\">grunt-ng-annotate</a></td>\n                <td><a href=\"https://github.com/mzgol/grunt-ng-annotate#license\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/dciccale/grunt-processhtml\">grunt-processhtml</a></td>\n                <td><a href=\"https://github.com/dciccale/grunt-processhtml/blob/master/LICENSE-MIT\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/skhatri/grunt-sonar-runner\">grunt-sonar-runner</a></td>\n                <td><a href=\"https://github.com/skhatri/grunt-sonar-runner/blob/master/LICENSE-MIT\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/Ensighten/grunt-spritesmith\">grunt-spritesmith</a></td>\n                <td><a href=\"https://github.com/Ensighten/grunt-spritesmith/blob/master/LICENSE-MIT\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/yeoman/grunt-usemin\">grunt-usemin</a></td>\n                <td><a href=\"https://github.com/yeoman/grunt-usemin/blob/master/LICENSE\">BSD license</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/stephenplusplus/grunt-wiredep\">grunt-wiredep</a></td>\n                <td><a href=\"https://github.com/stephenplusplus/grunt-wiredep/blob/master/LICENSE-MIT\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/shootaroo/jit-grunt\">jit-grunt</a></td>\n                <td><a href=\"https://github.com/shootaroo/jit-grunt#license\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/karma-runner/karma-chrome-launcher\">karma-chrome-launcher</a></td>\n                <td><a href=\"https://github.com/karma-runner/karma-chrome-launcher/blob/master/LICENSE\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/karma-runner/karma-coverage\">karma-coverage</a></td>\n                <td><a href=\"https://github.com/karma-runner/karma-coverage/blob/master/LICENSE\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/karma-runner/karma-jasmine\">karma-jasmine</a></td>\n                <td><a href=\"https://github.com/karma-runner/karma-jasmine/blob/master/LICENSE\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/karma-runner/karma-junit-reporter\">karma-junit-reporter</a></td>\n                <td><a href=\"https://github.com/karma-runner/karma-junit-reporter/blob/master/LICENSE\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/karma-runner/karma-phantomjs-launcher\">karma-phantomjs-launcher</a></td>\n                <td><a href=\"https://github.com/karma-runner/karma-phantomjs-launcher/blob/master/LICENSE\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/sindresorhus/load-grunt-tasks\">load-grunt-tasks</a></td>\n                <td><a href=\"https://github.com/sindresorhus/load-grunt-tasks#license\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://lodash.com/\">Lo-Dash</a></td>\n                <td><a href=\"https://github.com/lodash/lodash/blob/master/LICENSE.txt\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"http://stringjs.com/\">string.js</a></td>\n                <td><a href=\"http://stringjs.com/#license\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/sindresorhus/time-grunt\">time-grunt</a></td>\n                <td><a href=\"https://github.com/sindresorhus/time-grunt/blob/master/license\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/taptapship/wiredep\">wiredep</a></td>\n                <td><a href=\"https://github.com/taptapship/wiredep#license\">MIT License</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"https://github.com/chevex/yargs\">yargs</a></td>\n                <td><a href=\"https://github.com/chevex/yargs/blob/master/LICENSE\">MIT/X11 license</a></td>\n            </tr>\n            <tr>\n                <td><a href=\"http://bower.io/\">Bower</a></td>\n                <td><a href=\"https://github.com/bower/bower/blob/master/LICENSE\">MIT License</a></td>\n            </tr>\n      </table>\n      <p>We indicate that the software is offered free of charge, therefore the liability and warranty provisions of the donation law shall apply.</p>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/terms-of-use/terms-of-use.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsOfUseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsOfUseComponent = (function () {
    function TermsOfUseComponent() {
    }
    TermsOfUseComponent.prototype.ngOnInit = function () {
    };
    return TermsOfUseComponent;
}());
TermsOfUseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-terms-of-use',
        template: __webpack_require__("../../../../../src/app/terms-of-use/terms-of-use.component.html"),
        styles: [__webpack_require__("../../../../../src/app/terms-of-use/terms-of-use.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TermsOfUseComponent);

//# sourceMappingURL=terms-of-use.component.js.map

/***/ }),

/***/ "../../../../../src/app/try-it/try-it.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tryit {\r\n  background: url(" + __webpack_require__("../../../../../src/assets/images/img.png") + ") center center no-repeat;\r\n  background-size: cover;\r\n  padding-top: 6em;\r\n  padding-bottom: 6em;\r\n}\r\n\r\n/**markdown styles**/\r\n\r\n.tryit .markdown h2 {\r\n  color: #ffffff;\r\n  font-family: Montserrat-Medium;\r\n  font-size: 20pt;\r\n}\r\n\r\n.tryit .markdown a {\r\n  border-color: #FFFFFF;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.tryit .markdown a:hover {\r\n  border-color: #FFFFFF;\r\n  color: #4bbdec;\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n.tryit .markdown h2::after {\r\n  display: none;\r\n}\r\n\r\n\r\n/**Media query*/\r\n\r\n@media (max-width: 767px) {\r\n  .tryit {\r\n    padding-bottom: 2em;\r\n    padding-top: 3em;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/try-it/try-it.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tryit\">\r\n  <div class=\"container text-center\">\r\n    <div class=\"row\" >\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"markdown markdown-center\">\r\n          <markdown [path]=\"'../../assets/content/OASP/try-it.md'\"></markdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/try-it/try-it.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TryItComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TryItComponent = (function () {
    function TryItComponent() {
    }
    TryItComponent.prototype.ngOnInit = function () {
    };
    return TryItComponent;
}());
TryItComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-try-it',
        template: __webpack_require__("../../../../../src/app/try-it/try-it.component.html"),
        styles: [__webpack_require__("../../../../../src/app/try-it/try-it.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TryItComponent);

//# sourceMappingURL=try-it.component.js.map

/***/ }),

/***/ "../../../../../src/app/university-activities/university-activities.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".universityActivities {\r\n  background: url(" + __webpack_require__("../../../../../src/assets/images/university.png") + ") center center no-repeat;\r\n  background-color: white;\r\n  background-size: contain;\r\n  background-position-y: 250px;\r\n  padding-bottom: 4em;\r\n  padding-top: 120px;\r\n}\r\n\r\n.btn-primary {\r\n  color: #4bbdec;\r\n  background-color: transparent;\r\n  border-color: #4bbdec;\r\n  border-top-color: #4bbdec;\r\n  border-right-color: #4bbdec;\r\n  border-bottom-color: #4bbdec;\r\n  border-left-color: #4bbdec;\r\n  border-radius: 72px;\r\n  margin-bottom: 100%;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n  padding-top: 14px;\r\n  padding-bottom: 14px;\r\n  border-radius: 72px;\r\n  font-size: 12pt;\r\n  border-width: 2px;\r\n  font-family: Montserrat-Regular;\r\n}\r\n\r\nhr {\r\n  width: 15%;\r\n  background-color: #4bbdec;\r\n  height: 3px;\r\n}\r\n\r\nh2 {\r\n  color: #585657;\r\n  font-family: Montserrat-Medium;\r\n  font-size: 23pt;\r\n  margin-top: 25%;\r\n}\r\n\r\np {\r\n  color: #9d9d9d;\r\n  font-family: Montserrat-Regular;\r\n  font-size: 12pt;\r\n  font-style: italic;\r\n  padding: 20px 0px;\r\n}\r\n\r\n@media only screen and (max-width: 1199px) and (min-width: 992px) {\r\n  .universityActivities {\r\n    background-position-y: 340px;\r\n    padding-top: 80px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 998px) and (min-width: 768px) {\r\n  .universityActivities {\r\n    background-position-y: 394px;\r\n    padding-top: 80px;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .universityActivities {\r\n    background-position-y: 450px;\r\n    padding-top: 80px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/university-activities/university-activities.component.html":
/***/ (function(module, exports) {

module.exports = "<div id class=\"container-fluid universityActivities\">\r\n  <div class=\"container text-center\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 col-sm-3\"></div>\r\n      <div class=\"col-md-6 col-sm-6 col-12\">\r\n        <div class=\"markdown markdown-center\">\r\n          <markdown [path]=\"'../../assets/content/OASP/university-activities.md'\"></markdown>\r\n        </div>\r\n        <app-ngb-modal></app-ngb-modal>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/university-activities/university-activities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniversityActivitiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UniversityActivitiesComponent = (function () {
    function UniversityActivitiesComponent() {
    }
    UniversityActivitiesComponent.prototype.ngOnInit = function () {
    };
    return UniversityActivitiesComponent;
}());
UniversityActivitiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-university-activities',
        template: __webpack_require__("../../../../../src/app/university-activities/university-activities.component.html"),
        styles: [__webpack_require__("../../../../../src/app/university-activities/university-activities.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UniversityActivitiesComponent);

//# sourceMappingURL=university-activities.component.js.map

/***/ }),

/***/ "../../../../../src/app/used-technologies/used-technologies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".usedTechnologies{\r\n    background-color: #ffffff;\r\n    box-shadow:inset 0px 7px 20px rgba(68,68,68,0.3)}\r\n.usedTechnologies .logos-tech{\r\n    padding: 50px 0px;\r\n}\r\n.usedTechnologies .logos-tech a{\r\n    text-align: center;\r\n    width: 100%;\r\n    display: inline-block;\r\n}\r\n.usedTechnologies .logos-tech a img{\r\n    padding: 50px 0px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .usedTechnologies .logos-tech a img{\r\n        padding: 50px 15px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/used-technologies/used-technologies.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid usedTechnologies\">\r\n  <div class=\"container\">\r\n    <div class=\"row logos-tech\">\r\n      <div class=\"col-md-3 col-sm-6 col-6\">\r\n        <a href=\"https://spring.io/\" target=\"_blank\"><img alt=\"spring-logo\" src=\"../../assets/logos/spring_logo.png\"></a>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-12  col-6\">\r\n        <a href=\"https://www.java.com/\" target=\"_blank\"><img alt=\"javaee-logo\" src=\"../../assets/logos/java_ee.png\"></a>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-12  col-6\">\r\n        <a href=\"http://projects.spring.io/spring-boot/\" target=\"_blank\"><img alt=\"springboot-logo\" src=\"../../assets/logos/boot_logo.png\"></a>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-12  col-6\">\r\n        <a href=\"http://www.querydsl.com/\" target=\"_blank\"><img alt=\"querydsl-logo\" src=\"../../assets/logos/query_logo.png\"></a>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-12  col-6\">\r\n        <a href=\"http://flywaydb.org/\" target=\"_blank\"><img alt=\"flyway-logo\" src=\"../../assets/logos/flyway_logo.png\"></a>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-12  col-6\">\r\n        <a href=\"https://angularjs.org/\" target=\"_blank\"><img alt=\"angularjs-logo\" src=\"../../assets/logos/angular_logo.svg.png\"></a>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-12  col-6\">\r\n        <a href=\"http://maven.apache.org/\" target=\"_blank\"><img alt=\"maven-logo\" src=\"../../assets/logos/maven_logo.svg.png\"></a>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-12  col-6\">\r\n        <a href=\"http://cxf.apache.org/\" target=\"_blank\"><img alt=\"apache-logo\" src=\"../../assets/logos/apache_logo.png\"></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/used-technologies/used-technologies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsedTechnologiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsedTechnologiesComponent = (function () {
    function UsedTechnologiesComponent() {
    }
    UsedTechnologiesComponent.prototype.ngOnInit = function () {
    };
    return UsedTechnologiesComponent;
}());
UsedTechnologiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-used-technologies',
        template: __webpack_require__("../../../../../src/app/used-technologies/used-technologies.component.html"),
        styles: [__webpack_require__("../../../../../src/app/used-technologies/used-technologies.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UsedTechnologiesComponent);

//# sourceMappingURL=used-technologies.component.js.map

/***/ }),

/***/ "../../../../../src/assets/fonts/Montserrat-Bold.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Montserrat-Bold.a8de8ffe262db7e277de.ttf";

/***/ }),

/***/ "../../../../../src/assets/fonts/Montserrat-Medium.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Montserrat-Medium.5f797490f806b3b22929.ttf";

/***/ }),

/***/ "../../../../../src/assets/fonts/Montserrat-Regular.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Montserrat-Regular.f7213526ec9296ff4342.ttf";

/***/ }),

/***/ "../../../../../src/assets/images/capgemini.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "capgemini.e2f627c6a24f85a956ae.png";

/***/ }),

/***/ "../../../../../src/assets/images/comillas.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/assets/images/corte_2.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "corte_2.3b3ff4230c02447e92f5.png";

/***/ }),

/***/ "../../../../../src/assets/images/corte_4.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "corte_4.0c40c70611e0cc9749e1.png";

/***/ }),

/***/ "../../../../../src/assets/images/getting_started.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "getting_started.282a12b918f712653649.png";

/***/ }),

/***/ "../../../../../src/assets/images/github.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "github.474aa88ad1432269c893.png";

/***/ }),

/***/ "../../../../../src/assets/images/img.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img.61e94ee30f18d8e85521.png";

/***/ }),

/***/ "../../../../../src/assets/images/img_1.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img_1.15c9dcff69f70a30e389.png";

/***/ }),

/***/ "../../../../../src/assets/images/logo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logo.4d37ab5d5f8f96e4d544.png";

/***/ }),

/***/ "../../../../../src/assets/images/on_the_flexible_solution.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "on_the_flexible_solution.a2445c672cae8bb0348b.png";

/***/ }),

/***/ "../../../../../src/assets/images/testimonials.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "testimonials.9585486bc2d962811715.png";

/***/ }),

/***/ "../../../../../src/assets/images/university.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "university.afe2df04c5af85ff3910.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map