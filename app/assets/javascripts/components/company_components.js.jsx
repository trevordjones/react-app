var CompanyComponents = (function() {
  
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
