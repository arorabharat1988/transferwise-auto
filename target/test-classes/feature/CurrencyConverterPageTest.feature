Feature: Testing functionality on Currency Converter Page

@transferwise
Scenario Outline: To verify user navigation to correct topic page from Community Page
	Given User navigates to "currencyConverter" Page
	When User enters "<amountValue>" in "amountTextBox"
	And User clicks on "fromCurrenyDropdownButton"
	And User enters "<fromCurrency>" in "fromCurrencySearchBox"
	And User clicks on "selectedFromCurrency"
	When User clicks on "toCurrenyDropdownButton"
	And User enters "<toCurrency>" in "toCurrencySearchBox"
	And User clicks on "selectedToCurrency"  
	When User clicks on "convertCurrencyButton"
	Then Verify user has navigated to correct "currencyConverter" calculation url for "<fromCurrency>" to "<toCurrency>" conversion for "<amountValue>"
	And Verify correct amount value "convertedAmount" is getting displayed after conversion from "<fromCurrency>" to "<toCurrency>"
	
	
	Examples:
	
	|amountValue  |fromCurrency |toCurrency |
	|100.00       |INR		    | GBP       |
	|20           |EUR   	    | INR       |
	|33           |USD		    | INR       |
	|44.46        |GBP		    | USD       |
	|78.908       |GBP		    | EUR       |
