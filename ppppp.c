#include<stdio.h>
#include<conio.h>

main()
{
int n;
clrscr();
printf("Enter number..");
scanf("%d",&n);
if(n>0)
printf("Given number is positive");
else if(n<0)
printf("Given number is negative");
else
printf("Number is Zero");
getch();
}
