/// <reference types="cypress" />

import Login from "../../support/selectors2"
const login = new Login

describe('Job Titles',()=>{

    it('Check add job title',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        login.username()
        login.password()
        login.btnLogin()
        cy.get(':nth-child(1) > .oxd-main-menu-item')
          .should('be.visible')
          .click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item')
          .should('contain','Job')
          .click()
        cy.wait(1000)
        cy.get('ul[class="oxd-dropdown-menu"]')
          .find('li')
          .contains('Job Titles')
          .click()
        cy.contains('Add')
          .click()
        cy.get(':nth-child(2) > .oxd-input')
          .type('QA auto1')
        cy.contains('Save')
          .click()
})
})