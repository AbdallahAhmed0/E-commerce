import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialoge',
  templateUrl: './dialoge.component.html',
  styleUrls: ['./dialoge.component.scss']
})
export class DialogeComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: any }) { }

  ngOnInit(): void {
  }

}
