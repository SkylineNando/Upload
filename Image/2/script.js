function uploadImage() {
    const form = document.getElementById('upload-form');
    const fileInput = document.getElementById('file-input');
    const progressBar = document.getElementById('progress-bar');
    const progressStatus = document.getElementById('progress-status');

    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'upload.php');

    xhr.upload.addEventListener('progress', function (event) {
        if (event.lengthComputable) {
            const percent = (event.loaded / event.total) * 100;
            progressBar.value = percent;
            progressStatus.innerText = `Carregando: ${percent.toFixed(2)}%`;
        }
    });

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            progressStatus.innerText = 'Upload completo!';
        }
    };

    xhr.send(formData);
}
