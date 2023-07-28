import { Component } from '@angular/core';
import { TheLoai } from '../model/TheLoai.model';
import { TheLoaiService } from '../service/TheLoai.service';
import { SachService } from '../service/Sach.service';
import { CartService } from '../service/Cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  theLoais: Array<TheLoai> = [];
  searchText = "";
  genreId = 0;
  itemQuantity = CartService.getCartItemQuantity();

  constructor(
    private theLoaiService : TheLoaiService
  ){
    this.theLoaiService.getAllTheLoais().subscribe(tloai =>{
      this.theLoais = tloai;
    })
  }

  async ngOnInit(){}

  initializeSachs(){
    this.searchText = "";
  }

  searchTenSach(event: any){
    this.searchText = event.target.value;
  }

  changeGenre(id: number){
    this.genreId = id;
  }

  getItemQuantity(data: any){
    this.itemQuantity = data;
  }
}
