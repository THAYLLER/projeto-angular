export class Clientes {

  constructor(
    public id: number,
    public nome: String,
    public endereco: String,
    public numero: number,
    public bairro: String,
    public estado: String,
    public pais: String,
    public avaliacao: number,
    public dt_cad: String,
    public dt_alt: String,
    public dt_del: String,
  ){}
}
