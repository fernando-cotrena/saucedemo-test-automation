import { mercadoLibreService } from '../../../support/api/services/mercadolibre.service';

describe('Mercado Libre API Tests', () => {
  it('Should fetch departments successfully', () => {
    mercadoLibreService.getDepartments().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('departments');
      expect(response.body.departments).to.be.an('array').that.is.not.empty;
    });
  });
});
