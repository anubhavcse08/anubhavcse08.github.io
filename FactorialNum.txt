import java.util.Scanner;
import java.util.*;
public class FactorialOfNumber {
	public static void main(String args[])
	{
		int n,fact=1,i;
		Scanner sc = new Scanner(System.in);
		System.out.println(" enter the number : ");
		n = sc.nextInt();
		for(i=1;i<=n;i++){
			fact = fact*i;
		}
		System.out.println(" the factorial : " + fact);
	}

}
