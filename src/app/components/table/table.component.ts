import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListItens } from 'src/app/models/list-itens';
import { ListaItensService } from 'src/app/services/lista-itens.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public listItens: Array<ListItens> | any

  constructor(private listItensService: ListaItensService, private modalService: NgbModal) { }

  ngOnInit(): void {
      this.listItens = this.listItensService.getList();
  }

  public deleteItem(id: number){
    this.listItens.splice(id, 1);
    this.listItensService.deleteItemList(this.listItens)
  }


}
