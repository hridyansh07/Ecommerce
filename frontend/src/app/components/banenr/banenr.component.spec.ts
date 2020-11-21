import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanenrComponent } from './banenr.component';

describe('BanenrComponent', () => {
  let component: BanenrComponent;
  let fixture: ComponentFixture<BanenrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanenrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanenrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
