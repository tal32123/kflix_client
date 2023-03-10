import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridviewComponent } from './gridview/gridview.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { ViewerComponent } from './viewer/viewer.component';

const routes: Routes = [ 
  { path: '', component: GridviewComponent },
{ path: 'viewer', component: ViewerComponent },
{ path: '**', component: GridviewComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
