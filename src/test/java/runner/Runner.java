package runner;

import java.io.*;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import com.cucumber.listener.Reporter;

import utils.ConfigUtils;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		strict = false, 
		monochrome = true,
		features="src/test/resources/feature", 
		glue= { "helpers",
				"stepDefinition"
			},
		plugin = {"pretty", "html:target/cucumber-reports",	"json:target/cucumber-reports/cucumber.json", 
				"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html" },
		tags ={"@transferwise"}
		)

public class Runner {

	@AfterClass
	public static void writeExtentReport() throws Throwable {
		Reporter.loadXMLConfig(new File(ConfigUtils.getReportConfigPath()));
	}
} 

