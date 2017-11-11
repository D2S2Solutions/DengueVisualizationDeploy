webpackJsonp([2,5],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(907);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GraphDataService = (function () {
    // Injecting the http client into the service
    function GraphDataService(http) {
        this.http = http;
    }
    // Method retrieve all the posts
    GraphDataService.prototype.getResults = function () {
        var url = 'http://dengue.projects.mrt.ac.lk:8091/prediction?id=69&type=0';
        return this.http.get(url)
            .map(this.parseData)
            .catch(this.handleError);
    };
    GraphDataService.prototype.getXGBResults = function () {
        var url = 'http://dengue.projects.mrt.ac.lk:8091/prediction?id=69&type=1';
        return this.http.get(url)
            .map(this.parseData)
            .catch(this.handleError);
    };
    GraphDataService.prototype.getCatBoostResults = function () {
        var url = 'http://dengue.projects.mrt.ac.lk:8091/prediction?id=69&type=2';
        return this.http.get(url)
            .map(this.parseData)
            .catch(this.handleError);
    };
    GraphDataService.prototype.getMLPANNResults = function () {
        var url = 'http://dengue.projects.mrt.ac.lk:8091/prediction?id=69&type=4';
        return this.http.get(url)
            .map(this.parseData)
            .catch(this.handleError);
    };
    GraphDataService.prototype.getKerasDLResults = function () {
        var url = 'http://dengue.projects.mrt.ac.lk:8091/prediction?id=69&type=5';
        return this.http.get(url)
            .map(this.parseData)
            .catch(this.handleError);
    };
    GraphDataService.prototype.getLassoResults = function () {
        var url = 'http://dengue.projects.mrt.ac.lk:8091/prediction?id=69&type=3';
        return this.http.get(url)
            .map(this.parseData)
            .catch(this.handleError);
    };
    GraphDataService.prototype.getXGBClassifications = function () {
        var url = 'http://dengue.projects.mrt.ac.lk:8091/prediction?id=69&type=7';
        return this.http.get(url)
            .map(this.parseData)
            .catch(this.handleError);
    };
    GraphDataService.prototype.getMLPClassifications = function () {
        var url = 'http://dengue.projects.mrt.ac.lk:8091/prediction?id=69&type=6';
        return this.http.get(url)
            .map(this.parseData)
            .catch(this.handleError);
    };
    GraphDataService.prototype.getRFClassifications = function () {
        var url = 'http://dengue.projects.mrt.ac.lk:8091/prediction?id=69&type=8';
        return this.http.get(url)
            .map(this.parseData)
            .catch(this.handleError);
    };
    GraphDataService.prototype.getActualClassifications = function () {
        var url = 'http://dengue.projects.mrt.ac.lk:8091/prediction?id=69&type=9';
        return this.http.get(url)
            .map(this.parseData)
            .catch(this.handleError);
    };
    // This method parses the data to JSON
    GraphDataService.prototype.parseData = function (res) {
        return res.json() || [];
    };
    // Displays the error message
    GraphDataService.prototype.handleError = function (error) {
        var errorMessage;
        errorMessage = error.message ? error.message : error.toString();
        // In real world application, call to log error to remote server
        // logError(error);
        // This returns another Observable for the observer to subscribe to
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errorMessage);
    };
    GraphDataService.prototype.getANNResults = function () {
        var results;
        results = [450, 59, 80, 89, 756, 55, 40, 350, 59, 80, 81, 656, 55, 40];
        return results;
    };
    GraphDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], GraphDataService);
    return GraphDataService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Heshan Sandamal/WebstormProjects/DengueVisualization/src/graph-data.service.js.map

/***/ }),

/***/ 509:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 509;


/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(650);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Heshan Sandamal/WebstormProjects/DengueVisualization/src/main.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function AppComponent() {
        this.title = 'app works! heshan';
        // this.outputArray = <JSON>this.dataArray;
        // fillValues();
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        // fillValues();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(895)
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Heshan Sandamal/WebstormProjects/DengueVisualization/src/app.component.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_app_sidebar__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_chartjs__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graph_graph_component__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navigation_navigation_component__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_graph_data_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graph_classification_graph_classification_component__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mob_heatmap_mob_heatmap_component__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_component_home_component_component__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__regression_timeline_regression_timeline_component__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__classification_timeline_classification_timeline_component__ = __webpack_require__(651);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var appRoutes = [
    { path: 'regression', component: __WEBPACK_IMPORTED_MODULE_7__graph_graph_component__["a" /* GraphComponent */] },
    { path: 'classification', component: __WEBPACK_IMPORTED_MODULE_10__graph_classification_graph_classification_component__["a" /* GraphClassificationComponent */] },
    { path: 'mobility', component: __WEBPACK_IMPORTED_MODULE_12__mob_heatmap_mob_heatmap_component__["a" /* MobHeatmapComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__home_component_home_component_component__["a" /* HomeComponentComponent */] },
    { path: 'regtimeline', component: __WEBPACK_IMPORTED_MODULE_14__regression_timeline_regression_timeline_component__["a" /* RegressionTimelineComponent */] },
    { path: 'clastimeline', component: __WEBPACK_IMPORTED_MODULE_15__classification_timeline_classification_timeline_component__["a" /* ClassificationTimelineComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_app_sidebar__["a" /* AppSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__graph_graph_component__["a" /* GraphComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__graph_classification_graph_classification_component__["a" /* GraphClassificationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__mob_heatmap_mob_heatmap_component__["a" /* MobHeatmapComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_component_home_component_component__["a" /* HomeComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_14__regression_timeline_regression_timeline_component__["a" /* RegressionTimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_15__classification_timeline_classification_timeline_component__["a" /* ClassificationTimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_14__regression_timeline_regression_timeline_component__["a" /* RegressionTimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_15__classification_timeline_classification_timeline_component__["a" /* ClassificationTimelineComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_chartjs__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true, useHash: true } // <-- debugging purposes only
                ),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_graph_data_service__["a" /* GraphDataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Heshan Sandamal/WebstormProjects/DengueVisualization/src/app.module.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassificationTimelineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClassificationTimelineComponent = (function () {
    function ClassificationTimelineComponent() {
        this.dataArray = [2, 1, 21, 312, 123, 123, 1, 12, 12, 12, 12, 12, 12, 12, 31, 2312, 31, 31, 231];
        this.type = 'line';
        this.labels = [];
        this.data = [];
        this.dataset = [];
        this.options = {
            backgroundColor: 'red',
            responsive: true,
            maintainAspectRatio: false,
            bezierCurve: false
        };
        var x = 0;
        for (; x < 52; x++) {
            this.labels[x] = x + 1;
        }
        this.setGraphData();
    }
    ClassificationTimelineComponent.prototype.ngOnInit = function () {
    };
    ClassificationTimelineComponent.prototype.setGraphData = function () {
        this.dataset.push({
            label: 'Actual',
            data: this.dataArray,
            pointBackgroundColor: '#1b69e5',
            borderColor: '#8db0e8',
            pointRadius: 5,
            height: '800',
            backgroundColor: 'transparent',
            lineTension: 0
        });
        this.data = {
            labels: this.labels,
            datasets: this.dataset,
            borderColor: [
                'rgba(255,99,132,1,)'
            ],
            borderWidth: 1,
        };
    };
    ClassificationTimelineComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-classification-timeline',
            template: __webpack_require__(896),
            styles: [__webpack_require__(885)]
        }), 
        __metadata('design:paramtypes', [])
    ], ClassificationTimelineComponent);
    return ClassificationTimelineComponent;
}());
//# sourceMappingURL=C:/Users/Heshan Sandamal/WebstormProjects/DengueVisualization/src/classification-timeline.component.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_graph_data_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphClassificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraphClassificationComponent = (function () {
    function GraphClassificationComponent(graphService) {
        this.graphService = graphService;
        this.dataArray = [[1, 3], [2, 14.01], [3.5, 3.14]];
        this.type = 'line';
        this.annGraphData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        this.xgBootstGraphData = [2,
            2,
            2,
            2,
            2,
            2,
            1,
            2,
            1,
            1,
            2,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            2,
            2,
            1,
            2,
            3,
            3,
            2,
            3,
            2,
            2,
            2,
            2,
            2,
            1,
            1,
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            3,
            3,
            3,
            3,
            2,
        ];
        this.RFGraphData = [2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 2, 2,];
        this.MLPANNGraphData = [2,
            2,
            2,
            2,
            2,
            2,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            2,
            1,
            2,
            1,
            3,
            2,
            3,
            2,
            3,
            2,
            2,
            2,
            2,
            2,
            1,
            1,
            1,
            1,
            2,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            3,
            3,
            3,
            3,
            3,
            3,
            2,
        ];
        this.actualGraphData = [3,
            2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 2, 2, 3, 2, 3, 2, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 3, 3, 3, 3, 2,];
        this.labels = [];
        this.dataset = [];
        this.xgBIndex = -1;
        this.mlpANNIndex = -1;
        this.rfIndex = -1;
        this.options = {
            backgroundColor: 'red',
            responsive: true,
            maintainAspectRatio: false,
            bezierCurve: false
        };
        // this.testfn();
        this.getPosts();
        //
        // this.setGraphData();
        // setTimeout(() => this.setGraphData(), 4000 );
    }
    GraphClassificationComponent.prototype.ngOnInit = function () {
    };
    GraphClassificationComponent.prototype.testfn = function () {
        this.dataset.push({
            label: 'Actual',
            data: this.actualGraphData,
            pointBackgroundColor: '#1b69e5',
            borderColor: '#8db0e8',
            pointRadius: 4,
            height: '900',
            backgroundColor: 'transparent',
            lineTension: 0,
        });
        this.dataset.push({
            label: 'XGBoost',
            data: this.xgBootstGraphData,
            pointBackgroundColor: '#3bd66f',
            borderColor: '#57cc7e',
            pointRadius: 6,
            height: '900',
            backgroundColor: 'transparent',
            lineTension: 0
        });
        this.dataset.push({
            label: 'MLP-ANN',
            data: this.MLPANNGraphData,
            pointBackgroundColor: '#e09808',
            borderColor: '#edb649',
            pointRadius: 8,
            height: '900',
            backgroundColor: 'transparent',
            lineTension: 0
        });
        this.dataset.push({
            label: 'ANN-DL',
            data: this.RFGraphData,
            pointBackgroundColor: '#5e058e',
            borderColor: '#c992e8',
            pointRadius: 10,
            height: '900',
            backgroundColor: 'transparent',
            lineTension: 0
        });
        var x = 0;
        for (; x < this.actualGraphData.length; x++) {
            this.labels[x] = x + 1;
        }
        this.setGraphData();
    };
    GraphClassificationComponent.prototype.getPosts = function () {
        var _this = this;
        // alert('calling backend');
        // this.graphService.getPosts().map(data => this.annGraphData = data);
        this.graphService.getActualClassifications()
            .subscribe(function (response) {
            // this.annGraphData = response.ann;
            _this.actualGraphData = response.predictions;
            _this.dataset.push({
                label: 'Actual',
                data: _this.actualGraphData,
                pointBackgroundColor: '#1b69e5',
                borderColor: '#8db0e8',
                pointRadius: 5,
                height: '800',
                backgroundColor: 'transparent',
                lineTension: 0,
            });
            var x = 0;
            for (; x < _this.actualGraphData.length; x++) {
                _this.labels[x] = x + 1;
            }
            _this.setGraphData();
        }, function (error) {
            alert('Error happened' + error);
        });
        // alert(this.annGraphData);
    };
    GraphClassificationComponent.prototype.setGraphData = function () {
        this.data = {
            labels: this.labels,
            datasets: this.dataset,
            borderColor: [
                'rgba(255,99,132,1,)'
            ],
            borderWidth: 1,
        };
    };
    GraphClassificationComponent.prototype.setXGBData = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var isChecked = target.checked;
        if (isChecked) {
            this.graphService.getXGBClassifications()
                .subscribe(function (response) {
                // this.annGraphData = response.ann;
                _this.xgBootstGraphData = response.predictions;
                _this.xgBIndex = _this.dataset.length;
                _this.dataset.push({
                    label: 'XGBoost',
                    data: _this.xgBootstGraphData,
                    pointBackgroundColor: '#3bd66f',
                    borderColor: '#57cc7e',
                    pointRadius: 5,
                    height: '800',
                    backgroundColor: 'transparent',
                    lineTension: 0
                });
                _this.setGraphData();
            }, function (error) {
                alert('Error happened' + error);
            });
        }
        else {
            this.dataset.splice(this.xgBIndex, 1);
            this.reorganizeIndexes(this.xgBIndex);
            this.setGraphData();
        }
    };
    GraphClassificationComponent.prototype.setMLPANNData = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var isChecked = target.checked;
        if (isChecked) {
            this.graphService.getMLPClassifications()
                .subscribe(function (response) {
                // this.annGraphData = response.ann;
                _this.MLPANNGraphData = response.predictions;
                _this.mlpANNIndex = _this.dataset.length;
                _this.dataset.push({
                    label: 'MLP-ANN',
                    data: _this.MLPANNGraphData,
                    pointBackgroundColor: '#e09808',
                    borderColor: '#edb649',
                    pointRadius: 5,
                    height: '800',
                    backgroundColor: 'transparent',
                    lineTension: 0
                });
                _this.setGraphData();
            }, function (error) {
                alert('Error happened' + error);
            });
        }
        else {
            this.dataset.splice(this.mlpANNIndex, 1);
            this.reorganizeIndexes(this.mlpANNIndex);
            this.setGraphData();
        }
    };
    GraphClassificationComponent.prototype.setRFData = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var isChecked = target.checked;
        if (isChecked) {
            this.graphService.getRFClassifications()
                .subscribe(function (response) {
                // this.annGraphData = response.ann;
                _this.RFGraphData = response.predictions;
                _this.rfIndex = _this.dataset.length;
                _this.dataset.push({
                    label: 'ANN-DL',
                    data: _this.RFGraphData,
                    pointBackgroundColor: '#5e058e',
                    borderColor: '#c992e8',
                    pointRadius: 5,
                    height: '800',
                    backgroundColor: 'transparent',
                    lineTension: 0
                });
                _this.setGraphData();
            }, function (error) {
                alert('Error happened' + error);
            });
        }
        else {
            this.dataset.splice(this.rfIndex, 1);
            this.reorganizeIndexes(this.rfIndex);
            this.setGraphData();
        }
    };
    GraphClassificationComponent.prototype.reorganizeIndexes = function (index) {
        if (this.rfIndex > index) {
            this.rfIndex--;
        }
        if (this.xgBIndex > index) {
            this.xgBIndex--;
        }
        if (this.mlpANNIndex > index) {
            this.mlpANNIndex--;
        }
    };
    GraphClassificationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-graph-classification',
            template: __webpack_require__(897),
            styles: [__webpack_require__(886)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_graph_data_service__["a" /* GraphDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_graph_data_service__["a" /* GraphDataService */]) === 'function' && _a) || Object])
    ], GraphClassificationComponent);
    return GraphClassificationComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Heshan Sandamal/WebstormProjects/DengueVisualization/src/graph-classification.component.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_graph_data_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraphComponent = (function () {
    function GraphComponent(graphService) {
        this.graphService = graphService;
        this.dataArray = [[1, 3], [2, 14.01], [3.5, 3.14]];
        this.type = 'line';
        this.annGraphData = [1, 2, 3,
            4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        this.labels = [];
        this.dataset = [];
        this.xgBIndex = -1;
        this.catBIndex = -1;
        this.lassoIndex = -1;
        this.mlpANNIndex = -1;
        this.kerasDLIndex = -1;
        this.options = {
            backgroundColor: 'red',
            responsive: true,
            maintainAspectRatio: false,
            bezierCurve: false
        };
        this.getPosts();
        // this.setGraphData();
        // setTimeout(() => this.setGraphData(), 4000 );
    }
    GraphComponent.prototype.ngOnInit = function () {
    };
    GraphComponent.prototype.getPosts = function () {
        var _this = this;
        // alert('calling backend');
        // this.graphService.getPosts().map(data => this.annGraphData = data);
        this.graphService.getResults()
            .subscribe(function (response) {
            // this.annGraphData = response.ann;
            _this.actualGraphData = response.predictions;
            _this.dataset.push({
                label: 'Actual',
                data: _this.actualGraphData,
                pointBackgroundColor: '#1b69e5',
                borderColor: '#8db0e8',
                pointRadius: 5,
                height: '800',
                backgroundColor: 'transparent',
                lineTension: 0
            });
            _this.setGraphData();
        }, function (error) {
            alert('Error happened' + error);
        });
        // alert(this.annGraphData);
    };
    GraphComponent.prototype.setGraphData = function () {
        console.log('settting graph data' + this.actualGraphData);
        console.log(this.dataset);
        var x = 0;
        for (; x < this.actualGraphData.length; x++) {
            this.labels[x] = x + 1;
        }
        this.data = {
            labels: this.labels,
            datasets: this.dataset,
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1,
        };
    };
    GraphComponent.prototype.setXGBData = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var isChecked = target.checked;
        if (isChecked) {
            this.graphService.getXGBResults()
                .subscribe(function (response) {
                // this.annGraphData = response.ann;
                _this.xgBootstGraphData = response.predictions;
                _this.xgBIndex = _this.dataset.length;
                _this.dataset.push({
                    label: 'XGBoost',
                    data: _this.xgBootstGraphData,
                    pointBackgroundColor: '#3bd66f',
                    borderColor: '#57cc7e',
                    pointRadius: 5,
                    height: '800',
                    backgroundColor: 'transparent',
                    lineTension: 0
                });
                _this.setGraphData();
            }, function (error) {
                alert('Error happened' + error);
            });
        }
        else {
            this.dataset.splice(this.xgBIndex, 1);
            this.reorganizeIndexes(this.xgBIndex);
            this.setGraphData();
        }
    };
    GraphComponent.prototype.setLassoData = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var isChecked = target.checked;
        if (isChecked) {
            this.graphService.getLassoResults()
                .subscribe(function (response) {
                // this.annGraphData = response.ann;
                _this.lassoGraphData = response.predictions;
                _this.lassoIndex = _this.dataset.length;
                _this.dataset.push({
                    label: 'Lasso',
                    data: _this.lassoGraphData,
                    pointBackgroundColor: '#f20989',
                    borderColor: '#ef77b9',
                    pointRadius: 5,
                    height: '800',
                    backgroundColor: 'transparent',
                    lineTension: 0
                });
                _this.setGraphData();
            }, function (error) {
                alert('Error happened' + error);
            });
        }
        else {
            this.dataset.splice(this.lassoIndex, 1);
            this.reorganizeIndexes(this.lassoIndex);
            this.setGraphData();
        }
    };
    GraphComponent.prototype.setCatBoostData = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var isChecked = target.checked;
        if (isChecked) {
            this.graphService.getCatBoostResults()
                .subscribe(function (response) {
                // this.annGraphData = response.ann;
                _this.catBoostGraphData = response.predictions;
                _this.catBIndex = _this.dataset.length;
                _this.dataset.push({
                    label: 'CatBoost',
                    data: _this.catBoostGraphData,
                    pointBackgroundColor: '#d83c08',
                    borderColor: '#ed754e',
                    pointRadius: 5,
                    height: '800',
                    backgroundColor: 'transparent',
                    lineTension: 0
                });
                _this.setGraphData();
            }, function (error) {
                alert('Error happened' + error);
            });
        }
        else {
            this.dataset.splice(this.catBIndex, 1);
            this.reorganizeIndexes(this.catBIndex);
            this.setGraphData();
        }
    };
    GraphComponent.prototype.setMLPANNData = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var isChecked = target.checked;
        if (isChecked) {
            this.graphService.getMLPANNResults()
                .subscribe(function (response) {
                // this.annGraphData = response.ann;
                _this.MLPANNGraphData = response.predictions;
                _this.mlpANNIndex = _this.dataset.length;
                _this.dataset.push({
                    label: 'MLP-ANN',
                    data: _this.MLPANNGraphData,
                    pointBackgroundColor: '#e09808',
                    borderColor: '#edb649',
                    pointRadius: 5,
                    height: '800',
                    backgroundColor: 'transparent',
                    lineTension: 0
                });
                _this.setGraphData();
            }, function (error) {
                alert('Error happened' + error);
            });
        }
        else {
            this.dataset.splice(this.mlpANNIndex, 1);
            this.reorganizeIndexes(this.mlpANNIndex);
            this.setGraphData();
        }
    };
    GraphComponent.prototype.setKerasDLData = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var isChecked = target.checked;
        if (isChecked) {
            this.graphService.getKerasDLResults()
                .subscribe(function (response) {
                // this.annGraphData = response.ann;
                _this.KerasDLGraphData = response.predictions;
                _this.kerasDLIndex = _this.dataset.length;
                _this.dataset.push({
                    label: 'ANN-DL',
                    data: _this.KerasDLGraphData,
                    pointBackgroundColor: '#5e058e',
                    borderColor: '#c992e8',
                    pointRadius: 5,
                    height: '800',
                    backgroundColor: 'transparent',
                    lineTension: 0
                });
                _this.setGraphData();
            }, function (error) {
                alert('Error happened' + error);
            });
        }
        else {
            this.dataset.splice(this.kerasDLIndex, 1);
            this.reorganizeIndexes(this.kerasDLIndex);
            this.setGraphData();
        }
    };
    GraphComponent.prototype.reorganizeIndexes = function (index) {
        if (this.lassoIndex > index) {
            this.lassoIndex--;
        }
        if (this.xgBIndex > index) {
            this.xgBIndex--;
        }
        if (this.catBIndex > index) {
            this.catBIndex--;
        }
        if (this.mlpANNIndex > index) {
            this.mlpANNIndex--;
        }
        if (this.kerasDLIndex > index) {
            this.kerasDLIndex--;
        }
    };
    GraphComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-graph',
            template: __webpack_require__(898),
            styles: [__webpack_require__(887)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_graph_data_service__["a" /* GraphDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_graph_data_service__["a" /* GraphDataService */]) === 'function' && _a) || Object])
    ], GraphComponent);
    return GraphComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Heshan Sandamal/WebstormProjects/DengueVisualization/src/graph.component.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_graph_data_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponentComponent = (function () {
    function HomeComponentComponent(graphService) {
        // this.testfn();
        // this.getPosts();
        //
        // this.setGraphData();
        // setTimeout(() => this.setGraphData(), 4000 );
        this.graphService = graphService;
        this.dataArray = [[1, 3], [2, 14.01], [3.5, 3.14]];
        this.type = 'bar';
        this.data = {
            labels: ["MC-Colombo", "Dehiwala", "Kandy", "Rathnapura", "Galle"],
            datasets: [
                {
                    label: "Next Week",
                    backgroundColor: '#8db0e8',
                    data: [300, 70, 4, 33, 22, 300, 70, 4, 33, 22, 300, 70, 4, 33, 22, 300, 70, 4, 33, 22]
                },
                {
                    label: "+2 Weeks",
                    backgroundColor: "red",
                    data: [4, 3, 5, 44, 33, 300, 70, 4, 33, 22, 300, 70, 4, 33, 22, 300, 70, 4, 33, 22]
                },
                {
                    label: "+3 Weeks",
                    backgroundColor: "green",
                    data: [4, 3, 5, 44, 33, 300, 70, 4, 33, 22, 300, 70, 4, 33, 22, 300, 70, 4, 33, 22]
                }
            ]
        };
        // data: any;
        this.labels = [];
        this.dataset = [];
        this.xgBIndex = -1;
        this.mlpANNIndex = -1;
        this.rfIndex = -1;
        this.options = {
            backgroundColor: 'red',
            responsive: true,
            maintainAspectRatio: false,
            bezierCurve: false
        };
    }
    HomeComponentComponent.prototype.ngOnInit = function () {
    };
    // testfn() {
    //   this.dataset.push(
    //     {
    //       label: 'Actual',
    //       data: this.actualGraphData,
    //       pointBackgroundColor: '#1b69e5',
    //       borderColor: '#8db0e8',
    //       pointRadius: 4,
    //       height: '900',
    //       backgroundColor: 'transparent',
    //       lineTension: 0,
    //
    //     });
    //
    //   this.dataset.push({
    //     label: 'XGBoost',
    //     data: this.xgBootstGraphData,
    //     pointBackgroundColor: '#3bd66f',
    //     borderColor: '#57cc7e',
    //     pointRadius: 6,
    //     height: '900',
    //     backgroundColor: 'transparent',
    //     lineTension: 0
    //   });
    //   this.dataset.push({
    //     label: 'MLP-ANN',
    //     data: this.MLPANNGraphData,
    //     pointBackgroundColor: '#e09808',
    //     borderColor: '#edb649',
    //     pointRadius: 8,
    //     height: '900',
    //     backgroundColor: 'transparent',
    //     lineTension: 0
    //   });
    //
    //   this.dataset.push({
    //     label: 'ANN-DL',
    //     data: this.RFGraphData,
    //     pointBackgroundColor: '#5e058e',
    //     borderColor: '#c992e8',
    //     pointRadius: 10,
    //     height: '900',
    //     backgroundColor: 'transparent',
    //     lineTension: 0
    //   });
    //
    //   let x = 0;
    //   for (; x < this.actualGraphData.length; x++) {
    //     this.labels[x] = x + 1;
    //   }
    //
    //   this.setGraphData();
    //
    // }
    // getPosts() {
    //   // alert('calling backend');
    //   // this.graphService.getPosts().map(data => this.annGraphData = data);
    //   this.graphService.getActualClassifications()
    //     .subscribe(
    //       (response) => {
    //         // this.annGraphData = response.ann;
    //         this.actualGraphData = response.predictions;
    //         this.dataset.push(
    //           {
    //             label: 'Actual',
    //             data: this.actualGraphData,
    //             pointBackgroundColor: '#1b69e5',
    //             borderColor: '#8db0e8',
    //             pointRadius: 5,
    //             height: '800',
    //             backgroundColor: 'transparent',
    //             lineTension: 0,
    //           });
    //
    //         let x = 0;
    //         for (; x < this.actualGraphData.length; x++) {
    //           this.labels[x] = x + 1;
    //         }
    //         this.setGraphData();
    //       },
    //       function (error) {
    //         alert('Error happened' + error);
    //       }
    //       // posts => this.annGraphData = posts,
    //     );
    //   // alert(this.annGraphData);
    // }
    HomeComponentComponent.prototype.setGraphData = function () {
        // this.data = {
        //   labels: this.labels,
        //   datasets: this.datasets,
        //   borderColor: [
        //     'rgba(255,99,132,1,)'
        //   ],
        //   borderWidth: 1,
        //
        // };
    };
    HomeComponentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-component',
            template: __webpack_require__(899),
            styles: [__webpack_require__(888)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_graph_data_service__["a" /* GraphDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_graph_data_service__["a" /* GraphDataService */]) === 'function' && _a) || Object])
    ], HomeComponentComponent);
    return HomeComponentComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Heshan Sandamal/WebstormProjects/DengueVisualization/src/home-component.component.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobHeatmapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MobHeatmapComponent = (function () {
    function MobHeatmapComponent() {
    }
    MobHeatmapComponent.prototype.ngOnInit = function () {
    };
    MobHeatmapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mob-heatmap',
            template: __webpack_require__(900),
            styles: [__webpack_require__(889)]
        }), 
        __metadata('design:paramtypes', [])
    ], MobHeatmapComponent);
    return MobHeatmapComponent;
}());
//# sourceMappingURL=C:/Users/Heshan Sandamal/WebstormProjects/DengueVisualization/src/mob-heatmap.component.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(901),
            styles: [__webpack_require__(890)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
//# sourceMappingURL=C:/Users/Heshan Sandamal/WebstormProjects/DengueVisualization/src/navigation.component.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegressionTimelineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegressionTimelineComponent = (function () {
    function RegressionTimelineComponent() {
        this.dataArray = [2, 1, 21, 312, 123, 123, 1, 12, 12, 12, 12, 12, 12, 12, 31, 2312, 31, 31, 231];
        this.type = 'line';
        this.labels = [];
        this.data = [];
        this.dataset = [];
        this.options = {
            backgroundColor: 'red',
            responsive: true,
            maintainAspectRatio: false,
            bezierCurve: false
        };
        var x = 0;
        for (; x < 52; x++) {
            this.labels[x] = x + 1;
        }
        this.setGraphData();
    }
    RegressionTimelineComponent.prototype.ngOnInit = function () {
    };
    RegressionTimelineComponent.prototype.setGraphData = function () {
        this.dataset.push({
            label: 'Actual',
            data: this.dataArray,
            pointBackgroundColor: '#1b69e5',
            borderColor: '#8db0e8',
            pointRadius: 5,
            height: '800',
            backgroundColor: 'transparent',
            lineTension: 0
        });
        this.data = {
            labels: this.labels,
            datasets: this.dataset,
            borderColor: [
                'rgba(255,99,132,1,)'
            ],
            borderWidth: 1,
        };
    };
    RegressionTimelineComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-regression-timeline',
            template: __webpack_require__(902),
            styles: [__webpack_require__(891)]
        }), 
        __metadata('design:paramtypes', [])
    ], RegressionTimelineComponent);
    return RegressionTimelineComponent;
}());
//# sourceMappingURL=C:/Users/Heshan Sandamal/WebstormProjects/DengueVisualization/src/regression-timeline.component.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppSidebarComponent = (function () {
    function AppSidebarComponent() {
        // this.outputArray = <JSON>this.dataArray;
    }
    AppSidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(903)
        }), 
        __metadata('design:paramtypes', [])
    ], AppSidebarComponent);
    return AppSidebarComponent;
}());
//# sourceMappingURL=C:/Users/Heshan Sandamal/WebstormProjects/DengueVisualization/src/app.sidebar.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Heshan Sandamal/WebstormProjects/DengueVisualization/src/environment.js.map

/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 378,
	"./af.js": 378,
	"./ar": 385,
	"./ar-dz": 379,
	"./ar-dz.js": 379,
	"./ar-kw": 380,
	"./ar-kw.js": 380,
	"./ar-ly": 381,
	"./ar-ly.js": 381,
	"./ar-ma": 382,
	"./ar-ma.js": 382,
	"./ar-sa": 383,
	"./ar-sa.js": 383,
	"./ar-tn": 384,
	"./ar-tn.js": 384,
	"./ar.js": 385,
	"./az": 386,
	"./az.js": 386,
	"./be": 387,
	"./be.js": 387,
	"./bg": 388,
	"./bg.js": 388,
	"./bn": 389,
	"./bn.js": 389,
	"./bo": 390,
	"./bo.js": 390,
	"./br": 391,
	"./br.js": 391,
	"./bs": 392,
	"./bs.js": 392,
	"./ca": 393,
	"./ca.js": 393,
	"./cs": 394,
	"./cs.js": 394,
	"./cv": 395,
	"./cv.js": 395,
	"./cy": 396,
	"./cy.js": 396,
	"./da": 397,
	"./da.js": 397,
	"./de": 400,
	"./de-at": 398,
	"./de-at.js": 398,
	"./de-ch": 399,
	"./de-ch.js": 399,
	"./de.js": 400,
	"./dv": 401,
	"./dv.js": 401,
	"./el": 402,
	"./el.js": 402,
	"./en-au": 403,
	"./en-au.js": 403,
	"./en-ca": 404,
	"./en-ca.js": 404,
	"./en-gb": 405,
	"./en-gb.js": 405,
	"./en-ie": 406,
	"./en-ie.js": 406,
	"./en-nz": 407,
	"./en-nz.js": 407,
	"./eo": 408,
	"./eo.js": 408,
	"./es": 410,
	"./es-do": 409,
	"./es-do.js": 409,
	"./es.js": 410,
	"./et": 411,
	"./et.js": 411,
	"./eu": 412,
	"./eu.js": 412,
	"./fa": 413,
	"./fa.js": 413,
	"./fi": 414,
	"./fi.js": 414,
	"./fo": 415,
	"./fo.js": 415,
	"./fr": 418,
	"./fr-ca": 416,
	"./fr-ca.js": 416,
	"./fr-ch": 417,
	"./fr-ch.js": 417,
	"./fr.js": 418,
	"./fy": 419,
	"./fy.js": 419,
	"./gd": 420,
	"./gd.js": 420,
	"./gl": 421,
	"./gl.js": 421,
	"./gom-latn": 422,
	"./gom-latn.js": 422,
	"./he": 423,
	"./he.js": 423,
	"./hi": 424,
	"./hi.js": 424,
	"./hr": 425,
	"./hr.js": 425,
	"./hu": 426,
	"./hu.js": 426,
	"./hy-am": 427,
	"./hy-am.js": 427,
	"./id": 428,
	"./id.js": 428,
	"./is": 429,
	"./is.js": 429,
	"./it": 430,
	"./it.js": 430,
	"./ja": 431,
	"./ja.js": 431,
	"./jv": 432,
	"./jv.js": 432,
	"./ka": 433,
	"./ka.js": 433,
	"./kk": 434,
	"./kk.js": 434,
	"./km": 435,
	"./km.js": 435,
	"./kn": 436,
	"./kn.js": 436,
	"./ko": 437,
	"./ko.js": 437,
	"./ky": 438,
	"./ky.js": 438,
	"./lb": 439,
	"./lb.js": 439,
	"./lo": 440,
	"./lo.js": 440,
	"./lt": 441,
	"./lt.js": 441,
	"./lv": 442,
	"./lv.js": 442,
	"./me": 443,
	"./me.js": 443,
	"./mi": 444,
	"./mi.js": 444,
	"./mk": 445,
	"./mk.js": 445,
	"./ml": 446,
	"./ml.js": 446,
	"./mr": 447,
	"./mr.js": 447,
	"./ms": 449,
	"./ms-my": 448,
	"./ms-my.js": 448,
	"./ms.js": 449,
	"./my": 450,
	"./my.js": 450,
	"./nb": 451,
	"./nb.js": 451,
	"./ne": 452,
	"./ne.js": 452,
	"./nl": 454,
	"./nl-be": 453,
	"./nl-be.js": 453,
	"./nl.js": 454,
	"./nn": 455,
	"./nn.js": 455,
	"./pa-in": 456,
	"./pa-in.js": 456,
	"./pl": 457,
	"./pl.js": 457,
	"./pt": 459,
	"./pt-br": 458,
	"./pt-br.js": 458,
	"./pt.js": 459,
	"./ro": 460,
	"./ro.js": 460,
	"./ru": 461,
	"./ru.js": 461,
	"./sd": 462,
	"./sd.js": 462,
	"./se": 463,
	"./se.js": 463,
	"./si": 464,
	"./si.js": 464,
	"./sk": 465,
	"./sk.js": 465,
	"./sl": 466,
	"./sl.js": 466,
	"./sq": 467,
	"./sq.js": 467,
	"./sr": 469,
	"./sr-cyrl": 468,
	"./sr-cyrl.js": 468,
	"./sr.js": 469,
	"./ss": 470,
	"./ss.js": 470,
	"./sv": 471,
	"./sv.js": 471,
	"./sw": 472,
	"./sw.js": 472,
	"./ta": 473,
	"./ta.js": 473,
	"./te": 474,
	"./te.js": 474,
	"./tet": 475,
	"./tet.js": 475,
	"./th": 476,
	"./th.js": 476,
	"./tl-ph": 477,
	"./tl-ph.js": 477,
	"./tlh": 478,
	"./tlh.js": 478,
	"./tr": 479,
	"./tr.js": 479,
	"./tzl": 480,
	"./tzl.js": 480,
	"./tzm": 482,
	"./tzm-latn": 481,
	"./tzm-latn.js": 481,
	"./tzm.js": 482,
	"./uk": 483,
	"./uk.js": 483,
	"./ur": 484,
	"./ur.js": 484,
	"./uz": 486,
	"./uz-latn": 485,
	"./uz-latn.js": 485,
	"./uz.js": 486,
	"./vi": 487,
	"./vi.js": 487,
	"./x-pseudo": 488,
	"./x-pseudo.js": 488,
	"./yo": 489,
	"./yo.js": 489,
	"./zh-cn": 490,
	"./zh-cn.js": 490,
	"./zh-hk": 491,
	"./zh-hk.js": 491,
	"./zh-tw": 492,
	"./zh-tw.js": 492
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 869;


/***/ }),

/***/ 885:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 886:
/***/ (function(module, exports) {

module.exports = ".checkbox{\r\n  display: inline;margin-right: 20px;\r\n}\r\n\r\n"

/***/ }),

/***/ 887:
/***/ (function(module, exports) {

module.exports = ".checkbox{\r\n  display: inline;margin-right: 20px;\r\n}\r\n\r\n"

/***/ }),

/***/ 888:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 889:
/***/ (function(module, exports) {

module.exports = "/* Always set the map height explicitly to define the size of the div\r\n       * element that contains the map. */\r\n#map {\r\n  height: 100%;\r\n}\r\n/* Optional: Makes the sample page fill the window. */\r\nhtml, body {\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n"

/***/ }),

/***/ 890:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 895:
/***/ (function(module, exports) {

module.exports = "<div class=\"container body\">\r\n  <div class=\"main_container\">\r\n    <div class=\"col-md-3 left_col\">\r\n      <div class=\"left_col scroll-view\">\r\n        <div class=\"navbar nav_title\" style=\"border: 0;\">\r\n          <a href=\"index.html\" class=\"site_title\"><i class=\"fa fa-paw\"></i> <span>D2S2 Soutions</span></a>\r\n        </div>\r\n\r\n        <div class=\"clearfix\"></div>\r\n\r\n\r\n        <!-- sidebar menu -->\r\n        <app-sidebar></app-sidebar>\r\n        <!-- /sidebar menu -->\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- top navigation -->\r\n    <app-navigation></app-navigation>\r\n    <!-- /top navigation -->\r\n\r\n    <!-- page content -->\r\n    <div class=\"right_col\" role=\"main\">\r\n      <div class=\"\">\r\n        <!--<div class=\"row top_tiles\">-->\r\n        <!--<div class=\"animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-12\">-->\r\n        <!--<div class=\"tile-stats\">-->\r\n        <!--<div class=\"icon\"><i class=\"fa fa-caret-square-o-right\"></i></div>-->\r\n        <!--<div class=\"count\">179</div>-->\r\n        <!--<h3>New Sign ups</h3>-->\r\n        <!--<p>Lorem ipsum psdea itgum rixt.</p>-->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-12\">-->\r\n        <!--<div class=\"tile-stats\">-->\r\n        <!--<div class=\"icon\"><i class=\"fa fa-comments-o\"></i></div>-->\r\n        <!--<div class=\"count\">179</div>-->\r\n        <!--<h3>New Sign ups</h3>-->\r\n        <!--<p>Lorem ipsum psdea itgum rixt.</p>-->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-12\">-->\r\n        <!--<div class=\"tile-stats\">-->\r\n        <!--<div class=\"icon\"><i class=\"fa fa-sort-amount-desc\"></i></div>-->\r\n        <!--<div class=\"count\">179</div>-->\r\n        <!--<h3>New Sign up s</h3>-->\r\n        <!--<p>Lorem ipsum psdea itgum rixt.</p>-->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-12\">-->\r\n        <!--<div class=\"tile-stats\">-->\r\n        <!--<div class=\"icon\"><i class=\"fa fa-check-square-o\"></i></div>-->\r\n        <!--<div class=\"count\">179</div>-->\r\n        <!--<h3>New Sign ups</h3>-->\r\n        <!--<p>Lorem ipsum psdea itgum rixt.</p>-->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"x_panel\">\r\n\r\n              <router-outlet></router-outlet>\r\n              <!--<app-graph></app-graph>-->\r\n\r\n              <div class=\"x_content\">\r\n                <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                  <!--<div class=\"demo-container\" style=\"height:280px\">-->\r\n                  <!--<div id=\"flot-placeholder1\" class=\"demo-placeholder\"></div>-->\r\n                  <!--</div>-->\r\n\r\n                  <!--<canvas id=\"myChart\" width=\"400\" height=\"400\"></canvas>-->\r\n                  <!--<div class=\"tiles\">-->\r\n                  <!--<div class=\"col-md-4 tile\">-->\r\n                  <!--<span>Total Sessions</span>-->\r\n                  <!--<h2>231,809</h2>-->\r\n                  <!--<span class=\"sparkline11 graph\" style=\"height: 160px;\">-->\r\n                  <!--<canvas width=\"200\" height=\"60\" style=\"display: inline-block; vertical-align: top; width: 94px; height: 30px;\"></canvas>-->\r\n                  <!--</span>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"col-md-4 tile\">-->\r\n                  <!--<span>Total Revenue</span>-->\r\n                  <!--<h2>$231,809</h2>-->\r\n                  <!--<span class=\"sparkline22 graph\" style=\"height: 160px;\">-->\r\n                  <!--<canvas width=\"200\" height=\"60\" style=\"display: inline-block; vertical-align: top; width: 94px; height: 30px;\"></canvas>-->\r\n                  <!--</span>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"col-md-4 tile\">-->\r\n                  <!--<span>Total Sessions</span>-->\r\n                  <!--<h2>231,809</h2>-->\r\n                  <!--<span class=\"sparkline11 graph\" style=\"height: 160px;\">-->\r\n                  <!--<canvas width=\"200\" height=\"60\" style=\"display: inline-block; vertical-align: top; width: 94px; height: 30px;\"></canvas>-->\r\n                  <!--</span>-->\r\n                  <!--</div>-->\r\n                  <!--</div>-->\r\n\r\n                </div>\r\n\r\n                <!--<div class=\"col-md-3 col-sm-12 col-xs-12\">-->\r\n                <!--<div>-->\r\n                <!--<div class=\"x_title\">-->\r\n                <!--<h2>Top Profiles</h2>-->\r\n                <!--<ul class=\"nav navbar-right panel_toolbox\">-->\r\n                <!--<li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>-->\r\n                <!--</li>-->\r\n                <!--<li class=\"dropdown\">-->\r\n                <!--<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>-->\r\n                <!--<ul class=\"dropdown-menu\" role=\"menu\">-->\r\n                <!--<li><a href=\"#\">Settings 1</a>-->\r\n                <!--</li>-->\r\n                <!--<li><a href=\"#\">Settings 2</a>-->\r\n                <!--</li>-->\r\n                <!--</ul>-->\r\n                <!--</li>-->\r\n                <!--<li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>-->\r\n                <!--</li>-->\r\n                <!--</ul>-->\r\n                <!--<div class=\"clearfix\"></div>-->\r\n                <!--</div>-->\r\n                <!--<ul class=\"list-unstyled top_profiles scroll-view\">-->\r\n                <!--<li class=\"media event\">-->\r\n                <!--<a class=\"pull-left border-aero profile_thumb\">-->\r\n                <!--<i class=\"fa fa-user aero\"></i>-->\r\n                <!--</a>-->\r\n                <!--<div class=\"media-body\">-->\r\n                <!--<a class=\"title\" href=\"#\">Ms. Mary Jane</a>-->\r\n                <!--<p><strong>$2300. </strong> Agent Avarage Sales </p>-->\r\n                <!--<p> <small>12 Sales Today</small>-->\r\n                <!--</p>-->\r\n                <!--</div>-->\r\n                <!--</li>-->\r\n                <!--<li class=\"media event\">-->\r\n                <!--<a class=\"pull-left border-green profile_thumb\">-->\r\n                <!--<i class=\"fa fa-user green\"></i>-->\r\n                <!--</a>-->\r\n                <!--<div class=\"media-body\">-->\r\n                <!--<a class=\"title\" href=\"#\">Ms. Mary Jane</a>-->\r\n                <!--<p><strong>$2300. </strong> Agent Avarage Sales </p>-->\r\n                <!--<p> <small>12 Sales Today</small>-->\r\n                <!--</p>-->\r\n                <!--</div>-->\r\n                <!--</li>-->\r\n                <!--<li class=\"media event\">-->\r\n                <!--<a class=\"pull-left border-blue profile_thumb\">-->\r\n                <!--<i class=\"fa fa-user blue\"></i>-->\r\n                <!--</a>-->\r\n                <!--<div class=\"media-body\">-->\r\n                <!--<a class=\"title\" href=\"#\">Ms. Mary Jane</a>-->\r\n                <!--<p><strong>$2300. </strong> Agent Avarage Sales </p>-->\r\n                <!--<p> <small>12 Sales Today</small>-->\r\n                <!--</p>-->\r\n                <!--</div>-->\r\n                <!--</li>-->\r\n                <!--<li class=\"media event\">-->\r\n                <!--<a class=\"pull-left border-aero profile_thumb\">-->\r\n                <!--<i class=\"fa fa-user aero\"></i>-->\r\n                <!--</a>-->\r\n                <!--<div class=\"media-body\">-->\r\n                <!--<a class=\"title\" href=\"#\">Ms. Mary Jane</a>-->\r\n                <!--<p><strong>$2300. </strong> Agent Avarage Sales </p>-->\r\n                <!--<p> <small>12 Sales Today</small>-->\r\n                <!--</p>-->\r\n                <!--</div>-->\r\n                <!--</li>-->\r\n                <!--<li class=\"media event\">-->\r\n                <!--<a class=\"pull-left border-green profile_thumb\">-->\r\n                <!--<i class=\"fa fa-user green\"></i>-->\r\n                <!--</a>-->\r\n                <!--<div class=\"media-body\">-->\r\n                <!--<a class=\"title\" href=\"#\">Ms. Mary Jane</a>-->\r\n                <!--<p><strong>$2300. </strong> Agent Avarage Sales </p>-->\r\n                <!--<p> <small>12 Sales Today</small>-->\r\n                <!--</p>-->\r\n                <!--</div>-->\r\n                <!--</li>-->\r\n                <!--</ul>-->\r\n                <!--</div>-->\r\n                <!--</div>-->\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n          <!--<div class=\"col-md-12\">-->\r\n            <!--<div class=\"x_panel\">-->\r\n              <!--<div class=\"x_title\">-->\r\n                <!--<h2>Model comparison-->\r\n                  <!--&lt;!&ndash;<small></small>&ndash;&gt;-->\r\n                <!--</h2>-->\r\n                <!--<ul class=\"nav navbar-right panel_toolbox\">-->\r\n                  <!--<li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>-->\r\n                  <!--</li>-->\r\n                  <!--<li class=\"dropdown\">-->\r\n                    <!--<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i-->\r\n                      <!--class=\"fa fa-wrench\"></i></a>-->\r\n                    <!--<ul class=\"dropdown-menu\" role=\"menu\">-->\r\n                      <!--<li><a href=\"#\">Settings 1</a>-->\r\n                      <!--</li>-->\r\n                      <!--<li><a href=\"#\">Settings 2</a>-->\r\n                      <!--</li>-->\r\n                    <!--</ul>-->\r\n                  <!--</li>-->\r\n                  <!--<li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>-->\r\n                  <!--</li>-->\r\n                <!--</ul>-->\r\n                <!--<div class=\"clearfix\"></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"x_content\">-->\r\n\r\n                <!--<div class=\"row\" style=\"border-bottom: 1px solid #E0E0E0; padding-bottom: 5px; margin-bottom: 5px;\">-->\r\n                  <!--<div class=\"col-md-12\" style=\"overflow:hidden;\">-->\r\n                        <!--<span class=\"sparkline_one\" style=\"height: 160px; padding: 10px 25px;\">-->\r\n                                      <!--<canvas width=\"100%\" height=\"60\"-->\r\n                                              <!--style=\"display: inline-block; vertical-align: top; width: 100%; height: 30px;\"></canvas>-->\r\n                                  <!--</span>-->\r\n                    <!--<h4 style=\"margin:18px\"></h4>-->\r\n                  <!--</div>-->\r\n\r\n                  <!--&lt;!&ndash;<div class=\"col-md-5\">&ndash;&gt;-->\r\n                  <!--&lt;!&ndash;<div class=\"row\" style=\"text-align: center;\">&ndash;&gt;-->\r\n                  <!--&lt;!&ndash;<div class=\"col-md-4\">&ndash;&gt;-->\r\n                  <!--&lt;!&ndash;<canvas class=\"canvasDoughnut\" height=\"110\" width=\"110\" style=\"margin: 5px 10px 10px 0\"></canvas>&ndash;&gt;-->\r\n                  <!--&lt;!&ndash;<h4 style=\"margin:0\">Bounce Rates</h4>&ndash;&gt;-->\r\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                  <!--&lt;!&ndash;<div class=\"col-md-4\">&ndash;&gt;-->\r\n                  <!--&lt;!&ndash;<canvas class=\"canvasDoughnut\" height=\"110\" width=\"110\" style=\"margin: 5px 10px 10px 0\"></canvas>&ndash;&gt;-->\r\n                  <!--&lt;!&ndash;<h4 style=\"margin:0\">New Traffic</h4>&ndash;&gt;-->\r\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                  <!--&lt;!&ndash;<div class=\"col-md-4\">&ndash;&gt;-->\r\n                  <!--&lt;!&ndash;<canvas class=\"canvasDoughnut\" height=\"110\" width=\"110\" style=\"margin: 5px 10px 10px 0\"></canvas>&ndash;&gt;-->\r\n                  <!--&lt;!&ndash;<h4 style=\"margin:0\">Device Share</h4>&ndash;&gt;-->\r\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n\r\n\r\n\r\n\r\n\r\n          <!--<div class=\"col-md-4 col-sm-4 col-xs-12\">-->\r\n            <!--<div class=\"x_panel tile fixed_height_320\">-->\r\n              <!--<div class=\"x_title\">-->\r\n                <!--<h2>App Versions</h2>-->\r\n                <!--<ul class=\"nav navbar-right panel_toolbox\">-->\r\n                  <!--<li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>-->\r\n                  <!--</li>-->\r\n                  <!--<li class=\"dropdown\">-->\r\n                    <!--<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>-->\r\n                    <!--<ul class=\"dropdown-menu\" role=\"menu\">-->\r\n                      <!--<li><a href=\"#\">Settings 1</a>-->\r\n                      <!--</li>-->\r\n                      <!--<li><a href=\"#\">Settings 2</a>-->\r\n                      <!--</li>-->\r\n                    <!--</ul>-->\r\n                  <!--</li>-->\r\n                  <!--<li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>-->\r\n                  <!--</li>-->\r\n                <!--</ul>-->\r\n                <!--<div class=\"clearfix\"></div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"x_content\">-->\r\n                <!--<h4>App Usage across versions</h4>-->\r\n                <!--<div class=\"widget_summary\">-->\r\n                  <!--<div class=\"w_left w_25\">-->\r\n                    <!--<span>0.1.5.2</span>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"w_center w_55\">-->\r\n                    <!--<div class=\"progress\">-->\r\n                      <!--<div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 66%;\">-->\r\n                        <!--<span class=\"sr-only\">60% Complete</span>-->\r\n                      <!--</div>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"w_right w_20\">-->\r\n                    <!--<span>123k</span>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"clearfix\"></div>-->\r\n                <!--</div>-->\r\n\r\n                <!--<div class=\"widget_summary\">-->\r\n                  <!--<div class=\"w_left w_25\">-->\r\n                    <!--<span>0.1.5.3</span>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"w_center w_55\">-->\r\n                    <!--<div class=\"progress\">-->\r\n                      <!--<div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 45%;\">-->\r\n                        <!--<span class=\"sr-only\">60% Complete</span>-->\r\n                      <!--</div>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"w_right w_20\">-->\r\n                    <!--<span>53k</span>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"clearfix\"></div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"widget_summary\">-->\r\n                  <!--<div class=\"w_left w_25\">-->\r\n                    <!--<span>0.1.5.4</span>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"w_center w_55\">-->\r\n                    <!--<div class=\"progress\">-->\r\n                      <!--<div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 25%;\">-->\r\n                        <!--<span class=\"sr-only\">60% Complete</span>-->\r\n                      <!--</div>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"w_right w_20\">-->\r\n                    <!--<span>23k</span>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"clearfix\"></div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"widget_summary\">-->\r\n                  <!--<div class=\"w_left w_25\">-->\r\n                    <!--<span>0.1.5.5</span>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"w_center w_55\">-->\r\n                    <!--<div class=\"progress\">-->\r\n                      <!--<div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 5%;\">-->\r\n                        <!--<span class=\"sr-only\">60% Complete</span>-->\r\n                      <!--</div>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"w_right w_20\">-->\r\n                    <!--<span>3k</span>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"clearfix\"></div>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"widget_summary\">-->\r\n                  <!--<div class=\"w_left w_25\">-->\r\n                    <!--<span>0.1.5.6</span>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"w_center w_55\">-->\r\n                    <!--<div class=\"progress\">-->\r\n                      <!--<div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 2%;\">-->\r\n                        <!--<span class=\"sr-only\">60% Complete</span>-->\r\n                      <!--</div>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"w_right w_20\">-->\r\n                    <!--<span>1k</span>-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"clearfix\"></div>-->\r\n                <!--</div>-->\r\n\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n\r\n\r\n\r\n        </div>\r\n\r\n\r\n        <!--<div class=\"row\">-->\r\n        <!--<div class=\"col-md-4\">-->\r\n        <!--<div class=\"x_panel\">-->\r\n        <!--<div class=\"x_title\">-->\r\n        <!--<h2>Top Profiles <small>Sessions</small></h2>-->\r\n        <!--<ul class=\"nav navbar-right panel_toolbox\">-->\r\n        <!--<li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>-->\r\n        <!--</li>-->\r\n        <!--<li class=\"dropdown\">-->\r\n        <!--<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>-->\r\n        <!--<ul class=\"dropdown-menu\" role=\"menu\">-->\r\n        <!--<li><a href=\"#\">Settings 1</a>-->\r\n        <!--</li>-->\r\n        <!--<li><a href=\"#\">Settings 2</a>-->\r\n        <!--</li>-->\r\n        <!--</ul>-->\r\n        <!--</li>-->\r\n        <!--<li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>-->\r\n        <!--</li>-->\r\n        <!--</ul>-->\r\n        <!--<div class=\"clearfix\"></div>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"x_content\">-->\r\n        <!--<article class=\"media event\">-->\r\n        <!--<a class=\"pull-left date\">-->\r\n        <!--<p class=\"month\">April</p>-->\r\n        <!--<p class=\"day\">23</p>-->\r\n        <!--</a>-->\r\n        <!--<div class=\"media-body\">-->\r\n        <!--<a class=\"title\" href=\"#\">Item One Title</a>-->\r\n        <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->\r\n        <!--</div>-->\r\n        <!--</article>-->\r\n        <!--<article class=\"media event\">-->\r\n        <!--<a class=\"pull-left date\">-->\r\n        <!--<p class=\"month\">April</p>-->\r\n        <!--<p class=\"day\">23</p>-->\r\n        <!--</a>-->\r\n        <!--<div class=\"media-body\">-->\r\n        <!--<a class=\"title\" href=\"#\">Item Two Title</a>-->\r\n        <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->\r\n        <!--</div>-->\r\n        <!--</article>-->\r\n        <!--<article class=\"media event\">-->\r\n        <!--<a class=\"pull-left date\">-->\r\n        <!--<p class=\"month\">April</p>-->\r\n        <!--<p class=\"day\">23</p>-->\r\n        <!--</a>-->\r\n        <!--<div class=\"media-body\">-->\r\n        <!--<a class=\"title\" href=\"#\">Item Two Title</a>-->\r\n        <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->\r\n        <!--</div>-->\r\n        <!--</article>-->\r\n        <!--<article class=\"media event\">-->\r\n        <!--<a class=\"pull-left date\">-->\r\n        <!--<p class=\"month\">April</p>-->\r\n        <!--<p class=\"day\">23</p>-->\r\n        <!--</a>-->\r\n        <!--<div class=\"media-body\">-->\r\n        <!--<a class=\"title\" href=\"#\">Item Two Title</a>-->\r\n        <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->\r\n        <!--</div>-->\r\n        <!--</article>-->\r\n        <!--<article class=\"media event\">-->\r\n        <!--<a class=\"pull-left date\">-->\r\n        <!--<p class=\"month\">April</p>-->\r\n        <!--<p class=\"day\">23</p>-->\r\n        <!--</a>-->\r\n        <!--<div class=\"media-body\">-->\r\n        <!--<a class=\"title\" href=\"#\">Item Three Title</a>-->\r\n        <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->\r\n        <!--</div>-->\r\n        <!--</article>-->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n\r\n        <!--<div class=\"col-md-4\">-->\r\n        <!--<div class=\"x_panel\">-->\r\n        <!--<div class=\"x_title\">-->\r\n        <!--<h2>Top Profiles <small>Sessions</small></h2>-->\r\n        <!--<ul class=\"nav navbar-right panel_toolbox\">-->\r\n        <!--<li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>-->\r\n        <!--</li>-->\r\n        <!--<li class=\"dropdown\">-->\r\n        <!--<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>-->\r\n        <!--<ul class=\"dropdown-menu\" role=\"menu\">-->\r\n        <!--<li><a href=\"#\">Settings 1</a>-->\r\n        <!--</li>-->\r\n        <!--<li><a href=\"#\">Settings 2</a>-->\r\n        <!--</li>-->\r\n        <!--</ul>-->\r\n        <!--</li>-->\r\n        <!--<li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>-->\r\n        <!--</li>-->\r\n        <!--</ul>-->\r\n        <!--<div class=\"clearfix\"></div>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"x_content\">-->\r\n        <!--<article class=\"media event\">-->\r\n        <!--<a class=\"pull-left date\">-->\r\n        <!--<p class=\"month\">April</p>-->\r\n        <!--<p class=\"day\">23</p>-->\r\n        <!--</a>-->\r\n        <!--<div class=\"media-body\">-->\r\n        <!--<a class=\"title\" href=\"#\">Item One Title</a>-->\r\n        <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->\r\n        <!--</div>-->\r\n        <!--</article>-->\r\n        <!--<article class=\"media event\">-->\r\n        <!--<a class=\"pull-left date\">-->\r\n        <!--<p class=\"month\">April</p>-->\r\n        <!--<p class=\"day\">23</p>-->\r\n        <!--</a>-->\r\n        <!--<div class=\"media-body\">-->\r\n        <!--<a class=\"title\" href=\"#\">Item Two Title</a>-->\r\n        <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->\r\n        <!--</div>-->\r\n        <!--</article>-->\r\n        <!--<article class=\"media event\">-->\r\n        <!--<a class=\"pull-left date\">-->\r\n        <!--<p class=\"month\">April</p>-->\r\n        <!--<p class=\"day\">23</p>-->\r\n        <!--</a>-->\r\n        <!--<div class=\"media-body\">-->\r\n        <!--<a class=\"title\" href=\"#\">Item Two Title</a>-->\r\n        <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->\r\n        <!--</div>-->\r\n        <!--</article>-->\r\n        <!--<article class=\"media event\">-->\r\n        <!--<a class=\"pull-left date\">-->\r\n        <!--<p class=\"month\">April</p>-->\r\n        <!--<p class=\"day\">23</p>-->\r\n        <!--</a>-->\r\n        <!--<div class=\"media-body\">-->\r\n        <!--<a class=\"title\" href=\"#\">Item Two Title</a>-->\r\n        <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->\r\n        <!--</div>-->\r\n        <!--</article>-->\r\n        <!--<article class=\"media event\">-->\r\n        <!--<a class=\"pull-left date\">-->\r\n        <!--<p class=\"month\">April</p>-->\r\n        <!--<p class=\"day\">23</p>-->\r\n        <!--</a>-->\r\n        <!--<div class=\"media-body\">-->\r\n        <!--<a class=\"title\" href=\"#\">Item Three Title</a>-->\r\n        <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->\r\n        <!--</div>-->\r\n        <!--</article>-->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n\r\n        <!--<div class=\"col-md-4\">-->\r\n        <!--<div class=\"x_panel\">-->\r\n        <!--<div class=\"x_title\">-->\r\n        <!--<h2>Top Profiles <small>Sessions</small></h2>-->\r\n        <!--<ul class=\"nav navbar-right panel_toolbox\">-->\r\n        <!--<li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>-->\r\n        <!--</li>-->\r\n        <!--<li class=\"dropdown\">-->\r\n        <!--<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>-->\r\n        <!--<ul class=\"dropdown-menu\" role=\"menu\">-->\r\n        <!--<li><a href=\"#\">Settings 1</a>-->\r\n        <!--</li>-->\r\n        <!--<li><a href=\"#\">Settings 2</a>-->\r\n        <!--</li>-->\r\n        <!--</ul>-->\r\n        <!--</li>-->\r\n        <!--<li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>-->\r\n        <!--</li>-->\r\n        <!--</ul>-->\r\n        <!--<div class=\"clearfix\"></div>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"x_content\">-->\r\n        <!--<article class=\"media event\">-->\r\n        <!--<a class=\"pull-left date\">-->\r\n        <!--<p class=\"month\">April</p>-->\r\n        <!--<p class=\"day\">23</p>-->\r\n        <!--</a>-->\r\n        <!--<div class=\"media-body\">-->\r\n        <!--<a class=\"title\" href=\"#\">Item One Title</a>-->\r\n        <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->\r\n        <!--</div>-->\r\n        <!--</article>-->\r\n        <!--<article class=\"media event\">-->\r\n        <!--<a class=\"pull-left date\">-->\r\n        <!--<p class=\"month\">April</p>-->\r\n        <!--<p class=\"day\">23</p>-->\r\n        <!--</a>-->\r\n        <!--<div class=\"media-body\">-->\r\n        <!--<a class=\"title\" href=\"#\">Item Two Title</a>-->\r\n        <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->\r\n        <!--</div>-->\r\n        <!--</article>-->\r\n        <!--<article class=\"media event\">-->\r\n        <!--<a class=\"pull-left date\">-->\r\n        <!--<p class=\"month\">April</p>-->\r\n        <!--<p class=\"day\">23</p>-->\r\n        <!--</a>-->\r\n        <!--<div class=\"media-body\">-->\r\n        <!--<a class=\"title\" href=\"#\">Item Two Title</a>-->\r\n        <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->\r\n        <!--</div>-->\r\n        <!--</article>-->\r\n        <!--<article class=\"media event\">-->\r\n        <!--<a class=\"pull-left date\">-->\r\n        <!--<p class=\"month\">April</p>-->\r\n        <!--<p class=\"day\">23</p>-->\r\n        <!--</a>-->\r\n        <!--<div class=\"media-body\">-->\r\n        <!--<a class=\"title\" href=\"#\">Item Two Title</a>-->\r\n        <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->\r\n        <!--</div>-->\r\n        <!--</article>-->\r\n        <!--<article class=\"media event\">-->\r\n        <!--<a class=\"pull-left date\">-->\r\n        <!--<p class=\"month\">April</p>-->\r\n        <!--<p class=\"day\">23</p>-->\r\n        <!--</a>-->\r\n        <!--<div class=\"media-body\">-->\r\n        <!--<a class=\"title\" href=\"#\">Item Three Title</a>-->\r\n        <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->\r\n        <!--</div>-->\r\n        <!--</article>-->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n      </div>\r\n    </div>\r\n    <!-- /page content -->\r\n\r\n    <!-- footer content -->\r\n    <footer>\r\n      <div class=\"pull-right\">\r\n        Developed by University of Moratuwa, Dept. of Computer Science & Engineering - Dengue Prediction Group\r\n        {{outputArray}}\r\n      </div>\r\n      <div class=\"clearfix\"></div>\r\n    </footer>\r\n    <!-- /footer content -->\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 896:
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div class=\"x_title\">\n    <h2>Dengue Levels Predictions Timeline\n    </h2>\n    <small></small>\n    <div class=\"filter\">\n      <div class=\"col-md-3 col-sm-3 col-xs-12\"></div>\n      <div class=\"col-md-3 col-sm-3 col-xs-12\">\n        <select class=\"form-control\">\n          <option>2017</option>\n        </select>\n      </div>\n      <div class=\"col-md-6 col-sm-6 col-xs-12\">\n        <select class=\"form-control\">\n          <option>MC Colombo</option>\n          <option>Maharagama</option>\n          <option>Dehiwala</option>\n          <!--<option>Option three</option>-->\n          <!--<option>Option four</option>-->\n        </select>\n      </div>\n\n    </div>\n\n    <div class=\"clearfix\"></div>\n  </div>\n\n\n  <br>\n  <chart id=\"myChart\" [data]=\"data\" [type]=\"type\" [options]=\"options\" style=\"height: 400px;\"></chart>\n</div>\n\n<div class=\"clearfix\"></div>\n\n<div class=\"col-md-12 col-sm-12 col-xs-12\" style=\"margin-top: 40px;\">\n  <div class=\"x_panel\">\n    <div class=\"x_title\">\n      <h2>Comparison of Regression Models</h2>\n      <ul class=\"nav navbar-right panel_toolbox\">\n        <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n        </li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i\n            class=\"fa fa-wrench\"></i></a>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n            <li><a href=\"#\">Settings 1</a>\n            </li>\n            <li><a href=\"#\">Settings 2</a>\n            </li>\n          </ul>\n        </li>\n        <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n        </li>\n      </ul>\n      <div class=\"clearfix\"></div>\n    </div>\n    <div class=\"x_content\">\n\n      <table class=\"table table-bordered\">\n        <thead>\n        <tr>\n          <th>#</th>\n          <th>Model</th>\n          <th>RMSE</th>\n          <th>R-Squared</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <th scope=\"row\">1</th>\n          <td>Mark</td>\n          <td>Otto</td>\n          <td>@mdo</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">2</th>\n          <td>Jacob</td>\n          <td>Thornton</td>\n          <td>@fat</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">3</th>\n          <td>Larry</td>\n          <td>the Bird</td>\n          <td>@twitter</td>\n        </tr>\n        </tbody>\n      </table>\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 897:
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div class=\"x_title\">\n    <h2>Dengue Predictions for 2014\n    </h2>\n    <small></small>\n    <div class=\"filter\">\n      <div class=\"col-md-3 col-sm-3 col-xs-12\"></div>\n      <div class=\"col-md-9 col-sm-9 col-xs-12\">\n        <select class=\"form-control\">\n          <option>MC Colombo</option>\n          <option>Maharagama</option>\n          <option>Dehiwala</option>\n          <!--<option>Option three</option>-->\n          <!--<option>Option four</option>-->\n        </select>\n      </div>\n\n    </div>\n\n    <div class=\"clearfix\"></div>\n  </div>\n\n  <div class=\"col-md-9 col-sm-9 col-xs-12\" style=\"margin-bottom: 10px\">\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" class=\"flat\" (click)=\"setXGBData($event)\"> XG-Boost\n      </label>\n    </div>\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" class=\"flat\" (click)=\"setMLPANNData($event)\"> MLP\n      </label>\n    </div>\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" class=\"flat\" (click)=\"setRFData($event)\"> RF\n      </label>\n    </div>\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" class=\"flat\" checked=\"checked\"> Ensemble-1\n      </label>\n    </div>\n  </div>\n\n  <br>\n  <chart id=\"myChart\" [type]=\"type\" [data]=\"data\" [options]=\"options\" style=\"height: 500px;\" ></chart>\n</div>\n\n\n<div class=\"clearfix\"></div>\n\n<div class=\"col-md-12 col-sm-12 col-xs-12\" style=\"margin-top: 40px;\">\n  <div class=\"x_panel\">\n    <div class=\"x_title\">\n      <h2>Comparison of Classification Models</h2>\n      <ul class=\"nav navbar-right panel_toolbox\">\n        <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n        </li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i\n            class=\"fa fa-wrench\"></i></a>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n            <li><a href=\"#\">Settings 1</a>\n            </li>\n            <li><a href=\"#\">Settings 2</a>\n            </li>\n          </ul>\n        </li>\n        <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n        </li>\n      </ul>\n      <div class=\"clearfix\"></div>\n    </div>\n    <div class=\"x_content\">\n\n      <table class=\"table table-bordered\">\n        <thead>\n        <tr>\n          <th>#</th>\n          <th>Model</th>\n          <th>RMSE</th>\n          <th>R-Squared</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <th scope=\"row\">1</th>\n          <td>Mark</td>\n          <td>Otto</td>\n          <td>@mdo</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">2</th>\n          <td>Jacob</td>\n          <td>Thornton</td>\n          <td>@fat</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">3</th>\n          <td>Larry</td>\n          <td>the Bird</td>\n          <td>@twitter</td>\n        </tr>\n        </tbody>\n      </table>\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 898:
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div class=\"x_title\">\n    <h2>Dengue Predictions for 2014\n    </h2>\n    <small></small>\n    <div class=\"filter\">\n      <div class=\"col-md-3 col-sm-3 col-xs-12\"></div>\n      <div class=\"col-md-9 col-sm-9 col-xs-12\">\n        <select class=\"form-control\">\n          <option>MC Colombo</option>\n          <option>Maharagama</option>\n          <option>Dehiwala</option>\n          <!--<option>Option three</option>-->\n          <!--<option>Option four</option>-->\n        </select>\n      </div>\n\n    </div>\n\n    <div class=\"clearfix\"></div>\n  </div>\n\n  <div class=\"col-md-9 col-sm-9 col-xs-12\" style=\"margin-bottom: 10px\">\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" class=\"flat\"(click)=\"setXGBData($event)\"> XG-Boost\n      </label>\n    </div>\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" class=\"flat\" (click)=\"setLassoData($event)\" > Lasso\n      </label>\n    </div>\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" class=\"flat\" (click)=\"setCatBoostData($event)\"> Cat-Boost\n      </label>\n    </div>\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" class=\"flat\" (click)=\"setMLPANNData($event)\"> MLP\n      </label>\n    </div>\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" class=\"flat\" (click)=\"setKerasDLData($event)\"> ANN-Deep-Learning\n      </label>\n    </div>\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" class=\"flat\" checked=\"checked\"> Ensemble-1\n      </label>\n    </div>\n  </div>\n\n  <br>\n  <chart id=\"myChart\" [data]=\"data\" [type]=\"type\" [options]=\"options\" style=\"height: 400px;\"></chart>\n</div>\n\n<div class=\"clearfix\"></div>\n\n<div class=\"col-md-12 col-sm-12 col-xs-12\" style=\"margin-top: 40px;\">\n  <div class=\"x_panel\">\n    <div class=\"x_title\">\n      <h2>Comparison of Regression Models</h2>\n      <ul class=\"nav navbar-right panel_toolbox\">\n        <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n        </li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i\n            class=\"fa fa-wrench\"></i></a>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n            <li><a href=\"#\">Settings 1</a>\n            </li>\n            <li><a href=\"#\">Settings 2</a>\n            </li>\n          </ul>\n        </li>\n        <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n        </li>\n      </ul>\n      <div class=\"clearfix\"></div>\n    </div>\n    <div class=\"x_content\">\n\n      <table class=\"table table-bordered\">\n        <thead>\n        <tr>\n          <th>#</th>\n          <th>Model</th>\n          <th>RMSE</th>\n          <th>R-Squared</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <th scope=\"row\">1</th>\n          <td>Mark</td>\n          <td>Otto</td>\n          <td>@mdo</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">2</th>\n          <td>Jacob</td>\n          <td>Thornton</td>\n          <td>@fat</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">3</th>\n          <td>Larry</td>\n          <td>the Bird</td>\n          <td>@twitter</td>\n        </tr>\n        </tbody>\n      </table>\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 899:
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div class=\"x_title\">\n    <h2>Dengue Predictions for Upcoming 3 weeks\n    </h2>\n    <small></small>\n    <div class=\"filter\">\n      <div class=\"col-md-8 col-sm-8 col-xs-12\"></div>\n      <div class=\"col-md-4 col-sm-4 col-xs-12\">\n        <select class=\"form-control\">\n          <option>2017</option>\n          <!--<option>Maharagama</option>-->\n          <!--<option>Dehiwala</option>-->\n          <!--<option>Option three</option>-->\n          <!--<option>Option four</option>-->\n        </select>\n      </div>\n\n    </div>\n\n    <div class=\"clearfix\"></div>\n  </div>\n\n\n  <br>\n  <div class=\"x_panel\">\n    <div class=\"x_title\">\n      <h2> Predicted Dengue cases </h2>\n      <ul class=\"nav navbar-right panel_toolbox\">\n        <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n        </li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i\n            class=\"fa fa-wrench\"></i></a>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n            <li><a href=\"#\">Settings 1</a>\n            </li>\n            <li><a href=\"#\">Settings 2</a>\n            </li>\n          </ul>\n        </li>\n        <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n        </li>\n      </ul>\n      <div class=\"clearfix\"></div>\n    </div>\n    <div class=\"x_content\">\n      <chart id=\"myChart\" [type]=\"type\" [data]=\"data\" [options]=\"options\" style=\"height: 300px;\"></chart>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"clearfix\"></div>\n\n<div class=\"x_panel\">\n  <div class=\"x_title\">\n    <h2> Predicted Dengue Levels </h2>\n    <ul class=\"nav navbar-right panel_toolbox\">\n      <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n      </li>\n      <li class=\"dropdown\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i\n          class=\"fa fa-wrench\"></i></a>\n        <ul class=\"dropdown-menu\" role=\"menu\">\n          <li><a href=\"#\">Settings 1</a>\n          </li>\n          <li><a href=\"#\">Settings 2</a>\n          </li>\n        </ul>\n      </li>\n      <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n      </li>\n    </ul>\n    <div class=\"clearfix\"></div>\n  </div>\n  <div class=\"x_content\">\n    <chart id=\"myChart\" [type]=\"type\" [data]=\"data\" [options]=\"options\" style=\"height: 300px;\"></chart>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 900:
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\n<script>\n  var map;\n  function initMap() {\n    map = new google.maps.Map(document.getElementById('map'), {\n      zoom: 8,\n      center: new google.maps.LatLng(6.859034,79.9288),\n      mapTypeId: 'hybrid'\n    });\n\n    // Create a <script> tag and set the USGS URL as the source.\n    var script = document.createElement('script');\n    // This example uses a local copy of the GeoJSON stored at\n    // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp\n    script.src = 'file.js';\n    document.getElementsByTagName('head')[0].appendChild(script);\n  }\n\n  // Loop through the results array and place a marker for each\n  // set of coordinates.\n\n  window.eqfeed_callback = function(results) {\n    var heatmapData = [];\n    console.log(results.features.length)\n    for (var i = 0; i < results.features.length; i++) {\n      var latitude = results.features[i].a;\n      var longitude = results.features[i].l;\n      var latLng = new google.maps.LatLng(latitude,longitude);\n      var magnitude = results.features.c;\n      var weightedLoc = {\n        location: latLng,\n        weight: Math.pow(2, magnitude)\n      };\n\n      heatmapData.push(weightedLoc);\n    }\n    var heatmap = new google.maps.visualization.HeatmapLayer({\n      data: heatmapData,\n      dissipating: true,\n      map: map\n    });\n  }\n</script>\n<script async defer\n        src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBcYxR1h1d71whe37NWgrZ4B1rgXNnrYR4&callback=initMap&libraries=visualization\">\n\n</script>\n"

/***/ }),

/***/ 901:
/***/ (function(module, exports) {

module.exports = "<div class=\"top_nav\">\n  <div class=\"nav_menu\">\n    <nav>\n      <div class=\"nav toggle\">\n        <a id=\"menu_toggle\" style=\"display: inline\"><i class=\"fa fa-bars\"></i></a>\n      </div>\n\n      <!--<ul class=\"nav navbar-nav navbar-right\">-->\n        <!--<li class=\"\">-->\n          <!--<a href=\"javascript:;\" class=\"user-profile dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">-->\n            <!--<img src=\"../assets/img/img.jpg\" alt=\"\">John Doe-->\n            <!--<span class=\" fa fa-angle-down\"></span>-->\n          <!--</a>-->\n          <!--<ul class=\"dropdown-menu dropdown-usermenu pull-right\">-->\n            <!--<li><a href=\"javascript:;\"> Profile</a></li>-->\n            <!--<li>-->\n              <!--<a href=\"javascript:;\">-->\n                <!--<span class=\"badge bg-red pull-right\">50%</span>-->\n                <!--<span>Settings</span>-->\n              <!--</a>-->\n            <!--</li>-->\n            <!--<li><a href=\"javascript:;\">Help</a></li>-->\n            <!--<li><a href=\"login.html\"><i class=\"fa fa-sign-out pull-right\"></i> Log Out</a></li>-->\n          <!--</ul>-->\n        <!--</li>-->\n\n        <!--&lt;!&ndash;<li role=\"presentation\" class=\"dropdown\">&ndash;&gt;-->\n          <!--&lt;!&ndash;<a href=\"javascript:;\" class=\"dropdown-toggle info-number\" data-toggle=\"dropdown\" aria-expanded=\"false\">&ndash;&gt;-->\n            <!--&lt;!&ndash;<i class=\"fa fa-envelope-o\"></i>&ndash;&gt;-->\n            <!--&lt;!&ndash;<span class=\"badge bg-green\">6</span>&ndash;&gt;-->\n          <!--&lt;!&ndash;</a>&ndash;&gt;-->\n          <!--&lt;!&ndash;&lt;!&ndash;<ul id=\"menu1\" class=\"dropdown-menu list-unstyled msg_list\" role=\"menu\">&ndash;&gt;&ndash;&gt;-->\n            <!--&lt;!&ndash;&lt;!&ndash;<li>&ndash;&gt;&ndash;&gt;-->\n              <!--&lt;!&ndash;&lt;!&ndash;<a>&ndash;&gt;&ndash;&gt;-->\n                <!--&lt;!&ndash;&lt;!&ndash;<span class=\"image\"><img src=\"../assets/img/img.jpg\" alt=\"Profile Image\" /></span>&ndash;&gt;&ndash;&gt;-->\n                <!--&lt;!&ndash;&lt;!&ndash;<span>&ndash;&gt;&ndash;&gt;-->\n                          <!--&lt;!&ndash;&lt;!&ndash;<span>John Smith</span>&ndash;&gt;&ndash;&gt;-->\n                          <!--&lt;!&ndash;&lt;!&ndash;<span class=\"time\">3 mins ago</span>&ndash;&gt;&ndash;&gt;-->\n                        <!--&lt;!&ndash;&lt;!&ndash;</span>&ndash;&gt;&ndash;&gt;-->\n                <!--&lt;!&ndash;&lt;!&ndash;<span class=\"message\">&ndash;&gt;&ndash;&gt;-->\n                          <!--&lt;!&ndash;&lt;!&ndash;Film festivals used to be do-or-die moments for movie makers. They were where...&ndash;&gt;&ndash;&gt;-->\n                        <!--&lt;!&ndash;&lt;!&ndash;</span>&ndash;&gt;&ndash;&gt;-->\n              <!--&lt;!&ndash;&lt;!&ndash;</a>&ndash;&gt;&ndash;&gt;-->\n            <!--&lt;!&ndash;&lt;!&ndash;</li>&ndash;&gt;&ndash;&gt;-->\n            <!--&lt;!&ndash;&lt;!&ndash;<li>&ndash;&gt;&ndash;&gt;-->\n              <!--&lt;!&ndash;&lt;!&ndash;<a>&ndash;&gt;&ndash;&gt;-->\n                <!--&lt;!&ndash;&lt;!&ndash;<span class=\"image\"><img src=\"../assets/img/img.jpg\" alt=\"Profile Image\" /></span>&ndash;&gt;&ndash;&gt;-->\n                <!--&lt;!&ndash;&lt;!&ndash;<span>&ndash;&gt;&ndash;&gt;-->\n                          <!--&lt;!&ndash;&lt;!&ndash;<span>John Smith</span>&ndash;&gt;&ndash;&gt;-->\n                          <!--&lt;!&ndash;&lt;!&ndash;<span class=\"time\">3 mins ago</span>&ndash;&gt;&ndash;&gt;-->\n                        <!--&lt;!&ndash;&lt;!&ndash;</span>&ndash;&gt;&ndash;&gt;-->\n                <!--&lt;!&ndash;&lt;!&ndash;<span class=\"message\">&ndash;&gt;&ndash;&gt;-->\n                          <!--&lt;!&ndash;&lt;!&ndash;Film festivals used to be do-or-die moments for movie makers. They were where...&ndash;&gt;&ndash;&gt;-->\n                        <!--&lt;!&ndash;&lt;!&ndash;</span>&ndash;&gt;&ndash;&gt;-->\n              <!--&lt;!&ndash;&lt;!&ndash;</a>&ndash;&gt;&ndash;&gt;-->\n            <!--&lt;!&ndash;&lt;!&ndash;</li>&ndash;&gt;&ndash;&gt;-->\n            <!--&lt;!&ndash;&lt;!&ndash;<li>&ndash;&gt;&ndash;&gt;-->\n              <!--&lt;!&ndash;&lt;!&ndash;<a>&ndash;&gt;&ndash;&gt;-->\n                <!--&lt;!&ndash;&lt;!&ndash;<span class=\"image\"><img src=\"../assets/img/img.jpg\" alt=\"Profile Image\" /></span>&ndash;&gt;&ndash;&gt;-->\n                <!--&lt;!&ndash;&lt;!&ndash;<span>&ndash;&gt;&ndash;&gt;-->\n                          <!--&lt;!&ndash;&lt;!&ndash;<span>John Smith</span>&ndash;&gt;&ndash;&gt;-->\n                          <!--&lt;!&ndash;&lt;!&ndash;<span class=\"time\">3 mins ago</span>&ndash;&gt;&ndash;&gt;-->\n                        <!--&lt;!&ndash;&lt;!&ndash;</span>&ndash;&gt;&ndash;&gt;-->\n                <!--&lt;!&ndash;&lt;!&ndash;<span class=\"message\">&ndash;&gt;&ndash;&gt;-->\n                          <!--&lt;!&ndash;&lt;!&ndash;Film festivals used to be do-or-die moments for movie makers. They were where...&ndash;&gt;&ndash;&gt;-->\n                        <!--&lt;!&ndash;&lt;!&ndash;</span>&ndash;&gt;&ndash;&gt;-->\n              <!--&lt;!&ndash;&lt;!&ndash;</a>&ndash;&gt;&ndash;&gt;-->\n            <!--&lt;!&ndash;&lt;!&ndash;</li>&ndash;&gt;&ndash;&gt;-->\n            <!--&lt;!&ndash;&lt;!&ndash;<li>&ndash;&gt;&ndash;&gt;-->\n              <!--&lt;!&ndash;&lt;!&ndash;<a>&ndash;&gt;&ndash;&gt;-->\n                <!--&lt;!&ndash;&lt;!&ndash;<span class=\"image\"><img src=\"../assets/img/img.jpg\" alt=\"Profile Image\" /></span>&ndash;&gt;&ndash;&gt;-->\n                <!--&lt;!&ndash;&lt;!&ndash;<span>&ndash;&gt;&ndash;&gt;-->\n                          <!--&lt;!&ndash;&lt;!&ndash;<span>John Smith</span>&ndash;&gt;&ndash;&gt;-->\n                          <!--&lt;!&ndash;&lt;!&ndash;<span class=\"time\">3 mins ago</span>&ndash;&gt;&ndash;&gt;-->\n                        <!--&lt;!&ndash;&lt;!&ndash;</span>&ndash;&gt;&ndash;&gt;-->\n                <!--&lt;!&ndash;&lt;!&ndash;<span class=\"message\">&ndash;&gt;&ndash;&gt;-->\n                          <!--&lt;!&ndash;&lt;!&ndash;Film festivals used to be do-or-die moments for movie makers. They were where...&ndash;&gt;&ndash;&gt;-->\n                        <!--&lt;!&ndash;&lt;!&ndash;</span>&ndash;&gt;&ndash;&gt;-->\n              <!--&lt;!&ndash;&lt;!&ndash;</a>&ndash;&gt;&ndash;&gt;-->\n            <!--&lt;!&ndash;&lt;!&ndash;</li>&ndash;&gt;&ndash;&gt;-->\n            <!--&lt;!&ndash;&lt;!&ndash;<li>&ndash;&gt;&ndash;&gt;-->\n              <!--&lt;!&ndash;&lt;!&ndash;<div class=\"text-center\">&ndash;&gt;&ndash;&gt;-->\n                <!--&lt;!&ndash;&lt;!&ndash;<a>&ndash;&gt;&ndash;&gt;-->\n                  <!--&lt;!&ndash;&lt;!&ndash;<strong>See All Alerts</strong>&ndash;&gt;&ndash;&gt;-->\n                  <!--&lt;!&ndash;&lt;!&ndash;<i class=\"fa fa-angle-right\"></i>&ndash;&gt;&ndash;&gt;-->\n                <!--&lt;!&ndash;&lt;!&ndash;</a>&ndash;&gt;&ndash;&gt;-->\n              <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->\n            <!--&lt;!&ndash;&lt;!&ndash;</li>&ndash;&gt;&ndash;&gt;-->\n          <!--&lt;!&ndash;&lt;!&ndash;</ul>&ndash;&gt;&ndash;&gt;-->\n        <!--&lt;!&ndash;</li>&ndash;&gt;-->\n      <!--</ul>-->\n    </nav>\n    <div style=\"display: inline;\">\n      <h2 style=\"padding-top: 10px\">Dengue Prediction Portal</h2>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 902:
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div class=\"x_title\">\n    <h2>Dengue Cases Predictions Timeline\n    </h2>\n    <small></small>\n    <div class=\"filter\">\n      <div class=\"col-md-3 col-sm-3 col-xs-12\"></div>\n      <div class=\"col-md-3 col-sm-3 col-xs-12\">\n        <select class=\"form-control\">\n          <option>2017</option>\n        </select>\n      </div>\n      <div class=\"col-md-6 col-sm-6 col-xs-12\">\n        <select class=\"form-control\">\n          <option>MC Colombo</option>\n          <option>Maharagama</option>\n          <option>Dehiwala</option>\n          <!--<option>Option three</option>-->\n          <!--<option>Option four</option>-->\n        </select>\n      </div>\n\n    </div>\n\n    <div class=\"clearfix\"></div>\n  </div>\n\n\n  <br>\n  <chart id=\"myChart\" [data]=\"data\" [type]=\"type\" [options]=\"options\" style=\"height: 400px;\"></chart>\n</div>\n\n<div class=\"clearfix\"></div>\n\n<div class=\"col-md-12 col-sm-12 col-xs-12\" style=\"margin-top: 40px;\">\n  <div class=\"x_panel\">\n    <div class=\"x_title\">\n      <h2>Comparison of Regression Models</h2>\n      <ul class=\"nav navbar-right panel_toolbox\">\n        <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n        </li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i\n            class=\"fa fa-wrench\"></i></a>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n            <li><a href=\"#\">Settings 1</a>\n            </li>\n            <li><a href=\"#\">Settings 2</a>\n            </li>\n          </ul>\n        </li>\n        <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n        </li>\n      </ul>\n      <div class=\"clearfix\"></div>\n    </div>\n    <div class=\"x_content\">\n\n      <table class=\"table table-bordered\">\n        <thead>\n        <tr>\n          <th>#</th>\n          <th>Model</th>\n          <th>RMSE</th>\n          <th>R-Squared</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <th scope=\"row\">1</th>\n          <td>Mark</td>\n          <td>Otto</td>\n          <td>@mdo</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">2</th>\n          <td>Jacob</td>\n          <td>Thornton</td>\n          <td>@fat</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">3</th>\n          <td>Larry</td>\n          <td>the Bird</td>\n          <td>@twitter</td>\n        </tr>\n        </tbody>\n      </table>\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 903:
/***/ (function(module, exports) {

module.exports = "<!-- menu profile quick info -->\r\n<div class=\"profile clearfix\">\r\n  <div class=\"profile_pic\">\r\n    <img src=\".././assets/img/mosi1.png\" alt=\"...\" class=\"img-circle profile_img\" height=\"60px\" width=\"60px;\">\r\n  </div>\r\n  <div class=\"profile_info\">\r\n    <span>Welcome to,</span>\r\n    <h2>Dengue Prediction Portal</h2>\r\n  </div>\r\n</div>\r\n<!-- /menu profile quick info -->\r\n\r\n<br />\r\n\r\n<div id=\"sidebar-menu\" class=\"main_menu_side hidden-print main_menu\">\r\n  <div class=\"menu_section\">\r\n    <h3>General</h3>\r\n    <ul class=\"nav side-menu\">\r\n      <li><a href=\"/\"><i class=\"fa fa-home\"></i> Home </a></li>\r\n      <li><a><i class=\"fa fa-clone\"></i>Timeline Comparison <span class=\"fa fa-chevron-down\"></span></a>\r\n        <ul class=\"nav child_menu\">\r\n          <li><a href=\"/regtimeline\">Regression</a></li>\r\n          <li><a href=\"/clastimeline\">Classification</a></li>\r\n        </ul>\r\n      </li>\r\n      <li><a><i class=\"fa fa-edit\"></i> Predictions <span class=\"fa fa-chevron-down\"></span></a>\r\n        <ul class=\"nav child_menu\">\r\n          <!--<li><a routerLink=\"/regression\"  routerLinkActive=\"active\">Regression</a></li>-->\r\n          <!--<li><a routerLink=\"/classification\"  routerLinkActive=\"active\">Classifications</a></li>-->\r\n\r\n          <li><a href=\"/regression\">Regression</a></li>\r\n          <li><a href=\"/classification\">Classifications</a></li>\r\n          <!--<li><a href=\"\">Dashboard3</a></li>-->\r\n        </ul>\r\n\r\n\r\n      <!--</li>-->\r\n      <!--<li><a><i class=\"fa fa-edit\"></i> Forms <span class=\"fa fa-chevron-down\"></span></a>-->\r\n        <!--<ul class=\"nav child_menu\">-->\r\n          <!--<li><a href=\"form.html\">General Form</a></li>-->\r\n          <!--<li><a href=\"form_advanced.html\">Advanced Components</a></li>-->\r\n          <!--<li><a href=\"form_validation.html\">Form Validation</a></li>-->\r\n          <!--<li><a href=\"form_wizards.html\">Form Wizard</a></li>-->\r\n          <!--<li><a href=\"form_upload.html\">Form Upload</a></li>-->\r\n          <!--<li><a href=\"form_buttons.html\">Form Buttons</a></li>-->\r\n        <!--</ul>-->\r\n      <!--</li>-->\r\n      <!--<li><a><i class=\"fa fa-desktop\"></i> UI Elements <span class=\"fa fa-chevron-down\"></span></a>-->\r\n        <!--<ul class=\"nav child_menu\">-->\r\n          <!--<li><a href=\"general_elements.html\">General Elements</a></li>-->\r\n          <!--<li><a href=\"media_gallery.html\">Media Gallery</a></li>-->\r\n          <!--<li><a href=\"typography.html\">Typography</a></li>-->\r\n          <!--<li><a href=\"icons.html\">Icons</a></li>-->\r\n          <!--<li><a href=\"glyphicons.html\">Glyphicons</a></li>-->\r\n          <!--<li><a href=\"widgets.html\">Widgets</a></li>-->\r\n          <!--<li><a href=\"invoice.html\">Invoice</a></li>-->\r\n          <!--<li><a href=\"inbox.html\">Inbox</a></li>-->\r\n          <!--<li><a href=\"calendar.html\">Calendar</a></li>-->\r\n        <!--</ul>-->\r\n      <!--</li>-->\r\n      <!--<li><a><i class=\"fa fa-table\"></i> Tables <span class=\"fa fa-chevron-down\"></span></a>-->\r\n        <!--<ul class=\"nav child_menu\">-->\r\n          <!--<li><a href=\"tables.html\">Tables</a></li>-->\r\n          <!--<li><a href=\"tables_dynamic.html\">Table Dynamic</a></li>-->\r\n        <!--</ul>-->\r\n      <!--</li>-->\r\n      <!--<li><a><i class=\"fa fa-bar-chart-o\"></i> Data Presentation <span class=\"fa fa-chevron-down\"></span></a>-->\r\n        <!--<ul class=\"nav child_menu\">-->\r\n          <!--<li><a href=\"chartjs.html\">Chart JS</a></li>-->\r\n          <!--<li><a href=\"chartjs2.html\">Chart JS2</a></li>-->\r\n          <!--<li><a href=\"morisjs.html\">Moris JS</a></li>-->\r\n          <!--<li><a href=\"echarts.html\">ECharts</a></li>-->\r\n          <!--<li><a href=\"other_charts.html\">Other Charts</a></li>-->\r\n        <!--</ul>-->\r\n      <!--</li>-->\r\n      <li><a><i class=\"fa fa-clone\"></i>Mobility <span class=\"fa fa-chevron-down\"></span></a>\r\n        <ul class=\"nav child_menu\">\r\n          <li><a href=\"fixed_sidebar.html\">Heat Map</a></li>\r\n          <!--<li><a href=\"fixed_footer.html\">Fixed Footer</a></li>-->\r\n        </ul>\r\n      </li>\r\n\r\n      <!--<li><a><i class=\"fa fa-clone\"></i>Settings <span class=\"fa fa-chevron-down\"></span></a>-->\r\n        <!--<ul class=\"nav child_menu\">-->\r\n          <!--&lt;!&ndash;<li><a href=\"fixed_sidebar.html\">Fixed Sidebar</a></li>&ndash;&gt;-->\r\n          <!--&lt;!&ndash;<li><a href=\"fixed_footer.html\">Fixed Footer</a></li>&ndash;&gt;-->\r\n        <!--</ul>-->\r\n      <!--</li>-->\r\n    </ul>\r\n  </div>\r\n  <!--<div class=\"menu_section\">-->\r\n    <!--<h3>Live On</h3>-->\r\n    <!--<ul class=\"nav side-menu\">-->\r\n      <!--<li><a><i class=\"fa fa-bug\"></i> Additional Pages <span class=\"fa fa-chevron-down\"></span></a>-->\r\n        <!--<ul class=\"nav child_menu\">-->\r\n          <!--<li><a href=\"e_commerce.html\">E-commerce</a></li>-->\r\n          <!--<li><a href=\"projects.html\">Projects</a></li>-->\r\n          <!--<li><a href=\"project_detail.html\">Project Detail</a></li>-->\r\n          <!--<li><a href=\"contacts.html\">Contacts</a></li>-->\r\n          <!--<li><a href=\"profile.html\">Profile</a></li>-->\r\n        <!--</ul>-->\r\n      <!--</li>-->\r\n      <!--<li><a><i class=\"fa fa-windows\"></i> Extras <span class=\"fa fa-chevron-down\"></span></a>-->\r\n        <!--<ul class=\"nav child_menu\">-->\r\n          <!--<li><a href=\"page_403.html\">403 Error</a></li>-->\r\n          <!--<li><a href=\"page_404.html\">404 Error</a></li>-->\r\n          <!--<li><a href=\"page_500.html\">500 Error</a></li>-->\r\n          <!--<li><a href=\"plain_page.html\">Plain Page</a></li>-->\r\n          <!--<li><a href=\"login.html\">Login Page</a></li>-->\r\n          <!--<li><a href=\"pricing_tables.html\">Pricing Tables</a></li>-->\r\n        <!--</ul>-->\r\n      <!--</li>-->\r\n      <!--<li><a><i class=\"fa fa-sitemap\"></i> Multilevel Menu <span class=\"fa fa-chevron-down\"></span></a>-->\r\n        <!--<ul class=\"nav child_menu\">-->\r\n          <!--<li><a href=\"#level1_1\">Level One</a>-->\r\n          <!--<li><a>Level One<span class=\"fa fa-chevron-down\"></span></a>-->\r\n            <!--<ul class=\"nav child_menu\">-->\r\n              <!--<li class=\"sub_menu\"><a href=\"level2.html\">Level Two</a>-->\r\n              <!--</li>-->\r\n              <!--<li><a href=\"#level2_1\">Level Two</a>-->\r\n              <!--</li>-->\r\n              <!--<li><a href=\"#level2_2\">Level Two</a>-->\r\n              <!--</li>-->\r\n            <!--</ul>-->\r\n          <!--</li>-->\r\n          <!--<li><a href=\"#level1_2\">Level One</a>-->\r\n          <!--</li>-->\r\n        <!--</ul>-->\r\n      <!--</li>-->\r\n      <!--<li><a href=\"javascript:void(0)\"><i class=\"fa fa-laptop\"></i> Landing Page <span class=\"label label-success pull-right\">Coming Soon</span></a></li>-->\r\n    <!--</ul>-->\r\n  <!--</div>-->\r\n  <div class=\"sidebar-footer hidden-small\">\r\n    <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Settings\">\r\n      <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span>\r\n    </a>\r\n    <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"FullScreen\">\r\n      <span class=\"glyphicon glyphicon-fullscreen\" aria-hidden=\"true\"></span>\r\n    </a>\r\n    <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Lock\">\r\n      <span class=\"glyphicon glyphicon-eye-close\" aria-hidden=\"true\"></span>\r\n    </a>\r\n    <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Logout\" href=\"login.html\">\r\n      <span class=\"glyphicon glyphicon-off\" aria-hidden=\"true\"></span>\r\n    </a>\r\n  </div>\r\n\r\n</div>\r\n<script>\r\n\r\n  console.log(\"bbbb\");\r\n\r\n</script>\r\n"

/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(510);


/***/ })

},[929]);
//# sourceMappingURL=main.bundle.map