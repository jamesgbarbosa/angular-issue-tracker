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
  @Input() issuesList: any;

  ngOnInit(): void {
  }

  constructor(private issuesListService: IssuesListService) {
  }

  onDeleteIssue() {
    if (confirm("Are you sure you want to delete?") == true) {
      alert("Dete")
    } else {
      alert("Det2e")

    }
  }

}
