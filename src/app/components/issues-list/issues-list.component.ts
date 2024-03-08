import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-issues-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './issues-list.component.html',
  styleUrl: './issues-list.component.scss'
})
export class IssuesListComponent implements OnInit {
  @Input() issuesList: any;
  @Output() onDeleteIssue = new EventEmitter<any>();
  @Output() onEditIssue = new EventEmitter<any>();
  
  ngOnInit(): void {
  }

  editIssue(id: any) {
    this.onEditIssue.emit(id)
  }

  deleteIssue(id: any) {
    if (confirm("Are you sure you want to delete?") == true) {
      this.onDeleteIssue.emit(id)
    } 
  }
}
