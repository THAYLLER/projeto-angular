import { ClienteEditaComponent } from './cliente-edita/cliente-edita.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'clientes', component: ClienteComponent },
  { path: 'clientes/editar', component: ClienteEditaComponent },
  { path: '**', component: Error404Component }
];

