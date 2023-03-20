import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observer, Subscription } from 'rxjs';

import { ContactanosService } from './contactanos.service';
import { UbicacionModel } from './contactanos.response.model';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent implements OnDestroy {

  // Form
  contactForm!: FormGroup;

  // List
  directionList: UbicacionModel[] | undefined;

  // Validators Variables
  cpValueTemp: string = '';
  cpIsInvalid: boolean = false;
  showDirectionList: boolean = false;

  // RxJS
  directionsSub$: Subscription | undefined;
  directionsObs$: Observer<any> = {
    next: (data: UbicacionModel[]) => {
      this.directionList = data;
      this.cpValueTemp = this.contact.cp;
      this.cpIsInvalid = false;
      this.showDirectionList = true;
    },
    error: (err: any) => {
      this.showDirectionList = false;
      this.cpIsInvalid = true;
      console.warn(err);
    },
    complete: () => this.directionsSub$?.unsubscribe(),
  };

  constructor(
    private fb: FormBuilder,
    private contactanosSvc: ContactanosService
  ) {
    this.initForm();
  }

  ngOnDestroy(): void {
    console.log('Hola');
  }

  get contact() {
    return this.contactForm.value;
  }

  initForm(): void {
    this.contactForm = this.fb.group({
      nombre: [null, Validators.required],
      email: [null, Validators.required],
      mensaje: [null, Validators.required],
      estado: [null, Validators.required],
      municipio: [null, Validators.required],
      colonia: [null, Validators.required],
      cp: [null, [Validators.required, Validators.pattern("[0-9]{1,5}"), Validators.maxLength(5)]],
    });
  }

  setUbicacion(_ubicacion: UbicacionModel, idx: number): void {
    // Get values
    const {estado, municipio, colonias } = _ubicacion;

    // Set Values Controls
    this.contactForm.controls['estado'].setValue(estado);
    this.contactForm.controls['municipio'].setValue(municipio);
    this.contactForm.controls['colonia'].setValue(colonias[idx]);
  }

  sendRequest() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    // TODO: Action
    console.log('Posting contact');
    console.log(this.contact);
  }

  fieldInvalid(fieldName: string): boolean | undefined {
    const control = this.contactForm.get(fieldName);
    return control?.invalid && control?.touched;
  }

  reset(): void {
    console.log('Entró');
    this.cpValueTemp = '';
    this.cpIsInvalid = false;
    this.showDirectionList = false;
    this.directionList = [];
    this.contactForm.reset();
  }

  getDirection(): void {

    // Validación
    if (this.contactForm.controls['cp'].invalid) {
      this.showDirectionList = false;
      return;
    }

    // Validación para que no haga la misma consulta
    if (this.cpValueTemp !== '' && this.cpValueTemp === this.contact.cp) {
      this.showDirectionList = true;
      return;
    }

    // RxJS
    this.directionsSub$ = this.contactanosSvc.getDirections(this.contact.cp).subscribe(this.directionsObs$);
  }

}
