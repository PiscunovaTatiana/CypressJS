class Login{
    username(){
         cy.get('[name="username"]').type('Admin')
    }

    password(){
         cy.get('[name="password"]').type('admin123')
        
    }
    
    btnLogin(){
         cy.get('[type="submit"]').click();
    }
    logInAll(){
cy.get('[name="username"]').type('Admin') 
        cy.get('[name="password"]').type('admin123')
            cy.get('[type="submit"]').click()
            
    }
}




export default Login