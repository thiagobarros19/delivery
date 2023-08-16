import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  public getAddress(cep: string) {
    return this._http.get(`https://viacep.com.br/ws/${cep}/json/`)
      .pipe(map((res: any) => {
        const { cep, logradouro, complemento, bairro, localidade, uf } = res;
        return {
          cep,
          address: logradouro,
          complement: complemento,
          neighborhood: bairro,
          city: localidade,
          state: uf
        }
      }));
  }
}
