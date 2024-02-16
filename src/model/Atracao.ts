// Importa a classe Habitat de outro arquivo
import { Habitat } from "./Habitat"; // 🌳 Importa a classe Habitat de outro arquivo

/**
 * Representa uma atração em um zoológico.
 */
export class Atracao {
    private nome: string; // 🏷️ Nome da atração
    private lista_de_habitats: Array<Habitat>; // 🏞️ Lista de habitats da atração

    /**
     * Cria uma nova instância de Atracao.
     * 
     * @param nome O nome da atração.
     * @param lista_de_habitats A lista de habitats da atração.
     */
    constructor(nome: string, lista_de_habitats: Array<Habitat>){
        this.nome = nome; // 🎉 Ao criar uma atração, definimos seu nome
        this.lista_de_habitats = lista_de_habitats; // 🏞️ Também inicializamos a lista de habitats
    }

    /**
     * Obtém o nome da atração.
     * 
     * @returns O nome da atração.
     */
    public getNome(): string {
        return this.nome; // 🤔 Retorna o nome da atração
    }

    /**
     * Define o nome da atração.
     * 
     * @param nome O novo nome para a atração.
     */
    public setNome(nome: string): void {
        this.nome = nome; // 🏷️ Define um novo nome para a atração
    }

    /**
     * Define a lista de habitats da atração.
     * 
     * @param lista_de_habitats A nova lista de habitats para a atração.
     */
    public setLista_de_habitats(lista_de_habitats: Array<Habitat>): void {
        this.lista_de_habitats = lista_de_habitats; // 🌳 Define uma nova lista de habitats para a atração
    }

    /**
     * Obtém a lista de habitats da atração.
     * 
     * @returns A lista de habitats da atração.
     */
    public getLista_de_habitats(): Array<Habitat> {
        return this.lista_de_habitats; // 🌳 Retorna a lista de habitats da atração
    }
}
