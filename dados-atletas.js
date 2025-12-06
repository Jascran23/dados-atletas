class Atleta {
    constructor(nome,idade,peso,altura,notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    };

    calculaCategoria(){
        if(this.idade >= 9 && this.idade <= 11){
            return "Infantil";
        }
        else if(this.idade >= 12 && this.idade <= 13){
            return "Juvenil";
        }
        else if(this.idade >= 14 && this.idade <= 15){
            return "Intermediário";
        }
        else if(this.idade >= 16 && this.idade <= 30){
            return "Adulto";
        };
        
        return "Sem Categoria";
    };


    calculaIMC(){
        return this.peso / (this.altura * this.altura)
    };

    calculaMediaValida(){
        let ordenadas = this.notas.sort((a,b) => a - b).slice(1,4);
        let index = ordenadas.length;
        let soma = ordenadas.reduce((acc,next) => acc + next);
        let mediaValida = soma / index;
     
        return mediaValida
    };

    obtemNomeAtleta(){
        return this.nome;
    };

    obtemIdadeAtleta(){
        return this.idade;
    };

    obtemPesoAtleta(){
        return this.peso
    };

    obtemNotasAtleta(){
        return this.notas.join(", ")
    };

    obtemCategoria(){
        return this.calculaCategoria();
    };

    obtemIMC(){
     return this.calculaIMC();
    };

    obtemMediaValida(){
        return this.calculaMediaValida();
    };
}




const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
