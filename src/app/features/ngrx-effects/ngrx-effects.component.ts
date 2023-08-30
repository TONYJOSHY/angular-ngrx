import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { User, UserLogin } from './service/login.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { loginStart } from './effects-store/effect.action';
import { Observable } from 'rxjs';
import { getUser } from './effects-store/effect.selector';

@Component({
  selector: 'app-ngrx-effects',
  standalone: true,
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './ngrx-effects.component.html',
  styleUrls: ['./ngrx-effects.component.scss']
})
export class NgrxEffectsComponent {

  cbsoftLoginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  currentUser$!: Observable<User | null>

  constructor(private fb: FormBuilder,
    private store: Store<AppState>){
      this.currentUser$ = store.select(getUser)
    }

  onSubmit(){
    if(this.cbsoftLoginForm.valid){
      this.store.dispatch(loginStart({ data: this.cbsoftLoginForm.value as UserLogin }))
    }
  }

}
