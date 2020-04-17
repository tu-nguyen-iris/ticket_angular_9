import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheateComponent } from './theate.component';

describe('TheateComponent', () => {
  let component: TheateComponent;
  let fixture: ComponentFixture<TheateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
