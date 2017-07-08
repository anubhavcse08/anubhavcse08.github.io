import java.lang.*;
import java.util.Scanner;
public class PrimeNumber {
    public static void main(String args[])
    {
    	int i,n,a;
    	Scanner sc=new Scanner(System.in);
    	System.out.println(" enter the number: ");
    	n=sc.nextInt();
    	for(i=2;i<=n/2;i++){
    		if(n%i==0)
    		{
    			System.out.println(n+ " is not a prime number");
    			System.exit(0);
    			break;
    		}
    	}
    	System.out.println(n+ " is a prime number");
    }
}
