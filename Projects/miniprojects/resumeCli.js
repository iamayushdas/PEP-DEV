const inquirer = require('inquirer')
const cp = require('child_process')

function displayList(){
    inquirer
    .prompt([
        {
           type : 'list',
           name : 'selection',
           choices : ['About', 'Skills', 'Academics', 'Projects']
        }
    ])
    .then(function(ans){
       //  use user feedback  or whatever
       if (ans.selection == 'About') {
        console.log(`A passionate web developer
        who just found out that making websites and seeing the magic
        happen on the internet is what exites him the most`)
        displayNext();
       }
       else if (ans.selection == 'Skills'){
        console.log(`ReactJS, css ,sass ,javascript, cypress testing,Docker, VM, docusaurus, Github , Git, Gitlab, UI, Adobe XD, Figma`);
        displayNext();
       }

       else if (ans.selection == 'Academics') {
        cp.execSync('google-chrome https://drive.google.com/file/d/1D95WCao0c39sVYVHXRIaBH5WORs8r8wc/view?usp=sharing')
        displayNext();
       }
           
       else if (ans.selection == 'Projects') {
        cp.execSync('google-chrome https://github.com/iamayushdas')
        displayNext();
       }

    })
}

displayList()

// go back option

function displayNext(){
    inquirer
    .prompt([
        {
           type : 'list',
           name : 'selection',
           choices : ['Go back', 'exit']
        }
    ])
    .then(function(ans){
        if(ans.selection == 'Go back'){
            displayList();
        }else{
            console.log('Resume closed')
        }
    })
}