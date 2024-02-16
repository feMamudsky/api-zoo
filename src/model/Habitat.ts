import { Animal } from "./Animal";

/**
 * Representa um habitat no zoológico, onde os animais vivem.
 */
export class Habitat {
    private nome: string; // 🏷️ O nome do habitat
    private listaDeAnimais: Array<Animal>; // 🐾 Uma lista de animais sortudos que vivem aqui

    constructor(nome: string, listaDeAnimais: Array<Animal>) {
        this.nome = nome; // 🎉 Ao criar um habitat, definimos seu nome
        this.listaDeAnimais = listaDeAnimais; // 📜 Inicializa a lista de animais com a lista fornecida
    }

    /**
     * Obtém o nome do habitat.
     * 
     * @returns O nome do habitat.
     */
    public getNome(): string {
        return this.nome; // 🤔 Retorna o nome do habitat
    }

    /**
     * Define o nome do habitat.
     * 
     * @param nome O nome a ser atribuído ao habitat.
     */
    public setNome(nome: string): void {
        this.nome = nome; // 🏷️ Define um novo nome para o habitat
    }

    /**
     * Obtém a lista de animais do habitat.
     * 
     * @returns A lista de animais do habitat.
     */
    public getListaAnimais(): Array<Animal> {
        return this.listaDeAnimais; // 🐾 Retorna a lista de animais do habitat
    }

    /**
     * Define a lista de animais do habitat.
     * 
     * @param listaDeAnimais A lista de animais a ser atribuída ao habitat.
     */
    public setListaAnimais(listaDeAnimais: Array<Animal>): void {
        this.listaDeAnimais = listaDeAnimais; // 🐾 Define uma nova lista de animais para o habitat
    }
}
