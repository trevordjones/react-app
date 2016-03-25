### Practice React App

This app is practice for filtering/searching through a database. I have Companies and Industries, which are joined together in a `has_many :through` relationship. There is a list of industries on one side of the page, with a checkbox, and a list of companies on the other. You can filter the companies by industry by clicking on the checkbox for that industry. Results are filtered, allowing you to quickly see which companies belong to which industries.

A user can also search by city. The search by city is typeahead, so a user can quickly see which cities are available to search by, as well as see which companies are in that city and match the selected industries.