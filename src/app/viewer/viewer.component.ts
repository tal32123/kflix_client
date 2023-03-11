import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent {
  constructor(private readonly router: Router,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit() {

  }
  @Input() videoUrl = 'http://localhost:3000/videos/stream/1';
}
