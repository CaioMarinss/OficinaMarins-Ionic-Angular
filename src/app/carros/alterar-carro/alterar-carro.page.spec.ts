import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterarCarroPage } from './alterar-carro.page';

describe('AlterarCarroPage', () => {
  let component: AlterarCarroPage;
  let fixture: ComponentFixture<AlterarCarroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlterarCarroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
