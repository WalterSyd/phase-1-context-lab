// Function to create an employee record object from provided data
function createEmployeeRecord(array) {
    const employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return employee
}

// Function to create an array of employee records from an array
function createEmployeeRecords(array) {
    return array.map(createEmployeeRecord)
}

// Function to record a time in event for an employee on a specific date
function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    const timeIn = {
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    }
    this.timeInEvents.push(timeIn)
    return this
}

// Function to record a time out event for an employee on a specific date
function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    const timeOut = {
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    }
    this.timeOutEvents.push(timeOut)
    return this
}

// Function to calculate hours worked by an employee on a specific date
function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date)
    const timeOut = this.timeOutEvents.find(event => event.date === date)
    return (timeOut.hour - timeIn.hour) / 100
}

// Function to calculate wages earned by an employee on a specific date
function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

// Function to calculate total wages earned by an employee across all dates worked
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName)
}

// Function to find an employee by their first name in a source array
function calculatePayroll(array) {
    return array.reduce((total, employee) => total + allWagesFor.call(employee), 0)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!
 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}