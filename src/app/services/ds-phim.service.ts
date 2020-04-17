import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from "rxjs/operators"
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DsPhimService {

  constructor(private http: HttpClient) { }

  apiGetDsPhim(): Observable<any> {
    let url = "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10"
    return this.http.get(url).pipe(
      tap(() => { }),
      catchError(err => {
        return this.handleErr(err)
      })
    )
  }

  handleErr(err) {
    switch (err.status) {
      case 400:
        break;
      case 401:
        break;
      case 402:
        break;
      case 500:
        break;
      default:
        break;
    }
    return throwError(err)
  }


}
