import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallActionComponent } from './call-action.component';

describe('CallActionComponent', () => {
  let component: CallActionComponent;
  let fixture: ComponentFixture<CallActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallActionComponent]
    });
    fixture = TestBed.createComponent(CallActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
