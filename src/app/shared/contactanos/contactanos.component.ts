import { Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent implements OnDestroy {

  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder
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

}
