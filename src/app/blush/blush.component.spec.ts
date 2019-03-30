import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlushComponent } from './blush.component';

describe('BlushComponent', () => {
  let component: BlushComponent;
  let fixture: ComponentFixture<BlushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
