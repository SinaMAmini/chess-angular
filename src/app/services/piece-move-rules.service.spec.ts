import { TestBed } from '@angular/core/testing';

import { PieceMoveRulesService } from './piece-move-rules.service';

describe('PieceMoveRulesService', () => {
  let service: PieceMoveRulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PieceMoveRulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
