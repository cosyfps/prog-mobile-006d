import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministrationUsersEditPage } from './administration-users-edit.page';

describe('AdministrationUsersEditPage', () => {
  let component: AdministrationUsersEditPage;
  let fixture: ComponentFixture<AdministrationUsersEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationUsersEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
