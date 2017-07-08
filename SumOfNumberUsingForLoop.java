import java.util.Scanner;
public class SumOfNumberUsingForLoop {
    public static void main(String args[])
    {
    	double n,i,sum=0;
    	Scanner sc=new Scanner(System.in);
    	System.out.println(" enter the number : ");
    	n=sc.nextDouble();
    	for(i=0;i<=n;i++)
    	{
    		sum=sum+i;
    	}
    	System.out.println(" sum of n number ="+sum);
    }
}
