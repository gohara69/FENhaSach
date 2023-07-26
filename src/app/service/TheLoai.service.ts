import { Sach } from '../model/Sach.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TheLoai } from '../model/TheLoai.model';

@Injectable({
    providedIn: 'root',
  })

export class TheLoaiService{
    constructor (
        private http : HttpClient,
    ){}

    getAllTheLoais(): Observable<Array<TheLoai>> {
        return this.http.get<Array<TheLoai>>('http://localhost:8080/api/theloais');
    }
}