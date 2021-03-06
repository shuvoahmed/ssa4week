package p1;
import java.io.IOException;
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

// ==============================================
// Reads lines of text from some input file, 
// sorts the string list data, and writes to an output file.

public class SortFile {

    public static void readSortWrite(String path, Writer w) {
        FileInputStream fileInputStream = null;
        BufferedReader bufferedReader = null;

        try {
            fileInputStream = new FileInputStream("words.txt");
            bufferedReader = new BufferedReader(new InputStreamReader(fileInputStream));
                        String line = bufferedReader.readLine();

            // Read each line of file into array list.
            List<String> stringList = new ArrayList<String>();
            while (line != null) {
                stringList.add(line);
                line = bufferedReader.readLine();
            }

            // Sort array of strings
            Collections.sort(stringList);
            Collections.sort(stringList);

            for (String s : stringList) {
                // Also add new line character
                w.write(s + System.lineSeparator());
            }
        } catch (IOException ex) {
            ex.printStackTrace();
        } finally {
            try {
                bufferedReader.close();
                fileInputStream.close();
                w.close();
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }
    }
                public static void main(String[] args) {
        UpperWriter uw = new UpperWriter("sorted.txt");
        SortFile.readSortWrite("words.txt", uw);
    }
}

interface Writer {
    void write(String s) throws IOException;
    void close() throws IOException;
}

class UpperWriter implements Writer {
    private String path;
    private FileWriter file;
    
    public UpperWriter(String path) {
        this.path = path;
        // open file
        
		try
		{
			file = new FileWriter(path); 
		}
		catch(IOException ioe)
		{
			ioe.printStackTrace(System.err);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
    }
    
    public void write(String s) throws IOException {
        file.write(s.toUpperCase());
    }
    
    public void close() throws IOException {
    	file.close();
    }
}