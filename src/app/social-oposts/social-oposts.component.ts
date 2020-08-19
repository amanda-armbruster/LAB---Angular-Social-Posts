import { Component, OnInit } from '@angular/core';
import { Post } from '../interfacess/post';

@Component({
  selector: 'app-social-oposts',
  templateUrl: './social-oposts.component.html',
  styleUrls: ['./social-oposts.component.css'],
})
export class SocialOpostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'hello',
      thought: 'there',
    },
    {
      title: 'hi',
      thought: 'you',
    },
    {
      title: 'bonjour',
      thought: 'mon ami',
    },
  ];

  showForm: boolean = false;

  constructor() {}

  onDelete(index: number) {
    this.posts.splice(index, 1);
  }

  onSubmit(post: Post) {
    this.posts.unshift(post);
    this.toggleForm();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  ngOnInit(): void {}
}
