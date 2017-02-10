/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatosEstaticosService } from './datos-estaticos.service';

describe('DatosEstaticosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosEstaticosService]
    });
  });

  it('should ...', inject([DatosEstaticosService], (service: DatosEstaticosService) => {
    expect(service).toBeTruthy();
  }));
});
