import { Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[TodoList-Hilight]',
  standalone: true
})
export class TodoListDirective {

  @HostBinding('style.boderSize')
  bgColorSize = '3px';

  @HostBinding('style.boderColor')
  defaultBorderColor = 'transparent';

  @HostBinding('style.borderStyle')
  defaultborderStyle = 'solid';

  constructor() {};

  @HostListener('mouseenter')
    onmouseEnter(){
      this.defaultBorderColor = 'blue';
    }
  @HostListener('mouseleave')
    onmouseLeave(){
      this.defaultBorderColor= 'transparent';
    }  
}
