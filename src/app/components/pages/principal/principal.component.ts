import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { ServicoArtigosService } from 'src/app/servicos/servico-artigos.service';
import { Artigo } from '../../models/artigo.model';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: false } }
  ]
})

export class PrincipalComponent implements OnInit {

  listaArtigosDestaque: Artigo[] = [];

  constructor(private servArtigo: ServicoArtigosService) { }

  ngOnInit(): void {
    this.getArtigosDestaque();
  }

  getArtigosDestaque() {
    this.servArtigo.getProduct()
     .subscribe((produtos: Artigo[]) => {this.listaArtigosDestaque = 
       produtos.filter(produtos=>produtos.destaque===true)
       console.log(this.listaArtigosDestaque);
      }
    )
  }
}

