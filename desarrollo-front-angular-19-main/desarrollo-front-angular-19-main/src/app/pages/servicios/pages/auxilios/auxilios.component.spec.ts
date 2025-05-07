import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliosComponent } from './auxilios.component';

describe('AuxiliosComponent', () => {
  let component: AuxiliosComponent;
  let fixture: ComponentFixture<AuxiliosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuxiliosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuxiliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
