import java.util.Scanner;
public class AmongThreeNumberLargest {
      public static void main(String args[])
      {
    	  double a,b,c,largest;
    	  Scanner sc = new Scanner(System.in);
    	  System.out.println(" Enter the three numbers : ");
    	  a=sc.nextDouble();
    	  b=sc.nextDouble();
    	  c=sc.nextDouble();
    	  largest=(a>b)?(a>c?a:c):(b>c?b:c);
    	  System.out.println(" Largest number =" +largest);
      } 
}
