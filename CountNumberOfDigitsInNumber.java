import java.util.Scanner;
public class CountNumberOfDigitsInNumber {
     public static void main(String args[])
     {
    	 int n,k=0,rem;
    	 Scanner sc=new Scanner(System.in);
    	 System.out.println(" enter the number: ");
    	 n=sc.nextInt();
    	 while(n>0)
    	 {
    		 rem=n%10;
    		 n=n/10;
    		 k++;
    	 }
    	 System.out.println(" number of digits = " +k);
     }
}