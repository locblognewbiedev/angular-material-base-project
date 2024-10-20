import { TestBed } from '@angular/core/testing';

import { CodeFileToBase64Service } from './code-file-to-base64.service';

describe('CodeFileToBase64Service', () => {
  let service: CodeFileToBase64Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeFileToBase64Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
