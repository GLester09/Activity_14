import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisioncheckerComponent } from './divisionchecker.component';

describe('DivisioncheckerComponent', () => {
  let component: DivisioncheckerComponent;
  let fixture: ComponentFixture<DivisioncheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivisioncheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisioncheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
