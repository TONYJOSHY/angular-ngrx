import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { User, UserLogin } from './service/login.model';
import { Store } from '@ngrx/store';
import { AppState } from './../../app-config/app.state';
import { loginStart, logoutStart } from './effects-store/effect.action';
import { Observable } from 'rxjs';
import { getErrorMessage, getLoader, getUser } from './effects-store/effect.selector';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-ngrx-effects',
  standalone: true,
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './ngrx-effects.component.html',
  styleUrls: ['./ngrx-effects.component.scss']
})
export class NgrxEffectsComponent {

  cbsoftLoginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  currentUser$!: Observable<User | null>;
  loading$!: Observable<boolean>;
  error$!: Observable<string>

  constructor(private fb: FormBuilder,
    private store: Store<AppState>){
      this.currentUser$ = store.select(getUser);
      this.loading$ = store.select(getLoader);
      this.error$ = store.select(getErrorMessage);
    }

  onSubmit(){
    if(this.cbsoftLoginForm.valid){
      this.store.dispatch(loginStart({ data: this.cbsoftLoginForm.value as UserLogin }))
    }
  }

  logout(){
    this.store.dispatch(logoutStart())
  }

}
