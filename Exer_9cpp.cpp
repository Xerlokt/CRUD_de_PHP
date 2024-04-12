#include <stdio.h>

int main() {
    int duracao_em_segundos;
    int horas, minutos, segundos;
    
    printf("Digite a duração em segundos: ");
    scanf("%d", &duracao_em_segundos);
    
    horas = duracao_em_segundos / 3600;
    minutos = (duracao_em_segundos % 3600) / 60;
    segundos = duracao_em_segundos % 60;
    
    printf("A duração de %d segundos equivale a: %d horas, %d minutos e %d segundos.", duracao_em_segundos, horas, minutos, segundos);
    
    return 0;
}
