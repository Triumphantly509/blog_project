import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://127.0.0.1:8000/api/list-posts/';

  constructor(private http: HttpClient) { }

  getPosts(page: number = 1, pageSize: number = 5) {
    return this.http.get<any>(`${this.apiUrl}?page=${page}&page_size=${pageSize}`);
  }
  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}${id}/`);
  }
}
