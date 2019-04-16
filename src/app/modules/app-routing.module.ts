import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RendererComponent } from '@diaas/ux-web';

const routes: Routes = [
  { path: 'screen/:screenId', component: RendererComponent },
  { path: '**', redirectTo: 'screen/tableMetaModel' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routedComponents = [RendererComponent];
