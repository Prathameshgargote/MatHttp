import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { MatDialog } from '@angular/material/dialog';
import { PostFormComponent } from '../post-form/post-form.component';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  ClientId!: string | null;
  ClientObj!: any;
  constructor(
    private _postservice: PostService,
    private _activetRoute: ActivatedRoute,
    private _matdailog: MatDialog,
    private _router: Router,
    private _snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.ClientId = this._activetRoute.snapshot.paramMap.get('id');
    console.log(this.ClientId);

    if (this.ClientId) {
      this._postservice.getSinglePost(this.ClientId).subscribe((res) => {
        console.log(res);
        this.ClientObj = { ...res, Id: this.ClientId };
        console.log(this.ClientObj);
      });
    }
  }

  onedit() {
    let matdailogtref = this._matdailog.open(PostFormComponent, {
      width: '60%',
      height: '60%',
      disableClose: true,
      data: {
        edit: 'edit',
        data: this.ClientObj,
      },
    });
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  isObject(value: any): boolean {
    return value && typeof value === 'object' && !Array.isArray(value);
  }

  Onremove() {
    let matdailogref = this._matdailog.open(GetconfirmComponent, {
      width: '500px',
      disableClose: true,
      data: `Are you sure ! You want to remove ${this.ClientObj.name}`,
    });

    matdailogref.afterClosed().subscribe((res) => {
      if (res) {
        this._postservice.remove(this.ClientObj).subscribe((res) => {
          console.log(res);
          this._router.navigate(['postdash']);
          this._snackbar.opensnack(
            ` the client Remove ${this.ClientObj.name} is Succesfully`
          );
        });
      }
    });
  }
}
