import { PDFDocument, rgb } from "pdf-lib";
import fs from "fs";
import fontkit from "@pdf-lib/fontkit";

window.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Please ensure proper care of covid guidelines!!!");
});

async function createInvite() {
  const uint8Array = fs.readFileSync("./assets/Boys_invite.pdf");
  const doc = await PDFDocument.load(uint8Array);

  const page = doc.getPage(0);
  doc.registerFontkit(fontkit);
  const fontBytes = fs.readFileSync("./assets/font.ttf");
  const customFont = await doc.embedFont(fontBytes);
  const name = "Om Jaiswal";
  var xCoordinate;
  const len = name.length;
  console.log(len);
  if (len <= 13) {
    xCoordinate = 200;
  } else xCoordinate = 170;
  console.log(page.getHeight(), page.getWidth());
  page.drawText(name, {
    font: customFont,
    color: rgb(1, 0, 0.5),
    x: xCoordinate,
    y: 135,
    size: 36,
  });
  // Write the PDF to a file
  fs.writeFileSync("./test.pdf", await doc.save());
}
