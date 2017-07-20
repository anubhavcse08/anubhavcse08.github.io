#include <stdio.h>
#define MAX_SIZE 100
int main()
{
    char string[MAX_SIZE];
    int alphabets, digits, others, alphanumeric ,i;

    alphabets = digits = others = i = alphanumeric = 0;
    printf("Enter any string : ");
    gets(string);
    while(string[i]!='\0')
    {
        if((string[i]>='a' && string[i]<='z') || (string[i]>='A' && string[i]<='Z') || (string[i]>='0' && string[i]<='9'))
        {
            alphanumeric++;
        }
        if((string[i]>='a' && string[i]<='z') || (string[i]>='A' && string[i]<='Z'))
        {
            alphabets++;
        }
        else if(string[i]>='0' && string[i]<='9')
        {
            digits++;
        }
        else
        {
            others++;
        }

        i++;
    }

    printf("Alphabets = %d\n", alphabets);
    printf("Number = %d\n", digits);
    printf("Alphanumeric = %d\n", alphanumeric);
    printf("Special characters = %d\n", others);

    return 0;
}
