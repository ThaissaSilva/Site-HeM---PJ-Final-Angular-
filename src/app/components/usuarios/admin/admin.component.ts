import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EdtitProductService } from 'src/app/servicos/edtit-product.service';
import { ServicoArtigosService } from 'src/app/servicos/servico-artigos.service';
import { Artigo } from '../../models/artigo.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  formArtigos !: FormGroup;
  artigoData !: any;
  tipos !: any;

  searchKey : string = "";
  searchTerm : string = '';

  // productlist !: any;

  constructor(private formBuilder: FormBuilder, private servArtigo : ServicoArtigosService, private router: Router, private editService : EdtitProductService) { 
    // this.productlist = {
    //   marca: '',
    //   nome: '',
    //   tipo_de_produto: '',
    //   cor: '',
    //   preco: '',
    //   descricao: '',
    //   foto_principal: '',
    //   foto_secundaria: ''
    // } as any;
  }

  ngOnInit(): void {
    this.formArtigos = this.formBuilder.group({
      marca: ['', Validators.required],
      nome: ['', Validators.required],
      tipo_de_produto: ['', Validators.required],
      cor: ['', Validators.required],
      preco: ['', Validators.required],
      descricao: ['', Validators.required]
    });

    // this.productlist = this.editService.getArtigo();
    // this.populateForm(this.productlist);

    this.getAllArtigos();
    this.getAllTypePoducts();

    this.servArtigo.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }

  insereArtigo(){
    let artigoRegistrado: Artigo = this.formArtigos.value;
    this.servArtigo.postProduct(artigoRegistrado).subscribe(
      () =>{
      alert("Artigo registrado com sucesso!");
      this.formArtigos.reset();
      this.getAllArtigos();
    })
  }

  getAllArtigos(){
    this.servArtigo.getProducts()
    .subscribe(res => {
      this.artigoData = res;
    })  
  }

  getAllTypePoducts(){
    this.servArtigo.getTypePoducts()
    .subscribe(res => {
      this.tipos = res;
    })  
  }

  deleteProduct(artigo : any){
    this.servArtigo.deleteProduct(artigo.id).subscribe((_res: any) =>{
      alert("Produto deletado com sucesso!");
      this.getAllArtigos();
    })
  }

  // populateForm(productlist : any){
  //   this.formArtigos.controls['nome'].setValue(productlist.nome);
  //   this.formArtigos.controls['marca'].setValue(productlist.marca);
  //   this.formArtigos.controls['tipo_de_produto'].setValue(productlist.tipo_de_produto);
  //   this.formArtigos.controls['cor'].setValue(productlist.cor);
  //   this.formArtigos.controls['preco'].setValue(productlist.preco);
  //   this.formArtigos.controls['descricao'].setValue(productlist.descricao);
  // }

  // onSubmit(form : any){ 
  //   if(this.productlist.id){
  //     this.servArtigo.putArtigo(form.value, this.productlist.id)
  //     .subscribe((product: any) =>{
  //       alert("Alterado com sucesso!");
  //       this.formArtigos.reset();
  //       this.getAllArtigos();
  //     });
  //   }
  // }

  search(event : any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.servArtigo.search.next(this.searchTerm);
  }
}
