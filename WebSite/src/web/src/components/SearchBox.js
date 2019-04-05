import React from 'react';
import Autosuggest from 'react-autosuggest';
import SearchEngine from "../components/SearchEngine";

class Suggestion extends React.Component {

    render() {
        if (this.props.suggestion.sentence)
            return this.renderSentence();
        else
            return this.renderTopic();
    }

    renderSentence() {
        return <>
            <div className="suggestion-title">{this.props.suggestion.topic.title}</div>
            <div className="suggestion-sentence">{this.props.suggestion.sentence}</div>
            </>;
    }

    renderTopic() {
        return <div className="suggestion-title">{this.props.suggestion.title}</div>;
    }
}


class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: "", suggestions: []};
    }

    fetchSuggestions(data) {
        if (data.reason === 'input-changed') {
            const suggestions = SearchEngine.search(data.value);
            this.setState({suggestions: suggestions});
        }
    }

    getSuggestionValue(suggestion) {
        return suggestion.topic.title;
    }

    renderSuggestion(suggestion) {
        return <Suggestion suggestion={suggestion}/>;
    }

    shouldRenderSuggestions(value) {
        return value.trim().length > 2;
    }

    clearSuggestions() {
        this.setState({suggestions: []});
    }

    onChange(event, data) {
        this.setState({value: data.newValue});
    }

    onSuggestionSelected(event, data) {
        this.setState({value: "", suggestions: []}, ()=>this.props.onSelectedSuggestion(data.suggestion));
    }

    render() {
        const inputProps = { placeholder: "Search...", value: this.state.value, onChange: this.onChange.bind(this) };
        return <Autosuggest inputProps={inputProps}
                            suggestions={this.state.suggestions}
                            getSuggestionValue={this.getSuggestionValue.bind(this)}
                            renderSuggestion={this.renderSuggestion.bind(this)}
                            shouldRenderSuggestions={this.shouldRenderSuggestions.bind(this)}
                            highlightFirstSuggestion={true}
                            onSuggestionsFetchRequested={this.fetchSuggestions.bind(this)}
                            onSuggestionsClearRequested={this.clearSuggestions.bind(this)}
                            onSuggestionSelected={this.onSuggestionSelected.bind(this)}
        />;
    }
}

export default SearchBox;
