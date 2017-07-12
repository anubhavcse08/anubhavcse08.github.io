import java.util.Scanner;
public class OddNumber {
	public static void main(String args[]){
		int a,b,n;
		Scanner sc=new Scanner(System.in);
		System.out.println(" enter the starting number: ");
		a=sc.nextInt();
		System.out.println(" enter the ending number: ");
		n=sc.nextInt();
		if(a%2==0)
		{
			a++;
		}
		for(b=a;a<=n;a+=2){
		System.out.println("the odd numbers are : "+ a );
	}
	}

}
