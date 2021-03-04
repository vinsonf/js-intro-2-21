let on = true;
const onButton = document.querySelector('#on-button');
const lessonsDiv = document.querySelector('#lessons');
const stepsDiv = document.querySelector('#steps');
const lessons = ['test'];
let editorInstance = null;
let parsedUrl = new URL(window.location.href);
let urlLesson = parsedUrl.searchParams.get('lesson');
let urlStep = parsedUrl.searchParams.get('step');
lessons.forEach(name => {
    const button = document.createElement('button');
    button.addEventListener('click', () => {
        // loadLesson(name);
        updateUrl(name);
    });
    button.innerHTML = name;
    if (name === urlLesson) {
        button.classList.add('active')
    }
    lessonsDiv.appendChild(button);
});


if (urlLesson) {
    loadLesson(urlLesson)
        .then(data => {
            data.filter(x => !x[0].startsWith(' Code inject')).forEach((item) => {
                loadStep(item[0], item[1]);
                if (item[0] === urlStep) {
                    editorInstance.setValue(item[1].trim());
                }
            });
        });
}

function updateUrl(lessonName, stepName) {
    parsedUrl = new URL(window.location.href);
    if (lessonName)
        parsedUrl.searchParams.set('lesson', lessonName);
    if (stepName)
        parsedUrl.searchParams.set('step', stepName || '');
    window.location.href = parsedUrl.href;
}


function loadStep(stepName) {
    const button = document.createElement('button');
    button.addEventListener('click', () => {
        updateUrl(null, stepName);
    });
    button.innerHTML = stepName;
    if (stepName === urlStep) {
        button.classList.add('active')
    }
    stepsDiv.appendChild(button);
}


function loadLesson(name) {
    return new Promise(function (resolve, reject) {
        stepsDiv.innerHTML = '';
        fetch(`js/tuts/${name}/steps.html`)
            .then(data => data.text())
            .then(data => data.split('<!--').filter(x => x).map(x => x.split('-->')))
            .then(data => {
                resolve(data);
            });
    });
}


function toggle() {
    on = !on;
    onButton.innerHTML = on ? 'OFF' : 'ON';
    if (on) {
        update();
    }
}

function update() {
    if (!on) return;
    var idoc = document.getElementById('iframe').contentWindow.document;

    idoc.open();
    idoc.write(editor.getValue());
    idoc.close();
}

function setupEditor() {
    window.editor = ace.edit('editor');
    editor.setTheme('ace/theme/monokai');
    editor.getSession().setMode('ace/mode/html');
    editor.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <script>
        
    </script>
</body>
</html>`, 1); //1 = moves cursor to end

    editor.getSession().on('change', function () {
        update();
    });

    editor.focus();


    editor.setOptions({
        fontSize: '16pt',
        showLineNumbers: false,
        showGutter: false,
        vScrollBarAlwaysVisible: true,
        enableBasicAutocompletion: false, enableLiveAutocompletion: false
    });

    editor.setShowPrintMargin(false);
    editor.setBehavioursEnabled(false);
    return editor;
}

editorInstance = setupEditor();
update();

function getDifference(a, b) {
    let i = 0;
    let j = 0;
    let result = '';

    while (j < b.length) {
        if (a[i] != b[j] || i == a.length)
            result += b[j];
        else
            i++;
        j++;
    }
    return result;
}
