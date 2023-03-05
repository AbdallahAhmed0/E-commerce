import {   Component, OnInit} from '@angular/core';
import { DataSharingService } from '../../Shared/Services/data-sharing.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {



nameProject!:string;
  constructor(private dataSharingService: DataSharingService){
  }
  public isVisible = false;
  ngOnInit(): void {
    this.nameProject='K-M-A';
    this.dataSharingService.getVisibility().subscribe(isVisible => {
      this.isVisible = isVisible;
    });
  }


}

