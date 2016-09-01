package com.iron.yard.twitter.clone.service;

/**
 * 
 */

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.iron.yard.twitter.clone.Follower;
import com.iron.yard.twitter.clone.Tweet;
import com.iron.yard.twitter.clone.db.DBConnection;

/**
 * @author admin
 *
 */
public class FollowerService
{
	/**
	 * 
	 */
	public FollowerService()
	{
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param args
	 */
	public static void main(String[] args)
	{
		// TODO Auto-generated method stub
		
		FollowerService followerService = new FollowerService();
		List<Tweet> followersTweet = followerService.getFollowerTweets("shuvo");
		List<Follower> followers = followerService.getFollowers("shuvo");
	}
	
	public List<Tweet> getFollowerTweets(String userID)
	{
	    List<Tweet> tweets = new ArrayList<Tweet>();
	    	    
	    try
	    {
	      Connection c = DBConnection.getConnection();
	      c.setAutoCommit(false);
	      
	      String SQL = "SELECT USERID, TWEET, DATE FROM TWEET "
	    	    	 + "  WHERE USERID = (" 
	    		  	 + "    SELECT FOLLOWERID from FOLLOWER "	    		  
	    		  	 + "      WHERE USERID = '" + userID + "')" ;  		  	 
	    		  	 
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

	    System.out.println("Retreived followers tweets");

	    return tweets;
	}
	
	public List<Follower> getFollowers(String userID)
	{
	    List<Follower> followers = new ArrayList<Follower>();
	    	    
	    try
	    {
	    	Connection c = DBConnection.getConnection();
	    	c.setAutoCommit(false);
	      
	    	String SQL = "SELECT USERID, FOLLOWERID FROM FOLLOWER "
	    	    	 + "  WHERE USERID = '" + userID + "'" ;  		  	 
	    		  	 
	      Statement stmt = c.createStatement();
	      ResultSet rs = stmt.executeQuery(SQL);
	      while ( rs.next() )
	      {
	         Follower follower = new Follower();
	         
	         follower.setUserID(rs.getString("USERID"));
	         follower.setFollowerID(rs.getString("FOLLOWERID"));
	         
	         System.out.println( "USERID = " + follower.getUserID());
	         System.out.println( "FOLLOWERID = " + follower.getFollowerID());
	         System.out.println();
	         
	         followers.add(follower);
	      }
	      rs.close();
	      stmt.close();
	    }
	    catch ( Exception e )
	    {
	      e.printStackTrace();
	    }
	    System.out.println("Retrieved followers");

	    return followers;
	}
}