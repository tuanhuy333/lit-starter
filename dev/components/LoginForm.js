import { LitElement, html, css } from 'lit';
import { FormLoginMixin } from '../mixin/FormLoginMixin.js';

class LoginForm extends FormLoginMixin(LitElement) {
	static styles = css`
		.login-form {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			padding: 2rem;
			border-radius: 4px;
			background-color: #fff;
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
		}
	
		label {
			display: block;
			font-weight: bold;
			margin-bottom: 5px;
		}
	
		input[type="text"],
		input[type="password"] {
			padding: 10px;
			border: 1px solid #ccc;
			border-radius: 4px;
			width: 100%;
		}
	
		button[type="submit"] {
			padding: 10px 20px;
			background-color: #3f51b5;
			color: #fff;
			border: none;
			border-radius: 4px;
			cursor: pointer;
		}

		.error {
			color: red;
			margin-top: 1rem;
		}

		.success-message {
			color: green;
			margin-top: 1rem;
		}
`;

	static properties = {
		username: { type: String },
		password: { type: String },
		errorMessage: { type: String },
	};

	constructor() {
		super();
		this.username = '';
		this.password = '';
		this.errorMessage = '';
	}

	render() {
		return html`
			<div class="login-form">
				${this.errorMessage ? html`<p class="error">${this.errorMessage}</p>` : ''}
				${this.successMessage ? html`<p class="success-message">${this.successMessage}</p>` : ''}
				<form @submit=${this.handleSubmit}>
					<label for="username">Username:</label>
					<input type="text" id="username" name="username" .value=${this.username} @change=${(e) => (this.username = e.target.value)} required />
					<label for="password">Password:</label>
					<input type="password" id="password" name="password" .value=${this.password} @change=${(e) => (this.password = e.target.value)} required />
					<button type="submit">Login</button>
				</form>
			</div>
    `;
	}
}

customElements.define('login-form', LoginForm);
