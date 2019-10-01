package stepdefinition;

import org.apache.log4j.Logger;
import org.junit.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import helpers.CommonFunction;
import helpers.CurrencyConverterPage;

public class CurrencyConverterPageStepDefinition {
	
	private static final Logger logger = Logger.getLogger(CurrencyConverterPageStepDefinition.class);
	
	private CommonFunction commonFunc = new CommonFunction();
	private CurrencyConverterPage currencyConverterPage = new CurrencyConverterPage();
	
	@Then("^Verify user has navigated to correct \"([^\"]*)\" calculation url for \"([^\"]*)\" to \"([^\"]*)\" conversion for \"([^\"]*)\"$")
	public void verify_user_navigated_to_correct_url(String urlName, String sourceCurrency, String targetCurrency, String amountValue) throws Throwable {
		logger.info("Call verify_user_navigated_to_correct_url");
		commonFunc.waitForPageToLoadImplicitly();
		Assert.assertEquals("Selected Search Text is not Appearing",
				currencyConverterPage.getExpectedCurrencyCalculatorURL(urlName, sourceCurrency, targetCurrency, amountValue), commonFunc.getCurrentBrowserURL());
	}
	
	@And("Verify correct amount value \"([^\"]*)\" is getting displayed after conversion from \"([^\"]*)\" to \"([^\"]*)\"$")
	public void verify_correct_amount_gets_diaplyed_in_currency_conversion(String convertedValueLocator, String sourceCurrency, String targetCurrency) throws NumberFormatException, Throwable {
		logger.info("Call verify_correct_amount_gets_diaplyed_in_currency_conversion");
		System.out.println(currencyConverterPage.getValueAfterConversionFromSourceToTargetCurrency());
		System.out.println(currencyConverterPage.getActualConvertedValue(convertedValueLocator));
		
		Assert.assertEquals("Incorrect value after conversion "+ sourceCurrency +" to "+ targetCurrency,
				currencyConverterPage.getValueAfterConversionFromSourceToTargetCurrency(),
				currencyConverterPage.getActualConvertedValue(convertedValueLocator));
	}
	
}
