import React from 'react';
import Topic from "../../../components/Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Extending");
    }

    renderContent(topicSelected) {
        return <React.Fragment>

            <h2>Extending categories</h2>

            <p>Prompto supports <i>category</i> inheritance, where a category extends another category, and therefore
                inherits its attributes and methods.<br/>
                In the E dialect, this is done by using the <i>name</i> of the category being extended in place of
                the <code>category</code> keyword.<br/>
                In the O dialect, this is done by appending to the category definition the <code>extend</code> keyword
                followed the <i>name</i> of the category being extended.<br/>
                In the M dialect, this is done by inserting the <i>name</i> of the category being extended before the
                list of attributes.
            </p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={8} sampleUrl="samples/categories/extend-simple.pec"/>
            <br/>

            <p>A category extending another category is often referred to as a <i>derived</i> category.</p>
            <p>An object of a derived category can be used anywhere an object of the original category is expected.</p>
            <p>In the below example, the <i>printPerson</i> method expects a <i>Person</i> object, and will accept any
                object inheriting from <i>Person</i>:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={16} sampleUrl="samples/categories/extend-usage.pec" runnable={true}/>
            <br/>


            <h2>Multiple inheritance</h2>

            <p>Prompto supports <i>multiple</i> inheritance, where a category extends not just one category, but
                many.<br/>
                This is done by using a list of category names rather than just one:
            </p>
            <p/>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={14} sampleUrl="samples/categories/extend-multi.pec"/>
            <p>In the above example, a <i>SmartPhone</i> is a <i>Product</i>, a <i>Computer</i> and a <i>Phone</i>.</p>
            <p>It inherits attributes and methods from those 3 categories
                i.e. <i>brand</i>, <i>operatingSystem</i> and <i>supportedNetwork</i>:</p>
            <PromptoPlayer key={PromptoPlayer.nextKey()} lines={20} sampleUrl="samples/categories/extend-diamond.pec" runnable={true}/>
            <br/>

            <p>Multiple inheritance of attributes in Prompto does not suffer from the <a  rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/Multiple_inheritance" target="_blank"><i>deadly diamond problem</i></a>.
                This is thanks to its unique <i>reified attributes</i> feature, where attributes are semantic types
                defined outside categories.</p>
            <p>In the above example, since attributes are defined globally,
                the <i>brand</i> attribute is the same in all 4 categories, and has the same meaning. From there,
                the <i>SmartPhone</i> category only inherits
                the <i>brand</i> attribute <i><b>once</b></i> (as opposed to multiple times in most OOP languages which
                support multiple inheritance).</p>
            <p/>
            <p>Multiple inheritance of methods in Prompto follows the inheritance sequence. This is described in the
                next section.</p>


        </React.Fragment>;
    }

}

export default new ThisTopic();