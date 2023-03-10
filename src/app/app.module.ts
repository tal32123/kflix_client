import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { GridviewComponent } from './gridview/gridview.component';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import {DataViewModule} from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { ViewerComponent } from './viewer/viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ThumbnailComponent,
    GridviewComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataViewModule,
    RippleModule,
    CarouselModule,
    ImageModule,
    FormsModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
