import { Animal } from "./Animal";
class Ave extends Animal {
    // 🦜 Aqui está a classe Ave, uma subclasse de Animal. Essas criaturas são conhecidas por suas asas e belos cantos!

    private raca: string; // 🏷️ A raça da ave, porque mesmo entre as aves, cada uma tem suas peculiaridades!

    constructor(raca: string, nome: string, idade: number, genero: string) {
        super(nome, idade, genero); // 🌟 Chamamos o construtor da classe pai para configurar o nome, idade e gênero.

        this.raca = raca; // 🏷️ Definimos a raça da ave. Elas vêm em todas as formas e tamanhos!
    }

    public getRaca(): string {
        return this.raca; // 🤔 Retorna a raça da ave. Será que sou um papagaio ou um falcão?
    }

    public setRaca(raca: string): void {
        this.raca = raca; // 🏷️ Define uma nova raça para a ave. Talvez agora eu seja um flamingo!
    }
}
