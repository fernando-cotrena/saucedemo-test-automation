import { mercadoLibreService } from '../../../../support/api/services/mercadolibre.service'

it('should match departments response contract', () => {
  mercadoLibreService.getDepartments().then((response) => {
    expect(response.status).to.eq(200)

    // Root level
    expect(response.body).to.have.all.keys(
      'departments',
      'landings',
      'more_categories',
      'high_priority',
    )

    expect(response.body.departments).to.be.an('array')
    expect(response.body.landings).to.be.an('array')
    expect(response.body.high_priority).to.be.an('array')
    expect(response.body.more_categories).to.be.an('object')

    // Departments
    response.body.departments.forEach((department: any) => {
      expect(department).to.include.all.keys('name', 'categories')

      expect(department.name).to.be.a('string')
      expect(department.categories).to.be.an('array')

      // Categories
      department.categories.forEach((category: any) => {
        expect(category).to.include.all.keys(
          'id',
          'name',
          'permalink',
          'children_categories',
        )

        expect(category.id).to.be.a('string')
        expect(category.name).to.be.a('string')
        expect(category.permalink).to.be.a('string')
        expect(category.children_categories).to.be.an('array')

        // Subcategories
        category.children_categories.forEach((subcategory: any) => {
          expect(subcategory).to.include.all.keys('id', 'permalink')

          expect(subcategory.id).to.be.a('string')
          expect(subcategory.permalink).to.be.a('string')
        })
      })
    })

    // Landings
    response.body.landings.forEach((landing: any) => {
      expect(landing).to.include.all.keys('label', 'permalink')

      expect(landing.label).to.be.a('string')
      expect(landing.permalink).to.be.a('string')
    })

    // High priority
    response.body.high_priority.forEach((item: any) => {
      expect(item).to.include.all.keys('label', 'permalink')

      expect(item.label).to.be.a('string')
      expect(item.permalink).to.be.a('string')
    })

    // More categories
    expect(response.body.more_categories).to.include.all.keys(
      'label',
      'permalink',
    )

    expect(response.body.more_categories.label).to.be.a('string')
    expect(response.body.more_categories.permalink).to.be.a('string')
  })
})
