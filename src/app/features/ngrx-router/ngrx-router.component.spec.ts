import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxRouterComponent } from './ngrx-router.component';

describe('NgrxRouterComponent', () => {
  let component: NgrxRouterComponent;
  let fixture: ComponentFixture<NgrxRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgrxRouterComponent]
    });
    fixture = TestBed.createComponent(NgrxRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
