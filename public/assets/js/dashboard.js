// Day at top of page//
var datetime = moment().format("dddd, MMMM Do YYYY");
time = $("#currentDay");
time.text(datetime);
let currentDay = moment().format('dddd');

var currentime = moment().format('LT');
var currentHour = (moment().get('hour'));
var input = $(".input");
var past = $(".past");