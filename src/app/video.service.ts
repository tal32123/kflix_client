import { Injectable } from '@angular/core';
import { Video } from './shared/video';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class VideoService {
  private readonly baseURL = "http://localhost:3000";


   
  constructor(private http: HttpClient) { }
  getVideos(): Observable<Video[]> {
      return this.http.get<Video[]>(`${this.baseURL}/videos/getTopVideos`);
  }
}
