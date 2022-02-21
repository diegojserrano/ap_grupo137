import { Component } from '@angular/core';
import { Educacion } from 'src/educacion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  nombreCompleto = "Juan Perez"


  // Estos dos arreglos deben reemplazarse
  // por sendos servicios que los provean
  estudios: Educacion[] = []
  intereses: String[] = ["Futbol","Ajedrez","Aves","Ferromodelismo","Atlanta"]
  constructor() {
    this.estudios.push(new Educacion("Bachiller","Escuela XX", "2000-2005"))
    this.estudios.push(new Educacion("Analista de sistemas","Universidad Libre de Sistemas", "2006-2012"))
    this.estudios.push(new Educacion("Tecnico en Redes","Instituto Formar", "2007-2012"))
    this.estudios.push(new Educacion("Reposteria","Instituto Formar", "2020"))

  }



}
