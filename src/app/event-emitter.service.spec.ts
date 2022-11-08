/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventEmitterService } from './event-emitter.service';

describe('Service: EventEmitter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventEmitterService]
    });
  });

  it('should ...', inject([EventEmitterService], (service: EventEmitterService) => {
    expect(service).toBeTruthy();
  }));
});
