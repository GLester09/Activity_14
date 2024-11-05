import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleflashlightComponent } from './simpleflashlight.component';

describe('SimpleflashlightComponent', () => {
  let component: SimpleflashlightComponent;
  let fixture: ComponentFixture<SimpleflashlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleflashlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleflashlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
