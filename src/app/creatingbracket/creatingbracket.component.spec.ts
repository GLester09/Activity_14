import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingbracketComponent } from './creatingbracket.component';

describe('CreatingbracketComponent', () => {
  let component: CreatingbracketComponent;
  let fixture: ComponentFixture<CreatingbracketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatingbracketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatingbracketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
