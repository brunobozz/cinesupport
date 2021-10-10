import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBgSeparatorComponent } from './comp-bg-separator.component';

describe('CompBgSeparatorComponent', () => {
  let component: CompBgSeparatorComponent;
  let fixture: ComponentFixture<CompBgSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompBgSeparatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompBgSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
