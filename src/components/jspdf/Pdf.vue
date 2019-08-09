<template>
  <div>
    <button @click="createPDF">PDF</button>
    <div>
      <button @click="downloadWithCSS">Download PDF WITH CSS</button>
      <br />
      <br />
      <button @click="download">Download PDF WITHOUT CSS</button>
      <div ref="content" style="width: 650px">
        <p class="colorText">
          Ciudad de México, a __ de ______________ de 2019
        </p>
        <p>
          Dra. María del Carmen de la Peza Casares Secretaria Técnica del Fondo
          Institucional CONACyT (FOINS) Presente
        </p>
        <p>
          De conformidad con las Bases y Términos de Referencia de la
          Convocatoria “Ciencia de Frontera 2019, presento la propuesta N° ____
          titulada ________________________, la cual estará a cargo del (la)
          Dr(a). ___________________ adscrito(a) al (a
          la)_____(Institución)____________, y que participa en la modalidad de
          ________________. Manifiesto a usted que en caso de resultar aprobada
          la propuesta y se le otorgue financiamiento para el desarrollo de la
          misma, el (la) ___________(Institución)___________________ se
          compromete a cumplir con:
        </p>

        <ul>
          <li>
            El compromiso de brindar el apoyo institucional requerido para el
            desarrollo de la investigación propuesta y poner a disposición del/a
            responsable técnico/a, y los participantes en la propuesta, la
            infraestructura existente requerida para la realización de la
            propuesta.
          </li>
          <li>
            La congruencia entre la propuesta y la(s) línea(s) de generación del
            conocimiento, o su equivalente, identificadas en el plan de
            desarrollo de la Institución.
          </li>
          <li>
            El compromiso de brindar el apoyo académico requerido para la
            formación integral y oportuna de los/las doctores/as y maestros/as
            considerados/as en la propuesta.
          </li>
          <li>
            Que el equipo autorizado (que formará parte del activo
            institucional) quedará a disposición para ser utilizado por el
            personal académico, las Cátedras CONACYT y los/las estudiantes
            participantes de la propuesta, pero que será de uso general para
            otros/as profesores/as investigadores/as y personal calificado de la
            Institución
          </li>
          <li>Designar a un/a responsable administrativo/a</li>
          <li>
            Que la propuesta que presenta no tiene o ha tenido financiamiento de
            un programa, convocatoria o convenio con el CONACYT.
          </li>
          <li>
            Conocer la normatividad que le aplique al proyecto tanto en su parte
            técnica como administrativa.
          </li>
        </ul>

        <p>
          Asimismo, se hace de su conocimiento que se dará cumplimiento con lo
          establecido en las Reglas de Operación del Fondo Institucional (FOINS)
          vigentes, el Convenio de Asignación de Recursos, y la Convocatoria y
          sus Términos de Referencia.
          <br />
          Atentamente
        </p>
        <p>
          Grado y Nombre del Representante Legal
          <br />
          Firma (Será generada por el sistema)
        </p>
        <p style="background-color: red;">Hello Vue in CodeSandbox!</p>
        <p style="background-color: blue;">Hello Vue in CodeSandbox!</p>
        <p style="background-color: green;">Hello Vue in CodeSandbox!</p>
        <p style="background-color: black;">Hello Vue in CodeSandbox!</p>
        <img
          src="https://icdn4.digitaltrends.com/image/digitaltrends_es/wonder-woman-g2-375x250.jpg"
        />
      </div>
    </div>
  </div>
</template>
<script>
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default {
  methods: {
    createPDF() {
      let pdfName = "test";
      var doc = new jsPDF();
      doc.text("Hello World", 10, 10);
      doc.addHTML("<div>Add HTML</div>");
      var imgData = "";
      console.log(imgData);
      // doc.setFontSize(40);
      // doc.text(30, 20, 'Hello world!');
      doc.addImage(imgData, "JPEG", 15, 40, 180, 160);
      /*doc.fromHTML(
          "<div><table><tr><td style='color:red'>COL</td><td>COL</td><td>COL</td><td>COL</td></tr></table></div>"
        , 25  // x coord
        , 25  // y coord
        , {
              'width': 550 // was 7.5, max width of content on PDF
            
        }
    );*/

      doc.save(pdfName + ".pdf");
    },
    downloadWithCSS() {
      const doc = new jsPDF();
      /** WITH CSS */
      var canvasElement = document.createElement("canvas");
      html2canvas(this.$refs.content, { canvas: canvasElement }).then(function(
        canvas
      ) {
        const img = canvas.toDataURL(
          "https://icdn4.digitaltrends.com/image/digitaltrends_es/wonder-woman-g2-375x250.jpg"
        );
        doc.addImage(img, "JPEG", 20, 20);
        doc.save("sample.pdf");
      });
    },
    download() {
      const doc = new jsPDF();
      /** WITHOUT CSS */
      const contentHtml = this.$refs.content.innerHTML;
      doc.fromHTML(contentHtml, 15, 15, {
        width: 170
      });
      doc.save("sample.pdf");
    }
  }
};
</script>
<style>
.colorText {
  color: red;
  background-color: aqua;
}
</style>
