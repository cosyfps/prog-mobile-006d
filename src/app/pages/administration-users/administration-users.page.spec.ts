import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministrationUsersPage } from './administration-users.page';

describe('AdministrationUsersPage', () => {
  let component: AdministrationUsersPage;
  let fixture: ComponentFixture<AdministrationUsersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
