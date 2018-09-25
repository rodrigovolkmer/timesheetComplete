const gulp = require('gulp');
const webdriver = require('gulp-webdriver');
const prompt = require('gulp-prompt');

// set a message to the user and questions
// to build environment variables
gulp.task('fillTimesheet', function () {
    return gulp.src('wdio.conf.js')
    .pipe(prompt.prompt([{
        name: 'user',
        type: 'input',
        message: 'User to login to the Sociall App?',
        default: process.env.SOCIALL_EMAIL
    }, {
        name: 'password',
        type: 'password',
        message: 'Password?'
    }, {
        name: 'daysMissed',
        type: 'checkbox',
        message: 'Which day did you NOT work this week?',
        choices: ['I worked all days this week', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        default: 'I worked all days this week'
    // }, {
    //     name: 'approver',
    //     type: 'list',
    //     message: 'Who should approve your timesheet?',
    //     choices: ['Sara Mulholland', 'Jade Mulholland', 'God Himself', 'Jesus Crist', 'The Incredible Hulk', 'The L3g3nd']
    }], function(answers) {
        process.env.XEROEMAIL = answers.user;
        process.env.XEROPASSWORD = answers.password;
        process.env.DAYSMISSED = answers.daysMissed;
        process.env.APPROVER = 'Sara Mulholland';
        console.log(answers.approver)
    }))
    .pipe(prompt.confirm({
        message: 'Continue?',
        default: true
    }))
    .pipe(webdriver());
});

