import java.util.Scanner;
public class SumOfNaturalNumber {
     public static void main(String args[])
     {
    	 int n,sum;
    	 Scanner sc=new Scanner(System.in);
    	 System.out.println("enter the number : ");
    	 n=sc.nextInt();
    	 sum=(n*(n+1))/2;
    	 System.out.println("Natural numbers" +sum);
     }
}
