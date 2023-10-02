import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {

  @Input() productTitle = '';
  @Output() optionSelection =  new EventEmitter<any>;

  closeModal(){
    this.optionSelection.emit(false)
  }

  deleteProduct(){
    this.optionSelection.emit(true)

  }

}
