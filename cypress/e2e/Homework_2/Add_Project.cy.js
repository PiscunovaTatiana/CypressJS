/// <reference types="cypress" />

import Login from "../../support/selectors2"
const login = new Login

describe('Add project',()=>{

    it('Check Add project',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        login.username()
        login.password()
        login.btnLogin()
        cy.get(':nth-child(4) > .oxd-main-menu-item')
           .should('be.visible')
           .click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)')
           .click()
        cy.get('ul[class="oxd-dropdown-menu"]')
           .find('li')
           .contains('Projects')
           .click()
        cy.contains('Add')
           .click()
        cy.get(':nth-child(2) > .oxd-input')
           .type('GlobalBBB')
        cy.get('.oxd-textarea')
           .type('Description')
        cy.get('input[placeholder="Type for hints..."]')
          .first()
          .click()
          .type('ABCDE')
        cy.wait(2000)
        cy.get('div[role="listbox"]')
          .first()
          .click()
        cy.contains('Save')
          .click()
         
})
})