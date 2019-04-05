import { Search, StopWordsMap, StopWordsTokenizer, SimpleTokenizer }  from 'js-search';
import asap from 'asap';

const HTML_TAGS = new Set(["<a>", "<abbr>", "<address>", "<area>", "<article>", "<aside>", "<audio>", "<b>", "<base>", "<bdi>", "<bdo>", "<blockquote>",
    "<body>", "<br>", "<button>", "<canvas>", "<caption>", "<table>", "<cite>", "<code>", "<samp>", "<kbd>", "<col>", "<col>", "<colgroup>",
    "<colgroup>", "<data>", "<datalist>", "<input>", "<dd>", "<dt>", "<dl>", "<del>", "<details>", "<dfn>", "<dialog>", "<div>", "<dl>",
    "<dd>", "<dt>", "<dt>", "<dl>", "<em>", "<strong>", "<embed>", "<fieldset>", "<figure>", "<footer>", "<form>", "<h1>", "<h2>", "<h3>",
    "<h4>", "<h5>", "<h6>", "<head>", "<header>", "<head>", "<header>", "<hgroup>", "<h1>", "<h2>", "<h3>", "<hr>", "<html>", "<i>",
    "<i>", "<iframe>", "<img>", "<input>", "<ins>", "<kbd>", "<keygen>", "<label>", "<legend>", "<li>", "<ol>",
    "<ul>", "<link>", "<head>", "<a>", "<main>", "<map>", "<mark>", "<menu>", "<menuitem>", "<meta>", "<head>", "<meter>", "<nav>",
    "<noscript>", "<noscript>", "<object>", "<ol>", "<li>", "<optgroup>", "<option>", "<select>", "<output>", "<p>", "<p>", "<param>",
    "<pre>", "<progress>", "<q>", "<rb>", "<rp>", "<rt>", "<rtc>", "<ruby>", "<s>", "<samp>", "<script>", "<section>", "<select>", "<option>",
    "<small>", "<source>", "<audio>", "<video>", "<span>", "<strong>", "<style>", "<sub>", "<sup>", "<summary>", "<details>", "<sup>", "<sub>",
    "<table>", "<tbody>", "<td>", "<template>", "<textarea>", "<tfoot>", "<th>", "<thead>", "<time>", "<title>", "<tr>", "<track>", "<audio>",
    "<video>", "<u>", "<ul>", "<li>", "<var>", "<video>", "<wbr>"]);


HTML_TAGS.forEach(tag=>{
    tag = tag.substring(1, tag.length-1); // function body contains tag name, not jsx
    StopWordsMap[tag]=true;
});

class SearchEngine {

    constructor() {
        this.jssearch = new Search("path");
        this.jssearch.tokenizer = new StopWordsTokenizer(new SimpleTokenizer());
        this.jssearch.addIndex("title");
        this.jssearch.addIndex("sentence");
        this.addTopic = this.addTopic.bind(this);
        this.search = this.search.bind(this);
        this.topics = new Map();
    }



    addTopic(topic, path) {
        path = path || "";
        path += "/" + topic.title;
        this.topics.set(path, topic);
        asap(() => this.addTopicTitle.bind(this)(topic, path));
        if (topic.children) {
            topic.children.forEach(t=>this.addTopic(t, path));
        }
    }

    addTopicTitle(topic, path) {
        const document = {
            path: path,
            title: topic.title
        }
        this.jssearch.addDocuments([document]);
        asap(() => this.addTopicSentences.bind(this)(topic, path));
    }

    addTopicSentences(topic, path) {
        // we actually want the function body, and we extract text out of it
        const sentences = topic.renderContent.toString().match(/"[^"]*"/g);
        sentences.forEach(s => asap(() => this.addTopicSentence.bind(this)(topic, s, path)));
    }

    addTopicSentence(topic, sentence, path) {
        // drop surrounding quotes
        sentence = sentence.substring(1, sentence.length-1);
        const document = {
            path: path,
            sentence: sentence
        }
        this.jssearch.addDocuments([document]);
    }

    search(value) {
        let entries = this.jssearch.search(value);
        if(entries.length > 10)
            entries = entries.slice(0, 10);
        entries.forEach(entry=>entry.topic=this.topics.get(entry.path), this);
        return entries;
    }
}



export default new SearchEngine();