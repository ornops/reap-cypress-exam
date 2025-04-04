describe('User Registration', () => {
	beforeEach(() => {
		cy.visit('/register'); // Change to actual URL
	});

	it('should complete registration successfully', () => {
		// Fill First and Last Name
		cy.get('#firstName').type('John');
		cy.get('#lastName').type('Doe');
		cy.get('#email').type('test@test.com');
		cy.get('#phone').type('123456789');
		cy.get('#password').type('randompassword');

		// // Select Country of Incorporation
		// cy.get('select').select('Hong Kong');

		// // Enter Email
		// cy.get('input[type="email"]').type('johndoe@example.com');

		// // Enter Phone Number
		// cy.get('input[type="tel"]').type('09051234567');

		// // Enter Password
		// cy.get('input[type="password"]').type('SecureP@ssw0rd');

		// // Verify Cloudflare Captcha (Mocked)
		// cy.get('iframe') // Assuming captcha iframe exists
		// 	.then($iframe => {
		// 		const $body = $iframe.contents().find('body');
		// 		cy.wrap($body).find('.recaptcha-checkbox').click();
		// 	});

		// // Click Sign Up
		// cy.get('button').contains('Sign up').click();

		// // Assert Success (Modify as needed)
		// cy.contains('Success!').should('be.visible');
	});
});