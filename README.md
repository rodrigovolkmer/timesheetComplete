
# Timesheet Fill

  

### Java JDK

First of all, Selenium server requires Java JDK to run on your computer.
 
Please check if you have Java JDK installed.

So on the command line, execute:

```
java -version
```

Min required is JDK 8 package

https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

  
  

### Installing this Repo:

Git Clone this repo and

```
npm install
```

### To execute:

```
npm run fillTimesheet
```

You will be prompted with a few questions before everytime the script runs.


### Important Note:

The automated script won't submit the timesheet for you. Instead, the scrip will *pause* on the submit button so you can review the entry and submit if everything is correct.

Please notice that the selection of the current or a specific work week is not supported by the script.

Xero allows only one work week to be selected and it's always the next week from the previous submitted/saved as draft. So therefore for the correct work week to be automatically selected, you can't have the current work week already saved as draft or already submitted.

So please *REVIEW THAT YOU ARE SUBMITTING THE CORRECT WORK WEEK*



If you have any improvements, please let me know