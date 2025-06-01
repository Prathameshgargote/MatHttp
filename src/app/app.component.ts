import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostFormComponent } from './shared/components/post-form/post-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MatHttp';
constructor(
  private _matdailog:MatDialog
){
}


  Addpost(){
   
  }
}
