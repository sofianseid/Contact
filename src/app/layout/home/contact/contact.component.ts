import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../../services/form.service';
import { ContactService } from '../../../services/contact.service';
import { NameValidator } from '../../../validators/name.validator';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	progress: boolean = false;
	
	sendMessageForm: FormGroup;

	constructor(private formBuilder: FormBuilder, private formService: FormService, private contactService: ContactService, private notifications: NotificationsService) { }

	ngOnInit() {
		this.initForm();
	}

  	initForm() {    

	    this.sendMessageForm = this.formBuilder.group({
	      	name: ['', [Validators.required, NameValidator.NamePattern]],
      		email: ['', [Validators.required, Validators.email]],
      		message: ['', [Validators.required]],
		  	newsletter: [false]
	    });
  	}

  	onSubmitForm() {
    	this.progress = true;
	    const formValue = this.sendMessageForm.value;
		this.sendMessageForm.disable();
	    this.contactService.sendMessage(formValue).subscribe(
			(res) => {
				this.notifications.success('', 'Message envoyé. Merci.');
				this.sendMessageForm.enable();
				this.progress = false;
			},
			(err) => {
				this.notifications.error('', err.error);
				this.sendMessageForm.enable();
				this.progress = false;
			}
    	);
  	}

  	getValidationMessages(name: string): Array<Object> {
  		return this.formService.getContactValidationMessages(name);
  	}
}
