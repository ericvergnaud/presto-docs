package prompto.website;

import java.net.URL;
import java.util.Collection;

import prompto.config.IServerConfiguration;
import prompto.libraries.Libraries;
import prompto.server.AppServer;

public class Application {

	public static void main(String[] args) throws Throwable {
		Collection<URL> urls = Libraries.getPromptoLibraries(Application.class);
		IServerConfiguration config = AppServer.loadConfiguration(args);
		config = config.withResourceURLs(urls.toArray(new URL[0]));
		AppServer.main(config, null, null, null, null);
	}

}
