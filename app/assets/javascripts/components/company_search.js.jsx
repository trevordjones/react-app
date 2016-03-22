var Container = React.createClass({
  render: function() {
    return (
      <div>
        <IndustryContainer />
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

var IndustryList = React.createClass({
  render: function() {
    var blah = this.props.industries.map(function(industry){
      return (
        <Industry name={industry.name} key={industry.id} />
      )
    })
    return (
      <div>
        {blah}
      </div>
    )
  }
})

var Industry = React.createClass({
  render: function() {
    return (
      <ul>
        <li>{this.props.name}</li>
      </ul>
    )
  }
})

//Container - parent of IndustryContainer and CompanyContainer
//IndustryContainer - parent of IndustryList
//IndustryList - child of IndustryList. parent of Industry
//Industry - child of IndustryList
//CompanyContainer - parent of CompanyList
//CompanyList - child of CompanyContainer. parent of Company
//Company - child of CompanyList
