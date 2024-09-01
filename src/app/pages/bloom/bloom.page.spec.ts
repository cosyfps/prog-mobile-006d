import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BloomPage } from './bloom.page';

describe('BloomPage', () => {
  let component: BloomPage;
  let fixture: ComponentFixture<BloomPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BloomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
