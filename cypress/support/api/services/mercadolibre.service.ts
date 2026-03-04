const baseUrl = Cypress.env().mercadolibreApiUrl

class MercadoLibreService {
  getDepartments() {
    return cy.request({
      method: 'GET',
      url: `${baseUrl}/menu/departments`,
      failOnStatusCode: false,
    })
  }
}

export const mercadoLibreService = new MercadoLibreService()