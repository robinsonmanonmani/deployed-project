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

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_navBar_component__ = __webpack_require__("../../../../../src/app/navbar/navBar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__intro_intro_component__ = __webpack_require__("../../../../../src/app/intro/intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mainContent_mainContent_component__ = __webpack_require__("../../../../../src/app/mainContent/mainContent.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { AppComponent } from './demo-page/app.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            //AppComponent
            __WEBPACK_IMPORTED_MODULE_2__navbar_navBar_component__["a" /* NavBar */],
            __WEBPACK_IMPORTED_MODULE_3__intro_intro_component__["a" /* Intro */],
            __WEBPACK_IMPORTED_MODULE_4__mainContent_mainContent_component__["a" /* MainContent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        //bootstrap: [AppComponent]
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__navbar_navBar_component__["a" /* NavBar */], __WEBPACK_IMPORTED_MODULE_3__intro_intro_component__["a" /* Intro */], __WEBPACK_IMPORTED_MODULE_4__mainContent_mainContent_component__["a" /* MainContent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/intro/intro.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container staticbg\">\r\n    <div class=\"row align-self-center\">\r\n        <canvas></canvas>\r\n        <div class=\"col\">\r\n            <div class='text'>\r\n                <h1 class=\"tagline\">\r\n                    <div class='content'></div>\r\n                    <div class='dash'></div>\r\n                </h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/intro/intro.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// module
exports.push([module.i, ".staticbg {\n  background-image: url(\"/assets/images/background.jpg\");\n  background-repeat-x: no-repeat;\n  background-repeat-y: no-repeat;\n  background-position-x: center;\n  background-position-y: -50px;\n  background-attachment: fixed;\n  height: 500px;\n  color: #fff;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.tagline {\n  margin-top: -260px;\n  width: 95%; }\n\nbody {\n  font-family: 'Roboto';\n  color: #333; }\n\n.text {\n  width: 100%;\n  text-align: center;\n  height: 50px;\n  line-height: 50px;\n  font-size: 30px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto; }\n\n.text .content {\n  display: inline; }\n\n.text .dash {\n  display: inline-block;\n  height: 3px;\n  width: 20px;\n  background-color: #3498db;\n  -webkit-animation: blink .5s infinite linear;\n          animation: blink .5s infinite linear; }\n\n@-webkit-keyframes blink {\n  0% {\n    opacity: 1; }\n  99% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes blink {\n  0% {\n    opacity: 1; }\n  99% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\ndiv.absolute-center {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  opacity: 1;\n  visibility: visible;\n  transition: all .5s; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/intro/intro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Intro; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Intro = (function () {
    function Intro() {
    }
    Intro.prototype.ngOnInit = function () {
        var app = {
            text: "Hi! I'm a UI Developer. I like to code, automate stuff and do fun things..",
            index: 0,
            chars: 0,
            speed: 100,
            container: ".text .content",
            init: function () {
                this.chars = this.text.length;
                return this.write();
            },
            write: function () {
                $(this.container).append(this.text[this.index]);
                if (this.index < this.chars) {
                    this.index++;
                    return window.setTimeout(function () {
                        return app.write();
                    }, this.speed);
                }
            }
        };
        app.init();
        //ninivert, September 2016
        /*VARIABLES*/
        var canvas = document.getElementsByTagName('canvas')[0];
        //canvas.width = document.body.clientWidth;
        canvas.width = document.getElementsByClassName('row')[0].clientWidth;
        //canvas.width = screen.height;
        //canvas.height = document.body.clientHeight;
        canvas.height = Number($('canvas').parents('.container').css('height').split('px')[0]);
        //canvas.height = screen.width;
        var ctx = canvas.getContext('2d');
        /*Modify options here*/
        //possible characters that will appear
        //var characterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var characterList = ['Angular4', 'jQuery', 'CSS', 'SCSS', 'HTML5', 'Java', 'BootStrap 4', 'NodeJS', 'Grunt', 'Karma', 'Jasmine'];
        //stocks possible character attributes
        var layers = {
            n: 3,
            //letters: [50, 20, 15, 10, 5], //letters per layer (starting from the deepest layer)
            letters: [50, 20, 15],
            //coef: [0.1, 0.2, 0.4, 0.6, 0.8], //how much the letters move from the mouse (starting from the deepest layer)
            coef: [0.1, 0.2, 0.4],
            //size: [16, 22, 36, 40, 46], //font size of the letters (starting from the deepest layer)
            size: [16, 22, 36],
            //color: ['#fff', '#eee', '#ccc', '#bbb', '#aaa'], //color of the letters (starting from the deepest layer)
            color: ['#fff', '#eee', '#ccc'],
            font: 'Courier' //font family (of every layer)
        };
        /*End of options*/
        var characters = [];
        var mouseX = document.body.clientWidth / 2;
        var mouseY = document.body.clientHeight / 2;
        var rnd = {
            btwn: function (min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            },
            choose: function (list) {
                return list[rnd.btwn(0, list.length)];
            }
        };
        /*LETTER DRAWING*/
        function drawLetter(char) {
            ctx.font = char.size + 'px ' + char.font;
            ctx.fillStyle = char.color;
            var x = char.posX + (mouseX - canvas.width / 2) * char.coef;
            var y = char.posY + (mouseY - canvas.height / 2) * char.coef;
            ctx.fillText(char.char, x, y);
        }
        /*ANIMATION*/
        document.onmousemove = function (ev) {
            mouseX = ev.pageX - canvas.offsetLeft;
            mouseY = ev.pageY - canvas.offsetTop;
            if (window.requestAnimationFrame) {
                requestAnimationFrame(update);
            }
            else {
                update();
            }
        };
        function update() {
            clear();
            render();
        }
        function clear() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        function render() {
            for (var i = 0; i < characters.length; i++) {
                drawLetter(characters[i]);
            }
        }
        /*INITIALIZE*/
        function createLetters() {
            for (var i = 0; i < layers.n; i++) {
                for (var j = 0; j < layers.letters[i]; j++) {
                    var character = rnd.choose(characterList);
                    var x = rnd.btwn(0, canvas.width);
                    var y = rnd.btwn(0, canvas.height);
                    characters.push({
                        char: character,
                        font: layers.font,
                        size: layers.size[i],
                        color: layers.color[i],
                        layer: i,
                        coef: layers.coef[i],
                        posX: x,
                        posY: y
                    });
                }
            }
        }
        createLetters();
        update();
        /*REAJUST CANVAS AFTER RESIZE*/
        //   window.onresize = function() {
        // 	  location.reload();
        //   };
    };
    return Intro;
}());
Intro = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'intro-view',
        template: __webpack_require__("../../../../../src/app/intro/intro.component.html"),
        styles: [__webpack_require__("../../../../../src/app/intro/intro.component.scss")]
    })
], Intro);

//# sourceMappingURL=intro.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainContent/mainContent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6 col-xl-6 topmargin\">\r\n            <div class=\"card maxHeight\">\r\n                <div class=\"card-header text-center\"><h4>Education</h4></div>\r\n                <div class=\"card-block text-center education\">\r\n                    <p class=\"card-text fa fa-graduation-cap\"> Bachelor's Degree, Computer Science\r\n                    <br><small class=\"text-muted\">Anna University, Chennai, India</small></p>\r\n                    \r\n                    <p class=\"card-text fa fa-institution\"> High School\r\n                    <br><small class=\"text-muted\">SPIC Nagar Higher Secondary School, Thoothukudi, India</small></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"col-lg-6 col-xl-6 topmargin\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\"><h4>Experience</h4></div>\r\n                <div class=\"card-block\">\r\n                    <p><span class=\"fa fa-cog fa-spin\"></span> UI Developer, <strong>Delta Air Lines </strong><small class=\"text-muted fa fa-map-marker\"> Atlanta, GA</small></p>\r\n                    <p><span class=\"fa fa-check\"></span> UI Developer, <strong>The Nielsen Company </strong><small class=\"text-muted fa fa-map-marker\"> Chicago, IL</small></p>\r\n                    <p><span class=\"fa fa-check\"></span> Java Developer, <strong>The Nielsen Company </strong><small class=\"text-muted fa fa-map-marker\"> Chennai, India</small></p>\r\n                    <p><span class=\"fa fa-check\"></span> Java Developer, <strong>The Home Depot </strong><small class=\"text-muted fa fa-map-marker\"> Chennai, India</small></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n    <div class=\"card topmargin\">\r\n        <div class=\"card-header\"><h4>Skills</h4></div>\r\n        <div class=\"card-block\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-xl-6 topmargin\">\r\n                    <div class=\"row\">\r\n                            <h4>Coding</h4>\r\n                    </div>\r\n                    <div class=\"progress\">\r\n                        <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-black\" role=\"progressbar\" style=\"width: 90%;\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                AngularJS 4\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-center\">\r\n                        <ul>\r\n                            <li class=\"fa fa-asterisk\"> NodeJS</li>\r\n                            <li class=\"fa fa-asterisk\"> Gulp</li>\r\n                            <li class=\"fa fa-asterisk\"> Karma</li>\r\n                            <li class=\"fa fa-asterisk\"> Jasmine</li>\r\n                            <li class=\"fa fa-asterisk\"> Express UI Server</li>\r\n                            <li class=\"fa fa-asterisk\"> Typescript</li>\r\n                            <li class=\"fa fa-asterisk\"> Fontawesome</li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"progress\">\r\n                        <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-black\" role=\"progressbar\" style=\"width: 85%;\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                jQuery HTML/JS/CSS\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-center\">\r\n                        <ul>\r\n                            <li class=\"fa fa-asterisk\"> Grunt</li>\r\n                            <li class=\"fa fa-asterisk\"> Karma</li>\r\n                            <li class=\"fa fa-asterisk\"> Jasmine</li>\r\n                            <li class=\"fa fa-asterisk\"> jsbeautifier</li>\r\n                            <li class=\"fa fa-asterisk\"> sass</li>\r\n                            <li class=\"fa fa-asterisk\"> jshint</li>  \r\n                            <li class=\"fa fa-asterisk\"> jsonlint</li>  \r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"progress\">\r\n                        <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-black\" role=\"progressbar\" style=\"width: 70%;\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                ExtJS\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-center\">\r\n                        <ul>\r\n                            <li class=\"fa fa-asterisk\"> 3.x</li>\r\n                            <li class=\"fa fa-asterisk\"> 4.x</li>\r\n                            <li class=\"fa fa-asterisk\"> Sencha Touch</li>\r\n                            <li class=\"fa fa-asterisk\"> 5.x</li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"progress\">\r\n                        <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-black\" role=\"progressbar\" style=\"width: 60%;\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                Java J2EE\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-center\">\r\n                        <ul>\r\n                            <li class=\"fa fa-asterisk\"> Struts</li>\r\n                            <li class=\"fa fa-asterisk\"> Collections</li>\r\n                            <li class=\"fa fa-asterisk\"> Spring Framework</li>\r\n                            <li class=\"fa fa-asterisk\"> REST Services</li>\r\n                            <li class=\"fa fa-asterisk\"> jUnits</li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"progress\">\r\n                        <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-black\" role=\"progressbar\" style=\"width: 50%;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                MySQL\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-center\">\r\n                        <ul>\r\n                            <li class=\"fa fa-asterisk\"> Basics</li>\r\n                            <li class=\"fa fa-asterisk\"> Joins</li>\r\n                            <li class=\"fa fa-asterisk\"> Like/Wildcards</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6 col-xl-6\">\r\n                    <div class=\"row\">\r\n                        <h4>Build Engineering - CICD</h4>\r\n                    </div>\r\n                    <h6 class=\"jenkins\">Jenkins</h6>\r\n                    <ul>\r\n                        <li class=\"\"> Building Jenkins, setting up basic plugins, security matrix</li>\r\n                        <li class=\"\"> Setting up Multibranch Pipelines, parameterized jobs</li>\r\n                        <li class=\"\"> Setting up JenkinsFile with Build stages</li>\r\n                        <li class=\"\"> Setting up HTML Publisher for use with Test Result Analyzer, Karma Code Coverage and other report publishing tools</li>\r\n                        <li class=\"\"> Integrating Slack Notifications into JenkinsFile Pipeline scripts</li>\r\n                        <li class=\"\"> Setting up unit tests using karma/jasmine</li>\r\n                        <li class=\"\"> Setting up AX tests using axe-webdriver plugins</li>\r\n                        <li class=\"\"> Setting up Performance tests using sitespeed.io</li>\r\n                        <li class=\"\"> Setting up Availability tests using custom coded scripts and Jenkins HTML Publisher plugin</li>\r\n                        <li class=\"\"> Setting up Security & Vulnerability tests using OWASP ZAP</li>\r\n                    </ul>\r\n                    <div class=\"containerGutter\"></div> \r\n                </div>\r\n                <div class=\"col-lg-6 col-xl-6\">\r\n                    <div class=\"row\">\r\n                        <h4>Build Scripts</h4>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-lg-4 col-xl-4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-4 text-center\"><img class=\"icon\" src=\"../../assets/images/grunt.png\"></div>\r\n                                <div class=\"col-8 iconText\">Grunt</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-lg-4 col-xl-4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-4 text-center\"><img class=\"icon\" src=\"../../assets/images/gulp.png\"></div>\r\n                                <div class=\"col-8 iconText\">Gulp</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-lg-4 col-xl-4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-4 text-center\"><img class=\"icon\" src=\"../../assets/images/gradle.png\"></div>\r\n                                <div class=\"col-8 iconText\">Gradle</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"containerGutter\"></div> \r\n                </div>\r\n                <div class=\"col-lg-6 col-xl-6\">\r\n                    <div class=\"row\">\r\n                        <h4>Version Control</h4>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-lg-4 col-xl-4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-4 text-center\"><img class=\"icon\" src=\"../../assets/images/github.png\"></div>\r\n                                <div class=\"col-8 iconText\">Github</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-lg-4 col-xl-4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-4 text-center\"><img class=\"icon\" src=\"../../assets/images/subversion.png\"></div>\r\n                                <div class=\"col-8 iconText\">Subversion</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-lg-4 col-xl-4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-4 text-center\"><img class=\"icon\" src=\"../../assets/images/clearcase.png\"></div>\r\n                                <div class=\"col-8 iconText\">Clearcase</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"containerGutter\"></div> \r\n                </div>\r\n                <div class=\"col-lg-6 col-xl-6\">\r\n                    <div class=\"row\">\r\n                        <h4>IDE</h4>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-lg-4 col-xl-4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-4 text-center\"><img class=\"icon\" src=\"../../assets/images/vscode.png\"></div>\r\n                                <div class=\"col-8 iconText\">VS Code</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-lg-4 col-xl-4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-4 text-center\"><img class=\"icon\" src=\"../../assets/images/eclipse.png\"></div>\r\n                                <div class=\"col-8 iconText\">Eclipse</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-lg-4 col-xl-4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-4 text-center\"><img class=\"icon\" src=\"../../assets/images/rad.png\"></div>\r\n                                <div class=\"col-8 iconText\">RAD</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"containerGutter\"></div> \r\n                </div>\r\n                <div class=\"col-lg-6 col-xl-6\">\r\n                    <div class=\"row\">\r\n                        <h4>Project Tools</h4>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-lg-4 col-xl-4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-4 text-center\"><img class=\"icon\" src=\"../../assets/images/jira.png\"></div>\r\n                                <div class=\"col-8 iconText\">JIRA</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-lg-4 col-xl-4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-4 text-center\"><img class=\"icon\" src=\"../../assets/images/confluence.png\"></div>\r\n                                <div class=\"col-8 iconText\">Confluence</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-lg-4 col-xl-4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-4 text-center\"><img class=\"icon\" src=\"../../assets/images/hpqc.png\"></div>\r\n                                <div class=\"col-8 iconText\">HP QC</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-lg-4 col-xl-4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-4 text-center\"><img class=\"icon\" src=\"../../assets/images/sharepoint.png\"></div>\r\n                                <div class=\"col-8 iconText\">Sharepoint</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"containerGutter\"></div> \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/mainContent/mainContent.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hideme {\n  opacity: 0; }\n\n.topmargin {\n  margin-top: 10px; }\n\n.progress-bar {\n  height: 40px;\n  line-height: 40px;\n  font-size: 18px;\n  color: #fff;\n  font-weight: bold; }\n\n.bg-black {\n  background-color: #000 !important; }\n\n.education {\n  line-height: 80px; }\n\n.jenkins {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/jenkins.png") + ");\n  background-repeat: no-repeat;\n  line-height: 5.625rem;\n  padding-left: 5.625rem;\n  background-size: contain; }\n\n.buildScript {\n  font-size: larger; }\n\n.icon {\n  height: 50px; }\n\n.iconText {\n  line-height: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainContent/mainContent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MainContent = (function () {
    function MainContent() {
    }
    MainContent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__(function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('.monster').fadeIn('slow');
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__(document).ready(function () {
            /* Every time the window is scrolled ... */
            __WEBPACK_IMPORTED_MODULE_1_jquery__(window).scroll(function () {
                /* Check the location of each desired element */
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.hideme').each(function (i) {
                    var bottom_of_object = __WEBPACK_IMPORTED_MODULE_1_jquery__(this).position().top + __WEBPACK_IMPORTED_MODULE_1_jquery__(this).outerHeight();
                    var bottom_of_window = __WEBPACK_IMPORTED_MODULE_1_jquery__(window).scrollTop() + __WEBPACK_IMPORTED_MODULE_1_jquery__(window).height();
                    /* If the object is completely visible in the window, fade it it */
                    if (bottom_of_window > bottom_of_object) {
                        __WEBPACK_IMPORTED_MODULE_1_jquery__(this).animate({ 'opacity': '1' }, 1500);
                    }
                });
            });
        });
    };
    return MainContent;
}());
MainContent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'main-content-view',
        template: __webpack_require__("../../../../../src/app/mainContent/mainContent.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainContent/mainContent.component.scss")]
    })
], MainContent);

//# sourceMappingURL=mainContent.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navBar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBar; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavBar = (function () {
    function NavBar() {
    }
    return NavBar;
}());
NavBar = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar-lg.component.scss")]
    })
], NavBar);

//# sourceMappingURL=navBar.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar-lg.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* The navigation bar */\n.navbar {\n  background-color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-toggleable-md navbar-light\">\r\n\t<button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n\t  <span class=\"navbar-toggler-icon\"></span>\r\n\t</button>\r\n\t<a class=\"navbar-brand\" href=\"#\">Robinson Manonmani</a>\r\n\t<div class=\"collapse navbar-collapse flex-row-reverse\" id=\"navbarNavAltMarkup\">\r\n\t  <div class=\"navbar-nav\">\r\n\t\t<a class=\"nav-item nav-link\" href=\"#\">Skills</a>\r\n\t\t<a class=\"nav-item nav-link\" href=\"#\">Experience</a>\r\n\t\t<a class=\"nav-item nav-link\" href=\"#\">Contact</a>\r\n\t  </div>\r\n\t</div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/assets/images/jenkins.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jenkins.88fbb6e80583d11c42d1.png";

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