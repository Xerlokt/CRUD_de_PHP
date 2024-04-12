#include <stdio.h>
//GIAN CARLO REBELLO COELHO

int main() {
    float litros, km, consumo;
    
    printf("Informe a quantidade de litros abastecidos: ");
    scanf("%f", &litros);
    
    printf("Informe a quantidade de quilômetros percorridos: ");
    scanf("%f", &km);
    
    consumo = km / litros;
    
    printf("O consumo médio do veículo é: %.2f KM/L\n", consumo);
    
    return 0;
}
