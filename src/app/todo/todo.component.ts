import { Component, OnInit, Inject } from '@angular/core';




export class todo {
  constructor(@Inject(String) private fName:string,@Inject(String) private lName: string, @Inject(Number) private age:number, @Inject(Date) private tdate: Date){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.tdate = tdate;
  }
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  tableData = [ new todo("suyash", "gupta" , 25, new Date()),new todo("suyash", "gupta" , 25, new Date()), new todo("suyash", "gupta" , 25, new Date())]

  constructor() { }

  ngOnInit(): void {
  }

}
