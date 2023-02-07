import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MaterialModule } from '../../material/material.module';
import { HeaderComponent } from '../header/header.component';
import { AppModule } from '../../app.module';


@NgModule({
    declarations: [
        SidebarComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports:[SidebarComponent]
})
export class AdminLayoutModule { }
