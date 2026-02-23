import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './info-usuario.component.html',
  styleUrl: './cadastro-component.scss',
})
export class InfoUsuarioComponent {
  private fb = inject(FormBuilder);
  private roteador = inject(Router);

  carregando = false;
  mensagemErro = '';

  formulario = this.fb.group({
    nomeCompleto: ['', [Validators.required, Validators.minLength(3)]],
    cpf: ['', [Validators.required, Validators.minLength(11)]],
    dataNascimento: ['', [Validators.required]],
    aceitouTermos: [false, [Validators.requiredTrue]],
  });

  aoClicarProximo(): void {
    this.mensagemErro = '';

    this.formulario.markAllAsTouched();
    if (this.formulario.invalid) return;

    // guarda para o backend depois
    sessionStorage.setItem('cadastro.nomeCompleto', this.formulario.controls.nomeCompleto.value ?? '');
    sessionStorage.setItem('cadastro.cpf', this.formulario.controls.cpf.value ?? '');
    sessionStorage.setItem('cadastro.dataNascimento', this.formulario.controls.dataNascimento.value ?? '');
    sessionStorage.setItem('cadastro.aceitouTermos', String(this.formulario.controls.aceitouTermos.value ?? false));

    this.carregando = true;
    setTimeout(() => {
      this.carregando = false;
      this.roteador.navigate(['/cadastro/localizacao']);
    }, 300);
  }

  aoClicarContinuarSemLogin(): void {
    this.roteador.navigate(['/home']);
  }
}