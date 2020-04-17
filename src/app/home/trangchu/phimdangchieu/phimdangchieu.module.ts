import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhimdangchieuRoutingModule } from './phimdangchieu-routing.module';
import { MaterialUIModule } from 'src/app/shared/material-ui/material-ui.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PhimdangchieuRoutingModule, MaterialUIModule
  ]
})
export class PhimdangchieuModule { }
