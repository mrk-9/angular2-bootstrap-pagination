# angular2-bootstrap-pagination
angular2-bootstrap-pagination is angular2 directive.

The sources for this package are in (https://github.com/rajan-g/angular2-bootstrap-pagination.git) repo. Please file issues and pull requests against that repo.
### Demo Output
![pagination](https://cloud.githubusercontent.com/assets/13415700/16183593/36e60e30-36d1-11e6-8c48-20ae5ec53caf.png)
###Install from npm
```sh
        npm install angular2-bootstrap-pagination
```
### component file use like below
```javascript
        /* 
 * @author RAJAN G
 */
//module file 
import {PaginationDirective} from '../directives/pagination.directive';
//include pagination directive
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [AppComponent, PaginationDirective],
  bootstrap:    [ AppComponent ]
})

import {Component} from 'angular2/core';


@Component({
    selector: 'my-app',    
    template: `<ng-pagination [totalItems]="totalItems" [(ngModel)]="currentPage" [maxSize]="maxSize" [boundaryLinks]="true" (pageChanged)="pageChanged($event)"
previous-text="&lsaquo;" next-text="&rsaquo;" first-text="First" last-text="Last">`,
})
export class AppComponent {
  public currentPage:number = 1;
  public totalItems:number = 200; // total numbar of page not items
  public maxSize:number = 10; // max page size
    constructor() {
    }  
  public setPage(pageNo:number):void {
    this.currentPage = pageNo;    
  };

  public pageChanged(event:any):void {
//this method will trigger every page click 
    console.log('Number items per page: ' + event.itemsPerPage);
  };
}

```

### For Test demo
 - Download this module
 - Run following command
    ```
    npm install
    npm start
    ```       

