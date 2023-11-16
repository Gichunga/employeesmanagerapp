import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  // method to get employees from the backend api
  public getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
  }

  // method to add employee to the database
  public addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee);
  }

  // method to update employee in the database
  public updateEmployee(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee);
  }

  // method to delete an employee from the database
  public deleteEmployee(employeeId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`); //in the body of the request, we pass the employee to be deleted
  }

  // method to get employee by id
  public getEmployeeById(employeeId: number): Observable<Employee>{
    return this.http.delete<Employee>(`${this.apiServerUrl}/employee/delete/${employeeId}`); //in the body of the request, we pass the employee to be deleted
  }
}
