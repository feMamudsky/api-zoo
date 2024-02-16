import { Animal } from "./Animal";

/**
 * Representa um réptil, uma subclasse de Animal.
 */
export class Reptil extends Animal {
    // 🐍 Aqui está a classe Reptil, uma subclasse de Animal. Esses caras são legais e escamosos!

    private raca: string; // 🏷️ A raça do réptil, cada um com sua própria textura de pele única!

    /**
     * Cria uma nova instância de Reptil.
     * 
     * @param raca A raça do réptil.
     * @param nome O nome do réptil.
     * @param idade A idade do réptil.
     * @param genero O gênero do réptil.
     */
    constructor(raca: string, nome: string, idade: number, genero: string) {
        super(nome, idade, genero); // 🌟 Chamamos o construtor da classe pai para configurar o nome, idade e gênero.

        this.raca = raca; // 🏷️ Definimos a raça do réptil. Eles são tão variados quanto as cores do arco-íris!
    }

    /**
     * Obtém a raça do réptil.
     * 
     * @returns A raça do réptil.
     */
    public getRaca(): string {
        return this.raca; // 🤔 Retorna a raça do réptil. Será que sou um lagarto ou uma cobra?
    }

    /**
     * Define a raça do réptil.
     * 
     * @param raca A nova raça para o réptil.
     */
    public setRaca(raca: string): void {
        this.raca = raca; // 🏷️ Define uma nova raça para o réptil. Talvez agora eu seja um dragão!
    }
}
