const age = 24;
// stored all the information inside ./git folder that is hidden;

// by typing git add index.js i am telling the vcs to track the index.js file from now .
// untill then it was untracked  :
// if am removing something as well it also being tracked

// by typing git diff its telling me what are the changes in the file 

// lets add the initial commit by typing git commit -m "initial commit"
// to check history of commit 
// git log command 


// adding some other code 
function print(){
    console.log("print function called");
}

// git log --oneline 
// git blame index.js // to show line by line that which change is done by whom?

// now learn about staging area 
// now in this state all my commits are done and i am adding these text
// now entering git status
// all that we have changed in our local system is 
// in midified .. now if we commit something, there is nothing in the staging area . 
// so it is empty staging area 
// to make our modification in the staging area 
// we write git add . || git add filename


// now we will learn how we will revert back 
// now doing a commit so that i can revert back to the previous commit again
// git reset --hard address 


// another way fo revert 
// now making a function and commit it and after this commit 
// i will delete the function and would commit it 

// so my git log would be like 
/**   
 * head=> function removed
 *        |
 *    function added 
 *        |
 *    old commits 
 */

// now you want that what ever you have done in the function removed commit it sould be undo
// git revert idOfcommit


// adding a function 
function showName(){
    console.log("Rohan");
}


// deleted showAge function and added this comment 

// adding some another text
// so that we can commit and add some commit to the VCS

function permanent(){
    console.log("this function is permanent");
}

// adding another text to incrase VCS commit and logs 
function anotherPermanentFunction(){
    console.log("another parment function");
}

// now in this point i want to delete a function and add some more commit then ,
// i will revert back to that commit so that that function would get back 


// adding some other commit 
function anotherCommit(){
    console.log("another commit added");
}