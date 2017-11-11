webpackJsonp([2],{

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
exports.push([module.i, "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #edeff2;\r\n  font-family: \"Segoe UI\", \"Calibri\", \"Roboto\", sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.chat_window {\r\n  position: absolute;\r\n  width: calc(100% - 20px);\r\n  max-width: 800px;\r\n  height: calc(100% - 20px);\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n          transform: translateX(-50%) translateY(-50%);\r\n  box-shadow: 0px 4px 61px -2px rgba(0,0,0,0.28);\r\n  background-color: #fcfcfc;\r\n  overflow-x: hidden;\r\n  border: 1px #eee solid;\r\n}\r\n\r\n.top_menu {\r\n  background-color: #2b303e;\r\n  padding: 10px 16px;\r\n  height: 56px;\r\n}\r\n\r\n.top_menu .title {\r\n  font-size: 16px;\r\n  font-family: sans-serif, \"Segoe UI\";\r\n  color: rgb(248, 251, 255);\r\n  font-weight: 300;\r\n  vertical-align: middle;\r\n}\r\n\r\n\r\n.top_menu .sub-title {\r\n  font-size: 13px;\r\n  font-family: sans-serif, \"Segoe UI\";\r\n  color: rgb(248, 251, 255);\r\n  font-weight: 200;\r\n  vertical-align: middle;\r\n  padding-top: 2px;\r\n}\r\n\r\n.messages {\r\n  position: relative;\r\n  list-style: none;\r\n  padding: 20px 10px 0 10px;\r\n  height: calc(100% - 125px);\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n  margin-top: 1px;\r\n}\r\n.user {\r\n  border-radius: 2px;\r\n  background-color: rgb(216, 216, 216);\r\n  padding: 15px 20px 15px 20px;\r\n  margin-left: 40px;\r\n /* margin-right: 25px; */\r\n  margin-bottom: 20px;\r\n  display: inline-block;\r\n  float: right;\r\n  clear: both;\r\n\r\n}\r\n\r\n.user span {\r\n  font-size: 16px;\r\n  color: rgb(37, 53, 85);\r\n  line-height: 1.2;\r\n  font-weight: 300;\r\n  font-family: \"Segoe UI\", \"Open Sans\", Arial, sans-serif;\r\n}\r\n\r\n\r\n.watson{\r\n  border-radius: 2px;\r\n  background-color: rgb(117, 156, 209);\r\n  color: rgb(37, 53, 85);\r\n  padding: 20px;\r\n  margin-right: 40px;\r\n  margin-bottom: 22px;\r\n  display: block;\r\n  float: left;\r\n  clear: both;\r\n}\r\n\r\n.watson span{\r\n  font-size: 16px;\r\n  margin-top: -11px;\r\n  color: white;\r\n  line-height: 1.4;\r\n  font-weight: 300;\r\n  font-family: \"Segoe UI\", \"Open Sans\", Arial, sans-serif;\r\n}\r\n\r\n.I_can_help_you_with_incident_reporting__searchi {\r\n  font-size: 16px;\r\n  font-family: \"Segoe UI\";\r\n  color: rgb(255, 255, 255);\r\n  line-height: 1.2;\r\n  text-align: left;\r\n  position: absolute;\r\n  left: 53px;\r\n  top: 189.398px;\r\n  width: 521px;\r\n  height: 36px;\r\n  z-index: 26;\r\n}\r\n\r\n\r\n.header-icon::before\r\n{\r\n  position: relative;\r\n  top: -3px;\r\n  display: inline-block;\r\n  height: 37px;\r\n  width: 30px;\r\n  float: left;\r\n  margin-right: 8px;\r\n}\r\n\r\n\r\n\r\n.bottom_wrapper {\r\n\r\n  position: relative;\r\n  width: 100%;\r\n  background: #f2f2f2;\r\n  padding: 20px 20px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  border-bottom: #eee 1px solid;\r\n  border-top: #cccccc 1px solid;\r\n\r\n}\r\n.bottom_wrapper .message_input_wrapper {\r\n\r\n  width: calc(100% - 110px);\r\n  position: relative;\r\n  padding: 0 20px;\r\n  display: inline-block;\r\n  border-width: 0px;\r\n  background: #f2f2f2;\r\n  height: 30px;\r\n  font-weight: 300;\r\n  border: none;\r\n}\r\n\r\n.bottom_wrapper .message_input_wrapper .message_input {\r\n  border: none;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  width: calc(100% - 40px);\r\n  position: absolute;\r\n  outline-width: 0;\r\n  color: gray;\r\n  font-size: 16px;\r\n  background: transparent;\r\n}\r\n\r\n.bottom_wrapper .send_message {\r\n  display: inline-block;\r\n  float: right;\r\n  cursor: pointer;\r\n  margin-right: 30px;\r\n  position: relative;\r\n  top: 4px;\r\n}\r\n\r\n.bottom_wrapper .send_message:before {\r\n  content: \"\\F1D9\";\r\n  font-family: FontAwesome;\r\n  font-size: 22px;\r\n  color: #4d85d1;\r\n\r\n}\r\n\r\n.bottom_wrapper .send_message:hover:before {\r\n  color: #0059d1;\r\n}\r\n\r\n.bottom_wrapper .send_voice {\r\n  display: inline-block;\r\n  float: right;\r\n  cursor: pointer;\r\n  position: relative;\r\n  top: 4px;\r\n}\r\n\r\n.bottom_wrapper .send_voice:before {\r\n  content: \"\\F130\";\r\n  font-family: FontAwesome;\r\n  font-size: 22px;\r\n  color: #aaa;\r\n}\r\n\r\n\r\n.bottom_wrapper .send_voice:hover:before {\r\n  color: #0059d1;\r\n}\r\n\r\n.bottom_wrapper .active:before {\r\n  content: \"\\F130\";\r\n  font-family: FontAwesome;\r\n  font-size: 22px;\r\n  color: #4d85d1 !important;\r\n}\r\n\r\n\r\n/*\r\n\r\n.bottom_wrapper .send_message {\r\n  display: inline-block;\r\n  float: right;\r\n  transition: all 0.2s linear;\r\n  width: 89px;\r\n  height: 30px;\r\n  padding: 0;\r\n  color: white;\r\n  text-align: center;\r\n  background: rgb(102, 204, 51);\r\n  border: 0;\r\n  border-radius: 6px;\r\n  border-bottom: 1px solid #4c9726;\r\n  cursor: pointer;\r\n  -webkit-box-shadow: inset 0 -2px #4c9726;\r\n  box-shadow: inset 0 -2px #4c9726;\r\n  font-weight: 400;\r\n  margin-left: 20px;\r\n  font-family: 'roboto', sans-serif;\r\n}\r\n\r\n.bottom_wrapper .send_message:hover {\r\n  background: #33cc8d;\r\n  -webkit-box-shadow: inset 0 -2px #38701c;\r\n  box-shadow: inset 0 -2px #38701c\r\n}\r\n */\r\n\r\n\r\n.bottom_wrapper .send_message .text {\r\n  font-size: 16px;\r\n  font-weight: 300;\r\n  display: inline-block;\r\n  line-height: 26px;\r\n}\r\n\r\n.message_template {\r\n  display: none;\r\n}\r\n\r\n.icon {\r\n  width: 16px;\r\n  height: 16px;\r\n  float: left;\r\n  text-rendering: optimizeLegibility;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  margin-top: 6px;\r\n  margin-left: 10px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <div class=\"top_menu\">\r\n    <div class=\"title\"><span class=\"header-icon\"></span>Help Desk</div>\r\n    <div class=\"sub-title\">This bot is built to work as a helpdesk</div>\r\n  </div>\r\n  <ul #scrollMe class=\"messages\">\r\n\r\n\r\n    <li *ngFor=\"let message of messages\" class={{message.from.name}}>\r\n\r\n      <span style=\"white-space: pre-line\" *ngIf=\"message.text!==undefined \"> {{ message.text }}</span>\r\n<span style=\"white-space: pre-line\" *ngIf=\"message.text===undefined && message.attachments[0].content!==undefined\"> {{ message.attachments[0].content.text }}</span>\r\n<img [src]=\"message.attachments[0].contentUrl\" *ngIf= \"message.text===undefined && message.attachments[0].content===undefined\" width=\"600\" height=\"500\">\r\n\r\n\r\n</li>\r\n</ul>\r\n<div class=\"bottom_wrapper clearfix\">\r\n  <div class=\"message_input_wrapper\">\r\n    <input class=\"message_input\" placeholder=\"Type your message here...\" [(ngModel)]=\"message\" (keyup.enter)=\"send()\" />\r\n  </div>\r\n  <button class=\"btn btn-secondary\" (click)=\"send()\">\r\n   SEND\r\n   <i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>\r\n  </button>\r\n\r\n\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
    function AppComponent(http) {
        this.http = http;
        this.message = "";
        this.messages = [];
        this.backend = "http://localhost:3000/upload";
        this.displayWindow = false;
        this.secret = "";
        this.intruderMessage = "";
    }
    // adding a comment just to trigger buil
    AppComponent.prototype.send = function () {
        var _this = this;
        this.messages.push({ "text": this.message, "from": { name: "user" } });
        console.log(this.message);
        console.log("posting to backend");
        this.http.post(this.backend, {
            "input": {
                "text": this.message
            },
            "context": this.context
        }).subscribe(function (data) {
            console.log(data);
            var packet = JSON.parse(data["_body"]);
            _this.messages.push({
                "text": packet.text,
                "img": packet.img,
                "from": { name: "watson" }
            });
            _this.context = packet.context;
            console.log("current_context", _this.context);
        }, function (err) { return console.log(err); });
        this.message = "";
    };
    AppComponent.prototype.ngOnInit = function () {
        this.scrollToBottom();
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    AppComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('scrollMe'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], AppComponent.prototype, "myScrollContainer", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_font_awesome_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__safe_pipe_pipe__ = __webpack_require__("../../../../../src/app/safe-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__safe_pipe_pipe__["a" /* SafePipePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/safe-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipePipe = (function () {
    function SafePipePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipePipe.prototype.transform = function (url) {
        var link = "https://www.youtube.com/embed/" + url.substring(16);
        return this.sanitizer.bypassSecurityTrustResourceUrl(link);
    };
    return SafePipePipe;
}());
SafePipePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'safePipe'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipePipe);

var _a;
//# sourceMappingURL=safe-pipe.pipe.js.map

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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map