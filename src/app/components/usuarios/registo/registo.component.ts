import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServUsersService } from 'src/app/servicos/serv-users.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent implements OnInit {

  id! : number;
  formUsuario !: FormGroup;
  usuarioData !: any;

  constructor(private formBuilder: FormBuilder, private servUsers: ServUsersService, private router: Router) { }

  ngOnInit(): void {
    this.formUsuario = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      morada: ['', Validators.required],
      codigoPostal: ['', Validators.pattern('\d{5}-\d{3}')],
      pais: ['', Validators.required]
    });
  }

  registrar(){
    let usuario: Usuario = this.formUsuario.value;
    this.servUsers.postUsuario(usuario).subscribe(
      () =>{
      alert("Registrado com sucesso!");
      this.formUsuario.reset();
      this.router.navigate(['']);
    })
  }

  getAllUsers(){
    this.servUsers.getUsuario(this.id)
    .subscribe(res => {
      this.usuarioData =res;
    })  
  }
}
