System.register(['@angular/platform-browser-dynamic', './pagination-module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, pagination_module_1;
    var platform;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (pagination_module_1_1) {
                pagination_module_1 = pagination_module_1_1;
            }],
        execute: function() {
            platform = platform_browser_dynamic_1.platformBrowserDynamic();
            platform.bootstrapModule(pagination_module_1.PaginationModule);
        }
    }
});
//# sourceMappingURL=main.js.map