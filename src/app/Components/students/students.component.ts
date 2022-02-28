import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentsArr: any;
  constructor(private objStudentService:StudentService) { 
    this.objStudentService.getAllStudentsFromObservable().subscribe((data=>{
      this.studentsArr = data["students"]; 
      console.log("studentsArr is ", this.studentsArr);
    }));    
  }
  
  getAvgForStudent(studentArray:any)
  {
    let avg:number =0;
    for( let i =0; i< 8; i++)
    {
        avg = avg + Number(studentArray.grades[i]);
    }
    return avg/8;
  }
  ngOnInit(): void {
  }

}
