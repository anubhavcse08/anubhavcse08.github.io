//import java.util.Scanner;
public class FibonacciSeries {
	public static void main(String args[]){
		int n1=0,n2=1,n3,n=10,i;
		//Scanner sc = new Scanner(System.in);
		//System.out.println(" enter the number : ");
		//n=sc.nextInt();
		System.out.print( n1+ " " +n2);
		for(i=0;i<n;i++){
			n3=n1+n2;
			System.out.print( " "+n3);
			n1=n2;
			n2=n3;
		}
		
	}

}
