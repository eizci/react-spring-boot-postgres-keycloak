import React, { Fragment } from "react";
import { AsyncTypeahead } from 'react-bootstrap-typeahead'; 


export class TypeAhead extends React.Component {
    constructor(props){
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this._handleSelect = this._handleSelect.bind(this);
        this.typeahead = null;

        this.state = {
            isLoading: false,
            options: [],
            selected: null
        }
    }

  handleSearch(query){
    this.setState({isLoading:true});

    this.props.searchService(query)
      .then((response) => {
        const options = response.data.rows.map((i) => ({
          id: i.id,
          name: i.name,
        }));

        this.setState({isLoading: false, options});
      });
  };

  handleBlur = () => {
    console.log(this.state, this.typeahead.getInput().value);
    if (!this.state.selected || this.state.selected.length === 0 || this.state.selected[0].name !== this.typeahead.getInput().value) {
        this.typeahead.clear();
        this.props.onChange(null);
    }
  }

  _handleSelect(option){
      console.log("handleselect", option);
    this.setState({selected:option});
    if(option.length > 0){
        this.props.onChange(option[0].id);
    }
  }

  render(){
    return (
        <AsyncTypeahead
        id="async-input"
        isLoading={this.state.isLoading}
        labelKey="name"
        minLength={3}
        onSearch={this.handleSearch}
        ref={(ref) => this.typeahead = ref}
        options={this.state.options}
        placeholder={"Search for " + this.props.entityName }
        onBlur={this.handleBlur}
        onChange={this._handleSelect}
        renderMenuItemChildren={(option) => (
            <Fragment>
            <span>{option.name}</span>
            </Fragment>
        )}
        />);
    }
}