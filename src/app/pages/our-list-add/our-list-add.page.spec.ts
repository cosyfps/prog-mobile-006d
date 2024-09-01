import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurListAddPage } from './our-list-add.page';

describe('OurListAddPage', () => {
  let component: OurListAddPage;
  let fixture: ComponentFixture<OurListAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OurListAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
