import { Component } from '@angular/core';
import { Sach } from 'src/app/model/Sach.model';
import { SachService } from 'src/app/service/Sach.service';


@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss']
})
export class ClientHomeComponent {
  books: Array<Sach> = [];

  constructor(
    private sachService : SachService,
  ){
    this.sachService.getAllPosts().subscribe(sach =>{
      this.books = sach;
    })
  }

  async ngOnInit(){}
}
