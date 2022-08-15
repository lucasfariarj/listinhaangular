import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Meus Favoritos Aliexpress';

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(ModalComponent);
  }
}
