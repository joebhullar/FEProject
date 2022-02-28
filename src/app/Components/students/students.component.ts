import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentsArr: any;
  studentSearchArr:any;
  searchValue:string;
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

  searchForStudent(searchValue:string){
    var results = [];
    var searchField = "firstName";
    var searchVal = searchValue; //Object.keys(myObject).length;
    for (var i=0 ; i < Object.keys(this.studentsArr).length ; i++)
    {
        // if (this.studentsArr[i][searchField] == searchVal) {
        if (this.studentsArr[i][searchField].search(searchVal)==0) {
            results.push(this.studentsArr[i]);
        }
        else if (this.studentsArr[i]["lastName"].search(searchVal)==0) {
          results.push(this.studentsArr[i]);
        }
        else{
          console.log(" NO BINGO searchValue IS ", searchValue)
          console.log("results VALUE ELSE STATEMENT ", results);
        }
    }
    this.studentSearchArr = results;
    return results;
  }


  ngOnInit(): void {
  }

}
