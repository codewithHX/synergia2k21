import { PDFDocument, rgb } from "pdf-lib";
import { readFileSync, writeFileSync } from "fs";
import fontkit from "@pdf-lib/fontkit";

async function createInvite() {
  const uint8Array = readFileSync("./assets/Boys_invite.pdf");
  const doc = await PDFDocument.load(uint8Array);

  const page = doc.getPage(0);
  doc.registerFontkit(fontkit);
  const fontBytes = readFileSync("./assets/font.ttf");
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
  writeFileSync("./test.pdf", await doc.save());
}
export { createInvite };
