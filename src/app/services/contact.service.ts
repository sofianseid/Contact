import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContactService {

	constructor(private httpClient: HttpClient){}

	sendMessage(data: Array<string>): Observable<string> {
	
		return this.httpClient.post<string>('https://jsonplaceholder.typicode.com/posts', data);
	}


}
