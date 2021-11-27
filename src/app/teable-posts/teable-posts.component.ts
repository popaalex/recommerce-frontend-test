import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teable-posts',
  templateUrl: './teable-posts.component.html',
  styleUrls: ['./teable-posts.component.scss']
})
export class TeablePostsComponent implements OnInit {
  @Input() tableData : any

  constructor() { }

  ngOnInit(): void {
    console.log(this.tableData)
  }

  setStringLengthDisplay(string : string){
    let stringToDisplay

    if(string.length > 15){
      stringToDisplay = string.slice(0, 16) + '...'
    }else {
      stringToDisplay = string
    }

    return stringToDisplay
  }

}
