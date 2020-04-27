function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _new_item_new_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./new-item/new-item.component */
    "./src/app/new-item/new-item.component.ts");
    /* harmony import */


    var _todos_todos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./todos/todos.component */
    "./src/app/todos/todos.component.ts");
    /* harmony import */


    var _finish_finish_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./finish/finish.component */
    "./src/app/finish/finish.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'todo';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 7,
      vars: 0,
      consts: [[1, "container"], [1, "row", "pb-3"], [1, "col-lg-6"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-new-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-todos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-finish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_new_item_new_item_component__WEBPACK_IMPORTED_MODULE_1__["NewItemComponent"], _todos_todos_component__WEBPACK_IMPORTED_MODULE_2__["TodosComponent"], _finish_finish_component__WEBPACK_IMPORTED_MODULE_3__["FinishComponent"]],
      styles: ["div[_ngcontent-%COMP%]{\r\n    background-color: #ffffff;\r\n    border-radius: 0 0 15px 15px;\r\n\r\n}\r\n\r\n.header-config[_ngcontent-%COMP%]{\r\n    color: #6699ff;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCOztBQUVoQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xyXG5cclxufVxyXG5cclxuLmhlYWRlci1jb25maWd7XHJcbiAgICBjb2xvcjogIzY2OTlmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _new_item_new_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./new-item/new-item.component */
    "./src/app/new-item/new-item.component.ts");
    /* harmony import */


    var _todos_todos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./todos/todos.component */
    "./src/app/todos/todos.component.ts");
    /* harmony import */


    var _todos_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./todos/todo-item/todo-item.component */
    "./src/app/todos/todo-item/todo-item.component.ts");
    /* harmony import */


    var _finish_finish_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./finish/finish.component */
    "./src/app/finish/finish.component.ts");
    /* harmony import */


    var _finish_finish_item_finish_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./finish/finish-item/finish-item.component */
    "./src/app/finish/finish-item/finish-item.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _new_item_new_item_component__WEBPACK_IMPORTED_MODULE_3__["NewItemComponent"], _todos_todos_component__WEBPACK_IMPORTED_MODULE_4__["TodosComponent"], _todos_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_5__["TodoItemComponent"], _finish_finish_component__WEBPACK_IMPORTED_MODULE_6__["FinishComponent"], _finish_finish_item_finish_item_component__WEBPACK_IMPORTED_MODULE_7__["FinishItemComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _new_item_new_item_component__WEBPACK_IMPORTED_MODULE_3__["NewItemComponent"], _todos_todos_component__WEBPACK_IMPORTED_MODULE_4__["TodosComponent"], _todos_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_5__["TodoItemComponent"], _finish_finish_component__WEBPACK_IMPORTED_MODULE_6__["FinishComponent"], _finish_finish_item_finish_item_component__WEBPACK_IMPORTED_MODULE_7__["FinishItemComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/finish/finish-item/finish-item.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/finish/finish-item/finish-item.component.ts ***!
    \*************************************************************/

  /*! exports provided: FinishItemComponent */

  /***/
  function srcAppFinishFinishItemFinishItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinishItemComponent", function () {
      return FinishItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_finish_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/finish.service */
    "./src/app/services/finish.service.ts");

    var FinishItemComponent =
    /*#__PURE__*/
    function () {
      function FinishItemComponent(finishService) {
        _classCallCheck(this, FinishItemComponent);

        this.finishService = finishService;
      }

      _createClass(FinishItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClickMe",
        value: function onClickMe($event) {
          this.finishService.deleteFinish(this.counter);
        }
      }]);

      return FinishItemComponent;
    }();

    FinishItemComponent.ɵfac = function FinishItemComponent_Factory(t) {
      return new (t || FinishItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_finish_service__WEBPACK_IMPORTED_MODULE_1__["FinishService"]));
    };

    FinishItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FinishItemComponent,
      selectors: [["app-finish-item"]],
      inputs: {
        todo: "todo",
        counter: "counter"
      },
      decls: 8,
      vars: 1,
      consts: [[1, "row", "animation-target"], [1, "col-md-11", "col-sm-10", "col-xs-1", "text-box"], [1, "inner"], [1, "col-md-1", "col-sm-2", "col-xs-11", "icon-box"], ["href", "#", 3, "click"], ["name", "trash-outline"]],
      template: function FinishItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "del");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinishItemComponent_Template_a_click_6_listener($event) {
            return ctx.onClickMe($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todo.name);
        }
      },
      styles: [".inner[_ngcontent-%COMP%]{\r\n    color: #6699ff;\r\n    \r\n}\r\n\r\n\r\ndel[_ngcontent-%COMP%] {\r\n    color: rgb(255, 0, 0);\r\n  \r\n}\r\n\r\n\r\nion-icon[_ngcontent-%COMP%]{\r\n    color: red;\r\n    font-size: 1.2em;\r\n}\r\n\r\n\r\nion-icon[_ngcontent-%COMP%]:hover{\r\n    font-size: 1.1em;\r\n}\r\n\r\n\r\ndiv[_ngcontent-%COMP%]{\r\n    border-bottom: 0.2px rgb(199, 199, 199) solid;\r\n   margin-top:4px\r\n}\r\n\r\n\r\n@media only screen and (max-width: 377px) {\r\n\r\n    div[_ngcontent-%COMP%]{\r\n        \r\n        border-bottom: none;\r\n    }\r\n\r\n    .row[_ngcontent-%COMP%]{\r\n        border: 1px gray solid;\r\n        margin-bottom: 30px;\r\n    }\r\n\r\n    .icon-box[_ngcontent-%COMP%]{\r\n       \r\n        text-align: center;\r\n       \r\n    }\r\n\r\n    .text-box[_ngcontent-%COMP%]{\r\n        border-bottom: 1px gray solid;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluaXNoL2ZpbmlzaC1pdGVtL2ZpbmlzaC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGNBQWM7O0FBRWxCOzs7QUFHQTtJQUNJLHFCQUFxQjs7QUFFekI7OztBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksNkNBQTZDO0dBQzlDO0FBQ0g7OztBQUVBOztJQUVJO1FBQ0ksNEJBQTRCO1FBQzVCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7O0lBRUE7O1FBRUksa0JBQWtCOztJQUV0Qjs7SUFFQTtRQUNJLDZCQUE2QjtJQUNqQzs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2ZpbmlzaC9maW5pc2gtaXRlbS9maW5pc2gtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uaW5uZXJ7XHJcbiAgICBjb2xvcjogIzY2OTlmZjtcclxuICAgIFxyXG59XHJcblxyXG5cclxuZGVsIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICBcclxufVxyXG5pb24taWNvbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG5pb24taWNvbjpob3ZlcntcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbn1cclxuXHJcbmRpdntcclxuICAgIGJvcmRlci1ib3R0b206IDAuMnB4IHJnYigxOTksIDE5OSwgMTk5KSBzb2xpZDtcclxuICAgbWFyZ2luLXRvcDo0cHhcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzdweCkge1xyXG5cclxuICAgIGRpdntcclxuICAgICAgICAvKiBib3JkZXI6IGdyYXkgMXB4IHNvbGlkOyAqL1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvd3tcclxuICAgICAgICBib3JkZXI6IDFweCBncmF5IHNvbGlkO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmljb24tYm94e1xyXG4gICAgICAgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQtYm94e1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBncmF5IHNvbGlkO1xyXG4gICAgfVxyXG5cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinishItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-finish-item',
          templateUrl: './finish-item.component.html',
          styleUrls: ['./finish-item.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_finish_service__WEBPACK_IMPORTED_MODULE_1__["FinishService"]
        }];
      }, {
        todo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        counter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/finish/finish.component.ts":
  /*!********************************************!*\
    !*** ./src/app/finish/finish.component.ts ***!
    \********************************************/

  /*! exports provided: FinishComponent */

  /***/
  function srcAppFinishFinishComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinishComponent", function () {
      return FinishComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_finish_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/finish.service */
    "./src/app/services/finish.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _finish_item_finish_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./finish-item/finish-item.component */
    "./src/app/finish/finish-item/finish-item.component.ts");

    function FinishComponent_app_finish_item_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-finish-item", 3);
      }

      if (rf & 2) {
        var i_r5 = ctx.$implicit;
        var counter_r6 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("todo", i_r5)("counter", counter_r6);
      }
    }

    var FinishComponent =
    /*#__PURE__*/
    function () {
      function FinishComponent(finshService) {
        _classCallCheck(this, FinishComponent);

        this.finshService = finshService;
        this.finish = [];
      }

      _createClass(FinishComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.finish = this.finshService.getAll();
          console.log("array " + this.finish);
        }
      }]);

      return FinishComponent;
    }();

    FinishComponent.ɵfac = function FinishComponent_Factory(t) {
      return new (t || FinishComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_finish_service__WEBPACK_IMPORTED_MODULE_1__["FinishService"]));
    };

    FinishComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FinishComponent,
      selectors: [["app-finish"]],
      decls: 5,
      vars: 1,
      consts: [[1, "text-center", "pt-2", "header-config"], [1, "container"], [3, "todo", "counter", 4, "ngFor", "ngForOf"], [3, "todo", "counter"]],
      template: function FinishComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Finished");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FinishComponent_app_finish_item_4_Template, 1, 2, "app-finish-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.finish);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _finish_item_finish_item_component__WEBPACK_IMPORTED_MODULE_3__["FinishItemComponent"]],
      styles: [".header-config[_ngcontent-%COMP%]{\r\n    color: #6699ff;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluaXNoL2ZpbmlzaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2ZpbmlzaC9maW5pc2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29uZmlne1xyXG4gICAgY29sb3I6ICM2Njk5ZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinishComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-finish',
          templateUrl: './finish.component.html',
          styleUrls: ['./finish.component.css']
        }]
      }], function () {
        return [{
          type: _services_finish_service__WEBPACK_IMPORTED_MODULE_1__["FinishService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/model/todo.model.ts":
  /*!*************************************!*\
    !*** ./src/app/model/todo.model.ts ***!
    \*************************************/

  /*! exports provided: Todo */

  /***/
  function srcAppModelTodoModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Todo", function () {
      return Todo;
    });

    var Todo = function Todo(name, isChecked) {
      _classCallCheck(this, Todo);

      this.name = name;
      this.isChecked = isChecked;
      this.name = name;
      this.isChecked = isChecked;
    };
    /***/

  },

  /***/
  "./src/app/new-item/new-item.component.ts":
  /*!************************************************!*\
    !*** ./src/app/new-item/new-item.component.ts ***!
    \************************************************/

  /*! exports provided: NewItemComponent */

  /***/
  function srcAppNewItemNewItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewItemComponent", function () {
      return NewItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/service.service */
    "./src/app/services/service.service.ts");

    var _c0 = ["inputVal"];

    var NewItemComponent =
    /*#__PURE__*/
    function () {
      function NewItemComponent(tService) {
        _classCallCheck(this, NewItemComponent);

        this.tService = tService;
      }

      _createClass(NewItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(event) {
          event.preventDefault(); // console.log("value is " + this.inputVal.nativeElement.value);

          var userVal = this.inputVal.nativeElement.value;
          console.log("user val " + userVal);

          if (userVal === '') {
            alert("Submitted To do can not be empty");
          } else {
            this.tService.addItem(userVal);
            this.inputVal.nativeElement.value = "";
          }
        }
      }]);

      return NewItemComponent;
    }();

    NewItemComponent.ɵfac = function NewItemComponent_Factory(t) {
      return new (t || NewItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]));
    };

    NewItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewItemComponent,
      selectors: [["app-new-item"]],
      viewQuery: function NewItemComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputVal = _t.first);
        }
      },
      decls: 14,
      vars: 0,
      consts: [[1, "container", "mt-2", "main", "mb-3", "main-row"], [1, "row"], [1, "col-md-2", "col-sm-12", "head-holder"], ["name", "list-outline", 1, "mr-3", "list-icon", "pt-3"], [1, "text-header"], [1, "col-md-9", "col-sm-10", "input-div", "input-holder"], [1, "form-group", 3, "keyup.enter"], ["type", "text", "id", "item", 1, "form-control"], ["inputVal", ""], [1, "col-md-1", "col-sm-2", "submit-holder"], ["href", "#", 1, "add-btn-link", 3, "click"], ["name", "add-circle-outline", 1, "submit-query"]],
      template: function NewItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ADD Items To List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function NewItemComponent_Template_div_keyup_enter_8_listener($event) {
            return ctx.onSubmit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewItemComponent_Template_a_click_12_listener($event) {
            return ctx.onSubmit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ion-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["span[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    vertical-align: middle;\r\n    font-size: 1em;\r\n    text-align: center;\r\n\r\n\r\n}\r\n.text-header[_ngcontent-%COMP%]{\r\n    width: 12em;\r\n    margin-top: 18px;\r\n    color: #6699ff;\r\n}\r\n.main[_ngcontent-%COMP%]{\r\n    background-color: #ffffff;\r\n    opacity: 0.9;\r\n    border-radius: 15px 15px 0 0;\r\n    height: 70px;\r\n}\r\n.list-icon[_ngcontent-%COMP%]{\r\n    font-size: 2em;\r\n    color: #66ff99;\r\n    vertical-align: middle;\r\n    width: 1em;\r\n    display: none;\r\n}\r\n.input-div[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n    vertical-align: middle;\r\n    height: 30px;\r\n    \r\n}\r\n.submit-query[_ngcontent-%COMP%]{\r\n    font-size: 2em;\r\n    vertical-align: middle;\r\n    color: #6699ff;\r\n    text-align: center;\r\n    margin-top: 15px;\r\n}\r\n.submit-query[_ngcontent-%COMP%]:hover {\r\n    color: #66ff99;\r\n    font-size: 1.9em;\r\n}\r\n@media only screen and (max-width: 770px) {\r\n  \r\n    input[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n\r\n   .main-row[_ngcontent-%COMP%]{\r\n       height: 130px;\r\n      \r\n   }\r\n\r\n   .head-holder[_ngcontent-%COMP%]{\r\n       text-align: center;\r\n   }\r\n\r\n   .submit-query[_ngcontent-%COMP%]{\r\n       float: right;\r\n   }\r\n   .text-header[_ngcontent-%COMP%]{\r\n       margin-left: auto;\r\n       margin-right: auto;\r\n       color: #66ff99;\r\n   }\r\n\r\n\r\n  \r\n\r\n}\r\n@media only screen and (max-width: 375px) {\r\n\r\n\r\n    .main-row[_ngcontent-%COMP%]{\r\n        height: 160px;\r\n       \r\n    }\r\n\r\n    .submit-query[_ngcontent-%COMP%]{\r\n        float: none;\r\n        \r\n    }\r\n    \r\n    .add-btn-link[_ngcontent-%COMP%]{\r\n        margin-left: 45%;\r\n\r\n        margin-bottom: -30px;\r\n        \r\n    }\r\n    .input-div[_ngcontent-%COMP%] {\r\n        margin-bottom: -30px;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWl0ZW0vbmV3LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtCQUFrQjs7O0FBR3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZOztBQUVoQjtBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUdBOztJQUVJO1FBQ0ksV0FBVztJQUNmOztHQUVEO09BQ0ksYUFBYTs7R0FFakI7O0dBRUE7T0FDSSxrQkFBa0I7R0FDdEI7O0dBRUE7T0FDSSxZQUFZO0dBQ2hCO0dBQ0E7T0FDSSxpQkFBaUI7T0FDakIsa0JBQWtCO09BQ2xCLGNBQWM7R0FDbEI7Ozs7O0FBS0g7QUFFQTs7O0lBR0k7UUFDSSxhQUFhOztJQUVqQjs7SUFFQTtRQUNJLFdBQVc7O0lBRWY7O0lBRUE7UUFDSSxnQkFBZ0I7O1FBRWhCLG9CQUFvQjs7SUFFeEI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4Qjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL25ldy1pdGVtL25ldy1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5cclxufVxyXG4udGV4dC1oZWFkZXJ7XHJcbiAgICB3aWR0aDogMTJlbTtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBjb2xvcjogIzY2OTlmZjtcclxufVxyXG4ubWFpbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG4ubGlzdC1pY29ue1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBjb2xvcjogIzY2ZmY5OTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogMWVtO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmlucHV0LWRpdntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIFxyXG59XHJcblxyXG4uc3VibWl0LXF1ZXJ5e1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY29sb3I6ICM2Njk5ZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uc3VibWl0LXF1ZXJ5OmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNjZmZjk5O1xyXG4gICAgZm9udC1zaXplOiAxLjllbTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpIHtcclxuICBcclxuICAgIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgLm1haW4tcm93e1xyXG4gICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgICAgXHJcbiAgIH1cclxuXHJcbiAgIC5oZWFkLWhvbGRlcntcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgfVxyXG5cclxuICAgLnN1Ym1pdC1xdWVyeXtcclxuICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgfVxyXG4gICAudGV4dC1oZWFkZXJ7XHJcbiAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgIGNvbG9yOiAjNjZmZjk5O1xyXG4gICB9XHJcblxyXG5cclxuICBcclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcclxuXHJcblxyXG4gICAgLm1haW4tcm93e1xyXG4gICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuc3VibWl0LXF1ZXJ5e1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWRkLWJ0bi1saW5re1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0NSU7XHJcblxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmlucHV0LWRpdiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-item',
          templateUrl: './new-item.component.html',
          styleUrls: ['./new-item.component.css']
        }]
      }], function () {
        return [{
          type: _services_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]
        }];
      }, {
        inputVal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['inputVal']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/finish.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/finish.service.ts ***!
    \********************************************/

  /*! exports provided: FinishService */

  /***/
  function srcAppServicesFinishServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinishService", function () {
      return FinishService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/todo.model */
    "./src/app/model/todo.model.ts");

    var FinishService =
    /*#__PURE__*/
    function () {
      function FinishService() {
        _classCallCheck(this, FinishService);

        this.Tofinish = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.finishTodos = [new _model_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"]("brush teeth", false), new _model_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"]("buy a plane", false)];
      }

      _createClass(FinishService, [{
        key: "getAll",
        value: function getAll() {
          return this.finishTodos;
        }
      }, {
        key: "addToFinish",
        value: function addToFinish(todo) {
          this.finishTodos.push(todo);
        }
      }, {
        key: "deleteFinish",
        value: function deleteFinish(index) {
          this.finishTodos.splice(index, 1);
        }
      }]);

      return FinishService;
    }();

    FinishService.ɵfac = function FinishService_Factory(t) {
      return new (t || FinishService)();
    };

    FinishService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FinishService,
      factory: FinishService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinishService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, {
        Tofinish: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/service.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/service.service.ts ***!
    \*********************************************/

  /*! exports provided: ServiceService */

  /***/
  function srcAppServicesServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceService", function () {
      return ServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/todo.model */
    "./src/app/model/todo.model.ts");

    var ServiceService =
    /*#__PURE__*/
    function () {
      function ServiceService() {
        _classCallCheck(this, ServiceService);

        this.todoList = [new _model_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"]("make bed", false), new _model_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"]("buy lambo", false)];
      }

      _createClass(ServiceService, [{
        key: "addItem",
        value: function addItem(item) {
          this.todoList.push(new _model_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"](item, false));
        }
      }, {
        key: "getAllList",
        value: function getAllList() {
          return this.todoList;
        }
      }, {
        key: "deleteTodo",
        value: function deleteTodo(index) {
          this.todoList.splice(index, 1);
        }
      }]);

      return ServiceService;
    }();

    ServiceService.ɵfac = function ServiceService_Factory(t) {
      return new (t || ServiceService)();
    };

    ServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ServiceService,
      factory: ServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/todos/todo-item/todo-item.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/todos/todo-item/todo-item.component.ts ***!
    \********************************************************/

  /*! exports provided: TodoItemComponent */

  /***/
  function srcAppTodosTodoItemTodoItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function () {
      return TodoItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/service.service */
    "./src/app/services/service.service.ts");
    /* harmony import */


    var src_app_services_finish_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/finish.service */
    "./src/app/services/finish.service.ts");

    var TodoItemComponent =
    /*#__PURE__*/
    function () {
      function TodoItemComponent(tSErvice, finishService) {
        _classCallCheck(this, TodoItemComponent);

        this.tSErvice = tSErvice;
        this.finishService = finishService;
      }

      _createClass(TodoItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClickMe",
        value: function onClickMe(event) {
          event.preventDefault(); // console.log("hello");

          this.finishService.addToFinish(this.todo);
          this.tSErvice.deleteTodo(this.counter);
        }
      }]);

      return TodoItemComponent;
    }();

    TodoItemComponent.ɵfac = function TodoItemComponent_Factory(t) {
      return new (t || TodoItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_finish_service__WEBPACK_IMPORTED_MODULE_2__["FinishService"]));
    };

    TodoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TodoItemComponent,
      selectors: [["app-todo-item"]],
      inputs: {
        todo: "todo",
        counter: "counter"
      },
      decls: 7,
      vars: 1,
      consts: [[1, "row", "animation-target"], [1, "col-md-1", "col-sm-2", "col-xs-1", "icon-box"], ["href", "#", 3, "click"], ["name", "checkmark-done-circle-outline"], [1, "col-md-11", "col-sm-10", "col-xs-11"]],
      template: function TodoItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_a_click_2_listener($event) {
            return ctx.onClickMe($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todo.name);
        }
      },
      styles: ["p[_ngcontent-%COMP%]{\r\n    color: #6699ff;\r\n}\r\n\r\nion-icon[_ngcontent-%COMP%]{\r\n    color: rgb(8, 163, 8);\r\n    font-size: 1.2em;\r\n}\r\n\r\nion-icon[_ngcontent-%COMP%]:hover{\r\n    font-size: 1.1em;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]{\r\n    border-bottom: 0.2px rgb(199, 199, 199) solid;\r\n    margin-top:4px\r\n}\r\n\r\n@media only screen and (max-width: 377px) {\r\n\r\n    div[_ngcontent-%COMP%]{\r\n        \r\n        border-bottom: none;\r\n    }\r\n\r\n    .row[_ngcontent-%COMP%]{\r\n        border: 1px gray solid;\r\n        margin-bottom: 30px;\r\n    }\r\n\r\n    .icon-box[_ngcontent-%COMP%]{\r\n        border-bottom: 1px gray solid;\r\n        text-align: center;\r\n       \r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kby1pdGVtL3RvZG8taXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNkNBQTZDO0lBQzdDO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSw0QkFBNEI7UUFDNUIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLDZCQUE2QjtRQUM3QixrQkFBa0I7O0lBRXRCOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvdG9kb3MvdG9kby1pdGVtL3RvZG8taXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnB7XHJcbiAgICBjb2xvcjogIzY2OTlmZjtcclxufVxyXG5cclxuaW9uLWljb257XHJcbiAgICBjb2xvcjogcmdiKDgsIDE2MywgOCk7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG5pb24taWNvbjpob3ZlcntcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbn1cclxuXHJcbmRpdntcclxuICAgIGJvcmRlci1ib3R0b206IDAuMnB4IHJnYigxOTksIDE5OSwgMTk5KSBzb2xpZDtcclxuICAgIG1hcmdpbi10b3A6NHB4XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc3cHgpIHtcclxuXHJcbiAgICBkaXZ7XHJcbiAgICAgICAgLyogYm9yZGVyOiBncmF5IDFweCBzb2xpZDsgKi9cclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5yb3d7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggZ3JheSBzb2xpZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pY29uLWJveHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZ3JheSBzb2xpZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-todo-item',
          templateUrl: './todo-item.component.html',
          styleUrls: ['./todo-item.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]
        }, {
          type: src_app_services_finish_service__WEBPACK_IMPORTED_MODULE_2__["FinishService"]
        }];
      }, {
        todo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        counter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['counter']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/todos/todos.component.ts":
  /*!******************************************!*\
    !*** ./src/app/todos/todos.component.ts ***!
    \******************************************/

  /*! exports provided: TodosComponent */

  /***/
  function srcAppTodosTodosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodosComponent", function () {
      return TodosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/service.service */
    "./src/app/services/service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./todo-item/todo-item.component */
    "./src/app/todos/todo-item/todo-item.component.ts");

    function TodosComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-todo-item", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var do_r2 = ctx.$implicit;
        var i_r3 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("counter", i_r3)("todo", do_r2);
      }
    }

    var TodosComponent =
    /*#__PURE__*/
    function () {
      function TodosComponent(TService) {
        _classCallCheck(this, TodosComponent);

        this.TService = TService;
        this.allTodo = [];
      }

      _createClass(TodosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.allTodo = this.TService.getAllList();
        }
      }]);

      return TodosComponent;
    }();

    TodosComponent.ɵfac = function TodosComponent_Factory(t) {
      return new (t || TodosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]));
    };

    TodosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TodosComponent,
      selectors: [["app-todos"]],
      decls: 5,
      vars: 1,
      consts: [[1, "main"], [1, "text-center", "pt-2", "header-config"], ["class", "container", 4, "ngFor", "ngForOf"], [1, "container"], [3, "counter", "todo"]],
      template: function TodosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Awesome List Of Stuff To Do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TodosComponent_div_4_Template, 2, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allTodo);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_3__["TodoItemComponent"]],
      styles: [".header-config[_ngcontent-%COMP%]{\r\n    color: #6699ff;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC90b2Rvcy90b2Rvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb25maWd7XHJcbiAgICBjb2xvcjogIzY2OTlmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-todos',
          templateUrl: './todos.component.html',
          styleUrls: ['./todos.component.css']
        }]
      }], function () {
        return [{
          type: _services_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\micki\Desktop\Angular\todo\todo\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map