import { Component } from '@angular/core';
import { IssuesListComponent } from '../issues-list/issues-list.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [IssuesListComponent, HeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  
  openCreateIssueDialog() {

  }
}
