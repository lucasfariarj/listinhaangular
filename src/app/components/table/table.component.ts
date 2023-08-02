import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/models/category';
import { ListItem } from 'src/app/models/ListItem';
import { CategoryService } from 'src/app/services/category-service.service';
import { ListaItensService } from 'src/app/services/lista-itens.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  public lists: Array<ListItem> = [];
  public newItem: ListItem = { id: 0, name: '', link: '', category: '', value: '',editMode: false, bought: false };
  public categories: Array<Category> = [];
  public newCategory: Category = { id: 0, name: '' };
  public searchText: string = '';
  public searchCategory: string = '';

  constructor(private listService: ListaItensService,
    private categoryService: CategoryService,
     )
  {
    this.lists = this.listService.getAllLists()
    this.categories = this.categoryService.getAllCategories();
  }

  public editItem(item: ListItem): void {
    item.editMode = true;
  }

  public saveItem(item: ListItem): void {
    item.editMode = false;
    this.listService.updateList(item);
  }

  public cancelEdit(item: ListItem): void {
    item.editMode = false;
  }

  public deleteList(item: ListItem): void {
    this.listService.deleteList(item);
    this.lists = this.lists.filter(listItem => listItem.id !== item.id);
  }

  public createList(): void {
    const newItemWithId: ListItem = { ...this.newItem, id: new Date().getTime() };
    this.listService.createList(newItemWithId);
    this.lists.push(newItemWithId);
    this.clearForm();
  }

  public updateBuyValue(newBuyValue: boolean, item: ListItem) {
      item.bought = newBuyValue
      console.log(item)
      this.listService.updateList(item);
  }


  public createCategory(): void {
    const newCategoryWithId: Category = { ...this.newCategory, id: new Date().getTime() };
    this.categoryService.saveCategory(newCategoryWithId);
    this.categories.push(newCategoryWithId);
    this.newItem.category = newCategoryWithId.name;
    this.newCategory = { id: 0, name: '' };
  }

  public editCategory(category: Category): void {
    category.editMode = true;
  }

  public saveCategory(category: Category): void {
    category.editMode = false;
    this.categoryService.updateCategory(category);
  }

  public cancelEditCategory(category: Category): void {
    category.editMode = false;
  }

  public removeCategory(category: Category): void {
    this.categoryService.removeCategory(category);
    this.categories = this.categories.filter(cat => cat.id !== category.id);
  }

  public clearForm(): void {
    this.newItem = { id: 0, name: '', link: '', category: '', value: '', bought: false};
  }

}
