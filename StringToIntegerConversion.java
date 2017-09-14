import java.util.Scanner;
import java.lang.*;
public class StringToIntegerConversion {
	public static void main(System args[]){
		String s;
		Scanner sc = new Scanner(System.in);
		System.out.println(" enter the string : ");
		s=sc.next();
		int i = Integer.parseInt(s);
		System.out.println(i);
		sc.close();
	}


}
