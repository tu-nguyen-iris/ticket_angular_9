import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatTableModule } from '@angular/material/table';

import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    MatTabsModule, MatButtonModule, CarouselModule, MatIconModule, MatTableModule
  ],
  exports: [MatTabsModule, MatButtonModule, CarouselModule, MatIconModule, MatTableModule]
})
export class MaterialUIModule { }
