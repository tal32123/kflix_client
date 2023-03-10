import { Component } from '@angular/core';
import {ImageModule} from 'primeng/image';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent {
  public preview = true;
}
