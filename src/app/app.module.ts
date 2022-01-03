import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocuementTreeTableComponent } from './docuement-tree-table/docuement-tree-table.component';
import { NodeService } from './nodeservice';
//import {TreeNode} from 'primeng/api';
import {TreeTableModule} from 'primeng/treetable';
import {RouterModule} from '@angular/router';

import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {ContextMenuModule} from 'primeng/contextmenu';
@NgModule({
  declarations: [
    AppComponent,
    DocuementTreeTableComponent
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
    TreeTableModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    HttpClientModule,
    MultiSelectModule,
    InputTextModule,
    ContextMenuModule,
    RouterModule.forRoot([
      {path:'',component: AppComponent}

		])
  ],
  
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
