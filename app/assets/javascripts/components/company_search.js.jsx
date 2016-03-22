var Container = React.createClass({
  render: function() {
    return (
      <div>
        <IndustryContainer />
        <CompanyContainer />
      </div>
    )
  }
})

var CompanyContainer = React.createClass({
  getInitialState: function() {
    return {companies: []}
  },
  componentDidMount: function() {
    var self = this;
    Companies.getCompanies(function(result){
      self.setState({companies: result.companies})
    })
  },
  render: function() {
    return (
      <div>
        <CompanyList companies={this.state.companies} />
      </div>
    )
  }
})

var IndustryContainer = React.createClass({
  getInitialState: function() {
    return {industries: []}
  },
  componentDidMount: function() {
    $.ajax({
      url: '/api/v1/industries.json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({industries: data.industries});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(this.props.url, status, err.toString());
      }.bind(this)
    })
  },
  render: function() {
    return (
      <div>
        <IndustryList industries={this.state.industries} />
      </div>
    )
  }
})

var CompanyList = React.createClass({
  render: function() {
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
  loadCompanies: function() {
    //call action here
  },
  render: function() {
    var industryNode = this.props.industries.map(function(industry){
      return (
        <Industry industryId={industry.id} name={industry.name} key={industry.id} />
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
  test: function(event) {
    var self = this;
    Companies.getCompanies(function(result){
      self.setState({companies: []})
    });
  },
  render: function() {
    return (
      <li><input type="checkbox" value={this.props.name} onClick={this.test}/>{this.props.name} </li>
    )
  }
})
