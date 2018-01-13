import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contato } from './contatos/contato.model'

export class InMemoryDataService implements InMemoryDbService {

    createDb(): {} {
        let contatos: Contato[] = [
            {id: 1, nome: 'Fulano de Tal', email: 'fulano@email.com', telefone: '(00) 0000-0000'},
            {id: 2, nome: 'Ciclano', email: 'ciclano@email.com', telefone: '(00) 0000-0000'},
            {id: 3, nome: 'Estacamaquio', email: 'estacamaquio@email.com', telefone: '(00) 0000-0000'},
            {id: 4, nome: 'Bob Esponja', email: 'bobesponja@email.com', telefone: '(00) 0000-0000'},
            {id: 5, nome: 'Seu Madruga', email: 'seumadruga@email.com', telefone: '(00) 0000-0000'}
        ];

        return { contatos };
    }
}