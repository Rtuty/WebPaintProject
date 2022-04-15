const configMarker = {
    'lineSize': 5,
    'color': 'black'
}

const configPencil = {
    'lineSize': 2,
    'color': 'gray'
}

window.onload = () => {

    // Инициализируем html элементы
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const indicator = document.getElementById('indicator');
    const button = document.getElementById('deleteButton')

    // Устанавливаем размер холста
    canvas.setAttribute('width',500);
    canvas.setAttribute('height', 500);

    // Инициализируем стиль кисти
    ctx.lineWidth = configMarker.lineSize;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = configMarker.color;
    ctx.fillStyle = configMarker.color;

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

    // При нажатии на пробел
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
        posX.push(e.clientX);
        posY.push(e.clientY);
        drawLine(e.clientX, e.clientY);
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
        }
    }
}