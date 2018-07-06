import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  private url = 'http://jsonplaceholder.typicode.com/posts';
  posts: any[];

  constructor(private http: Http) {
    http.get(this.url).subscribe(response => {
      this.posts = response.json();
    });
  }

  



}
