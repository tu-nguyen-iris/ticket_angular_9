import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhongveService {

  constructor(private http: HttpClient) { }

  apiGetDsGheTheoMaLichChieu(id: number): Observable<any> {
    let url = `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
    return this.http.get(url).pipe(
      tap(() => { }),
      catchError(err => this.handleErr(err))
    )
  }
  handleErr(err) {
    switch (err.status) {
      case 400:

        break;
      case 401:

        break;
      case 500:

        break;
      default:
        break;
    }
    return throwError(err)
  }
}
