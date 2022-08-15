import { Injectable, Input } from '@angular/core';
import { ListItens } from '../models/list-itens';

@Injectable({
  providedIn: 'root'
})
export class ListaItensService {

  private list: Array<ListItens> = [];
  private itemDB: string = 'list';

  constructor() {
    if(localStorage.getItem(this.itemDB) == null ){
      localStorage.setItem(this.itemDB,JSON.stringify(this.list))
    }
   }


  public setList(list: any): void{
    this.list.push(list)
    localStorage.setItem(this.itemDB,JSON.stringify(this.list))
  }

  public getList(): Array<ListItens>{
      const data: any = localStorage.getItem(this.itemDB);
      this.list = JSON.parse(data);
      return this.list
    }

  public deleteItemList(list: any): void{
    this.list = list
    localStorage.setItem(this.itemDB,JSON.stringify(this.list))
  }
    
  

}
