/* 
 * @author RAJAN G
 */

import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `test
<div *ngIf="totalItems >0">
<ng-pagination [totalItems]="totalItems" [(ngModel)]="currentPage" [maxSize]="maxSize" (pageChanged)="pageChanged($event)"
previous-text="&lsaquo;" next-text="&rsaquo;" first-text="First" last-text="Last"></ng-pagination>
</div>
<br>
<br>
<br>\
<div *ngIf="totalItems2 >0">
<ng-pagination [totalItems]="totalItems2" [(ngModel)]="currentPage2" [maxSize]="maxSize2" (pageChanged)="pageChanged2($event)"
previous-text="&lsaquo;" next-text="&rsaquo;"></ng-pagination>
</div>
`,
})
export class AppComponent {
  public currentPage:number = 1;
  public totalItems:number = 12;
  public maxSize:number = 3;
   public currentPage2:number = 1;
  public totalItems2:number = 200;
  public maxSize2:number = 5;
    constructor() {
    }  
  public setPage(pageNo:number):void {
    this.currentPage = pageNo;    
  };

  public pageChanged(event:any):void {
    console.log('Number items per page: ' + event.itemsPerPage);
  };
 
   
  public setPage2(pageNo:number):void {
    this.currentPage = pageNo;    
  };

  public pageChanged2(event:any):void {
    console.log('Number items per page: ' + event.itemsPerPage);
  };
}
