import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    correo: ['', [Validators.required]],
    telefono: ['', [Validators.required, Validators.minLength(10)]],
    ciudad: ['', [Validators.required]],


  });

  constructor(private fb: FormBuilder,
              private dataService: DataService) { }

  ngOnInit() {}

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched;
  }

  agregar(){
    const user = this.miFormulario.value;

    this.dataService.postData(user)
    .subscribe(res => console.log(res));
  }
}
