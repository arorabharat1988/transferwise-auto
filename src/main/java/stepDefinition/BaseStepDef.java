package stepDefinition;

import common.BaseFunction;
import common.CommonFunction;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import utils.PropertyUtils;

public class BaseStepDef {
	BaseFunction baseFunc = new BaseFunction();
	CommonFunction commonFunc = new CommonFunction();
	PropertyUtils property = new PropertyUtils();
	
	@Before
	public void setsession() {
		baseFunc.initializeChromeDriver();
	}
	
	@Given("^User navigates to \"([^\"]*)\" Page$")
	public void user_navigates_to_Page(String url) throws Throwable {
		System.out.println("inside steps : " + url);
		baseFunc.openPage(url);	    
	}

	@When("^User clicks on \"([^\"]*)\"$")
	public void user_clicks_on_Page(String elementToClick) throws Throwable {
		
		commonFunc.waitForPageToLoadImplicitly();
		commonFunc.clickOnElement(elementToClick);
	}
	
	@And("^User enters \"([^\"]*)\" in \"([^\"]*)\"$")
	public void user_enters_text_in_textBox(String textToEnter, String locator) throws Throwable {
	    commonFunc.setElementText(textToEnter, locator);
	}
	
	@After
	public void tearDown() {
		baseFunc.closeDriver();
	}
}
