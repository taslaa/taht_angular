import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationComponent } from './translation/translation.component';



@NgModule({
  declarations: [TranslationComponent],
  exports: [TranslationComponent],
  imports: [CommonModule]
})
export class TranslationModule { }
