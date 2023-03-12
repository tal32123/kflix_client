import { Injectable } from '@angular/core';
import { Video } from './shared/video';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {GET_TOP_VIDEOS_URL} from './shared/urls.consts'
@Injectable({
  providedIn: 'root'
})

export class VideoService {
   
  constructor(private http: HttpClient) { }
  getVideos(): Observable<Video[]> {
      return this.http.get<Video[]>(GET_TOP_VIDEOS_URL);
  }
}
