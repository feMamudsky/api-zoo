export class Animal {
        // 🐾 Bem-vindo à classe Animal, onde todos os nossos amigos peludos, escamosos e emplumados se encontram!
    
        private nome: string; // 🏷️ O nome do animal, porque todos nós merecemos ser chamados pelo nosso nome!
    
        private idade: number; // 🎂 A idade do animal, porque até mesmo os mais jovens entre nós têm muita sabedoria para compartilhar!
    
        private genero: string; // ⚥ O gênero do animal, porque não importa se somos meninos, meninas ou qualquer coisa entre, somos todos iguais perante a natureza!
    
        constructor(nome: string, idade: number, genero: string) {
            this.nome = nome; // 🎉 Ao criar um animal, atribuímos a ele um nome
            this.idade = idade; // 🎉 Também damos uma idade, afinal, todos nós temos uma história para contar!
            this.genero = genero; // 🎉 E não podemos esquecer o gênero, pois cada um de nós é único!
        }
    
        public getNome(): string {
            return this.nome; // 🤔 Retorna o nome do animal. Você já ouviu falar de um animal com um nome tão legal quanto o meu?
        }
    
        public setNome(nome: string): void {
            this.nome = nome; // 🏷️ Define um novo nome para o animal. Talvez agora eu seja conhecido como o animal mais famoso do zoológico!
        }
    
        public getIdade(): number {
            return this.idade; // 🤔 Retorna a idade do animal. Será que sou um jovem aventureiro ou um sábio ancião?
        }
    
        public setIdade(idade: number): void {
            this.idade = idade; // 🎂 Define uma nova idade para o animal. Agora estou um pouco mais experiente!
        }
    
        public getGenero(): string {
            return this.genero; // 🤔 Retorna o gênero do animal. Sou um menino, uma menina ou um mistério da natureza?
        }
    
        public setGenero(genero: string): void {
            this.genero = genero; // ⚥ Define um novo gênero para o animal. Agora sou oficialmente um representante do gênero mais incrível do reino animal!
        }
    }
    