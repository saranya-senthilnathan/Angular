import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeType } from './employee-type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	baseUrl = "http://localhost:8080/test.php";
	
	constructor(private http:HttpClient) {}
	
	/* createEmployee(employee:EmployeeType):Observable<EmployeeType>{
		let httpHeaders = new HttpHeaders({
			'Content-Type': 'application/json',
		});
		
		let options = {headers : httpHeaders};
		console.log(JSON.stringify(employee));
		
		return this.http.post<EmployeeType>(this.baseUrl,JSON.stringify(employee),options);
	} */
	
	createEmployee(employee:EmployeeType):Observable<EmployeeType>{
		let httpHeaders = new HttpHeaders({
			'Content-Type' : 'application/json',
			'Access-Control-Allow-Origin' : '*'
		});
		let options = {headers : httpHeaders};
		
		return this.http.post<EmployeeType>(this.baseUrl,JSON.stringify(employee),options);
		
	}
  
}
