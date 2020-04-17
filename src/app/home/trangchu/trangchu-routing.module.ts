import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { PhimdangchieuComponent } from './phimdangchieu/phimdangchieu.component';
import { TrangchuComponent } from './trangchu.component';


const routes: Routes = [
  {
    path: "", component: TrangchuComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrangchuRoutingModule { }
