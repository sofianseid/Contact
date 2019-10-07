import { FormControl, Validators } from '@angular/forms';

const NameRegex = new RegExp("^[a-zA-zéèÉÈç\\s'\"-]*$");

export class NameValidator {

	static NamePattern(fc: FormControl): {[key: string]: boolean} | null {

		if (!NameRegex.test(fc.value)) return {NamePattern: true};

		return null;
	}
}