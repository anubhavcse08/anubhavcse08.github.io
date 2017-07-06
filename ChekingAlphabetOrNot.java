import java.util.Scanner;
public class ChekingAlphabetOrNot {
      public static void main(String args[])
      {
    	  char ch;
    	  Scanner Scan = new Scanner(System.in);
    	  System.out.println(" Enter the character : ");
    	  ch = Scan.next().charAt(0);
    	  if((ch >='a' && ch<='z')) || ((ch>='A' && ch<='Z'))
    	  { 
    		  System.out.println( ch + "is an alphabet...");
    	  }
    	  else
    	  {
    		  System.out.println( ch + "is not an alphabet...");
    	  }
    	  
      }
}
