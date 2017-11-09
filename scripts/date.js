// =============================================================================

// Make Date Function

// =============================================================================
var makeDate = function() {
    var d = new Date;
    var formattedDate = "";

    // Take that string and concatenate the current month of d
    formattedDate += (d.getMonth() + 1) + "_";
    // Next get the number of the day in the month from d and concatenate it to the formatted date string.
    formattedDate += d.getDate() + "_";
    // Finally, then get the full year, and add that to the formatted date string
    formattedDate += d.getFullYear();
    // Return the formatted date
    return formattedDate;
}

module.exports = makeDate;
