import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { TableComponent } from './table/table.component';
import { DashComponent } from './dash.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    TableComponent,
    DashComponent,
    UserComponent
  ],
  exports:[
  ],
  imports: [
    CommonModule,
    DashRoutingModule,
    IonicModule,
    ComponentsModule
  ]
})
export class DashModule { }
