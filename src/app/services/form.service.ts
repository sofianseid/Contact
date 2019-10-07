import { Injectable } from '@angular/core';

@Injectable()
export class FormService {

  	private contactValidationMessages = {
		'name': [
		  { type: 'required', message: 'Renseignez votre nom.' },
		  { type: 'NamePattern', message: 'Oups! En lettres uniquement.' }
		],
		'email': [
		  { type: 'required', message: 'Renseignez votre adresse e-mail.' },
		  { type: 'email', message: 'Entrez une adresse e-mail valide.' }
		],
		'message': [
		  { type: 'required', message: 'Renseignez votre message.' }
		]
	};

	constructor() {}

	getContactValidationMessages(name: string): Array<Object> {
		return this.contactValidationMessages[name];
	}
}