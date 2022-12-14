import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigCreateComponent } from './config-create.component';

describe('ConfigCreateComponent', () => {
  let component: ConfigCreateComponent;
  let fixture: ComponentFixture<ConfigCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
