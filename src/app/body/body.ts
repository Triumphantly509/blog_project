import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../post-service';
import { Post } from '../models/post';
import { RouterModule } from '@angular/router';
import { StripHtmlPipe } from '../pipes/strip-html-pipe';

@Component({
  selector: 'app-body',
  imports: [CommonModule, RouterModule, StripHtmlPipe],
  templateUrl: './body.html',
  styleUrls: ['./body.css']
})
export class BodyComponent implements OnInit {
  posts: Post[] = [];
  expanded: boolean[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
      this.expanded = new Array(data.length).fill(false);
    });
  }

  toggleExpand(index: number): void {
    this.expanded[index] = !this.expanded[index];
  }
}
