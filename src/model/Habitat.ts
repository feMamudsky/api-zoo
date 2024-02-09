import { Animal } from "./Animal"; // Certifique-se de importar a classe Animal, se ainda não foi importada

export class Habitat {
    // 🏡 Aqui estamos criando a classe Habitat, onde nossos animais viverão felizes!

    private nome: string; // 🏷️ O nome do habitat
    private listaDeAnimais: Array<Animal>; // 🐾 Uma lista de animais sortudos que vivem aqui

    constructor(nome: string, listaDeAnimais: Array<Animal>) {
        this.nome = nome; // 🎉 Quando o habitat é criado, damos a ele um nome
        this.listaDeAnimais = listaDeAnimais; // 📜 Inicializa a lista de animais com a lista fornecida
    }

    public getNome(): string {
        return this.nome; // 🤔 Retorna o nome do habitat
    }

    public setNome(nome: string): void {
        this.nome = nome; // 🏷️ Define um novo nome para o habitat
    }
}
