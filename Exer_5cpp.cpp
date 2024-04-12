#include <stdio.h>
//GIAN CARLO REBELLO COELHO
int main(){
float nota_trabalho , nota_prova , media ;
printf("coloque quanto que voce tirou na prova ");
scanf("%f" , &nota_trabalho);

printf("coloque o valor da nota do seu trabalho ");
scanf("%f" , &nota_prova);

media = nota_prova + nota_trabalho / 2;

printf("A sua media foi : %.2f \n", media);

return 0;
}