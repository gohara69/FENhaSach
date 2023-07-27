import { Component } from '@angular/core';
import { PageSachForCard } from 'src/app/model/page/PageSachForCard.model';
import { Sach } from 'src/app/model/sachmodel/Sach.model';
import { SachForCard } from 'src/app/model/sachmodel/SachForCard.model';
import { SachService } from 'src/app/service/Sach.service';


@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss']
})
export class ClientHomeComponent {
  books: Array<SachForCard> = [];
  totalPage = 0;

  constructor(
    private sachService : SachService,
  ){
    this.sachService.getAllBookForCard().subscribe(page =>{
      this.books = page.content;
      this.totalPage = page.totalPages;
    })
  }

  async ngOnInit(){}

  fakeArray(length: number): Array<number> {
    if (length >= 0) {
      var arr = new Array();
      for(let i = 0 ; i < length ; i++){
        arr.push(i);
      }
      return arr;
    }
    return new Array(0);
  }
}
