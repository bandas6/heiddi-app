import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash.component';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path:'dash',
    component:DashComponent,
    children:[
      {
        path:'user',
        component:UserComponent
      },
      {
        path:'table',
        component:TableComponent
      },
      {
        path:'form',
        component:FormComponent
      },
      {
        path:'**',
        redirectTo:'user'
      }
    ]
  },
  {
    path:'**',
    redirectTo:'dash'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
