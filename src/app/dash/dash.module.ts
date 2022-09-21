import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { TableComponent } from './table/table.component';
import { DashComponent } from './dash.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableComponent,
    DashComponent,
    UserComponent,
    FormComponent
  ],
  exports:[
  ],
  imports: [
    CommonModule,
    DashRoutingModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class DashModule { }
