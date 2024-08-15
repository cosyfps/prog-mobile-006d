import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PremiunPage } from './premiun.page';

describe('PremiunPage', () => {
  let component: PremiunPage;
  let fixture: ComponentFixture<PremiunPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
