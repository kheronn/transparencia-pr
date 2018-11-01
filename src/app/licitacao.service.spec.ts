import { TestBed } from '@angular/core/testing';

import { LicitacaoService } from './licitacao.service';

describe('LicitacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LicitacaoService = TestBed.get(LicitacaoService);
    expect(service).toBeTruthy();
  });
});
