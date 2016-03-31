var Container = React.createClass({
  getInitialState: function() {
    return {companies: [], industries: [], cities: []}
  },
  loadCompanies: function(industryId, city, checked) {
    var self = this;
    if (typeof checked !== 'undefined') {
      if (checked) {
        Companies.company_parameters.industryIds.push(industryId)
      } else {
        Companies.company_parameters.industryIds.splice(Companies.company_parameters.industryIds.indexOf(industryId), 1);
      }
    }
    Companies.company_parameters.city = city;
    Companies.getCompanies(function(result){
      self.setState({companies: result.companies, limit: result.search_size})
    })
  },
  loadMoreCompanies: function() {
    Companies.company_parameters.limit += 20;
    var self = this;
    Companies.getCompanies(function(result){
      self.setState({companies: result.companies, limit: result.search_size})
    })
  },
  componentDidMount: function() {
    var self = this;
    this.loadCompanies();
    Industries.getIndustries(function(result){
      self.setState({industries: result.industries})
    })
  },
  typeaheadSearch: function(text) {
    var self = this;
    if (text.length === 0) {
      self.setState({cities: []})
    } else {
      Companies.getCompaniesByCity(text, function(result) {
        self.setState({cities: result.companies})
      })
    }
  },
  resetCities: function() {
    this.setState({cities: []})
  },
  render: function() {
    return (
      <div>
        <IndustryComponents.IndustryContainer filterByIndustry={this.loadCompanies} industries={this.state.industries} />
        <CompanyComponents.CompanyContainer loadMoreCompanies={this.loadMoreCompanies} companies={this.state.companies} limit={this.state.limit} />
        <TypeaheadComponents.Typeahead resetCities={this.resetCities} searchByCity={this.loadCompanies} typeaheadSearch={this.typeaheadSearch} companies={this.state.cities}/>
      </div>
    )
  }
})
