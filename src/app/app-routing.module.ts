import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDashComponent } from './shared/components/post-dash/post-dash.component';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { PostComponent } from './shared/components/post/post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'postdash',
    pathMatch: 'full',
  },
  {
    path: 'postdash',
    component: PostDashComponent,
  },
    {
    path: 'postdash/:id',
    component: PostComponent,
  },
    {
    path: 'postdash/:id/edit',
    component: PostFormComponent,
  },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
