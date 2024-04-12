#include <stdio.h>
#include <math.h>

int main() {
    float lado;
    float perimetro, area, diagonal;

    printf("Digite o valor do lado do quadrado: ");
    scanf("%f", &lado);

    perimetro = 4 * lado;
    area = pow(lado, 2);
    diagonal = sqrt(2) * lado;

    printf("Perímetro: %.2f\n", perimetro);
    printf("Área: %.2f\n", area);
    printf("Diagonal: %.2f", diagonal);

    return 0;
}
