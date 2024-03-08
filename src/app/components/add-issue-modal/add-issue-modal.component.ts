import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-issue-modal',
  standalone: true,
  imports: [],
  templateUrl: './add-issue-modal.component.html',
  styleUrl: './add-issue-modal.component.scss'
})
export class AddIssueModalComponent {
  constructor(public dialogRef: MatDialogRef<AddIssueModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    
}
