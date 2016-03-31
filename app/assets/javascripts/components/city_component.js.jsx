var CityComponents = (function() {
  
  var Cities = React.createClass({
    getInitialState: function() {
      return {cities: []}
    },
    render: function() {
      var cityNode = this.props.cities.map(function(city) {
        return (
          <City city={city} />
        )
      });
      return (
        <ul>
          {cityNode}
        </ul>
      )
    }
  })
  
  var City = React.createClass({
    render: function() {
      return(
        <li>{this.props.city}</li>
      )
    }
  })
  
  return {
    Cities: Cities
  }
  
})()
