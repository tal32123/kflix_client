import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { Video } from '../shared/video';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent {
  constructor(private readonly router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {

  }
  params : any;
  id : string = '';
  videoData :  Video = {};
  ngOnInit() {
    const params = this.route?.snapshot?.params;
    this.params = params;
    this.id = this.params?.id || '1';

    this.videoUrl = `http://localhost:3000/videos/stream/${this.id}`;
    //get video data for future (also increases the views for now)
    this.http.get<Video>(`http://localhost:3000/videos/video/${this.id}`).subscribe(result => this.videoData = result);
  }
  @Input() videoUrl = '';

}
