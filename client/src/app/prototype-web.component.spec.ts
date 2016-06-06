import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PrototypeWebAppComponent } from '../app/prototype-web.component';

beforeEachProviders(() => [PrototypeWebAppComponent]);

describe('App: PrototypeWeb', () => {
  it('should create the app',
      inject([PrototypeWebAppComponent], (app: PrototypeWebAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'prototype-web works!\'',
      inject([PrototypeWebAppComponent], (app: PrototypeWebAppComponent) => {
    expect(app.title).toEqual('prototype-web works!');
  }));
});
