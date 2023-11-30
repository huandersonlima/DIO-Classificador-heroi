let nome = "mateus"
let exp = 1200
let elo = ''

if(exp <= 1000)
{
    elo = "ferro"
} else if( exp>1000 && exp<=2000)
{
    elo = "broze"
}else if( exp>2000 && exp<=5000)
{
    elo = "prata"
}else if( exp>5000 && exp<=7000)
{
    elo = "ouro"
}else if( exp>7000 && exp<=8000)
{
    elo = "platina"
}else if( exp>8000 && exp<=9000)
{
    elo = "diamante"
}else if( exp>9000 && exp<=10000)
{
    elo = "ascendente"
}else if( exp>10000 && exp<=11000)
{
    elo = "imortal"
}else if( exp>11000)
{
    elo = "radiante"
}

console.log(`O Herói de nome ${nome} está no nivel ${elo}`)