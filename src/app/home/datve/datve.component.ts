import { Component, OnInit } from '@angular/core';
import { PhongveService } from 'src/app/services/phongve.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datve',
  templateUrl: './datve.component.html',
  styleUrls: ['./datve.component.scss']
})
export class DatveComponent implements OnInit {
  public id
  ghe: any = {}
  
  constructor(private data: PhongveService, private activeRouteee: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMaLichChieu()
    this.getDsGhe()
  }
  getMaLichChieu() {
    this.id = this.activeRouteee.snapshot.paramMap.get("id")
  }
  getDsGhe() {
    this.data.apiGetDsGheTheoMaLichChieu(this.id).subscribe((data) => {
       this.ghe = data
      console.log(this.ghe)
    })
  }


}
