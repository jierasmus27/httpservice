import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PostService } from './services/post.service';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
