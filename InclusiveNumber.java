public class InclusiveNumber {
	public static void main(String[] args) {
		
		int n, sum=0;
		int sum1 = 0;
		
		for(n=1;n<=15;n++){
			sum = ((n*n)+n)/2;
		}
		System.out.println(" the sum of 1 to 15 number : " +sum);
		
	        for(int i=15;i<=45; i+=2){
	            sum1 = sum1+i;
	        }   
			System.out.println(" the sum of odd number from 15 to 45 : " +sum1);
	}  
	 
}
