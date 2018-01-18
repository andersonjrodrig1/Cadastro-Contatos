import { NgModule } from '@angular/core';
import { ContatoBuscaComponent } from './contato-busca.component';
import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatosListaComponent } from './contatos-lista.component';
import { ContatoRoutingModule } from './contato-routing.module'
import { CommonModule } from '@angular/common';
import { ContatoService } from './contato-service';
import { FormsModule } from '@angular/forms';
import { DialogService } from '../dialog-service';

@NgModule({
    imports:[
        CommonModule,
        ContatoRoutingModule,
        FormsModule
    ],
    declarations:[
        ContatoBuscaComponent,
        ContatoDetalheComponent,
        ContatosListaComponent
    ],
    exports:[
        ContatoBuscaComponent,
        ContatosListaComponent
    ],
    providers:[
        ContatoService,
        DialogService
    ]
})
export class ContatosModule {}