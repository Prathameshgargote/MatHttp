import { Component, Inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PostService } from '../../services/post.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  postForm!: FormGroup;
  postObj!: any;
  iseditmode: boolean = false;
  constructor(
    private Postservice: PostService,
    private _activatedrouter: ActivatedRoute,
    private _matDailogref: MatDialogRef<PostFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Route: Router
  ) {}

  ngOnInit(): void {
    this.createform();
    this.patchVAlue();
    // console.log(this.postObj);
  }
  patchVAlue() {
    this.postObj = this.data.data;
    this.iseditmode = this.data.edit ? true : false;
    if (this.postObj) {
      this.postForm.patchValue(this.postObj);
    }
  }

  createform() {
    this.postForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      client: new FormControl(null, [Validators.required]),
      code: new FormControl(null, [Validators.required]),
      contact: new FormControl(null, [Validators.required]),
      GstNo: new FormControl(null, [Validators.required]),
      PanNo: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      adress: new FormGroup({
        Country: new FormControl(null, [Validators.required]),
        state: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        pincode: new FormControl(null, [Validators.required]),
      }),
    });
  }

  OnSubmit() {
    if (this.iseditmode) {
      let updateObj = { ...this.postForm.value, Id: this.postObj.Id };
      console.log(updateObj);
      this.Postservice.updatePost(updateObj).subscribe((res) => {
        this._matDailogref.close(updateObj);
        this.Route.navigate(['postdash']);
      });
    } else {
      let clientObj = this.postForm.value;
      console.log(clientObj);
      this.Postservice.AddClient(clientObj).subscribe((res) => {
        console.log(res);
        console.log({ ...clientObj, Id: res.name });
        this._matDailogref.close({ ...clientObj, Id: res.name });
      });
    }
  }

  onclose() {
    this._matDailogref.close();
  }
}
