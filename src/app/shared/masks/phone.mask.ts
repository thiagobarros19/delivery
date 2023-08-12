export function phoneMask(value: string): (string | RegExp)[] {
	if (!value) {
		return ['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
	}
	const numbers = value.replace(/\D/g, '').toString();
	if (numbers.length === 10) {
		return ['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
	}
	return ['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
}

export function phoneMaskStr(value: string): string {
	const phone = value ? value.replace(/\D/g, '') : '';

	if(phone.length === 8){
		return phone.replace(/^(\d{4})(\d{4})/, '$1-$2');
	}

	if(phone.length === 9){
		return phone.replace(/^(\d{5})(\d{4})/, '$1-$2');
	}

	if(phone.length === 10){
		return phone.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
	}

	if(phone.length === 11){
		return phone.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
	}

  return phone;
}
