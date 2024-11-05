import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppealformComponent } from './appealform.component';

describe('AppealformComponent', () => {
  let component: AppealformComponent;
  let fixture: ComponentFixture<AppealformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppealformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppealformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
