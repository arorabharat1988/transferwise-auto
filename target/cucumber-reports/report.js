$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CurrencyConverterPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "Testing functionality on Currency Converter Page",
  "description": "",
  "id": "testing-functionality-on-currency-converter-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "To verify user navigation to correct topic page from Community Page",
  "description": "",
  "id": "testing-functionality-on-currency-converter-page;to-verify-user-navigation-to-correct-topic-page-from-community-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@transferwise"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to \"currencyConverter\" Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003camountValue\u003e\" in \"amountTextBox\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on \"fromCurrenyDropdownButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters \"\u003cfromCurrency\u003e\" in \"fromCurrencySearchBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on \"selectedFromCurrency\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"toCurrenyDropdownButton\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters \"\u003ctoCurrency\u003e\" in \"toCurrencySearchBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on \"selectedToCurrency\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on \"convertCurrencyButton\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Verify user has navigated to correct \"currencyConverter\" calculation url for \"\u003cfromCurrency\u003e\" to \"\u003ctoCurrency\u003e\" conversion for \"\u003camountValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify correct amount value \"convertedAmount\" is getting displayed after conversion from \"\u003cfromCurrency\u003e\" to \"\u003ctoCurrency\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "testing-functionality-on-currency-converter-page;to-verify-user-navigation-to-correct-topic-page-from-community-page;",
  "rows": [
    {
      "cells": [
        "amountValue",
        "fromCurrency",
        "toCurrency"
      ],
      "line": 20,
      "id": "testing-functionality-on-currency-converter-page;to-verify-user-navigation-to-correct-topic-page-from-community-page;;1"
    },
    {
      "cells": [
        "100.00",
        "INR",
        "GBP"
      ],
      "line": 21,
      "id": "testing-functionality-on-currency-converter-page;to-verify-user-navigation-to-correct-topic-page-from-community-page;;2"
    },
    {
      "cells": [
        "20",
        "EUR",
        "INR"
      ],
      "line": 22,
      "id": "testing-functionality-on-currency-converter-page;to-verify-user-navigation-to-correct-topic-page-from-community-page;;3"
    },
    {
      "cells": [
        "33",
        "USD",
        "INR"
      ],
      "line": 23,
      "id": "testing-functionality-on-currency-converter-page;to-verify-user-navigation-to-correct-topic-page-from-community-page;;4"
    },
    {
      "cells": [
        "44.46",
        "GBP",
        "USD"
      ],
      "line": 24,
      "id": "testing-functionality-on-currency-converter-page;to-verify-user-navigation-to-correct-topic-page-from-community-page;;5"
    },
    {
      "cells": [
        "78.908",
        "GBP",
        "EUR"
      ],
      "line": 25,
      "id": "testing-functionality-on-currency-converter-page;to-verify-user-navigation-to-correct-topic-page-from-community-page;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1367160327,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "To verify user navigation to correct topic page from Community Page",
  "description": "",
  "id": "testing-functionality-on-currency-converter-page;to-verify-user-navigation-to-correct-topic-page-from-community-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@transferwise"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to \"currencyConverter\" Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"100.00\" in \"amountTextBox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on \"fromCurrenyDropdownButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters \"INR\" in \"fromCurrencySearchBox\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on \"selectedFromCurrency\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"toCurrenyDropdownButton\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters \"GBP\" in \"toCurrencySearchBox\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on \"selectedToCurrency\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on \"convertCurrencyButton\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Verify user has navigated to correct \"currencyConverter\" calculation url for \"INR\" to \"GBP\" conversion for \"100.00\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify correct amount value \"convertedAmount\" is getting displayed after conversion from \"INR\" to \"GBP\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "currencyConverter",
      "offset": 19
    }
  ],
  "location": "BaseStepDef.user_navigates_to_Page(String)"
});
formatter.result({
  "duration": 952981635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100.00",
      "offset": 13
    },
    {
      "val": "amountTextBox",
      "offset": 25
    }
  ],
  "location": "BaseStepDef.user_enters_text_in_textBox(String,String)"
});
formatter.result({
  "duration": 185029894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fromCurrenyDropdownButton",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 175872645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INR",
      "offset": 13
    },
    {
      "val": "fromCurrencySearchBox",
      "offset": 22
    }
  ],
  "location": "BaseStepDef.user_enters_text_in_textBox(String,String)"
});
formatter.result({
  "duration": 100682237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selectedFromCurrency",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 66761200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "toCurrenyDropdownButton",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 100820114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GBP",
      "offset": 13
    },
    {
      "val": "toCurrencySearchBox",
      "offset": 22
    }
  ],
  "location": "BaseStepDef.user_enters_text_in_textBox(String,String)"
});
formatter.result({
  "duration": 105583836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selectedToCurrency",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 53605705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "convertCurrencyButton",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 579458080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "currencyConverter",
      "offset": 38
    },
    {
      "val": "INR",
      "offset": 78
    },
    {
      "val": "GBP",
      "offset": 87
    },
    {
      "val": "100.00",
      "offset": 108
    }
  ],
  "location": "CurrencyConverterPageStepDef.verify_user_navigated_to_correct_url(String,String,String,String)"
});
formatter.result({
  "duration": 12134927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "convertedAmount",
      "offset": 29
    },
    {
      "val": "INR",
      "offset": 90
    },
    {
      "val": "GBP",
      "offset": 99
    }
  ],
  "location": "CurrencyConverterPageStepDef.verify_correct_amount_gets_diaplyed_in_currency_conversion(String,String,String)"
});
formatter.result({
  "duration": 77768890,
  "status": "passed"
});
formatter.after({
  "duration": 132929046,
  "status": "passed"
});
formatter.before({
  "duration": 864365891,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "To verify user navigation to correct topic page from Community Page",
  "description": "",
  "id": "testing-functionality-on-currency-converter-page;to-verify-user-navigation-to-correct-topic-page-from-community-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@transferwise"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to \"currencyConverter\" Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"20\" in \"amountTextBox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on \"fromCurrenyDropdownButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters \"EUR\" in \"fromCurrencySearchBox\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on \"selectedFromCurrency\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"toCurrenyDropdownButton\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters \"INR\" in \"toCurrencySearchBox\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on \"selectedToCurrency\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on \"convertCurrencyButton\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Verify user has navigated to correct \"currencyConverter\" calculation url for \"EUR\" to \"INR\" conversion for \"20\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify correct amount value \"convertedAmount\" is getting displayed after conversion from \"EUR\" to \"INR\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "currencyConverter",
      "offset": 19
    }
  ],
  "location": "BaseStepDef.user_navigates_to_Page(String)"
});
formatter.result({
  "duration": 9442052734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 13
    },
    {
      "val": "amountTextBox",
      "offset": 21
    }
  ],
  "location": "BaseStepDef.user_enters_text_in_textBox(String,String)"
});
formatter.result({
  "duration": 155649507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fromCurrenyDropdownButton",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 149560764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EUR",
      "offset": 13
    },
    {
      "val": "fromCurrencySearchBox",
      "offset": 22
    }
  ],
  "location": "BaseStepDef.user_enters_text_in_textBox(String,String)"
});
formatter.result({
  "duration": 102815448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selectedFromCurrency",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 86880059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "toCurrenyDropdownButton",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 115790454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INR",
      "offset": 13
    },
    {
      "val": "toCurrencySearchBox",
      "offset": 22
    }
  ],
  "location": "BaseStepDef.user_enters_text_in_textBox(String,String)"
});
formatter.result({
  "duration": 91016963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selectedToCurrency",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 63575728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "convertCurrencyButton",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 3466917718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "currencyConverter",
      "offset": 38
    },
    {
      "val": "EUR",
      "offset": 78
    },
    {
      "val": "INR",
      "offset": 87
    },
    {
      "val": "20",
      "offset": 108
    }
  ],
  "location": "CurrencyConverterPageStepDef.verify_user_navigated_to_correct_url(String,String,String,String)"
});
formatter.result({
  "duration": 27836832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "convertedAmount",
      "offset": 29
    },
    {
      "val": "EUR",
      "offset": 90
    },
    {
      "val": "INR",
      "offset": 99
    }
  ],
  "location": "CurrencyConverterPageStepDef.verify_correct_amount_gets_diaplyed_in_currency_conversion(String,String,String)"
});
formatter.result({
  "duration": 126884731,
  "status": "passed"
});
formatter.after({
  "duration": 143864199,
  "status": "passed"
});
formatter.before({
  "duration": 842122642,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "To verify user navigation to correct topic page from Community Page",
  "description": "",
  "id": "testing-functionality-on-currency-converter-page;to-verify-user-navigation-to-correct-topic-page-from-community-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@transferwise"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to \"currencyConverter\" Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"33\" in \"amountTextBox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on \"fromCurrenyDropdownButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters \"USD\" in \"fromCurrencySearchBox\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on \"selectedFromCurrency\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"toCurrenyDropdownButton\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters \"INR\" in \"toCurrencySearchBox\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on \"selectedToCurrency\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on \"convertCurrencyButton\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Verify user has navigated to correct \"currencyConverter\" calculation url for \"USD\" to \"INR\" conversion for \"33\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify correct amount value \"convertedAmount\" is getting displayed after conversion from \"USD\" to \"INR\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "currencyConverter",
      "offset": 19
    }
  ],
  "location": "BaseStepDef.user_navigates_to_Page(String)"
});
formatter.result({
  "duration": 3248978334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "33",
      "offset": 13
    },
    {
      "val": "amountTextBox",
      "offset": 21
    }
  ],
  "location": "BaseStepDef.user_enters_text_in_textBox(String,String)"
});
formatter.result({
  "duration": 137396215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fromCurrenyDropdownButton",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 157578355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USD",
      "offset": 13
    },
    {
      "val": "fromCurrencySearchBox",
      "offset": 22
    }
  ],
  "location": "BaseStepDef.user_enters_text_in_textBox(String,String)"
});
formatter.result({
  "duration": 97928442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selectedFromCurrency",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 89492713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "toCurrenyDropdownButton",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 114034725,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INR",
      "offset": 13
    },
    {
      "val": "toCurrencySearchBox",
      "offset": 22
    }
  ],
  "location": "BaseStepDef.user_enters_text_in_textBox(String,String)"
});
formatter.result({
  "duration": 93883093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selectedToCurrency",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 72675066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "convertCurrencyButton",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 749660702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "currencyConverter",
      "offset": 38
    },
    {
      "val": "USD",
      "offset": 78
    },
    {
      "val": "INR",
      "offset": 87
    },
    {
      "val": "33",
      "offset": 108
    }
  ],
  "location": "CurrencyConverterPageStepDef.verify_user_navigated_to_correct_url(String,String,String,String)"
});
formatter.result({
  "duration": 55331419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "convertedAmount",
      "offset": 29
    },
    {
      "val": "USD",
      "offset": 90
    },
    {
      "val": "INR",
      "offset": 99
    }
  ],
  "location": "CurrencyConverterPageStepDef.verify_correct_amount_gets_diaplyed_in_currency_conversion(String,String,String)"
});
formatter.result({
  "duration": 70000041,
  "status": "passed"
});
formatter.after({
  "duration": 131729184,
  "status": "passed"
});
formatter.before({
  "duration": 857261918,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "To verify user navigation to correct topic page from Community Page",
  "description": "",
  "id": "testing-functionality-on-currency-converter-page;to-verify-user-navigation-to-correct-topic-page-from-community-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@transferwise"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to \"currencyConverter\" Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"44.46\" in \"amountTextBox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on \"fromCurrenyDropdownButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters \"GBP\" in \"fromCurrencySearchBox\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on \"selectedFromCurrency\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"toCurrenyDropdownButton\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters \"USD\" in \"toCurrencySearchBox\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on \"selectedToCurrency\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on \"convertCurrencyButton\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Verify user has navigated to correct \"currencyConverter\" calculation url for \"GBP\" to \"USD\" conversion for \"44.46\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify correct amount value \"convertedAmount\" is getting displayed after conversion from \"GBP\" to \"USD\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "currencyConverter",
      "offset": 19
    }
  ],
  "location": "BaseStepDef.user_navigates_to_Page(String)"
});
formatter.result({
  "duration": 2367792847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "44.46",
      "offset": 13
    },
    {
      "val": "amountTextBox",
      "offset": 24
    }
  ],
  "location": "BaseStepDef.user_enters_text_in_textBox(String,String)"
});
formatter.result({
  "duration": 164887311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fromCurrenyDropdownButton",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 175187960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GBP",
      "offset": 13
    },
    {
      "val": "fromCurrencySearchBox",
      "offset": 22
    }
  ],
  "location": "BaseStepDef.user_enters_text_in_textBox(String,String)"
});
formatter.result({
  "duration": 94162225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selectedFromCurrency",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 69772438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "toCurrenyDropdownButton",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 119746841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USD",
      "offset": 13
    },
    {
      "val": "toCurrencySearchBox",
      "offset": 22
    }
  ],
  "location": "BaseStepDef.user_enters_text_in_textBox(String,String)"
});
formatter.result({
  "duration": 119530023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selectedToCurrency",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 70030362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "convertCurrencyButton",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 614265274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "currencyConverter",
      "offset": 38
    },
    {
      "val": "GBP",
      "offset": 78
    },
    {
      "val": "USD",
      "offset": 87
    },
    {
      "val": "44.46",
      "offset": 108
    }
  ],
  "location": "CurrencyConverterPageStepDef.verify_user_navigated_to_correct_url(String,String,String,String)"
});
formatter.result({
  "duration": 66817448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "convertedAmount",
      "offset": 29
    },
    {
      "val": "GBP",
      "offset": 90
    },
    {
      "val": "USD",
      "offset": 99
    }
  ],
  "location": "CurrencyConverterPageStepDef.verify_correct_amount_gets_diaplyed_in_currency_conversion(String,String,String)"
});
formatter.result({
  "duration": 69588795,
  "status": "passed"
});
formatter.after({
  "duration": 131780134,
  "status": "passed"
});
formatter.before({
  "duration": 889633814,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "To verify user navigation to correct topic page from Community Page",
  "description": "",
  "id": "testing-functionality-on-currency-converter-page;to-verify-user-navigation-to-correct-topic-page-from-community-page;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@transferwise"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to \"currencyConverter\" Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"78.908\" in \"amountTextBox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on \"fromCurrenyDropdownButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters \"GBP\" in \"fromCurrencySearchBox\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on \"selectedFromCurrency\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"toCurrenyDropdownButton\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters \"EUR\" in \"toCurrencySearchBox\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on \"selectedToCurrency\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on \"convertCurrencyButton\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Verify user has navigated to correct \"currencyConverter\" calculation url for \"GBP\" to \"EUR\" conversion for \"78.908\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify correct amount value \"convertedAmount\" is getting displayed after conversion from \"GBP\" to \"EUR\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "currencyConverter",
      "offset": 19
    }
  ],
  "location": "BaseStepDef.user_navigates_to_Page(String)"
});
formatter.result({
  "duration": 1160371220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "78.908",
      "offset": 13
    },
    {
      "val": "amountTextBox",
      "offset": 25
    }
  ],
  "location": "BaseStepDef.user_enters_text_in_textBox(String,String)"
});
formatter.result({
  "duration": 167794708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fromCurrenyDropdownButton",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 164427157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GBP",
      "offset": 13
    },
    {
      "val": "fromCurrencySearchBox",
      "offset": 22
    }
  ],
  "location": "BaseStepDef.user_enters_text_in_textBox(String,String)"
});
formatter.result({
  "duration": 99863157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selectedFromCurrency",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 67640307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "toCurrenyDropdownButton",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 102281601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EUR",
      "offset": 13
    },
    {
      "val": "toCurrencySearchBox",
      "offset": 22
    }
  ],
  "location": "BaseStepDef.user_enters_text_in_textBox(String,String)"
});
formatter.result({
  "duration": 131994767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selectedToCurrency",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 60069663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "convertCurrencyButton",
      "offset": 16
    }
  ],
  "location": "BaseStepDef.user_clicks_on_Page(String)"
});
formatter.result({
  "duration": 608641675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "currencyConverter",
      "offset": 38
    },
    {
      "val": "GBP",
      "offset": 78
    },
    {
      "val": "EUR",
      "offset": 87
    },
    {
      "val": "78.908",
      "offset": 108
    }
  ],
  "location": "CurrencyConverterPageStepDef.verify_user_navigated_to_correct_url(String,String,String,String)"
});
formatter.result({
  "duration": 7415007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "convertedAmount",
      "offset": 29
    },
    {
      "val": "GBP",
      "offset": 90
    },
    {
      "val": "EUR",
      "offset": 99
    }
  ],
  "location": "CurrencyConverterPageStepDef.verify_correct_amount_gets_diaplyed_in_currency_conversion(String,String,String)"
});
formatter.result({
  "duration": 60882235,
  "status": "passed"
});
formatter.after({
  "duration": 131038374,
  "status": "passed"
});
});