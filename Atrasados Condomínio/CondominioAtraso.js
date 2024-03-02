let Juros = 0.01;
let Multa = 0.02;

function CondominioAtrasado (ValorMes, MesesPassados) 
{
    
   let ValorJuros = ValorMes + ValorMes * Multa * MesesPassados;
   console.log (`O valor total em é juros é ${ValorJuros}`)
   let ValorTotal = ValorJuros + ValorJuros * Multa;
   
   console.log (`O valor total com a multa é ${ValorTotal}`);
    //return ValorTotal;
}

CondominioAtrasado(285, 9)
CondominioAtrasado(270, 8)
CondominioAtrasado(270, 7)
CondominioAtrasado(270, 6)
CondominioAtrasado(270, 5)
CondominioAtrasado(270, 4)
CondominioAtrasado(270, 3)
CondominioAtrasado(270, 2)
CondominioAtrasado(285, 1)


    