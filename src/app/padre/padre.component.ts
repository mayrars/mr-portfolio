import { ServicioFamiliarService } from './../servicio-familiar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {
  nombre?: string

  //Injectando el servicio
  constructor (
    private _servicioFamiliar : ServicioFamiliarService
  ){}

  ngOnInit(): void{
    this._servicioFamiliar.setHermanoGrande('juan')
    this.nombre = this._servicioFamiliar.getHermanoGrande()
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno() || '')
  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo())
  }
}
