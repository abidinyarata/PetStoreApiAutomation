/// <reference types="cypress" />

context('User Module', () => {
  
  it('User-user create', () => {

    const responseData = {
      "code": 200,
      "type": "unknown",
      "message": "55"
  }

    const postData = {
      "id": 55,
      "username": "newUser",
      "firstName": "ali",
      "lastName": "yılmaz",
      "email": "ali.yilmaz@gmail.com",
      "password": "test123",
      "phone": "9876543",
      "userStatus": 1
    };

    const headersData = {
      "accept": "application/json",
      "Content-Type": "application/json"
    };

    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: postData,
      headers: headersData
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property("message").equals("55")
      expect(response.body).to.have.property("code").equals(200)
      expect(response.body).to.have.property("type").equals("unknown")
      expect(response.body).to.deep.equal(responseData)
    })
  })

  it('User-Get user info', () => {

    const headersData = {
      "accept": "application/json",
      "Content-Type": "application/json"
    };

    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/newUser",
      headers: headersData
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('User-user delete', () => {

    const headersData = {
      "accept": "application/json",
      "Content-Type": "application/json"
    };

    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/newUser",
      headers: headersData
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('User-user update', () => {

    const postData = {
      "id": 35,
      "username": "asonmez",
      "firstName": "ahmet",
      "lastName": "sönmez",
      "email": "ahmet.sonmez@yahoo.com",
      "password": "test987",
      "phone": "9876543",
      "userStatus": 1
  };

    const headersData = {
      "accept": "application/json",
      "Content-Type": "application/json"
    };

    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/newUser",
      body: postData,
      headers: headersData
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('User-login', () => {

    const queryData = {
      "username": "asonmez",
      "password": "test987"
    }

    const headersData = {
      "accept": "application/json",
      "Content-Type": "application/json"
    };

    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/login?",
      query: queryData,
      headers: headersData
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('User-logout', () => {

    const headersData = {
      "accept": "application/json",
      "Content-Type": "application/json"
    };

    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/logout",
      headers: headersData
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('User-create with array', () => {

    const postData = [
      {
        "id": 23,
        "username": "kaanyilmaz",
        "firstName": "kaan",
        "lastName": "yilmaz",
        "email": "kaan.yilmaz@hotmail.com",
        "password": "test123",
        "phone": "1234567",
        "userStatus": 1
      },
      {
        "id": 45,
        "username": "velidonmez",
        "firstName": "veli",
        "lastName": "donmez",
        "email": "veli.donmez@windowslive.com",
        "password": "test123",
        "phone": "1234567",
        "userStatus": 1
      }
    ];

    const headersData = {
      "accept": "application/json",
      "Content-Type": "application/json"
    };

    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user/createWithArray",
      body: postData,
      headers: headersData
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('User-create with list', () => {

    const postData = [
      {
        "id": 23,
        "username": "kaanyilmaz",
        "firstName": "kaan",
        "lastName": "yilmaz",
        "email": "kaan.yilmaz@hotmail.com",
        "password": "test123",
        "phone": "1234567",
        "userStatus": 1
      },
      {
        "id": 45,
        "username": "velidonmez",
        "firstName": "veli",
        "lastName": "donmez",
        "email": "veli.donmez@windowslive.com",
        "password": "test123",
        "phone": "1234567",
        "userStatus": 1
      }
    ]

    const headersData = {
      "accept": "application/json",
      "Content-Type": "application/json"
    };

    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user/createWithList",
      body: postData,
      headers: headersData
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })


})
