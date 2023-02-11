var dropZone = document.getElementById('drop-zone');
var fileInput = document.getElementById('midiFile');
var curtain = document.getElementById('curtain');

console.log('cur', curtain)

dropZone.addEventListener('dragover', function (e) {
    e.stopPropagation();
    e.preventDefault();
    console.log('cc', curtain, curtain.style)
    curtain.style.display = 'block';
}, false);

dropZone.addEventListener('dragleave', function (e) {
    e.stopPropagation();
    e.preventDefault();
    curtain.stlye.display = 'none';
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
})
