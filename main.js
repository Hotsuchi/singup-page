let setLoginData = ()=>{
    let form = document.querySelector('form');    
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        let fname = e.target.fname.value;
        let email = e.target.email.value;
        let uname = e.target.uname.value;
        let pass = e.target.pass.value;
        
        let ls = JSON.parse(localStorage.getItem('loginData')) ?? [];       
        ls.push({
            fname : fname,
            email : email,
            uname : uname,
            pass : pass
        })
        localStorage.setItem('loginData',JSON.stringify(ls));
        
        e.target.reset();
    })
}
setLoginData();
