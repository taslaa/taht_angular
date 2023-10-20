import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input/input.component';
import { TranslationComponent } from './translation/translation/translation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent, TranslationComponent],
  exports: [InputComponent, TranslationComponent],
  imports: [CommonModule, FormsModule]
})
export class UiModule { }
