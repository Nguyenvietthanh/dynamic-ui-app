import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RendererComponent } from '@diaas/ux-web';

const routes: Routes = [
  { path: 'screen/:screenId', component: RendererComponent },
<<<<<<< HEAD
  { path: '**', redirectTo: 'screen/clientDetails' },
=======
  { path: '**', redirectTo: 'screen/login' },
>>>>>>> 9f4e2c8e0fc68f32cdd9b2b89b736cdb74ba3841
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routedComponents = [RendererComponent];
