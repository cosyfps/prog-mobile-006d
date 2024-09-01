import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnPairPage } from './un-pair.page';

describe('UnPairPage', () => {
  let component: UnPairPage;
  let fixture: ComponentFixture<UnPairPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UnPairPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
