import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicoArtigosService } from 'src/app/servicos/servico-artigos.service';
import { Artigo } from '../models/artigo.model';

@Component({
  selector: 'app-filtro-page-produtos',
  templateUrl: './filtro-page-produtos.component.html',
  styleUrls: ['./filtro-page-produtos.component.css']
})
export class FiltroPageProdutosComponent implements OnInit {

  tipo_de_produto!: any;
  listatiposProduto: string[] = [];
  listaCorProduto: string[] = [];
  
  produtoSelecionado : string = '';

  constructor(private rota: ActivatedRoute, private servArtigos : ServicoArtigosService) { }

  ngOnInit(): void {
    this.rota.paramMap
    .subscribe(res => {
      this.tipo_de_produto = res.get('tipo_de_produto')!;
    });

    this.getTiposProdutos();
    this.getProdutoCor();
  }

  getTiposProdutos() {
    this.servArtigos.getProducts()
      .subscribe((artigo: Artigo[]) => {
        this.listatiposProduto = artigo.map(p => p.tipo_de_produto);

        this.listatiposProduto = this.listatiposProduto.filter(
          (tipo_de_produto, tipo) => tipo === this.listatiposProduto.indexOf(tipo_de_produto));
      })
  }

  getProdutoCor() {
    this.servArtigos.getProducts()
      .subscribe((artigo: Artigo[]) => {
        this.listaCorProduto = artigo.map(a => a.cor);

        this.listaCorProduto = this.listaCorProduto.filter(
          (cor, c) => c === this.listaCorProduto.indexOf(cor)
        );
      }
    )
  }

  radioChange(event :any) {
    this.produtoSelecionado = event.target.value;
  }
}
