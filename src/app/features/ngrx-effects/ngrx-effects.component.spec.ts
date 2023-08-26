import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxEffectsComponent } from './ngrx-effects.component';

describe('NgrxEffectsComponent', () => {
  let component: NgrxEffectsComponent;
  let fixture: ComponentFixture<NgrxEffectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgrxEffectsComponent]
    });
    fixture = TestBed.createComponent(NgrxEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
