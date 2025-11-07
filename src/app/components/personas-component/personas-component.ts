import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Persona } from '../../models/persona';
import { ServicePersona } from '../../services/ServicePersonas';

@Component({
  selector: 'app-personas-component',
  imports: [RouterLink],
  templateUrl: './personas-component.html',
  providers: [ServicePersona],
})
export class PersonasComponent implements OnInit {
  public personas!: Array<Persona>;
  public personasAxios!: Array<Persona>;
  public personasFetch!: Array<Persona>;

  constructor(private _service: ServicePersona) {}
  ngOnInit(): void {
    this._service.getPersonas().then((response) => {
      this.personas = response;
    });
    this._service.getPersonasAxios().then((response) => {
      this.personasAxios = response;
    });
    this._service.getPersonasFetch().then((response) => {
      this.personasFetch = response;
    });
  }
}
