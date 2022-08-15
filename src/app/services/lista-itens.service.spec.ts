import { TestBed } from '@angular/core/testing';

import { ListaItensService } from './lista-itens.service';

describe('ListaItensService', () => {
  let service: ListaItensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaItensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
