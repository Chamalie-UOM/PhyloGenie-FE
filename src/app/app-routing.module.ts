import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { FileInputComponent } from './file-input/file-input.component';
import { TreeViewComponent } from './tree-view/tree-view.component';


const routes: Routes = [
  {path:'home',
  component: HomePageComponent,
  data:{title: 'PhyloGenie'}
  },
  {path: 'startProcess',
  component: FileInputComponent,
  data:{title: 'insert dataset file'},
  },
  {path: 'buildTree',
  component: TreeViewComponent,
  data: {title: 'Phylogenetic Inference'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
