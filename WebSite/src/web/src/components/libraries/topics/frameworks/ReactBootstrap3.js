import React from 'react';
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("React Bootstrap 3");
    }

    renderContent(topicSelected) {
        const nbsp = "\u00A0";
        return <>
                    <h2>React Bootstrap 3</h2>
                    <p>Bootstrap is one of the most popular UI frameworks, created by Twitter.<br/>
                        React Bootstrap 3 is a set of React components which make it easy to use.<br/>
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
                            Example usage:<br/>
                            <code>{String.raw `menu = <ContextMenu>`}<br/>
                                { nbsp.repeat(11) + String.raw `<MenuItem key={1} onClick={someAction1}>Some item</MenuItem>`}<br/>
                                { nbsp.repeat(11) + String.raw `<MenuItem key={2} onClick={someAction2}>Other item</MenuItem>`}<br/>
                                { nbsp.repeat(7) + String.raw `</ContextMenu>;`}<br/>
                                {String.raw `showReactContextMenu(event, menu);`};
                            </code>
                        </li>
                    </ul>
                <p>Please refer to above documentations for details. </p>
            <p><i>Prompto does not support inner categories (which are required in JavaScript due to the uncontrolled proliferation of global names).<br/>
                        Therefore, the Prompto adapter uses identifiers, which are mapped to the corresponding React Bootstrap 3 components, as follows:</i></p>
                    <table className="uk-table uk-table-divider uk-table-small uk-text-small uk-width-1-2@s">
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
            </>;
    }

}

export default new ThisTopic();