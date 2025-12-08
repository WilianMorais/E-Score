import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonatosComponent } from './campeonatos-component';

describe('ChampionshipComponent', () => {
  let component: CampeonatosComponent;
  let fixture: ComponentFixture<CampeonatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampeonatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampeonatosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
