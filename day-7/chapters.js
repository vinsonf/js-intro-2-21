
        function createHeader() {
            const header  = createElement('header', 'header', document.body);
            createElement('img', 'profilePic', header);
            createElement('img', 'logo', header);
        }

        function createSideMenu() {
            const sideMenu = createElement('nav', 'nav', document.body);
            createAnchor('Home', sideMenu);
            createAnchor('Contacts', sideMenu);
            createAnchor('About', sideMenu);
            createAnchor('Profile', sideMenu);
            createAnchor('Details', sideMenu);
        }

        function createMain() {
            const main = createElement('div', 'main', document.body);
            createButton('myButton', 'Click me', main, function () { alert('you clicked me')});
            createButton('myButton', 'Click me', main, function () { main.style.backgroundColor = 'blue'});
        }

        function createFooter() {
            const footer = createElement('div', 'footer', document.body);
            createAnchor('Facebook', footer)
        }