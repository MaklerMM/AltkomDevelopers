import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.DevelopersAltkomStudentModule)
      },
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(m => m.DevelopersAltkomCategoryModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class DevelopersAltkomEntityModule {}
