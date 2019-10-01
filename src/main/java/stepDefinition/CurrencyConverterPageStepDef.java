package stepDefinition;

import common.BaseFunction;
import common.CommonFunction;
import common.CurrencyConverterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import utils.PropertyUtils;
import org.junit.Assert;

public class CurrencyConverterPageStepDef {
	
	BaseFunction baseFunc = new BaseFunction();
	CommonFunction commonFunc = new CommonFunction();
	PropertyUtils property = new PropertyUtils();
	CurrencyConverterPage currencyConverterPage = new CurrencyConverterPage();
	
	@Then("^Verify user has navigated to correct \"([^\"]*)\" calculation url for \"([^\"]*)\" to \"([^\"]*)\" conversion for \"([^\"]*)\"$")
	public void verify_user_navigated_to_correct_url(String urlName, String sourceCurrency, String targetCurrency, String amountValue) throws Throwable {
		commonFunc.waitForPageToLoadImplicitly();
		Assert.assertEquals("Selected Search Text is not Appearing",
				currencyConverterPage.getExpectedCurrencyCalculatorURL(urlName, sourceCurrency, targetCurrency, amountValue), commonFunc.getCurrentBrowserURL());
	}
	
	@And("Verify correct amount value \"([^\"]*)\" is getting displayed after conversion from \"([^\"]*)\" to \"([^\"]*)\"$")
	public void verify_correct_amount_gets_diaplyed_in_currency_conversion(String convertedValueLocator, String sourceCurrency, String targetCurrency) throws NumberFormatException, Throwable {
		System.out.println(currencyConverterPage.getValueAfterConversionFromSourceToTargetCurrency());
		System.out.println(currencyConverterPage.getActualConvertedValue(convertedValueLocator));
		
		Assert.assertEquals("Incorrect value after conversion "+ sourceCurrency +" to "+ targetCurrency,
				currencyConverterPage.getValueAfterConversionFromSourceToTargetCurrency(),
				currencyConverterPage.getActualConvertedValue(convertedValueLocator));
	}
	
}
