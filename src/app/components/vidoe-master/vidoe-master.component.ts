import { Component, inject, NgModule } from '@angular/core';
import { VideoModel } from '../../model/Vidoe';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoService } from '../../services/video.service';


@Component({
  selector: 'app-vidoe-master',
  imports: [ReactiveFormsModule],
  templateUrl: './vidoe-master.component.html',
  styleUrl: './vidoe-master.component.css'
})
export class VidoeMasterComponent {



  videoList:VideoModel []=[]
  
  videoSrv = inject(VideoService)



  vidoeFrom:FormGroup = new FormGroup({

    videoId:new FormControl(0),
    videoUrl:new FormControl(""),
    videoTitle:new FormControl(""),
    videoDescription:new FormControl(""),
    videoThumbnail:new FormControl(""),
    totalDuration:new FormControl(""),
  })


ngOnInit(): void {
 
  this.getVideos()
}




  getVideos(){
    
    this.videoSrv.getVideos().subscribe((result:any)=>{
      this.videoList = result.data

    })
  }
  onEdit(data:VideoModel){
    // this.videoObj = data

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

  onSave(){
   
    const formValue = this.vidoeFrom.value;
    this.videoSrv.saveVideo(formValue).subscribe((result:any)=>{
      if(result.result){
        alert("Vidoe saved success !")
      }else{
        alert(result.message)
      }
    })
  }

}