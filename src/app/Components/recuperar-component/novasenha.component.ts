import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-senha',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './novasenha.component.html',
  styleUrl: './geral.component.scss',
})
export class NovaSenhaComponent {
  private fb = inject(FormBuilder);
  private roteador = inject(Router);

  carregando = false;
  mensagemErro = '';

  mostrarNovaSenha = false;
  mostrarConfirmacao = false;

  formulario = this.fb.group({
    novaSenha: ['', [Validators.required, Validators.minLength(6)]],
    confirmarNovaSenha: ['', [Validators.required, Validators.minLength(6)]],
  });

  alternarMostrarNovaSenha(): void {
    this.mostrarNovaSenha = !this.mostrarNovaSenha;
  }

  alternarMostrarConfirmacao(): void {
    this.mostrarConfirmacao = !this.mostrarConfirmacao;
  }

  aoClicarVoltar(): void {
    this.roteador.navigate(['/recuperacao/codigo']);
  }

  aoClicarProximo(): void {
    this.mensagemErro = '';
    this.formulario.controls.novaSenha.markAsTouched();
    this.formulario.controls.confirmarNovaSenha.markAsTouched();

    if (this.formulario.invalid) return;

    if (this.formulario.controls.novaSenha.value !== this.formulario.controls.confirmarNovaSenha.value) {
      this.mensagemErro = 'As senhas não conferem.';
      return;
    }

    // Captura final (frontend)
    const payload = {
      email: sessionStorage.getItem('recuperacao.email') ?? '',
      codigo: sessionStorage.getItem('recuperacao.codigo') ?? '',
      novaSenha: this.formulario.controls.novaSenha.value ?? '',
    };

    this.carregando = true;
    setTimeout(() => {
      this.carregando = false;
      console.log('RECUPERAÇÃO (frontend):', payload);

      // Depois você liga no backend; por enquanto volta pro login
      this.roteador.navigate(['/login']);
    }, 400);
  }

  aoClicarContinuarSemLogin(): void {
    this.roteador.navigate(['/home']);
  }
}