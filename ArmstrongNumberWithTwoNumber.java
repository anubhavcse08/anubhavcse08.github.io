import java.util.Scanner;
public class ArmstrongNumberWithTwoNumber {
	public static void main(String args[])
	{
		int low,high;
		Scanner sc = new Scanner(System.in);

		System.out.println(" enter the low number: ");
		low=sc.nextInt();
		System.out.println(" enter the high number: ");
		high=sc.nextInt();
		for(int number=low;number<high;++number){
			int digits=0;
			int result=0;
			int originalNumber=number;
		while (originalNumber != 0){
			originalNumber /=10;
			++digits;
		}
		originalNumber=number;
		while (originalNumber != 0){
			int rem =originalNumber%10;
			result +=Math.pow(rem, digits);
			originalNumber /=10;
		}
		if(result==number){
			System.out.println(result+ "  ");
		}
		}
	}

}
