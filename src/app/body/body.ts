import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-service';
import { Post } from '../models/post';

@Component({
  selector: 'app-body',
  templateUrl: './body.html',
  styleUrls: ['./body.css']
})
export class BodyComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }
}
