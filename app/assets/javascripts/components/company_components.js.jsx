var CompanyComponents = (function() {
  
  var CompanyContainer = React.createClass({
    loadMoreCompanies: function() {
      this.props.loadMoreCompanies()
    },
    render: function() {
      return (
        <div>
          {this.props.limit}
          <CompanyList companies={this.props.companies} />
          <Button loadMoreCompanies={this.loadMoreCompanies} />
        </div>
      )
    }
  })

  var Button = React.createClass({
    loadMoreCompanies: function() {
      this.props.loadMoreCompanies();
    },
    render: function() {
      return (
        <button onClick={this.loadMoreCompanies}>Load More</button>
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

  var Company = React.createClass({
    render: function() {
      return (
        <li>{this.props.name}</li>
      )
    }
  })
  
  return {
    CompanyContainer: CompanyContainer
  }
})();
