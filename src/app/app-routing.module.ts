import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DbInfoComponent }      from './dbinfo.component';
import { TablesComponent }      from './tables.component';
import { TableDetailComponent }  from './table-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/dbinfo', pathMatch: 'full' },
  { path: 'dbinfo',  component: DbInfoComponent },
  { path: 'detail/:name', component: TableDetailComponent },
  { path: 'tables',     component: TablesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
