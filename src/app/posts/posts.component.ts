import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts : any
  users : any
  categories : any
  loading = true

  constructor(
    private apiService: ApiService
  ) {
    this.getPostsUsersAndCategories()
   }

  ngOnInit(): void {
  }

  getPostsUsersAndCategories(){
    this.apiService.getPosts().then((posts)=> {
      this.posts = posts
      this.apiService.getUsers().then((users)=> {
        this.users = users
        this.apiService.getCategories().then((categories)=> {
          this.categories = categories
          this.loading = false
          console.log(this.posts, this.users, this.categories)
        })
      })
    })
  }

}
