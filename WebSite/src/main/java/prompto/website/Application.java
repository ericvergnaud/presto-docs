package prompto.website;

import java.net.URL;
import java.util.Collection;

import prompto.cloud.Cloud;
import prompto.config.IServerConfiguration;
import prompto.libraries.Libraries;
import prompto.server.AppServer;

public class Application {

	public static void main(String[] args) throws Throwable {
		installCloudJARs();
		Class<?> kmsClass = Class.forName("prompto.aws.KMS");
		Collection<URL> urls = Libraries.getPromptoLibraries(Application.class, kmsClass);
		IServerConfiguration config = AppServer.loadConfiguration(args);
		config = config.withResourceURLs(urls.toArray(new URL[0]));
		AppServer.main(config, null, null, null, null);
	}

	private static void installCloudJARs() throws Exception {
		Cloud cloud = Cloud.current();
		if(cloud==null)
			return;
		AppServer.installCloudJARs(cloud);
	}

}
