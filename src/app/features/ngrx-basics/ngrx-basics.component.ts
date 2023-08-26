import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicService } from './service/basic.service';

@Component({
  selector: 'app-ngrx-basics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngrx-basics.component.html',
  styleUrls: ['./ngrx-basics.component.scss']
})
export class NgrxBasicsComponent {

  constructor(public basicService: BasicService){}

}
