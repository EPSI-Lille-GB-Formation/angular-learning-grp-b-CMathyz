import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[NoOpen]',
  standalone: true
})
export class NoOpenDirective {

  constructor() {}
  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault();
  };

  //@HostListener('click',)
  //onClick(){
   // return false;
  //};
}
