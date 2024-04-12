#include <stdio.h>
//GIAN CARLO REBELLO COELHO

int main(){
    float paes , leite , val_leite , val_paes , val_totals ;
    printf("informe qunatos pãos voce deseja comprar: ");
    scanf("%f" , &paes);
    printf("informe quantas caixas de leite voce deseja comprar: ");
    scanf("%f" , &leite);

    val_leite = leite * 5,50;
    val_paes = paes * 1,25;
    val_total = val_leite + val_paes;

    printf("o total é : %.2f" , val_total);
    return 0;
}