import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasComponent } from './temas.component';

describe('TemasComponent', () => {
  let component: TemasComponent;
  let fixture: ComponentFixture<TemasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemasComponent]
    });
    fixture = TestBed.createComponent(TemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
