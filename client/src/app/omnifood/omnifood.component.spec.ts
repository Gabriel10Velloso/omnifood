import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmnifoodComponent } from './omnifood.component';

describe('OmnifoodComponent', () => {
  let component: OmnifoodComponent;
  let fixture: ComponentFixture<OmnifoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmnifoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmnifoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
