import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MasterDetailComponent } from './master-detail.component';
import { SharedModule } from '../../../shared/shared.module';

describe('MasterDetailComponent:', () => {

    let comp: MasterDetailComponent;
    let fixture: ComponentFixture<MasterDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [MasterDetailComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MasterDetailComponent);
        comp = fixture.componentInstance;

        fixture.detectChanges();
    });
});
