#include <stdio.h>
//GIAN CARLO REBELLO COELHO

int main() {
    float quant_agua , valor_mm;
    printf("quantas polegadas deu de chuva?");
    scanf("%f", &quant_agua);

    valor_mm = quant_agua * 25,4;

    printf("choveu %.2f mm \n", valor_mm);

    return 0;
}