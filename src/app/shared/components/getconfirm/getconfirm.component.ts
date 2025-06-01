import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-getconfirm',
  templateUrl: './getconfirm.component.html',
  styleUrls: ['./getconfirm.component.scss'],
})
export class GetconfirmComponent implements OnInit {
  msg!: string;
  constructor(
    private matdailg: MatDialogRef<GetconfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.msg = data;
  }

  ngOnInit(): void {}
  Onremove(flag: boolean) {
    this.matdailg.close(flag);
  }
}
