const LoginPage={
    toString(){
        return `
            <div id="main">
                <header>
                    Login
                </header>

                <section>
                    <form id="form">
                        <div class="field">
                            <input class="field__item" type="text" placeholder="email"/>
                        </div>  
                        <div class="field">
                            <input class="field__item" type="text" placeholder="password"/>
                        </div>
                    </form>
                </section>

                <footer>
                    <button class="buttom--sm">Signup</button>
                    <button class="buttom--sm">Login</button>
                </footer>  
            </div>
            
        `
    },
    addListeners(){

    }
}

export default LoginPage