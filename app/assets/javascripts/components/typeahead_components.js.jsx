var TypeaheadComponents = (function(){
  
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
  
  return {
    Typeahead: Typeahead
  }
})();
