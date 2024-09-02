import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministrationTaskPage } from './administration-task.page';

describe('AdministrationTaskPage', () => {
  let component: AdministrationTaskPage;
  let fixture: ComponentFixture<AdministrationTaskPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
