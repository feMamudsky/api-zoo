export class Animal {
    private nome: string; // 🏷️ O nome do animal
    private idade: number; // 🎂 A idade do animal
    private genero: string; // ⚥ O gênero do animal

    /**
     * Cria uma nova instância de Animal.
     * 
     * @param nome O nome do animal.
     * @param idade A idade do animal.
     * @param genero O gênero do animal.
     */
    constructor(nome: string, idade: number, genero: string) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }

    /**
     * Método para que o animal emita um som.
     */
    public emitirSom(): void {
        console.log("O animal emite um som.");
    }

    /**
     * Método para que o animal se mova.
     */
    public mover(): void {
        console.log("O animal está se movendo.");
    }

    // Getters e setters para os atributos nome, idade e genero

    /**
     * Obtém o nome do animal.
     * 
     * @returns O nome do animal.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do animal.
     * 
     * @param nome O nome a ser atribuído ao animal.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Obtém a idade do animal.
     * 
     * @returns A idade do animal.
     */
    public getIdade(): number {
        return this.idade;
    }

    /**
     * Define a idade do animal.
     * 
     * @param idade A idade a ser atribuída ao animal.
     */
    public setIdade(idade: number): void {
        this.idade = idade;
    }

    /**
     * Obtém o gênero do animal.
     * 
     * @returns O gênero do animal.
     */
    public getGenero(): string {
        return this.genero;
    }

    /**
     * Define o gênero do animal.
     * 
     * @param genero O gênero a ser atribuído ao animal.
     */
    public setGenero(genero: string): void {
        this.genero = genero;
    }
}
