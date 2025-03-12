import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { TasksComponent } from '../components/tasks/tasks.component';
import { WeatherComponent } from "../components/weather/weather.component";

@Component({
  selector: 'app-home',
  imports: [NzLayoutModule, TasksComponent, WeatherComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
