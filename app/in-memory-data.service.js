"use strict";
class InMemoryDataService {
    createDb() {
        let contatos = [
            { id: 1, nome: 'Fulano de Tal', email: 'fulano@email.com', telefone: '(00) 0000-0000' },
            { id: 2, nome: 'Ciclano', email: 'ciclano@email.com', telefone: '(00) 0000-0000' },
            { id: 3, nome: 'Estacamaquio', email: 'estacamaquio@email.com', telefone: '(00) 0000-0000' },
            { id: 4, nome: 'Bob Esponja', email: 'bobesponja@email.com', telefone: '(00) 0000-0000' },
            { id: 5, nome: 'Seu Madruga', email: 'seumadruga@email.com', telefone: '(00) 0000-0000' }
        ];
        return { contatos };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map