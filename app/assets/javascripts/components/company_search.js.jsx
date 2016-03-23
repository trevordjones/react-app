var Container = React.createClass({
  getInitialState: function() {
    return {companies: [], industries: []}
  },
  loadCompanies: function(industryId, checked) {
    var self = this;
    if (typeof checked !== 'undefined') {
      if (checked) {
        Companies.industryIds.push(industryId)
      } else {
        Companies.industryIds.splice(Companies.industryIds.indexOf(industryId), 1);
      }
    }  
    Companies.getCompanies(function(result){
      self.setState({companies: result.companies})
    })
  },
  componentDidMount: function() {
    var self = this;
    this.loadCompanies();
    Industries.getIndustries(function(result){
      self.setState({industries: result.industries})
    })
  },
  render: function() {
    return (
      <div>
        <IndustryContainer filter={this.loadCompanies} industries={this.state.industries} />
        <CompanyContainer companies={this.state.companies} />
      </div>
    )
  }
})

var CompanyContainer = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.companies.length}
        <CompanyList companies={this.props.companies} />
      </div>
    )
  }
})

var IndustryContainer = React.createClass({
  filterIndustryContainer: function(industryId, checked) {
    this.props.filter(industryId, checked)
  },
  render: function() {
    return (
      <div>
        <IndustryList filter={this.filterIndustryContainer}  container={this.bigContainer} industries={this.props.industries} />
      </div>
    )
  }
})

var CompanyList = React.createClass({
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
