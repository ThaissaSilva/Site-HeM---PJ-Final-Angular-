import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ServUserLogadoService } from 'src/app/servicos/serv-user-logado.service';
import { ServUsersService } from 'src/app/servicos/serv-users.service';
import { Usuario } from '../models/usuario';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: true, autoClose: true },
    },
  ],
})

export class HeaderComponent implements OnInit {

  login: boolean = false;
  formLogin!: FormGroup;
  usuario?: Usuario;
  usuarioInexistente = false;

  constructor(private formBuilder: FormBuilder, private servUsers: ServUsersService, private router: Router, private servUserLogado : ServUserLogadoService ) {}

  
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern('[A-Za-zÀ-ÿ]{1,}[@][A-Za-zÀ-ÿ]{1,}[.][A-Za-zÀ-ÿ]{2,}')],
      ],
      password: ['', Validators.required],
    });
  }

  fazerLogin() {
    this.login = true;
  }

  close() {
    this.login = false;
  }

  logout() {
    delete this.usuario;
  }

  logar() {
    let usuarioRegistrado: Usuario = this.formLogin.value; 
      this.servUsers.getUsuarios().subscribe((usuarios: Usuario[]) => {
      this.usuario = usuarios?.find(
        (usuario) =>
          usuario.email === usuarioRegistrado.email &&
          usuario.password === usuarioRegistrado.password
      );      
      if (this.usuario){
        this.servUserLogado.setUser(this.usuario);
        this.usuarioInexistente = false;
        this.formLogin.reset();
        this.close();
        this.router.navigate(['']);
      } else {
        this.usuarioInexistente = true;
      }
    });
  }

  get email() {
    return this.formLogin.get('email')!;
  }

  get password() {
    return this.formLogin.get('password')!;
  }
}



