import { TestBed } from '@angular/core/testing';
import { DataProduk } from './data-produk';

describe('DataProduk', () => {
  let service: DataProduk;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProduk);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
