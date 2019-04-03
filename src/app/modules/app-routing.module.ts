import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RendererComponent } from '@diaas/ux-web';

const routes: Routes = [
  { path: 'screen/:screenId', component: RendererComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'screen/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routedComponents = [RendererComponent];
