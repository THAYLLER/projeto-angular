import { Clientes } from './../shared/clientes.model';
import { Component, OnInit } from '@angular/core';
import { clientesService } from '../clientes.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css'],
  providers: [clientesService]
})
export class ClienteCadastroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private clientesService: clientesService) { }

  public addUser: FormGroup;
  public cliente: Clientes = new Clientes(null,'','',null,'','','',null,'','','');
  public date = new Date();
  public vlS: boolean = false
  public vlW: boolean = false

  ngOnInit() {
    this.addUser = this.formBuilder.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      estado: ['', Validators.required],
      pais: ['', Validators.required]
    });

  }
  public salvar(): void {

    this.cliente.nome = this.addUser.value.nome
    this.cliente.endereco = this.addUser.value.endereco
    this.cliente.numero = this.addUser.value.numero
    this.cliente.bairro = this.addUser.value.bairro
    this.cliente.estado = this.addUser.value.estado
    this.cliente.pais = this.addUser.value.pais;
    this.cliente.dt_cad = this.date.getDate() + "-" + this.date.getMonth() + "-" + this.date.getFullYear()
    this.cliente.dt_alt  = this.date.getDate() + "-" + this.date.getMonth() + "-" + this.date.getFullYear()
    this.cliente.avaliacao = 0;

    this.clientesService.salvarCliente(this.cliente)
      .subscribe();
      this.vlS = true
      setTimeout(function(){ window.location.href=window.location.href }, 2000);

  }
}
