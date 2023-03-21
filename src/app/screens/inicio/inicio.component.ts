import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {


  rep = [1, 2,3,4];


  activateHover(event: any) {
    // Remueve la clase 'active' de todos los bloques
    const blocks = document.querySelectorAll('.image-container');
    blocks.forEach((block) => {
      block.classList.remove('active');
    });

    // Agrega la clase 'active' al bloque que se ha tocado
    const target = event.target;
    target.classList.add('active');
    console.log(target.classList)
  }

  mouseenter(event: any) {
    event.target.childNodes[0].classList.add('active');
    event.target.childNodes[1].childNodes[0].classList.add('d-none');
    event.target.childNodes[1].childNodes[1].classList.remove('d-none');
  }

  mouseleave(event: any) {
    event.target.childNodes[0].classList.remove('active');
    event.target.childNodes[1].childNodes[0].classList.remove('d-none');
    event.target.childNodes[1].childNodes[1].classList.add('d-none');
    // event.target.childNodes[0].classList.remove('d-none');
  }

}
