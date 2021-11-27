import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeablePostsComponent } from './teable-posts.component';

describe('TeablePostsComponent', () => {
  let component: TeablePostsComponent;
  let fixture: ComponentFixture<TeablePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeablePostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeablePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
