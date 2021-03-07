import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  { path: '',  redirectTo: 'r/popular', pathMatch: 'full' },
  { path: 'r/:subreddit', component: FeedComponent},
  { path: 'r/:subreddit/comments/:id/:title', component: PostDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
