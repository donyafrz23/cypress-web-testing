describe('Web Form Testing', () => {
  beforeEach(() => {
    cy.visit('https://www.selenium.dev/selenium/web/web-form.html')
  })

  it('should fill the text input', () => {
    cy.get('input[name="my-text"]').type('Hello QA')
    cy.get('input[name="my-text"]').should('have.value', 'Hello QA')
  })

  it('should fill the password input', () => {
    cy.get('input[name="my-password"]').type('mypassword')
    cy.get('input[name="my-password"]').should('have.value', 'mypassword')
  })

  it('should select an option from dropdown', () => {
    // Pilih berdasarkan teks "Two"
    cy.get('select[name="my-select"]').select('Two')

    // Verifikasi opsi yang terpilih
    cy.get('select[name="my-select"]').should('have.value', '2')
  })

  it('should check a checkbox', () => {
    cy.get('input[name="my-check"]').check().should('be.checked')
  })

  it('should fill the textarea', () => {
    cy.get('textarea[name="my-textarea"]').type('This is a textarea input')
    cy.get('textarea[name="my-textarea"]').should('have.value', 'This is a textarea input')
  })

  it('should submit the form successfully', () => {
    cy.get('form').click()

    // Setelah submit, biasanya form akan mengarahkan ke halaman baru
    cy.url().should('include', '/web-form.html')
  })
})
