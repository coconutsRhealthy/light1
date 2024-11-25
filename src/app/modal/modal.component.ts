import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() isVisible = false;
  @Input() discount: any = null;
  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.isVisible = false;
    this.closed.emit();
  }
}
