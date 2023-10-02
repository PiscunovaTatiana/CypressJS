class Login{
    username(){
        return cy.get('[name="username"]').type('Admin')
    }

    password(){
        return cy.get('[name="password"]').type('admin123')
        
    }
    
    btnLogin(){
        return cy.get('[type="submit"]').click();
    }
}

export default Login