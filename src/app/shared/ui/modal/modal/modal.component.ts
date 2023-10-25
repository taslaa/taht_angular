import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  visible: boolean = false;

  open() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }
}
