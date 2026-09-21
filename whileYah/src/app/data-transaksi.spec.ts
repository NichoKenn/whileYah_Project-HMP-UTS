import { TestBed } from '@angular/core/testing';
import { DataTransaksi } from './data-transaksi';

describe('DataTransaksi', () => {
  let service: DataTransaksi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTransaksi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
