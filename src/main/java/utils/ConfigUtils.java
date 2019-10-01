package utils;

public class ConfigUtils {

	static PropertyUtils properties = new PropertyUtils();
	private final static String configFilePath = "/src/test/resources/properties/config.properties";
	private static String path = System.getProperty("user.dir");

	public static String getReportConfigPath() throws Throwable {
		String reportConfigPath = properties.getProperty(configFilePath, "reportConfigPath");
		reportConfigPath = path + reportConfigPath;
		return reportConfigPath;
	}
}
