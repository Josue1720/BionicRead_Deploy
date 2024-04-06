
function convertToBionic() {
            const inputText = document.getElementById('inputTextArea').value;
            const words = inputText.split(' ');

            const bionicText = words.map(word => {
                if (word.length >= 3) {
                    return `<strong>${word.substr(0, 3)}</strong>${word.substr(3)}`;
                } else {
                    return `<strong>${word}</strong>`;
                }
            }).join(' ');

            document.getElementById('outputTextArea').innerHTML = bionicText;
        }
function handleBionifyClick() {
    const bionifiedText = convertToBionic();
    const outputTextArea = document.getElementById('outputTextArea');
    outputTextArea.innerHTML = bionifiedText;

            // Calculate the new height based on the content
    const newHeight = outputTextArea.scrollHeight + 40; // Add extra space for padding
            
            // Update the box height
    document.getElementById('outputContainer').style.height = `${newHeight}px`;
        }
/* function downloadPDF() {
            const bionicText = document.getElementById('outputTextArea').innerHTML;
            const pdf = new jsPDF();
            
            // Add bionic text to the PDF
            pdf.text(15, 15, bionicText);
            
            // Download the PDF
            pdf.save('bionic_text.pdf');
        } */
function clearInput(){
    document.getElementById('inputTextArea').value = '';
    document.getElementById('outputTextArea').innerHTML = '';
}

function copy() {
    const outputTextArea = document.getElementById('outputTextArea');
    const range = document.createRange();
    range.selectNode(outputTextArea);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        document.execCommand('copy');
        alert('Copied to Clipboard!');
    } catch (err) {
        console.error('Unable to copy to clipboard', err);
        alert('Error copying to clipboard. Please try again.');
    } finally {
        selection.removeAllRanges();
    }
}

const printBtn = document.getElementById('print')
printBtn.addEventListener('click', function(){
    print();
})