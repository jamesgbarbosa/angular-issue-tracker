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
        this.createIssue(result);
      }
    })
  }

  createIssue(result: any) {
    this.mainService.createIssue(result).then((res) => {
      if (res) {
        alert("Successfully create issue!")
      }
    }).catch((err) => {
      alert("API Failed")
    })
  }

  deleteIssue(id: any) {
    this.mainService.deleteIssues({id: id}).then((res) => {
      if (res) {
        alert(`Successfully deleted issue: ${id}`)
      }
    }).catch((err) => {
      alert("API Failed")
    })
  }

  editIssue(id: any) {
    this.mainService.getIssue(id).then((res) => {
      if (res) {
        const dialogRef = this.dialog.open(AddIssueModalComponent, {
          data: {issue: res}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.mainService.editIssue(result).then((res: any) => {
              alert(`Issue ${id} successfully updated`);
            })
          }
        })
      }
    }).catch((err) => {
      alert("API Failed")
    })
  }
}
