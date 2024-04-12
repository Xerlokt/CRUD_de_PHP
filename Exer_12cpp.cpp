#include <stdio.h>

int main() {
    float valor_original, percentual_desconto;
    float valor_com_desconto;

    printf("Digite o valor original: ");
    scanf("%f", &valor_original);

    printf("Digite o percentual de desconto: ");
    scanf("%f", &percentual_desconto);

    valor_com_desconto = valor_original * (1 - percentual_desconto / 100);

    printf("O novo valor com desconto é R$%.2f.", valor_com_desconto);

    return 0;
}
