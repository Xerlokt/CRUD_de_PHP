#include <stdio.h>

int main() {
    float celsius, fahrenheit;
    
    printf("Digite a temperatura em graus Celsius: ");
    scanf("%f", &celsius);
    
    fahrenheit = (9.0 / 5.0) * celsius + 32.0;
    
    printf("%.2f graus Celsius equivalem a %.2f graus Fahrenheit.", celsius, fahrenheit);
    
    return 0;
}
