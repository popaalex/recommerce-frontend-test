import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeableHeaderComponent } from './teable-header.component';

describe('TeableHeaderComponent', () => {
  let component: TeableHeaderComponent;
  let fixture: ComponentFixture<TeableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeableHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
