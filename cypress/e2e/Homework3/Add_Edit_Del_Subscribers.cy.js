

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
         .contains('Email Subscription')
         .click()
        
      })

   describe('Subscribers',()=>{

       it('Check Add Subscribers',()=>{
        
        cy.get('i[class$="-plus-fill"]')
          .eq(1)
          .click()
        cy.contains('Add')
          .click()
        cy.wait(1000)
        cy.get('input[class*="oxd-input"]')
          .eq(1)
          .click({force:true})
          .type('Collins')
        cy.wait(1000)
        cy.get('input[class*="oxd-input"]')
          .eq(2)
          .click({force:true})
          .type('collins@mail.ru')
        cy.contains('Save')
          .click()


    })
    it('Check Edit Subscriber',()=>{
      
        cy.get('i[class$="-plus-fill"]')
            .eq(1)
            .click()
          cy.get('button[class$="-action-space"]')
            .eq(1)
            .click()
          cy.wait(1000)
          cy.get('input[class*="oxd-input"]')
            .eq(1)
            .click({force:true})
            .clear()
            .type('Collinss')
          cy.wait(1000)
          cy.get('input[class*="oxd-input"]')
            .eq(2).click({force:true})
            .clear()
            .type('collinss@mail.ru')
          cy.contains('Save')
            .click()

       })

       it('Check Delete Subscriber',()=>{
        
         cy.get('i[class$="-plus-fill"]')
            .eq(1)
            .click()
          cy.get('[class$="-action-space"] i[class$="bi-trash"]')
            .click()
          cy.get('[class$="-danger orangehrm-button-margin"]')
            .click()
        })
})