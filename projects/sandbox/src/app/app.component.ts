import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { NoOpenDirective } from './no-open.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HighlightDirective, NoOpenDirective],
  template: `
      <h1>Decouverte des directives d'attribus</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Nam, dicta natus. Ipsa modi id aliquam consectetur nesciunt. 
        Nemo quia excepturi consequatur facilis assumenda corporis iusto, 
        inventore dignissimos sapiente, possimus soluta.
      </p>
      
      <a href="https://www.youtube.com/" NoOpen>Lien</a>

      <p Highlight bg-color="green" bg-default="orange">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Nam, dicta natus. Ipsa modi id aliquam consectetur nesciunt. 
        Nemo quia excepturi consequatur facilis assumenda corporis iusto, 
        inventore dignissimos sapiente, possimus soluta.
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Nam, dicta natus. Ipsa modi id aliquam consectetur nesciunt. 
        Nemo quia excepturi consequatur facilis assumenda corporis iusto, 
        inventore dignissimos sapiente, possimus soluta.
      </p>
      `,
  styles: []
})
export class AppComponent {
}
