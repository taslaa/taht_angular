import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencySwitcherComponent } from './currency-switcher/currency-switcher.component';



@NgModule({
  declarations: [CurrencySwitcherComponent],
  exports: [CurrencySwitcherComponent],
  imports: [CommonModule]
})
export class CurrencySwitcherModule { }
