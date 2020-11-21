import { Component } from '@angular/core';
// import { ProductListComponent } from './products/product-list.component'


// @Component({
//   selector: 'pm-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
@Component({
    selector: 'pm-root',
    template: `
        <div>
            <h1>{{pageTitle}}</h1>
            <pm-products></pm-products>
        </div>
`
})

export class AppComponent {
    pageTitle: string = 'Angular: Getting Started';
}
