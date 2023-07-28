import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { SachForCard } from 'src/app/model/sachmodel/SachForCard.model';
import { CartService } from 'src/app/service/Cart.service';
import { SachService } from 'src/app/service/Sach.service';


@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss']
})
export class ClientHomeComponent implements OnChanges{
  books: Array<SachForCard> = [];
  totalPage = 0;
  currentPage = 0;
  @Input() searchText = "";
  @Input() genreId = 0;
  @Output() getItemQuantity: EventEmitter<any> = new EventEmitter();
  itemQuantity = 0;

  constructor(
    private sachService : SachService,
  ){
    if(this.searchText == ""){
      this.sachService.getAllBookForCard().subscribe(page =>{
        this.books = page.content;
        this.totalPage = page.totalPages;
        this.currentPage = page.pageable.pageNumber;
      });
    } else {
      this.sachService.getAllBookForCardSearchTenSach(this.searchText, 1).subscribe(page =>{
        this.books = page.content;
        this.totalPage = page.totalPages;
        this.currentPage = page.pageable.pageNumber;
      });
    }
    this.getItemQuantity.emit(this.itemQuantity);
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

  goToPage(name: string,i: number){
    if(this.searchText == ""){
      this.sachService.getAllBookForCard().subscribe(page =>{
        this.books = page.content;
        this.totalPage = page.totalPages;
        this.currentPage = page.pageable.pageNumber;
      });
    } else {
      this.sachService.getAllBookForCardSearchTenSach(this.searchText, 1).subscribe(page =>{
        this.books = page.content;
        this.totalPage = page.totalPages;
        this.currentPage = page.pageable.pageNumber;
      });
    }
  }

  showBooksByGenre(genreId: number,i: number){
    this.sachService.getAllBookForCardByTheLoaiId(genreId, i).subscribe(page =>{
      this.books = page.content;
      this.totalPage = page.totalPages;
      this.currentPage = page.pageable.pageNumber;
    });
  }

  ngOnChanges(change: SimpleChanges){
    for(let p in change){
      if(p == 'searchText'){
        this.goToPage(this.searchText, 1);
      } else if(p == 'genreId'){
        this.showBooksByGenre(this.genreId, 1);
      }
    }
  }

  addToCart(book: SachForCard){
    if(!localStorage.getItem('user')){
      CartService.addLocalCart(book);
    }
    this.updateQuantity();
    this.getItemQuantity.emit(this.itemQuantity);
  }

  updateQuantity(){
    this.itemQuantity = CartService.getCartItemQuantity();
  }
}
