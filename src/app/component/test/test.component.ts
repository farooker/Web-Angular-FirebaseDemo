import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { ApiTodoService} from '../../service/api-todo.service'
import { from } from 'rxjs';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private name:string;
  private age:number;
  private email:string;
  
  private address:{   // ตัวแปร แบบ dictionnary       
        street:string,
        city:string,
        province:string,
        postcode:string
      } 
  private LoadApiTodo : Model_Apitodo[];
  private skills:string[]; //ตัวแปร แบบ array
  constructor(private ApiService:ApiTodoService){}
  ngOnInit() {
    this.name ="Panuwat Code Dev";
    this.age =24;
    this.email="farookstyle.bnk@gmail.com";

    this.address ={

      street:"koh lanta",
      city:"Klongyang",
      province:"krabi",
      postcode:"81120"
    }
    this.skills=["PHP","C#","JS","JAVA","Html"];
     // call service APi
    this.ApiService.LoadApiTodo().subscribe((res)=>{
       this.LoadApiTodo = res;
    });

  }
  addSkill(skill)
  {
    this.skills.unshift(skill);  //เพิ่มข้อมูลใน array skills
    return false;
  }
  DeleteSkill(skill)
  {
    this.skills.forEach((element,index)=>{
       if(element==skill)
       {
           this.skills.splice(index,1);   // ลบในAray
       }
    });
  }
}
interface Model_Apitodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


