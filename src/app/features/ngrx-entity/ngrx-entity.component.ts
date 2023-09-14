import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Operator } from '../ngrx-effects/service/operator.model';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { OperatorState } from './entity-store/entity-operator.state';
import { getEntityOperator } from './entity-store/entity-operator.selector';
import { operatorEntityStart } from './entity-store/entity-operator.actions';

@Component({
  selector: 'app-ngrx-entity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngrx-entity.component.html',
  styleUrls: ['./ngrx-entity.component.scss']
})
export class NgrxEntityComponent {

  params = { offset: 0, limit: 5, search: '', standard: '', country: '', state: '',
    blocked:true, approved:true }
  operatorList$!: Observable<Operator[]>;

  constructor(private store: Store<OperatorState>,
    private router: Router){}

  ngOnInit(): void {
    this.store.dispatch(operatorEntityStart({ params: this.params }))
    this.operatorList$ = this.store.select(getEntityOperator)
  }

  navigation(id: string){
    this.router.navigate(['/router', id ])
  }

}
