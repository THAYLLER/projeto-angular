import { clientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Clientes } from '../shared/clientes.model';

@Component({
  selector: 'app-cliente-edita',
  templateUrl: './cliente-edita.component.html',
  styleUrls: ['./cliente-edita.component.css'],
  providers: [clientesService]
})
export class ClienteEditaComponent implements OnInit {

  id:number
  editForm: FormGroup;
  public addUser: FormGroup;
  public cliente: Clientes = new Clientes(null,'','',null,'','','',null,'','','');
  public date = new Date();
  public vlS: boolean = false
  public vlW: boolean = false
  constructor(private rota:Router,private route: ActivatedRoute,private clientesService: clientesService,private formBuilder: FormBuilder) { }

  ngOnInit() {
     this.route.queryParams.subscribe((q:any) =>{
        this.id = q['id'];
     })
     this.editForm =this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      avaliacao: [],
      estado: ['', Validators.required],
      pais: ['', Validators.required],
      dt_cad: [],
      dt_alt: [],
      dt_del: []
    });
    this.clientesService.getClienteById(this.id)
    .then((clientes: Clientes[]) => {
      this.editForm.setValue(clientes[0]);
      this.cliente.avaliacao = clientes[0].avaliacao
      this.cliente.dt_cad = clientes[0].dt_cad
    })
  }

  public editar(): void {
    this.cliente.id = this.id
    this.cliente.nome = this.editForm.value.nome
    this.cliente.endereco = this.editForm.value.endereco
    this.cliente.numero = this.editForm.value.numero
    this.cliente.bairro = this.editForm.value.bairro
    this.cliente.estado = this.editForm.value.estado
    this.cliente.pais = this.editForm.value.pais;
    this.cliente.dt_alt  = this.date.getDate() + "-" + this.date.getMonth() + "-" + this.date.getFullYear()

    this.clientesService.atualizarCliente(this.cliente)
      .subscribe();
      this.vlS = true
      setTimeout(function(){
        history.go(-1);
       }, 2000);

  }
}
