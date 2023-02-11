var dropZone = document.getElementById('drop-zone');
var fileInput = document.getElementById('midiFile');
var curtain = document.getElementById('curtain');

var dragdropMessage = document.getElementById('dragdrop-message')


dropZone.addEventListener('dragover', function (e) {
    e.stopPropagation();
    e.preventDefault();
    curtain.style.display = 'block';
}, false);

curtain.addEventListener('dragleave', function (e) {
    e.stopPropagation();
    e.preventDefault();
    curtain.style.display = 'none';
}, false);

dropZone.addEventListener('drop', function (e) {
    e.stopPropagation();
    e.preventDefault();
    curtain.style.display = 'none';
    var files = e.dataTransfer.files; //ドロップしたファイルを取得
    if (files.length > 1) return alert('アップロードできるファイルは1つだけです。');
    fileInput.files = files; //inputのvalueをドラッグしたファイルに置き換える。

    if ("createEvent" in document) {
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        fileInput.dispatchEvent(evt);
    }
    else
        fileInput.fireEvent("onchange");
}, false);

fileInput.addEventListener('change', () => {
    curtain.style.display = 'none';
    dragdropMessage.style.display = 'none'
})
