import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurListCompletePage } from './our-list-complete.page';

describe('OurListCompletePage', () => {
  let component: OurListCompletePage;
  let fixture: ComponentFixture<OurListCompletePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OurListCompletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
