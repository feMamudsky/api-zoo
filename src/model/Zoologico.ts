import { Atracao } from "./Atracao"; // 🎪 Importa a classe Atracao de outro arquivo

export class Zoologico {
    private nome: string; // 🏷️ Nome do zoológico
    private lista_de_atracoes: Array<Atracao>; // 🐼 Lista de atrações do zoológico

    constructor(nome: string, lista_de_atracoes: Array<Atracao>) {
        this.nome = nome; // 🎉 Ao criar um zoológico, definimos seu nome
        this.lista_de_atracoes = lista_de_atracoes; // 🐾 Também inicializamos a lista de atrações
    }

    public getNome(): string {
        return this.nome; // 🤔 Retorna o nome do zoológico
    }

    public setNome(nome: string): void {
        this.nome = nome; // 🏷️ Define um novo nome para o zoológico
    }

    public adicionarAtracao(atracao: Atracao): void {
        this.lista_de_atracoes.push(atracao); // ➕ Adiciona uma nova atração à lista de atrações do zoológico
    }

    public removerAtracao(atracao: Atracao): void {
        const index = this.lista_de_atracoes.indexOf(atracao);
        if (index !== -1) {
            this.lista_de_atracoes.splice(index, 1); // ➖ Remove uma atração da lista de atrações do zoológico
        }
    }

    public exibirAtracoesNoZoologico(): void {
        console.log(this.lista_de_atracoes); // 🐾 Exibe as atrações presentes no zoológico
    }

    // Métodos adicionais para cadastro, atualização, listagem e exclusão não foram implementados
}
