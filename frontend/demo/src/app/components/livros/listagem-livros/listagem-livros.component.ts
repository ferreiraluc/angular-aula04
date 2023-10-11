import { Component, inject } from '@angular/core';
import { Livro } from '../../../models/livro';
import { LivroService } from '../../../services/livro.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listagem-livros',
  templateUrl: './listagem-livros.component.html',
  styleUrls: ['./listagem-livros.component.scss']
})
export class ListagemLivrosComponent {
  
  lista: Livro [] = [];

  livroSelecionadoParaEdicao: Livro = new Livro();
  indiceLivroSelecionadoParaEdicao!: number;


  modalService = inject(NgbModal);
  livroService = inject(LivroService);

  constructor() {

    this.listAll();
    //this.exemploErro();

  }


  listAll() {

    this.livroService.listAll().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }

  exemploErro() {
    this.livroService.exemploErro().subscribe({
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
    this.livroSelecionadoParaEdicao = new Livro();
    this.modalService.open(modal, { size: 'lg' });
}

editar(modal: any, livro: Livro, indice: number) {
  this.livroSelecionadoParaEdicao = Object.assign({}, livro);
  this.indiceLivroSelecionadoParaEdicao = indice;
  this.modalService.open(modal, { size: 'lg' });
}

  addOuEditarLivro(livro: Livro) {
    this.listAll();
    this.modalService.dismissAll();
  }

}