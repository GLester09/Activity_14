import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextlegnthComponent } from './textlegnth.component';

describe('TextlegnthComponent', () => {
  let component: TextlegnthComponent;
  let fixture: ComponentFixture<TextlegnthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextlegnthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextlegnthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
