import java.util.Scanner;
public class CheckEvenOdd {
       public static void main(String args[])
       {
    	   int num; 
    	   System.out.println(" enter the number: ");
    	   Scanner input = new Scanner(System.in);
    	   num = input.nextInt();
    	   if(num%2==0)
    		   System.out.println(" entered number is even");
    	   else
    		   System.out.println(" entered number is odd");
       }
}
