import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTopAppBarComponent } from './custom-top-app-bar.component';

describe('CustomTopAppBarComponent', () => {
  let component: CustomTopAppBarComponent;
  let fixture: ComponentFixture<CustomTopAppBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTopAppBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTopAppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
