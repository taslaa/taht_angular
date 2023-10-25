import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher/language-switcher.component';
import { MapComponent } from './map/map/map.component';

@NgModule({
  declarations: [LanguageSwitcherComponent, MapComponent],
  exports: [LanguageSwitcherComponent, MapComponent],
  imports: [CommonModule, FormsModule]
})
export class UiModule { }