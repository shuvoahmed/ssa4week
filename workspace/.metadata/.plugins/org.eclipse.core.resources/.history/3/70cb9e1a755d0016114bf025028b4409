package com.iron.yard.twitter.clone.service;

/**
 * 
 */
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.iron.yard.twitter.clone.Tweet;
import com.iron.yard.twitter.clone.db.DBConnection;

/**
 * @author Shuvo Ahmed
 *
 */
public class TweetService
{
	public static void main(String[] args)
	{
		
		TweetService tweetService = new TweetService();
		List<Tweet> userTweets = tweetService.getUserTweets("shuvo");
		List<Tweet> topTweets = tweetService.getTopTenTweets();
	}
	
	public List<Tweet> getTopTenTweets()
	{
	    List<Tweet> tweets = new ArrayList<Tweet>();
	    
	    try {
	      Connection c = DBConnection.getConnection();
	      c.setAutoCommit(false);
	      
	      String SQL = "SELECT USERID, TWEET, DATE FROM TWEET "
	    		  	 + "  ORDER BY DATE DESC"	    		  	 
	    		  	 + "  LIMIT 10";	    		  	 

	      Statement stmt = c.createStatement();
	      ResultSet rs = stmt.executeQuery(SQL);
	      while ( rs.next() )
	      {
	    	 Tweet tweet = new Tweet();
	    	    	 
	         tweet.setUserID(rs.getString("USERID"));
	         tweet.setTweet(rs.getString("TWEET"));
	         tweet.setDate(rs.getString("DATE"));
	         
	         tweets.add(tweet);
	         
	         System.out.println( "USERID = " + tweet.getUserID());
	         System.out.println( "TWEET = " + tweet.getTweet());
	         System.out.println( "DATE = " + tweet.getDate());
	
	         System.out.println();
	      }
	      rs.close();
	      stmt.close();
	    }
	    catch ( Exception e )
	    {
	    	e.printStackTrace();
	    }
	    System.out.println("Retrieved Top Ten Tweets");

		return tweets;
	}
	
	public List<Tweet> getUserTweets(String userID)
	{
	    List<Tweet> tweets = new ArrayList<Tweet>();
	   
	    try {
	      Connection c = DBConnection.getConnection();
	      c.setAutoCommit(false);
	      
	      String SQL = "SELECT USERID, TWEET, DATE FROM TWEET "
	    		  	 + "  WHERE USERID = '" + userID + "'"
	    		  	 + "  ORDER BY DATE DESC"	    		  	 
	    		  	 + "  LIMIT 10";	    		  	 

	      Statement stmt = c.createStatement();
	      ResultSet rs = stmt.executeQuery(SQL);
	      while ( rs.next() )
	      {
	    	 Tweet tweet = new Tweet();
	    	    	 
	         tweet.setUserID(rs.getString("USERID"));
	         tweet.setTweet(rs.getString("TWEET"));
	         tweet.setDate(rs.getString("DATE"));
	         
	         tweets.add(tweet);
	         
	         System.out.println( "USERID = " + tweet.getUserID());
	         System.out.println( "TWEET = " + tweet.getTweet());
	         System.out.println( "DATE = " + tweet.getDate());
	
	         System.out.println();
	      }
	      rs.close();
	      stmt.close();
	    }
	    catch ( Exception e )
	    {
	    	e.printStackTrace();
	    }
	    System.out.println("Retrieved User Tweets");

		return tweets;
	}
}