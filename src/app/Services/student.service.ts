import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/Student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

   getAllStudentsFromObservable():Observable<Student[]>
   {
      return this.http.get<Student[]>("https://api.hatchways.io/assessment/students");
   }


}
