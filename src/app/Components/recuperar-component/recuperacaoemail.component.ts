import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperacao-email',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recuperacaoemail.component.html',
  styleUrl: './geral.component.scss',
})
export class RecuperacaoEmailComponent {
  private fb = inject(FormBuilder);
  private roteador = inject(Router);

  carregando = false;
  mensagemErro = '';

  formulario = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  aoClicarProximo(): void {
    this.mensagemErro = '';
    this.formulario.controls.email.markAsTouched();

    if (this.formulario.invalid) return;

    // Front só captura (backend depois) - guardando para próximas telas
    sessionStorage.setItem('recuperacao.email', this.formulario.controls.email.value ?? '');

    this.carregando = true;
    setTimeout(() => {
      this.carregando = false;
      this.roteador.navigate(['/recuperacao/codigo']);
    }, 300);
  }

  aoClicarContinuarSemLogin(): void {
    this.roteador.navigate(['/home']);
  }
}