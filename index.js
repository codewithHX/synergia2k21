const generatePDF = async (name) => {
  const { PDFDocument, rgb } = PDFLib;
  const exBytes = await fetch("assets/Boys_invite.pdf").then((res) => {
    return res.arrayBuffer();
  });
  const exFont = await fetch("assets/font.ttf").then((res) =>
    res.arrayBuffer()
  );

  const pdfDoc = await PDFDocument.load(exBytes);
  pdfDoc.registerFontkit(fontkit);
  const myFont = await pdfDoc.embedFont(exFont);

  const page = pdfDoc.getPages();
  pg = page[0];

  pg.drawText(name, {
    x: 170,
    y: 135,
    font: myFont,
    color: rgb(1, 0, 0.5),
  });

  const uri = await pdfDoc.saveAsBase64({ dataUri: true });
  saveAs(uri, "invitation.pdf"), { autoBom: true };
};

const inputs = document.querySelectorAll("input");
const fname = document.getElementById("name");
const roll_no = document.getElementById("rno");
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const val = fname.value;
  inputs.forEach((x) => (x.value = ""));
  generatePDF(val);
});
