import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teable-header',
  templateUrl: './teable-header.component.html',
  styleUrls: ['./teable-header.component.scss']
})
export class TeableHeaderComponent implements OnInit {
  tableHeadInfo = [
    {
      cellBody: 'Id',
      cellWidth: '5',
      cellClass: 'cell-with-border-lr',
    },
    {
      cellBody: 'Title',
      cellWidth: '15',
      cellClass: 'cell-with-border',
    },
    {
      cellBody: 'Post',
      cellWidth: '15',
      cellClass: 'cell-with-border',
    },
    {
      cellBody: 'Author',
      cellWidth: '15',
      cellClass: 'cell-with-border',
    },
    {
      cellBody: 'Categories',
      cellWidth: '15',
      cellClass: 'cell-with-border',
    },
    {
      cellBody: 'Views',
      cellWidth: '15',
      cellClass: 'cell-with-border',
    },
    {
      cellBody: 'Likes',
      cellWidth: '15',
      cellClass: 'cell-with-border',
    },
    {
      cellBody: 'Action',
      cellWidth: '5',
      cellClass: 'cell-with-border',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
