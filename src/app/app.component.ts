import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'databinding';
  message="yadav"
  getValue(){
    return "get function data"
  }
  getName(name:string,secondName:string){
    alert(name)
    alert(secondName)
  }
  // using event
  getData(val:string){
    console.warn (val)
  }
}
