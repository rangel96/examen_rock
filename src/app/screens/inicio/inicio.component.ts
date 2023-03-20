import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  activateHover(event: any) {
    console.log(event.target);
    // Remueve la clase 'active' de todos los bloques
    const blocks = document.querySelectorAll('.col-md-6');
    blocks.forEach((block) => {
      block.classList.remove('active');
    });

    // Agrega la clase 'active' al bloque que se ha tocado
    const target = event.target;
    target.classList.add('active');
  }

}
