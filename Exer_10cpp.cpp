#include <stdio.h>

int main() {
    int dividendo, divisor;
    int quociente, resto;
    
    printf("Digite o dividendo: ");
    scanf("%d", &dividendo);
    
    printf("Digite o divisor: ");
    scanf("%d", &divisor);
    
    quociente = dividendo / divisor;
    resto = dividendo % divisor;
    
    printf("Quociente: %d\n", quociente);
    printf("Resto: %d", resto);
    
    return 0;
}
