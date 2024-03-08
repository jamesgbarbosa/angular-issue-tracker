import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IssuesListService } from './issues-list.service';

@Component({
  selector: 'app-issues-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './issues-list.component.html',
  styleUrl: './issues-list.component.scss'
})
export class IssuesListComponent implements OnInit {
  issuesList: any;
  ngOnInit(): void {
    this.issuesListService.getIssuesList().then((res: any) => {
      if (res) {
        this.issuesList = res;
      }
    })

  }

  constructor(private issuesListService: IssuesListService) {
  }

}
