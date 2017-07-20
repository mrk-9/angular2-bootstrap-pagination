import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PaginationModule } from './pagination-module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(PaginationModule);
