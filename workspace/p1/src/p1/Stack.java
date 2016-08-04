package p1;

public class Stack {
	private int[] store;
	private int len;
	
	public Stack()
	{
		this.store = new int[10];
		this.len = 0;
	}
	public static void main(String[] args) {
		Stack st = new Stack();
		for (int i = 0; i < 50; i++)
		{
			st.push(i);
		}
		System.out.println("Stack Length:  " + st.len);
		for (int j = 0; j < 20; j++)
		{
			System.out.println(st.pop());
		}
		System.out.println("Stack Length:  " + st.len);
	}
	
	public void push(int a)
	{
		//System.out.println(store.length);
		if(store.length == len + 1)
		{
			store = java.util.Arrays.copyOf(store, store.length * 2);
		}
		len++;
		store[len] = a;
	}
	
	public boolean empty()
	{
		return (len == 0);
	}
	public int pop()
	{
		if(empty())
		{
			System.out.println("Stack is empty");
		}
		int result = store[len];
		len--;
		return result;
	}
}
