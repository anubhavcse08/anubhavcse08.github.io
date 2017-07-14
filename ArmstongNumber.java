import java.util.Scanner;
public class ArmstongNumber {
	public static void main(String args[])
	{
		long rem,n,temp,sum=0;
		Scanner sc = new Scanner(System.in);
		System.out.println(" enter the number: ");
		n=sc.nextLong();
		temp=n;
		while(n>0)
		{
			rem=n%10;
			sum=sum+rem*rem*rem;
			n=n/10;
		}
		if(sum==temp){
			System.out.println("the given number is " + sum + " an Armstrong number" );
		}
		else
		{
			System.out.println("the given number is not " + sum + " an Armstrong number");
		}
	
	}

}
