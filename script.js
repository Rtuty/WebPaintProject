const configMarker = {
    'lineSize': 5,
    'color': 'black'
}
const configPencil = {
    'lineSize': 2,
    'color': 'gray'
}
const configBrush = {
    'lineSize': 3.5,
    'color': 'red'
}

window.onload = () => {

    // Инициализируем html элементы
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const indicator = document.getElementById('indicator');
    const button = document.getElementById('deleteButton')
<<<<<<< HEAD
=======
    const historyDraw = document.getElementById('autoDraw')
>>>>>>> 123

    // Устанавливаем размер холста
    canvas.setAttribute('width',1500);
    canvas.setAttribute('height', 500);

    // Иннициализация свойств маркера
<<<<<<< HEAD
=======


>>>>>>> 123
    var buttonMarker = document.getElementById("markerId")
    buttonMarker.addEventListener("click", (e) => marker());
    function marker () {
        ctx.lineWidth = configMarker.lineSize;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = configMarker.color;
        ctx.fillStyle = configMarker.color;
    }

    // Иннициализация свойств карандаша
    var buttonPencil = document.getElementById("pencilId")
    buttonPencil.addEventListener("click",(e)=>pencil())
    function pencil () {
        ctx.lineWidth = configPencil.lineSize;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = configPencil.color;
        ctx.fillStyle = configPencil.color;
    }

    // Иннициализация свойств кисти
    var buttonBrush = document.getElementById("brushId")
    buttonBrush.addEventListener("click",(e)=>brush())
    function brush () {
        ctx.lineWidth = configBrush.lineSize;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = configBrush.color;
        ctx.fillStyle = configBrush.color;
    }

    var buttonDelete = document.getElementById("clear")
    buttonDelete.addEventListener("click", (e) => deleteDataCanvas());

    function deleteDataCanvas() {
        ctx.clearRect(0, 0, 1500, 500);
    }


    var isRec = false,
        newDraw = false,
        posX = [],
        posY = []

    // При нажатии на мышь
    canvas.addEventListener("mousedown", (e) => {
        if (isRec) return;
        clearCanvas();
        canvas.onmousemove = (e) => recordMousePos(e);
    });

    // Когда мышь отпущена
    canvas.addEventListener("mouseup", () => stopDrawing());

    // При нажатии на enter
    document.addEventListener("keydown", (e) => {
        if(e.code == "Enter") {
            if(!isRec) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                isRec = true;
                switchIndicator(false);
                autoDraw();
            }
        }
    })

    // Добавляем позиции X и Y мыши в массимы arrayX и arrayY
    function recordMousePos(e) {
<<<<<<< HEAD
        posX.push(e.clientX-10);
        posY.push(e.clientY-45);
        drawLine(e.clientX-10, e.clientY-45);
=======
        posX.push(e.clientX-20);
        posY.push(e.clientY-45);
        drawLine(e.clientX-20, e.clientY-45);
>>>>>>> 123
    }

    // Рисование линий
    function drawLine(x, y) {
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    // Очистить холст
    function clearCanvas() {
        if(newDraw) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            newDraw = false;
            if(sketch != null) {
                sketch.style.visibility = 'visible';
            }
        }
        ctx.beginPath();
    }

    // Остановка рисования
    function stopDrawing() {
        canvas.onmousemove = null;
        posX.push(undefined);
        posY.push(undefined);
    }

    // Изменить цвет индикатора
    function switchIndicator(enable) {
        if(enable) {
            indicator.classList.add('isWrite');
        }else {
            indicator.classList.remove('isWrite');
        }
    }
<<<<<<< HEAD

    // Автоматическое рисование
    function autoDraw() {
        var sketch = document.getElementById("sketch");
        var x = posX;
        var y = posY;

        var drawing = setInterval(() => {
            var currentX = x.shift();
            var currentY = y.shift();
            if (x.length <= 0 && y.length <= 0) {
                clearInterval(drawing);
                switchIndicator(true);
                isRec = false;
                newDraw = true;
            }
            else {
                if(currentX == undefined && currentY == undefined) {
                    ctx.beginPath();
                }
                else {
                    drawLine(currentX, currentY);
                }
            }
        }, 40);

        if(sketch != null) {
            sketch.style.visibility = 'hidden';
=======
    //Кнопка для просмотра истории рисования
    var buttonDrawHistory = document.getElementById("autoDraw")
    buttonDrawHistory.addEventListener("click",(e)=>autoDraw())
    {   // Автоматическое рисование
        function autoDraw() {
            var sketch = document.getElementById("sketch");
            var x = posX;
            var y = posY;

            var drawing = setInterval(() => {
                var currentX = x.shift();
                var currentY = y.shift();
                if (x.length <= 0 && y.length <= 0) {
                    clearInterval(drawing);
                    switchIndicator(true);
                    isRec = false;
                    newDraw = true;
                } else {
                    if (currentX == undefined && currentY == undefined) {
                        ctx.beginPath();
                    } else {
                        drawLine(currentX, currentY);
                    }
                }
            }, 40);

            if (sketch != null) {
                sketch.style.visibility = 'hidden';
            }
>>>>>>> 123
        }
    }
}