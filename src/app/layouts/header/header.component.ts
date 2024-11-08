import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DataSharingService } from '../../Shared/Services/data-sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private dataSharingService: DataSharingService) { }


ngOnInit(): void {

}
@Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidenav() {
    this.toggleSidebar.emit();
  }

}
