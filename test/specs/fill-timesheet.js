describe('Fill Timetable' , () => {

    function waitAndClick(selector) {
        $(selector).waitForVisible();
        $(selector).waitForEnabled();
        $(selector).click();
        browser.pause(500);
    }

    it('Login and fill Regular Timetable', () => {
        browser.url('https://payroll.xero.com/EmployeePortal?CID=!j4w6j')
        // fill email
        $('#email').setValue(process.env.XEROEMAIL);
        // fill password
        $('#password').setValue(process.env.XEROPASSWORD);

        // login
        $('#submitButton').click();
        
        // wait for timesheet button
        waitAndClick('#x-add-timesheet');
  
        // wait for week input
        waitAndClick('#PeriodID-inputCell + td div');

        // select current week
        waitAndClick('.x-boundlist-item');
        
        // click on Continue Button
        waitAndClick('button=Continue');
        
        // wait for page to load
        $('.timesheet-bar').waitForExist();
        waitAndClick('[class*="x-grid-data-row"] td:nth-of-type(1)');

        // and select Ordinary Hours
        waitAndClick('.x-form-arrow-trigger');
    
        // select ordinary hours
        $$('.x-boundlist-item')[0].click();
        
        browser.pause(500);
        const daysMissedArray = process.env.DAYSMISSED;

        for (let index = 4; index < 9 ; index++) {
            browser.pause(200);
            $$('tr[id*="record-ext-record"] td')[index].click();
            $('input.x-field-form-focus').waitForExist();
            $('input.x-field-form-focus').waitForEnabled();

            if (daysMissedArray.includes('Monday') && index === 4) {
                $('input.x-field-form-focus').setValue('0');
            } else if (daysMissedArray.includes('Tuesday') && index === 5) {
                $('input.x-field-form-focus').setValue('0');
            } else if (daysMissedArray.includes('Wednesday') && index === 6) {
                $('input.x-field-form-focus').setValue('0');
            } else if (daysMissedArray.includes('Thursday') && index === 7) {
                $('input.x-field-form-focus').setValue('0');
            } else if (daysMissedArray.includes('Friday') && index === 8) {
                $('input.x-field-form-focus').setValue('0');
            } else {
                $('input.x-field-form-focus').setValue('7.6');
            }
        }

        $('#x-submit').click()

        waitAndClick('#authoriserComboId-inputEl');

        $('.x-boundlist-list-ct ul').waitForVisible();

        let aprovalListLength = 6;
        for (let index = 1; index < aprovalListLength; index++) {
            let approver = $('.x-boundlist-list-ct ul li:nth-of-type('+index+')').getText();
            if (approver === process.env.APPROVER) {
                $('.x-boundlist-list-ct ul li:nth-of-type('+index+')').click();       
                index = aprovalListLength;
            }
        }

        $('#authoriserComboId-inputEl').click()

        console.log('================================================')
        console.log('')
        console.log('Script has paused for you to review and submit')
        console.log('')
        console.log('PLEASE MAKE SURE YOU ARE SUBMITTING THE CORRECT WEEK')
        console.log('as the selection of current work week is not yet supported')
        console.log('')
        console.log('Once your timesheet is submitted, ')
        console.log('Please end this run by pressing ctrl+C')
        console.log('')
        console.log('================================================')
        browser.pause();
        browser.debug();
    });
    
});
