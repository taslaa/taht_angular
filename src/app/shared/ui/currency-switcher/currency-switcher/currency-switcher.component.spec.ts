import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencySwitcherComponent } from './currency-switcher.component';

describe('CurrencySwitcherComponent', () => {
  let component: CurrencySwitcherComponent;
  let fixture: ComponentFixture<CurrencySwitcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencySwitcherComponent]
    });
    fixture = TestBed.createComponent(CurrencySwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
