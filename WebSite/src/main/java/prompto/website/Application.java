package prompto.website;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import prompto.server.AppServer;

public class Application {

	public static void main(String[] args) throws Throwable {
		List<String> argsList = new ArrayList<>(Arrays.asList(args));
		argsList.add("-application");
		argsList.add("web-site");
		argsList.add("-version");
		argsList.add("1.0.0");
		AppServer.main(argsList.toArray(new String[argsList.size()]));
	}

}
