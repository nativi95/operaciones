import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formulario: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.formulario = this.createForm();
  }

  private createForm() {
    return this.formBuilder.group({
      n1: ["", Validators.required],
      n2: ["", Validators.required]
    });
  }

  CalcularOperaciones() {
    console.log("++++++++++++=boton++++++++++++")
    console.log(this.formulario.value);
  }

}
