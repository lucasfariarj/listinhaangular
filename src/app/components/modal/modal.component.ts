import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ListItens } from 'src/app/models/list-itens';
import { ListaItensService } from 'src/app/services/lista-itens.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public cadastroForm: FormGroup = this.fb.group({
    name: [''],
    link: [''],
    categories: [''],
  })

  constructor(private fb:FormBuilder, private listaService: ListaItensService) {}

  ngOnInit(): void {
  }
    

public submitForm(){
  this.listaService.setList(this.cadastroForm.value)
  console.log(this.cadastroForm.value)
}

}
