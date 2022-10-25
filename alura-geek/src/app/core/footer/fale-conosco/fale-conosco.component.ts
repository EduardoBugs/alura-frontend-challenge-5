import { ToastrService } from 'ngx-toastr';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.scss'],
})
export class FaleConoscoComponent implements OnInit {
  formFaleConosco!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  get formControls() {
    return this.formFaleConosco.controls;
  }

  ngOnInit(): void {
    this.formFaleConosco = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(40)]],
      mensagem: [null, [Validators.required, Validators.maxLength(120)]],
    });
  }

  enviarMensagem() {
    if (this.formFaleConosco.valid) {
      this.toastr.success('Mensagem enviada');
      this.formFaleConosco.reset();
    } else {
      this.formFaleConosco.markAllAsTouched();
    }
  }
}
