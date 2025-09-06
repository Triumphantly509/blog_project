import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post-service';
import { Post } from '../models/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule],
  templateUrl: './post-detail.html',
  styleUrls: ['./post-detail.css']
})
export class PostDetailComponent implements OnInit {
  post: Post | null = null;
  isLoading = true;

  constructor(
  private route: ActivatedRoute,
  private postService: PostService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));  
    this.postService.getPostById(id).subscribe({
      next: (data) => {
        this.post = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
}
