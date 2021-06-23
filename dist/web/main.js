(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/g14n4p3/Project/deveth_webpage/src/main.ts */"zUnb");


/***/ }),

/***/ "93si":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_components_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./components.component.html */ "NPo9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rellax */ "HbP6");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pageService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pageService.service */ "ObLD");






var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(pageService, renderer, config) {
        this.pageService = pageService;
        this.renderer = renderer;
        this.dataObj = [];
        config.closeOthers = true;
        config.type = 'info';
    }
    ComponentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_4__('.rellax-header');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
        this.pageService.getJSON().subscribe(function (data) {
            _this.dataObj = data;
        });
    };
    ComponentsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    };
    ComponentsComponent.ctorParameters = function () { return [
        { type: _pageService_service__WEBPACK_IMPORTED_MODULE_5__["PageService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAccordionConfig"] }
    ]; };
    ComponentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-components',
            template: _raw_loader_components_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [_pageService_service__WEBPACK_IMPORTED_MODULE_5__["PageService"]],
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_pageService_service__WEBPACK_IMPORTED_MODULE_5__["PageService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAccordionConfig"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.scss */ "cruu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.scrollToElement = function (element) {
        element.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "NPo9":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\" *ngIf=\"dataObj\">\n  <div class=\"page-header clear-filter\" filter-color=\"green\" *ngFor=\"let data of dataObj\">\n    <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-7\" style=\"    background: linear-gradient(to right, rgb(21, 87, 153), rgb(21, 153, 87));\n    color: rgb(255, 255, 255);\">\n    </div>\n      <div class=\"container\">\n          <div class=\"content-center brand\">\n            <img class=\"logo_start_page\" src=\"./assets/img/deveth.png\">\n              <h1 class=\"h1-seo\">{{data.page.title}}</h1>\n              <h3>{{data.page.headline}}</h3>\n                <a class=\"btn btn-primary btn-custom\" type=\"button\" routerLink=\".\" fragment=\"whyDevEth\">{{data.page.more_details}}</a>\n                <a class=\"btn btn-primary btn-custom\" type=\"button\" routerLink=\".\" fragment=\"project\">COMMUNITY PROJECTS</a>\n          </div>\n      </div>\n  </div>\n\n  <div class=\"main\">\n        <ng-container *ngFor=\"let data of dataObj\">\n            <!-- {{data.some_background | json}} -->\n            <div class=\"section section-basic padding-margin-tob-bottom\" id=\"{{data.why_devETH.id}}\">\n                <div class=\"container\">\n                    <h2 class=\"title\">{{data.why_devETH.title}}</h2>\n                    <div innerHtml=\"{{data.why_devETH.content}}\"></div>\n                </div>\n            </div>\n            <div class=\"section section-basic padding-margin-tob-bottom\" id=\"{{data.mining_guide.id}}\">\n                <div class=\"container\">\n                    <h2 class=\"title\">{{data.mining_guide.title}}</h2>\n\n                    <h3 class=\"title\">Node Setup Linux</h3>\n                    <p>→ Skip the node setup if you're going to mine using a pool\n                    \n                    If you're installing a full node, make sure you have an SSD with at least 1TB of free disk space. Run the following commands:</p>\n                    \n                    <p><code >git clone https://github.com/devethorg/go-ethereum.git -b deveth\n                    cd go-ethereum\n                    sudo apt install make golang-go\n                    make geth</code ></p>\n                    <p>and then:</p>\n                    \n                    <p><code >./build/bin/geth --syncmode fast --mine --miner.etherbase=YOUR_ADDRESS --cache 26000 --rpc --rpcaddr 127.0.0.1 \n                        --rpcapi eth,web3,debug,net --rpcvhosts=* --networkid 777 --whitelist 11932937=0xb1bea4221644e68e90e305eed5e894bbe799234ac541fd7c909d838b7a7dda5b</code></p>\n                    <p>Make sure to set the miner.etherbase to your address.</p>\n                    \n                    <p>Important: Remember that the network ID of devETH is still 777. Our chain ID is 787 and that is configured at the protocol level. Please make sure you are using a network ID of 777 when starting your node.</p>\n                    \n                    <p>The node will take several hours to synchronize.</p>\n                    \n                    <h3 class=\"title\">GPU Mining Setup</h3>\n                    <p>Download the latest ethminer from GitHub, unpack it and start using the following commands:</p>\n                    \n                    <code >wget https://github.com/ethereum-mining/ethminer/releases/download/v0.18.0/ethminer-0.18.0-cuda-9-linux-x86_64.tar.gz\n                    tar -xvf ethminer-0.18.0-cuda-9-linux-x86_64.tar.gz\n                    cd bin/</code>\n                    <p>If you have a CUDA-Enabled Nvidia graphics card run:</p>\n                    \n                    <code >./ethminer -U -P http://127.0.0.1:8545/</code>\n                    <p>If you have an AMD (OpenGL) graphics card run:</p>\n                    \n                    <code>./ethminer -G -P http://127.0.0.1:8545/</code >\n                    <p>If you have any questions or you're facing issues setting yourself up don't hesitate to ask for help on our Discord server.</p>\n                </div>\n            </div>\n\n            <div class=\"section section-basic comunity\" id=\"project\">\n                <div class=\"container\" style=\"padding: 60px 0;\">\n                    <h2 class=\"title text-center\" style=\"margin: 0 0 80px 0;\">List of community projects built on devETH</h2>\n\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <img src=\"./assets/img/illustration.png\" style=\"margin: 50px 0 0;\">\n                        </div>\n                        <div class=\"col-md-6\" style=\"color: #333;\">\n                            <ul class=\"list-group\">\n                                <li class=\"list-group-item active\">MARKETS</li>\n                                <li class=\"list-group-item\"><a href=\"https://exchange.centex.io/exchange/DTH-ETH\" target=\"_blank\">Centex</a></li>\n                                <li class=\"list-group-item active\">DAPPS</li>\n                                <li class=\"list-group-item\"><a href=\"https://www.unklick.de/deveth_swap/#/swap\" target=\"blank\">devSwap</a></li>\n                                <li class=\"list-group-item\"><a href=\"https://www.unklick.de/\" target=\"_blank\">Image poster</a></li>\n                                <li class=\"list-group-item active\">MINING POOLS</li>\n                                <li class=\"list-group-item\"><a href=\"https://cethpool.vkoskiv.com/\" target=\"_blank\">vkoskiv-pool</a></li>\n                                <li class=\"list-group-item\"><a href=\"https://pool.serverhub.icu/\" target=\"_blank\">ServerHub</a></li>\n                                <li class=\"list-group-item active\">BLOCK EXPLORERS</li>\n                                <li class=\"list-group-item\"><a href=\"https://www.explorer.deveth.org\" target=\"_blank\">devETH block-explorer</a></li>\n                                <li class=\"list-group-item\"><a href=\"https://expedition.dev/?network=Ethereum%20Classic&rpcUrl=https%3A%2F%2Frpc.deveth.org\" target=\"_blank\">Decent Block explorer</a></li>\n                              </ul>\n                        </div>\n                    </div>\n                    \n                </div>\n            </div>\n            \n            <div class=\"section section-basic padding-margin-tob-bottom\" id=\"{{data.wallet_setup.id}}\">\n                <div class=\"container\">\n                    <h2 class=\"title\">{{data.wallet_setup.title}}</h2>\n\n                    <div innerHtml=\"{{data.wallet_setup.content}}\"></div>\n                    <h4>how to setup</h4>\n                    <video controls=\"\" class=\"wallet-stup-video\">\n\n                        <source src=\"https://i.imgur.com/4RUl5I2.mp4\" type=\"video/mp4\">\n                    \n                        Sorry, your browser doesn't support embedded videos.\n                    </video>\n                    \n                </div>\n            </div>\n\n            <div class=\"section section-basic some-background\" id=\"{{data.some_background.id}}\">\n                <div class=\"container\">\n                    <h2 class=\"title\">{{data.some_background.title}}</h2>\n\n                    <div innerHtml=\"{{data.some_background.content}}\"></div>\n                    \n                </div>\n            </div>\n\n            <div class=\"section section-basic padding-margin-tob-bottom\" id=\"{{data.more_transparancy.id}}\">\n                <div class=\"container\">\n                    <h2 class=\"title\">{{data.more_transparancy.title}}</h2>\n                    <div innerHtml=\"{{data.more_transparancy.content}}\"></div> \n                </div>\n            </div>\n        </ng-container>\n  <footer class=\"footer\" data-background-color=\"black\">\n      <div class=\"container\">\n          <div class=\"copyright\">\n              &copy;\n              2021 devETH Foundation\n              <a href=\"https://github.com/devethorg\" target=\"_blank\">github</a> | \n              <a href=\"https://twitter.com/devethorg\" target=\"_blank\">Twitter</a>.\n          </div>\n      </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "ObLD":
/*!***************************************************!*\
  !*** ./src/app/components/pageService.service.ts ***!
  \***************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
    }
    PageService.prototype.getJSON = function () {
        return this.http.get("../assets/data/pages.json");
    };
    PageService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");









var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
            _this.renderer.listen('window', 'scroll', function (event) {
                var number = window.scrollY;
                var _location = _this.location.path();
                _location = _location.split('/')[2];
                if (number > 150 || window.pageYOffset > 150) {
                    navbar.classList.remove('navbar-transparent');
                }
                else if (_location !== 'login' && _this.location.path() !== '/nucleoicons') {
                    // remove logic
                    navbar.classList.add('navbar-transparent');
                }
            });
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
    ]; };
    AppComponent.propDecorators = {
        navbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],] }]
    };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.component */ "93si");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");

 // this is needed!









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_components_component__WEBPACK_IMPORTED_MODULE_9__["ComponentsComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.component */ "93si");






var routerOptions = {
    useHash: true,
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64]
};
var routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: _components_components_component__WEBPACK_IMPORTED_MODULE_5__["ComponentsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, routerOptions)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "cruu":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar .navbar-nav .nav-item .nav-link:not(.btn):hover {\n  border-radius: 0;\n  border-bottom: 2px solid #fff;\n  background: none !important;\n}\n\n.bg-primary {\n  background-color: #583d72 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7QUFDSiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbms6bm90KC5idG4pOmhvdmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJnLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODNkNzIgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg bg-primary fixed-top\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" [routerLink]=\"['/']\" placement=\"bottom\">\n                <b>devETH</b>\n            </a>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar bar1\"></span>\n                <span class=\"navbar-toggler-bar bar2\"></span>\n                <span class=\"navbar-toggler-bar bar3\"></span>\n            </button>\n      </div>\n        <div class=\"collapse navbar-collapse\" data-nav-image=\"assets/img/blurred-image-1.jpg\" data-color=\"green\">\n            <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" routerLink=\".\" fragment=\"whyDevEth\">\n                      <b>Why devETH</b>\n                  </a>\n              </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\".\" fragment=\"miningGuide\">\n                      <b>Mining guide</b>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\".\" fragment=\"walletSetup\">\n                        <b>Wallet setup</b>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" routerLink=\".\" fragment=\"background\">\n                      <b>Background</b>\n                  </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\".\" fragment=\"transparancy\">\n                    <b>Transparacy</b>\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"https://serverhub.icu/\" target=\"_blank\">\n                    <b>Mining pools</b>\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"https://explore.deveth.org/\" target=\"_blank\">\n                    <b>Block-Explorer</b>\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"https://discord.com/invite/xFmCcaEjPK\" target=\"_blank\">\n                    <i class=\"fab fa-discord\"></i>\n                    <p class=\"d-lg-none d-xl-none\">discord</p>\n                </a>\n              </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Twitter\" data-placement=\"bottom\" href=\"https://twitter.com/devethorg\" target=\"_blank\">\n                    <i class=\"fab fa-twitter\"></i>\n                    <p class=\"d-lg-none d-xl-none\">Twitter</p>\n                  </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map