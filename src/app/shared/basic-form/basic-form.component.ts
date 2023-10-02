import { formatDate } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicFormComponent implements OnInit{
  @Input() formData: any;
  @Input() buttonName: string = 'Aceptar'
  @Output() saveProduct = new EventEmitter<any>();

  basicForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder){}


  ngOnInit(): void {
    this.initializeForm()
  }
  onSubmit(){
    this.buttonName.includes('Editar') && this.basicForm.get('id')?.enable()
    this.saveProduct.emit(this.basicForm.value)
    this.buttonName.includes('Editar') && this.basicForm.get('id')?.disable()
  }

  initializeForm() {

    this.basicForm = this.fb.group({
      id: [this.formData?.id, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      name: [this.formData?.name, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      description: [this.formData?.description, [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      logo: ['https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg', [Validators.required]],
      date_release: [this.formData?.date_release, [Validators.required, this.dateGreaterThanCurrentValidator]],
      date_revision: [this.formData?.date_revision, [Validators.required, this.dateOneYearGreaterValidator]]
    })

    this.buttonName.includes('Editar') && this.basicForm.get('id')?.disable()
  }

  dateGreaterThanCurrentValidator(control: FormControl) {
    const inputDate = new Date(control.value);
    const currentDate = new Date();

    if (inputDate <= currentDate) {
      return { dateGreaterThanCurrent: true };
    }

    return null;
  }


  dateOneYearGreaterValidator(control: FormControl) {
    const inputDate = new Date(control.value);
    const currentDate = new Date();
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(currentDate.getFullYear() + 1);

    if (inputDate <= oneYearFromNow) {
      return { dateOneYearGreater: true };
    }

    return null;
  }

  cleanForm() {
    this.basicForm.reset()
  }

}
