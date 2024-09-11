class Heroi {
    constructor(NomeHeroi, IdadeHeroi, TipoHeroi) {
        this.NomeHeroi = NomeHeroi;
        this.IdadeHeroi = IdadeHeroi;
        this.TipoHeroi = TipoHeroi;
    }

    atacar() {
        let Ataque;

        switch (this.TipoHeroi) {
            case "Mago":
                Ataque = 'Usou magia';
                break;
            case "Guerreiro":
                Ataque = 'Usou espada';
                break;
            case "Monge":
                Ataque = 'Usou artes marciais';
                break;
            case "Ninja":
                Ataque = 'Usou shuriken';
                break;
            default:
                Ataque = 'Tipo de herói desconhecido';
                break;
        }

        console.log(`O ${this.TipoHeroi} atacou: ${Ataque}`);
    }
}

let Atributo = new Heroi('Josue', 25, 'Monge');
Atributo.atacar();
console.log(Atributo);