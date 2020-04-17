import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangchuRoutingModule } from './trangchu-routing.module';
import { TrangchuComponent } from './trangchu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PhimdangchieuComponent } from './phimdangchieu/phimdangchieu.component';
import { MaterialUIModule } from 'src/app/shared/material-ui/material-ui.module';


@NgModule({
  declarations: [ TrangchuComponent, CarouselComponent, PhimdangchieuComponent],
  imports: [
    CommonModule,
    TrangchuRoutingModule,
    MaterialUIModule,
   
  ]
})
export class TrangchuModule { }
