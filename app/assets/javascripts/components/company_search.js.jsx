var Container = React.createClass({
  getInitialState: function() {
    return {companies: [], industries: [], cities: []}
  },
  loadCompanies: function(industryId, city, checked) {
    var self = this;
    if (typeof checked !== 'undefined') {
      if (checked) {
        Companies.company.industryIds.push(industryId)
      } else {
        Companies.company.industryIds.splice(Companies.company.industryIds.indexOf(industryId), 1);
      }
    }
    Companies.company.city = city;
    Companies.getCompanies(function(result){
      self.setState({companies: result.companies, limit: result.search_size})
    })
  },
  loadMore: function() {
    Companies.company.limit =+ 20;
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
  citySearch: function(text) {
    var self = this;
    if (text.length === 0) {
      self.setState({cities: []})
    } else {
      Companies.getCityCompanies(text, function(result) {
        self.setState({cities: result.companies})
      })
    }
  },
  render: function() {
    return (
      <div>
        <IndustryComponents.IndustryContainer filter={this.loadCompanies} industries={this.state.industries} />
        <CompanyComponents.CompanyContainer filter={this.loadMore} companies={this.state.companies} limit={this.state.limit} />
        <TypeaheadComponents.Typeahead clickSearch={this.loadCompanies} citySearch={this.citySearch} companies={this.state.cities}/>
      </div>
    )
  }
})
