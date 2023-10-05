import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './layout/components/ProductCatalog/about.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [    
      {
        path: 'men', component: AboutComponent, data: {category: 'men'}
      },
      {
        path: 'men/shoes', component: AboutComponent, data: {category: 'men', subcategory: 'shoes'}
      },
      {
        path: 'men/clothes', component: AboutComponent, data: {category: 'men', subcategory: 'clothes'}
      },
      {
        path: 'men/accessories', component: AboutComponent, data: {category: 'men', subcategory: 'accessories'}
      },
      {
        path: 'women', component: AboutComponent, data: {category: 'women'}      
      },
      {
        path: 'women/shoes', component: AboutComponent, data: {category: 'women', subcategory: 'shoes'}
      },
      {
        path: 'women/clothes', component: AboutComponent, data: {category: 'women', subcategory: 'clothes'}
      },
      {
        path: 'women/accessories', component: AboutComponent, data: {category: 'women', subcategory: 'accessories'}
      },
      {
        path: 'children', component: AboutComponent, data: {category: 'children'}
      },
      {
        path: 'children/shoes', component: AboutComponent, data: {category: 'children', subcategory: 'shoes'}
      },
      {
        path: 'children/clothes', component: AboutComponent, data: {category: 'children', subcategory: 'clothes'}
      },
      {
        path: 'children/accessories', component: AboutComponent, data: {category: 'children', subcategory: 'accessories'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
