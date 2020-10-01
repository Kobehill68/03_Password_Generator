# 03_Password_Generator

## Project Goal
 Make a appliction employees can use to generate a randomized password based on the crites they selected.     
 The appliction will run in the browser and features HTML and CSS that is powered by JavaScript. 
 The application needs to have a clean user interface. 

    


## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Solution
I used power of javascript to implement the desired application logic. So when the user clicks the generate password button they will first be prompted the enter there desired password length which has to  be 8 to 128 characters. There is input valdation to make sure the length is correct. After the user chooses ther password length then they will recive a series of question that are specificto the diffrent character types they can have in there password. They can choose from Upper case, lower case, special, and number characters.

When the user is done answering the last question there answers are looked at to make sure they have at least on e of the character set in there password. If not the user is aterted that they have to have at least one selection, and then the user has to to start over again by choosing there password length.

When the criteria for the password has been met then the generatePassword() funtion combines the users selection and there respective arrays into on array using combineArray.

When the loop is complete the new password that has just been generated it will appear in the index.html UI on the webpage for the user. But if the user clicks the generate password button agian the procces will start over again. And this is so you can generate multiple password with in the same session on the Browser. 


## Link to the live webpage
Here is the link to the deployed application.
 https://kobehill68.github.io/03_Password_Generator/.




## Live Appliction Image
This is screenshot of the deployed application

![](images/password-generator.png)



## Sources 
https://www.w3schools.com/ & https://developer.mozilla.org/
