import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';

interface taskInterface {
  id: number;
  isChecked: boolean;
  isPinned: boolean;
  dueDuration: string;
}
@Component({
  selector: 'app-tasks',
  imports: [CommonModule, FormsModule, NzIconModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  public tempTaskArr: taskInterface[] = [
    { id: 1, isChecked: false, isPinned: false, dueDuration: '1 day' },
    { id: 1, isChecked: false, isPinned: false, dueDuration: '1 day' },
    { id: 1, isChecked: false, isPinned: false, dueDuration: '1 day' },
    { id: 1, isChecked: false, isPinned: false, dueDuration: '1 day' },
  ];

  method(params: any) {
    console.log(params);
  }
}
