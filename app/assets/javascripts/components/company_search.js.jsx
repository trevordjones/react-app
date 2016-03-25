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
        <IndustryContainer filter={this.loadCompanies} industries={this.state.industries} />
        <CompanyContainer filter={this.loadMore} companies={this.state.companies} limit={this.state.limit} />
        <Typeahead clickSearch={this.loadCompanies} citySearch={this.citySearch} companies={this.state.cities}/>
      </div>
    )
  }
})

var Typeahead = React.createClass({
  clickSearch: function(city) {
    this.props.clickSearch(Companies.company.industryIds, city)
  },
  search: function(event) {
    this.props.citySearch(event.target.value)
  },
  render: function() {
    return (
      <div>
      <input onChange={this.search} type="text"></input>
      <SearchList click={this.clickSearch} companies={this.props.companies}/>
      </div>
    )
  }
})

var SearchList = React.createClass({
  click: function(event) {
    this.props.click(event.target.innerHTML)
  },
  render: function() {
    var self = this;
    var searchItem = this.props.companies.map(function(company){
      return (
        <li onClick={self.click}>{company.city}</li>
      )
    })
    return (
      <ul>
        {searchItem}
      </ul>
    )
  }
})

var CompanyContainer = React.createClass({
  loadMore: function() {
    this.props.filter()
  },
  render: function() {
    return (
      <div>
        {this.props.limit}
        <CompanyList companies={this.props.companies} />
        <Button loadMore={this.loadMore} />
      </div>
    )
  }
})

var Button = React.createClass({
  loadMore: function() {
    this.props.loadMore();
  },
  render: function() {
    return (
      <button onClick={this.loadMore}>Load More</button>
    )
  }
})

var IndustryContainer = React.createClass({
  filterIndustryContainer: function(industryId, checked) {
    this.props.filter(industryId, Companies.company.city, checked)
  },
  render: function() {
    return (
      <div>
        <IndustryList filter={this.filterIndustryContainer} industries={this.props.industries} />
      </div>
    )
  }
})

var CompanyList = React.createClass({
  getInitialState: function() {
    return ({limit: Companies.limit})
  },
  render: function() {
    var self = this;
    var companyNode = this.props.companies.map(function(company){
      return (
        <Company name={company.name} key={company.id} />
      )
    })
    return (
      <ul style={{float: 'right'}}>
        {companyNode}
      </ul>
    )
  }
})

var IndustryList = React.createClass({
  filterIndustryList: function(industryId, checked) {
    this.props.filter(industryId, checked)
  },
  render: function() {
    var self = this;
    var industryNode = this.props.industries.map(function(industry){
      return (
        <Industry filter={self.filterIndustryList} industryId={industry.id} name={industry.name} key={industry.id} />
      )
    })
    return (
      <ul style={{float: 'left'}}>
        {industryNode}
      </ul>
    )
  }
})

var Company = React.createClass({
  render: function() {
    return (
      <li>{this.props.name}</li>
    )
  }
})

var Industry = React.createClass({
  filterIndustry: function(event) {
    this.props.filter(this.props.industryId, event.target.checked);
  },
  render: function() {
    return (
      <li><input type="checkbox" value={this.props.name} onClick={this.filterIndustry}/>{this.props.name} </li>
    )
  }
})
