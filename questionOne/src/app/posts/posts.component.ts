import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts: any=[];

  public errorMsg:any;
  constructor(private _postService: PostService) { }
  
  ngOnInit(): void {
    this._postService.getPosts()
    .subscribe(data=>this.posts=data,
    )}

}
