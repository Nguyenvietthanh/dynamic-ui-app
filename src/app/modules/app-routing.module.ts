import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RendererComponent } from '@diaas/ux-web';

const routes: Routes = [
  { path: 'screen/:screenId', component: RendererComponent },
<<<<<<< HEAD
  { path: '**', redirectTo: 'screen/tableMetaModel' },
=======
  { path: '**', redirectTo: 'screen/clientDetails' }

>>>>>>> c309d4f6059b3be0016ae4fc88ecd714b1ee9d17
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routedComponents = [RendererComponent];
