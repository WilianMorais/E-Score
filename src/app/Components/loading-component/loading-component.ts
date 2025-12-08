import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carregamento',
  templateUrl: './loading-component.html',
  styleUrls: ['./loading-component.scss'],
})
export class CarregamentoComponent implements OnInit {
  constructor(private roteador: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.roteador.navigate(['/home']);
    }, 5000);
  }
}
