package p1;

public class HelloWorld extends Object{

	public static void main(String[] args)
	{
		int a = 67;
		char b = 25; 
				
		System.out.println("Hello, World!");
		for(int i = 0; i < args.length; i++)
		{
			System.out.println(args[i]);
		}
		System.out.println(3);
		
		
		int i = 5;
		char c = 'o';
		
		Character c2 = new Character(c);
		
		Integer i2 = new Integer(6);
		System.out.println(3 + i2.intValue());
		
		Object o = i;
		o = c2;
		o = c;
		//Object o = new Integer(i);
		
		
		int[] arr = new int[7];
		Object o3 = arr;
		
		Object[] oArr = new Object[10];
		
		oArr[0] = 6;
		
		
		
		int[][] arr1 = new int[7][]; //seven int arrays with variable size.  first could be size 5, second could any size 89
		arr1[0] = new int[5];
		arr1[1] = new int[89];

		int[][][] arr3 = new int[7][9][20];
		
		arr1[0][0] = 90;
	
		
		Object o5 = arr1;
		Object[] oArr5 = arr1;
		oArr5[0] = new int[8];
		oArr5[0] = 5;
		
	}
	
	public void foo()
	{
		System.out.println("TEst");
	}

}
