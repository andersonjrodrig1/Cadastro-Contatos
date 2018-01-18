import { Component, OnInit } from '@angular/core';
import { Contato } from './contato.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ContatoService } from './contato-service';

@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html'
})
export class ContatoBuscaComponent implements OnInit {

    public contatos: Observable<Contato[]>;
    private termosDaBusca: Subject<string> = new Subject<string>();

    constructor(
        private contatoService: ContatoService
    ) { }

    ngOnInit(): void {
        this.contatos = this.termosDaBusca
            .switchMap(term => {
                return term ? this.contatoService.search(term) : Observable.of<Contato[]>([]);
            });

        this.contatos.subscribe((contatos: Contato[]) => console.log('retornou do servidor: ', contatos))
    }   

    search(term: string): void {
        this.termosDaBusca.next(term);
    }
}