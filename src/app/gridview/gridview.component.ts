import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { SelectItem } from 'primeng/api/selectitem';
import {CarouselModule} from 'primeng/carousel';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.scss']
})
export class GridviewComponent {
  public sortOptions: SelectItem[]= [
    {label: 'Price High to Low', value: '!price'},
    {label: 'Price Low to High', value: 'price'}
];
  public videos : any[] = [];

  public sortOrder: number = 1;

  public sortField: string = "";
  public sortKey: string = "";
  constructor(private router: Router,
    private videoService: VideoService) { }
  ngOnInit() {
    this.videoService.getVideos().subscribe((data => this.videos = data));
}
onClickHandler(){
  this.router.navigate(['viewer']);
}
onSortChange(event: any) {
  let value = event.value;

  if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
  }
  else {
      this.sortOrder = 1;
      this.sortField = value;
  }
}


responsiveOptions = [
  {
    breakpoint: '2024px',
    numVisible: 3,
    numScroll: 3
},
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1,
  },

];

  
}
