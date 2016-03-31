var TypeaheadComponents = (function(){
  var selectedCities = [];
  var Typeahead = React.createClass({
    getInitialState: function() {
      return {cities: []}
    },
    searchByCity: function(city) {
      this.props.resetCities();
      selectedCities.push(city)
      this.setState({cities: selectedCities});
      this.props.searchByCity(Companies.company_parameters.industryIds, city);
    },
    typeaheadSearch: function(event) {
      this.props.typeaheadSearch(event.target.value)
    },
    render: function() {
      return (
        <div>
        <input id="city_input" onChange={this.typeaheadSearch} type="text"></input>
        <SearchList searchByCity={this.searchByCity} companies={this.props.companies}/>
        <CityComponents.Cities cities={this.state.cities}  />
        </div>
      )
    }
  })
  
  var SearchList = React.createClass({
    searchByCity: function(event) {
      $("#city_input").val("");
      this.props.searchByCity(event.target.innerHTML);
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
