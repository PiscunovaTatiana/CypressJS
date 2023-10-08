/// <reference types="cypress" />
import Login from "../../support/selectors2"
const login = new Login
Cypress.Commands.add('loginWithUserPassword',()=>{
  login.username();
  login.password();
  login.btnLogin();
});
describe('Test Web Site',()=>{

    it('Check Add Job Titles',()=>{
        cy.visit('/')
        cy.loginWithUserPassword()
        cy.contains('Admin')
          .should('be.visible')
          .click()
        cy.contains('Job')
          .should('be.visible')
          .click()
        cy.get('ul[class="oxd-dropdown-menu"]')
          .find('li')
          .each(($li) =>{
            const text =$li.text
            expect($li.text()).to.be.not.empty; }) 
          .contains('Job Titles')
          .click()
        cy.contains('Add')
          .click()
        cy.get('input[class="oxd-input oxd-input--active"]')
          .eq(1)
          .type('Tester')
          .should('have.value','Tester')
        cy.contains('Save')
          .click({force: true})       
      })

    it('Check Delete Pay Grades',()=>{
        cy.visit('/')
        cy.loginWithUserPassword()
        cy.contains('Admin')
        .should('be.visible')
        .then(($Adm) =>{
         cy.wrap($Adm).contains('Admin')})
          .click()
        cy.contains('Job')
          .click()
        cy.get('ul[class="oxd-dropdown-menu"]')
          .find('li')
          .each(($li) =>{
            const text =$li.text
            expect($li.text()).to.be.not.empty; })
          .contains('Pay Grades')
          .click()
        cy.get('[class$="-action-space"] i[class$="bi-trash"]')
          .eq(1)
          .click()
        cy.get('[class$="-danger orangehrm-button-margin"]')
          .click()
      })
      
    it('Check Edit Employment Status',()=>{
        cy.visit('/')
        cy.loginWithUserPassword()
        cy.contains('Admin')
          .click()
        cy.contains('Job')
          .click()
        cy.get('ul[class="oxd-dropdown-menu"]')
          .find('li')
          .each(($li) =>{
            const text =$li.text
            expect($li.text()).to.have.length.above(0); })
          .contains('Employment Status')
          .click()
        cy.get('[class$="-action-space"] [class$="-pencil-fill"]')
          .eq(1)
          .click({force:true})
        cy.get(':nth-child(2) > .oxd-input')
          .clear()
          .type('Full-Time Contract')
        cy.contains('Save')
          .should('be.visible')
          .click()
     })
                    
     it('Check Add Job',()=>{
        cy.visit('/')
        cy.loginWithUserPassword()
        cy.contains('Admin')
          .click()
        cy.contains('Job')
          .click()
        cy.get('ul[class="oxd-dropdown-menu"]')
          .find('li')
          .each(($li) =>{
            const text =$li.text
            expect($li.text()).to.have.length.above(0) })
          .contains('Job Categories')
          .click()
        cy.contains('Add')
          .should('be.visible')
          .click()
        cy.get('input[class*="oxd-input"]')
          .eq(1)
          .type('Works')
          .should('have.value','Works')
        cy.contains('Save')
          .should('be.visible')
          .trigger('click')
          .click()
      })

     it('Check Click Like',()=>{
        cy.visit('/')
        cy.loginWithUserPassword()
        cy.contains('Buzz')
          .should('be.visible')
          .click()
        cy.get('div[class$="post-body-picture"]')
          .eq(3)
          .click()
        cy.get('#heart')
          .click({force: true})
      })

     it('Check Add Comment',()=>{
        cy.visit('/')
        cy.loginWithUserPassword()
        cy.contains('Buzz')
          .click()
        cy.get('div[class$="post-body-picture"]')
          .eq(3)
          .click()
        cy.get(':nth-child(2) > .oxd-input')
          .type("Cool!!!{enter}")
          .should('have.value','Cool!!!')
      })

     it('Check Delete Comment',()=>{
        cy.visit('/')
        cy.loginWithUserPassword()
        cy.contains('Buzz')
          .should('be.visible')
          .click()
        cy.get('div[class$="post-body-picture"]')
          .eq(3)
          .click()
        cy.get('p[class$="post-comment-action"]')
          .eq(2)
          .click()
        cy.get('[class$="-danger orangehrm-button-margin"]')
          .click()
      })

     it('Check Share Video',()=>{
        cy.visit('/')
        cy.loginWithUserPassword()
        cy.contains('Buzz')
          .should('be.visible')
          .click()
        cy.contains("Share Video")
          .should('be.visible').then(($sub)=>{
          cy.wrap($sub).contains('Share Video')})
          .click()
        cy.get('textarea[class$="textarea--resize-vertical"]')
          .type("https://www.youtube.com/watch?v=Lx3kZCbFAWI")
        //cy.contains("Share")
          //.click()
      })
                                                  
      it('Check Add Post',()=>{
        cy.visit('/')
        cy.loginWithUserPassword()
        cy.contains('Buzz')
          .should('be.visible')
          .then(($Bz) =>{
          cy.wrap($Bz).contains('Buzz')})
          .click()
        cy.get('div[class$="buzz-post--active"]')
          .type('Hello')
        cy.contains("Post")
          .should('be.visible')
          .trigger('click')
          .click()
      })


      /*it('Check Add Attachment',()=>{
          cy.visit('/')
          cy.loginWithUserPassword()
          cy.contains('My Info').click()
          cy.contains('Emergency Contacts').click({force:true})
          cy.get('button[class$="oxd-button--text"]').eq(1).click()
          cy.get('div[class="oxd-file-button"]').click()
      })*/

      /*it('Check Add License Expiry Date',()=>{
          cy.visit('/')
          cy.loginWithUserPassword()
          cy.contains('My Info').click()
          cy.contains("Personal Details").click()
      })*/

      //I have questions here

    })