import { Component, OnInit, ViewChild } from '@angular/core';
import { GetThongTinFilmService } from 'src/app/services/get-thong-tin-film.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.scss']
})

export class ChitietComponent implements OnInit {
  movie: any = { lichChieu: [], maPhim: "", tenPhim: "", biDanh: "", trailer: "", hinhAnh: "", moTa: "", maNhom: "", danhGia: "", ngayKhoiChieu: "" }
  private id
  constructor(private datas: GetThongTinFilmService, private activeRouter: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.getParams()
    this.layThongTinPhim()
  }
  getParams() {
    this.id = this.activeRouter.snapshot.paramMap.get("id")
  }
  layThongTinPhim() {
    this.datas.apiGetThongTinPhim(this.id).subscribe((data) => {
      this.movie = data
    })
  }
}
