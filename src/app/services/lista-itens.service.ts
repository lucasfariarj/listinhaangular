import { Injectable, Input } from '@angular/core';
import { ListItem } from '../models/ListItem';

@Injectable({
  providedIn: 'root'
})
export class ListaItensService {

  private lists: Array<ListItem> = [];
  private itemDB: string = 'lists';

  constructor() {
    const data: any = localStorage.getItem(this.itemDB);
    this.lists = JSON.parse(data) || [];
  }

  createList(newItem: ListItem): void {
    this.lists.push(newItem);
    this.saveListsToLocalStorage();
  }

  updateList(updatedItem: ListItem): void {
    const index = this.lists.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      this.lists[index] = updatedItem;
      this.saveListsToLocalStorage();
    }
  }

  deleteList(item: ListItem): void {
    this.lists = this.lists.filter(listItem => listItem.id !== item.id);
    this.saveListsToLocalStorage();
  }

  getAllLists(): Array<ListItem> {
    return this.lists;
  }

  private saveListsToLocalStorage(): void {
    localStorage.setItem(this.itemDB, JSON.stringify(this.lists));
  }
}



