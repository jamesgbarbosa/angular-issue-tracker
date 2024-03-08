import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-issue-modal',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-issue-modal.component.html',
  styleUrl: './add-issue-modal.component.scss'
})
export class AddIssueModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddIssueModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder) {}

  form: FormGroup | any;
  mode = 'ADD'
  ngOnInit(): void {
    let obj = this.data.issue;
    this.mode = this.data.mode;
    this.form = this._fb.group({
      issueName: [obj?.issueName || '', Validators.required],
      description: [obj?.description || '', Validators.required],
    })
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close(this.form.value)
  }
}
