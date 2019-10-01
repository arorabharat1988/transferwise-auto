package common;

import java.io.IOException;

import utils.PropertyUtils;

public class CurrencyConverterPage extends CommonFunction {

	PropertyUtils property = new PropertyUtils();
	BaseFunction base = new BaseFunction();
	CommonFunction common = new CommonFunction();
	
	private static double amount;
	
	public String getExpectedCurrencyCalculatorURL(String urlName, String sourceCurrency, String targetCurrency, String amountValue) throws IOException {
		
		amount = Double.parseDouble(amountValue);
				
		String expectedURL = property.getProperty(configFileName, urlName) + 
				sourceCurrency.toLowerCase() + "-to-"+ targetCurrency.toLowerCase() + "-rate"+"?"+"amount=" + amountValue ;
		
		return expectedURL.toString();
	}
	
	public String getActualConvertedValue(String convertedValueLocator) throws Throwable {
		return common.findElementByLocation(convertedValueLocator).getAttribute("value");
	}
	
	public String getValueAfterConversionFromSourceToTargetCurrency() throws NumberFormatException, Throwable {
		double conversionRate = Double.parseDouble(common.findElementByLocation("conversionRate").getAttribute("value"));
		return caluclatePriceAfterConversion(amount,conversionRate);
	}
	
	public String caluclatePriceAfterConversion(double amount, double conversionRate) {
		double amountAfterConversion= amount*conversionRate;
		return String.valueOf(amountAfterConversion);
	}
}
