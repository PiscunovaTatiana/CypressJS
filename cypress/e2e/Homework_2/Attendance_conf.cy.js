/// <reference types="cypress" />

import Login from "../../support/selectors2"
const login = new Login

describe('Attendance configuration',()=>{


    it('Check change settings in Attendance configuration',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        login.username()
        login.password()
        login.btnLogin()
        cy.get(':nth-child(4) > .oxd-main-menu-item')
          .should('be.visible')
          .click();
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item')
          .click();
        cy.wait(1000);
        cy.get('ul[class="oxd-dropdown-menu"]')
          .find('li')
          .contains('Configuration')
          .click();
        cy.get(':nth-child(1) > .oxd-switch-wrapper > label > .oxd-switch-input')
          .click();
        cy.contains('Save')
          .click();
    
})
})