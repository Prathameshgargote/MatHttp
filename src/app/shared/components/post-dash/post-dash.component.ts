import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostFormComponent } from '../post-form/post-form.component';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-dash',
  templateUrl: './post-dash.component.html',
  styleUrls: ['./post-dash.component.scss'],
})
export class PostDashComponent implements OnInit {
  constructor(private matdailog: MatDialog, private Postservice: PostService) {}
  ClientArr: Array<any> = [];
  ngOnInit(): void {
    this.fetchAll();
  }

  fetchAll() {
    this.Postservice.fetchALlClient().subscribe((res) => {
      this.ClientArr = res;
      console.log(res);
      
    });
  }

  Addpost() {
    let matdailogRef = this.matdailog.open(PostFormComponent, {
      width: '60%',
      height: '60%',
      disableClose: true,
    });
    matdailogRef.afterClosed().subscribe((res) => {
      console.log(res);
      if (res) {
        this.ClientArr.push(res);
      }
    });
  }
}
