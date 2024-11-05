import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuesscolorComponent } from './guesscolor.component';

describe('GuesscolorComponent', () => {
  let component: GuesscolorComponent;
  let fixture: ComponentFixture<GuesscolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuesscolorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuesscolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
