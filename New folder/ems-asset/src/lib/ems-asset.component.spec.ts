import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmsAssetComponent } from './ems-asset.component';

describe('EmsAssetComponent', () => {
  let component: EmsAssetComponent;
  let fixture: ComponentFixture<EmsAssetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmsAssetComponent]
    });
    fixture = TestBed.createComponent(EmsAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
