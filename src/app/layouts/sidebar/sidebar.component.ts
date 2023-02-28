import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav

nameProject!:string;
  constructor(private observer:BreakpointObserver,
              private cd:ChangeDetectorRef){

  }
  ngOnInit(): void {
    this.nameProject='K-M-A';
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode='over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
    });
    this.cd.detectChanges();

  }



}

