import java.util.Scanner;
public class HcfOrGcd {
	public static void main(String args[]){
		int i, num1, num2, min, hcf=1;
		Scanner sc = new Scanner(System.in);
		System.out.println( "Enter the two number  :" );
		num1=sc.nextInt();
		num2=sc.nextInt();
		 min = (num1<num2) ? num1 : num2;
		    for(i=1; i<=min; i++)
		    {
		        if(num1%i==0 && num2%i==0)
		        {
		            hcf = i;
		        }
		    }
		    System.out.println("HCF = " +hcf);
	}

}
