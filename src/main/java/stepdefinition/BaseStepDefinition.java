package stepdefinition;

import java.io.IOException;

import org.apache.log4j.Logger;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import helpers.BaseFunction;
import helpers.CommonFunction;

public class BaseStepDefinition {
	private static final Logger logger = Logger.getLogger(BaseStepDefinition.class);

	private BaseFunction baseFunc = new BaseFunction();
	private CommonFunction commonFunc = new CommonFunction();

	@Before
	public void setsession() {
		baseFunc.initializeChromeDriver();
	}

	@Given("^User navigates to \"([^\"]*)\" Page$")
	public void user_navigates_to_Page(String url) {
		logger.info("Entering user_navigates_to_Page function");
		System.out.println("inside steps : " + url);
		try {
			baseFunc.openPage(url);
		} catch (IOException e) {
			logger.error("Not able to Open URL");
			e.printStackTrace();
		}
		logger.info("Exiting user_navigates_to_Page function");
	}

	@When("^User clicks on \"([^\"]*)\"$")
	public void user_clicks_on_Page(String elementToClick) throws Throwable {
		logger.info("Enter user_clicks_on_Page function");
		commonFunc.waitForPageToLoadImplicitly();
		commonFunc.clickOnElement(elementToClick);
		logger.info("Exiting user_clicks_on_Page function");
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
