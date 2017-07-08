import java.util.Scanner;
public class CalculateThePowerOfNumber {
   public static void main(String args[])
   {
	   int n,power;
	   double value;
	   Scanner sc=new Scanner(System.in);
	   System.out.println(" enter the number: ");
	   n=sc.nextInt();
	   value=Math.pow(n,2);
	   System.out.println("The power of given number: "+value);
	   
   }
}
