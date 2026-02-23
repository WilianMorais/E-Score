import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-codigo-verificacao',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './codigoverificacao.component.html',
  styleUrl: './geral.component.scss',
})
export class CodigoVerificacaoComponent {
  private fb = inject(FormBuilder);
  private roteador = inject(Router);

  carregando = false;
  mensagemErro = '';

  formulario = this.fb.group({
    codigo: ['', [Validators.required, Validators.minLength(4)]],
  });

  aoClicarVoltar(): void {
    this.roteador.navigate(['/recuperacao/email']);
  }

  aoClicarProximo(): void {
    this.mensagemErro = '';
    this.formulario.controls.codigo.markAsTouched();

    if (this.formulario.invalid) return;

    sessionStorage.setItem('recuperacao.codigo', this.formulario.controls.codigo.value ?? '');

    this.carregando = true;
    setTimeout(() => {
      this.carregando = false;
      this.roteador.navigate(['/recuperacao/nova-senha']);
    }, 300);
  }

  aoClicarContinuarSemLogin(): void {
    this.roteador.navigate(['/home']);
  }
}