import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store, StoreModule, provideStore } from '@ngrx/store';
import { changeText, decrement, decrementBy, increment, incrementBy, reset } from './basic-store/basic-store.action';
import { MatButtonModule } from '@angular/material/button';
import { getCounter, getName } from './basic-store/basic-store.selector';
import { CounterState } from './basic-store/basic-store.state';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngrx-basics',
  standalone: true,
  imports: [
    CommonModule, 
    MatButtonModule,
    MatInputModule,
    FormsModule
    // provideStore({ count: counterReducer }),
    // StoreModule.forFeature({ count: counterReducer }) 
  ],
  templateUrl: './ngrx-basics.component.html',
  styleUrls: ['./ngrx-basics.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgrxBasicsComponent {

  count$!: Observable<number>;
  name$!:  Observable<string>;
  changeValueBy!: number;

  constructor(private store: Store<{ firstCounter: CounterState }>){
    this.count$ = store.select(getCounter);
    this.name$ = store.select(getName)
  }

  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

  changeText(){
    this.store.dispatch(changeText({ changeBy: 'Joshy george' }))
  }

  incrementBy(){
    this.store.dispatch(incrementBy({ value : this.changeValueBy }))
  }

  decrementBy(){
    this.store.dispatch(decrementBy({ value : this.changeValueBy }))
  }
}
