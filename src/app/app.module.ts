import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostCardComponent } from './shared/components/post-card/post-card.component';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { PostDashComponent } from './shared/components/post-dash/post-dash.component';
import { GetconfirmComponent } from './shared/components/getconfirm/getconfirm.component';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './shared/components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    PostFormComponent,
    PostDashComponent,
    GetconfirmComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
