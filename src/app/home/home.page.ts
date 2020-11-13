import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formulario: FormGroup;
  recibido: any[];
  suma: number = 0;
  mensaje: string;

  constructor(public formBuilder: FormBuilder, public toastCtrl: ToastController) {
    this.formulario = this.createForm();
  }

  private createForm() {
    return this.formBuilder.group({
      n1: ["", Validators.required],
      n2: ["", Validators.required]
    });
  }

  CalcularOperaciones() {
    console.log(this.formulario.value);

    this.recibido = this.formulario.value;
    console.log(parseInt(this.recibido['n1']) + parseInt(this.recibido['n2']));
    this.suma = parseInt(this.recibido['n1']) + parseInt(this.recibido['n2']);

    this.mensaje = 'La suma de los numeros ' + this.recibido['n1'] + ' y ' + this.recibido['n2'] + ' es ' + this.suma;
    this.mostrarToast(this.mensaje);
  }

  async mostrarToast(msj: string) {
    const toast = await this.toastCtrl.create({
      message: msj,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
