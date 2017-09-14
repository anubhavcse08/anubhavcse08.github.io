import java.util.Scanner;
 
class ReverseString
{
	
    public static void main(String[] args)
    {
    	Scanner sc = new Scanner(System.in);
    	System.out.println("Enter the String : ");
    	String input= sc.next();
        char[] try1 = input.toCharArray();
 
        for (int i = try1.length-1; i>=0; i--)
            System.out.print(try1[i]);
        sc.close();
    }
}