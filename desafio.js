class hero{
    constructor(nome, idade, classe){
        this.nome = nome
        this.idade = idade
        this.classe = classe.toLowerCase()
        this.arma = this.defineArma(this.classe)
        this.prefixo = this.definePrefixo(this.idade)
        this.imprimeInicio()
    }

    defineArma(classe){
        let ar
        if (classe === 'mago'){
            ar = 'magia'  
        }else if(classe === 'guerreiro'){
            ar = 'espada'
        }else if(classe === 'monge'){
            ar = 'artes marciais'
        }else if(classe === 'ninja'){
            ar = 'shuriken'
        }else{
            ar = 'a mão'
        }
        return ar
    }

    definePrefixo(idade){
        let pre
        if(idade < 20){
            pre = 'iniciante'
        }else if(idade >= 20 && idade < 30){
            pre = 'jovem'
        }else if(idade >= 30 && idade < 50){
            pre = 'experiente'
        }else{
            pre = 'anciao'
        }
        return pre
    }

    imprimeInicio(){
        console.log(`O ${this.prefixo} ${this.nome} inciou sua jornada`)
    }

    fazerAniversario(){
        let preAnt = this.prefixo
        this.idade += 1
        this.prefixo = this.definePrefixo(this.idade)
        console.log(`O ${preAnt} ${this.nome} ficou mais velho e agora tem ${this.idade} e é chamado de ${this.prefixo} ${this.nome}`)
    }

    attack(){
        if(this.classe == 'mago'){
            if(this.idade > 55){
                console.log(`O ${this.prefixo} ${this.nome} atacou com ${this.arma} ancestral`)
            }else if(this.idade > 30 && this.idade <= 55){
                console.log(`O ${this.prefixo} ${this.nome} atacou com ${this.arma} concetrada`)
            }else{
                console.log(`O ${this.prefixo} ${this.nome} atacou com ${this.arma} incial`) 
            }
        }
        else if(this.classe == 'guerreiro'){
            if(this.idade > 55){
                console.log(`O ${this.prefixo} ${this.nome} atacou com ${this.arma} enferrujada`)
            }else if(this.idade > 30 && this.idade <= 55){
                console.log(`O ${this.prefixo} ${this.nome} atacou com ${this.arma} afiada`)
            }else{
                console.log(`O ${this.prefixo} ${this.nome} atacou com ${this.arma} recém forjada`) 
            }
        }
        else if(this.classe == 'monge'){
            if(this.idade > 55){
                console.log(`O ${this.prefixo} ${this.nome} atacou com ${this.arma} de faixa preta`)
            }else if(this.idade > 30 && this.idade <= 55){
                console.log(`O ${this.prefixo} ${this.nome} atacou com ${this.arma} de faixa vermelha`)
            }else{
                console.log(`O ${this.prefixo} ${this.nome} atacou com ${this.arma} de faixa branca`) 
            }
        }
        else if(this.classe == 'ninja'){
            if(this.idade > 55){
                console.log(`O ${this.prefixo} ${this.nome} atacou com ${this.arma} com inteligencia e furtividade `)
            }else if(this.idade > 30 && this.idade <= 55){
                console.log(`O ${this.prefixo} ${this.nome} atacou com ${this.arma} com destreza e rapidez`)
            }else{
                console.log(`O ${this.prefixo} ${this.nome} atacou com ${this.arma} do jeito que deu`) 
            }
        }  
        else{
            if(this.idade > 55){
                console.log(`O ${this.prefixo} ${this.nome} atacou com ${this.arma} porque é louco `)
            }else if(this.idade > 30 && this.idade <= 55){
                console.log(`O ${this.prefixo} ${this.nome} atacou com ${this.arma} porque é destemido`)
            }else{
                console.log(`O ${this.prefixo} ${this.nome} atacou com ${this.arma} porque sim`) 
            }
        }          
    }




}

let heroi = new hero('Hugo',15,'ninja')
heroi.fazerAniversario()
heroi.attack()