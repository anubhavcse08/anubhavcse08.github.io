import java.util.Scanner;
class LcmTwoNumber
{
public static void main(String args[])
{
Scanner br=new Scanner(System.in);
int a,b,max,min,x,lcm=1;
System.out.print("Enter the 1st number : ");
a=br.nextInt();
System.out.print("Enter the 2nd number : ");
b=br.nextInt();
 max=a>b?a:b;
 min=a<b?a:b;
 
for(int i=1;i<=min;i++)
   {
    x=max*i;
    if(x%min==0)
     {
      lcm=x;
      break; 
     }
    }
System.out.println("L.C.M. = "+lcm);
}
}