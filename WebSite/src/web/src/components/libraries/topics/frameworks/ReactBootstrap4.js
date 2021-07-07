import React from 'react';
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("React Bootstrap 4");
    }

    renderContent(topicSelected) {
        const nbsp = "\u00A0";
        return <>
                    <h2>React Bootstrap 4</h2>
                    <p>Bootstrap is one of the most popular UI frameworks, created by Twitter.<br/>
                        React Bootstrap 4 is a set of React components which make it easy to use.<br/>
                        The full list of components <a rel="noopener noreferrer" href="https://react-bootstrap.github.io/" target="_blank">is available here</a>.
                        On top of the above standard components, React Bootstrap 4 comes with additional components:</p>
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
                        Therefore, the Prompto adapter uses identifiers, which are mapped to the corresponding React Bootstrap 4 components, as follows:</i></p>
                    <table className="uk-table uk-table-divider uk-table-small uk-text-small uk-width-1-2@s">
                        <thead>
                            <tr>
                                <th>React Bootstap 4 component</th>
                                <th>Prompto widget</th>
                            </tr>
                        </thead>
                        <tbody>
                        { [     "Accordion",
                            "Accordion.Collapse",
                            "Accordion.Toggle",
                            "Alert",
                            "Alert.Heading",
                            "Alert.Link",
                            "Badge",
                            "Breadcrumb",
                            "Breadcrumb.Item",
                            "Button",
                            "ButtonGroup",
                            "ButtonToolbar",
                            "Card",
                            "Card.Header",
                            "Card.Body",
                            "Card.Footer",
                            "Card.Title",
                            "Card.Subtitle",
                            "Card.Text",
                            "Card.Img",
                            "Card.ImgOverlay",
                            "CardColumns",
                            "CardDeck",
                            "CardGroup",
                            "Carousel",
                            "Carousel.Caption",
                            "Carousel.Item",
                            "Col",
                            "Collapse",
                            "Container",
                            "Dropdown",
                            "Dropdown.Header",
                            "Dropdown.Divider",
                            "DropdownButton",
                            "Dropdown.Item",
                            "Dropdown.Toggle",
                            "Dropdown.Menu",
                            "Fade",
                            "Figure",
                            "Figure.Image",
                            "Figure.Caption",
                            "Form",
                            "Form.Check",
                            "Form.Check.Input",
                            "Form.Check.Label",
                            "Form.Control",
                            "Form.Control.Feedback",
                            "Form.File",
                            "Form.File.Input",
                            "Form.File.Label",
                            "Form.Group",
                            "Form.Label",
                            "Form.Row",
                            "Form.Switch",
                            "Form.Text",
                            "Image",
                            "InputGroup",
                            "InputGroup.Append",
                            "InputGroup.Prepend",
                            "InputGroup.Text",
                            "InputGroup.Checkbox",
                            "InputGroup.Radio",
                            "Jumbotron",
                            "ListGroup",
                            "ListGroup.Item",
                            "Media",
                            "Media.Body",
                            "Modal",
                            "Modal.Dialog",
                            "Modal.Header",
                            "Modal.Title",
                            "Modal.Body",
                            "Modal.Footer",
                            "Nav",
                            "Nav.Item",
                            "Nav.Link",
                            "Navbar",
                            "Navbar.Brand",
                            "Navbar.Collapse",
                            "Navbar.Text",
                            "Navbar.Toggle",
                            "NavDropdown",
                            "Overlay",
                            "OverlayTrigger",
                            "Popover",
                            "Popover.Title",
                            "Popover.Content",
                            "Pagination",
                            "Pagination.Item",
                            "Pagination.First",
                            "Pagination.Prev",
                            "Pagination.Ellipsis",
                            "Pagination.Next",
                            "Pagination.Last",
                            "ProgressBar",
                            "ResponsiveEmbed",
                            "Row",
                            "Spinner",
                            "SplitButton",
                            "Table",
                            "Tab",
                            "Tab.Container",
                            "Tab.Content",
                            "Tab.Pane",
                            "Tabs",
                            "Toast",
                            "Toast.Header",
                            "Toast.Body",
                            "ToggleButton",
                            "ToggleButtonGroup",
                            "Tooltip",
                            "ContextMenu",
                            "DatePicker",
                            "Typeahead" ].sort().map( item =>
                            <tr>
                                <td>{item}</td>
                                <td>{item.replaceAll(".", "")}</td>
                            </tr>) }
                        </tbody>
                    </table>
            <p><i>(the above covers most but not all React Bootstrap 4 components. <a href="mailto:support@prompto.org?subject=Feature%20request">We will add missing ones on demand</a>)</i></p>
            </>;
    }

}

export default new ThisTopic();