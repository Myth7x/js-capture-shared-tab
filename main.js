async function main() {
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        const chunks = [];
  
        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                chunks.push(event.data);
            }
        };
  
        mediaRecorder.onstop = () => {
            const blob = new Blob(chunks, { type: 'video/mp4' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            const cur_Datetime = new Date();
            a.download = 'recording-' + cur_Datetime.toISOString().replace(/:/g, '-') + '.mp4';
            document.body.appendChild(a);
            a.click();
            URL.revokeObjectURL(url);
        };
  
        mediaRecorder.start();
        console.log('Recording started. Stop recording by calling stopRecording().');
        window.stopRecording = () => {
            mediaRecorder.stop();
        };
    } catch (err) {
        console.error('Error capturing from tab:', err);
    }
}
main();