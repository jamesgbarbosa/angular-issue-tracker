import { Component, OnInit } from '@angular/core';
import { IssuesListComponent } from '../issues-list/issues-list.component';
import { HeaderComponent } from '../header/header.component';
import { MatDialog } from '@angular/material/dialog';
import { AddIssueModalComponent } from '../add-issue-modal/add-issue-modal.component';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [IssuesListComponent, HeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  issuesList = [];
  
  constructor(private dialog: MatDialog, private mainService: MainService) {

  }
  ngOnInit(): void {
    this.mainService.getIssuesList().then((res: any) => {
      if (res) {
        this.issuesList = res;
      }
    })
  }

  openCreateIssueDialog() {
    const dialogRef = this.dialog.open(AddIssueModalComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._createIssue(result);
      }
    })
  }

  _createIssue(result: any) {
    this.mainService.createIssue(result).then((res) => {
      if (res) {
        this._createIssue
      }
    }).catch((err) => {
      alert("API Failed")
    })
  }
}
