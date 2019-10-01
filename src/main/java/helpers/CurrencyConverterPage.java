package helpers;

import java.io.IOException;

import org.apache.log4j.Logger;

import utils.PropertyUtils;

public class CurrencyConverterPage extends CommonFunction {

	private static final Logger logger = Logger.getLogger(CurrencyConverterPage.class);

	private PropertyUtils property = new PropertyUtils();
	private CommonFunction common = new CommonFunction();

	private static double amount;

	public String getExpectedCurrencyCalculatorURL(String urlName, String sourceCurrency, String targetCurrency,
			String amountValue) throws IOException {
		amount = Double.parseDouble(amountValue);
		String expectedURL = property.getProperty(configFileName, urlName) + sourceCurrency.toLowerCase() + "-to-"
				+ targetCurrency.toLowerCase() + "-rate" + "?" + "amount=" + amountValue;

		logger.info("The expected currency calculator url: " + expectedURL);
		return expectedURL.toString();
	}

	public String getActualConvertedValue(String convertedValueLocator) throws Throwable {
		return common.findElementByLocation(convertedValueLocator).getAttribute("value");
	}

	public String getValueAfterConversionFromSourceToTargetCurrency() throws NumberFormatException, Throwable {
		double conversionRate = Double
				.parseDouble(common.findElementByLocation("conversionRate").getAttribute("value"));
		return caluclatePriceAfterConversion(amount, conversionRate);
	}

	public String caluclatePriceAfterConversion(double amount, double conversionRate) {
		double amountAfterConversion = amount * conversionRate;
		return String.valueOf(amountAfterConversion);
	}
}
