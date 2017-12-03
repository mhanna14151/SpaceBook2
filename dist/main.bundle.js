webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

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

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_nasa_test_nasa_test_component__ = __webpack_require__("../../../../../src/app/components/nasa-test/nasa-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_nasa_picture_test_nasa_picture_test_component__ = __webpack_require__("../../../../../src/app/components/nasa-picture-test/nasa-picture-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nasa_picture_details_nasa_picture_details_component__ = __webpack_require__("../../../../../src/app/components/nasa-picture-details/nasa-picture-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__space_banner_default_space_banner_default_component__ = __webpack_require__("../../../../../src/app/space-banner-default/space-banner-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_post_service_client__ = __webpack_require__("../../../../../src/app/services/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_nasa_service_client__ = __webpack_require__("../../../../../src/app/services/nasa.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_cb_service_client__ = __webpack_require__("../../../../../src/app/services/cb.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_apod_apod_component__ = __webpack_require__("../../../../../src/app/components/apod/apod.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_front_page_front_page_component__ = __webpack_require__("../../../../../src/app/components/user/front-page/front-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_apodarchive_apodarchive_component__ = __webpack_require__("../../../../../src/app/components/apodarchive/apodarchive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_post_post_component__ = __webpack_require__("../../../../../src/app/components/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_post_list_post_list_component__ = __webpack_require__("../../../../../src/app/components/post-list/post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_user_public_profile_public_profile_component__ = __webpack_require__("../../../../../src/app/components/user/public-profile/public-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_create_post_create_post_component__ = __webpack_require__("../../../../../src/app/components/create-post/create-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_search_search_profile_search_profile_component__ = __webpack_require__("../../../../../src/app/components/search/search-profile/search-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_search_search_nasa_search_nasa_component__ = __webpack_require__("../../../../../src/app/components/search/search-nasa/search-nasa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_celestial_body_celestial_body_component__ = __webpack_require__("../../../../../src/app/components/celestial-body/celestial-body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_search_search_cb_search_cb_component__ = __webpack_require__("../../../../../src/app/components/search/search-cb/search-cb.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_nasa_test_nasa_test_component__["a" /* NasaTestComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_nasa_picture_test_nasa_picture_test_component__["a" /* NasaPictureTestComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_user_front_page_front_page_component__["a" /* FrontPageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_nasa_picture_details_nasa_picture_details_component__["a" /* NasaPictureDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_apod_apod_component__["a" /* ApodComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_apodarchive_apodarchive_component__["a" /* ApodarchiveComponent */],
            __WEBPACK_IMPORTED_MODULE_9__space_banner_default_space_banner_default_component__["a" /* SpaceBannerDefaultComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_post_list_post_list_component__["a" /* PostListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_user_public_profile_public_profile_component__["a" /* PublicProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_create_post_create_post_component__["a" /* CreatePostComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_search_search_profile_search_profile_component__["a" /* SearchProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_search_search_nasa_search_nasa_component__["a" /* SearchNasaComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_celestial_body_celestial_body_component__["a" /* CelestialBodyComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_search_search_cb_search_cb_component__["a" /* SearchCbComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_nasa_service_client__["a" /* NasaServiceClient */], __WEBPACK_IMPORTED_MODULE_10__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_11__services_post_service_client__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_13__services_cb_service_client__["a" /* CBService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_nasa_test_nasa_test_component__ = __webpack_require__("../../../../../src/app/components/nasa-test/nasa-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_nasa_picture_test_nasa_picture_test_component__ = __webpack_require__("../../../../../src/app/components/nasa-picture-test/nasa-picture-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_front_page_front_page_component__ = __webpack_require__("../../../../../src/app/components/user/front-page/front-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_nasa_picture_details_nasa_picture_details_component__ = __webpack_require__("../../../../../src/app/components/nasa-picture-details/nasa-picture-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_apod_apod_component__ = __webpack_require__("../../../../../src/app/components/apod/apod.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_apodarchive_apodarchive_component__ = __webpack_require__("../../../../../src/app/components/apodarchive/apodarchive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_post_post_component__ = __webpack_require__("../../../../../src/app/components/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_post_list_post_list_component__ = __webpack_require__("../../../../../src/app/components/post-list/post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_public_profile_public_profile_component__ = __webpack_require__("../../../../../src/app/components/user/public-profile/public-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_create_post_create_post_component__ = __webpack_require__("../../../../../src/app/components/create-post/create-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_celestial_body_celestial_body_component__ = __webpack_require__("../../../../../src/app/components/celestial-body/celestial-body.component.ts");















var APP_ROUTES = [
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_11__components_user_public_profile_public_profile_component__["a" /* PublicProfileComponent */] },
    { path: 'user/:uid/edit', component: __WEBPACK_IMPORTED_MODULE_8__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'searchAsteroids', component: __WEBPACK_IMPORTED_MODULE_1__components_nasa_test_nasa_test_component__["a" /* NasaTestComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_user_front_page_front_page_component__["a" /* FrontPageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_front_page_front_page_component__["a" /* FrontPageComponent */] },
    { path: 'nasa-pic', component: __WEBPACK_IMPORTED_MODULE_2__components_nasa_picture_test_nasa_picture_test_component__["a" /* NasaPictureTestComponent */] },
    { path: 'user/:uid/search', component: __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__["a" /* SearchComponent */] },
    { path: 'APOD', component: __WEBPACK_IMPORTED_MODULE_5__components_apod_apod_component__["a" /* ApodComponent */] },
    { path: 'APOD/Archive', component: __WEBPACK_IMPORTED_MODULE_6__components_apodarchive_apodarchive_component__["a" /* ApodarchiveComponent */] },
    { path: 'nasa-pic/:imgid/details', component: __WEBPACK_IMPORTED_MODULE_4__components_nasa_picture_details_nasa_picture_details_component__["a" /* NasaPictureDetailsComponent */] },
    { path: 'testPostComponent', component: __WEBPACK_IMPORTED_MODULE_9__components_post_post_component__["a" /* PostComponent */] },
    { path: 'testListComponent', component: __WEBPACK_IMPORTED_MODULE_10__components_post_list_post_list_component__["a" /* PostListComponent */] },
    { path: 'cb/:cbid', component: __WEBPACK_IMPORTED_MODULE_14__components_celestial_body_celestial_body_component__["a" /* CelestialBodyComponent */] },
    { path: 'user/:uid/posts/new', component: __WEBPACK_IMPORTED_MODULE_12__components_create_post_create_post_component__["a" /* CreatePostComponent */] }
    // so on
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/apod/apod.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/apod/apod.component.html":
/***/ (function(module, exports) {

module.exports = "<app-space-banner-default></app-space-banner-default>\r\n<h1 class = \"jj-font\">Astronomy Picture Of The Day</h1>\r\n<button> <span (click)=\"goToAPODArchive()\">APOD Archive</span> </button>\r\n<img src=\"{{url}}\" width = 100%/>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/apod/apod.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApodComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_nasa_service_client__ = __webpack_require__("../../../../../src/app/services/nasa.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApodComponent = (function () {
    function ApodComponent(router, nasaService) {
        this.router = router;
        this.nasaService = nasaService;
    }
    ApodComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nasaService.getAPOD()
            .subscribe(function (result) {
            _this.result = result;
            _this.gotResult = true;
            _this.url = result.hdurl;
            console.log(result);
        });
    };
    ApodComponent.prototype.goTofindAsteroid = function () {
        this.router.navigate(['/searchAsteroids']);
    };
    ApodComponent.prototype.goToImageSearch = function () {
        this.router.navigate(['/nasa-pic']);
    };
    ApodComponent.prototype.goToAPODArchive = function () {
        this.router.navigate(['/APOD/Archive']);
    };
    return ApodComponent;
}());
ApodComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-apod',
        template: __webpack_require__("../../../../../src/app/components/apod/apod.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/apod/apod.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_nasa_service_client__["a" /* NasaServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_nasa_service_client__["a" /* NasaServiceClient */]) === "function" && _b || Object])
], ApodComponent);

var _a, _b;
//# sourceMappingURL=apod.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/apodarchive/apodarchive.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/apodarchive/apodarchive.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  apodarchive works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/apodarchive/apodarchive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApodarchiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__ = __webpack_require__("../../../../../src/app/services/nasa.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApodarchiveComponent = (function () {
    function ApodarchiveComponent(router, nasaService) {
        this.router = router;
        this.nasaService = nasaService;
    }
    ApodarchiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nasaService.getAPOD()
            .subscribe(function (result) {
            _this.result = result;
            _this.gotResult = true;
            _this.url = result.hdurl;
            console.log(result);
        });
    };
    ApodarchiveComponent.prototype.goTofindAsteroid = function () {
        this.router.navigate(['/searchAsteroids']);
    };
    ApodarchiveComponent.prototype.goToImageSearch = function () {
        this.router.navigate(['/nasa-pic']);
    };
    ApodarchiveComponent.prototype.goToAPODArchive = function () {
        this.router.navigate(['/APOD/Archive']);
    };
    return ApodarchiveComponent;
}());
ApodarchiveComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-apodarchive',
        template: __webpack_require__("../../../../../src/app/components/apodarchive/apodarchive.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/apodarchive/apodarchive.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__["a" /* NasaServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__["a" /* NasaServiceClient */]) === "function" && _b || Object])
], ApodarchiveComponent);

var _a, _b;
//# sourceMappingURL=apodarchive.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/celestial-body/celestial-body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mb-search-result-box {\r\n  padding: 5px;\r\n  background: lightgray;\r\n  margin: 5px;\r\n}\r\n.mb-img-pad {\r\n  padding: 7px;\r\n}\r\n\r\n.mb-img-max {\r\n  max-height: 200px;\r\n  max-width: 200px;\r\n}\r\n\r\n.jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n}\r\n\r\n.navbar .navbar-header .navbar-brand .jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n  font-size: xx-large;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/celestial-body/celestial-body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <img class=\"jj-img-padding mb-img-max\" src=\"{{picture}}\">\r\n    <div class=\"jj-container\">\r\n      <h4><b>{{name}} {{region}} {{type}}</b></h4>\r\n    </div>\r\n  <button class=\"btn btn-warning btn-block jj-button-hover\"\r\n          aria-pressed=\"true\"\r\n          [routerLink]=\"['/login']\">\r\n    Logout\r\n  </button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/celestial-body/celestial-body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CelestialBodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cb_service_client__ = __webpack_require__("../../../../../src/app/services/cb.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CelestialBodyComponent = (function () {
    function CelestialBodyComponent(router, activatedRoute, cbService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cbService = cbService;
    }
    CelestialBodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.cbId = params['cbid'];
            _this.cbService.findCBbyId(_this.cbId)
                .subscribe(function (cb) {
                var f = [];
                _this.name = cb['name'];
                _this.region = cb['region'];
                _this.picture = cb['picture'];
            });
        });
    };
    return CelestialBodyComponent;
}());
CelestialBodyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-celestial-body',
        template: __webpack_require__("../../../../../src/app/components/celestial-body/celestial-body.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/celestial-body/celestial-body.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_cb_service_client__["a" /* CBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cb_service_client__["a" /* CBService */]) === "function" && _c || Object])
], CelestialBodyComponent);

var _a, _b, _c;
//# sourceMappingURL=celestial-body.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-post/create-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "moh-padding {\r\n  margin: 100px\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-post/create-post.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<app-space-banner-default></app-space-banner-default>-->\r\n\r\n\r\n<div class = \"container-fluid\">\r\n  <!--<label>Original Poster</label>-->\r\n  <!--<div class = \"form-control\">{{usernameOfPoster}}</div>-->\r\n  <label>Text</label>\r\n  <input class=\"form-control\"\r\n         type=\"text\"\r\n         id=\"text\"\r\n         placeholder=\"Text regarding post\"\r\n         [(ngModel)] =\"text\" name =\"text\">\r\n  <!--<label>Images</label>-->\r\n  <!--<input type=\"url\"-->\r\n         <!--class='form-control'-->\r\n         <!--placeholder=\"https://res.cloudinary.com/demo/image/upload/sample.jpg\"-->\r\n         <!--[(ngModel)] = \"url\" name = \"url\">-->\r\n  <!--<label>Width</label>-->\r\n  <!--<input type=\"text\" class=\"form-control\"-->\r\n         <!--placeholder=\"1-100%\"-->\r\n         <!--id = \"width\"-->\r\n         <!--[(ngModel)] = \"width\" name = \"width\">-->\r\n  <!--<label>Tags</label>-->\r\n  <!--<input type=\"text\" class = \"form-control\" id = \"tags\"-->\r\n         <!--[(ngModel)] = \"tags\" name = \"tags\">-->\r\n  <!--<label>Upload</label>-->\r\n  <!--<form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">-->\r\n  <!--<input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>-->\r\n  <!--<input  name=\"widgetId\" value=\"{{widgetID}}\"   style=\"display: none\"/>-->\r\n  <!--<input  name=\"websiteId\" value=\"{{websiteID}}\"   style=\"display: none\"/>-->\r\n  <!--<input  name=\"pageId\" value=\"{{pageID}}\"   style=\"display: none\"/>-->\r\n  <!--<input  name=\"userId\" value=\"{{userID}}\"   style=\"display: none\"/>-->\r\n  <!--<button type=\"submit\" class=\"btn btn-block btn-primary\"-->\r\n  <!--(click)=\"updateWidgetImage(widgetID, text, width, url)\">Upload Image</button>-->\r\n  <!--<br/>-->\r\n  <!--</form>-->\r\n  <a class = \"btn btn-success\" (click)=\"createThisPost()\">Create Post</a>\r\n  <a class=\"btn btn-danger\"\r\n     (click)=\"deleteThisPost(postId)\">Cancel</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/create-post/create-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service_client__ = __webpack_require__("../../../../../src/app/services/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreatePostComponent = (function () {
    function CreatePostComponent(postService, userService, route, router) {
        this.postService = postService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
    }
    CreatePostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.posterId = params['uid'];
            // this.postId = params['pid'];
        });
        this.userService.findUserById(this.posterId)
            .subscribe(function (user) {
            _this.user = user;
        });
        // this.postService.findPostbyId(this.postId)
        //   .subscribe((post) => {
        //     this.post = post;
        //     this.usernameOfPoster  = post.username;
        //     this.text = post.text;
        //     this.usernameOfPoster = post.username;
        //     this.images = post.images;
        //     this.date = post.date;
        //     this.likeAmount = post.likeAmount;
        //     this.tags = post.tags;
        //   });
        // this.postService.findAllPosts()
        //   .subscribe((posts) => {
        //   this.posts = posts;
        // });
    };
    CreatePostComponent.prototype.deleteThisPost = function (ID) {
        var _this = this;
        this.postService.deletePost(this.postId)
            .subscribe(function () {
            _this.router.navigate(['user/', _this.posterId]);
        });
        this.text = null;
    };
    CreatePostComponent.prototype.createThisPost = function () {
        var _this = this;
        var newPost = { poster: this.posterId, text: this.text, likes: 0,
            date: new Date(), images: [this.url] };
        // const newPost = {poster: this.user, text: this.text, images: this.images,
        //   date: new Date(), likeAmount: 0, tags: this.tags};
        console.log('The post to be posted:', newPost);
        this.postService.createPost(newPost)
            .subscribe(function (posts) {
            // this.posts = posts;
            _this.router.navigate([_this.baseUrl + 'user/', _this.posterId]);
        });
        // this.router.navigate(['user/', this.posterId]);
    };
    return CreatePostComponent;
}());
CreatePostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-post',
        template: __webpack_require__("../../../../../src/app/components/create-post/create-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-post/create-post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service_client__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service_client__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], CreatePostComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nasa-picture-details/nasa-picture-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nasa-picture-details/nasa-picture-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <img src=\"{{item.links['0'].href}}\"/>\r\n  <br>\r\n  {{item.data['0'].description}}\r\n  <br>\r\n  {{stringJson}}\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/nasa-picture-details/nasa-picture-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NasaPictureDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__ = __webpack_require__("../../../../../src/app/services/nasa.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NasaPictureDetailsComponent = (function () {
    function NasaPictureDetailsComponent(nasaService, activatedRoute) {
        this.nasaService = nasaService;
        this.activatedRoute = activatedRoute;
    }
    NasaPictureDetailsComponent.prototype.ngOnInit = function () {
        this.itemId = this.activatedRoute.snapshot.params['imgid'];
        this.item = this.nasaService.requestDetails(this.itemId);
        this.stringJson = JSON.stringify(this.item).replace(',', ',<br>');
    };
    return NasaPictureDetailsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], NasaPictureDetailsComponent.prototype, "itemId", void 0);
NasaPictureDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nasa-picture-details',
        template: __webpack_require__("../../../../../src/app/components/nasa-picture-details/nasa-picture-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nasa-picture-details/nasa-picture-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__["a" /* NasaServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__["a" /* NasaServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], NasaPictureDetailsComponent);

var _a, _b;
//# sourceMappingURL=nasa-picture-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nasa-picture-test/nasa-picture-test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nasa-picture-test/nasa-picture-test.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>NASA Img Library Api Test</h1>\r\n\r\n<label>Search Params</label>\r\n<input [(ngModel)]=\"searchParams\" placeholder=\"mars\" class=\"form-control\"/>\r\n<button (click)=\"search(searchParams)\" class=\"btn btn-primary btn-block\">Search</button>\r\n\r\n<div *ngIf=\"gotResult\">\r\n  <div *ngFor=\"let item of result.collection.items; let i = index\">\r\n\r\n    <img src=\"{{item.links['0'].href}}\"/>\r\n\r\n    <p>{{item.data['0'].description}}</p>\r\n\r\n    <a routerLink=\"./{{i}}/details\">More Info</a>\r\n    <br>\r\n    <br>\r\n    <br>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/nasa-picture-test/nasa-picture-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NasaPictureTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__ = __webpack_require__("../../../../../src/app/services/nasa.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NasaPictureTestComponent = (function () {
    function NasaPictureTestComponent(nasaService) {
        this.nasaService = nasaService;
    }
    NasaPictureTestComponent.prototype.search = function (params) {
        var _this = this;
        this.nasaService.searchImg(this.searchParams)
            .subscribe(function (result) {
            _this.result = result;
            _this.gotResult = true;
            // console.log(result);
        });
    };
    NasaPictureTestComponent.prototype.ngOnInit = function () {
        this.gotResult = false;
    };
    return NasaPictureTestComponent;
}());
NasaPictureTestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nasa-picture-test',
        template: __webpack_require__("../../../../../src/app/components/nasa-picture-test/nasa-picture-test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nasa-picture-test/nasa-picture-test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__["a" /* NasaServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__["a" /* NasaServiceClient */]) === "function" && _a || Object])
], NasaPictureTestComponent);

var _a;
//# sourceMappingURL=nasa-picture-test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nasa-test/nasa-test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nasa-test/nasa-test.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>NASA Api Asteroid Test</h1>\r\n\r\n<label>Asteroid Id</label>\r\n<input [(ngModel)]=\"asteroidId\" placeholder=\"Asteroid Id\" class=\"form-control\"/>\r\n<button (click)=\"searchAsteroid(asteroidId)\" class=\"btn btn-primary btn-block\" type=\"submit\">Search</button>\r\n\r\n<div *ngIf=\"gotResult\">\r\n  <ul>\r\n    <li>Asteroid Name: {{asteroidName}}</li>\r\n    <li>Absolute Magnitutde: {{absolute_magnitude_h}}</li>\r\n    <li><a href=\"{{nasa_jpl_url}}\" target=\"_blank\">Nasa Jet Propulsion Lab Data for: {{asteroidId}}</a></li>\r\n    <li>Is this a potentially hazardous asteroid? Answer: {{is_potentially_hazardous_asteroid}}</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/nasa-test/nasa-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NasaTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__ = __webpack_require__("../../../../../src/app/services/nasa.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NasaTestComponent = (function () {
    function NasaTestComponent(nasaService) {
        this.nasaService = nasaService;
    }
    NasaTestComponent.prototype.searchAsteroid = function (asteroidId) {
        var _this = this;
        this.nasaService.searchAsteroid(asteroidId)
            .subscribe(function (result) {
            _this.asteroidId = asteroidId;
            _this.result = result;
            _this.gotResult = true;
            _this.asteroidName = result.name;
            _this.absolute_magnitude_h = result.absolute_magnitude_h;
            _this.estimated_diameter = result.estimated_diameter;
            _this.nasa_jpl_url = result.nasa_jpl_url;
            _this.orbital_data = result.orbital_data;
            _this.close_approach_data = result.close_approach_data;
            _this.is_potentially_hazardous_asteroid = result.is_potentially_hazardous_asteroid;
            console.log(result);
            console.log(_this.orbital_data);
        });
        console.log(this.asteroidId);
    };
    NasaTestComponent.prototype.ngOnInit = function () {
        this.gotResult = false;
    };
    return NasaTestComponent;
}());
NasaTestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nasa-test',
        template: __webpack_require__("../../../../../src/app/components/nasa-test/nasa-test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nasa-test/nasa-test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__["a" /* NasaServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_nasa_service_client__["a" /* NasaServiceClient */]) === "function" && _a || Object])
], NasaTestComponent);

var _a;
//# sourceMappingURL=nasa-test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post-list/post-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post-list/post-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let post of posts\" class = 'borderless'>\r\n  <app-post [ID] = \"post._id\"></app-post>\r\n</div>\r\n\r\n\r\n<!--<div *ngFor=\"let post of posts\" class = 'borderless'>-->\r\n  <!--<app-post></app-post>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/post-list/post-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service_client__ = __webpack_require__("../../../../../src/app/services/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostListComponent = (function () {
    function PostListComponent(postService, userService, route, router) {
        this.postService = postService;
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    PostListComponent.prototype.ngOnInit = function () {
        console.log('Post-list: posts are: ', this.posts);
    };
    return PostListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], PostListComponent.prototype, "IDfromProfile", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], PostListComponent.prototype, "posts", void 0);
PostListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-post-list',
        template: __webpack_require__("../../../../../src/app/components/post-list/post-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post-list/post-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service_client__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service_client__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PostListComponent);

var _a, _b, _c, _d;
// this.route.params.subscribe(params => {
//   this.userId = params['uid'];
//   console.log('Post-list: userId is: ', this.userId);
// });
//   this.postService.findPostsByUser(this.IDfromProfile)
//     .subscribe((posts) => {
//       this.posts = posts;
//       console.log('Post-list: posts are: ', posts);
//     });
// }}
//
// findPostsByTag(ID) {
//   this.postService.findPostsbyTag(this.ID)
//     .subscribe((posts) => {
//       this.posts = posts;
//     });
// }
//
// findPostsByTags(any) {
//   this.postService.findPostsbyTags(any)
//     .subscribe((posts) => {
//       this.posts = posts;
//     });
// }
//# sourceMappingURL=post-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label {\r\n  font-family: final_frontier_old_styleRg;\r\n  font-size: 175%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div>{{text}}</div>\r\n<!--<label>Images</label>-->\r\n<!--<div *ngFor = \"let image of images\">-->\r\n  <!--<img src=\"{{image}}\" width = \"33%\"/>-->\r\n<!--</div>-->\r\n<label>Date</label>\r\n<div>{{date}}</div>\r\n<div class = 'jj-font'> Current Altitude: {{likes}} kilometers\r\n  <button class = \"btn btn-primary\" (click)=\"likeThisPost()\">Give More Rocket Fuel</button></div>\r\n<!--<label>Tags</label>-->\r\n<!--<div *ngFor = \"let tag of tags\">-->\r\n  <!--<a>{{tag.name}}</a>-->\r\n<!--</div>-->\r\n<button class = \"btn btn-danger\" (click)=\"removeMyTag()\">Remove My Tag</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service_client__ = __webpack_require__("../../../../../src/app/services/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostComponent = (function () {
    function PostComponent(postService, userService, route, router) {
        this.postService = postService;
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        if (this.ID === undefined) {
            this.poster = { name: 'Alice' };
            this.image1 = { name: 'Image 1', url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg' };
            this.image2 = { name: 'Image 2', url: 'https://i.ytimg.com/vi/lt0WQ8JzLz4/maxresdefault.jpg' };
            this.tag1 = { name: 'SpaceX' };
            this.tag2 = { name: 'NASA' };
            this.ID = '0';
            this.text = 'This is a sample post, where you can see that this functionality works';
            this.images = [this.image1, this.image2];
            this.likes = 3;
            this.date = new Date;
            this.tags = [this.tag1, this.tag2, { name: 'Alice' }, { name: 'Frankenstein' }];
        }
        else {
            this.postService.findPostbyId(this.ID)
                .subscribe(function (post) {
                console.log('post from component', post);
                _this.post = post;
                _this.poster = post.username;
                _this.images = post.images;
                _this.text = post.text;
                _this.tags = post.tags;
                _this.date = post.date;
                _this.likes = post.likes;
            });
            // }
        }
    };
    PostComponent.prototype.likeThisPost = function () {
        var _this = this;
        console.log(this.post.likes);
        this.post.likes++;
        console.log(this.post.likes);
        console.log('this is the POST', this.post);
        this.postService.updatePost(this.ID, this.post)
            .subscribe(function (post) {
            _this.router.navigate(['user/' + _this.userId]);
            // this.post = post;
        });
    };
    PostComponent.prototype.removeMyTag = function () {
        var _this = this;
        // SPLICE This stuff
        this.postService.deletePost(this.ID)
            .subscribe(function (post) {
            _this.post = post;
        });
    };
    return PostComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], PostComponent.prototype, "ID", void 0);
PostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-post',
        template: __webpack_require__("../../../../../src/app/components/post/post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post/post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service_client__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service_client__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PostComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search-cb/search-cb.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mb-search-result-box {\r\n  padding: 5px;\r\n  background: lightgray;\r\n  margin: 5px;\r\n}\r\n.mb-img-pad {\r\n  padding: 7px;\r\n}\r\n\r\n.mb-img-max {\r\n  max-height: 200px;\r\n  max-width: 200px;\r\n}\r\n\r\n.jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n}\r\n\r\n.navbar .navbar-header .navbar-brand .jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n  font-size: xx-large;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search-cb/search-cb.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorFlag\"\r\n     class=\"alert alert-danger\">\r\n  {{errorMessage}}\r\n</div>\r\n<div class=\"mb-search-result-box\">\r\n  <div class=\"container-fluid row\">\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"mb-img-pad\">\r\n        <img src=\"{{picture}}\" class=\"mb-img-max\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <h2 class=\"jj-font\">{{name}}</h2>\r\n      <a routerLink=\"/cb/{{cbId}}\">Say Hi!</a>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <button (click)=\"addToFollow(cbId)\" class=\"jj-button pull-right\"><span class=\"glyphicon glyphicon-plus-sign\"></span></button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search-cb/search-cb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchCbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cb_service_client__ = __webpack_require__("../../../../../src/app/services/cb.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchCbComponent = (function () {
    function SearchCbComponent(activatedRoute, cbService, router) {
        this.activatedRoute = activatedRoute;
        this.cbService = cbService;
        this.router = router;
    }
    SearchCbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.originalUserId = params['uid'];
        });
        this.picture = this.cb.picture;
        this.name = this.cb.name;
        this.cbId = this.cb._id;
        this.errorFlag = false;
        console.log(this.picture);
    };
    SearchCbComponent.prototype.addToFollow = function (cbId) {
    };
    return SearchCbComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SearchCbComponent.prototype, "cb", void 0);
SearchCbComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-cb',
        template: __webpack_require__("../../../../../src/app/components/search/search-cb/search-cb.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search-cb/search-cb.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_cb_service_client__["a" /* CBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cb_service_client__["a" /* CBService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SearchCbComponent);

var _a, _b, _c;
//# sourceMappingURL=search-cb.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search-nasa/search-nasa.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mb-search-result-box {\r\n  padding: 5px;\r\n  background: lightgray;\r\n  margin: 5px;\r\n}\r\n.mb-img-pad {\r\n  padding: 7px;\r\n}\r\n\r\n.mb-img-max {\r\n  max-height: 200px;\r\n  max-width: 200px;\r\n}\r\n\r\n.jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n}\r\n\r\n.navbar .navbar-header .navbar-brand .jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n  font-size: xx-large;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search-nasa/search-nasa.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-search-result-box\">\r\n  <div class=\"container-fluid row\">\r\n    <div class=\"col-sm-5\">\r\n      <div class=\"mb-img-pad\">\r\n        <img src=\"{{picture}}\" class=\"mb-img-max\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-7 pull-left\">\r\n      <h2 class=\"jj-font\">{{title}}</h2>\r\n      <p>{{description}}</p>\r\n      <p>{{date}}</p>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search-nasa/search-nasa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchNasaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchNasaComponent = (function () {
    function SearchNasaComponent() {
    }
    SearchNasaComponent.prototype.ngOnInit = function () {
        this.description = this.nasaObject.data['0'].description;
        this.picture = this.nasaObject.links['0'].href;
        this.title = this.nasaObject.data['0'].title;
        this.date = this.nasaObject.data['0'].date_created;
    };
    return SearchNasaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SearchNasaComponent.prototype, "nasaObject", void 0);
SearchNasaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-nasa',
        template: __webpack_require__("../../../../../src/app/components/search/search-nasa/search-nasa.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search-nasa/search-nasa.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchNasaComponent);

//# sourceMappingURL=search-nasa.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search-profile/search-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mb-search-result-box {\r\n  padding: 5px;\r\n  background: lightgray;\r\n  margin: 5px;\r\n}\r\n.mb-img-pad {\r\n  padding: 7px;\r\n}\r\n\r\n.mb-img-max {\r\n  max-height: 200px;\r\n  max-width: 200px;\r\n}\r\n\r\n.jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n}\r\n\r\n.navbar .navbar-header .navbar-brand .jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n  font-size: xx-large;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search-profile/search-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorFlag\"\r\n     class=\"alert alert-danger\">\r\n  {{errorMessage}}\r\n</div>\r\n<div class=\"mb-search-result-box\">\r\n  <div class=\"container-fluid row\">\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"mb-img-pad\">\r\n      <img src=\"{{profilePic}}\" class=\"mb-img-max\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n    <h2 class=\"jj-font\">{{username}}</h2>\r\n      <a routerLink=\"/user/{{userId}}\">Say Hi!</a>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n    <button (click)=\"addToFollow(userId)\" class=\"jj-button pull-right\"><span class=\"glyphicon glyphicon-plus-sign\"></span></button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search-profile/search-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchProfileComponent = (function () {
    function SearchProfileComponent(activatedRoute, userService, router) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
    }
    SearchProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.originalUserId = params['uid'];
        });
        this.profilePic = this.user.picture;
        this.username = this.user.username;
        this.userId = this.user._id;
        this.errorFlag = false;
        console.log(this.errorMessage);
    };
    SearchProfileComponent.prototype.addToFollow = function (userId) {
        var _this = this;
        console.log(userId);
        if (userId === this.originalUserId) {
            this.errorFlag = true;
            this.errorMessage = 'You cannot follow yourself!';
        }
        else {
            this.userService.findUserById(this.originalUserId)
                .subscribe(function (user) {
                if (user.follows.includes(userId)) {
                    _this.errorFlag = true;
                    _this.errorMessage = 'You already follow this user.';
                }
                else {
                    user.follows.push(userId);
                    _this.userService.updateUser(_this.originalUserId, user)
                        .subscribe(function (usr) {
                        _this.router.navigate(['/user/' + _this.originalUserId]);
                    });
                }
            });
        }
    };
    return SearchProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SearchProfileComponent.prototype, "user", void 0);
SearchProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-profile',
        template: __webpack_require__("../../../../../src/app/components/search/search-profile/search-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search-profile/search-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SearchProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=search-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n}\r\n\r\n.navbar .navbar-header .navbar-brand .jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n  font-size: xx-large;\r\n\r\n}\r\n\r\n.mb-navbar-padding {\r\n  padding-left: 10px;\r\n}\r\n\r\n.mb-input-padding {\r\n  padding-top: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<!--&lt;!&ndash;Version to be nested&ndash;&gt;-->\r\n\r\n<!--&lt;!&ndash;<nav class=\"navbar navbar-default_blue navbar-fixed-top\">&ndash;&gt;-->\r\n  <!--&lt;!&ndash;<div class=\"container-fluid row\">&ndash;&gt;-->\r\n    <!--&lt;!&ndash;<p class=\"navbar-header mb-navbar-padding pull-left\">&ndash;&gt;-->\r\n      <!--&lt;!&ndash;<a class=\"navbar-brand thick\">&ndash;&gt;-->\r\n        <!--<b class=\"jj-font\">-->\r\n          <!--Search-->\r\n        <!--</b>-->\r\n      <!--&lt;!&ndash;</a>&ndash;&gt;-->\r\n    <!--&lt;!&ndash;</p>&ndash;&gt;-->\r\n    <!--<p class=\"navbar-header mb-input-padding\">-->\r\n    <!--<input name=\"search\"-->\r\n           <!--id=\"search\"-->\r\n           <!--type=\"text\"-->\r\n           <!--placeholder=\"search here\"-->\r\n           <!--class=\"form-control\"-->\r\n           <!--ngModel-->\r\n           <!--required-->\r\n           <!--#searchField=\"ngModel\"/></p>-->\r\n    <!--<p class=\"navbar-text\">-->\r\n      <!--<button (click)=\"search(searchField.value)\" type=\"submit\" class=\"navbar-link jj-button\">-->\r\n        <!--<span class=\"jj-button-text glyphicon glyphicon-search\"></span>-->\r\n      <!--</button>-->\r\n    <!--</p>-->\r\n  <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n<!--&lt;!&ndash;</nav>&ndash;&gt;-->\r\n<!--&lt;!&ndash;<br>&ndash;&gt;-->\r\n<!--&lt;!&ndash;<br>&ndash;&gt;-->\r\n<!--&lt;!&ndash;<br>&ndash;&gt;-->\r\n<!--<div *ngIf=\"peopleReady\">-->\r\n<!--<br>-->\r\n<!--<p>-->\r\n  <!--People Results:-->\r\n  <!--<br>-->\r\n<!--</p>-->\r\n  <!--<div *ngFor=\"let person of userResult\">-->\r\n    <!--<app-search-profile [user]=\"person\"></app-search-profile>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n<!--<div *ngIf=\"postReady\">-->\r\n<!--<p>-->\r\n  <!--Post Results: (not working yet)-->\r\n  <!--<br>-->\r\n<!--</p>-->\r\n<!--</div>-->\r\n<!--<div *ngIf=\"nasaReady\">-->\r\n<!--<p>-->\r\n  <!--Nasa Results:-->\r\n  <!--<br>-->\r\n<!--</p>-->\r\n  <!--<div *ngFor=\"let object of nasaResult\">-->\r\n    <!--<app-search-nasa [nasaObject]=\"object\"></app-search-nasa>-->\r\n  <!--</div>-->\r\n\r\n<!--</div>-->\r\n\r\n\r\n\r\n<!--Old version stable version from Miles:-->\r\n\r\n<nav class=\"navbar navbar-default_blue navbar-fixed-top\">\r\n  <div class=\"container-fluid row\">\r\n    <p class=\"navbar-header mb-navbar-padding pull-left\">\r\n      <a class=\"navbar-brand thick\">\r\n        <button class=\"navbar-default_blue\" (click)=\"goToProfile()\"><span class=\"glyphicon glyphicon-chevron-left\"></span> </button>\r\n        <b class=\"jj-font\">\r\n          Search\r\n        </b>\r\n      </a>\r\n    </p>\r\n    <p class=\"navbar-header mb-input-padding\">\r\n      <input name=\"search\"\r\n             id=\"search\"\r\n             type=\"text\"\r\n             placeholder=\"search here\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             required\r\n             #searchField=\"ngModel\"/></p>\r\n    <p class=\"navbar-text pull-right\">\r\n      <button (click)=\"search(searchField.value)\" type=\"submit\" class=\"navbar-link jj-button\">\r\n        <span class=\"jj-button-text glyphicon glyphicon-search\"></span>\r\n      </button>\r\n    </p>\r\n  </div>\r\n</nav>\r\n<br>\r\n<br>\r\n<br>\r\n<div *ngIf=\"peopleReady\">\r\n  <br>\r\n  <p>\r\n    People Results:\r\n    <br>\r\n  </p>\r\n  <div *ngFor=\"let person of userResult\">\r\n    <app-search-profile [user]=\"person\"></app-search-profile>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"cbReady\">\r\n  <br>\r\n  <p>\r\n    Space Results:\r\n    <br>\r\n  </p>\r\n  <div *ngFor=\"let cb of cbResult\">\r\n    <app-search-cb [cb]=\"cb\"></app-search-cb>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"postReady\">\r\n  <p>\r\n    Post Results: (not working yet)\r\n    <br>\r\n  </p>\r\n</div>\r\n<div *ngIf=\"nasaReady\">\r\n  <p>\r\n    Nasa Results:\r\n    <br>\r\n  </p>\r\n  <div *ngFor=\"let object of nasaResult\">\r\n    <app-search-nasa [nasaObject]=\"object\"></app-search-nasa>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service_client__ = __webpack_require__("../../../../../src/app/services/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_nasa_service_client__ = __webpack_require__("../../../../../src/app/services/nasa.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cb_service_client__ = __webpack_require__("../../../../../src/app/services/cb.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchComponent = (function () {
    function SearchComponent(cbService, postService, nasaService, userService, router, activateRoute) {
        this.cbService = cbService;
        this.postService = postService;
        this.nasaService = nasaService;
        this.userService = userService;
        this.router = router;
        this.activateRoute = activateRoute;
        this.userResult = [];
        this.cbResult = [];
        this.postResult = [];
        this.nasaResult = [];
        this.searchResultString = '';
        this.peopleReady = false;
        this.nasaReady = false;
        this.postReady = false;
        this.cbReady = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        /*
        const pluto = {name: 'Pluto', region: 'Sol System', type: 'Celestial Dwarf',
          picture: 'http://pluto.jhuapl.edu/Multimedia/Science-Photos/pics/P_COLOR2_enhanced_release.jpg'};
        this.cbService.createCB(pluto).subscribe((res: any) => {
          console.log(res);
          console.log('Pluto made!');
    
        });
        */
    };
    SearchComponent.prototype.search = function (param) {
        var _this = this;
        this.searchResultString = '';
        console.log('searching for', param);
        this.searchparam = param;
        this.userService.findUserByUsername(param).subscribe(function (response) {
            if (response != null) {
                _this.userResult.push(response);
                _this.peopleReady = true;
            }
        });
        this.nasaService.searchImg(param).subscribe(function (imgresponse) {
            if (imgresponse != null) {
                _this.nasaResult = imgresponse.collection.items;
                _this.searchResultString += JSON.stringify(imgresponse) + '&nbsp&nbsp';
                _this.nasaReady = true;
            }
        });
        this.cbService.findCBbyText(param).subscribe(function (response) {
            if (response != null) {
                _this.cbResult = response;
                _this.cbReady = true;
                console.log(_this.cbResult);
            }
        });
    };
    SearchComponent.prototype.goToProfile = function () {
        this.router.navigate(['user/' + this.userId]);
    };
    return SearchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], SearchComponent.prototype, "searchForm", void 0);
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_cb_service_client__["a" /* CBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_cb_service_client__["a" /* CBService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service_client__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_post_service_client__["a" /* PostService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_nasa_service_client__["a" /* NasaServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_nasa_service_client__["a" /* NasaServiceClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */]) === "function" && _g || Object])
], SearchComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/front-page/front-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n  color: goldenrod;\r\n}\r\n\r\nbody {\r\n  background: url(" + __webpack_require__("../../../../../src/assets/vendors/image/starTrek.jpg") + ");\r\n  padding-top: 0px;\r\n  }\r\n\r\n.jj-h1 {\r\n  margin-top: 0px;\r\n  font-size: 150px;\r\n  text-align: center;\r\n}\r\n\r\n.jj-form {\r\n  width: 500px;\r\n  margin: 0 auto;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/front-page/front-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<body xmlns=\"http://www.w3.org/1999/html\">\r\n<div class=\"jj-bg\">\r\n  <div class=\"jj-font\">\r\n    <h1 class=\"jj-h1\">\r\n      SpaceBook\r\n    </h1>\r\n    <div>\r\n      <form class=\"jj-form\" #f=\"ngForm\">\r\n        <input name=\"username\"\r\n               id=\"username\"\r\n               type=\"text\"\r\n               placeholder=\"username\"\r\n               class=\"form-control\"\r\n               ngModel\r\n               required\r\n               #username=\"ngModel\"/>\r\n        <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\r\n          Please enter a username!\r\n        </span>\r\n        <input name=\"password\"\r\n               id=\"password\"\r\n               type=\"password\"\r\n               placeholder=\"password\"\r\n               class=\"form-control\"\r\n               ngModel\r\n               required\r\n               #password=\"ngModel\"/>\r\n        <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\r\n          Please enter password!\r\n        </span>\r\n        <button (click)=\"login(username.value, password.value)\"\r\n        class=\"btn btn-primary btn-block jj-button-hover\"\r\n        type=\"submit\"\r\n        [disabled]=\"!f.valid\">\r\n        Login\r\n        </button>\r\n        <button class=\"btn btn-success btn-block jj-button-hover\"\r\n                aria-pressed=\"true\"\r\n                [routerLink]=\"['/register']\">\r\n          Register\r\n        </button>\r\n      </form>\r\n    </div>\r\n    <button class=\"jj-button\"><span (click)=\"goTofindAsteroid()\">Find asteroid by ID</span></button>\r\n    <button class=\"jj-button\"><span (click)=\"goToImageSearch()\">Image Search</span></button>\r\n    <button class=\"jj-button\"><span (click)=\"goToAPOD()\">APOD</span></button>\r\n  </div>\r\n\r\n</div>\r\n\r\n</body>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/front-page/front-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FrontPageComponent = (function () {
    function FrontPageComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password!';
    }
    FrontPageComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
    };
    FrontPageComponent.prototype.login = function (username, password) {
        var _this = this;
        this.username = username;
        this.password = password;
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (user) {
            if (user) {
                _this.router.navigate(['user/', user._id]);
            }
            else {
                _this.errorFlag = true;
            }
        });
    };
    FrontPageComponent.prototype.goTofindAsteroid = function () {
        this.router.navigate(['/searchAsteroids']);
    };
    FrontPageComponent.prototype.goToImageSearch = function () {
        this.router.navigate(['/nasa-pic']);
    };
    FrontPageComponent.prototype.goToAPOD = function () {
        this.router.navigate(['/APOD']);
    };
    return FrontPageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], FrontPageComponent.prototype, "loginForm", void 0);
FrontPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-front-page',
        template: __webpack_require__("../../../../../src/app/components/user/front-page/front-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/front-page/front-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], FrontPageComponent);

var _a, _b, _c;
//# sourceMappingURL=front-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n}\r\n\r\n.navbar .navbar-header .navbar-brand .jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n  font-size: xx-large;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n\r\n<nav class=\"navbar navbar-default_blue navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-header pull-left\">\r\n      <a class=\"navbar-brand thick\">\r\n        <b class=\"jj-font\">\r\n          Profile\r\n        </b>\r\n      </a>\r\n    </p>\r\n\r\n    <p class=\"navbar-text pull-right\">\r\n      <button (click)=\"goToProfile(username, email, firstName, lastName, phone, DOB)\" type=\"submit\" class=\"navbar-link jj-button\">\r\n        <span class=\"jj-button-text glyphicon glyphicon-ok\"></span>\r\n      </button>\r\n    </p>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div class=\"container-fluid jj-body jj-font\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">\r\n        Username\r\n      </label>\r\n      <input [(ngModel)]=\"username\"\r\n             name=\"username\"\r\n             id=\"username\"\r\n             type=\"text\"\r\n             placeholder=\"Username\"\r\n             class=\"form-control\"/>\r\n\r\n      <label for=\"email\">\r\n        Email\r\n      </label>\r\n      <input [(ngModel)]=\"email\"\r\n             name=\"email\"\r\n             id=\"email\"\r\n             type=\"email\"\r\n             placeholder=\"Email\"\r\n             class=\"form-control\"\r\n             email/>\r\n\r\n      <label for=\"First Name\">\r\n        First Name\r\n      </label>\r\n      <input [(ngModel)]=\"firstName\"\r\n             name=\"First Name\"\r\n             id=\"First Name\"\r\n             type=\"text\"\r\n             placeholder=\"First Name\"\r\n             class=\"form-control\"/>\r\n\r\n      <label for=\"Last Name\">\r\n        Last Name\r\n      </label>\r\n      <input [(ngModel)]=\"lastName\"\r\n             name=\"Last Name\"\r\n             id=\"Last Name\"\r\n             type=\"text\"\r\n             placeholder=\"Last Name\"\r\n             class=\"form-control\"/>\r\n      <label for=\"phone\">\r\n        Phone Number\r\n      </label>\r\n      <input [(ngModel)]=\"phone\"\r\n             name=\"phone\"\r\n             id=\"phone\"\r\n             type=\"tel\"\r\n             placeholder=\"xxx-xxx-xxxx\"\r\n             class=\"form-control\"/>\r\n      <label for=\"DOB\">\r\n        Birthday\r\n      </label>\r\n      <input [(ngModel)]=\"DOB\"\r\n             name=\"DOB\"\r\n             id=\"DOB\"\r\n             type=\"date\"\r\n             class=\"form-control\"/>\r\n    </div>\r\n\r\n    <!--<form ngNoForm action=\"{{baseURL}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\"-->\r\n    <!--class=\"jj-form container-fluid\">-->\r\n    <!--<input name=\"myFile\" type=\"file\" class=\"form-control\"/>-->\r\n    <!--<input name=\"userId\" value=\"{{userId}}\" style=\"display: none\"/>-->\r\n    <!--<button (click)=\"commit(picture)\"-->\r\n    <!--type=\"submit\" class=\"btn btn-block btn-primary jj-button-hover\" aria-pressed=\"true\">Save Changes-->\r\n    <!--</button>-->\r\n    <!--<br/>-->\r\n    <!--</form>-->\r\n  </form>\r\n  <button class=\"btn btn-danger btn-block jj-button-hover\"\r\n          aria-pressed=\"true\"\r\n          (click)=\"deleteAccount(userId)\">\r\n    Delete Account\r\n  </button>\r\n\r\n</div>\r\n\r\n<nav class=\"navbar navbar-default_blue navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <button class=\"jj-button\" (click)=\"cancelChanges()\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </button>\r\n    </p>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.userService.findUserById(this.userId)
            .subscribe(function (user) {
            _this.user = user;
            _this.username = _this.user['username'];
            _this.firstName = _this.user['firstName'];
            _this.password = _this.user['password'];
            _this.lastName = _this.user['lastName'];
            _this.email = _this.user['email'];
            _this.picture = _this.user['picture'];
            _this.DOB = _this.user['DOB'];
            _this.phone = _this.user['phone'];
        });
    };
    ProfileComponent.prototype.goToProfile = function (uname, email, fname, lname, phone, DOB) {
        var _this = this;
        var user = { username: uname, email: email, firstName: fname, lastName: lname, phone: phone, DOB: DOB };
        this.userService.updateUser(this.userId, user)
            .subscribe(function (user1) {
            _this.router.navigate(['user/' + _this.userId]);
        });
    };
    ProfileComponent.prototype.cancelChanges = function () {
        this.ngOnInit();
    };
    ProfileComponent.prototype.deleteAccount = function (userId) {
        var _this = this;
        this.userService.deleteUser(userId)
            .subscribe(function (users) {
            _this.router.navigate(['/login']);
        });
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/public-profile/public-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* from: https://www.w3schools.com/howto/howto_css_cards.asp*/\r\n.jj-card {\r\n  /* Add shadows to create the \"card\" effect */\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n}\r\n\r\n/* On mouse-over, add a deeper shadow from: https://www.w3schools.com/howto/howto_css_cards.asp*/\r\n.jj-card:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n.jj-container {\r\n  padding: 2px 16px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.jj-img-padding {\r\n  padding-top: 25px;\r\n  width: 100%;\r\n}\r\n\r\n.jj-button-profile {\r\n  border: transparent;\r\n  background-color: transparent;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/public-profile/public-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-space-banner-default></app-space-banner-default>\r\n\r\n<div class=\"container-fluid\">\r\n  <div *ngIf=\"birthday\"\r\n       class=\"alert alert-danger\">\r\n    {{birthdayMsg}}\r\n  </div>\r\n  <button class=\"jj-button-profile jj-card\" (click)=\"editProfile()\">\r\n    <img class=\"jj-img-padding\" src=\"{{picture}}\">\r\n    <div class=\"jj-container\">\r\n      <h4><b>{{firstName}} {{lastName}}</b></h4>\r\n    </div>\r\n  </button>\r\n<div>\r\n  <h1>FOLLOWS</h1>\r\n  <div *ngFor=\"let user of follows\">\r\n    <button (click)=\"goToUserProfile(user._id)\">{{user.firstName}} {{user.lastName}}</button>\r\n    <button (click)=\"deleteFollow(user._id)\"><span class=\"glyphicon glyphicon-remove\"></span> </button>\r\n  </div>\r\n</div>\r\n  <button class=\"btn btn-warning btn-block jj-button-hover\"\r\n          aria-pressed=\"true\"\r\n          [routerLink]=\"['/login']\">\r\n    Logout\r\n  </button>\r\n  <button class=\"btn btn-info btn-block jj-button-hover\"\r\n          aria-pressed=\"true\"\r\n          (click)=\"search()\">\r\n    Search\r\n  </button>\r\n  <div class = \"container-fluid\">\r\n  <app-create-post (click)=\"ngOnInit()\"></app-create-post>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<app-post-list [posts] = \"postsInPublicProfile\" (click)=\"ngOnInit()\"></app-post-list>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/public-profile/public-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service_client__ = __webpack_require__("../../../../../src/app/services/post.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PublicProfileComponent = (function () {
    function PublicProfileComponent(router, activatedRoute, userService, postService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.postService = postService;
        this.today = new Date();
        this.birthdayMsg = 'Happy Birthday!';
    }
    PublicProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.birthday = false;
        this.userService.findUserById(this.userId)
            .subscribe(function (user) {
            var f = [];
            _this.firstName = user['firstName'];
            _this.lastName = user['lastName'];
            _this.picture = user['picture'];
            _this.DOB = user['DOB'];
            if ((_this.DOB[5] + _this.DOB[6] === (_this.today.getUTCMonth() + 1).toString()) && (_this.DOB[8] + _this.DOB[9] === _this.today.getUTCDate().toString())) {
                _this.birthday = true;
            }
            for (var i = 0; i < user['follows'].length; i++) {
                _this.userService.findUserById(user['follows'][i])
                    .subscribe(function (user) {
                    f.push(user);
                });
                _this.follows = f;
            }
        });
        this.postService.findPostsByUser(this.userId)
            .subscribe(function (posts) {
            _this.postsInPublicProfile = posts;
        });
        console.log(this.follows);
    };
    PublicProfileComponent.prototype.editProfile = function () {
        this.router.navigate(['user/' + this.userId + '/edit']);
    };
    PublicProfileComponent.prototype.goToUserProfile = function (userId) {
        this.router.navigate(['user/' + userId]);
    };
    PublicProfileComponent.prototype.navigateToPost = function () {
        this.router.navigate(['user/' + this.userId + '/posts/new']);
    };
    PublicProfileComponent.prototype.search = function () {
        this.router.navigate(['user/' + this.userId + '/search']);
    };
    PublicProfileComponent.prototype.deleteFollow = function (userId) {
        var _this = this;
        console.log(userId);
        for (var i = 0; i < this.follows.length; i++) {
            if (this.follows[i]._id === userId) {
                this.follows.splice(i, 1);
            }
        }
        console.log('SAVED ONES ', this.follows);
        this.userService.findUserById(this.userId)
            .subscribe(function (user) {
            console.log('PREVIOUS USER.FOLLOWS ', user.follows);
            user.follows = [];
            for (var i = 0; i < _this.follows.length; i++) {
                user.follows.push(_this.follows[i]._id);
            }
            console.log('UPDATED USER.FOLLOWS ', user.follows);
            _this.userService.updateUser(_this.userId, user)
                .subscribe(function (usr) {
            });
        });
        console.log(this.follows);
    };
    return PublicProfileComponent;
}());
PublicProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-public-profile',
        template: __webpack_require__("../../../../../src/app/components/user/public-profile/public-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/public-profile/public-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service_client__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_post_service_client__["a" /* PostService */]) === "function" && _d || Object])
], PublicProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=public-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jj-font {\r\n  font-family: final_frontier_old_styleRg;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n\r\n<div class=\"container-fluid jj-font\">\r\n  <div *ngIf=\"errorFlag\"\r\n       class=\"alert alert-danger\">\r\n    {{errorMsg}}\r\n  </div>\r\n\r\n  <h1>Register</h1>\r\n  <form (ngSubmit)=\"register(username.value, password.value, email.value, firstName.value, lastName.value, DOB.value)\" #f=\"ngForm\">\r\n    <input name=\"username\"\r\n           id=\"username\"\r\n           type=\"text\"\r\n           placeholder=\"username\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #username=\"ngModel\"/>\r\n\r\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\r\n      Please enter username!\r\n    </span>\r\n\r\n    <input name=\"password\"\r\n           id=\"password\"\r\n           type=\"password\"\r\n           placeholder=\"password\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #password=\"ngModel\"/>\r\n\r\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\r\n      Please enter password!\r\n    </span>\r\n    <input name=\"verify password\"\r\n           id=\"verify_password\"\r\n           type=\"password\"\r\n           placeholder=\"verify password\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #verify_password=\"ngModel\">\r\n\r\n    <span class=\"help-block\" *ngIf=\"!verify_password.valid && verify_password.touched\">\r\n      Please enter password!\r\n    </span>\r\n    <span class=\"help-block\" *ngIf=\"verify_password.value != password.value\">\r\n      Passwords do not match!\r\n    </span>\r\n\r\n    <input name=\"email\"\r\n           id=\"email\"\r\n           type=\"text\"\r\n           placeholder=\"email\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #email=\"ngModel\"/>\r\n\r\n    <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\r\n      Please enter email!\r\n    </span>\r\n    <input name=\"firstName\"\r\n           id=\"firstName\"\r\n           type=\"text\"\r\n           placeholder=\"first name\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #firstName=\"ngModel\"/>\r\n\r\n    <span class=\"help-block\" *ngIf=\"!firstName.valid && firstName.touched\">\r\n      Please enter first name!\r\n    </span>\r\n    <input name=\"lastName\"\r\n           id=\"lastName\"\r\n           type=\"text\"\r\n           placeholder=\"last name\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #lastName=\"ngModel\"/>\r\n\r\n    <span class=\"help-block\" *ngIf=\"!lastName.valid && lastName.touched\">\r\n      Please enter last name!\r\n    </span>\r\n    <input name=\"DOB\"\r\n           id=\"DOB\"\r\n           type=\"date\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #DOB=\"ngModel\"/>\r\n    <input name=\"phone\"\r\n           id=\"phone\"\r\n           type=\"tel\"\r\n           placeholder=\"xxx-xxx-xxxx\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #phone=\"ngModel\"/>\r\n\r\n  </form>\r\n  <button (click)=\"registered(username.value, password.value, firstName.value, lastName.value, email.value, DOB.value, phone.value)\"\r\n          class=\"btn btn-primary btn-block jj-button-hover\"\r\n          type=\"submit\"\r\n          aria-pressed=\"true\"\r\n          [disabled]=\"!f.valid\">\r\n    Register\r\n  </button>\r\n\r\n  <button class=\"btn btn-danger btn-block jj-button-hover\"\r\n          aria-pressed=\"true\"\r\n          [routerLink]=\"['']\">\r\n    Cancel\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (username, password, email, firstName, lastName, DOB) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.DOB = DOB;
        this.errorMsg = 'Invalid username or password!';
        this.errorFlag = false;
    };
    RegisterComponent.prototype.registered = function (username, password, firstName, lastName, email, DOB, phone) {
        var _this = this;
        console.log(DOB);
        console.log(DOB[5] + DOB[6]);
        console.log(DOB[8] + DOB[9]);
        var d = new Date();
        console.log(d.getUTCDate());
        console.log(d.getUTCDate().toString() === DOB[8] + DOB[9]);
        this.userService.findUserByUsername(username)
            .subscribe(function (user) {
            if (user !== null) {
                _this.errorFlag = true;
                _this.errorMsg = 'Username already in use, please choose another username!';
            }
            else {
                var user1 = { username: username, password: password, firstName: firstName, lastName: lastName, email: email,
                    picture: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Creative-Tail-astronaut.svg', DOB: DOB, phone: phone };
                _this.userService.createUser(user1)
                    .subscribe(function (user2) {
                    _this.user = user2;
                    _this.user_id = user2['_id'];
                    _this.router.navigate(['user/', _this.user_id]);
                });
            }
        });
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registrationForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/cb.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CBService = (function () {
    function CBService(http) {
        this.http = http;
        this.baseURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createCB': this.createCB,
            'findCBbyId': this.findCBbyId,
            'findCBbyText': this.findCBbyText,
            'updateCB': this.updateCB,
            'deleteCB': this.deleteCB
        };
    }
    CBService.prototype.createCB = function (cb) {
        var url = this.baseURL + '/api/cb';
        return this.http.post(url, cb)
            .map(function (response) {
            return response.json();
        });
    };
    CBService.prototype.findCBbyId = function (cbId) {
        var url = this.baseURL + '/api/cb/' + cbId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    CBService.prototype.findCBbyText = function (text) {
        var url = this.baseURL + '/api/cb?text=' + text;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    CBService.prototype.updateCB = function (cbId, cb) {
        var url = this.baseURL + '/api/cb/' + cbId;
        return this.http.put(url, cb)
            .map(function (response) {
            return response.json();
        });
    };
    CBService.prototype.deleteCB = function (cbId) {
        var url = this.baseURL + '/api/cb/' + cbId;
        return this.http.delete(url);
    };
    return CBService;
}());
CBService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], CBService);

var _a;
//# sourceMappingURL=cb.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/nasa.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NasaServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NasaServiceClient = (function () {
    function NasaServiceClient(http) {
        this.http = http;
    }
    NasaServiceClient.prototype.searchAsteroid = function (asteroidId) {
        var url = 'https://api.nasa.gov/neo/rest/v1/neo/' + asteroidId + '?api_key=qnRIVwggS9kblyYoKRBAfyw9UymHsMx8COLqcNyd';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    NasaServiceClient.prototype.searchImg = function (params) {
        var _this = this;
        var url = 'https://images-api.nasa.gov/search?q=' + params + '&media_type=image';
        return this.http.get(url)
            .map(function (response) {
            _this.imgSearch = response.json();
            return response.json();
        });
    };
    NasaServiceClient.prototype.getAPOD = function () {
        var url = 'https://api.nasa.gov/planetary/apod?api_key=ZC1UpuaKUg9oUmNxnAcfI1s7KH7lIoN3Av2urJNr';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    NasaServiceClient.prototype.getAPODPictureOfDate = function (params) {
        var url = 'https://api.nasa.gov/planetary/apod?api_key=ZC1UpuaKUg9oUmNxnAcfI1s7KH7lIoN3Av2urJNr';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    NasaServiceClient.prototype.requestDetails = function (id) {
        var item = this.imgSearch.collection.items[id];
        return item;
    };
    return NasaServiceClient;
}());
NasaServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], NasaServiceClient);

var _a;
//# sourceMappingURL=nasa.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/post.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.baseURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createPost': this.createPost,
            'findPostbyId': this.findPostbyId,
            'findPostsbyTags': this.findPostsbyTags,
            'findPostsbyTag': this.findPostsbyTag,
            'updatePost': this.updatePost,
            'deletePost': this.deletePost,
            'findAllPosts': this.findAllPosts,
            'findPostsByUser': this.findPostsByUser
        };
    }
    PostService.prototype.createPost = function (post) {
        var url = this.baseURL + '/api/post';
        console.log('create post from client', post);
        return this.http.post(url, post)
            .map(function (response) {
            return response.json();
        });
    };
    PostService.prototype.findPostsByUser = function (userId) {
        console.log('userId from post client: ', userId);
        var url = this.baseURL + '/api/post/user/' + userId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PostService.prototype.findPostbyId = function (postId) {
        var url = this.baseURL + '/api/post/' + postId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PostService.prototype.findAllPosts = function () {
        var url = this.baseURL + '/api/post';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PostService.prototype.findPostsbyTags = function (tags) {
        console.log(tags);
        var url = this.baseURL + '/api/post?tags=' + tags;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PostService.prototype.findPostsbyTag = function (tag) {
        var url = this.baseURL + '/api/post?tag=' + tag;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PostService.prototype.updatePost = function (postId, post) {
        var url = this.baseURL + '/api/post/' + postId;
        return this.http.put(url, post)
            .map(function (response) {
            return response.json();
        });
    };
    PostService.prototype.deletePost = function (postId) {
        var url = this.baseURL + '/api/post/' + postId;
        return this.http.delete(url);
    };
    return PostService;
}());
PostService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PostService);

var _a;
//# sourceMappingURL=post.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.baseURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser,
        };
    }
    UserService.prototype.addFollower = function (userId, followedId) {
        var url = this.baseURL + '/api/user/' + userId;
        return this.http.put(url, followedId)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.createUser = function (user) {
        var url = this.baseURL + '/api/user';
        return this.http.post(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseURL + '/api/user/' + userId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        console.log(username);
        var url = this.baseURL + '/api/user?username=' + username;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        console.log('IN USER SERVICE TS ', username, password);
        var url = this.baseURL + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseURL + '/api/user/' + userId;
        return this.http.put(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseURL + '/api/user/' + userId;
        return this.http.delete(url);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/space-banner-default/space-banner-default.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".topMargin {\r\n  margin-top: 40px;\r\n}\r\n/*This code was taken from: https://www.w3schools.com/howto/howto_js_topnav.asp*/\r\n\r\n/* Add a black background color to the top navigation */\r\n.SpaceNav {\r\n  background-color: #333;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n/* Style the links inside the navigation bar */\r\n.SpaceNav a {\r\n  float: left;\r\n  display: block;\r\n  color: white;\r\n  font-family: final_frontier_old_styleRg;\r\n  text-align: center;\r\n  text-color: white;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 28px;\r\n}\r\n\r\n/* Change the color of links on hover */\r\n.SpaceNav a:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n\r\n/* Add a color to the active/current link */\r\n.SpaceNav a.active {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/space-banner-default/space-banner-default.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The banner-->\r\n<div class=\"SpaceNav moh-jj-font\" id=\"SpaceNavBar\">\r\n  <a>SpaceBook</a>\r\n  <!--<app-search></app-search>-->\r\n  <a class = \"pull-right\" (click) = \"logOut()\">Logout</a>\r\n  <a class = \"pull-right\" (click) = \"navigateToProfile()\">Home</a>\r\n  <a class = \"pull-right\" (click) = \"navigateToProfile()\">Profile</a>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/space-banner-default/space-banner-default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpaceBannerDefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpaceBannerDefaultComponent = (function () {
    function SpaceBannerDefaultComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    SpaceBannerDefaultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
    };
    SpaceBannerDefaultComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    /**
     * This will have to be improved for security.
     */
    SpaceBannerDefaultComponent.prototype.logOut = function () {
        this.router.navigate(['/login']);
    };
    return SpaceBannerDefaultComponent;
}());
SpaceBannerDefaultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-space-banner-default',
        template: __webpack_require__("../../../../../src/app/space-banner-default/space-banner-default.component.html"),
        styles: [__webpack_require__("../../../../../src/app/space-banner-default/space-banner-default.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SpaceBannerDefaultComponent);

var _a, _b, _c;
//# sourceMappingURL=space-banner-default.component.js.map

/***/ }),

/***/ "../../../../../src/assets/vendors/image/starTrek.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "starTrek.e6af6f101d30a8b8516a.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map