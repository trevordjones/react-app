var IndustryComponents = (function() {
  
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

  return {
    IndustryContainer: IndustryContainer
  }
})();
