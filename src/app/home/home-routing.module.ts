import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ChitietModule } from './chitiet/chitiet.module';
import { PhimdangchieuModule } from './trangchu/phimdangchieu/phimdangchieu.module';
import { DatveModule } from './datve/datve.module';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        loadChildren: "./trangchu/trangchu.module#TrangchuModule"
      },

      {
        path: "",
        loadChildren: () => PhimdangchieuModule

      },
      {
        path: "dang-nhap",
        component: LoginComponent
      },

      {
        path: "chi-tiet-phim/:id",
        loadChildren: () => ChitietModule,

      },
      {
        path: "dat-ve/:id",
        loadChildren: () => DatveModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
