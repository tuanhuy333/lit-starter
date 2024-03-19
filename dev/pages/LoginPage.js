import {LitElement, html, css} from 'lit';
import '../components/LoginForm.js';

class LoginPage extends LitElement {
	static styles = css`
	.login-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		background-color: #f0f0f0;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 2rem;
		text-align: center;
	}
	`;

	handleLoginSuccess(event) {
		// Handle successful login (e.detail contains login data)
		console.log('Login successful!123', event.detail);
		// You can redirect to another page or perform further actions here
	}

	render() {
		return html`
			<div class='login-page'>
				<h1>Welcome!</h1>
				<login-form @login-success='${this.handleLoginSuccess}'></login-form>
			</div>
			`;
	}

}
customElements.define('login-page', LoginPage);
