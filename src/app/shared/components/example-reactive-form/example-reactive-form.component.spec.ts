import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleReactiveFormComponent } from './example-reactive-form.component';

describe('ExampleReactiveFormComponent', () => {
  let component: ExampleReactiveFormComponent;
  let fixture: ComponentFixture<ExampleReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
