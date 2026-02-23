import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tela-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class TelaLoginComponent {
  carregando = false;
  mostrarSenha = false;
  mensagemErro = '';

  formulario!: FormGroup;

  constructor(
    private rota: Router,
    private fb: FormBuilder ) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email(): AbstractControl {
    return this.formulario.get('email')!;
  }

  get senha(): AbstractControl {
    return this.formulario.get('senha')!;
  }

  alternarVisibilidadeSenha(): void {
    this.mostrarSenha = !this.mostrarSenha;
  }

  aoClicarEntrar(): void {
    this.mensagemErro = '';

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.carregando = true;
    setTimeout(() => {
      this.carregando = false;
      // this.mensagemErro = 'E-mail ou senha incorretos.';
    }, 900);
  }

  aoClicarEsqueciMinhaSenha(): void {
    setTimeout(() => {
      this.rota.navigate(['/recuperacao']);
    },);
  }

  aoClicarContinuarSemLogin(): void {
    setTimeout(() => {
      this.rota.navigate(['/home']);
    },);
  }
}