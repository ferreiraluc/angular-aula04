import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemLivrosComponent } from './listagem-livros.component';

describe('ListagemLivrosComponent', () => {
  let component: ListagemLivrosComponent;
  let fixture: ComponentFixture<ListagemLivrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemLivrosComponent]
    });
    fixture = TestBed.createComponent(ListagemLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
