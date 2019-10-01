package helpers;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import utils.PropertyUtils;

public class BaseFunction {

	private static final Logger logger = Logger.getLogger(BaseFunction.class);

	public static WebDriver driver;
	public static WebElement element;
	private String path = System.getProperty("user.dir");
	private String chromeDriverPath = path + "/src/test/resources/driver/chromedriver";
	private String chromeDriver = "webdriver.chrome.driver";
	protected static String configFileName = "/src/test/resources/properties/config.properties";
	protected static String locatorConfigPath;
	PropertyUtils property = new PropertyUtils();

	public void initializeChromeDriver() {
		logger.info("Initialise Chrome driver!!!");
		System.setProperty(chromeDriver, chromeDriverPath);
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}

	public void openPage(String nameOftheURL) throws IOException {
		String url = property.getProperty(configFileName, nameOftheURL);
		logger.info("URL: " + url);
		locatorConfigPath = setLocatorSession(nameOftheURL);
		
		logger.info("Locator config path: " + locatorConfigPath);
		driver.get(url);
	}

	public String setLocatorSession(String pageName) throws IOException {
		String propertyKey = pageName + "LocatorsPath";
		return property.getProperty(configFileName, propertyKey);
	}

	public String getLocatorValue(String locatorName) throws IOException {
		return property.getProperty(locatorConfigPath, locatorName + "Value");
	}

	public String getLocatorAction(String locatorName) throws IOException {
		return property.getProperty(locatorConfigPath, locatorName + "Action");
	}

	public void closeDriver() {
		driver.close();
	}

}
