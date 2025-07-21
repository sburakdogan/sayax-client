import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountList } from './amount-list';

describe('AmountList', () => {
  let component: AmountList;
  let fixture: ComponentFixture<AmountList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmountList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmountList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
