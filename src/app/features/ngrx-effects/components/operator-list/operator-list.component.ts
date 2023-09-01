import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { Operator } from '../../service/operator.model';
import { Store } from '@ngrx/store';
import { OperatorState } from './operator-store/operator.state';
import { getOperator, getOperatorError, getOperatorLoader } from './operator-store/operator.selector';
import { operatorStart } from './operator-store/operator.actions';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-operator-list',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.scss']
})
export class OperatorListComponent implements OnInit {

  params = { offset: 0, limit: 10, search: '', standard: '', country: '', state: '',
    blocked:true, approved:true }
  operatorList$!: Observable<Operator[]>;
  loading$!: Observable<boolean>
  error$!: Observable<string>

  constructor(private store: Store<OperatorState>){}

  ngOnInit(): void {
    this.store.dispatch(operatorStart({ params: this.params }))
    this.operatorList$ = this.store.select(getOperator)
    this.loading$ = this.store.select(getOperatorLoader);
    this.error$ = this.store.select(getOperatorError)
  }

}
