interesting-js
==============
## in same week
```Javascript
var inSameWeek = (function() {
	var strToDate = function(dateStr) {
		dateStr += ''; 
		return new Date(dateStr.substr(0, 4), (dateStr.substr(4, 2)-1), dateStr.substr(6, 2));
	};
	return function() {
		var dateStrs = Array.prototype.slice.call(arguments),
			minDate = strToDate(Math.min.apply(Math, dateStrs)),
			maxDate = strToDate(Math.max.apply(Math, dateStrs));
		return (minDate.getDay()+(maxDate.getTime()-minDate.getTime())/86400000) <= 6;
	}
})()

inSameWeek("20141214", '20141216', '20141218', 20141220);
```
