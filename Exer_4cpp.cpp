#include <stdio.h>

int main() {
    int carros_vendidos;
    float valor_vendas, salario;
    
    printf("Informe o número de carros vendidos: ");
    scanf("%d", &carros_vendidos);
    
    printf("Informe o valor total das vendas: R$ ");
    scanf("%f", &valor_vendas);
    
    salario = 500 + (50 * carros_vendidos) + (0.05 * valor_vendas);
    
    printf("O salário do vendedor é: R$ %.2f\n", salario);
    
    return 0;
}
