import { Component, Input } from '@angular/core';
import { DbInfo } from './model/dbinfo';

@Component({
  selector: 'db-info',
  template: `
    <div >
      <h2>Input your database info,please!</h2>
      <div class="form-group">
        <input type="radio" class="form-control" value=1 [(ngModel)]="dbinfo.type" name="type" />MySql
        <input type="radio" class="form-control" value=2 [(ngModel)]="dbinfo.type" name="type" />Oracle
      </div>
      <div class="form-group">
        <label>用户名: </label>
        <input class="form-control" [(ngModel)]="dbinfo.loginName" placeholder="loginName" />
      </div>
      <div class="form-group">
        <label>口令: </label>
        <input class="form-control" [(ngModel)]="dbinfo.loginPass" placeholder="loginPass" />
      </div>
      <div class="form-group">
        <label>数据库: </label>
        <input class="form-control" [(ngModel)]="dbinfo.address" placeholder="address" />
      </div>
      <button class="btn btn-primary" (click)="TestConnection()">Test Connection</button>
      <button class="btn btn-primary" [disabled]="!canSub" (click)="Submit()">Submit</button>
    </div>

    {{dbinfo | json}} {{title}}
  `,  
  styleUrls: ['./dbinfo.component.css']
})
export class DbInfoComponent {
  @Input('title') title:string;

  dbinfo = new DbInfo();
  canSub = false;

  TestConnection():void {
     this.dbinfo.loginName = "aaaa";
     this.canSub = true;
  }

  Submit():void {
      this.title = "Submit successed!"
  }
}
