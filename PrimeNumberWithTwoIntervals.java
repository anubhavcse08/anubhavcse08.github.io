import java.util.Scanner;
public class PrimeNumberWithTwoIntervals {
	public static void main(String args[])
	{
		int i,j,n,flag=0,newn;
		Scanner sc =new Scanner(System.in);
		System.out.println(" Enter the start checking prime number which are greater than 2 : ");
		newn=sc.nextInt();
		System.out.println(" Enter the end checking prime number : ");
		n=sc.nextInt();
		for(i=newn;i<=n;i++)
		{
			//flag=1;
			for(j=2;j<i;j++){
				if(i%j==0)
				{
					flag=0;
					//System.out.println(s+ " The given number is not Prime number.");
					//System.exit(0);
					break;
				}
				else{
					flag=1;
				}
			}
		if(flag==1){
			System.out.println(i);
		}
		}
	}
}
