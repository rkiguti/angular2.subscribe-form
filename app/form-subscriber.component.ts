import { Component } from '@angular/core'

@Component({
    selector: 'form-subscriber',
    templateUrl: 'app/form-subscriber.component.html',
    styles: [`
        input.ng-touched.ng-invalid {
            border: 1px solid red;
        }
    `]
})
export class FormSubscriberComponent {
    onSubmit(form) {
        console.log(form);
    }
}