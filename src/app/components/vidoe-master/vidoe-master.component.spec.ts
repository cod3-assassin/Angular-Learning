import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidoeMasterComponent } from './vidoe-master.component';

describe('VidoeMasterComponent', () => {
  let component: VidoeMasterComponent;
  let fixture: ComponentFixture<VidoeMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VidoeMasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VidoeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
