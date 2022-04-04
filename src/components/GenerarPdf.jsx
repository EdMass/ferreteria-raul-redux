import jsPDF from "jspdf"

export const generarPDF = (factura) => {

    let doc = new jsPDF('p', 'pt')

    doc.setFontSize(22)
    doc.text('FERRETERIA DON RAUL', 20, 40)
    
    doc.setFontSize(16)
    doc.text('FACTURA', 20, 80)
    doc.setFontSize(14)
    doc.text(`Factura id: ${factura.id}`, 20, 100)
    doc.text(`Fecha: ${factura.fecha}`, 20, 120)
    doc.text(`Cliente nombre: ${factura.nombreCliente}`, 20, 140)
    doc.text(`Cliente documento: ${factura.idCliente}`, 20, 160)
    
    doc.setFontSize(16)
    doc.text(`PRODUCTOS `, 20, 220)

    doc.setFontSize(14)
    let ejeY = 220;
    factura.listaProductos.forEach((p, i) => {
        ejeY += 20
        doc.text(`${i+1}. ${p.nombre}  $${p.precio}  x   `, 40, ejeY)
    })

    doc.setFontSize(16)
    doc.text(`TOTAL:  $${factura.total}`, 20, ejeY + 40)
    
    doc.save(`factura_${factura.id}_${factura.fecha}.pdf`)

}