import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoModel } from '../model/Vidoe';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  apiUrl:string = "https://projectapi.gerasim.in/api/OnlineLearning/"

  constructor(private http:HttpClient) { }

  getVideos(){
   
      return this.http.get(this.apiUrl +"GetAllvideos")
  }

  saveVideo(obj:VideoModel){
   return   this.http.post(this.apiUrl +"AddNewVideo" ,obj)
  }

  updateVideo(obj:VideoModel){
    return   this.http.put(this.apiUrl +"UpdateVideo" ,obj)
   }

   deleteVideo(id:number){
    return   this.http.delete(this.apiUrl +"DeleteVideo?videoId="+id)
   }
}
