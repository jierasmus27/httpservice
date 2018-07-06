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

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = "";

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id;

        this.posts.splice(0, 0, post);
      }
    );
  }

  updatePost(post) {
    this.http.patch(this.url + "/" + post.id, JSON.stringify({isRead: true}))
      .subscribe(response => {
        console.log(response.json());
      });
  }


}
