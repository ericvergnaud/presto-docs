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
                                <th>React Bootstap 3 component</th>
                                <th>Prompto widget</th>
                            </tr>
                        </thead>
                        <tbody>
                        { [   "Breadcrumb", "Breadcrumb.Item", "Button","Checkbox", "ControlLabel", "ContextMenu",
                            "InputGroup","InputGroup.Addon","InputGroup.Button", "Form", "FormControl",
                            "FormGroup", "HelpBlock", "Modal", "Modal.Dialog", "Modal.Body", "Modal.Footer",
                            "Modal.Header", "Modal.Title", "Navbar", "Navbar.Brand", "Navbar.Header", "Navbar.Toggle",
                            "Navbar.Collapse", "Navbar.Text", "Navbar.Form", "Nav", "NavDropdown", "NavItem",
                            "Panel", "Panel.Body", "Panel.Collapse", "Panel.Footer", "PanelGroup", "Panel.Heading",
                            "Panel.Title", "Panel.Toggle", "ProgressBar", "Radio", "Tab", "Table", "Tabs", "Dropdown",
                            "Dropdown.Toggle", "Dropdown.Menu", "DropdownButton", "SplitButton", "MenuItem", "Grid",
                            "Row", "Col", "Clearfix", "Glyphicon", "Thumbnail", "PageHeader", "ButtonToolbar", "ButtonGroup",
                            "ToggleButton", "ToggleButtonGroup", "Well", "Pagination", "Pagination.Item", "Pagination.First",
                            "Pagination.Last", "Pagination.Next", "Pagination.Prev", "Pagination.Ellipsis", "Pager",
                            "Pager.Item", "Carousel", "Carousel.Item", "Carousel.Caption", "Badge", "Label", "Overlay",
                            "Collapse", "ListGroup", "ListGroupItem", "OverlayTrigger", "Tooltip", "DatePicker", "Typeahead" ].sort().map( item =>
                            <tr>
                                <td>{item}</td>
                                <td>{item.replaceAll(".", "")}</td>
                            </tr>) }
                        </tbody>
                    </table>
            <p><i>(the above covers most but not all React Bootstrap 3 components. <a href="mailto:support@prompto.org?subject=Feature%20request">We will add missing ones on demand</a>)</i></p>
            </>;
    }

}

export default new ThisTopic();