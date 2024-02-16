import { Animal } from "./Animal";

/**
 * Representa um mamífero, uma subclasse de Animal.
 */
export class Mamifero extends Animal {
    private raca: string; // 🏷️ A raça do mamífero, cada um com suas características únicas.

    /**
     * Cria uma nova instância de Mamifero.
     * 
     * @param _raca A raça do mamífero.
     * @param _nome O nome do mamífero.
     * @param _idade A idade do mamífero.
     * @param _genero O gênero do mamífero.
     */
    constructor(_raca: string,
                _nome: string,
                _idade: number,
                _genero: string,) {
        super(_nome, _idade, _genero); // 🌟 Chamamos o construtor da classe pai para configurar o nome, idade e gênero.

        this.raca = _raca; // 🏷️ Definimos a raça do mamífero.
    }

    /**
     * Obtém a raça do mamífero.
     * 
     * @returns A raça do mamífero.
     */
    public getRaca(): string {
        return this.raca; // 🤔 Retorna a raça do mamífero.
    }

    /**
     * Define a raça do mamífero.
     * 
     * @param _raca A nova raça para o mamífero.
     */
    public setRaca(_raca: string): void {
        this.raca = _raca; // 🏷️ Define uma nova raça para o mamífero.
    }
}
