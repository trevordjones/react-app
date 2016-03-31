var TypeaheadComponents = (function(){
  
  var Typeahead = React.createClass({
    searchByCity: function(city) {
      this.props.searchByCity(Companies.company_parameters.industryIds, city)
    },
    typeaheadSearch: function(event) {
      this.props.typeaheadSearch(event.target.value)
    },
    render: function() {
      return (
        <div>
        <input onChange={this.typeaheadSearch} type="text"></input>
        <SearchList searchByCity={this.searchByCity} companies={this.props.companies}/>
        </div>
      )
    }
  })
  
  var SearchList = React.createClass({
    searchByCity: function(event) {
      this.props.searchByCity(event.target.innerHTML)
    },
    render: function() {
      var self = this;
      var searchItem = this.props.companies.map(function(company){
        return (
          <li onClick={self.searchByCity}>{company.city}</li>
        )
      })
      return (
        <ul>
          {searchItem}
        </ul>
      )
    }
  })
  
  return {
    Typeahead: Typeahead
  }
})();
