import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observer, Subscription } from 'rxjs';
import { ContactanosService } from './contactanos.service';
import { DirectionModel } from './contactanos.model';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent implements OnDestroy {

  // Form
  contactForm!: FormGroup;

  // List
  directionList: DirectionModel[] | undefined;

  // Validators Variables
  cpValueTemp: string = '';
  cpIsInvalid: boolean = false;

  // RxJS
  directionsSub$: Subscription | undefined;
  directionsObs$: Observer<any> = {
    next: (data: DirectionModel[]) => {
      this.directionList = data;
      this.cpValueTemp = this.contact.cp;
      this.cpIsInvalid = false;
      console.log(data);
    },
    error: (err: any) => {
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

  sendRequest() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    // TODO: Action
    console.log('Posting contact');
  }

  fieldInvalid(fieldName: string): boolean | undefined {
    const control = this.contactForm.get(fieldName);
    return control?.invalid && control?.touched;
  }

  reset(): void {
    this.contactForm.reset();
  }

  getDirection(): void {

    // Validación
    if (this.contactForm.controls['cp'].invalid) {
      return;
    }

    // Validación para que no haga la misma consulta
    if (this.cpValueTemp !== '' && this.cpValueTemp === this.contact.cp) {
      return;
    }

    // RxJS
    this.directionsSub$ = this.contactanosSvc.getDirections(this.contact.cp).subscribe(this.directionsObs$);
  }

}
