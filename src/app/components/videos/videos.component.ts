import { Component, inject, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { VideoModel } from '../../model/Vidoe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-videos',
  imports: [FormsModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit {

  videoList:VideoModel []=[]
  videoObj:VideoModel = new VideoModel()
  videoSrv = inject(VideoService)

ngOnInit(): void {
 
  this.getVideos()
}
  getVideos(){
    
    this.videoSrv.getVideos().subscribe((result:any)=>{
      this.videoList = result.data

    })
  }
  onEdit(data:VideoModel){
    this.videoObj = data

  }
  onSavevideo(){
   
    this.videoSrv.saveVideo(this.videoObj).subscribe((result:any)=>{
      if(result.result){
        alert("Vidoe saved success !")
      }else{
        alert(result.message)
      }
    })
  }

  onUpdatevideo(){
   
    this.videoSrv.updateVideo(this.videoObj).subscribe((result:any)=>{
      if(result.result){
        alert("Vidoe Updated success !")
      }else{
        alert(result.message)
      }
    })

  }
  onDelete(id:number){
    const isDelete = confirm("Are you sure want to Delete");
    if(isDelete){
      this.videoSrv.deleteVideo(id).subscribe((result:any)=>{
        if(result.result){
          alert("Vidoe Deleted success !")
        }else{
          alert(result.message)
        }
      })
    }
  }
}
