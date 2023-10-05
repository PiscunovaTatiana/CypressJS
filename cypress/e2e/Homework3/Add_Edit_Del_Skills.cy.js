/// <reference types="cypress" />

import Login from "../../support/selectors2"
const login = new Login
beforeEach(() => {
  cy.visit('/')
        login.logInAll()
        cy.contains('Admin')
          .click()
        cy.wait(1000)
        cy.contains('Qualifications')
          .click()
        cy.get('ul[class="oxd-dropdown-menu"]')
          .find('li')
          .contains('Skills')
          .click()

})

describe('Skills',()=>{

    it('Check Add Skill',()=>{
          cy.contains('Add')
            .click()
          cy.get('input[class*="oxd-input"]')
            .eq(1)
            .type('Cypres')
          cy.contains('Save')
            .click()
    })

    it('Check Edit Skill',()=>{
          cy.get('div[role="rowgroup"] div[role="row"] [class$="-action-space"] [class$="-pencil-fill"]')
          .eq(4)
          .click({force:true})
          cy.get('input[class*="oxd-input"]')
            .eq(1)
            .clear()
            .type('Cypress')
          cy.contains('Save')
            .click()
      })

      it('Check Delete Skill',()=>{
          cy.get('div[role="rowgroup"] div[role="row"] [class$="-action-space"] i[class$="bi-trash"]')
            .eq(4)
            .click({force:true})
          cy.get('[class$="-danger orangehrm-button-margin"]')
            .click()
            })
    })