import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServUserLogadoService } from 'src/app/servicos/serv-user-logado.service';
import { ServUsersService } from 'src/app/servicos/serv-users.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuariolist !: Usuario;
  formUsuario !: FormGroup;

  constructor(private formBuilder: FormBuilder, private servUsers: ServUsersService, private servUserLogado : ServUserLogadoService, private router: Router) { 
    this.usuariolist = {
      nome: '',
      email: '',
      password: '',
      morada: '',
      codigoPostal: '',
      pais: ''
    } as Usuario;
  }

  ngOnInit(): void {
    this.formUsuario = this.formBuilder.group({
      nome: [''],
      email: [''],
      password: [''],
      morada: [''],
      codigoPostal: [''],
      pais: ['']
    });

    this.usuariolist = this.servUserLogado.getUser();
    this.populateForm(this.usuariolist);
  }

  populateForm(usuariolist : Usuario){
    this.formUsuario.controls['nome'].setValue(usuariolist.nome);
    this.formUsuario.controls['email'].setValue(usuariolist.email);
    this.formUsuario.controls['password'].setValue(usuariolist.password);
    this.formUsuario.controls['morada'].setValue(usuariolist.morada);
    this.formUsuario.controls['codigoPostal'].setValue(usuariolist.codigoPostal);
    this.formUsuario.controls['pais'].setValue(usuariolist.pais);
  }

  onSubmit(form : any){ 
    if(this.usuariolist.id){
      this.servUsers.putUsuario(form.value, this.usuariolist.id)
      .subscribe((usuario: Usuario) =>{
        alert("Alterado com sucesso!");
        this.formUsuario.reset();
        this.router.navigate([''])}
      );
    }
  }
}
