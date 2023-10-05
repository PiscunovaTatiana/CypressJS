/// <reference types="cypress" />

import Login from "../../support/selectors2"
const login = new Login

beforeEach(() => {
           cy.visit('/')
           login.logInAll()
           cy.contains('Admin')
             .click()
           cy.viewport(1500,1000)
           cy.contains('Configuration')
             .click()
           cy.get('ul[class="oxd-dropdown-menu"]')
             .find('li')
             .contains('Register OAuth Client')
             .click()

   })

describe('OAuth client',()=>{

        it('Check Add OAuth client',()=>{
           cy.contains('Add')
             .click()
           cy.get('input[class*="oxd-input"]')
             .eq(1)
             .type('Global')
           cy.get('input[class*="oxd-input"]')
             .eq(2)
             .type('Global')
           cy.contains('Save')
             .click()
        
        })
        
        it.only('Check Edit OAuth client',()=>{
            cy.get('[class$="-action-space"] [class$="-pencil-fill"]')
              .click()
            cy.get('input[class*="oxd-input"]')
              .eq(1)
              .clear()
              .type('Globals')
            cy.get('input[class*="oxd-input"]')
              .eq(2)
              .clear()
              .type('Globals')
            cy.contains('Save')
              .click()

            })
       
            it.only('Check Delete OAuth client',()=>{
            cy.get('[class$="-action-space"] i[class$="bi-trash"]')
              .click()
            cy.get('[class$="-danger orangehrm-button-margin"]')
              .click()
                
          })
        })