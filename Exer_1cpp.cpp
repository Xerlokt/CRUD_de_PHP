#include <stdio.h>
//GIAN CARLO REBELLO COELHO

int main() {
    float cotacao, valor_dolar, valor_real;
    
    printf("Informe a cotação do dólar: ");
    scanf("%f", &cotacao);
    
    printf("Informe o valor em dólares: ");
    scanf("%f", &valor_dolar);
    
    valor_real = valor_dolar * cotacao;
    
    printf("O valor em reais é: %.2f\n", valor_real);
    
    return 0;
}
