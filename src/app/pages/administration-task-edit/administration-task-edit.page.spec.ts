import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministrationTaskEditPage } from './administration-task-edit.page';

describe('AdministrationTaskEditPage', () => {
  let component: AdministrationTaskEditPage;
  let fixture: ComponentFixture<AdministrationTaskEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationTaskEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
