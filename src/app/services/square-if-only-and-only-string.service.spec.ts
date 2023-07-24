import {TestBed} from '@angular/core/testing';

import {SquareIfOnlyAndOnlyStringService} from './square-if-only-and-only-string.service';

describe('MoveIfOnlyAndOnlyStringService', () => {
    let service: SquareIfOnlyAndOnlyStringService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SquareIfOnlyAndOnlyStringService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
