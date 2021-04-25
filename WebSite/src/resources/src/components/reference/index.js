import { useState } from 'react';

import '../../assets/documentation.scss';

import Overview from './overview';
import Dialects from './dialects';
import Keywords from './keywords';
import Comments from './comments';
import Annotations from './annotations';
import Identifiers from './identifiers';
import Types from './types/types';
import AtomicTypes from './types/atomicTypes';
import CollectionTypes from './types/collectionTypes';
import Document from './types/document';
import Attribute from './types/attribute';
import Enumeration from './types/enumeration';
import TransientTypes from './types/transientTypes';
import Mutability from './mutability';
import Testing from './testing';
import Methods from './methods/methods';
import Declaring from './methods/declaring';
import Calling from './methods/calling';
import Arguments from './methods/arguments';
import Overloading from './methods/overloading';
import Abstract from './methods/abstract';
import Statements from './statements/statements';

import Dummy from './dummy';


const labels = [
	{
		'id': 1,
		'title': 'overview',
		'parentid': null,
		'subcategory': false,
		'children': false
	}, {
		'id': 2,
		'title': 'dialects',
		'parentid': null,
		'subcategory': false,
		'children': false
	}, {
		'id': 3,
		'title': 'keywords',
		'parentid': null,
		'subcategory': false,
		'children': false
	}, {
		'id': 4,
		'title': 'comments',
		'parentid': null,
		'subcategory': false,
		'children': false
	}, {
		'id': 5,
		'title': 'annotations',
		'parentid': null,
		'subcategory': false,
		'children': false
	}, {
		'id': 6,
		'title': 'identifiers',
		'parentid': null,
		'subcategory': false,
		'children': false
	}, {
		'id': 7,
		'title': 'types',
		'parentid': null,
		'subcategory': false,
		'children': true
	}, {
		'id': 8,
		'title': 'atomic types',
		'parentid': 7,
		'subcategory': true,
		'children': false
	}, {
		'id': 9,
		'title': 'collection types',
		'parentid': 7,
		'subcategory': true,
		'children': false
	}, {
		'id': 10,
		'title': 'document',
		'parentid': 7,
		'subcategory': true,
		'children': false
	}, {
		'id': 11,
		'title': 'attribute',
		'parentid': 7,
		'subcategory': true,
		'children': false
	}, {
		'id': 12,
		'title': 'enumeration',
		'parentid': 7,
		'subcategory': true,
		'children': false
	}, {
		'id': 13,
		'title': 'transient types',
		'parentid': 7,
		'subcategory': true,
		'children': false
	}, {
		'id': 14,
		'title': 'mutability',
		'parentid': null,
		'subcategory': false,
		'children': false
	}, {
		'id': 15,
		'title': 'testing',
		'parentid': null,
		'subcategory': false,
		'children': false
	}, {
		'id': 16,
		'title': 'methods',
		'parentid': null,
		'subcategory': false,
		'children': true
	}, {
		'id': 17,
		'title': 'declaring',
		'parentid': 16,
		'subcategory': true,
		'children': false
	}, {
		'id': 18,
		'title': 'calling',
		'parentid': 16,
		'subcategory': true,
		'children': false
	}, {
		'id': 19,
		'title': 'arguments',
		'parentid': 16,
		'subcategory': true,
		'children': false
	}, {
		'id': 20,
		'title': 'overloading',
		'parentid': 16,
		'subcategory': true,
		'children': false
	}, {
		'id': 21,
		'title': 'abstract',
		'parentid': 16,
		'subcategory': true,
		'children': false
	}, {
		'id': 22,
		'title': 'statements',
		'parentid': null,
		'subcategory': false,
		'children': true
	}, {
		'id': 23,
		'title': 'assignment',
		'parentid': 22,
		'subcategory': true,
		'children': false
	}, {
		'id': 24,
		'title': 'if else',
		'parentid': 22,
		'subcategory': true,
		'children': false
	}, {
		'id': 25,
		'title': 'switch',
		'parentid': 22,
		'subcategory': true,
		'children': false
	}, {
		'id': 26,
		'title': 'for each',
		'parentid': 22,
		'subcategory': true,
		'children': false
	}, {
		'id': 27,
		'title': 'while',
		'parentid': 22,
		'subcategory': true,
		'children': false
	}, {
		'id': 28,
		'title': 'do while',
		'parentid': 22,
		'subcategory': true,
		'children': false
	}, {
		'id': 29,
		'title': 'return',
		'parentid': 22,
		'subcategory': true,
		'children': false
	}, {
		'id': 30,
		'title': 'call then',
		'parentid': 22,
		'subcategory': true,
		'children': false
	}, {
		'id': 31,
		'title': 'write',
		'parentid': 22,
		'subcategory': true,
		'children': false
	}, {
		'id': 32,
		'title': 'store',
		'parentid': 22,
		'subcategory': true,
		'children': false
	}, {
		'id': 33,
		'title': 'store then',
		'parentid': 22,
		'subcategory': true,
		'children': false
	}, {
		'id': 34,
		'title': 'fetch then',
		'parentid': 22,
		'subcategory': true,
		'children': false
	}, {
		'id': 35,
		'title': 'flush',
		'parentid': 22,
		'subcategory': true,
		'children': false
	}, {
		'id': 36,
		'title': 'expressions',
		'parentid': null,
		'subcategory': false,
		'children': true
	}, {
		'id': 37,
		'title': 'precedence',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 38,
		'title': 'parenthesis',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 39,
		'title': 'nothing',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 40,
		'title': 'this',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 41,
		'title': 'equality',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 42,
		'title': 'comparison',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 43,
		'title': 'minus',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 44,
		'title': 'add',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 45,
		'title': 'subtract',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 46,
		'title': 'multiply',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 47,
		'title': 'divide',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 48,
		'title': 'logical',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 49,
		'title': 'ternary',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 50,
		'title': 'item',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 51,
		'title': 'slice',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 52,
		'title': 'filter',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 53,
		'title': 'sort',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 54,
		'title': 'contain',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 55,
		'title': 'type',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 56,
		'title': 'member',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 57,
		'title': 'method',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 58,
		'title': 'code',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 59,
		'title': 'read',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 60,
		'title': 'fetch',
		'parentid': 36,
		'subcategory': true,
		'children': false
	}, {
		'id': 61,
		'title': 'errors',
		'parentid': null,
		'subcategory': false,
		'children': true
	}, {
		'id': 62,
		'title': 'syntax',
		'parentid': 61,
		'subcategory': true,
		'children': false
	}, {
		'id': 63,
		'title': 'built-in',
		'parentid': 61,
		'subcategory': true,
		'children': false
	}, {
		'id': 64,
		'title': 'custom',
		'parentid': 61,
		'subcategory': true,
		'children': false
	}, {
		'id': 65,
		'title': 'categories',
		'parentid': null,
		'subcategory': false,
		'children': true
	}, {
		'id': 66,
		'title': 'creating',
		'parentid': 65,
		'subcategory': true,
		'children': false
	}, {
		'id': 67,
		'title': 'copying',
		'parentid': 65,
		'subcategory': true,
		'children': false
	}, {
		'id': 68,
		'title': 'embedding',
		'parentid': 65,
		'subcategory': true,
		'children': false
	}, {
		'id': 69,
		'title': 'modifying',
		'parentid': 65,
		'subcategory': true,
		'children': false
	}, {
		'id': 70,
		'title': 'storing',
		'parentid': 65,
		'subcategory': true,
		'children': false
	}, {
		'id': 71,
		'title': 'extending',
		'parentid': 65,
		'subcategory': true,
		'children': false
	}, {
		'id': 72,
		'title': 'abstract',
		'parentid': 65,
		'subcategory': true,
		'children': false
	}, {
		'id': 73,
		'title': 'methods',
		'parentid': 65,
		'subcategory': true,
		'children': false
	}, {
		'id': 74,
		'title': 'singletons',
		'parentid': null,
		'subcategory': false,
		'children': false
	}, {
		'id': 75,
		'title': 'enumerations',
		'parentid': null,
		'subcategory': false,
		'children': false
	}, {
		'id': 76,
		'title': 'resources',
		'parentid': null,
		'subcategory': false,
		'children': false
	}, {
		'id': 77,
		'title': 'widgets',
		'parentid': null,
		'subcategory': false,
		'children': true
	}, {
		'id': 78,
		'title': 'react widgets',
		'parentid': 77,
		'subcategory': true,
		'children': false
	}, {
		'id': 79,
		'title': 'react modals',
		'parentid': 77,
		'subcategory': true,
		'children': false
	}, {
		'id': 80,
		'title': 'events',
		'parentid': null,
		'subcategory': false,
		'children': true
	}, {
		'id': 81,
		'title': 'clickevent',
		'parentid': 80,
		'subcategory': true,
		'children': false
	}, {
		'id': 82,
		'title': 'inputchangedevent',
		'parentid': 80,
		'subcategory': true,
		'children': false
	}, {
		'id': 83,
		'title': 'radiochangedevent',
		'parentid': 80,
		'subcategory': true,
		'children': false
	}, {
		'id': 84,
		'title': 'workers',
		'parentid': null,
		'subcategory': false,
		'children': false
	}, {
		'id': 85,
		'title': 'bindings',
		'parentid': null,
		'subcategory': false,
		'children': true
	}, {
		'id': 86,
		'title': 'methods',
		'parentid': 85,
		'subcategory': true,
		'children': false
	}, {
		'id': 87,
		'title': 'categories',
		'parentid': 85,
		'subcategory': true,
		'children': false
	}
];

function Categories() {
	const [activeId, setActiveId] = useState(null);

	return (
		labels.map((item, index) => {
			return (
	        	item.subcategory ? (
	        		(item.parentid === activeId) ? (
	        			<li key={ item.id } className="p-dropdown">
							<a href="#">{ item.title }</a>
						</li>
	        		) : (
	        			<li key={ item.id } className="p-dropdown uk-hidden">
							<a href="#">{ item.title }</a>
						</li>
	        		)
	        	) : (
	        		<li onClick={ () => setActiveId(item.id) } key={ item.id }>
						{
							item.children ? (						
			        			<a href="#" className="uk-flex uk-flex-middle uk-flex-between">
									<span className="uk-margin-small-right">{ item.title }</span>
									{ 
										(item.id === activeId) ? (
										<span data-uk-icon="icon: chevron-down"></span> ) : (
										<span data-uk-icon="icon: chevron-right"></span> )
									}
								</a>
							) : (
								<a href="#">{ item.title }</a>
							)
						}
			        </li>
	        	)
			)
		})
	)
}

function Reference() {
	return (
        <article className="p-documentation">
            <div className="uk-container uk-container-large uk-padding">
            	<div className="uk-grid uk-grid-large" data-uk-grid>
		            <div className="uk-width-1-5@s">
		                <ul className="uk-tab-right" data-uk-tab="connect: #component-tab-right; animation: uk-animation-fade">
							<Categories />
		                </ul>
		            </div>
		            <div className="uk-width-expand@s">
		                <ul id="component-tab-right" className="uk-switcher">
		                	<Overview />
		                	<Dialects />
		                	<Keywords />
		                	<Comments />
		                	<Annotations />
		                	<Identifiers />
		                	<Types />
		                	<AtomicTypes />
		                	<CollectionTypes />
		                	<Document />
		                	<Attribute />
		                	<Enumeration />
		                	<TransientTypes />
		                	<Mutability />
		                	<Testing />
		                	<Methods />
		                	<Declaring />
		                	<Calling />
		                	<Arguments />
		                	<Overloading />
		                	<Abstract />
		                	<Statements />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                	<Dummy />
		                </ul>
		            </div>
        		</div>
            </div>
        </article>
    );
}

export default Reference;
