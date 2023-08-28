import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Post, PostState } from './post-store/post.state';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { getItems, getPost } from './post-store/post.selector';
import { createPost, deletePost, updatePost } from './post-store/post.actions';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ngrx-store',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatInputModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './ngrx-store.component.html',
  styleUrls: ['./ngrx-store.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgrxStoreComponent {

  dataSource$!: Observable<Post[]>;
  items$!: Observable<number>;
  displayedColumns = [ 'title', 'desc', 'edit', 'delete' ];

  postForm: FormGroup = this.fb.group({
    title: [ '', Validators.required ],
    description: [ '', Validators.required ],
  })

  constructor(private store: Store<{ postItem: PostState }>,
    private fb: FormBuilder){
    this.dataSource$ = this.store.select(getPost);
    this.items$ = this.store.select(getItems);
  }

  deletePost(id: string){
    this.store.dispatch(deletePost({ id }))
  }

  editPost(element: Post){
    const newPost: Post = { title: element.title, description: 'New test here' }
    this.store.dispatch(updatePost({ id: element.title, updatedPost: newPost }))
  }

  createPost(){
    if(this.postForm.valid) this.store.dispatch(createPost({ item: this.postForm.value }));
    this.postForm.reset();
  }

}
