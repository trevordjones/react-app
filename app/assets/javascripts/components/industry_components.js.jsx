var IndustryComponents = (function() {
  
  var IndustryContainer = React.createClass({
    filterByIndustry: function(industryId, checked) {
      this.props.filterByIndustry(industryId, Companies.company_parameters.city, checked)
    },
    render: function() {
      return (
        <div>
          <IndustryList filterByIndustry={this.filterByIndustry} industries={this.props.industries} />
        </div>
      )
    }
  })

  var IndustryList = React.createClass({
    filterByIndustry: function(industryId, checked) {
      this.props.filterByIndustry(industryId, checked)
    },
    render: function() {
      var self = this;
      var industryNode = this.props.industries.map(function(industry){
        return (
          <Industry filterByIndustry={self.filterByIndustry} industryId={industry.id} name={industry.name} key={industry.id} />
        )
      })
      return (
        <ul style={{float: 'left'}}>
          {industryNode}
        </ul>
      )
    }
  })

  var Industry = React.createClass({
    filterByIndustry: function(event) {
      this.props.filterByIndustry(this.props.industryId, event.target.checked);
    },
    render: function() {
      return (
        <li><input type="checkbox" value={this.props.name} onClick={this.filterByIndustry}/>{this.props.name} </li>
      )
    }
  })

  return {
    IndustryContainer: IndustryContainer
  }
})();
