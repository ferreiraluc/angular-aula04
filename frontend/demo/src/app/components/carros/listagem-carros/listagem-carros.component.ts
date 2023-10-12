import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Carro } from 'src/app/models/carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-listagem-carros',
  templateUrl: './listagem-carros.component.html',
  styleUrls: ['./listagem-carros.component.scss']
})

export class ListagemCarrosComponent {

  lista: Carro[] = [];

  carroSelecionadoParaEdicao: Carro = new Carro();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  carroService = inject(CarroService);

  constructor() {

    this.listAll();
    
  }

  listAll() {
      
      this.carroService.listAll().subscribe({
        next: lista => { // QUANDO DÁ CERTO
          this.lista = lista;
        },
        error: erro => { // QUANDO DÁ ERRO
          alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
          console.error(erro);
        }
      });
  
  }

    adicionar(modal: any) {
      this.carroSelecionadoParaEdicao = new Carro();

      this.modalService.open(modal, { size: 'lg' });

    }

    editar(modal: any, carro: Carro, indice: number) {
      this.carroSelecionadoParaEdicao = Object.assign({}, carro);
      this.indiceSelecionadoParaEdicao = indice;

      this.modalService.open(modal, { size: 'sm' });
    }
    
    addOuEditarCarro(carro: Carro) {
      this.listAll();

      this.modalService.dismissAll();
    }

    excluir(carro: Carro) {
      if (confirm('Deseja realmente excluir o carro ' + carro.nome + '?')) {
        this.carroService.delete(carro.id).subscribe({
          next: () => {
            this.listAll();
          },
          error: erro => {
            alert('Erro ao excluir livro! Observe o erro no console!');
            console.error(erro);
          }
        });
      } 
    } 
    
  }

