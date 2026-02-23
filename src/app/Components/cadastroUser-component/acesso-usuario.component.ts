import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acesso-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './acesso-usuario.component.html',
  styleUrl: './cadastro-component.scss',
})
export class AcessoUsuarioComponent {
  private fb = inject(FormBuilder);
  private roteador = inject(Router);

  carregando = false;
  mensagemErro = '';

  mostrarSenha = false;

  formulario = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    regiao: ['', [Validators.required, Validators.minLength(2)]],
    telefone: ['', [Validators.required, Validators.minLength(8)]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
  });

  alternarMostrarSenha(): void {
    this.mostrarSenha = !this.mostrarSenha;
  }

  aoClicarVoltar(): void {
    this.roteador.navigate(['/cadastro/localizacao']);
  }

  aoClicarFinalizarCadastro(): void {
    this.mensagemErro = '';
    this.formulario.markAllAsTouched();
    if (this.formulario.invalid) return;

    const payload = {
      nomeCompleto: sessionStorage.getItem('cadastro.nomeCompleto') ?? '',
      cpf: sessionStorage.getItem('cadastro.cpf') ?? '',
      dataNascimento: sessionStorage.getItem('cadastro.dataNascimento') ?? '',
      aceitouTermos: sessionStorage.getItem('cadastro.aceitouTermos') ?? 'false',
      endereco: sessionStorage.getItem('cadastro.endereco') ?? '',
      cep: sessionStorage.getItem('cadastro.cep') ?? '',
      uf: sessionStorage.getItem('cadastro.uf') ?? '',
      municipio: sessionStorage.getItem('cadastro.municipio') ?? '',
      email: this.formulario.controls.email.value ?? '',
      regiao: this.formulario.controls.regiao.value ?? '',
      telefone: this.formulario.controls.telefone.value ?? '',
      senha: this.formulario.controls.senha.value ?? '',
    };

    this.carregando = true;
    setTimeout(() => {
      this.carregando = false;
      console.log('CADASTRO (frontend):', payload);

      // Depois conecta no backend — por enquanto volta para login
      this.roteador.navigate(['/login']);
    }, 400);
  }

  aoClicarContinuarSemLogin(): void {
    this.roteador.navigate(['/home']);
  }
}