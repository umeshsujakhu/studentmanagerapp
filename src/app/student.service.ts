import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Student } from "./student";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiServerUrl}/student`);
  }

  public addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiServerUrl}/student`, student);
  }

  public updateStudent(student: Student, studentId: string): Observable<Student> {
    return this.http.put<Student>(`${this.apiServerUrl}/student/${studentId}`, student);
  }

  public deleteStudent(studentId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/student/${studentId}`);
  }
}
