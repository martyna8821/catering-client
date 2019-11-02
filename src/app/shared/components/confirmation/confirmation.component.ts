import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ConfirmationModel } from '../../model/Confirmation';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  formControl = new FormControl();
  constructor(public dialogRef: MatDialogRef<ConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationModel) { }

  ngOnInit() {
    if (this.data.isInputRequired) {
      this.formControl.setValidators(Validators.required);
    }
  }

  onYes() {
    if (this.data.withInput) {
      this.data.confirmationMessage = this.formControl.value;
    }

    this.data.confirmed = true;
    this.dialogRef.close(this.data);
  }

  onNo() {
    this.data.confirmed = false;
    this.dialogRef.close();
  }

  allowYes(): boolean {
    return !this.formControl.valid;
  }

}
