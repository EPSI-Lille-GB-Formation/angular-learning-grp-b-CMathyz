import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Highlight]',
  standalone: true
})
export class HighlightDirective {
  
  @HostBinding('style.backgroundColor')
  bgColor = "transparent";

  @Input('bg-Color')
  bgHiglightColor = 'yellow';

  @Input('bg-default')
  bgdefault = 'red';

  constructor() { 
   }

   ngAfterViewInit(){
    this.bgColor = this.bgdefault;
   }
  //Entrée de la souris sur le texte 
  @HostListener('mouseenter')
  onMouseEnter(){
      this.bgColor = this.bgHiglightColor;
  }
  //Sortie de la souris sur le texte
  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = this.bgdefault; 
  }
}
