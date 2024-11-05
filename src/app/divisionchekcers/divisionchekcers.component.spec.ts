import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionchekcersComponent } from './divisionchekcers.component';

describe('DivisionchekcersComponent', () => {
  let component: DivisionchekcersComponent;
  let fixture: ComponentFixture<DivisionchekcersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivisionchekcersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisionchekcersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
