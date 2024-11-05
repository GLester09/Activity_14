import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PingcheckerComponent } from './pingchecker.component';

describe('PingcheckerComponent', () => {
  let component: PingcheckerComponent;
  let fixture: ComponentFixture<PingcheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PingcheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PingcheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
