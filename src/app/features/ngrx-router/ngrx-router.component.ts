import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Operator } from '../ngrx-effects/service/operator.model';
import { AppState } from 'src/app/app-config/app.state';
import { Store } from '@ngrx/store';
import { getOperatorById } from '../ngrx-effects/components/operator-list/operator-store/operator.selector';

@Component({
  selector: 'app-ngrx-router',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngrx-router.component.html',
  styleUrls: ['./ngrx-router.component.scss']
})
export class NgrxRouterComponent {

  operatorDetails$!: Observable<Operator | null | undefined>

  constructor(private store: Store<AppState>){
    this.operatorDetails$ = this.store.select(getOperatorById)
  }

}
