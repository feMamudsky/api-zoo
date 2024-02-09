import { Animal } from "./Animal";
class Reptil extends Animal {
    // 🐍 Aqui está a classe Reptil, uma subclasse de Animal. Esses caras são legais e escamosos!

    private raca: string; // 🏷️ A raça do réptil, cada um com sua própria textura de pele única!

    constructor(raca: string, nome: string, idade: number, genero: string) {
        super(nome, idade, genero); // 🌟 Chamamos o construtor da classe pai para configurar o nome, idade e gênero.

        this.raca = raca; // 🏷️ Definimos a raça do réptil. Eles são tão variados quanto as cores do arco-íris!
    }

    public getRaca(): string {
        return this.raca; // 🤔 Retorna a raça do réptil. Será que sou um lagarto ou uma cobra?
    }

    public setRaca(raca: string): void {
        this.raca = raca; // 🏷️ Define uma nova raça para o réptil. Talvez agora eu seja um dragão!
    }
}
