import { Component, Input, OnInit } from '@angular/core';
import { DataSharingService } from '../../Shared/Services/data-sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
current!:any;
constructor( private dataSharingService: DataSharingService) { }

isSidenavOpen = false;

ngOnInit(): void {

}
toggleSidebar() {
  this.dataSharingService.toggle();
}}
