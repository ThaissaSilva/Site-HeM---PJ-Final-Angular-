
import { Component, OnInit } from '@angular/core';
import { ServicoArtigosService } from 'src/app/servicos/servico-artigos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public artigoLista : any ;

  initialRecord : number = 0;
  numberRecords : number = 6;
  totalArtigos! : number;

  constructor(private servicoArtigos : ServicoArtigosService) { }

  ngOnInit(): void {
    this.servicoArtigos.getProduct()
    .subscribe(res => {
      this.artigoLista = res;
    })
    this.readPageAtigos(this.initialRecord,this.numberRecords);
  }

  readPageAtigos(iniRec : number, numRec : number) {
    this.servicoArtigos.getPostsPage(iniRec,numRec).subscribe({
      next: (res : any) => {
        this.artigoLista=res.body;
        this.totalArtigos = Number(res.headers.get("X-Total-Count"));
        console.log(this.artigoLista);
      }
    });
  }

  next6(){
    this.initialRecord+=6;
    this.readPageAtigos(this.initialRecord,this.numberRecords);
  }

  voltar6(){
    this.initialRecord-=6;
    this.readPageAtigos(this.initialRecord,this.numberRecords);
  }
}
