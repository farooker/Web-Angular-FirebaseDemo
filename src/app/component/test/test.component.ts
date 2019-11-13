import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';



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

  private skills:string[]; //ตัวแปร แบบ array

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



