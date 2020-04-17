import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatveRoutingModule } from './datve-routing.module';
import { DatveComponent } from './datve.component';


@NgModule({
  declarations: [DatveComponent],
  imports: [
    CommonModule,
    DatveRoutingModule
  ]
})
export class DatveModule { }
