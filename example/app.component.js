/*
 * @author RAJAN G
 */
System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.currentPage = 1;
                    this.totalItems = 12;
                    this.maxSize = 3;
                    this.currentPage2 = 1;
                    this.totalItems2 = 200;
                    this.maxSize2 = 5;
                }
                AppComponent.prototype.setPage = function (pageNo) {
                    this.currentPage = pageNo;
                };
                ;
                AppComponent.prototype.pageChanged = function (event) {
                    console.log('Number items per page: ' + event.itemsPerPage);
                };
                ;
                AppComponent.prototype.setPage2 = function (pageNo) {
                    this.currentPage = pageNo;
                };
                ;
                AppComponent.prototype.pageChanged2 = function (event) {
                    console.log('Number items per page: ' + event.itemsPerPage);
                };
                ;
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "test\n<div *ngIf=\"totalItems >0\">\n<ng-pagination [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\" (pageChanged)=\"pageChanged($event)\"\nprevious-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"First\" last-text=\"Last\"></ng-pagination>\n</div>\n<br>\n<br>\n<br><div *ngIf=\"totalItems2 >0\">\n<ng-pagination [totalItems]=\"totalItems2\" [(ngModel)]=\"currentPage2\" [maxSize]=\"maxSize2\" (pageChanged)=\"pageChanged2($event)\"\nprevious-text=\"&lsaquo;\" next-text=\"&rsaquo;\"></ng-pagination>\n</div>\n",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map