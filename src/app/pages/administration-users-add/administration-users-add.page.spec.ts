import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministrationUsersAddPage } from './administration-users-add.page';

describe('AdministrationUsersAddPage', () => {
  let component: AdministrationUsersAddPage;
  let fixture: ComponentFixture<AdministrationUsersAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationUsersAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
