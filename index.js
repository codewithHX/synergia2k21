const data = {
  ECC1903051: "Shreya Agrahari",
  ECC1910036: "Shraddha Sonkar",
  ECC1905061: "Khushi Kesarwani",
  ECC1905045: "Sakshi Jain",
  ECC1905046: "Abhijeet Kushwaha",
  ECC1905032: "Om Jaiswal",
  ECC1905043: "Stuti Singh",
  ECC1905535: "Siddarth Tiwari",
  ECC1905013: "Ambiya Absar",
  ECC1905021: "Harsh Massey",
  ECC1905017: "Ashish Bhushan Kumar",
  ECC1905048: "Dharmendra Singh",
  ECC1905015: "Piyush Singh",
  ECC1905005: "Anurag Singh Yadav",
  ECC1905030: "Anushka Jaiswal",
  ECC1905062: "Farheen Sajid",
  ECC1905040: "Pradeep Kumar",
  ECC1905056: "Ankita Mishra",
  ECC1905029: "Vishul Kumar",
  ECC1905016: "Sangam Singh Yadav",
  ECC2005050: "Kartikey Tripathi",
  ECC2005046: "Kajal singh",
  ECC2005014: "Shruti Srivastava",
  ECC2005059: "Sameeha Mustafa",
  ECC2005031: "Vaibhav Pandey",
  ECC2005045: "Prerna Singh",
  ECC2005044: "Shreya sharma",
  ECC2005042: "Shristee Jaiswal",
  ECC2005024: "Rishika Kesarwani",
  ECC2005039: "Shipra Mishra",
  ECC2005026: "Minakshi Srivastava",
  ECC2005103: "Akshat Srivastava",
  ECC2005002: "Khadija Nizami",
  ECC2005048: "Kanishk singh",
  ECC2005025: "Lavkush Kumar yadav",
  ECC2005055: "Anjali Singh",
  ECC2005054: "Ansh Kapil",
  ECC2005015: "Ajay Mishra",
  ECC2005049: "Ujjawal Shrivastava",
  ECC2005040: "Shikhar mishra",
  ECC2005009: "Saniya Masood",
};

const generatePDF = async (name) => {
  const { PDFDocument, rgb } = PDFLib;

  const exBytes = await fetch("assets/invite.pdf").then((res) => {
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

  let xcord = 170;
  let ycord = 150;
  if (name.length > 12) {
    xcord = 125;
  }
  pg.drawText(name, {
    x: xcord,
    y: ycord,
    font: myFont,
  });

  const x = await pdfDoc.save();

  const uri = await pdfDoc.saveAsBase64({ dataUri: true });
  saveAs(uri, name), { autoBom: true };
};

function error() {
  console.log("Wrong input");
}
const inputs = document.querySelectorAll("input");
const fname = document.getElementById("name");
const roll_no = document.getElementById("rno");
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const val = roll_no.value.toUpperCase();
  if (data[val] != undefined) {
    generatePDF(data[val]);
    alert("File downloaded started");
  } else {
    alert("wrong input");
  }
  inputs.forEach((x) => (x.value = ""));
});
