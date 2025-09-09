import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../post-service';
import { Post } from '../models/post';
import { RouterModule } from '@angular/router';
import { StripHtmlPipe } from '../pipes/strip-html-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  imports: [CommonModule, RouterModule, StripHtmlPipe, FormsModule],
  templateUrl: './body.html',
  styleUrls: ['./body.css']
})
export class BodyComponent implements OnInit {
  posts: Post[] = [];
  expanded: boolean[] = [];

  //pagination
  currentPage: number = 1;
  totalPages: number = 1;
  pageSize: number = 12;
  pageSizeOptions: number[] = [12, 20, 24, 50];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadPosts(1);
  }

  loading: boolean = false; // spinner state

  loadPosts(page: number): void {
    this.postService.getPosts(page, this.pageSize).subscribe(data => {
      this.posts = data.results;  // use results array from DRF
      this.expanded = new Array(this.posts.length).fill(false);
      this.currentPage = page;
      this.totalPages = Math.ceil(data.count / this.pageSize);
    });
  }

  toggleExpand(index: number): void {
    this.expanded[index] = !this.expanded[index];
  }

  getPages(): (number | '...')[] {
  const pages: (number | '...')[] = [];
  const total = this.totalPages;
  const current = this.currentPage;

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    pages.push(1);
    if (current > 4) pages.push('...');

    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
      pages.push(i);
    }

    if (current < total - 3) pages.push('...');
    pages.push(total);
  }

  return pages;
}

  changePageSize(newSize: number): void {
    this.pageSize = newSize;
    this.loadPosts(1); // reset to first page
  }

}
