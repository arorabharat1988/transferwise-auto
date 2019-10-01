package common;


import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import utils.PropertyUtils;


public class CommonFunction extends BaseFunction {
	
	PropertyUtils property = new PropertyUtils();
	BaseFunction base = new BaseFunction();
	
	public void clickOnElement(String elementToClick) throws Throwable {
		element=findElementByLocation (elementToClick);
		element.click();
	}
	
	public void setElementText(String textToSet, String elementToSet) throws Throwable{
		element = findElementByLocation(elementToSet);
		element.clear();
		element.sendKeys(textToSet);
	}
	
	public String getElementText(String location) throws Throwable {
		element = findElementByXpath(location);
		return element.getText().trim();
	}
	
	public WebElement findElementByLocation(String elementToSet) throws Throwable {
			
		String getLocationAction = base.getLocatorAction(elementToSet).toLowerCase();
		String getLocationPath = base.getLocatorValue(elementToSet);
		WebElement element = null;
		
		switch(getLocationAction) {
		
		case "id":  element = findElementById(getLocationPath);
					break;
		case "xpath": element = findElementByXpath(getLocationPath);
					break;
					
		default: System.out.println("Unable to Find Element in " + locatorConfigPath );
				 break;
		}
		
		return element;	
	}
	
	public WebElement findElementById(String elementPath) {	
		return driver.findElement(By.id(elementPath));
	}
	
	public WebElement findElementByXpath(String elementPath) throws Throwable {
		return driver.findElement(By.xpath(elementPath));
	}

	public String getCurrentURLAsText() {
		return driver.getCurrentUrl();
	}
	
	public void waitForPageToLoadImplicitly() {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	
	public String getCurrentBrowserURL() {
		return driver.getCurrentUrl().toString();
	}	
}
