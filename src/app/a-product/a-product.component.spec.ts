import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AProductComponent } from './a-product.component';

describe('AProductComponent', () => {
  let component: AProductComponent;
  let fixture: ComponentFixture<AProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
