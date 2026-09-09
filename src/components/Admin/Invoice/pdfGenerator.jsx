import PDFDocument from 'pdfkit';
import { Buffer } from 'buffer';

const formatCurrency = (amount) => {
  return amount.toFixed(2);
};

const numberToWords = (num) => {
  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  
  if (num === 0) return 'Zero';
  
  const numStr = Math.floor(num).toString();
  const numLength = numStr.length;
  
  if (numLength > 5) return 'Number too large';
  
  let words = '';
  
  if (numLength === 5 || numLength === 4) {
    const thousands = parseInt(numStr.slice(0, -3));
    if (thousands > 0) {
      words += (thousands < 20 ? ones[thousands] : tens[Math.floor(thousands / 10)] + ' ' + ones[thousands % 10]) + ' Thousand ';
    }
    const remainder = parseInt(numStr.slice(-3));
    if (remainder > 0) {
      words += (remainder < 100 ? '' : ones[Math.floor(remainder / 100)] + ' Hundred ') + 
               (remainder % 100 > 0 ? (remainder % 100 < 20 ? ones[remainder % 100] : tens[Math.floor((remainder % 100) / 10)] + ' ' + ones[(remainder % 100) % 10]) : '');
    }
  } else if (numLength === 3) {
    words += ones[Math.floor(num / 100)] + ' Hundred ';
    const remainder = num % 100;
    if (remainder > 0) {
      words += (remainder < 20 ? ones[remainder] : tens[Math.floor(remainder / 10)] + ' ' + ones[remainder % 10]);
    }
  } else if (numLength === 2) {
    words += (num < 20 ? ones[num] : tens[Math.floor(num / 10)] + ' ' + ones[num % 10]);
  } else {
    words += ones[num];
  }
  
  return words.trim();
};

export const generatePDF = (data) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ size: 'A4', margin: 50 });
      let buffers = [];
      
      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => {
        const pdfData = Buffer.concat(buffers);
        resolve(pdfData);
      });
      
      // Company Header
      doc.fontSize(16)
         .font('Helvetica-Bold')
         .text('SPY D TECHNOLOGY', { align: 'center' });
      
      doc.fontSize(8)
         .font('Helvetica')
         .text('505/B-508, Fifth Floor, Sandhya Techno-1, Raidurg, Pan Maktha Village,', { align: 'center' })
         .text('Serilingampally Mandal, RR Dist, Hyderabad-500081', { align: 'center' })
         .text('CIN: U62020TS2023PTC173263', { align: 'center' })
         .moveDown();
      
      // Title
      doc.fontSize(14)
         .font('Helvetica-Bold')
         .text(`Payslip for the Month of ${data.month}, ${data.year}`, { align: 'center' })
         .moveDown();
      
      // Employee Details Table
      const tableTop = doc.y;
      const colWidths = [120, 140, 120, 140];
      
      // Helper function to draw a cell
      const drawCell = (x, y, width, height, text, isHeader = false) => {
        doc.rect(x, y, width, height).stroke();
        doc.fontSize(8)
           .font(isHeader ? 'Helvetica-Bold' : 'Helvetica')
           .text(text, x + 5, y + 5, { width: width - 10, align: 'left' });
      };
      
      // Row 1
      const rowHeight = 25;
      let y = tableTop;
      
      // Name
      drawCell(50, y, colWidths[0], rowHeight, 'Name:', true);
      drawCell(50 + colWidths[0], y, colWidths[1], rowHeight, data.name, false);
      // Employee ID
      drawCell(50 + colWidths[0] + colWidths[1], y, colWidths[2], rowHeight, 'Employee ID:', true);
      drawCell(50 + colWidths[0] + colWidths[1] + colWidths[2], y, colWidths[3], rowHeight, data.employeeId, false);
      
      // Row 2
      y += rowHeight;
      drawCell(50, y, colWidths[0], rowHeight, 'Designation:', true);
      drawCell(50 + colWidths[0], y, colWidths[1], rowHeight, data.designation, false);
      drawCell(50 + colWidths[0] + colWidths[1], y, colWidths[2], rowHeight, 'Bank Name:', true);
      drawCell(50 + colWidths[0] + colWidths[1] + colWidths[2], y, colWidths[3], rowHeight, data.bankName, false);
      
      // Row 3
      y += rowHeight;
      drawCell(50, y, colWidths[0], rowHeight, 'Department:', true);
      drawCell(50 + colWidths[0], y, colWidths[1], rowHeight, data.department, false);
      drawCell(50 + colWidths[0] + colWidths[1], y, colWidths[2], rowHeight, 'Bank Account No.:', true);
      drawCell(50 + colWidths[0] + colWidths[1] + colWidths[2], y, colWidths[3], rowHeight, data.bankAccount, false);
      
      // Row 4
      y += rowHeight;
      drawCell(50, y, colWidths[0], rowHeight, 'Location:', true);
      drawCell(50 + colWidths[0], y, colWidths[1], rowHeight, data.location, false);
      drawCell(50 + colWidths[0] + colWidths[1], y, colWidths[2], rowHeight, 'PAN No.:', true);
      drawCell(50 + colWidths[0] + colWidths[1] + colWidths[2], y, colWidths[3], rowHeight, data.panNumber, false);
      
      // Row 5
      y += rowHeight;
      drawCell(50, y, colWidths[0], rowHeight, 'Effective Work Days:', true);
      drawCell(50 + colWidths[0], y, colWidths[1], rowHeight, data.effectiveWorkDays, false);
      drawCell(50 + colWidths[0] + colWidths[1], y, colWidths[2], rowHeight, 'UAN No.:', true);
      drawCell(50 + colWidths[0] + colWidths[1] + colWidths[2], y, colWidths[3], rowHeight, data.uanNumber, false);
      
      // Row 6
      y += rowHeight;
      drawCell(50, y, colWidths[0], rowHeight, 'LOP:', true);
      drawCell(50 + colWidths[0], y, colWidths[1], rowHeight, data.lop, false);
      
      // Earnings and Deductions Table
      y += rowHeight + 20;
      
      const tableWidth = 500;
      const earningsColWidth = 120;
      const amountColWidth = 100;
      
      // Headers
      doc.fontSize(10)
         .font('Helvetica-Bold')
         .text('Earnings', 50, y, { width: earningsColWidth, align: 'center' });
      doc.text('Amount', 50 + earningsColWidth, y, { width: amountColWidth, align: 'center' });
      doc.text('Deductions', 50 + earningsColWidth + amountColWidth + 80, y, { width: earningsColWidth, align: 'center' });
      doc.text('Amount', 50 + earningsColWidth + amountColWidth + 80 + earningsColWidth, y, { width: amountColWidth, align: 'center' });
      
      y += 5;
      doc.moveTo(50, y).lineTo(550, y).stroke();
      y += 5;
      
      // Earnings and Deductions Data
      const earningsData = [
        ['Basic', data.basic],
        ['HRA', data.hra],
        ['Medical Allowance', data.medicalAllowance],
        ['Conveyance Allowance', data.conveyanceAllowance],
        ['Special Allowance', data.specialAllowance],
        ['Performance Bonus', data.performanceBonus]
      ];
      
      const deductionsData = [
        ['PF Employee', data.pfEmployee],
        ['PT', data.pt]
      ];
      
      let maxRows = Math.max(earningsData.length, deductionsData.length);
      let currentY = y;
      
      doc.fontSize(9).font('Helvetica');
      
      for (let i = 0; i < maxRows; i++) {
        // Earnings
        if (i < earningsData.length) {
          doc.text(earningsData[i][0], 50, currentY, { width: earningsColWidth - 10, align: 'left' });
          doc.text(formatCurrency(earningsData[i][1]), 50 + earningsColWidth, currentY, { width: amountColWidth, align: 'right' });
        }
        
        // Deductions
        if (i < deductionsData.length) {
          doc.text(deductionsData[i][0], 50 + earningsColWidth + amountColWidth + 80, currentY, { width: earningsColWidth - 10, align: 'left' });
          doc.text(formatCurrency(deductionsData[i][1]), 50 + earningsColWidth + amountColWidth + 80 + earningsColWidth, currentY, { width: amountColWidth, align: 'right' });
        }
        
        currentY += 18;
      }
      
      // Total line
      currentY += 5;
      doc.moveTo(50, currentY).lineTo(550, currentY).stroke();
      currentY += 5;
      
      // Totals
      const totalEarnings = earningsData.reduce((sum, item) => sum + item[1], 0);
      const totalDeductions = deductionsData.reduce((sum, item) => sum + item[1], 0);
      const netPay = totalEarnings - totalDeductions;
      
      doc.font('Helvetica-Bold');
      doc.text('Total Earnings (Rs)', 50, currentY, { width: earningsColWidth - 10, align: 'left' });
      doc.text(formatCurrency(totalEarnings), 50 + earningsColWidth, currentY, { width: amountColWidth, align: 'right' });
      
      doc.text('Total Deductions (Rs)', 50 + earningsColWidth + amountColWidth + 80, currentY, { width: earningsColWidth - 10, align: 'left' });
      doc.text(formatCurrency(totalDeductions), 50 + earningsColWidth + amountColWidth + 80 + earningsColWidth, currentY, { width: amountColWidth, align: 'right' });
      
      // Net Pay
      currentY += 25;
      doc.fontSize(10)
         .font('Helvetica-Bold')
         .text('Net Pay For The Month:', 50, currentY)
         .text(formatCurrency(netPay), 200, currentY);
      
      // Amount in words
      const words = numberToWords(netPay);
      doc.fontSize(8)
         .font('Helvetica')
         .text(`(Rupees ${words} Only)`, 50, currentY + 20);
      
      // Footer
      doc.fontSize(8)
         .text('This is a system generated payslip and does not require signature.', 50, 750, { align: 'center' });
      
      doc.end();
      
    } catch (error) {
      reject(error);
    }
  });
};