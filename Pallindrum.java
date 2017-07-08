import java.util.Scanner;
public class Pallindrum {
   public static void main(String args[])
   {
	   int n,rem,d=0,value;
	   Scanner sc=new Scanner(System.in);
	   System.out.println(" enter the number: ");
	   n=sc.nextInt();
	   value=n;
	   while(n>0)
	   {
		   rem=n%10;
		   d=d*10+rem;
		   n=n/10;
	   }
	   if(value==d){
		   System.out.println(" the given number is pallindrum number");
	   }
	   else{
		   System.out.println(" the given number is not pallindrum number");
	   }
   }
}
