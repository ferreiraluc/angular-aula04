import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemCarrosComponent } from './listagem-carros.component';

describe('ListagemCarrosComponent', () => {
  let component: ListagemCarrosComponent;
  let fixture: ComponentFixture<ListagemCarrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemCarrosComponent]
    });
    fixture = TestBed.createComponent(ListagemCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
