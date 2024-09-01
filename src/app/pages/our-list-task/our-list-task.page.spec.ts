import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurListTaskPage } from './our-list-task.page';

describe('OurListTaskPage', () => {
  let component: OurListTaskPage;
  let fixture: ComponentFixture<OurListTaskPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OurListTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
