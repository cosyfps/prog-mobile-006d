import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourInfoPage } from './your-info.page';

describe('YourInfoPage', () => {
  let component: YourInfoPage;
  let fixture: ComponentFixture<YourInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(YourInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
