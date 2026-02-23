import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-localizacao-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './localizacao-usuario.component.html',
  styleUrl: './cadastro-component.scss',
})
export class LocalizacaoUsuarioComponent {
  private fb = inject(FormBuilder);
  private roteador = inject(Router);

  carregando = false;
  mensagemErro = '';

  formulario = this.fb.group({
    endereco: ['', [Validators.required, Validators.minLength(4)]],
    cep: ['', [Validators.required, Validators.minLength(8)]],
    uf: ['', [Validators.required, Validators.minLength(2)]],
    municipio: ['', [Validators.required, Validators.minLength(2)]],
  });

  aoClicarVoltar(): void {
    this.roteador.navigate(['/cadastro/info']);
  }

  aoClicarProximo(): void {
    this.mensagemErro = '';
    this.formulario.markAllAsTouched();
    if (this.formulario.invalid) return;

    sessionStorage.setItem('cadastro.endereco', this.formulario.controls.endereco.value ?? '');
    sessionStorage.setItem('cadastro.cep', this.formulario.controls.cep.value ?? '');
    sessionStorage.setItem('cadastro.uf', this.formulario.controls.uf.value ?? '');
    sessionStorage.setItem('cadastro.municipio', this.formulario.controls.municipio.value ?? '');

    this.carregando = true;
    setTimeout(() => {
      this.carregando = false;
      this.roteador.navigate(['/cadastro/acesso']);
    }, 300);
  }

  aoClicarContinuarSemLogin(): void {
    this.roteador.navigate(['/home']);
  }
}