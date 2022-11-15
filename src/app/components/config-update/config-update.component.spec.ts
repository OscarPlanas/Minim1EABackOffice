import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigUpdateComponent } from './config-update.component';

describe('ConfigUpdateComponent', () => {
  let component: ConfigUpdateComponent;
  let fixture: ComponentFixture<ConfigUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
