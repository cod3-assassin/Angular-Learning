import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  isDiv1Visable:boolean = false;
  isDiv2visible:string ="No";
  dayName:string = "";
  cityList:string[]=["Pune","Mumbai","Nashik" ,"Jalna"]


  studenList:any[] =[
    {
      studId:1,name:"AAA",mobile:"9999999999" ,city:"Pune" ,isActive:false
    },
    {
      studId:1,name:"BBB",mobile:"8888888888" ,city:"Nashik" ,isActive:false
    },
    {
      studId:1,name:"CCC",mobile:"7777777777" ,city:"Mumbai" ,isActive:true
    },
    {
      studId:1,name:"DDD",mobile:"6666666666" ,city:"Dehli" ,isActive:true
    },
    {
      studId:1,name:"EEE",mobile:"5555555555" ,city:"Jaipur" ,isActive:false
    }
  ]

  showHideDiv1(isShow:boolean){
    this.isDiv1Visable = isShow;
  }

  

}
