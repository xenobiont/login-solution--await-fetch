// Your code here

const form = document.querySelector('#login-form');

form.addEventListener('submit', async function(event) {
	event.preventDefault();
	try {
		const response = await fetch('https://danit.com.ua/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: this.querySelector('[name="email"]').value,
				password: this.querySelector('[name="password"]').value,
			}),
		});
		if (!response.ok) throw new Error('что-то поломалось');
		const result = await response.json();
		console.log(result);
		if (result.status === 'Success') {
			this.insertAdjacentHTML('afterend', '<span>Вы авторизированы!</span>');
			localStorage.setItem('token', result.token);
		} else {
			this.insertAdjacentHTML(
				'afterend',
				'<span>Логин или пароль неверные, попробуйте еще раз</span>',
			);
		}
	} catch (e) {
		console.log(e);
	}
});

(async function() {
	const request = await fetch('https://danit.com.ua/cases', {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	});
	const result = await request.json();
	console.log(result);
})();
