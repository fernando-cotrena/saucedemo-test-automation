import { mercadoLibreService } from '../../../../support/api/services/mercadolibre.service'

describe('Mercado Libre API - Departments', () => {
  it('should fetch departments successfully', () => {
    mercadoLibreService.getDepartments().then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('departments')
      expect(response.body.departments).to.be.an('array').that.is.not.empty
    })
  })

  it('should include at least one "Tecnología" department', () => {
    mercadoLibreService.getDepartments().then((response) => {
      const hasTechDepartment = response.body.departments.some(
        (department: any) => department.name === 'Tecnología',
      )

      expect(
        hasTechDepartment,
        'Expected at least one department named "Tecnología"',
      ).to.be.true
    })
  })

  it('should have valid permalinks for categories and subcategories', () => {
    mercadoLibreService.getDepartments().then((response) => {
      response.body.departments.forEach((department: any) => {
        department.categories.forEach((category: any) => {
          expect(category.permalink).to.match(
            /^https:\/\//,
            `Expected category permalink to start with "https://".
           Department="${department.name}", Category="${category.name}", URL="${category.permalink}"`,
          )

          category.children_categories.forEach((subcategory: any) => {
            expect(subcategory.permalink).to.match(
              /^http:\/\//,
              `Expected subcategory permalink to start with "https://".
             Department="${department.name}", Category="${category.name}", Subcategory="${subcategory.name}", URL="${subcategory.permalink}"`,
            )
          })
        })
      })
    })
  })
})
