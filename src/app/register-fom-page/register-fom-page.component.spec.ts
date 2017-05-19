import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFomPageComponent } from './register-fom-page.component';

describe('RegisterFomPageComponent', () => {
  let component: RegisterFomPageComponent;
  let fixture: ComponentFixture<RegisterFomPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFomPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
