import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/models/category';
import { ListItem } from 'src/app/models/ListItem';
import { CategoryService } from 'src/app/services/category-service.service';
import { ListaItensService } from 'src/app/services/lista-itens.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  categories: Array<Category> = [];
  lists: Array<ListItem> = [];
  newItem: ListItem = { id: 0, name: '', link: '', category: '' };

  constructor(private fb:FormBuilder,
    private listService: ListaItensService,
    private categoryService: CategoryService)
    {
      this.categories = this.categoryService.getAllCategories();
    }

  ngOnInit(): void {
    this.categories = this.categoryService.getAllCategories();
  }

  createList(): void {
    const newItemWithId: ListItem = { ...this.newItem, id: new Date().getTime() };
    this.listService.createList(newItemWithId);
    this.lists.push(newItemWithId);
    this.clearForm();
  }

  clearForm(): void {
    this.newItem = { id: 0, name: '', link: '', category: '' };
  }


}
