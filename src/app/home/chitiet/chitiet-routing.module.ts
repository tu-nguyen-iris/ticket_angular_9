import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChitietComponent } from './chitiet.component';
import { DatveComponent } from '../datve/datve.component';
import { DatveModule } from '../datve/datve.module';


const routes: Routes = [
  {
    path: "",
    component: ChitietComponent,

  },
  {
    path: "dat-ve/:id",
    loadChildren: () => DatveModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChitietRoutingModule { }
