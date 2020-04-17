import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhimdangchieuComponent } from './phimdangchieu.component';


const routes: Routes = [
  {
    path: "",
    component: PhimdangchieuComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhimdangchieuRoutingModule { }
