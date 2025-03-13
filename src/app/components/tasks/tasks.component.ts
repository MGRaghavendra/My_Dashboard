import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';



@Component({
  selector: 'app-tasks',
  imports: [CommonModule,FormsModule,NzIconModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  public tempTaskArr = [{"id":1,"isChecked":false},{"id":2,"isChecked":false},{"id":3,"isChecked":false},{"id":4,"isChecked":false}]

    method(params: any) {
    console.log(params)
  }
}
