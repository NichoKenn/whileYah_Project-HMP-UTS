import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdukbaruPage } from './produkbaru.page';

describe('ProdukbaruPage', () => {
  let component: ProdukbaruPage;
  let fixture: ComponentFixture<ProdukbaruPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdukbaruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
