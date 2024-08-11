import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  

  taskForm= new FormGroup({
    task:new FormControl('',[Validators.required]),
  })

  list:any[]=[]
  addTask(data:any){
    this.list.push({id:this.list.length,name:data})
    console.warn(data);
  }

  removeTask(id:number){
    this.list=this.list.filter(item=>item.id!==id);
  }


  get name(){
    return this.taskForm.get('task')
  }

}
