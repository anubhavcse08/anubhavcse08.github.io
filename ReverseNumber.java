import java.util.Scanner;
public class ReverseNumber {
	public static void main(String args[]){
		int n,rem,b=0;
		Scanner sc = new Scanner(System.in);
		System.out.println(" enter the number : ");
		n= sc.nextInt();
		while(n>0)
		{
			rem=n%10;
			b=b*10+rem;
			n=n/10;
		}
		System.out.println(" the reverse number : " +b);
	}

}
