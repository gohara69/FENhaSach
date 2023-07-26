import { Sach } from '../model/Sach.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })

export class SachService{
    constructor (
        private http : HttpClient,
    ){}

    getAllPosts(): Observable<Array<Sach>> {
        return this.http.get<Array<Sach>>('http://localhost:8080/api/sachs');
    }
}