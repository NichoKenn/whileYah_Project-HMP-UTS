import { TestBed } from '@angular/core/testing';
import { DataKeranjang } from './data-keranjang';

describe('DataKeranjang', () => {
  let service: DataKeranjang;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataKeranjang);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
