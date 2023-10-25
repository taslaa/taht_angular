import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map/map/map.component';
import { ModalComponent } from './modal/modal/modal.component';

@NgModule({
  declarations: [MapComponent, ModalComponent],
  exports: [MapComponent, ModalComponent],
  imports: [CommonModule, FormsModule]
})
export class UiModule { }