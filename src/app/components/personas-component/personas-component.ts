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

  constructor(private _service: ServicePersona) {}
  ngOnInit(): void {
    this._service.getPersonas().then((response) => {
      this.personas = response;
    });
  }
}
