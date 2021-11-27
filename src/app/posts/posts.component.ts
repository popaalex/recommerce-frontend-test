import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any;
  loading = true;
  tableData: any;

  constructor(private apiService: ApiService) {
    this.getPosts();
  }

  ngOnInit(): void {}

  // AsyncForEach

  async asyncForEach(array: any, callback: any) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  getPosts() {
    this.apiService.getPosts().then((posts) => {
      this.posts = posts;
      this.transformTableData()
    });
  }

  transformTableData() {
    let postIndex = 0;
    this.posts.map((post: any) => {
      let user;
      this.apiService.getUserById(post.userId).then((userReceived: any) => {
        user = userReceived;
        post.displayName = user.firstName + ' ' + user.lastName;
        this.apiService
          .getCategoryById(post.categoryId)
          .then((categoryReceived: any) => {
            post.displayCategory = categoryReceived.name;
            postIndex++;
            console.log(postIndex);
            if (this.posts.length === postIndex) {
              this.tableData = this.posts;
              console.log(this.tableData);
              this.loading = false;
            }
          });
      });
    });
  }
}
