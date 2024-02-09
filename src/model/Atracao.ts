import { Habitat } from "./Habitat"; // 🌳 Importa a classe Habitat de outro arquivo

export class Atracao {
    private nome: string; // 🏷️ Nome da atração
    private lista_de_habitats: Array<Habitat>; // 🏞️ Lista de habitats da atração

    constructor(nome: string, lista_de_habitats: Array<Habitat>){
        this.nome = nome; // 🎉 Ao criar uma atração, definimos seu nome
        this.lista_de_habitats = lista_de_habitats; // 🏞️ Também inicializamos a lista de habitats
    }

    public getNome(): string {
        return this.nome; // 🤔 Retorna o nome da atração
    }

    public setNome(nome: string): void {
        this.nome = nome; // 🏷️ Define um novo nome para a atração
    }

    public setLista_de_habitats(lista_de_habitats: Array<Habitat>): void {
        this.lista_de_habitats = lista_de_habitats; // 🌳 Define uma nova lista de habitats para a atração
    }

    public getLista_de_habitats(): Array<Habitat> {
        return this.lista_de_habitats; // 🌳 Retorna a lista de habitats da atração
    }
}
