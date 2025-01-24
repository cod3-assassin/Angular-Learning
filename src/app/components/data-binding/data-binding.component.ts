import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName:string = "Angular course";
  courseDuration:number = 2;
  nameMinLength:number = 5;
  myInputType:string="checkbox";
  primaryClassName = "text-danger";

  showMessage(){
    alert("Wlecome to course ")
  }

  onStateChange(event:any){
    debugger;
    const name = event.target?.['value']
    alert("State Changed !" +name)
  }
onMouseEnter(){
  console.log("Mouse Entered !")
}

onMouseLeave(){
  console.log("Mouse Leave !")
}

showLanguageName(name:string){
  alert(name)

}
}
