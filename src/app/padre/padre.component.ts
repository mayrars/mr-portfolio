import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent {
  valorContador: number = 0

  incrementar(){
    this.valorContador++;
  }
  decrementar(){
    this.valorContador--;
  }

  mensajeRecibido: string= ''

  recibirMensaje($event: string){
    this.mensajeRecibido = $event
  }
  
}
