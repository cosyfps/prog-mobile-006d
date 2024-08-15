import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurListPage } from './our-list.page';

describe('OurListPage', () => {
  let component: OurListPage;
  let fixture: ComponentFixture<OurListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OurListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
