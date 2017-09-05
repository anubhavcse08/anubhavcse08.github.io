import java.util.Scanner;
public class SumOfGivenNumber {
	public static void main (String args[]){
		int  sum=0, n;
		Scanner sc =new Scanner(System.in);
		System.out.println("Enter the number : ");
		n=sc.nextInt();
        sum = ((n*n)+n)/2;
		System.out.println("The sum of given number is : " + sum);
		sc.close();
	}

}
