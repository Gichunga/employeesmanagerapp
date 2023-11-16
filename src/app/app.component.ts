import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  public employees: Employee[] = []; // public property to hold all the employees returned

  ngOnInit(): void { // whenever this component is initialized, call the getEmployees method. It has no return type
    this.getEmployees();
  }
  constructor(private employeeService: EmployeeService) { }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe( // listen for data coming from the backend, and if there is, execute below code
      (response: Employee[]) => { // if we get a response, assign it to the employee variable we created above
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error);
      }
    );
  }
}