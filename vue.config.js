module.exports = {
    pages: {
        home: {
            entry: 'src/pages/home/main.js',
            template: 'public/index.html',
            filename: 'home.html',
            title: 'Home Page'
        },
        about: {
            entry: 'src/pages/about/main.js',
            template: 'public/index.html',
            filename: 'about.html',
            title: 'About Page'
        },
        homework: {
            entry: 'src/pages/homework/main.js',
            template: 'public/index.html',
            filename: 'homework.html',
            title: 'Homework Page'
        },
        classes: {
            entry: 'src/pages/classes/main.js',
            template: 'public/index.html',
            filename: 'classes.html',
            title: 'Classes Page'
        }
        // about: 'src/pages/about/main.js',
        // classes: 'src/pages/classes/main.js', //schedule
        // homework: 'src/pages/homework/main.js' //todo list

    }
}