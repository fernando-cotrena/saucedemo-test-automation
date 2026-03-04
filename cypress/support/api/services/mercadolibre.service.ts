class MercadoLibreService {
  getDepartments() {
    return cy.request({
      method: 'GET',
      url: 'https://www.mercadolibre.com.ar/menu/departments',
      failOnStatusCode: false,
    })
  }
}

export const mercadoLibreService = new MercadoLibreService()
