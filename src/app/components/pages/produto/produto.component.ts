import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artigo } from '../../models/artigo.model';
import { ServicoArtigosService } from '../../../servicos/servico-artigos.service'

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  id! : number;
  artigo! : Artigo;

  constructor(private servicoArtigos : ServicoArtigosService, private rotaActiva: ActivatedRoute) {}

  ngOnInit(): void {
    this.rotaActiva.paramMap.subscribe(p => { 
      this.id = Number(p.get('id'))
    })

    if(!isNaN(this.id)){
      this.servicoArtigos.getProductID(this.id)
      .subscribe((a : Artigo)=>{
      this.artigo = a; })
    }
  }
}
