import { useState } from 'react';
import PromptoPlayer from "../prompto-player/PromptoPlayer";

import '../../assets/documentation.scss';

function Documentation() {
	const initState = {
		class1: false,
		class2: false,
		class3: false,
		class4: false,
		class5: false,
		class6: false
	};

	const [activeClass, setActiveClass] = useState(initState);

	const activateClass = (classCategory) => {
		classCategory ? setActiveClass(({[classCategory]: true})) : setActiveClass((initState));
	};

    return (
        <article className="p-documentation">
            <div className="uk-container uk-container-large uk-padding">
            	<div className="uk-grid uk-grid-large" data-uk-grid>
		            <div className="uk-width-1-5@s">
		                <ul className="uk-tab-right" data-uk-tab="connect: #component-tab-right; animation: uk-animation-fade">
		                    <li onClick={ () => activateClass() }>
		                    	<a href="#">Overview</a>
		                    </li>
		                    <li onClick={ () => activateClass('class1') }>
								<a href="#" className="uk-flex uk-flex-middle uk-flex-between">
									<span className="uk-margin-small-right">Data</span>
									{ 
										activeClass.class1 ? (
										<span data-uk-icon="icon: chevron-down"></span> ) : (
										<span data-uk-icon="icon: chevron-right"></span> )
									}
								</a>
							</li>
							<li className={ activeClass.class1 ? 'p-dropdown active' : 'p-dropdown'}>
								<a href="#">JSON</a>
							</li>
							<li className={ activeClass.class1 ? 'p-dropdown active' : 'p-dropdown'}>
								<a href="#">CSV</a>
						    </li>
						    <li onClick={ () => activateClass('class2') }>
								<a href="#" className="uk-flex uk-flex-middle uk-flex-between">
									<span className="uk-margin-small-right">Internet</span>
									{ 
										activeClass.class2 ? (
										<span data-uk-icon="icon: chevron-down"></span> ) : (
										<span data-uk-icon="icon: chevron-right"></span> )
									}
								</a>
							</li>
							<li className={ activeClass.class2 ? 'p-dropdown active' : 'p-dropdown'}>
		                    	<a href="#">Url</a>
		                    </li>
		                    <li onClick={ () => activateClass('class3') }>
		                    	<a href="#" className="uk-flex uk-flex-middle uk-flex-between">
		                    		<span className="uk-margin-small-right">UI Frameworks</span>
									{ 
										activeClass.class3 ? (
										<span data-uk-icon="icon: chevron-down"></span> ) : (
										<span data-uk-icon="icon: chevron-right"></span> )
									}
		                    	</a>
		                    </li>
					        <li className={ activeClass.class3 ? 'p-dropdown active' : 'p-dropdown'}>
		                    	<a href="#">React Bootstrap 3</a>
		                    </li>
		                    <li onClick={ () => activateClass('class4') }>
		                    	<a href="#" className="uk-flex uk-flex-middle uk-flex-between">
		                    		<span className="uk-margin-small-right">Server</span>
		                    		{ 
										activeClass.class4 ? (
										<span data-uk-icon="icon: chevron-down"></span> ) : (
										<span data-uk-icon="icon: chevron-right"></span> )
									}
		                    	</a>
		                    </li>
							<li className={ activeClass.class4 ? 'p-dropdown active' : 'p-dropdown'}>
						    	<a href="#">Services</a>
						    </li>
		                    <li className={ activeClass.class4 ? 'p-dropdown active' : 'p-dropdown'}>
		                    	<a href="#">Methods</a>
		                    </li>
		                    <li>
		                    	<a href="#">Attributes</a>
		                    </li>
		                    <li>
		                    	<a href="#">Mathematics</a>
		                    </li>
		                    <li onClick={ () => activateClass('class5') }>
		                    	<a href="#" className="uk-flex uk-flex-middle uk-flex-between">
		                    		<span>Console</span>
									{ 
										activeClass.class5 ? (
										<span data-uk-icon="icon: chevron-down"></span> ) : (
										<span data-uk-icon="icon: chevron-right"></span> )
									}
								</a>
							</li>
							<li className={ activeClass.class5 ? 'p-dropdown active' : 'p-dropdown'}>
						        <a href="#">Print</a>
						    </li>
		                    <li className={ activeClass.class5 ? 'p-dropdown active' : 'p-dropdown'}>
		                    	<a href="#">PrintLine</a>
		                    </li>
		                    <li className={ activeClass.class5 ? 'p-dropdown active' : 'p-dropdown'}>
		                    	<a href="#">Buffer</a>
		                    </li>
		                    <li>
		                    	<a href="#">Utilities</a>
		                    </li>
		                    <li>
		                    	<a href="#">Parsing</a>
		                    </li>
		                    <li onClick={ () => activateClass('class6') }>
		                    	<a href="#" className="uk-flex uk-flex-middle uk-flex-between">
		                    		<span>Cloud</span>
									{ 
										activeClass.class6 ? (
										<span data-uk-icon="icon: chevron-down"></span> ) : (
										<span data-uk-icon="icon: chevron-right"></span> )
									}
								</a>
		                    </li>
				        	<li className={ activeClass.class6 ? 'p-dropdown active' : 'p-dropdown'}>
		                    	<a href="#">AWS</a>
		                    </li>
		                </ul>
		            </div>
		            <div className="uk-width-expand@s">
		                <ul id="component-tab-right" className="uk-switcher">
		                    <li>
		                    	<h3>Overview</h3>
		                    	<p>
		                    		This section describes components provided with the Prompto runtime. See the Language section for the Prompto syntax and the built-in types.
		                    	</p>
		                    	<h4>Disclaimer</h4>
		                    	<p>
		                    		Prompto Libraries are work in progress. We are adding more components and features as users encounter the need for them.<br />
		                    		If you find that a component or feature is missing, <a href="mailto:support@prompto.org?subject=Feature Request">please contact Prompto support</a>.<br />
									Alternately, create a <a href="https://github.com/prompto/prompto-libraries/issues">feature request on GitHub</a>.
								</p>
		                    </li>
		                    <li>
		                    	<h3>Data</h3>
		                    	<p>
		                    		Business data can be provided by users through input screens, or receveid from other systems.<br />
		                    		Prompto supports reading data in the following formats:
		                    	</p>
		                    	<ul>
		                    		<li>CSV</li>
		                    		<li>JSON</li>
		                    		<li>XML (not available yet)</li>
		                    		<li>YAML (not available yet)</li>
		                    	</ul>
		                    </li>
		                    <li>
		                    	<h3>JSON</h3>
			                    <p>Data received from Web services if often provided in JSON format.<br />
			                        Prompto is able to analyze JSON data provided as Text.<br />
			                        The Text itself should be read from resources using <code>read</code> statements.<br />
			                        <i>(support for parsing JSON resources directly is not available yet)</i>
			                    </p>
			                    <h4>JSON methods</h4>
			                    <ul>
			                        <li>
			                        	<p><strong>readJson</strong> <i>text</i>:</p>
			                            <pre>define readJson as native method receiving text returning Any</pre>
			                            <p>
			                                The <i>text</i> argument must contain valid JSON text.<br/>
			                                The method returns an <code>Any</code> value, which is a generic type for pretty much anything.
			                            </p>
			                            <p>The reason for returning <code>Any</code> is that although JSON is often used to return JavaScript objects, JSON actually supports the following types:
			                            </p>
			                            <ul>
			                                <li>null</li>
			                                <li>noolean</li>
			                                <li>number</li>
			                                <li>string</li>
			                                <li>array</li>
			                                <li>object</li>
			                            </ul>
			                            <p>As a consequence, developers need to check the type of the value returned before making any decision.</p>
			                            <p> Here is an example:</p>
		                    			<PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/data/jsonExample.pec" runnable={true}/>
		                    		</li>
		                    	</ul>
		                    </li>
		                    <li>
		                    	<h3>Reading CSV</h3>
			                    <p>Prompto is able to analyze CSV data provided as Text.<br />
			                        The Text itself should be read from resources using <code>read</code> statements.<br />
			                        <i>(support for parsing CSV resources directly is not available yet)</i></p>
			                    <h4>CSV methods</h4>
			                    <ul>
			                        <li>
			                        	<p>
			                        		<strong>readCsv</strong> <i>text, columnNames, separator, quote</i>:<br />
			                            	This method returns a <code>Document[]</code> i.e. a list of Documents.<br />
			                            	<pre>{String.raw`define readCsv as native method receiving text, Text<:> columnNames = nothing, Character separator = ',', Character quote = '"' returning Document[]`}</pre>
			                            </p>
			                            <p>
			                                The <i>text</i> argument must contain valid CSV text.<br />
			                                The <i>columnNames</i> argument is optional. When provided it is used to rename incoming columns.<br />
			                                The <i>separator</i> optional argument is used to detect <i>fields</i> within a CSV <i>record</i>.<br />
			                                The <i>quote</i> optional argument is used to unwrap field values.<br />
			                                Here is a simple example:
			                            </p>

			                            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/data/csvSimple.pec" runnable={true}/>
			                            <p>Here is an example of mapping column names:</p>

			                            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/data/csvMapping.pec" runnable={true}/>
			                            <p><i>Notice how the "Code" column was renamed to "id"</i></p>
			                        </li>
			                        <li>
			                        	<p><strong>iterateCsv</strong> <i>text, columnNames, separator, quote</i>:<br />
			                            This method is similar to <code>readCsv</code>, but returns an <code>Iterator&lt;Document&gt;</code>, which is convenient and consumes less memory.<br />
			                            Here is an example:</p>

			                            <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/data/csvIterate.pec" runnable={true}/>
			                        </li>
			                    </ul>
		                    </li>
		                    <li>
		                    	<h3>Internet</h3>
			                    <p>Prompto has the following Internet related resources:</p>
			                    <ul className="uk-text-small">
			                    	<li>Url</li>
			                    </ul>
                    		</li>
                    		<li>
                    			<h3>Url</h3>
                    			<p>A <code>Url</code> is a native resource which can be utilized to read content from external web sites.<b/>
			                    It supports the following protocols:</p>
			                    <ul className="uk-text-small">
			                        <li>http</li>
			                        <li>https</li>
			                        <li>file</li>
			                    </ul>
			                    <p>A <code>Url</code> is initialized with a <i>path</i> and the <i>encoding</i> used to read the Text.
			                        Encoding refers to the text encoding such as utf-8 or cp-1252, NOT a cryptographic encoding.<br />
			                        Nowadays, most web sites use utf-8 encoding.<br />
			                        Here is an example:</p>
			                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/internet/url.pec" runnable={true}/>
			                </li>
			                <li>
			                	<h3>UI Frameworks</h3>
			                    <p>UI Frameworks are libraries which aim to provide an advanced and consistent look and feel to applications.<br />
			                        This is often done by sophisticated techniques combining JavaScript and CSS.<br />
			                        Examples of popular UI Frameworks are Bootstrap, Semantic UI, Foundation, Bulma, Pure or Milligram.</p>
			                    <p>Prompto does not itself aim to <i>create</i> such frameworks. Rather, it provides adapters for them, in the form of native widget libraries.<b r/>
			                        Since Prompto widgets are tied to rendering engines such as React or Vue, Prompto only provides widget libraries for frameworks available as components.<br />
			                        As of writing, Prompto provides widget libraries for:
			                    </p>
			                    <ul>
			                        <li>React Bootstrap 3</li>
			                        <li>React Bootstrap 4 (not available yet)</li>
			                        <li>React Semantic UI 2 (not available yet)</li>
			                    </ul>
			                </li>
			                <li>
			                	<h3>React Bootstrap 3</h3>
			                    <p>Bootstrap is one of the most popular UI frameworks, created by Twitter.<br />
			                        React Bootstrap 3 is a set of React components which make it easy to use.<br />
			                        The full list of components <a rel="noopener noreferrer" href="https://5c507d49471426000887a6a7--react-bootstrap.netlify.com" target="_blank">is available here</a>.
			                        On top of the above standard components, React Bootstrap 3 comes with additional components:</p>
			                    <ul>
			                        <li><code>DatePicker</code>
			                            <p>The DatePicker component, is derived from the <a rel="noopener noreferrer" href="https://www.npmjs.com/package/react-bootstrap-date-picker" target="_blank">standard react-bootstrap-date-picker</a>.
			                                The only difference is that the Prompto one accepts a Prompto Date as default value and as parameter to the onChange event handler.</p>
			                        </li>
			                        <li><code>Typeahead</code>
			                            <p>The Typeahead component, is derived from the <a rel="noopener noreferrer" href="https://www.npmjs.com/package/react-bootstrap-typeahead" target="_blank">standard react-bootstrap-typeahead</a>,
			                                and made compatible with Prompto data.</p>
			                        </li>
			                        <li><code>ContextMenu</code>
			                            <p>The ContextMenu component, is a custom component combining <code>Clearfix and &lt;ul class="dropdown-menu"&gt;</code> to simplify display of context menus.</p>
			                            Example usage:<br />
			                            <pre>
{`menu = <ContextMenu>
			<MenuItem key={1} onClick={someAction1}>Some item</MenuItem>
			<MenuItem key={2} onClick={someAction2}>Other item</MenuItem>
	   </ContextMenu>;
showReactContextMenu(event, menu);`};
			                            </pre>
			                        </li>
			                    </ul>
			                	<p>Please refer to above documentations for details.</p>
			            		<p><i>Prompto does not support inner categories (which are required in JavaScript due to the uncontrolled proliferation of global names).<br />
			                        Therefore, the Prompto adapter uses identifiers, which are mapped to the corresponding React Bootstrap 3 components, as follows:</i></p>
			                    <table className="uk-table uk-table-small uk-table-hover uk-text-small uk-table-striped">
			                        <thead>
			                            <tr>
			                                <th>Prompto widget</th>
			                                <th>React Bootstap 3 component</th>
			                            </tr>
			                        </thead>
			                        <tbody>
			                            <tr>
			                                <td>Button</td>
			                                <td>Button</td>
			                            </tr>
			                            <tr>
			                                <td>SplitButton</td>
			                                <td>SplitButton</td>
			                            </tr>
			                            <tr>
			                                <td>Checkbox</td>
			                                <td>Checkbox</td>
			                            </tr>
			                            <tr>
			                                <td>Radio</td>
			                                <td>Radio</td>
			                            </tr>
			                            <tr>
			                                <td>DropdownButton</td>
			                                <td>DropdownButton</td>
			                            </tr>
			                            <tr>
			                                <td>MenuItem</td>
			                                <td>MenuItem</td>
			                            </tr>
			                            <tr>
			                                <td>InputGroup</td>
			                                <td>InputGroup</td>
			                            </tr>
			                            <tr>
			                                <td>InputGroupAddon</td>
			                                <td>InputGroup.Addon</td>
			                            </tr>
			                            <tr>
			                                <td>InputGroupButton</td>
			                                <td>InputGroup.Button</td>
			                            </tr>
			                            <tr>
			                                <td>FormGroup</td>
			                                <td>FormGroup</td>
			                            </tr>
			                            <tr>
			                                <td>Form</td>
			                                <td>Form</td>
			                            </tr>
			                            <tr>
			                                <td>FormControl</td>
			                                <td>FormControl</td>
			                            </tr>
			                            <tr>
			                                <td>ControlLabel</td>
			                                <td>ControlLabel</td>
			                            </tr>
			                            <tr>
			                                <td>HelpBlock</td>
			                                <td>HelpBlock</td>
			                            </tr>
			                            <tr>
			                                <td>Table</td>
			                                <td>Table</td>
			                            </tr>
			                            <tr>
			                                <td>Modal</td>
			                                <td>Modal</td>
			                            </tr>
			                            <tr>
			                                <td>ModalDialog</td>
			                                <td>Modal.Dialog</td>
			                            </tr>
			                            <tr>
			                                <td>ModalHeader</td>
			                                <td>Modal.Header</td>
			                            </tr>
			                            <tr>
			                                <td>ModalFooter</td>
			                                <td>Modal.Footer</td>
			                            </tr>
			                            <tr>
			                                <td>ModalBody</td>
			                                <td>Modal.Body</td>
			                            </tr>
			                            <tr>
			                                <td>ModalFooter</td>
			                                <td>Modal.Footer</td>
			                            </tr>
			                            <tr>
			                                <td>ModalTitle</td>
			                                <td>Modal.Title</td>
			                            </tr>
			                            <tr>
			                                <td>Navbar</td>
			                                <td>Navbar</td>
			                            </tr>
			                            <tr>
			                                <td>NavbarBrand</td>
			                                <td>Navbar.Brand</td>
			                            </tr>
			                            <tr>
			                                <td>NavbarHeader</td>
			                                <td>Navbar.Header</td>
			                            </tr>
			                            <tr>
			                                <td>NavbarToggle</td>
			                                <td>Navbar.Toggle</td>
			                            </tr>
			                            <tr>
			                                <td>NavbarCollapse</td>
			                                <td>Navbar.Collapse</td>
			                            </tr>
			                            <tr>
			                                <td>NavbarText</td>
			                                <td>Navbar.Text</td>
			                            </tr>
			                            <tr>
			                                <td>NavbarForm</td>
			                                <td>Navbar.Form</td>
			                            </tr>
			                            <tr>
			                                <td>Nav</td>
			                                <td>Nav</td>
			                            </tr>
			                            <tr>
			                                <td>NavDropdown</td>
			                                <td>NavDropdown</td>
			                            </tr>
			                            <tr>
			                                <td>NavItem</td>
			                                <td>NavItem</td>
			                            </tr>
			                            <tr>
			                                <td>Tabs</td>
			                                <td>Tabs</td>
			                            </tr>
			                             <tr>
			                                <td>Grid</td>
			                                <td>Grid</td>
			                            </tr>
			                            <tr>
			                                <td>Row</td>
			                                <td>Row</td>
			                            </tr>
			                            <tr>
			                                <td>Col</td>
			                                <td>Col</td>
			                            </tr>
			                            <tr>
			                                <td>Clearfix</td>
			                                <td>Clearfix</td>
			                            </tr>
			                            <tr>
			                                <td>Glyphicon</td>
			                                <td>Glyphicon</td>
			                            </tr>
			                            <tr>
			                                <td>Thumbnail</td>
			                                <td>Thumbnail</td>
			                            </tr>
			                            <tr>
			                                <td>PageHeader</td>
			                                <td>PageHeader</td>
			                            </tr>
			                            <tr>
			                                <td>PanelGroup</td>
			                                <td>PanelGroup</td>
			                            </tr>
			                            <tr>
			                                <td>Panel</td>
			                                <td>Panel</td>
			                            </tr>
			                            <tr>
			                                <td>PanelCollapse</td>
			                                <td>Panel.Collapse</td>
			                            </tr>
			                            <tr>
			                                <td>PanelToggle</td>
			                                <td>Panel.Toggle</td>
			                            </tr>
			                            <tr>
			                                <td>PanelTitle</td>
			                                <td>Panel.Title</td>
			                            </tr>
			                            <tr>
			                                <td>PanelHeading</td>
			                                <td>Panel.Heading</td>
			                            </tr>
			                            <tr>
			                                <td>PanelBody</td>
			                                <td>Panel.Body</td>
			                            </tr>
			                            <tr>
			                                <td>PanelFooter</td>
			                                <td>Panel.Footer</td>
			                            </tr>
			                           <tr>
			                                <td>DatePicker</td>
			                                <td>DatePicker</td>
			                            </tr>
			                            <tr>
			                                <td>Typeahead</td>
			                                <td>Typeahead</td>
			                            </tr>
			                            <tr>
			                                <td>ContextMenu</td>
			                                <td>ContextMenu</td>
			                            </tr>
			                        </tbody>
			                    </table>
			            		<p><i>(the above covers most but not all React Bootstrap 3 components. <a href="mailto:support@prompto.org?subject=Feature%20request">We will add missing ones on demand</a>)</i></p>
			            	</li>
			            	<li>
			            		<h3>Server specific libraries</h3>
								<p>The Prompto Web server provides server-specific methods, categories and Web service handlers.</p>
							</li>
							<li>
								<h3>Web services</h3>
			                    <p>Communication between a Prompto web page and the Prompto server is built-in. Any method available on the server is also available in the browser.<br/>
			                        You therefore you do not need to create web services to build a typical web site.</p>
			                    <p>However, there are situations where you need to expose a web service for use by other clients than the web pages.<br />
			                        The protocol for these services is often defined by the clients rather than your server.<br />
			                        As an example, listening to Github web hooks requires complying with the Github protocol.</p>
			                    <p>Prompto makes it easy to expose such Web services, by installing them through simple code.<br />
			                        A Web service is exposed at a given path <i>pattern</i>, for example: <code>{`api/v3/orders/*`}</code>.<br />
			                        For that specific path <i>pattern</i>, you need to install a method called <i>serviceHandler</i>.<br />
			                        This is done as follows:</p>
			                    <pre>{
			                    	`define gitHubEventHandler as method receiving Document doc doing:
	// do something

installServiceHandler with "/git/event/*" as path and gitHubEventHandler as serviceHandler`
								}</pre>
			            		<p>That's it!</p>
			                    <p>The <code>installServiceHandler</code> must be called by your serverStartup method.<br />
			                        From there, any incoming request which matches the <i>pattern</i> will be routed to your handler.<br />
			                        Prompto takes care of converting parameters to a Document, whether the protocol is URL encoded, JSON post of FormData
			                    </p>
			                    <p>If (as recommended) your Web application or Web service is password protected but the client is anonymous, you will need to whitelist the path <i>pattern</i>.</p>
							</li>
							<li>
								<h3>Server methods</h3>
			                    <p>The Prompto Web server provides server-specific methods and categories:</p>
			                    <ul>
			                        <li>
			                        	<p><strong>getHttpUser</strong>:</p>
			                            <pre>define getHttpUser as native method returning Text</pre>
			                            <p>This method returns the login of the authenticated user.</p>
			                        </li>
			                        <li>
			                        	<p><strong>getHttpPort</strong>:</p>
			                            <pre>define getHttpPort as native method returning Integer</pre>
			                            <p>This method returns the port number of the running server.</p>
			                        </li>
			                        <li>
			                        	<p><strong>getHttpSession</strong>:</p>
			                            <pre>define getHttpSession as native method returning Document</pre>
			                            <p>Once users are authenticated, the Web server keeps track of the user, otherwise the user would have to keep reauthenticating.<br />
			                                This is done using a server session, which times out after a certain time.<br />
			                                On top of keeping track of the user, a server session can also hold additional arbitrary information.<br />
			                                The <code>Document</code> returned by this method lets you attach this information.</p>
			                            <p>Important note 1: sessions are not persistent and there is no mechanism to store session information when sessions expire.</p>
			                            <p>Important note 2: do not store sensitive information in sessions.</p>
			                        </li>
			                        <li>
			                        	<p><strong>getLoginFactory</strong>:</p>
			                            <pre>define getLoginFactory as native method receiving Text config = nothing returning LoginFactory</pre>
			                            <p>This method returns the LoginFactory currently used by the server.<br />
			                                As of writing, this is for use by Prompto tools only.</p>
			                        </li>
			                        <li>
			                        	<p><strong>LoginFactory</strong>:</p>
			                            <pre>define LoginFactory as native category</pre>
			                            <p>The LoginFactory is a special category used to manage user authentication.<br />
			                                As of writing, this is for use by Prompto tools only.</p>
			                        </li>
			                    </ul>
							</li>
							<li>
								<h3>Attributes</h3>
			                    <p>Prompto has the following predefined attributes:</p>
					            <pre>{
`// runtime reference of any object
define id as Any attribute`
								}</pre>
					            <pre>{
`// database reference of stored object
define dbId as Any attribute`
								}</pre>
					            <pre>{
`// any object has a text attribute, used for display
define text as storable Text attribute with value and words index`
								}</pre>
					            <pre>{
`// many objects have a name, it is not unique
define name as storable Text attribute with key and value index`
								}</pre>
					            <pre>{
`// many objects have a description, it is not unique
define description as storable Text attribute with words index`
								}</pre>
					            <pre>{
`// many objects have an image, it is not unique
define image as storable Image attribute`
								}</pre>
					            <pre>{
`// many events have a timeStamp
define timeStamp as storable DateTime attribute`
								}</pre>
					            <pre>{
`// urls, files and fragments have a path
define path as storable Text attribute`
								}</pre>
					            <pre>{
`// external text sources have an encoding such as "UTF-8"
define encoding as storable Text attribute`
								}</pre>
					            <pre>{
`// many systems require a login
define login as storable Text attribute with key and value index`
								}</pre>
					            <pre>{
`// many systems require a password
define password as Text attribute`
								}</pre>
					            <pre>{
`// users typically have an email
define email as storable Text attribute with value index`
								}</pre>
					            <pre>{
`// many objects have an Url
define url as storable Url attribute`
								}</pre>
							</li>
							<li>
								<h3>Mathematical constants</h3>
					            <p>Prompto has the following predefined mathematical constants:</p>
					            <pre>{
`define DecimalConstant as enumerated Decimal with symbols:
PI with 3.14159265358979323846 as value
E with 2.7182818284590452354 as value`
								}</pre>
					            <p>The following mathematical constants are defined by the language:</p>
					            <pre>MIN_INTEGER (-2<sup>63</sup>)</pre>
					            <pre>MAX_INTEGER (2<sup>63</sup>-1)</pre>
							</li>
							<li>
								<h3>Console output</h3>
				                <p>Prompto lets you <i>print</i> information to the console output.<b/>
				                    This is useful during development, and is achived using a <code>print</code> or <code>printLine</code> method call.
				                <br />
				                Alternately, output can be sent to a <code>Writer</code>.
				                    As of writing, Prompto supports a <code>ConsoleWriter</code> (the default) and a <code>TextWriter</code>.</p>
				                <h4>Buffer</h4>
				                <p>Buffer is a native <i>resource</i> which follows Prompto resource requirements.<br />
				                    You can <code>read</code> and <code>write</code> Text to a <i>Buffer</i>.
				                </p>
							</li>
							<li>
								<h3>print <i>Any value</i></h3>
			                    <p>This method has the following prototype:</p>
			                    <pre>define print as method receiving any value</pre>
			                    <p>The <i>print</i> method accepts any type of value, and will convert it to Text by calling its built-in <code>text</code> attribute.<br />
			                        It sends the output to the ConsoleWriter.
			                    </p>
			                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/console/printAny.pec" runnable={true}/>

			                    <h3>print <i>Any value</i> to a <i>Writer writer</i></h3>
			                    <p>This method has the following prototype:</p>
			                    <pre>define print as method receiving any value and Writer writer</pre>
			                    <p>The <i>print</i> method accepts any type of value, and will convert it to Text by calling its built-in <code>text</code> attribute.<br />
			                        It sends the output to the writer. This can be convenient to send the output to the error output.
			                    </p>
			                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/console/printAnyWriter.pec" runnable={true}/>
							</li>
							<li>
								<h3>printLine <i>Any value</i></h3>
			                    <p>This method has the following prototype:</p>
			                    <pre>define printLine as method receiving any value</pre>
			                    <p>The <i>printLine</i> method accepts any type of value, and will convert it to Text by calling its built-in <code>text</code> attribute.<br />
			                        It sends the output to the ConsoleWriter, followed by a carriage return.
			                    </p>
			                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/console/printLineAny.pec" runnable={true}/>

			                    <h3>printLine <i>Any value</i> to a <i>Writer writer</i></h3>
			                    <p>This method has the following prototype:</p>
			                    <pre>define printLine as method receiving any value and Writer writer</pre>
			                    <p>The <i>print</i> method accepts any type of value, and will convert it to Text by calling its built-in <code>text</code> attribute.<br />
			                        It sends the output to the writer, followed by a carriage return. This can be convenient to send the output to the error output.
			                    </p>
			                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/console/printLineAnyWriter.pec" runnable={true}/>
							</li>
							<li>
								<h3>Buffer</h3>
			                    <p>Buffer is a native <i>resource</i> which follows Prompto resource requirements.<br />
			                        You can <code>read</code> and <code>write</code> Text to a <i>Buffer</i>.</p>
			                    <PromptoPlayer key={PromptoPlayer.nextKey()} lines={12} sampleUrl="samples/console/buffer.pec" runnable={true}/>
							</li>
							<li>
								<h3>Utility methods</h3>
					            <ul>
					                <li><p><strong>randomUuid</strong><br />
					                    This method returns a random UUID as defined by <a href="http://www.ietf.org/rfc/rfc4122.txt">http://www.ietf.org/rfc/rfc4122.txt</a>.</p>
					                    <pre>define randomUuid as native method returning Uuid</pre>
					                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/utils/randomUuid.pec" runnable={true}/>
					                </li>
					                <li><p><strong>now</strong><br />
					                    This method returns the current DateTime, in the timezone where it is executed.</p>
					                    <pre>define now as native method returning DateTime</pre>
					                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/utils/now.pec" runnable={true}/>
					                </li>
					                <li><p><strong>today</strong><br />
					                    This method returns the current Date.</p>
					                    <pre>define today as method returning Date</pre>
					                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/utils/today.pec" runnable={true}/>
					                </li>
					                <li><p><strong>sleep</strong><br />
					                    This method waits for <i>millis</i> milliseconds</p>
					                    <pre>define sleep as native method receiving Integer millis</pre>
					                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/utils/sleep.pec"/>
					                    <i>(in JavaScript, due to language limitations, this methods consumes all available CPU until millis are elapsed)</i>
					                </li>
					                <li><p><strong>isServer</strong><br />
					                    This method returns true when ran on the server, false otherwise.</p>
					                    <pre>define isServer as native method returning Boolean</pre>
					                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/utils/isServer.pec" runnable={true}/>
					                </li>
					                <li><p><strong>fetchTextResource</strong><br />
					                    This method fetches a Text resource from the code store.</p>
					                    <pre>define fetchTextResource as native method receiving path returning Text</pre>
					                </li>
					                <li><p><strong>htmlDecode</strong><br />
					                    This method replaces within a Text any html entity with its corresponding plain text.</p>
					                    <pre>define htmlDecode as native method receiving Text value returning Text</pre>
					                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/utils/htmlDecode.pec" runnable={true}/>
					                </li>
					                <li><p><strong>htmlEncode</strong><br />
					                    This method replaces within a Text any illegal text with its corresponding entity.</p>
					                    <pre>define htmlEncode as native method receiving Text value returning Text</pre>
					                    <PromptoPlayer key={PromptoPlayer.nextKey()} sampleUrl="samples/utils/htmlEncode.pec" runnable={true}/>
					                </li>
					            </ul>
							</li>
							<li>
								<h3>Parsing</h3>
			                    <p>When received from external systems, non Text values are sometimes provided as Text.<br/>
			                    The purpose of <code>parseXXX</code> methods is to convert these values into their real type.</p>
					            <ul>
					                <li><p><strong>parseInteger</strong><br />
					                    This method returns an Integer.</p>
					                    <pre>define parseInteger as native method receiving Text text returning Integer</pre>
					                </li>
					                <li><p><strong>parseDecimal</strong><br />
					                    This method returns a Decimal.</p>
					                    <pre>define parseDecimal as native method receiving Text text returning Decimal</pre>
					                </li>
					                <li><p><strong>parseDate</strong><br />
					                    This method returns a Date.</p>
					                    <pre>define parseDate as native method receiving Text text returning Decimal</pre>
					                </li>
					                <li><p><strong>parseTime</strong><br />
					                    This method returns a Time.</p>
					                    <pre>define parseTime as native method receiving Text text returning Time</pre>
					                </li>
					                <li><p><strong>parseDateTime</strong><br />
					                    This method returns a DateTime.</p>
					                    <pre>define parseDateTime as native method receiving Text text returning DateTime</pre>
					                </li>
					                <li><p><strong>parsePeriod</strong><br />
					                    This method returns a Period.</p>
					                    <pre>define parsePeriod as native method receiving Text text returning Period</pre>
					                </li>
					                <li><p><strong>parseVersion</strong><br />
					                    This method returns a Version.</p>
					                    <pre>define parseVersion as native method receiving Text text returning Version</pre>
					                </li>
					                <li><p><strong>parseUuid</strong><br />
					                    This method returns a Uuid.</p>
					                    <pre>define parseUuid as native method receiving Text text returning Uuid</pre>
					                </li>
					            </ul>
							</li>
							<li>
								<h3>Cloud</h3>
			                    <p>Cloud deployment operations are normally performend by Prompto tools.<br />
			                    You should normally not have to use the cloud related APIs.<br />
			                    They exist because the Prompto tools use them, and provided here for your reference.</p>
			                    <p>Prompto is designed from the ground up to run in the cloud.<br />
			                        Great, but <i>which</i> cloud?<br />
			                        This question is worth asking because cloud vendors keep introducing new services and features.<br />
			                        Also, similar services may be implemented very differently, and expose a different API.<br />
			                        From there, deploying applications in different clouds may require very different code.</p>
			                    <p>At Prompto, we do not believe it is yet possible to produce a unified cloud client API.<br />
			                        Rather, we provide:</p>
								<ul>
									<li>The <code>getCurrentCloud</code> method</li>
									<li>A per cloud set of methods for popular cloud providers:<br />
										<ul>
											<li>AWS</li>
											<li>GCP (not available yet)</li>
											<li>Azure (not available yet)</li>
											<li>Alibaba (not available yet)</li>
											<li>OpenStack (not available yet)</li>
											<li>(others possible based on demand)</li>
										</ul>
									</li>
								</ul>
			                    <h3>Cloud methods</h3>
		                        <ul>
		                            <li><p><strong>getCurrentCloud</strong>:</p>
		                                <pre>define getCurrentCloud as native method returning Text</pre>
		                                <p>The method returns the name of the current cloud.</p>
		                                <p>The name follows the above naming.</p>
		                            </li>
		                        </ul>
							</li>
							<li>
								<h3>AWS</h3>
			                    <h4>AWS topics</h4>
			                    <ul>
			                        <li><strong>EC2</strong>:<br />
			                            See <a rel="noopener noreferrer" href="https://github.com/prompto/prompto-platform/blob/master/AwsClient/src/main/resources/libraries/AwsEC2.pec" target="_blank">source code </a>.
			                        </li>
			                        <li><strong>KMS</strong>:<br />
			                            See <a rel="noopener noreferrer" href="https://github.com/prompto/prompto-platform/blob/master/AwsClient/src/main/resources/libraries/AwsKMS.pec" target="_blank">source code </a>.
			                        </li>
			                        <li><strong>Route53</strong>:<br />
			                            See <a rel="noopener noreferrer" href="https://github.com/prompto/prompto-platform/blob/master/AwsClient/src/main/resources/libraries/AwsRoute53.pec" target="_blank">source code </a>.
			                        </li>
			                     </ul>
							</li>
		                </ul>
		            </div>
        		</div>
            </div>
        </article>
    );
}

export default Documentation;
