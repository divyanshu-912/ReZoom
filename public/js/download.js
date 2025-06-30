//help taken from internet for this file 

// document.getElementById("downloadPDF").addEventListener("click", () => {
//   const resume = document.getElementById("container"); // ✅ DOM se element liya

//   html2canvas(resume, { scale: 2 }).then(canvas => {
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jspdf.jsPDF("p", "mm", "a4");
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
//     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save("resume.pdf");
//   });
// });


document.getElementById("downloadPDF").addEventListener("click", () => {
  const resume = document.getElementById("container");
  const name = document.getElementById("name");
  html2canvas(resume, { scale: 2 }).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jspdf.jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    // First page
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    // Add pages if needed
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save(`MyResume.pdf`);
  });
});
