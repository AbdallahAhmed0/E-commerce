import {  ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  @ViewChild('sidenav') sidenav!: MatSidenav;

nameProject!:string;
  constructor(){
  }
  ngOnInit(): void {
    this.nameProject='K-M-A';
  }

}

