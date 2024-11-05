import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisiontableComponent } from './divisiontable.component';

describe('DivisiontableComponent', () => {
  let component: DivisiontableComponent;
  let fixture: ComponentFixture<DivisiontableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivisiontableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisiontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
