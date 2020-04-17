import { Component, OnInit } from '@angular/core';
import { DsPhimService } from 'src/app/services/ds-phim.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-phimdangchieu',
  templateUrl: './phimdangchieu.component.html',
  styleUrls: ['./phimdangchieu.component.scss']
})
export class PhimdangchieuComponent implements OnInit {
  ArrDsPhim: [];
  constructor(private dsPhim: DsPhimService) { }
  //same componentDidMount ReactJs
  ngOnInit() {
    this.layDsPhim()
  }
  layDsPhim() {
    this.dsPhim.apiGetDsPhim().subscribe((data: any) => {
      this.ArrDsPhim = data
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    lazyLoad: true,
    dots: false,
    // margin: 10,
    center: true,
    navSpeed: 700,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true, 
  }


}
