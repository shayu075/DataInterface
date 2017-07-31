import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DbInfoComponent } from './dbinfo.component';
import { TablesComponent }      from './tables.component';
import { TableDetailComponent }  from './table-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DbInfoComponent,
    TablesComponent,
    TableDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
