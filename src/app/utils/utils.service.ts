import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  /**
   * It creates a button, sets the button's type to 'button', sets the button's data-bs-toggle attribute to 'modal', sets
   * the button's data-bs-target attribute to the targetName parameter, sets the button's style.visibility to 'hidden',
   * adds the button to the document body, clicks the button, and then removes the button from the document body
   * @param {string} targetName - The name of the modal you want to open.
   */
  openModal(targetName: string): void {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', `#${ targetName }`);
    button.style.visibility = 'hidden';
    document.body.appendChild(button);
    button.click();
    document.body.removeChild(button);
  }


  /**
   * It creates a button, sets the type to button, sets the data-bs-dismiss attribute to modal, sets the visibility to
   * hidden, adds the button to the body, clicks the button, and then removes the button from the body
   */
  closeModal(): void {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('data-bs-dismiss', 'modal');
    button.style.visibility = 'hidden';
    document.body.appendChild(button);
    button.click();
    document.body.removeChild(button);
  }

}
