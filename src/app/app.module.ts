import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { GridviewComponent } from './gridview/gridview.component';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { ViewerComponent } from './viewer/viewer.component';
import { HttpClientModule } from '@angular/common/http';
import { FabComponent } from './fab/fab.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [
    AppComponent,
    ThumbnailComponent,
    GridviewComponent,
    ViewerComponent,
    FabComponent,
    UploadFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataViewModule,
    RippleModule,
    ReactiveFormsModule,
    FileUploadModule,
    CarouselModule,
    ImageModule,
    FormsModule,
    HttpClientModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
