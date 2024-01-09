import React from 'react'
import { faGetPocket } from '@fortawesome/free-brands-svg-icons/faGetPocket';
export default function DownloadPDF(props) {
    const dowloadPDF = () => {
        const pdfUrl = "Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Sudarshan_Frontend.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <h4 className='link-container'><a onClick={dowloadPDF}>{props.textToShow}</a></h4>
    )
}
