import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { Video } from '../shared/video';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent {
  @Input() video : Video= {};
  constructor(private router: Router){}
  onClickHandler(video: any) {
    this.router.navigate(['viewer', { id: video?.id }]);
  }

}
