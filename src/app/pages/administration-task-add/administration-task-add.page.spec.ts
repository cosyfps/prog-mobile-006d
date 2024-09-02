import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministrationTaskAddPage } from './administration-task-add.page';

describe('AdministrationTaskAddPage', () => {
  let component: AdministrationTaskAddPage;
  let fixture: ComponentFixture<AdministrationTaskAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationTaskAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
