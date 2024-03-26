import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListaRomero';
  
  students=[
    {nombre:'Karina', apellido:'Romero', presente:true},
    {nombre:'Franco', apellido:'Cuello', presente:true},
    {nombre:'Luis', apellido:'Reyes', presente:true},
    {nombre:'Maria', apellido:'Preisz', presente:true},
    {nombre:'Mariano', apellido:'Francischini', presente:true},
    {nombre:'Jhoceliz', apellido:'Figueroa Pinto', presente:true},
    {nombre:'Kevin', apellido:'Stajurski', presente:false},
    {nombre:'Julieta', apellido:'Castillo', presente:false},
    {nombre:'Milagros', apellido:'Díaz Grizzuti', presente:false},
    {nombre:'Yasmin', apellido:'Burrut', presente:false}
  ];

  mostrarPresentes = false;
  mostrarAusentes = false;

  togglePresentes() {
    this.mostrarPresentes = !this.mostrarPresentes;
  }

  toggleAusentes() {
    this.mostrarAusentes = !this.mostrarAusentes;
  }

  presentStudents() {
    return this.students.filter(student => student.presente);
  }

  absentStudents() {
    return this.students.filter(student => !student.presente);
  }
}
