import { Component, ViewChild } from '@angular/core';
import { TheLoai } from '../model/TheLoai.model';
import { TheLoaiService } from '../service/TheLoai.service';
import { CartService } from '../service/Cart.service';
import { Router } from '@angular/router';
import { shareService } from '../service/share';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  theLoais: Array<TheLoai> = [];
  searchText = "";
  genreId = 0;
  isLogin = false;
  itemQuantity = CartService.getCartItemQuantity();

  constructor(
    private theLoaiService : TheLoaiService,
    private router : Router,
    private shareService : shareService,
  ){
    this.theLoaiService.getAllTheLoais().subscribe(tloai =>{
      this.theLoais = tloai;
    });
    this.shareService.getData().subscribe(x =>{
      if(typeof x === 'number'){
        this.itemQuantity = x
      } else if(typeof x === 'boolean'){
        this.isLogin = true;
      }
    });
  }

  ngOnInit(){
    this.shareService.getData().subscribe(x =>{
        if(typeof x === 'number'){
          this.itemQuantity = x
        } else if(typeof x === 'boolean'){
          this.isLogin = true;
        }
    });
  }

  initializeSachs(){
    this.searchText = "";
  }

  searchTenSach(event: any){
    this.searchText = event.target.value;
  }

  changeGenre(id: number){
    this.genreId = id;
    this.router.navigateByUrl('client-genre/${this.genreId}');
    console.log(this.genreId);
  }

  getItemQuantity(data: any){
    this.itemQuantity = data;
  }

  onLoginOut(){
    localStorage.removeItem('userLogin');
    this.shareService.sendStatusData(false);
    this.isLogin = false;
  }
}
