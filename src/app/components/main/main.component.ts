import { Component } from '@angular/core';
import { IssuesListComponent } from '../issues-list/issues-list.component';
import { HeaderComponent } from '../header/header.component';
import { MatDialog } from '@angular/material/dialog';
import { AddIssueModalComponent } from '../add-issue-modal/add-issue-modal.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [IssuesListComponent, HeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor(private dialog: MatDialog) {

  }

  openCreateIssueDialog() {
    console.log("ad")
    const dialogRef = this.dialog.open(AddIssueModalComponent, {
      data: { }
    });

    dialogRef.afterClosed().subscribe( result => {
      if (result) {

      }
    })
  }
}
