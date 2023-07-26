import { Component } from '@angular/core';
import { TheLoai } from '../model/TheLoai.model';
import { TheLoaiService } from '../service/TheLoai.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  theLoais: Array<TheLoai> = [];

  constructor(
    private theLoaiService : TheLoaiService,
  ){
    this.theLoaiService.getAllTheLoais().subscribe(tloai =>{
      this.theLoais = tloai;
    })
  }

  async ngOnInit(){}
}
