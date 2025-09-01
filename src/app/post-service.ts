import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://100.106.80.116:8000/api/list-posts/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
