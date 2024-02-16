import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanos]'
})
export class EstiloHermanosDirective {

  constructor(private element: ElementRef) { //Element ref permite que donde se ponga la directiva se puedan aplica cambios
    this.element.nativeElement.style.textTransform ='capitalize'
  }



}
