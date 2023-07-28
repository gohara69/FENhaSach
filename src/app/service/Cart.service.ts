import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SachForCard } from '../model/sachmodel/SachForCard.model';
import { SachOnCart } from '../model/sachmodel/SachOnCart.model';
import { SachConverter } from '../converter/SachConverter.converter';
import { JsonPipe } from '@angular/common';



@Injectable({
    providedIn: 'root',
  })

export class CartService{
    constructor (
        private http : HttpClient,
    ){}

    static addLocalCart(book: SachForCard){
        let cartData: any = [];
        let localCart = localStorage.getItem('cart');
        if(!localCart){
            cartData.push(SachConverter.toSachOnCart(book));
            localStorage.setItem('cart', JSON.stringify(cartData));
        } else {
            cartData = JSON.parse(localCart);
            for(let i = 0 ; i < cartData.length ; i++){
                if(cartData[i].id == book.id){
                    cartData[i].quantity++;
                    localStorage.removeItem('cart');
                    localStorage.setItem('cart', JSON.stringify(cartData));
                    console.log(cartData);
                    return;
                }
            }
            cartData.push(SachConverter.toSachOnCart(book));
            localStorage.setItem('cart', JSON.stringify(cartData));
            console.log(cartData);
        }
    }

    static getCartItemQuantity(): number{
        if(!localStorage.getItem('user')){
            let localCart = localStorage.getItem('cart');
            if(!localCart)
                return 0;
            let data: any = [];
            data = JSON.parse(localCart);
            let count = 0;
            for(let i = 0 ; i < data.length ; i++){
                count+= data[i].quantity;
            }
            return count;
        }
        return 1;
    }
}