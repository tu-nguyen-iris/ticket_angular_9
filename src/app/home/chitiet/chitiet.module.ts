import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChitietRoutingModule } from './chitiet-routing.module';
import { ChitietComponent } from './chitiet.component';
import { MaterialUIModule } from 'src/app/shared/material-ui/material-ui.module';
import { TheateComponent } from './theate/theate.component';


@NgModule({
  declarations: [ChitietComponent, TheateComponent],
  imports: [
    CommonModule,
    ChitietRoutingModule,
    MaterialUIModule
  ]
})
export class ChitietModule { }
