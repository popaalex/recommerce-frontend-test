import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsComponent } from './posts/posts.component';
import { HeaderComponent } from './header/header.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';


import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    LoadingScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
