import { Clientes } from './../shared/clientes.model';
import { clientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers:[clientesService]
})
export class ClienteComponent implements OnInit {

  public clientes: Clientes[]

  constructor(private clientesService: clientesService) { }

  ngOnInit() {
   this.clientesService.getClientes()
    .then((clientes: Clientes[]) => { this.clientes = clientes })
    .catch((r: any) => {

      console.log(r);
    })

  }
  delete(cliente: Clientes): void {
    this.clientesService.deleteCliente(cliente.id)
      .subscribe()
      window.location.href=window.location.href
  };
  public starRating(r):any{

    var retorno = [];
    console.log(r)
    if(r==0) {

      retorno[0] = 'fa-star-o';
    } else {
      for (let i = 1; i <= r ; i++) {

          retorno[i] = 'fa-star';
      }
    }
    return retorno;
  }
}
