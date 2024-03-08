import { Component } from '@angular/core';
import { IssuesListComponent } from '../issues-list/issues-list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [IssuesListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
