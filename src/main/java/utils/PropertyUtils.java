package utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class PropertyUtils {

	Properties property = new Properties();
	private String path = System.getProperty("user.dir");

	public String getProperty(String fileName, String propertyKey) throws IOException {
		File file = new File(path + fileName);
		FileInputStream fileInput = null;
		try {
			fileInput = new FileInputStream(file);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		property.load(fileInput);
		return property.getProperty(propertyKey);

	}

	public void setProperty(String propertyKey, String valueToSet) throws IOException {
		property.setProperty(propertyKey, valueToSet);
	}

}
