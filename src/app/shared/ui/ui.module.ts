import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationComponent } from './translation/translation/translation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencySwitcherComponent } from './currency-switcher/currency-switcher/currency-switcher.component';

@NgModule({
  declarations: [TranslationComponent, CurrencySwitcherComponent],
  exports: [TranslationComponent, CurrencySwitcherComponent],
  imports: [CommonModule, FormsModule]
})
export class UiModule { }
